import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import cookingData from '../data/cookingData';

export default function Cooking() {
  const { colors } = useTheme();

  return (
    <div className="space-y-8 py-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl font-light font-space" style={{ color: colors.text }}>
          cooking
        </h1>
        <p className="text-sm font-sans max-w-md mx-auto" style={{ color: colors.textMuted }}>
          some dishes i've made to save $$ (and i like cooking)
        </p>
      </section>

      {/* Cooking Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cookingData.map((dish) => (
            <div
              key={dish.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div 
                className="aspect-square rounded-lg overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105"
                style={{ 
                  border: `1px solid ${colors.border}`
                }}
              >
                <img 
                  src={dish.image} 
                  alt={dish.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="space-y-1">
                <h3 
                  className="text-sm font-medium font-sans transition-colors duration-200"
                  style={{ color: colors.text }}
                >
                  {dish.title}
                </h3>
                <p 
                  className="text-xs font-sans"
                  style={{ color: colors.textMuted }}
                >
                  {dish.description}
                </p>
                <p 
                  className="text-xs font-sans"
                  style={{ color: colors.textMuted, opacity: 0.7 }}
                >
                  {dish.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="text-center pt-8">
        <p 
          className="text-xs font-sans italic"
          style={{ color: colors.textMuted, opacity: 0.6 }}
        >
          cooking more stuff up :)
        </p>
      </section>
    </div>
  );
}