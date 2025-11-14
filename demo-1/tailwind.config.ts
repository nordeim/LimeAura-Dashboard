import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background
        'bg-main': '#D6F25F',
        
        // Surface
        'surface-primary': '#FFFFFF',
        'surface-soft': '#F9FAFB',
        
        // Text
        'text-primary': '#111111',
        'text-secondary': '#555555',
        'text-muted': '#9CA3AF',
        'text-on-accent': '#FFFFFF',
        
        // Accent
        'accent-primary': '#7B3EFF',
        'accent-primary-soft': '#EDE7FF',
        'accent-primary-hover': '#6B2FFF',
        'accent-secondary': '#00C6AE',
        'accent-yellow': '#FFB020',
        
        // Border
        'border-subtle': '#F0F0F0',
        
        // Semantic
        'semantic-success': '#10B981',
        'semantic-warning': '#FBBF24',
        'semantic-danger': '#EF4444',
      },
      fontFamily: {
        sans: ["'SF Pro Rounded'", "'Nunito'", "'Inter'", 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-2': ['22px', { lineHeight: '1.35', fontWeight: '600' }],
        'heading-3': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-bold': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'label': ['12px', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'xxs': '4px',
        'xs': '6px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        'xxl': '24px',
        'xxxl': '32px',
        'page': '40px',
      },
      borderRadius: {
        'pill': '999px',
        'card-lg': '28px',
        'card-md': '20px',
      },
      boxShadow: {
        'card': '0 10px 25px 0 rgba(15, 23, 42, 0.06)',
        'floating': '0 18px 40px 0 rgba(15, 23, 42, 0.10)',
        'accent-soft': '0 8px 18px 0 rgba(123, 62, 255, 0.25)',
      },
      animation: {
        'ease-out': 'ease-out 180ms cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      transitionDuration: {
        'fast': '120ms',
        'normal': '180ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
