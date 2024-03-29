import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './helpers/buildPlugins';
import { buildLoaders } from './helpers/buildLoaders';
import { buildResolvers } from './helpers/buildResolvers';
import { buildDevServer } from './helpers/buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
