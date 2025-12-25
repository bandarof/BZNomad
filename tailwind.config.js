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
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideInDown: 'slideInDown 0.8s ease-out',
        slideInUp: 'slideInUp 0.8s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
