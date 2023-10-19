/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],

  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  darkMode: 'class',
}
