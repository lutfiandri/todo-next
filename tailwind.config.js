const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '4rem'
      }
    }
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'focus'],
      outline: ['focus'],
    },
  },
  plugins: [forms],
}
