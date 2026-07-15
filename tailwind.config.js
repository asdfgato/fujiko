/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — warm, quiet, unsaturated
        kinari: '#FAF8F4',      // warm white — primary background
        washi: '#F2EEE6',       // soft paper gray — secondary background
        beige: '#DDD2C1',       // natural beige — borders, dividers, cards
        sumi: '#2B2721',        // charcoal — primary text
        sumi2: '#524C43',       // softer charcoal — secondary text
        moss: {
          DEFAULT: '#6B7660',   // muted juniper/moss — single accent
          light: '#8B9481',
          dark: '#4F5A46',
        },
      },
      fontFamily: {
        display: ['"Zen Old Mincho"', 'serif'],
        body: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15' }],
        'display-sm': ['1.5rem', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1400px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both',
        fadeIn: 'fadeIn 0.6s ease both',
      },
    },
  },
  plugins: [],
}
