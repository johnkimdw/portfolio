import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); // Default to light theme

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Dark Mode - Dark background, light text, bright stars
      bg: '#000000',
      text: '#ffffff',
      textSecondary: '#e2e8f0',
      textMuted: '#94a3b8',
      link: '#60a5fa',
      linkHover: '#3b82f6',
      accent: '#38bdf8',
      border: '#334155',
      star: '#ffffff',
      highlightOpacity: '30'
    } : {
      // Light Mode - Light background, dark text, dark stars  
      bg: '#ffffff',
      text: '#1e293b',
      textSecondary: '#475569',
      textMuted: '#64748b',
      link: '#2563eb',
      linkHover: '#1d4ed8',
      accent: '#0ea5e9',
      border: '#cbd5e1',
      star: '#1e40af',
      highlightOpacity: '20'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};