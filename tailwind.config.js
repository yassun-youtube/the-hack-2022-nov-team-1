/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      white: '#F5F5F5',
      red: '#ff322e',
      black: '#2C2C2C',
      gray: '#828282',
      lightgray: '#D7E9F4',
      zinc: '#FCFCFC',
      blue: '#1B74AC',
      'bright-gray': '#FEFEFE',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        robot: ['var(--roboto-font)'],
        sans: ['Hiragino Sans'],
      },
    },
  },
}
