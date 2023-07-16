import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./helpers/buildPlugins";
import {buildLoaders} from "./helpers/buildLoaders";
import {buildResolvers} from "./helpers/buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
