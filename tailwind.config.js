/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#2C6B74',
          dark: '#22535a',
          light: '#e0f2f4',
        },
        glass: 'rgba(255, 255, 255, 0.7)',
        'glass-border': 'rgba(0, 0, 0, 0.05)',
        'glass-hover': 'rgba(0, 0, 0, 0.03)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
