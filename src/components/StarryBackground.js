import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function StarryBackground() {
  const { colors } = useTheme();
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars - more subtle for academic feel
    const createStars = (count = 80) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.6 + 0.1,
          twinkleSpeed: Math.random() * 0.00001 + 0.005,
          parallaxFactor: Math.random() * 5.3 + 0.1
        });
      }
      return stars;
    };

    starsRef.current = createStars();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get scroll position for parallax effect
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      starsRef.current.forEach(star => {
        // Enhanced vertical parallax movement
        const adjustedY = star.y - scrollY * star.parallaxFactor * 0.4;
        const adjustedX = star.x;
        
        // Twinkling effect
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // Draw star with theme colors
        ctx.save();
        ctx.globalAlpha = star.opacity;
        
        // Use theme star color with subtle variations
        ctx.fillStyle = colors.star;
        
        ctx.beginPath();
        ctx.arc(adjustedX, adjustedY, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor: colors.bg }}
    />
  );
}