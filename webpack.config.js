/* global __dirname, require, module*/

const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2
const pkg = require("./package.json");

let libraryName = pkg.name;

let plugins = [],
  outputFile;

if (env === "build") {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + ".min.js";
} else {
  outputFile = libraryName + ".js";
}

const config = {
  entry: __dirname + "/src/money.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"]
  },
  plugins: plugins,
  externals: [
    "axios",
    "lodash.defaults",
    "odd-error_object",
    "odd-fetching_data_options_service"
  ]
};

module.exports = config;
