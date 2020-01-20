/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      width: {
        '128': '128px',
        '256': '256px',
        '384': '384px',
        '512': '512px',
        '1024': '1024px'
      },
      height: {
        '128': '128px',
        '256': '256px',
        '384': '384px',
        '512': '512px',
        '1024': '1024px'
      },
      colors: {
        custom: {
          100: '#FBFBFB',
          200: '#027AFF'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
