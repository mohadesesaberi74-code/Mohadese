import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#005C4B',
          dark: '#004438',
          light: '#1A7A65',
          50: '#E8F5F1',
          100: '#D0EBE4',
        },
        parchment: '#FAF7F2',
        cinnamon: '#8C5E3C',
        cinnamonLight: '#B8825E',
        stone: {
          DEFAULT: '#E5DED4',
          dark: '#D4C9BC',
        },
        charcoal: '#262626',
        clay: '#9E4533',
        forest: '#2D402D',
        olive: '#594D40',
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'sans-serif'],
        serif: ['var(--font-vazirmatn)', 'serif'],
      },
      borderRadius: {
        arch: '24px',
        'arch-lg': '32px',
        'arch-xl': '40px',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(0, 0, 0, 0.08)',
        card: '0 8px 32px -12px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 16px 48px -16px rgba(0, 92, 75, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
