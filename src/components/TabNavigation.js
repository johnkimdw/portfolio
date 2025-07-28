import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function TabNavigation() {
  const location = useLocation();
  const { colors } = useTheme();

  const tabs = [
    { name: 'home', type: 'route', path: '/' },
    { name: 'blog', type: 'route', path: '/blog' },
    { name: 'cooking', type: 'route', path: '/cooking' }
  ];

  return (
    <nav className="relative z-10 pt-8 pb-4">
      <div className="max-w-2xl mx-auto px-6 relative">
        <div className="flex justify-center">
          <div className="flex items-center gap-4 text-sm font-sans">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <Link
                  to={tab.path}
                  className="transition-all duration-200 px-2 py-1 relative"
                  style={{ 
                    color: location.pathname === tab.path ? colors.text : colors.textMuted,
                    textDecoration: location.pathname === tab.path ? 'underline' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.text;
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = location.pathname === tab.path ? colors.text : colors.textMuted;
                    e.target.style.textDecoration = location.pathname === tab.path ? 'underline' : 'none';
                  }}
                >
                  {tab.name}
                </Link>
                {index < tabs.length - 1 && (
                  <span className="text-xs" style={{ color: colors.accent }}>✦</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="absolute right-2 sm:right-0 top-0 flex items-center h-full">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}