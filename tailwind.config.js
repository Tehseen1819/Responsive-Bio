/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-body': '#F9F7F7',
        'light-text' : '#112D4E',
        'light-btn': '#DBE2EF',
        'dark-body': '#181C14',
        'dark-text': '#ECDFCC',
        'dark-btn': '#3C3D37',

        
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

