/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Define custom dark mode and light mode colors
        light: {
          primary: '#f9fafb',
          secondary: '#e5e7eb',
        },
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
        },
      },
      textColor: {
        light: {
          primary: '#1a202c',
          secondary: '#4a5568',
        },
        dark: {
          primary: '#e2e8f0',
          secondary: '#cbd5e0',
        },
      },
    },
  },
  plugins: [],
};