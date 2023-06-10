/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      top: ['64px', '64px'],
      base: ['1rem', '1.5rem'],
      '5xl': ['3rem', '1'],
    },
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
      'orange' : '#FF592C',
      'n-black': '#353945',
    },
    extend: {
      lineHeight: {
        '12': '56px',
      },
      padding: {
        '01': '136px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "Source Sans Pro"],
        pro:["Source Sans Pro", "sans-serif"],
      },
      height: {
        '1' : '144px',
        '2' : '880px',
        '01' : '288px',
        '02' : '192px',
        '03' : '800px',
        '04' : '124px',
      },
      width : {
        '1' : '1440px',
        '01' : '545px',
        '02' : '448px',
        '03' : '155px',
        '04' : '141px',
        '05' : '544px',
      },
      gap: {
        '1' : '249px',
        '01' : '10px'
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
        '02': '171px',
        '03' : '16px',
        '04' : '480px',
        '05' : '204px',
        '06' : '20px',
        '07' : '12px',
      }
    },
  },
  plugins: [],
}

