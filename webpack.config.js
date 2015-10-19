var webpack = require('webpack');

module.exports = {
  entry: ["./app.es6.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.es6.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};