var gulp = require('gulp');
var config = require('./config.js');
var paths = config.paths;
var del = require('promised-del');
var shell = require('gulp-shell');
var mdoc = require('mdoc');
var argv = require('yargs').argv;

// var through = require('through2');
// var jsdoc = require('jsdoc/cli.js');

// var jsdocStream = through.obj(function(file, encoding, callback) {
// 	callback(null, doSomethingWithTheFile(file));
// });
if (!argv.production) {
	gulp.task('clean-docs', function() {
		return del([config.paths.dist.docs + '/**/*']);
	});

	gulp.task('build-docs', ['clean-docs'], function() {
		return mdoc.run({
			inputDir: 'frontend/components',
			outputDir: config.paths.dist.docs,
			mapTocName: function (fileName, tocObject, title) {
				return fileName
					.replace('\\readme', '')
					.replace('.html', '')
					.replace('\\', ' / ');
			}
		});


		//JSDocs:
		// return gulp.src(paths.src.components + '/**/*.js', {read: false})
		// 	.pipe(shell('jsdoc <%= file.path %> -d ' + paths.dist.docs));
	});
}
