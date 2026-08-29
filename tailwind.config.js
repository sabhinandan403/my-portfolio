/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#090D16',
          subtle: '#0E131F',
          card: '#121826',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(16, 185, 129, 0.35)',
        },
        accent: {
          DEFAULT: '#10B981', // Refined Emerald
          hover: '#059669',
          light: '#34D399',
          muted: 'rgba(16, 185, 129, 0.12)',
        },
        secondary: {
          cyan: '#38BDF8',
          indigo: '#818CF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
