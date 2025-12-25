/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pop-purple': '#6C25FF',
        'pop-purple-light': '#CEBAFF', // Adjusted to match the light button more closely
        'pop-bg': '#F7F8F9',
        'pop-text': '#1D2226',
        'pop-label': '#575757', // Dark grey for labels
        'pop-header': '#1D2226',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
