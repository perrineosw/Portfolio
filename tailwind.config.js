/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#111111',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, theme, e }) {
      const darkSelector = '.mode-dark';
      const darkClass = 'dark';

      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return `${darkSelector} ${selector.replace(/^(\.[a-zA-Z0-9_-]+)?/, `${darkSelector} $1${separator}`)}`;
        });
      }, { separator: '-' });

      addVariant('dark-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return `${darkSelector} ${selector.replace(/(\:[a-zA-Z0-9_-]+)/, `${separator}${darkClass}$1`)}`;
        });
      }, { separator: '-' });
    }),
    require('tailwindcss-dark-mode')(),
  ],
};
