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
      blue: '#007AC8',
    },
  },
  plugins: [],
}
