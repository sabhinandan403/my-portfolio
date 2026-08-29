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
        obsidian: {
          DEFAULT: '#08090A',
          canvas: '#08090A',
          surface: '#101114',
          'surface-hover': '#16181D',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
        },
        warm: {
          canvas: '#FAF7F2',     // Soothing warm beige canvas
          surface: '#FFFFFF',    // Crisp warm white card
          'surface-hover': '#F5F1E8',
          border: '#E8E2D5',
          'border-hover': '#D8D0BF',
          heading: '#1C1917',    // Deep warm slate/charcoal
          body: '#57534E',       // Warm stone text
          muted: '#8C857B',
        },
        linear: {
          indigo: '#5E6AD2',
          'indigo-glow': 'rgba(94, 106, 210, 0.15)',
          'indigo-hover': '#6875E3',
          green: '#4EBA6F',
        },
        txt: {
          primary: '#EDEDEF',
          muted: '#8A8F98',
          tertiary: '#62666D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '0.75rem', // rounded-xl
        'btn': '0.5rem',   // rounded-lg
      },
      transitionTimingFunction: {
        'linear': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
