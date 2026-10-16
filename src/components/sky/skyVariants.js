// Dark-mode sky variants for StarryBackground. Each variant draws one frame of
// ASCII characters onto a canvas grid:
//   cell:  px per character cell
//   setup(cols, rows) -> state      (called on mount and resize)
//   draw(ctx, state, { time, scrollRows, cols, rows, reduceMotion })

// 4x4 Bayer matrix, normalized to [0, 1)
export const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map(row => row.map(v => v / 16));

// Cheap smooth value noise
const hash = (x, y) => {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
export const noise = (x, y) => {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
};

// Stars spread over a strip 3 viewports tall so parallax always has stars.
// `depths` picks each star's layer: far stars barely move, near ones glide.
const makeStars = (count, cols, rows, depths) =>
  Array.from({ length: count }, () => {
    const b = Math.random() ** 4; // mostly faint, a rare few bright
    const depth = depths[Math.floor(Math.random() * depths.length)];
    return {
      x: Math.random() * cols,
      y: Math.random() * rows * 3,
      char: depth > 0.3 ? (b > 0.3 ? '*' : '+') : b > 0.6 ? '+' : b > 0.2 ? '·' : '.',
      b: 0.2 + b * 0.5 + depth * 0.5,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.4 + 0.15,
      depth,
    };
  });

const drawStars = (ctx, stars, { time, scrollRows, cols, rows, reduceMotion }, cell, parallax, drift) => {
  const span = rows * 3;
  for (const s of stars) {
    let y = (s.y - scrollRows * s.depth * parallax) % span;
    if (y < 0) y += span;
    if (y > rows) continue;
    const x = (s.x + (reduceMotion ? 0 : time * s.depth * drift)) % cols;
    const tw = reduceMotion ? 1 : 0.7 + 0.3 * Math.sin(time * s.speed + s.phase);
    ctx.fillStyle = `rgba(226,232,240,${(s.b * tw).toFixed(3)})`;
    ctx.fillText(s.char, Math.round(x) * cell, Math.round(y) * cell);
  }
};

export const SKY_VARIANTS = {
  // Sparse stars over a faint dotted nebula, in three parallax layers
  stillNebula: {
    label: 'still field + nebula',
    cell: 12,
    setup: (cols, rows) => ({
      stars: makeStars(Math.round((cols * rows) / 190), cols, rows, [0.03, 0.03, 0.03, 0.03, 0.12, 0.12, 0.35]),
    }),
    draw(ctx, state, f) {
      const { time, scrollRows, cols, rows } = f;
      const ny = scrollRows * 0.06; // nebula is the furthest layer
      ctx.fillStyle = 'rgba(165,180,252,0.11)';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const n = noise(x * 0.04 + time * 0.012, (y + ny) * 0.065) * noise(x * 0.085, (y + ny) * 0.1 + 9);
          if (n - 0.28 > BAYER[y & 3][x & 3] * 0.5) ctx.fillText('.', x * this.cell, y * this.cell);
        }
      }
      drawStars(ctx, state.stars, { ...f, time: time * 0.5 }, this.cell, 2.4, 0);
    },
  },

  // Diagonal milky-way band, drifting stars and a rare shooting star
  milkyWay: {
    label: 'milky way',
    cell: 14,
    setup: (cols, rows) => ({
      stars: makeStars(Math.round((cols * rows) / 140), cols, rows, [0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.15, 0.15, 0.15, 0.45]),
      shooting: [],
    }),
    draw(ctx, state, f) {
      const { time, scrollRows, cols, rows, reduceMotion } = f;
      const C = this.cell;
      const yOff = scrollRows * 0.02;
      ctx.fillStyle = 'rgba(203,213,225,0.16)';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const d = (y + yOff - rows * 0.15 - x * 0.45) / (rows * 0.35);
          const band = Math.exp(-d * d * 2);
          if (band < 0.05) continue;
          const v = band * (0.25 + 0.6 * noise(x * 0.08 + time * 0.04, (y + yOff) * 0.12 - time * 0.02)) * 0.55;
          const idx = Math.floor(v * 2 + BAYER[y & 3][x & 3]);
          if (idx > 0) ctx.fillText(idx > 1 ? '·' : '.', x * C, y * C);
        }
      }
      drawStars(ctx, state.stars, f, C, 2.5, 0.6);

      if (!reduceMotion && Math.random() < 0.0025) {
        state.shooting.push({ x: Math.random() * cols * 0.7, y: Math.random() * rows * 0.4, life: 1 });
      }
      for (let i = state.shooting.length - 1; i >= 0; i--) {
        const s = state.shooting[i];
        s.x += 1.2; s.y += 0.5; s.life -= 0.04;
        for (let k = 0; k < 6; k++) {
          ctx.fillStyle = `rgba(226,232,240,${(s.life * (1 - k / 6) * 0.6).toFixed(3)})`;
          ctx.fillText(k === 0 ? '*' : '·', Math.round(s.x - k * 1.2) * C, Math.round(s.y - k * 0.5) * C);
        }
        if (s.life <= 0) state.shooting.splice(i, 1);
      }
    },
  },

  // Long-exposure star trails circling a pole just off the top-right corner
  starTrails: {
    label: 'star trails',
    cell: 10,
    setup(cols, rows) {
      const pole = { x: cols * 0.82, y: -rows * 0.15 };
      const maxR = Math.hypot(cols, rows * 1.6);
      return {
        pole,
        stars: Array.from({ length: Math.round((cols * rows) / 110) }, () => ({
          r: Math.sqrt(Math.random()) * maxR + 2,
          a: Math.random() * Math.PI * 2,
          len: 4 + Math.floor(Math.random() ** 2 * 18),
          b: 0.15 + Math.random() ** 3 * 0.6,
        })),
      };
    },
    draw(ctx, state, { time, scrollRows, cols, rows, reduceMotion }) {
      const C = this.cell;
      const px = state.pole.x, py = state.pole.y - scrollRows * 0.25;
      const spin = reduceMotion ? 0 : time * 0.004;
      for (const s of state.stars) {
        const step = 0.9 / s.r; // ~one cell between trail points
        for (let k = 0; k < s.len; k++) {
          const a = s.a + spin - k * step;
          const x = Math.round(px + Math.cos(a) * s.r);
          const y = Math.round(py + Math.sin(a) * s.r * 0.55);
          if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
          ctx.fillStyle = `rgba(226,232,240,${(s.b * (k === 0 ? 1 : 0.55 * (1 - k / s.len))).toFixed(3)})`;
          ctx.fillText(k === 0 ? '·' : '.', x * C, y * C);
        }
      }
    },
  },

  // Faint aurora curtains swaying near the top, sparse stars around them
  aurora: {
    label: 'aurora',
    cell: 11,
    setup: (cols, rows) => ({
      stars: makeStars(Math.round((cols * rows) / 220), cols, rows, [0.03, 0.03, 0.03, 0.12]),
    }),
    draw(ctx, state, f) {
      const { time, scrollRows, cols, rows, reduceMotion } = f;
      const C = this.cell;
      const t = reduceMotion ? 0 : time;
      const lift = scrollRows * 0.08;
      for (let x = 0; x < cols; x++) {
        const base = rows * 0.32 - lift + Math.sin(x * 0.045 + t * 0.15) * rows * 0.07 + (noise(x * 0.03, t * 0.05) - 0.5) * rows * 0.12;
        const strength = Math.max(0, noise(x * 0.025 + t * 0.03, 3) - 0.35) * 1.6;
        if (strength <= 0) continue;
        const y0 = Math.max(0, Math.floor(base - rows * 0.3)), y1 = Math.min(rows - 1, Math.ceil(base + 3));
        for (let y = y0; y <= y1; y++) {
          // Bright lower edge, long soft fade upward
          const d = base - y;
          const v = strength * (d < 0 ? Math.exp(d) : Math.exp(-d / (rows * 0.1)));
          if (v * 0.9 <= BAYER[y & 3][x & 3]) continue;
          ctx.fillStyle = `rgba(153,246,228,${Math.min(0.28, 0.08 + v * 0.2).toFixed(3)})`;
          ctx.fillText(v > 0.6 ? '|' : v > 0.35 ? ':' : '.', x * C, y * C);
        }
      }
      drawStars(ctx, state.stars, { ...f, time: time * 0.5 }, C, 2.4, 0);
    },
  },

  // 1-bit pixel dither: a low, quiet horizon glow under a sparse pixel sky
  pixelHorizon: {
    label: 'pixel horizon',
    cell: 2, // px per dither pixel
    setup(cols, rows) {
      // The gradient never changes, so dither it once into an offscreen canvas
      // twice the viewport height (room for parallax)
      const C = this.cell;
      const h = rows * 2;
      const off = document.createElement('canvas');
      off.width = cols * C; off.height = h * C;
      const o = off.getContext('2d');
      o.fillStyle = 'rgb(120,132,190)'; // muted slate-indigo
      for (let y = 0; y < h; y++) {
        // Glow only in the bottom ~30% of the strip, eased so it has no hard edge
        const g = Math.max(0, (y / h - 0.65) / 0.35);
        for (let x = 0; x < cols; x++) {
          const v = g ** 2.5 * 0.45 * (0.85 + 0.3 * noise(x * 0.01, y * 0.03));
          if (v > BAYER[y & 3][x & 3]) o.fillRect(x * C, y * C, C - 1, C - 1);
        }
      }
      return {
        off,
        stars: Array.from({ length: Math.round((cols * rows) / 3200) }, () => ({
          x: Math.floor(Math.random() * cols), y: Math.random() * rows * 3,
          big: Math.random() < 0.03, b: 0.25 + Math.random() ** 4 * 0.6,
          phase: Math.random() * 6.28, speed: Math.random() * 0.4 + 0.15,
          // Three layers: far, mid, and a few near stars that glide past
          depth: [0.04, 0.04, 0.04, 0.04, 0.14, 0.14, 0.14, 0.4][Math.floor(Math.random() * 8)],
          drift: 0.15 + Math.random() * 0.2,
        })),
      };
    },
    draw(ctx, state, { time, scrollRows, cols, rows, reduceMotion }) {
      const C = this.cell;
      // Horizon sits low and rises slowly into view as you scroll
      const off = state.off;
      const y = -off.height / 2 + Math.min(scrollRows * C * 0.06, off.height * 0.25);
      ctx.globalAlpha = 0.36;
      ctx.drawImage(off, 0, y);
      ctx.globalAlpha = 1;
      const span = rows * 3;
      for (const s of state.stars) {
        let sy = (s.y - scrollRows * s.depth * 3) % span;
        if (sy < 0) sy += span;
        if (sy > rows) continue;
        const tw = reduceMotion ? 1 : 0.8 + 0.2 * Math.sin(time * s.speed * 0.6 + s.phase);
        ctx.fillStyle = `rgba(226,232,240,${(s.b * tw).toFixed(3)})`;
        // Slow sideways drift, nearer stars faster
        const sx = reduceMotion ? s.x : (s.x + time * s.depth * s.drift * 10) % cols;
        const px = Math.round(sx) * C, py = Math.round(sy) * C;
        ctx.fillRect(px, py, C - 1, C - 1);
        if (s.big) {
          ctx.fillRect(px - C, py, C - 1, C - 1); ctx.fillRect(px + C, py, C - 1, C - 1);
          ctx.fillRect(px, py - C, C - 1, C - 1); ctx.fillRect(px, py + C, C - 1, C - 1);
        }
      }
    },
  },

  // Sparse stars; now and then a small constellation slowly draws itself in
  constellations: {
    label: 'constellations',
    cell: 12,
    setup(cols, rows) {
      const groups = Array.from({ length: 4 }, (_, g) => {
        const cx = cols * (0.15 + 0.7 * Math.random()), cy = rows * (0.15 + 0.7 * Math.random());
        const n = 4 + Math.floor(Math.random() * 3);
        const pts = [];
        let x = cx, y = cy;
        for (let i = 0; i < n; i++) {
          pts.push({ x, y });
          x += (Math.random() - 0.3) * 12; y += (Math.random() - 0.5) * 7;
        }
        return { pts, offset: g * 15 };
      });
      return { groups, stars: makeStars(Math.round((cols * rows) / 200), cols, rows, [0.03, 0.03, 0.03, 0.12]) };
    },
    draw(ctx, state, f) {
      const { time, scrollRows, reduceMotion } = f;
      const C = this.cell;
      drawStars(ctx, state.stars, { ...f, time: time * 0.5 }, C, 2.4, 0);
      const cycle = 60; // seconds; each group gets a turn
      for (const g of state.groups) {
        const p = reduceMotion ? 0.5 : (((time + g.offset) % cycle) / cycle);
        // Fade in over the first quarter of its turn, out over the next
        const vis = p < 0.25 ? 1 : 0;
        const draw = p < 0.25 ? Math.min(1, p / 0.12) : 0;
        const fade = p < 0.25 ? Math.min(1, (0.25 - p) / 0.06) : 0;
        if (!vis) continue;
        const dy = scrollRows * 0.06;
        const segs = g.pts.length - 1;
        const shown = draw * segs;
        for (let i = 0; i < segs; i++) {
          const a = g.pts[i], b = g.pts[i + 1];
          const part = Math.max(0, Math.min(1, shown - i));
          const len = Math.hypot(b.x - a.x, (b.y - a.y) * 2);
          for (let k = 1; k < len * part; k += 1.5) {
            const tt = k / len;
            ctx.fillStyle = `rgba(165,180,252,${(0.22 * fade).toFixed(3)})`;
            ctx.fillText('·', Math.round(a.x + (b.x - a.x) * tt) * C, Math.round(a.y + (b.y - a.y) * tt - dy) * C);
          }
        }
        ctx.fillStyle = `rgba(226,232,240,${(0.75 * fade).toFixed(3)})`;
        for (const pt of g.pts) ctx.fillText('+', Math.round(pt.x) * C, Math.round(pt.y - dy) * C);
      }
    },
  },
};
