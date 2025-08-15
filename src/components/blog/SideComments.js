import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function SideComments({ comments = [], hoveredRef = null, refPositions = {} }) {
  const { colors } = useTheme();
  const [expandedComment, setExpandedComment] = useState(null);
  const [hoveredComment, setHoveredComment] = useState(null);

  if (!comments.length) return null;

  // Calculate positions with collision detection
  const calculateCommentPositions = () => {
    const positions = [];
    let lastBottom = 0;
    
    comments.forEach((comment) => {
      const refPos = refPositions[comment.id];
      if (!refPos) return;
      
      let top = refPos.top;
      const minSpacing = 40; // Minimum space between comments
      
      // Prevent overlap with previous comment
      if (top < lastBottom + minSpacing) {
        top = lastBottom + minSpacing;
      }
      
      // Estimate comment height (expanded vs collapsed)
      const isExpanded = expandedComment === comment.id || hoveredRef === comment.id;
      const isLong = comment.content.length > 120;
      const estimatedHeight = isExpanded && isLong ? 120 : 60; // rough estimates
      
      positions.push({
        id: comment.id,
        top,
        height: estimatedHeight
      });
      
      lastBottom = top + estimatedHeight;
    });
    
    return positions;
  };

  const commentPositions = calculateCommentPositions();

  return (
    <div className="absolute left-full ml-8 w-64" style={{ top: 0 }}>
      {comments.map((comment) => {
        const position = commentPositions.find(p => p.id === comment.id);
        if (!position) return null;
        
        const isExpanded = expandedComment === comment.id || hoveredRef === comment.id;
        const isLong = comment.content.length > 120;
        const displayContent = isExpanded || !isLong ? comment.content : comment.content.substring(0, 120) + '...';
        
        return (
          <div 
            key={comment.id}
            className={`absolute text-xs leading-relaxed transition-all duration-200 rounded p-2 ${comment.clickable ? 'cursor-pointer' : 'cursor-default'}`}
            style={{ 
              top: position.top,
              color: colors.textMuted,
              backgroundColor: hoveredRef === comment.id ? colors.link + '20' : 'transparent',
              width: '100%',
              textDecoration: (comment.clickable && hoveredComment === comment.id) ? 'underline' : 'none'
            }}
            onMouseEnter={() => {
              setExpandedComment(comment.id);
              setHoveredComment(comment.id);
            }}
            onMouseLeave={() => {
              setExpandedComment(null);
              setHoveredComment(null);
            }}
            onClick={() => comment.clickable && comment.link && window.open(comment.link, '_blank', 'noopener,noreferrer')}
          >
            <div className="flex items-start space-x-2">
              <span 
                className="font-bold text-xs mt-1 flex-shrink-0"
                style={{ color: colors.link }}
              >
                {comment.id}.
              </span>
              <div className="font-sans relative">
                <span>
                  {displayContent}
                  {isLong && !isExpanded && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-4 pointer-events-none"
                      style={{
                        background: `linear-gradient(transparent, ${colors.bg})`
                      }}
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}