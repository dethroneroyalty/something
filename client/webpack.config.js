const p = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: p.resolve(__dirname, "../public")
    //  publicPath: "/bundle",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": "http://localhost:3001"
    },
    contentBase: p.resolve(__dirname, "../public"),
    compress: true
  },
  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  }
};
