/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Theme (Space Blue)
        dark: {
          bg: '#000814',
          text: '#e0f2fe',
          'text-secondary': '#bae6fd',
          link: '#38bdf8',
          'link-hover': '#0ea5e9',
          accent: '#7dd3fc',
          border: '#1e40af',
        },
        // Light Theme (Sky Blue)
        light: {
          bg: '#f0f9ff',
          text: '#0c4a6e',
          'text-secondary': '#075985',
          link: '#0284c7',
          'link-hover': '#0369a1',
          accent: '#0ea5e9',
          border: '#93c5fd',
        }
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"],
        mono: ["Space Mono", "monospace"],
        'space': ["Space Mono", "monospace"],
        'jetbrains': ["JetBrains Mono", "monospace"],
      },

      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)'},
          '15%': { transform:'rotate(14deg)'},
          '30%': { transform: 'rotate(-8deg)'},
          '40%': { transform:'rotate(14deg)'},
          '50%': { transform: 'rotate(-4deg)'},
          '60%': { transform:'rotate(10deg)'},
          '70%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(0deg)'},
        }
      },

      animation: {
        wave: 'wave 1.5s infinite'
      },

    },
  },
  plugins: [],
}


