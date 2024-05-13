/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        cornorange: '#ff8f2c',
        cornpurple: '#b500f0'
      },
      fontFamily: {
        alba: ['alba_matter'],
        teko: ['tekoregular'],
      }
    },
  },
  plugins: [],
}
