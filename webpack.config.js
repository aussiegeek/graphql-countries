const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/functions/graphql/graphql.ts",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  externals: ["bufferutil", "utf-8-validate"],
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, "build"),
    filename: "functions/graphql/index.js",
  },
  target: "node",
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
