const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cataas.com'],
  },
  plugins: [
    new MangleCssClassPlugin({
      classNameRegExp: '[cl]-[a-z][a-zA-Z0-9_]*',
      log: true,
    }),
  ],
}
