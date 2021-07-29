const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
  }
  
  module.exports = {
    mode: mode,
  
    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext][query]",
    },
  
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s?css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: "" },
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset",
        },
      ],
    },
  
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
  };