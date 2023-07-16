import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "../types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            auto: /\w+\.module\.\w+$/,
            localIdentName: isDev ? '[name]__[local]' : '[hash:base64:5]'
          },
        }
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    styleLoader
  ]
}
