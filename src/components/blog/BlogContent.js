import React, { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import { useTheme } from '../../contexts/ThemeContext';

export default function BlogContent({ content, sideComments = [], onRefHover, onRefPositions }) {
  const { colors } = useTheme();
  const [hoveredRef, setHoveredRef] = useState(null);
  const refElements = useRef({});

  const renderContentWithRefs = (content) => {
    if (!content) return null;

    // Configure marked with custom options
    marked.setOptions({
      breaks: true, // Convert line breaks to <br>
      gfm: true,    // GitHub Flavored Markdown
    });

    // Step 1: Parse markdown to HTML
    let html = marked.parse(content);

    // Step 2: Post-process to add custom reference markers
    html = html.replace(/\{\{ref:(\d+)\}\}/g, (match, refId) => {
      return `<sup class="ref-marker" data-ref="${refId}">${refId}</sup>`;
    });

    // Step 3: Apply custom styling to links (add highlighting)
    html = html.replace(/<a href="([^"]*)"([^>]*)>([^<]*)<\/a>/g, (match, href, attrs, text) => {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="highlighted-link"${attrs}>${text}</a>`;
    });

    // Step 4: Convert HTML to React elements
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: html }}
        className="markdown-content"
      />
    );
  };

  // Calculate and pass reference positions to parent
  useEffect(() => {
    const calculatePositions = () => {
      const positions = {};
      const refMarkers = document.querySelectorAll('.ref-marker');
      
      refMarkers.forEach(element => {
        const refId = element.getAttribute('data-ref');
        if (refId) {
          const rect = element.getBoundingClientRect();
          const containerRect = element.closest('.markdown-content')?.getBoundingClientRect();
          if (containerRect) {
            positions[refId] = {
              top: rect.top - containerRect.top,
              height: rect.height
            };
          }
        }
      });
      
      onRefPositions?.(positions);
    };

    // Set up hover handlers for reference markers
    const setupRefHandlers = () => {
      const refMarkers = document.querySelectorAll('.ref-marker');
      refMarkers.forEach(element => {
        const refId = parseInt(element.getAttribute('data-ref'));
        
        element.addEventListener('mouseenter', () => {
          setHoveredRef(refId);
          onRefHover?.(refId);
        });
        
        element.addEventListener('mouseleave', () => {
          setHoveredRef(null);
          onRefHover?.(null);
        });
      });
    };

    // Set up image load listeners to recalculate positions
    const setupImageListeners = () => {
      const images = document.querySelectorAll('.markdown-content img');
      images.forEach(img => {
        if (img.complete) {
          // Image already loaded
          calculatePositions();
        } else {
          // Wait for image to load
          img.addEventListener('load', calculatePositions);
          img.addEventListener('error', calculatePositions); // In case image fails
        }
      });
    };

    // Calculate positions and setup handlers after render
    const timer = setTimeout(() => {
      calculatePositions();
      setupRefHandlers();
      setupImageListeners();
    }, 100);
    
    // Recalculate on window resize
    window.addEventListener('resize', calculatePositions);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePositions);
      // Clean up image event listeners
      const images = document.querySelectorAll('.markdown-content img');
      images.forEach(img => {
        img.removeEventListener('load', calculatePositions);
        img.removeEventListener('error', calculatePositions);
      });
    };
  }, [content, onRefPositions, onRefHover]);

  return (
    <div 
      className="prose prose-lg max-w-none"
      style={{
        '--text-color': colors.textSecondary,
        '--heading-color': colors.text,
        '--link-color': colors.link,
        '--link-hover-color': colors.linkHover,
        '--accent-color': colors.accent,
      }}
    >
      <style>
        {`
          .markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4 {
            color: ${colors.text};
            font-family: 'Space Mono', monospace;
            font-weight: 500;
            margin-bottom: 1.5rem;
          }
          .markdown-content h1 { font-size: 1.5rem; }
          .markdown-content h2 { font-size: 1.25rem; }
          .markdown-content h3 { font-size: 1.125rem; }
          .markdown-content h4 { font-size: 1rem; margin-bottom: 0.6rem; }
          
          .markdown-content p {
            color: ${colors.textSecondary};
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.875rem;
            line-height: 1.625;
            margin-bottom: 1.5rem;
          }
          
          .markdown-content ul {
            margin-top: 0;
            margin-bottom: 1.0rem;
            padding-left: 1.5rem;
            list-style: none;
          }
          
          .markdown-content li {
            color: ${colors.textSecondary};
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.875rem;
            line-height: 1.625;
            margin-bottom: 0.5rem;
            position: relative;
          }
          
          .markdown-content li::before {
            content: "•";
            color: ${colors.accent};
            position: absolute;
            left: -1.2rem;
            font-weight: bold;
          }
          
          .highlighted-link {
            color: ${colors.link} !important;
            background-color: ${colors.link}20;
            text-decoration: none;
            padding: 1px 4px;
            margin: 0 -1px;
            border-radius: 3px;
            font-weight: 500;
            transition: all 0.2s;
          }
          
          .highlighted-link:hover {
            color: ${colors.linkHover} !important;
            text-decoration: underline;
          }
          
          .ref-marker {
            color: ${colors.link};
            cursor: pointer;
            font-size: 0.75rem;
            transition: color 0.2s;
          }
          
          .ref-marker:hover {
            color: ${colors.linkHover};
          }
          
          .markdown-content del {
            color: ${colors.textMuted};
            text-decoration: line-through;
            opacity: 0.7;
          }
          
          .markdown-content blockquote {
            border-left: 3px solid ${colors.accent};
            margin: 1.5rem 0;
            padding-left: 1.5rem;
            padding-right: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            background-color: ${colors.accent}10;
            border-radius: 0 4px 4px 0;
          }
          
          .markdown-content blockquote p {
            margin-bottom: 0.75rem;
            font-style: italic;
          }
          
          .markdown-content blockquote p:last-child {
            margin-bottom: 0;
          }
          
          .markdown-content img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            margin: 1.5rem 0;
            display: block;
            box-shadow: 0 4px 12px ${colors.text}15;
          }
          
          .markdown-content figure {
            margin: 1.5rem 0;
            text-align: center;
          }
          
          .markdown-content figcaption {
            color: ${colors.textMuted};
            font-size: 0.75rem;
            font-style: italic;
            margin-top: 0.5rem;
            text-align: center;
          }
        `}
      </style>
      {renderContentWithRefs(content)}
    </div>
  );
}