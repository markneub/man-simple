var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpackConfig = require('./webpack.config')

webpackConfig.devtool = false

webpackConfig.plugins.push(
  new CleanWebpackPlugin(['dist'])
)

webpackConfig.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].[chunkhash:4].js'
}

module.exports = webpackConfig
