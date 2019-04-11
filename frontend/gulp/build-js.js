var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack-config.js');
var config = require('./config.js');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var del = require('promised-del');
var objectAssign = require('object-assign');

gulp.task('clean-js', function() {
		return del([config.paths.dist.js + '/**/*']);
});

gulp.task('build-js', ['clean-js'], function(callback) {
		var config = objectAssign({}, webpackConfig);

		if (argv.production) {
				gutil.log('Production mode');
				config.plugins = [
						new webpack.optimize.UglifyJsPlugin({
								compress: {
										warnings: false
								},
								exclude: [
										/\.min\.js/i
								],
								mangle: {
										except: ['$', 'exports', 'require']
								}
						})
				];
		}

		webpack(webpackConfig, function(err, stats) {
				if (err) {
						throw new gutil.PluginError('webpack', err);
				};
				gutil.log('[webpack]', stats.toString({}));
				callback();
		});
});