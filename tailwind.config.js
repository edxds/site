module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        // 'Manrope',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: {
          contrast: 'white',
          DEFAULT: 'hsl(150, 75%, 40%)',
          shadow: 'hsla(150, 75%, 40%, 0.2)',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      screens: {
        hoverable: { raw: '(hover)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
