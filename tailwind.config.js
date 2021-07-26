
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './components/**/*.{js, ts, jsx, tsk}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ['SummerCalling', 'sans-serif']
         
    },
    backgroundImage: (theme) => ({
      'sign-up': "url('./images/wine 4 bg.jpeg')",
      'sign-in': "url('./images/sign in bg 2.png')"
    })
  },
  variants: {},
  plugins: [],
}
