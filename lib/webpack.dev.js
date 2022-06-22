const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HotModuleReplacementPlugin = reuqire('hot-module-replacement-plugin')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServe: {
    contentBase: './dist',
    hot: true,
    stats: 'error-only'
  },
  devtool: 'cheap-source-map'
}

module.exports = merge(commonConfig, devConfig)
