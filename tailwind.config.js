/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#142699',
        secondary: '#3D57B3',
        accent: '#5D7BEA',
        // background: '#E6E6E6',
        background: '#1A1A1A',
        // text: '#050515',
        text: '#EAEAFA',
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

    },
  },
  plugins: [],
}


