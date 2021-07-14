const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')

module.exports = {
  plugins: [
    new MangleCssClassPlugin({
      classNameRegExp: '[cl]-[a-z][a-zA-Z0-9_]*',
      log: true,
    }),
  ],
}
