var gulp = require('gulp');
var config = require('./config.js');
var gutil = require('gulp-util');
var del = require('promised-del');
var paths = config.paths;
var svgmin = require('gulp-svgmin');
var raster = require('gulp-raster');
var rename = require('gulp-rename');

// Очистка svg и png в выходных директориях
gulp.task('clean-svg', function () {
	return del([
		paths.dist.contentSvg + '/**/*',
		paths.dist.contentPng + '/**/*'
	]);
});

// Оптимизация контентных svg и генерация png-заглушек для них
gulp.task('build-svg', ['clean-svg'], function () {
	return gulp.src(paths.src.contentSvg + '/**/*.svg')
		.pipe(svgmin({
			plugins: [
				{cleanupIDs: false},
				{collapseGroups: false},
				{removeHiddenElems: false},
				{removeRasterImages: false},
				{removeTitle: false},
				{convertShapeToPath: false}
			]
		}))
		.pipe(gulp.dest(paths.dist.contentSvg))
		.pipe(raster({format: 'png', scale: 1}))
		.pipe(rename({extname: '.png'}))
		.pipe(gulp.dest(paths.dist.contentPng));
});
