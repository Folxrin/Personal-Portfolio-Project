/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      
      backgroundImage: {
        hero: 'url(./assets/hero.png)',
      },

      colors:{
        white: '#FFFFFF',
        black: '#242424',
        accent: '#4EE1A0',
        dark: '#151515',
        info: '#D9D9D9',
        danger: '#e74c3c',
      
      },
    },
  },
  plugins: [],
}