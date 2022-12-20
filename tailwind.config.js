/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      rokkitt: ['Rokkitt', 'serif'],
      V: ['Script MT Bold', 'sans-serif'],
      Machina: ['Neue Machina', 'sans-serif']
    },
    extend: {
            backgroundColor: {
        'main-bg': 'rgba(0, 0, 0, 0.03)',
        'main-dark-bg': '#1B1C1E',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
