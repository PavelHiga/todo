/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    screens: {
      'iphone12':'390px'
    },
    extend: {
      colors: {
        'green1': '#20EEB0',
        'green2': '#21DEA5',
      }
    },
  },
  plugins: [],
}

