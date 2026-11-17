/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0d5eb9",
          hover: "#0a4b94",
          dark: "#1e1e1e",
          gray: "#2b2b2b",
        }
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        mono: ['"Chivo Mono"', 'monospace'],
      },
      keyframes: {
        'swipe-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(28px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'swipe-up-card': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'swipe-up': 'swipe-up 0.75s cubic-bezier(0.16, 1, 0.3, 1) both',
        'swipe-up-card': 'swipe-up-card 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
