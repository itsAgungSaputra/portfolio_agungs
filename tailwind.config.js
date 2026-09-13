/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    extend: {
      fontFamily: {
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        warm: {
          50: '#FAFAF9',
          100: '#F5F4F2',
          200: '#E8E6E1',
          300: '#D4D1CA',
          400: '#A09A92',
          500: '#78756E',
          600: '#6B6860',
          700: '#4A4843',
          800: '#2A2928',
          850: '#1A1918',
          900: '#111110',
          950: '#0A0A09',
        },
        accent: {
          DEFAULT: '#B45309',
          light: '#D97706',
          dark: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
    },
  },
  plugins: [],
}