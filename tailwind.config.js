/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Mochiy: ["Mochiy Pop One", "sans-serif"],
      Fredoka: ["Fredoka", "sans-serif"],
      Quicksand: ["Quicksand", "sans-serif"],
    },
    screens: {
      'tb': '600px',
      'dk': '1200px'
    },
    colors: {
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      primary: '#33CC66',
      secondary: '#FFCC00',
      accent: '#0099CC',
    },
    extend: {},
  },
  plugins: [],
}

