/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#293054',
        'secondary': '#00b1b1',
        'terceary': '#e6e6e6'
      }
    },
  },
  plugins: [],
}

