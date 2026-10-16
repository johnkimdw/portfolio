import React, { useEffect } from 'react';

// Full-size view of one dish. Esc closes, ←/→ step through the list.
export default function Lightbox({ dishes, index, onChange, onClose }) {
  const dish = dishes[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % dishes.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + dishes.length) % dishes.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, dishes.length, onChange, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm cooking-fade"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={dish.title}
    >
      <figure className="max-w-md w-full space-y-3" onClick={e => e.stopPropagation()}>
        <img src={dish.image} alt={dish.title} width={dish.width} height={dish.height} className="w-full h-auto max-h-[75vh] object-cover rounded-md" />
        <figcaption className="flex items-baseline justify-between gap-4 text-white">
          <div className="min-w-0">
            <p className="font-medium">{dish.title}</p>
            <p className="text-sm text-white/60">{dish.description}</p>
          </div>
          <span className="text-xs text-white/40 tabular-nums shrink-0">{index + 1} / {dishes.length}</span>
        </figcaption>
      </figure>
    </div>
  );
}
