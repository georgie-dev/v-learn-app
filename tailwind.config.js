/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      backgroundImage: {
        'hero-pattern':
          "url('https://cdni.iconscout.com/illustration/premium/thumb/college-student-2753733-2294268.png')",
          'test':
           "url('https://cdni.iconscout.com/illustration/premium/thumb/test-administrator-checking-test-results-5968222-4928038.png')",
          'assignment': 
          "url('https://cdni.iconscout.com/illustration/premium/thumb/businessman-with-lots-of-pending-work-5892607-4889693.png')",
          'class': 
          "url('https://cdni.iconscout.com/illustration/premium/thumb/digital-classroom-3465477-2932170.png')",
          'cm': 
          "url('https://cdni.iconscout.com/illustration/premium/thumb/books-3327973-2793942.png')"
      },
    },
  },
  plugins: [],
}
