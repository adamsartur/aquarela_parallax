/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      g_green800: '#59574a',
      g_green600: '#778c79',
      g_green400: '#87bfb4',
      g_green100: '#eef2cf',
      g_red100: '#f2cfbb',
      g_red200: '#f3a2b1',
      g_red400: '#f36d78',
      g_red800: '#8c292c',
    }
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
