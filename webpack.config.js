var webpack = require("webpack");
var path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, "src");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: APP_DIR + "/app.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style-loader!css-loader' // Run both loaders
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      // favicon: 'theme/img/favicon.ico',
      inject: true,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};

module.exports = config;
