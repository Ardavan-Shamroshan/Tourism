/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        'md' : '56%'
      }
    },
    container : {
      center: true,
      padding: '1rem'
    },

    fontFamily: {
      'iransans': 'IRANSans',
    }
  },
  plugins: [],
}
