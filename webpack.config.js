const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer')

const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'assets')

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev')

module.exports = {
  entry: {
    app: ['classie', path.join(dirApp, 'index')]
  },
  resolve: {
    modules: [
      'node_modules',
      dirAssets,
      dirApp
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    }),
    new webpack.DefinePlugin({
      IS_DEV
    }),
    new webpack.ProvidePlugin({
      classie: 'classie'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      favicon: path.join(__dirname, 'favicon.ico'),
      minify: !IS_DEV ? {
        removeComments: true,
        collapseWhitespace: true
      } : false
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'projects'),
      to: path.join(__dirname, 'dist', 'projects')
    }])
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
          use: ['css-loader', 'sass-loader', 'postcss-loader']
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
