// const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OfflinePlugin = require('offline-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'app', 'index.html'),
  filename: './index.html',
})

const copyPlugin = new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, 'app', 'static'),
    to: path.resolve(__dirname, 'public', 'static')
  }
])

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})

const offlinePlugin = new OfflinePlugin({
  appShell: '/',
  responseStrategy: 'network-first',
})

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'rxjs',
      'event-source-polyfill',
      './app/js/index.js',
      './app/style.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main-[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, './app')],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|scss|css)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loaders: ['url-loader?limit=70000&name=images/[name].[ext]']
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    htmlPlugin,
    copyPlugin,
    cssExtractPlugin,
    offlinePlugin,
  ],
}
