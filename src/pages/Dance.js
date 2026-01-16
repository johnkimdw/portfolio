import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import danceData from '../data/danceData';

export default function Dance() {
  const { colors } = useTheme();

  const CardWrapper = ({ dance, children }) => {
    if (dance.youtubeUrl) {
      return (
        <a
          href={dance.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {children}
        </a>
      );
    }
    return <div className="group">{children}</div>;
  };

  return (
    <div className="space-y-8 py-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl font-light font-space" style={{ color: colors.text }}>
          dance
        </h1>
        <p className="text-sm font-sans max-w-md mx-auto" style={{ color: colors.textMuted }}>
          biggest hit @ notre dame
          <br></br>
          2023 - now
        </p>
      </section>

      {/* Dance Grid */}
      <section>
        {danceData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceData.map((dance) => (
              <CardWrapper key={dance.id} dance={dance}>
                {/* Video/Image Container */}
                <div
                  className="aspect-video rounded-lg overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 relative flex items-center justify-center"
                  style={{
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.bg
                  }}
                >
                  {dance.image ? (
                    <img
                      src={dance.image}
                      alt={dance.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-sm font-sans italic"
                      style={{ color: colors.textMuted }}
                    >
                      coming soon
                    </span>
                  )}
                </div>

                {/* Caption */}
                <div className="space-y-1">
                  <h3
                    className="text-sm font-medium font-sans"
                    style={{ color: colors.text }}
                  >
                    <span className="transition-all duration-200 group-hover:underline">
                      {dance.title}
                    </span>
                    {dance.artist && (
                      <span
                        className="transition-colors duration-200"
                        style={{ color: colors.textMuted, fontWeight: 'normal' }}
                      >
                        {' '}- {dance.artist}
                      </span>
                    )}
                  </h3>
                  {dance.description && (
                    <p
                      className="text-xs font-sans"
                      style={{ color: colors.textMuted }}
                    >
                      {dance.description}
                    </p>
                  )}
                </div>
              </CardWrapper>
            ))}
          </div>
        ) : (
          <p
            className="text-center text-sm font-sans"
            style={{ color: colors.textMuted }}
          >
            coming soon...
          </p>
        )}
      </section>

      {/* Footer note */}
      <section className="text-center pt-8">
        <p
          className="text-xs font-sans italic"
          style={{ color: colors.textMuted, opacity: 0.6 }}
        >
          tbd
        </p>
      </section>
    </div>
  );
}
