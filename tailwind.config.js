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
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
