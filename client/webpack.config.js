const p = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: p.resolve(__dirname, "../public")
  },
  devtool: "cheap-module-source-map",
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
