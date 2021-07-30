
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './components/**/*.{js, ts, jsx, tsk}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ['SummerCalling', 'sans-serif']
         
    },
    theme: {
      padding: {
        sm: '8px',
      },
      screen: {
        md: '768px'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgPages': '#ede9c6'
    }),
    backgroundImage: (theme) => ({
      'sign-up': "url('./images/wine_promotion_background_bottle_pouring_glass_decoration_6827707.jpeg')",
      'sign-in': "url('./images/sign in bg 2.png')",
      'bg-winelist': "url('./images/134643784-composition-of-wine-bottle-wineglass-and-piece-of-cheese-retro-style-black-and-white-vector-illustra.jpeg')",
      'bg-private': "url('./images/7-72497_wine-glass-line-art-drawing-work-of-art.png')",
      'bg-navbar-footer': "url('./images/wine 1 bg.png')",
      'bg-addwine': "url('./images/images.png')"

    })
    
  },
  variants: {},
  plugins: [],
}
