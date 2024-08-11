import webpack, { Configuration, EnvironmentPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
// import { envVars } from "../env/variables";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    // new EnvironmentPlugin(envVars),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }

  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
}
