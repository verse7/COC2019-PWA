const purgecss = require('@fullhuman/postcss-purge-css')({
  content: [
    './src/**/*.html',
    './src/**/*.vue'
  ],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss
  ]
}
