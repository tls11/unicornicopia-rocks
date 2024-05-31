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
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.shape-outside-none': {
          'shape-outside': 'none',
        },
        '.shape-outside-circle': {
          'shape-outside': 'circle(50%)',
        },
        '.shape-outside-ellipse': {
          'shape-outside': 'ellipse(50% 50%)',
        },
        '.shape-outside-inset': {
          'shape-outside': 'inset(10px 10px 10px 10px)',
        },
        '.shape-outside-polygon': {
          'shape-outside': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        },
        '.shape-outside-url': {
          'shape-outside': 'url(path/to/image.png)',
        },
        // Add more custom shapes as needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
