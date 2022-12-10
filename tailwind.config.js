/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#F5F5F5',
      red: '#ff322e',
      black: '#2C2C2C',
      gray: '#828282',
      lightgray: '#D7E9F4',
      zinc: '#FCFCFC',
      blue: '#007AC8',
    },
    extend: {
      fontFamily: {
        robot: ['var(--roboto-font)'],
        sans: ['Hiragino Sans'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
