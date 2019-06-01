// const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  entry: './src/entry-client.js',
  output: {
    filename: '[name].client.js'
  }
})