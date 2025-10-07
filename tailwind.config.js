
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#6B8E6B',
          DEFAULT: '#4A6C4B',
          dark: '#385239',
        },
        secondary: '#E4C59E',
        accent: '#8B5E34',
        'bg-light': '#F8F9FA',
        'bg-dark': '#181A1B',
        'text-light': '#212529',
        'text-dark': '#E9ECEF',
      },
    },
  },
  plugins: [],
}
