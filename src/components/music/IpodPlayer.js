import React, { useEffect, useRef, useState } from 'react';
import { formatTime } from './useYouTubePlayer';

// A small frosted iPod: screen on top (video, song, progress), a slim control
// bar below. The list button opens the song list; scroll over the bar or use
// ⏮/⏭ to move through it, and press ⏯ to play the highlighted song.
export default function IpodPlayer({ music, onClose }) {
  const { songs, current, song, playing, time, mountRef, playSong, toggle, next, prev, seek } = music;
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlight, setHighlight] = useState(current);
  const barRef = useRef(null);
  const progress = time.duration ? time.elapsed / time.duration : 0;

  const openMenu = () => {
    setHighlight(current);
    setMenuOpen(o => !o);
  };
  const move = (step) => setHighlight(h => (h + step + songs.length) % songs.length);
  const choose = (i) => {
    playSong(i);
    setMenuOpen(false);
  };
  const center = () => (menuOpen ? choose(highlight) : toggle());

  // Scrolling over the control bar moves the menu highlight (non-passive so the page
  // doesn't scroll at the same time)
  useEffect(() => {
    const el = barRef.current;
    if (!el || !menuOpen) return;
    let acc = 0;
    const onWheel = (e) => {
      e.preventDefault();
      acc += e.deltaY;
      if (Math.abs(acc) > 40) {
        setHighlight(h => (h + Math.sign(acc) + songs.length) % songs.length);
        acc = 0;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [menuOpen, songs.length]);

  const onScrub = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    seek(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
  };

  return (
    <div className="ipod group relative">
      <button type="button" onClick={onClose} aria-label="Close player" className="ipod-close">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z" /></svg>
      </button>

      <div className="ipod-screen">
        <div className="ipod-status">
          <span>{playing ? 'Now Playing' : 'Paused'}</span>
          <span>{current + 1} of {songs.length}</span>
        </div>
        <div className="ipod-video">
          <div ref={mountRef} />
        </div>
        <div className="ipod-meta">
          <span className="ipod-title" title={song.title}>{song.title}</span>
          <span className="ipod-artist">{song.artist}</span>
        </div>
        <div className="ipod-scrub" onClick={onScrub} role="presentation">
          <i style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="ipod-times">
          <span>{formatTime(time.elapsed)}</span>
          <span>-{formatTime(Math.max(0, time.duration - time.elapsed))}</span>
        </div>

        {menuOpen && (
          <div className="ipod-menu" role="listbox" aria-label="Songs">
            <div className="ipod-status"><span>Songs</span><span>{songs.length}</span></div>
            {songs.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="option"
                aria-selected={i === highlight}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => choose(i)}
                className={i === highlight ? 'sel' : ''}
              >
                <span>{s.title}</span>
                {i === current && playing && <span aria-hidden="true">♪</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Slim control bar. With the menu open, ⏮/⏭ move the highlight and ⏯ plays it */}
      <div className="ipod-bar" ref={barRef}>
        <button type="button" onClick={openMenu} className={`ipod-bar-menu ${menuOpen ? 'on' : ''}`} aria-expanded={menuOpen} aria-label="Song list">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="2" rx="1" /><rect x="4" y="11" width="16" height="2" rx="1" /><rect x="4" y="16" width="10" height="2" rx="1" /></svg>
        </button>
        <button type="button" onClick={() => (menuOpen ? move(-1) : prev())} aria-label={menuOpen ? 'Move up' : 'Previous song'}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 12l8.5-6v12zM2.5 12L11 6v12z" /></svg>
        </button>
        <button type="button" onClick={center} className="ipod-bar-play" aria-label={menuOpen ? 'Play selected song' : playing ? 'Pause' : 'Play'}>
          {playing && !menuOpen
            ? <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="4" height="14" rx="1.2" /><rect x="13.5" y="5" width="4" height="14" rx="1.2" /></svg>
            : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>}
        </button>
        <button type="button" onClick={() => (menuOpen ? move(1) : next())} aria-label={menuOpen ? 'Move down' : 'Next song'}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 12L4.5 18V6zM21.5 12L13 18V6z" /></svg>
        </button>
      </div>
    </div>
  );
}
