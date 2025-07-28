import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import BlogContent from '../components/blog/BlogContent';
import SideComments from '../components/blog/SideComments';
import MobileComments from '../components/blog/MobileComments';
import blogPosts from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const { colors } = useTheme();
  const [hoveredRef, setHoveredRef] = useState(null);
  const [refPositions, setRefPositions] = useState({});
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-medium font-space mb-4" style={{ color: colors.text }}>
          Post not found
        </h1>
        <Link 
          to="/blog"
          className="text-base font-sans hover:underline transition-colors duration-200"
          style={{ color: colors.link }}
          onMouseEnter={(e) => e.target.style.color = colors.linkHover}
          onMouseLeave={(e) => e.target.style.color = colors.link}
        >
          ← back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm font-sans">
        <Link 
          to="/"
          className="hover:underline transition-colors duration-200"
          style={{ color: colors.link }}
          onMouseEnter={(e) => e.target.style.color = colors.linkHover}
          onMouseLeave={(e) => e.target.style.color = colors.link}
        >
          dongwhi kim
        </Link>
        <span style={{ color: colors.textMuted }}> » </span>
        <Link 
          to="/blog"
          className="hover:underline transition-colors duration-200"
          style={{ color: colors.link }}
          onMouseEnter={(e) => e.target.style.color = colors.linkHover}
          onMouseLeave={(e) => e.target.style.color = colors.link}
        >
          blog
        </Link>
        <span style={{ color: colors.textMuted }}> » </span>
        <span style={{ color: colors.text }}>{post.title}</span>
      </nav>

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-medium font-space mb-4" style={{ color: colors.text }}>
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm font-sans" style={{ color: colors.textMuted }}>
          <p>{post.date}</p>
        </div>
      </header>

      {/* Content Layout - Break out of Layout container for side comments */}
      <div className="relative -mx-6 px-6">
        <div className="max-w-6xl mx-auto relative">
          {/* Main Content - Centered */}
          <div className="max-w-2xl mx-auto">
            <BlogContent 
              content={post.content} 
              sideComments={post.sideComments}
              onRefHover={setHoveredRef}
              onRefPositions={setRefPositions}
            />
          </div>
          
          {/* Side Comments - Positioned aligned with their references */}
          <div className="hidden xl:block">
            <SideComments 
              comments={post.sideComments} 
              hoveredRef={hoveredRef}
              refPositions={refPositions}
            />
          </div>
        </div>
      </div>

      {/* Mobile Comments */}
      <div>
        <MobileComments comments={post.sideComments} />
      </div>
    </div>
  );
}