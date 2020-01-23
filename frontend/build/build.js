'use strict'
require('./check-versions')()

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const isWatch = process.env.WATCH == 'true' ? true : false;
const webpackConfig = process.env.NODE_ENV == 'production' ? require('./webpack.prod.conf') : require('./webpack.dev.conf');
const strSpinner = process.env.NODE_ENV == 'production' ? 'building for production...' : 'building for development...';
const spinner = ora(strSpinner)
spinner.start()

rm(path.join(config.prod.assetsRoot, config.prod.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        
        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }
        
        console.log(chalk.cyan('  Build complete.\n'))
        
        if (isWatch) {
            console.log(chalk.cyan('  Watching...\n'))
        }
    })
})
