var gulp = require('gulp');
var modules = require('./modules.js');
var config = require('./config.js');
var paths = config.paths;
var fs = require('fs');

// Получить все файлы, входящие в сборку main.js из Webpack-овского stats.json
function getSourcesForJs(statsFile) {
	var stats = fs.readFileSync(paths.dist.js + '/' + statsFile);
	if (stats) {
		var statsObj = JSON.parse(stats);
		var files = statsObj.modules
			.map(function (module) {
				var moduleParts = module.identifier.split('!');
				return moduleParts[moduleParts.length - 1]
					.replace(/^\.\//, __dirname);
			})
			.filter(function (module) {
				return !(/^multi /.test(module));
			});
		return files;
	} else {
		console.error('Unable to load webpack\'s stats.json');
	}
}

gulp.task('watch', ['build-js', 'build-styles', 'build-svg'], function () {
	var sassMask = modules.map(function (module) {
		return paths.src.components + '/' + module + '/*.scss';
	});
	sassMask.push(paths.src.styles + '/**/*.scss');

	jsSources = getSourcesForJs('main.stats.json').concat(getSourcesForJs('vendor.stats.json'));
	var jsMask = jsSources || modules.reduce(function (result, module) {
		result.push(paths.src.components + '/' + module + '/*.js');
		result.push(paths.src.components + '/' + module + '/*.json');
		return result;
	}, []);
	jsMask.push('!' + paths.frontend + '/*');

	var svgMask = paths.src.contentSvg + '/*.svg';

	gulp.watch(sassMask, ['build-styles'])
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running style build');
		});

	gulp.watch(jsMask, ['build-js'])
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running js build');
		});

	gulp.watch(svgMask, ['build-svg'])
		.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running svg build');
		});
});
