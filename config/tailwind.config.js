const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: 'media',
  mode: 'jit',
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Commissioner', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'mc-red': '#F94F4F',
        'mc-red-active': '#FF9393',
        'mc-black': '#191921',
        'mc-black-active': '#434356',
      },
      flexBasis: {
        43: '43%',
        49: '49%',
        51: '51%',
        57: '57%',
        62: '62%',
        38: '38%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.6')} ${theme('spacing.8')}`,
          transition: 'all .2s ease-in-out',
          border: 'transparent 2px solid',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: `${theme('colors.white')}`,
        },
        '.btn-primary': {
          backgroundColor: `${theme('colors.mc-red')}`,
          fontSize: `1.125rem`,
        },
        '.btn-primary:hover, .btn-primary:focus': {
          backgroundColor: `${theme('colors.mc-red-active')}`,
        },
        '.btn-secondary': {
          fontSize: `1rem`,
          backgroundColor: `${theme('colors.mc-black')}`,
        },
        '.btn-secondary:hover, .btn-secondary:focus': {
          backgroundColor: `${theme('colors.mc-black-active')}`,
        },
      }
      const textLinks = {
        '.text-link': {
          color: `${theme('colors.mc-red')}`,
          fontSize: `1.125rem`,
          fontWeight: `${theme('fontWeight.extrabold')}`,
          textDecoration: 'none',
          paddingBottom: `${theme('spacing.2')}`,
          borderBottom: `1px solid ${theme('colors.mc-red')}`,
        },
        '.text-link:hover, .text-link:focus': {
          color: `${theme('colors.mc-red-active')}`,
          outline: 'none',
          borderBottom: `1px solid ${theme('colors.mc-red-active')}`,
        },
      }

      const typography = {
        'h1, h2, h3, h4, h5, h6, .text-link, .btn': {
          fontWeight: `${theme('fontWeight.extrabold')}`,
        },
        '.text-80': {
          fontSize: `5rem`,
          lineHeight: '1.1',
        },
        '.text-56': {
          fontSize: `3.5rem`,
          lineHeight: '1.14',
        },
        '.text-40': {
          fontSize: `2.5rem`,
          lineHeight: '1.14',
        },

        '.text-32': {
          fontSize: `2rem`,
          lineHeight: '1.25',
        },
        '.text-20': {
          fontSize: `1.25rem`,
          lineHeight: '1.6',
        },
        '.text-18': {
          fontSize: `1.125rem`,
          lineHeight: '1.7',
        },
        '.text-15': {
          fontSize: `1.125rem`,
          lineHeight: '1.6',
        },
      }
      addComponents([buttons, textLinks, typography], {
        variants: ['responsive'],
      })
    }),
  ],
}
