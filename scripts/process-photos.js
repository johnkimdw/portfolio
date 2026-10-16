// Turns the original photos in photos/<collection>/ into small, fast web
// images and a data file the site imports. Runs automatically before
// `npm start` and `npm run build`; run it by hand with `npm run photos`.
//
// To add a dish: drop a photo into photos/cooking/ (.jpg .jpeg .png .webp
// .avif). iPhone .heic files can't be decoded here; export them as JPG first. Optionally give it a title/description in
// photos/cooking/captions.json; without one, the title comes from the
// filename (my_new-dish.jpg -> "My New Dish") and it shows first.
//
// Output (generated, git-ignored):
//   public/photos/<collection>/<name>-<width>.webp
//   src/data/generated/<collection>.json

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const COLLECTIONS = ['cooking'];
const WIDTHS = [480, 960]; // grid tile, full-size view
const EXTENSIONS = /\.(jpe?g|png|webp|avif)$/i;

// "Pan-fried Dumplings.jpg" is used as written; "garlic_noodles.jpg" becomes
// "Garlic Noodles"
const titleFromFile = (file) => {
  const name = path.parse(file).name;
  if (name.includes(' ')) return name;
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

async function processCollection(name) {
  const srcDir = path.join(ROOT, 'photos', name);
  const outDir = path.join(ROOT, 'public', 'photos', name);
  const dataFile = path.join(ROOT, 'src', 'data', 'generated', `${name}.json`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });

  const captionsFile = path.join(srcDir, 'captions.json');
  const captions = fs.existsSync(captionsFile) ? JSON.parse(fs.readFileSync(captionsFile, 'utf8')) : {};
  const all = fs.readdirSync(srcDir);
  for (const f of all.filter(f => /\.hei[cf]$/i.test(f))) {
    console.warn(`  skipping ${f}: HEIC isn't supported, save it as JPG instead`);
  }
  const files = all.filter(f => EXTENSIONS.test(f));

  // Order: new photos without captions first (newest first), then captions.json order
  const captioned = Object.keys(captions).filter(f => files.includes(f));
  const uncaptioned = files
    .filter(f => !captions[f])
    .sort((a, b) => fs.statSync(path.join(srcDir, b)).mtimeMs - fs.statSync(path.join(srcDir, a)).mtimeMs);

  const items = [];
  let made = 0;
  for (const file of [...uncaptioned, ...captioned]) {
    const input = path.join(srcDir, file);
    const base = path.parse(file).name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const srcMtime = fs.statSync(input).mtimeMs;
    const meta = await sharp(input).rotate().metadata();
    // .rotate() applies EXIF orientation; swap dims for rotated phone photos
    const portrait = (meta.orientation || 1) >= 5;
    const w = portrait ? meta.height : meta.width;
    const h = portrait ? meta.width : meta.height;

    const srcSet = [];
    for (const width of WIDTHS) {
      const outName = `${base}-${width}.webp`;
      const out = path.join(outDir, outName);
      // Skip images that are already up to date
      if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < srcMtime) {
        await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
        made++;
      }
      srcSet.push({ src: `/photos/${name}/${outName}`, width: Math.min(width, w) });
    }

    items.push({
      id: base,
      title: captions[file]?.title || titleFromFile(file),
      description: captions[file]?.description || '',
      width: w,
      height: h,
      src: srcSet[srcSet.length - 1].src,
      srcSet: srcSet.map(s => `${s.src} ${s.width}w`).join(', '),
    });
  }

  // Remove outputs whose source photo was deleted
  const keep = new Set(items.flatMap(i => i.srcSet.split(', ').map(s => path.basename(s.split(' ')[0]))));
  for (const f of fs.readdirSync(outDir)) if (!keep.has(f)) fs.unlinkSync(path.join(outDir, f));

  fs.writeFileSync(dataFile, JSON.stringify(items, null, 2) + '\n');
  console.log(`photos/${name}: ${items.length} photos, ${made} image(s) generated`);
}

(async () => {
  for (const c of COLLECTIONS) await processCollection(c);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
