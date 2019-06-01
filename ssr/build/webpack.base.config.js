const path = require('path')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

let baseConfig = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('server')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(baseConfig, prodConfig)
} else if (process.env.NODE_ENV === 'development') {
  module.exports = merge(baseConfig, devConfig)
}
