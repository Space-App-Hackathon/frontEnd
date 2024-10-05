/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}" , "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      "nunito":'./assets/fonts/Nunito-Regular.ttf',
      "nunitoExtraBold":'./assets/fonts/Nunito-ExtraBold.ttf',
      "nunitoBold":'./assets/fonts/Nunito-Bold.ttf',
      "nunitoBlack":'./assets/fonts/Nunito-Black.ttf',
      "nunitoSemiBold":'./assets/fontsNunito-SemiBold.ttf',
  },
  theme: {
    extend: {
      colors:{
        "beyaz":"#FFFFFF",
        "siyah":"#000000",
        "purple":"#6E006C",
        "turunc":"#FF9900",
        "beyazark":"#F1F1F1",
        "beyazbo":"#dddddd",
        "gri": "#414141",
        "griAcik": "#7B7B7B",
        "gri2": "#3a3a3a",
        /*arkaplan> f9*/ 
      },
      fontFamily: {
        "nunito": ['nunito'],
        "nunitoExtraBold": ['nunitoExtraBold'],
        "nunitoBold": ['nunitoBold'],
        "nunitoBlack": ['nunitoBlack'],
        "nunitoSemiBold": ['nunitoSemiBold'],
      },
    }, 
  },
  plugins: [],
} 

