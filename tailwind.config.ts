import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        red: '#e63329',
        'red-glow': 'rgba(230, 51, 41, 0.25)',
        'red-subtle': 'rgba(230, 51, 41, 0.08)',
        'gray-100': '#111111',
        'gray-200': '#1a1a1a',
        'gray-300': '#222222',
        'gray-400': '#333333',
        'gray-500': '#555555',
        'gray-600': '#888888',
        'gray-700': '#aaaaaa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'scroll-line': 'scrollLine 2s ease infinite',
        'load-bar': 'loadBar 1.8s ease forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'translate(-50%, -60%) scale(1)' },
          '50%': { opacity: '0.8', transform: 'translate(-50%, -60%) scale(1.08)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        loadBar: {
          'to': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
