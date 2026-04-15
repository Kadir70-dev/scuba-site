/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './main.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        habara: ['Harabara', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        beige: '#f5f1e8',
        ivory: '#faf8f4',
        'deep-indigo': '#1e3a5f',
        'organic-green': '#4a5d23',
        'muted-gold': '#d4af37',
        'warm-sand': '#e6ddd0',
      },
    },
  },
  plugins: [],
};