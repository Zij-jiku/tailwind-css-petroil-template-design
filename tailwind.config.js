/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#F40404',
        'para': '#6C6C6C',
        'bordercolor': '#FFB800',
        'darklight': 'rgba(0,0,0,.6)',
        'transparentbgcolor' : 'rgba(255, 255, 255, 0.5)'
      },
      maxWidth: {
        'container': '1144px',
      }
    },
  },
}
