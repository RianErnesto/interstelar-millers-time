import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        amber: {
          gold: '#d4a04a',
          dark: '#b8860b',
        },
        space: {
          700: '#1a1a2e',
          900: '#0d1117',
        },
        void: '#050508',
      },
      animation: {
        blink: 'blink 2s ease-in-out infinite',
        'orbit-pulse': 'orbit-pulse 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        twinkle: 'twinkle 8s ease-in-out infinite alternate',
        'glow-slide': 'glow-slide 4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'orbit-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(212,160,74,0.15)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(212,160,74,0.3)',
            transform: 'scale(1.05)',
          },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        twinkle: {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
        'glow-slide': {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
