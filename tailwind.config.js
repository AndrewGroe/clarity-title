module.exports = {
  theme: {
    extend: {
      colors: {
        Blue: {
          light: '#9DB0AC'
        },
        Green: {
          primary: '#015b3a',
          light: '#6e897f',
          dark: '#28322f'
        },
        Mint: '#c3efbe',
        Grey: {
          light: '#c6c6c5'
        }
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    border: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
