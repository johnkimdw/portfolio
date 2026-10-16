import { useCallback, useEffect, useRef, useState } from 'react';

// Shared playback logic for every player design. The YouTube embed must stay
// visible (YouTube's terms), so each design renders `mountRef` somewhere.

let ytApiPromise;
const loadYouTubeApi = () => {
  if (!ytApiPromise) {
    ytApiPromise = new Promise(resolve => {
      if (window.YT?.Player) return resolve(window.YT);
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev?.(); resolve(window.YT); };
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    });
  }
  return ytApiPromise;
};

export default function useYouTubePlayer(songs, { width = 200, height = 113 } = {}) {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState({ elapsed: 0, duration: 0 });
  const [started, setStarted] = useState(false);
  const playerRef = useRef(null);
  const mountRef = useRef(null);
  const currentRef = useRef(0); // for the player's event callbacks

  const playSong = useCallback(async (index) => {
    const i = (index + songs.length) % songs.length;
    setStarted(true);
    currentRef.current = i;
    setCurrent(i);
    setTime({ elapsed: 0, duration: 0 });
    if (playerRef.current) {
      playerRef.current.loadVideoById(songs[i].id);
      return;
    }
    const YT = await loadYouTubeApi();
    playerRef.current = new YT.Player(mountRef.current, {
      videoId: songs[i].id,
      width,
      height,
      // Keep YouTube's own UI to the minimum the embed allows
      playerVars: { autoplay: 1, playsinline: 1, controls: 0, modestbranding: 1, rel: 0, disablekb: 1, iv_load_policy: 3, fs: 0 },
      events: {
        onReady: e => e.target.playVideo(),
        onStateChange: e => {
          // Keep the UI in sync; roll on to the next song when one ends
          if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
          else if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
          else if (e.data === YT.PlayerState.ENDED) playSong(currentRef.current + 1);
        },
        onError: () => console.log('Song could not be played (embedding may be disabled).'),
      },
    });
  }, [songs, width, height]);

  const toggle = useCallback(() => {
    if (!playerRef.current) return playSong(currentRef.current);
    if (playing) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  }, [playing, playSong]);

  const pause = useCallback(() => playerRef.current?.pauseVideo(), []);
  const next = useCallback(() => playSong(currentRef.current + 1), [playSong]);
  // Like iPods: restart the song if a few seconds in, otherwise go back one
  const prev = useCallback(() => {
    if ((playerRef.current?.getCurrentTime?.() || 0) > 3) playerRef.current.seekTo(0, true);
    else playSong(currentRef.current - 1);
  }, [playSong]);
  const seek = useCallback((fraction) => {
    const p = playerRef.current, d = p?.getDuration?.();
    if (d) p.seekTo(d * fraction, true);
  }, []);

  // Poll playback position for progress bars
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      const p = playerRef.current;
      setTime({ elapsed: p?.getCurrentTime?.() || 0, duration: p?.getDuration?.() || 0 });
    }, 500);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => () => playerRef.current?.destroy(), []);

  return { songs, current, song: songs[current], playing, started, time, mountRef, playSong, toggle, pause, next, prev, seek };
}

export const formatTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
