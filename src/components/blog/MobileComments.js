import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function MobileComments({ comments = [] }) {
  const { colors } = useTheme();
  const [hoveredComment, setHoveredComment] = useState(null);

  if (!comments.length) return null;

  return (
    <div className="mt-8 space-y-4 lg:hidden">
      <h3 className="text-lg font-medium font-space mb-4" style={{ color: colors.text }}>
        Notes
      </h3>
      {comments.map((comment) => (
        <div 
          key={comment.id}
          className={`pl-6 border-l-2 py-2 ${comment.clickable ? 'cursor-pointer' : 'cursor-default'}`}
          style={{ 
            borderColor: colors.border,
            textDecoration: (comment.clickable && hoveredComment === comment.id) ? 'underline' : 'none'
          }}
          onMouseEnter={() => setHoveredComment(comment.id)}
          onMouseLeave={() => setHoveredComment(null)}
          onClick={() => comment.clickable && comment.link && window.open(comment.link, '_blank', 'noopener,noreferrer')}
        >
          <div className="text-sm leading-relaxed font-sans" style={{ color: colors.textMuted }}>
            <span 
              className="font-bold text-xs mr-2"
              style={{ color: colors.link }}
            >
              {comment.id}.
            </span>
            {comment.content}
          </div>
        </div>
      ))}
    </div>
  );
}