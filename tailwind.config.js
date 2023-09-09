const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './assets/**/*.svg'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // https://www.tailwindshades.com/#color=277.94871794871796%2C100%2C22.941176470588236&step-up=10&step-down=7&hue-shift=0&name=default&base-stop=7&v=1&overrides=e30%3D
        'primary': {
          DEFAULT: '#4A0075',
          50: '#E8C2FF',
          100: '#DFA8FF',
          200: '#CC75FF',
          300: '#BA42FF',
          400: '#A70FFF',
          500: '#8B00DB',
          600: '#6A00A8',
          700: '#4A0075',
          800: '#330051',
          900: '#1D002E',
          950: '#12001C'
        },
        // https://www.tailwindshades.com/#color=25.987261146496813%2C91.81286549707605%2C66.47058823529412&step-up=8&step-down=11&hue-shift=0&name=tan-hide&base-stop=4&v=1&overrides=e30%3D
        'secondary': {
          DEFAULT: '#F89F5B',
          50: '#FEEFE4',
          100: '#FDE4D0',
          200: '#FBCDA9',
          300: '#FAB682',
          400: '#F89F5B',
          500: '#F68025',
          600: '#DA6309',
          700: '#A44B07',
          800: '#6E3205',
          900: '#381A02',
          950: '#1D0D01'
        },
        'neutral': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506'
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
