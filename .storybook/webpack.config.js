// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')

module.exports = {
  resolve: {
    modules: [
      'node_modules', path.join(__dirname, '../', 'app', 'js'),
      path.join(__dirname, '../', 'app', 'static')
    ],
  },
  module: {
    rules: [
      // add your custom rules.
      // Load styles
      {
        test: /\.(scss|css)/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url-loader?limit=70000&name=images/[name].[ext]']
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
    ],
  },
};
