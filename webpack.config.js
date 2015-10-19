module.exports = {
  entry: ["./app.es6"],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}