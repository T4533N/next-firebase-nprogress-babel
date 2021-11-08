module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'primary-black': '#141A16',
      'primary-white': '#F6F4F2',
    }),

    extend: {
      backgroundImage: {
        'wojack-think': "url('/images/wojack-think.png')",
        'flower-frame': "url('/images/frame.png')",
      },

      height: {
        '30-rem': '30rem',
        '32-rem': '32rem',
      },

      width: {
        '30-rem': '30rem',
        '39-rem': '39rem',
      },

      colors: {
        'primary-black': '#141A16',
        'primary-white': '#F6F4F2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui')
  ],
}
