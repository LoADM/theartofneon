/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        'dark-secondary': '#1a1f2e',
        'neon-pink': '#ff00ff',
        'neon-cyan': '#00ffff',
        'neon-green': '#39ff14',
        'neon-purple': '#9d4edd',
        'neon-orange': '#ff6b35'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Orbitron', 'monospace']
      },
      animation: {
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 3s ease-in-out infinite'
      },
      keyframes: {
        'neon-glow': {
          '0%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'neon-flicker': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 40px currentColor',
            opacity: '1'
          },
          '2%, 8%, 10%, 12%, 20%, 22%, 24%, 25%': { 
            textShadow: 'none',
            opacity: '0.8'
          },
          '5%, 15%, 30%, 35%, 40%, 45%, 50%, 55%, 85%, 90%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 40px currentColor',
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: []
};