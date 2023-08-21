import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          auto: /\w+\.module\.\w+$/,
          localIdentName: isDev ? '[name]__[local]' : '[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
})