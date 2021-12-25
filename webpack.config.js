const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            exclude: /node_modules/,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: __dirname,
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
