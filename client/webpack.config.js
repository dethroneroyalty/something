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
      //    {
      //      test: /.*/,
      //      include: [p.resolve((__dirname, "pages/admin"))],
      //      loader: 'bundle?lazy&name=admin'
      //    },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: ">1%"
                  },
                  useBuiltIns: true
                }
              ]
            ],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread",
              ["transform-react-jsx", { pragma: "h" }]
            ]
          }
        }
      }
    ]
  }
};
