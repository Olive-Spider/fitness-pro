/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    // fontSize: {
    //   top: ['64px', '64px'],
    //   base: ['1rem', '1.5rem'],
    //   '5xl': ['3rem', '1'],
    // },
    letterSpacing: {
      tight: '-0.02em',
    },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },

    colors: {
      neutral3: '#23262F',
      neutral4: '#777E90',
      neutral8: '#FCFCFD',
    },

    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        sidebar: 'hsl(var(--sidebar))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        darkbg: {
          DEFAULT: 'hsl(var(--dark-background))',
        },
      },
      lineHeight: {
        12: '56px',
      },
      padding: {
        '01': '136px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "Source Sans Pro"],
        pro:["Source Sans Pro", "sans-serif"],
      },
      height: {
        1: '144px',
        2: '880px',
        '01': '288px',
        '02': '192px',
        '03': '800px',
        '04': '124px',
      },
      width: {
        1: '1440px',
        '01': '545px',
        '02': '448px',
        '03': '155px',
        '04': '141px',
        '05': '544px',
      },
      gap: {
        1: '249px',
        '01': '10px',
      },
      margin: {
        1: '200px',
        2: '375px',
        3: '432px',
        4: '72px',
        5: '997px',
        6: '62px',
        7: '1041px',
        8: '1085px',
        9: '1169px',
        10: '52px',
        11: '60px',
        13: '340px',
        '01': '362px',
        '02': '171px',
        '03': '16px',
        '04': '480px',
        '05': '204px',
        '06': '20px',
        '07': '12px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

