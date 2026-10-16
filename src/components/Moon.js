import React, { useEffect, useMemo, useState } from 'react';
import { useDesign } from '../contexts/DesignContext';
import { SONGS } from './music/songs';
import { PLAYERS } from './music/players';
import useYouTubePlayer from './music/useYouTubePlayer';
import './moon.css';
import './music/music.css';

// Easter egg: a small dithered ASCII moon. Click it to play music; while it
// plays the moon cycles through its phases. The player design under the moon
// is picked in config/design.js (see music/players.js).

const COLS = 22;
const ROWS = 11; // chars are ~2x taller than wide, so half the columns
const RAMP = ' .:-=+*#';
const REST_PHASE = 2.3; // waxing gibbous
const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map(row => row.map(v => v / 16 - 0.5));

const hash = (x, y) => {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
};

// Fixed "maria" (dark patches) so the moon has a recognizable face
const MARIA = [[-0.3, -0.25, 0.28], [0.2, -0.1, 0.22], [0.05, 0.35, 0.2], [-0.4, 0.3, 0.12]];

function renderMoon(phase) {
  // Light rotates around the vertical axis: 0 = new moon, PI = full moon
  const lx = Math.sin(phase), lz = -Math.cos(phase);
  let out = '';
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = ((c + 0.5) / COLS) * 2 - 1;
      const y = ((r + 0.5) / ROWS) * 2 - 1;
      const d2 = x * x + y * y;
      if (d2 > 1) { out += ' '; continue; }
      const z = Math.sqrt(1 - d2);
      let albedo = 0.85 + (hash(c, r) - 0.5) * 0.15;
      for (const [mx, my, mr] of MARIA) {
        if ((x - mx) ** 2 + (y - my) ** 2 < mr * mr) albedo -= 0.25;
      }
      const lit = Math.max(0, x * lx + z * lz);
      const v = 0.08 + lit * albedo; // a touch of earthshine on the dark side
      const idx = Math.round(v * (RAMP.length - 1) + BAYER[r & 3][c & 3]);
      out += RAMP[Math.max(1, Math.min(RAMP.length - 1, idx))];
    }
    out += '\n';
  }
  return out;
}

// Remount on player change so each design gets a fresh YouTube embed
export default function Moon() {
  const { player } = useDesign();
  return <MoonWithPlayer key={player} player={player} />;
}

function MoonWithPlayer({ player }) {
  const { component: Player, videoSize } = PLAYERS[player] || Object.values(PLAYERS)[0];
  const music = useYouTubePlayer(SONGS, videoSize);
  const { playing, toggle, pause } = music;
  const [phase, setPhase] = useState(REST_PHASE);
  const [shown, setShown] = useState(false);

  const art = useMemo(() => renderMoon(phase), [phase]);

  // Cycle phases while music plays; settle back when it stops
  useEffect(() => {
    if (!playing) {
      setPhase(REST_PHASE);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setPhase(p => (p + 0.08) % (Math.PI * 2)), 120);
    return () => clearInterval(id);
  }, [playing]);

  const onMoonClick = () => {
    setShown(true);
    toggle();
  };
  const close = () => {
    pause();
    setShown(false);
  };

  return (
    <div className="fixed top-24 right-[6vw] z-0 select-none hidden sm:flex flex-col items-center">
      <button
        type="button"
        onClick={onMoonClick}
        aria-label={playing ? 'Pause the music' : 'Play some music'}
        className={`block font-mono text-[9px] leading-[10px] whitespace-pre text-slate-300 transition-all duration-700 ${playing ? 'moon-playing opacity-80' : 'opacity-30 hover:opacity-50'}`}
      >
        {art}
      </button>
      {/* Kept mounted (just faded) so the YouTube embed isn't torn down */}
      <div
        className={`mt-4 transition-all duration-700 ${shown ? 'opacity-80 hover:opacity-100' : 'opacity-0 translate-y-1 pointer-events-none'}`}
      >
        <Player music={music} onClose={close} />
      </div>
    </div>
  );
}
