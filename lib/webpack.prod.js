const { merge } = require('webpack-merge')
const cssnano = require('cssnano')
const commonConfig = require('./webpack.common')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackExternalsplugin = require('html-webpack-externals-plugin')
// treeShaking scopeHosting 在 webpack4 中默认内置
const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackExternalsplugin({
      externals: [
        {
          module: "react",
          entry:"https://unpkg.com/react@17/umd/react.production.min.js",
          global: "React"
        },
        {
          module: "react-dom",
          entry:"https://unpkg.com/react-dom@17/umd/react-dom.development.js",
          global: "ReactDOM" 
        }
      ]
    })
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  }
}

module.exports = merge(commonConfig, prodConfig)