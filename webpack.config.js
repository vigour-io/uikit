var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }, {
        test: /\.js$/,
        // exclude: /node_modules/,
        // loaders: ["babel-loader"],
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
