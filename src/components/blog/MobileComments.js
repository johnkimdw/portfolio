import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function MobileComments({ comments = [] }) {
  const { colors } = useTheme();

  if (!comments.length) return null;

  return (
    <div className="mt-8 space-y-4 lg:hidden">
      <h3 className="text-lg font-medium font-space mb-4" style={{ color: colors.text }}>
        Notes
      </h3>
      {comments.map((comment) => (
        <div 
          key={comment.id}
          className="pl-6 border-l-2 py-2"
          style={{ borderColor: colors.border }}
        >
          <div className="text-sm leading-relaxed font-sans" style={{ color: colors.textMuted }}>
            <span 
              className="font-bold text-xs mr-2"
              style={{ color: colors.link }}
            >
              {comment.id}.
            </span>
            {comment.clickable && comment.link ? (
              <span>
                {comment.content.split(' ').slice(0, -1).join(' ')}{' '}
                <a
                  href={comment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline transition-all duration-200"
                  style={{ color: colors.link }}
                  onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                  onMouseLeave={(e) => e.target.style.color = colors.link}
                >
                  {comment.content.split(' ').slice(-1)[0]}
                </a>
              </span>
            ) : (
              comment.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
}