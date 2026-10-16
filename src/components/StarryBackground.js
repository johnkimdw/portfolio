import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useDesign } from '../contexts/DesignContext';
import { SKY_VARIANTS } from './sky/skyVariants';

// Dark-mode ASCII sky. Runs the frame loop and eased scroll; the look itself
// comes from the active variant in sky/skyVariants.js.

const FPS = 15;

export default function StarryBackground() {
  const { colors, isDark } = useTheme();
  const { sky } = useDesign();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const variant = SKY_VARIANTS[sky] || Object.values(SKY_VARIANTS)[0];
    if (!isDark) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cols = 0, rows = 0, state = null;
    let raf, last = 0;
    let smoothScroll = window.scrollY || 0; // eased scroll for a floaty feel

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(window.innerWidth / variant.cell);
      rows = Math.ceil(window.innerHeight / variant.cell);
      state = variant.setup(cols, rows);
    };

    const draw = (t) => {
      smoothScroll += ((window.scrollY || 0) - smoothScroll) * (reduceMotion ? 1 : 0.08);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${variant.cell - 2}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = 'top';
      variant.draw(ctx, state, {
        time: t / 1000,
        scrollRows: smoothScroll / variant.cell,
        cols,
        rows,
        reduceMotion,
      });
    };

    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (t - last < 1000 / FPS) return;
      last = t;
      draw(t);
    };

    const onResize = () => { resize(); draw(performance.now()); };
    const onScroll = () => draw(performance.now());

    resize();
    window.addEventListener('resize', onResize);
    if (reduceMotion) {
      draw(0);
      window.addEventListener('scroll', onScroll, { passive: true });
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isDark, sky]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor: colors.bg }}
    />
  );
}
