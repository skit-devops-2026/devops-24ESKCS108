/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B7A4A',
          dark: '#0F5132',
          light: '#E7F5EC',
        },
        accent: '#34D399',
        success: '#22C55E',
        gray: {
          900: '#10241A',
          600: '#56685F',
          200: '#DDE8E1',
        },
        background: '#F6FAF8',
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '22px',
      },
      boxShadow: {
        'sm': '0 2px 12px rgba(15, 81, 50, 0.07)',
        'md': '0 18px 40px rgba(15, 81, 50, 0.14)',
      },
    },
  },
  plugins: [],
}
