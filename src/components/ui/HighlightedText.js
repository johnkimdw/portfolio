import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function HighlightedText({ children, bold = false, className = '', href }) {
  const { colors } = useTheme();

  const highlightStyle = {
    color: colors.text,
    backgroundColor: colors.accent + colors.highlightOpacity,
    padding: '2px 4px',
    borderRadius: '3px',
    ...(bold && { fontWeight: 'bold' })
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:underline transition-all duration-200`}
        style={highlightStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <span 
      className={className}
      style={highlightStyle}
    >
      {children}
    </span>
  );
}