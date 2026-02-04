import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function TabNavigation() {
  const location = useLocation();
  const { colors } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: 'home', type: 'route', path: '/' },
    { name: 'blog', type: 'route', path: '/blog' },
    { name: 'cooking', type: 'route', path: '/cooking' },
    { name: 'dance', type: 'route', path: '/dance' },
    { name: 'art', type: 'route', path: '/art' }
  ];

  return (
    <nav className="relative z-10 pt-8 pb-4">
      <div className="max-w-2xl mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-center items-center">
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
          {/* Desktop Theme Toggle */}
          <div className="absolute right-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Header Row */}
        <div className="flex sm:hidden justify-between items-center">
          {/* Spacer for balance */}
          <div className="w-8"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="px-3 py-1 transition-all duration-300 flex items-center gap-2 text-sm font-sans"
            style={{ color: colors.text }}
            aria-label="Toggle menu"
          >
            <span
              className="transition-transform duration-300"
              style={{
                display: 'inline-block',
                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: colors.star
              }}
            >
              ✦
            </span>
            <span
              className="text-base transition-transform duration-300 w-4 text-center"
              style={{
                color: colors.textMuted,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              {isMenuOpen ? '×' : '≡'}
            </span>
            <span
              className="transition-transform duration-300"
              style={{
                display: 'inline-block',
                transform: isMenuOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                color: colors.star
              }}
            >
              ✦
            </span>
          </button>

          {/* Mobile Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 text-sm font-sans py-2 max-w-[200px] mx-auto">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                onClick={() => setIsMenuOpen(false)}
                className="transition-all duration-200 px-4 py-2 text-center"
                style={{
                  color: location.pathname === tab.path ? colors.text : colors.textMuted,
                  textDecoration: location.pathname === tab.path ? 'underline' : 'none'
                }}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}