import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Dev-only row of buttons for flipping between design variants in place.
// Renders nothing in production builds.
export default function LayoutSwitcher({ options, value, onChange }) {
  const { colors } = useTheme();
  if (process.env.NODE_ENV !== 'development') return null;
  return (
    <div className="flex flex-wrap justify-center gap-2 text-xs" aria-label="Layout (dev only)">
      {Object.entries(options).map(([key, opt]) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          aria-pressed={value === key}
        >
          {/* Outline on a span: index.css strips borders/shadows from buttons */}
          <span
            className="block px-2 py-0.5 rounded-full border"
            style={{
              borderColor: value === key ? colors.text : colors.border,
              color: value === key ? colors.text : colors.textMuted,
            }}
          >
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  );
}
