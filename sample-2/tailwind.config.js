/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5p': '5%',
      },
      transformStyle: {
        'preserve-3d':'preserve-3d',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.68, 0.85, 0.265, 1.85)',
      },
      boxShadow: {
        'custom': 'inset 1px 1px 2px #fff, 0 0 5px #4442',
      },
      backgroundPosition: {
        'custom-pos': '-100px 100px, -100px 100px',
      },
      transform: {
        'custom-transform': 'perspective(180px) rotateX(60deg) translateY(2px)',
      },
      boxShadow: {
        'custom-green': '0px 10px 10px #00ff00',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.68, -0.85, 0.265, 1.55)',
      },
    },
  },
  variants: {
    extend: {
      transformStyle: ['responsive'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      });
    },
  ],
}