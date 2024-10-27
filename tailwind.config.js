/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'custom': 'inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)',
      },
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

