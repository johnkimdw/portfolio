import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

// Cooking page layouts. Each takes { dishes, onOpen(index) } and shows only
// picture + name; the description lives in the lightbox.

// srcSet lets the browser pick the small or large generated version
const Img = ({ dish, className = '', sizes = '(min-width: 640px) 33vw, 50vw' }) => (
  <img
    src={dish.image}
    srcSet={dish.srcSet}
    sizes={sizes}
    width={dish.width}
    height={dish.height}
    alt={dish.title}
    loading="lazy"
    decoding="async"
    className={`w-full h-full object-cover ${className}`}
  />
);

// Uniform 3-column grid with small captions. The calmest option.
function Grid({ dishes, onOpen }) {
  const { colors } = useTheme();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
      {dishes.map((d, i) => (
        <button key={d.id} type="button" onClick={() => onOpen(i)} className="group text-left space-y-2">
          <div className="aspect-[3/4] overflow-hidden rounded-md">
            <Img dish={d} className="transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <p className="text-sm" style={{ color: colors.textSecondary }}>{d.title}</p>
        </button>
      ))}
    </div>
  );
}

// Columns with varied crops so the rhythm feels hand-arranged.
const CROPS = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-[5/4]'];
function Masonry({ dishes, onOpen }) {
  const { colors } = useTheme();
  return (
    <div className="columns-2 sm:columns-3 gap-4">
      {dishes.map((d, i) => (
        <button key={d.id} type="button" onClick={() => onOpen(i)} className="group block w-full text-left mb-5 break-inside-avoid">
          <div className={`${CROPS[i % CROPS.length]} overflow-hidden rounded-md`}>
            <Img dish={d} className="transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <p className="mt-2 text-sm" style={{ color: colors.textSecondary }}>{d.title}</p>
        </button>
      ))}
    </div>
  );
}

// Bento: a few tiles span two cells; names appear over the photo on hover.
// Breaks out a little past the page's text column (up to 52rem) to fill space.
const SPANS = { 0: 'col-span-2 row-span-2', 4: 'row-span-2', 7: 'col-span-2' };
function Bento({ dishes, onOpen }) {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-[min(calc(100vw-3rem),52rem)] grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[190px] gap-2 grid-flow-dense">
      {dishes.map((d, i) => (
        <button key={d.id} type="button" onClick={() => onOpen(i)} className={`group relative overflow-hidden rounded-md ${SPANS[i] || ''}`}>
          <Img dish={d} className="transition-transform duration-500 group-hover:scale-[1.04]" />
          <span className="absolute inset-x-0 bottom-0 p-2 pt-8 text-left text-xs text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
            {d.title}
          </span>
        </button>
      ))}
    </div>
  );
}

// Photo cards: quiet prints with a barely-there tilt that straighten on hover.
// Breaks out a little past the text column (up to 52rem) like the bento.
const TILT = [-1.2, 0.8, -0.6, 1, -0.9, 0.5, 1.1, -0.7, 0.6, -1, 0.9];
function Collage({ dishes, onOpen }) {
  const { colors, isDark } = useTheme();
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-[min(calc(100vw-3rem),52rem)] grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-6">
      {dishes.map((d, i) => (
        <button
          key={d.id}
          type="button"
          onClick={() => onOpen(i)}
          className="cooking-print text-left"
          style={{ '--tilt': `${TILT[i % TILT.length]}deg`, marginTop: i % 3 === 1 ? 14 : 0 }}
        >
          {/* Paper is an inner div: index.css forces button backgrounds transparent */}
          <div
            className="p-1.5 pb-2.5 rounded-[3px]"
            style={{
              background: isDark ? '#101217' : '#ffffff',
              border: `1px solid ${isDark ? 'rgba(255,255,255,.06)' : 'rgba(15,23,42,.06)'}`,
              boxShadow: isDark ? '0 4px 14px rgba(0,0,0,.45)' : '0 3px 12px rgba(15,23,42,.07)',
            }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2px]"><Img dish={d} /></div>
            <p className="mt-2 px-0.5 text-xs truncate" style={{ color: colors.textSecondary }}>{d.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

// Contact sheet: small numbered frames, with a plain index of names below.
function Contact({ dishes, onOpen }) {
  const { colors } = useTheme();
  const [hover, setHover] = React.useState(null);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-1">
        {dishes.map((d, i) => (
          <button
            key={d.id}
            type="button"
            onClick={() => onOpen(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="relative aspect-square overflow-hidden"
            aria-label={d.title}
          >
            <Img dish={d} className={`transition-opacity duration-300 ${hover !== null && hover !== i ? 'opacity-40' : ''}`} />
            <span className="absolute top-1 left-1.5 font-mono text-[10px] text-white/80">{String(i + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 font-mono text-xs">
        {dishes.map((d, i) => (
          <li key={d.id}>
            <button
              type="button"
              onClick={() => onOpen(i)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="text-left"
              style={{ color: hover === i ? colors.text : colors.textMuted }}
            >
              {String(i + 1).padStart(2, '0')}&nbsp;&nbsp;{d.title}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const COOKING_LAYOUTS = {
  grid: { label: 'grid', component: Grid },
  masonry: { label: 'masonry', component: Masonry },
  bento: { label: 'bento', component: Bento },
  collage: { label: 'photo cards', component: Collage },
  contact: { label: 'contact sheet', component: Contact },
};
