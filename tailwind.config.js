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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

