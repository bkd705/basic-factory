const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-source-map',

  entry: './Factory',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Factory.js'
  }, 

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]

}