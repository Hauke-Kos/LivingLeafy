/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '10': 'repeat(10, 1fr)'
      },
      gridTemplateRows: {
        '10': 'repeat(10, 1fr)'
      },
      colors: {
        'nice-grey': '#6F6E72',
        'nice-grey-2': '#E2E2E3',
        'nice-grey-3': '#B7B7B9',
        'nice-grey-4': '#6D6D64',
        'nice-green': '#92A332',
        'nice-green-2': '#849531',
        'nice-green-3': '#5DAA68',
        'nice-green-4': '#3F6844'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

