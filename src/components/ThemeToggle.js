import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme, colors } = useTheme();
  const buttonRef = useRef(null);
  
  const handleToggleClick = () => {
    toggleTheme();
    // Remove focus to prevent lingering hover/focus effects
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  // Reset button styles when theme changes
  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      button.style.transform = 'scale(1)';
      button.style.filter = isDark
        ? 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.6)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.4)) drop-shadow(0 0 18px rgba(251, 191, 36, 0.2))'
        : 'drop-shadow(0 0 4px rgba(30, 58, 138, 0.4)) drop-shadow(0 0 8px rgba(30, 58, 138, 0.2))';
      button.style.textShadow = isDark
        ? '0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4)'
        : '0 0 6px rgba(30, 58, 138, 0.5), 0 0 12px rgba(30, 58, 138, 0.3)';
    }
  }, [isDark]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleToggleClick}
        className="theme-toggle-btn cursor-pointer flex items-center justify-center w-6 h-6"
      style={{ 
        color: isDark ? '#fbbf24' : '#1e3a8a',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        fontSize: '20px',
        filter: isDark 
          ? 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.6)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.4)) drop-shadow(0 0 18px rgba(251, 191, 36, 0.2))'
          : 'drop-shadow(0 0 4px rgba(30, 58, 138, 0.4)) drop-shadow(0 0 8px rgba(30, 58, 138, 0.2))',
        textShadow: isDark
          ? '0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4)'
          : '0 0 6px rgba(30, 58, 138, 0.5), 0 0 12px rgba(30, 58, 138, 0.3)'
      }}
      title={`switch to ${isDark ? 'light' : 'dark'} mode`}
    >
        {isDark ? (
          // Sun icon for dark mode
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-theme="sun">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
          </svg>
        ) : (
          // Crescent moon icon for light mode
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-theme="moon">
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
          </svg>
        )}
      </button>
    </div>
  );
}