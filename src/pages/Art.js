import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Art() {
  const { colors } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <p
        className="text-sm font-sans"
        style={{ color: colors.textMuted }}
      >
        keep posted. coming soon :)
      </p>
    </div>
  );
}
