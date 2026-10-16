import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useDesign } from '../contexts/DesignContext';
import { SKY_VARIANTS } from '../components/sky/skyVariants';
import { PLAYERS } from '../components/music/players';
import { COOKING_LAYOUTS } from '../components/cooking/layouts';
import { DESIGN } from '../config/design';
import Moon from '../components/Moon';

// Unlisted page for trying design variants live. Choices last for this visit
// only; make one permanent by setting it in config/design.js.

function Picker({ label, options, value, onChange, defaultValue }) {
  const { colors } = useTheme();
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm mb-2" style={{ color: colors.textMuted }}>{label}</legend>
      <div className="flex flex-wrap gap-2">
        {Object.entries(options).map(([key, opt]) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={value === key}
          >
            {/* Outline on a span: index.css strips borders from buttons */}
            <span
              className="block px-3 py-1 rounded-full border text-sm transition-colors"
              style={{
                borderColor: value === key ? colors.text : colors.border,
                color: value === key ? colors.text : colors.textMuted,
              }}
            >
              {opt.label}{key === defaultValue ? ' · live' : ''}
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Lab() {
  const { colors, isDark, toggleTheme } = useTheme();
  const { sky, setSky, player, setPlayer, cooking, setCooking } = useDesign();

  return (
    <>
      {isDark && <Moon />}
      <div className="space-y-8 py-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-medium" style={{ color: colors.text }}>lab</h1>
          <p style={{ color: colors.textSecondary }}>
            Try out the background and music player. Choices here only last for this visit;
            "live" marks what the site uses.
          </p>
          {!isDark && (
            <button type="button" onClick={toggleTheme} className="text-sm underline" style={{ color: colors.link }}>
              Both only show in dark mode. Switch to dark mode
            </button>
          )}
        </header>
        <Picker label="background" options={SKY_VARIANTS} value={sky} onChange={setSky} defaultValue={DESIGN.sky} />
        <Picker label="music player (click the moon)" options={PLAYERS} value={player} onChange={setPlayer} defaultValue={DESIGN.player} />
        <Picker label="cooking layout (see /cooking)" options={COOKING_LAYOUTS} value={cooking} onChange={setCooking} defaultValue={DESIGN.cooking} />
        {/* Tall spacer so there's room to scroll and feel the parallax */}
        <div className="h-[150vh]" aria-hidden="true" />
      </div>
    </>
  );
}
