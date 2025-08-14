/**
 * TailwindCSS configuration
 *
 * This file defines the files Tailwind should scan for class names
 * and extends the default theme to provide a modern, technology-focused
 * design language. Feel free to adjust the colors, font sizes and other
 * design tokens to better suit your brand.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5faff',
          100: '#e0f2ff',
          200: '#bfe5ff',
          300: '#99d6ff',
          400: '#66c2ff',
          500: '#33adff',
          600: '#0088ff',
          700: '#006bcf',
          800: '#00529f',
          900: '#00336f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};