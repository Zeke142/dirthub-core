/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables toggle-based dark mode
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dirtbrown: '#7a5c39',
      },
    },
  },
  plugins: [],
}