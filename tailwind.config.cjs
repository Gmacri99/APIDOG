/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      'sans':["Roboto",...defaultTheme.fontFamily.sans]
    },
    extend: {
    },
  },
  plugins: [],
}