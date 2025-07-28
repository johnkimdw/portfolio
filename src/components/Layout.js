import React from 'react';
import StarryBackground from './StarryBackground';
import TabNavigation from './TabNavigation';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative transition-colors duration-300" style={{ color: 'inherit' }}>
      <StarryBackground />
      <div className="relative z-10">
        <TabNavigation />
        <main className="max-w-2xl mx-auto px-6 pb-16">
          {children}
        </main>
      </div>
    </div>
  );
}