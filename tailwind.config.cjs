/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'textGrey': '#62656C',
        'textOrange': '#FE0000',
        'backgroundGrey':'#62656C',
        'footerBlack':'#232323',
        'bgGrey':	'#6A6D77',
        'bgOrange':'#F3AA5F',
        'bgOrange2':'#E97000',
        'bgBrown':'#5a2d03',
        'bgWhite':"#F1F1F1",
        'bgGrey2':"#3f3E3D",
        'bgGrey3': "#EEEEEE",
      }
    },
    backgroundImage: (theme) => ({
      "gradient-rainbow":
        "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

      "gradient-rainblue":
        "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
    }),
    screens: {
      xxs:"400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd:"900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      dmserif: ['DM Serif Display', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      jost: ['jost','serif'],
      anton: ['anton','sans-serif'],
      montserrat:['Montserrat','sans-serif']
      
    }
  },
  plugins: [],
}
