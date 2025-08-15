import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { getAllPosts } from '../lib/blog';

export default function Blog() {
  const { colors } = useTheme();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const loadPosts = () => {
      const allPosts = getAllPosts();
      const publishedPosts = allPosts.filter(post => post.published);
      setPosts(publishedPosts);
    };
    
    loadPosts();
  }, []);
  
  const publishedPosts = posts;

  return (
    <div className="py-8">
      <div className="space-y-8">
        {publishedPosts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <Link 
              to={`/blog/${post.slug}`}
              className="block"
            >
              <h2 
                className="text-base font-medium font-sans hover:underline transition-colors duration-200"
                style={{ color: colors.link }}
                onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                onMouseLeave={(e) => e.target.style.color = colors.link}
              >
                {post.title}
              </h2>
            </Link>
            
            <div className="flex items-center space-x-3 text-xs font-sans" style={{ color: colors.textMuted }}>
              <time>{post.date}</time>
            </div>
            
            <p className="text-xs leading-relaxed font-sans" style={{ color: colors.textMuted }}>
              {post.excerpt}
            </p>
          </article>
        ))}
        
        {publishedPosts.length === 0 && (
          <div className="text-center" style={{ color: colors.textMuted }}>
            <p className="font-sans">No posts yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}