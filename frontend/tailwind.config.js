const { height } = require("@fortawesome/free-brands-svg-icons/fa42Group");

module.exports = {
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      height: {
        '100svh': '100vh',
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};