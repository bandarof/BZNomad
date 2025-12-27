/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0f9fb',
          100: '#e1f3f8',
          200: '#b3e0ea',
          300: '#85cedc',
          400: '#57bbce',
          500: '#2ba8c0',
          600: '#1a8fa8',
          700: '#147690',
          800: '#0e5d78',
          900: '#084460',
        },
        ocean: '#1a8fa8',
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#1a1f2e',
          900: '#111827',
          950: '#0a0e1a',
        },
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(43, 168, 192, 0.5), 0 0 40px rgba(43, 168, 192, 0.3)',
        'glow-teal-lg': '0 0 30px rgba(43, 168, 192, 0.6), 0 0 60px rgba(43, 168, 192, 0.4)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'glow-neon': '0 0 30px rgba(43, 168, 192, 0.7), 0 0 60px rgba(43, 168, 192, 0.4), inset 0 0 20px rgba(43, 168, 192, 0.1)',
      },
      borderColor: {
        glow: 'rgba(43, 168, 192, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(43, 168, 192, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(43, 168, 192, 0.8)' },
        },
        slideInDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInUp: {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(43, 168, 192, 0.5), 0 0 40px rgba(43, 168, 192, 0.3), inset 0 0 20px rgba(43, 168, 192, 0.05)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(43, 168, 192, 0.7), 0 0 60px rgba(43, 168, 192, 0.5), inset 0 0 30px rgba(43, 168, 192, 0.1)'
          },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '14.28%': { transform: 'translateX(0)' },
          '14.29%': { transform: 'translateX(-16.666%)' },
          '28.57%': { transform: 'translateX(-16.666%)' },
          '28.58%': { transform: 'translateX(-33.333%)' },
          '42.86%': { transform: 'translateX(-33.333%)' },
          '42.87%': { transform: 'translateX(-50%)' },
          '57.15%': { transform: 'translateX(-50%)' },
          '57.16%': { transform: 'translateX(-66.666%)' },
          '71.44%': { transform: 'translateX(-66.666%)' },
          '71.45%': { transform: 'translateX(-83.333%)' },
          '85.73%': { transform: 'translateX(-83.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
        carouselFade: {
          '0%, 16.66%': { opacity: '1' },
          '25%, 100%': { opacity: '0' },
        },
        slideDownSlow: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideInDown: 'slideInDown 0.8s ease-out',
        slideInUp: 'slideInUp 0.8s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        carousel: 'carousel 18s ease-in-out infinite',
        carouselFade: 'carouselFade 18s ease-in-out infinite',
        slideDownSlow: 'slideDownSlow 8s ease-in infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
