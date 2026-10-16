import React, { useState } from 'react';

// Terminal-style window: title bar, video, text controls, folded queue.
export default function TerminalPlayer({ music, onClose }) {
  const { songs, current, song, playing, time, mountRef, playSong, toggle, next } = music;
  const [listOpen, setListOpen] = useState(false);
  const progress = time.duration ? time.elapsed / time.duration : 0;

  return (
    <div className="terminal-player w-[214px] font-mono text-[10px] text-slate-400">
      <div className="flex items-center justify-between px-2 py-1 border-b border-slate-700/60">
        <span>while you're here</span>
        <button type="button" onClick={onClose} aria-label="Close player" className="hover:text-slate-200">[x]</button>
      </div>
      <div className="p-[6px]">
        <div className="terminal-player-screen overflow-hidden">
          <div ref={mountRef} />
        </div>
        <div className="mt-2 truncate text-slate-300" title={song.title}>{song.title}</div>
        <div className="truncate">{song.artist}</div>
        <div className="mt-1 flex items-center gap-2">
          <button type="button" onClick={toggle} className="hover:text-slate-200" aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? '[||]' : '[|>]'}
          </button>
          <button type="button" onClick={next} className="hover:text-slate-200" aria-label="Next song">[>>]</button>
          <span className="tracking-tighter" aria-hidden="true">
            {'#'.repeat(Math.round(progress * 12)).padEnd(12, '·')}
          </span>
        </div>
      </div>
      <div className="border-t border-slate-700/60">
        <button
          type="button"
          onClick={() => setListOpen(o => !o)}
          aria-expanded={listOpen}
          className="w-full text-left px-2 py-1 hover:text-slate-200"
        >
          {listOpen ? '[-]' : '[+]'} queue ({songs.length})
        </button>
        {listOpen && (
          <ol className="pb-1">
            {songs.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => playSong(i)}
                  className={`w-full text-left px-2 py-[1px] truncate hover:text-slate-200 ${i === current ? 'text-slate-200' : ''}`}
                >
                  {i === current ? '>' : ' '} {String(i + 1).padStart(2, '0')} {s.title}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
