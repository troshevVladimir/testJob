'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const chalk = require('chalk')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isWatch = process.env.WATCH == 'true' ? true : false;

const env = require('../config/dev.env')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

class WatchRunPlugin {
    apply(compiler) {
        compiler.hooks.watchRun.tap('WatchRun', (comp) => {
            const changedTimes = comp.watchFileSystem.watcher.mtimes;
            const changedFiles = Object.keys(changedTimes)
            .map(file => `\n  ${file}`)
            .join('');
            if (changedFiles.length) {
                console.log("====================================\n")
                console.log(chalk.yellow(' Files changed:', changedFiles))
                console.log("\n")
            }
        });
    }
}

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    watch: isWatch,
    watchOptions: {
        poll: true
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.devSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.dev.devSourceMap ? config.dev.devtool : false,
    output: {
        path: config.dev.assetsRoot,
        filename: utils.assetsPath('javascripts/[name].js'),
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        // extract css into its own file
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('stylesheets/[name].css'),
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.NamedChunksPlugin(),
        new webpack.HashedModuleIdsPlugin(),

        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ],
    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
        runtimeChunk: 'single',
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                sourceMap: config.dev.devSourceMap,
                parallel: true
            }),
        ],
    },
})

if (isWatch) {
    webpackConfig.plugins.push(new WatchRunPlugin())
}

if (config.dev.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
