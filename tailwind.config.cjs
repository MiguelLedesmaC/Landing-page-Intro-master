/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        Red: 'hsl(0, 100%, 68%)',
        VeryDarkBlue:'hsl(230, 29%, 20%)',
        DarkGrayishBlue: 'hsl(230, 11%, 40%)',
        GrayishBlue: 'hsl(231, 7%, 65%)',
        LightGrayishBlue: 'hsl(207, 33%, 95%)',
      },
      fontFamily: {
        'Barlow':['Barlow','sans-serif'],
        'Condensed':['Barlow Condensed', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}
/**
 * font-family: 'Barlow', sans-serif;
font-family: 'Barlow Condensed', sans-serif;
 */