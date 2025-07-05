/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A1A', // Deep space blue/black
        'dark-surface': '#1A1A2E', // Slightly lighter dark blue/gray
        'accent-blue': '#00F0FF', // Electric blue
        'accent-green': '#00FF80', // Neon green
        'text-light': '#E0E0E0', // Light gray
        'text-dark': '#333333', // Darker gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'node-pulse': 'node-pulse 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'top center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 5px var(--tw-shadow-color))'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
            filter: 'drop-shadow(0 0 15px var(--tw-shadow-color))'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'node-pulse': {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0px rgba(0, 240, 255, 0.7)'
          },
          '100%': {
            transform: 'scale(1.1)',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.9)'
          },
        },
      }
    },
  },
  plugins: [],
}

