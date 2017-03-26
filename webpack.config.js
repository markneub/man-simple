var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var dirApp = path.join(__dirname, 'app')
var dirAssets = path.join(__dirname, 'assets')

// Is the current build a development build
var IS_DEV = (process.env.NODE_ENV === 'dev')

module.exports = {
  entry: {
    app: path.join(dirApp, 'index')
  },
  resolve: {
    modules: [
      'node_modules',
      dirAssets,
      dirApp
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      minify: !IS_DEV ? {} : false
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }, {
        test: /\.(jpe*g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
}
