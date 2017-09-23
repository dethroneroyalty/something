const p = require("path");

module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "chai"],
    files: ["test/integration/**/*.js"],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless"],
    autoWatch: true,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    // concurency: Infinity,

    preprocessors: {
      "src/**/*.js": ["webpack", "sourcemap"],
      "test/**/*.js": ["webpack", "sourcemap"]
    },
    webpack: {
      devtool: "inline-source-map",
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: p.resolve(__dirname, "node_modules")
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
