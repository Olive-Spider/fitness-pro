/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-0.02em',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'white': '#FCFCFD',
      'gray': '#F4F5F6',
      'black': '#141416',
      'logo': '#23262F',
      'light-gray': '#E6E8EC',
      'nav-gray': '#777E91',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "Source Sans Pro"],
        pro:["Source Sans Pro", "sans-serif"],
      },
      height: {
        '1' : '144px',
      },
      width : {
        '1' : '1440px',
      },
      gap: {
        '1' : '249px'
      },
      margin: {
        '1' : '200px',
        '2' : '375px',
        '3' : '432px',
        '4' : '72px',
        '5' : '997px',
        '6' : '62px',
        '7' : '1041px',
        '8' : '1085px',
        '9' : '1169px',
        '10': '52px',
        '11': '60px',
        '13': '340px',
        '01': '362px',
      }
    },
  },
  plugins: [],
}

