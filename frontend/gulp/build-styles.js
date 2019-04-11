var gulp = require('gulp');
var config = require('./config.js');
var paths = config.paths;
var compass = require('gulp-compass');
var del = require('promised-del');
var modules = require('./modules.js');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var mergeStream = require('merge-stream');
var pad = require('pad-number');
var bless = require('gulp.bless');
var argv = require('yargs').argv;

// Полная очистка выходной директории со стилями
gulp.task('clean-styles-completely', function () {
	return del([config.paths.dist.css + '/**/*']);
});

// Очистка css в выходной директории со стилями
gulp.task('clean-styles', function () {
	return del([config.paths.dist.css + '/*.css']);
});

gulp.task('clean-temp', function () {
	return del(paths.temp + '/**/*');
});

// Копирование нужных (из modules.json) scss во временную директорию с сохранением порядка
gulp.task('copy-style-imports', ['clean-temp'], function () {
	var merged = mergeStream();

	modules.forEach(function (module, index) {
		var componentName = '';
		if (module.indexOf('/') > 0) {
			componentName = module.substr(0, module.indexOf('/')) + '__';
		}
		merged.add(
			gulp.src(paths.src.components + '/' + module + '/!(*.custom).scss')
				.pipe(rename({
					prefix: '_' + pad(index + 1, 3) + '-' + componentName
				}))
				.pipe(gulp.dest(paths.temp))
		);
		merged.add(
			gulp.src(paths.src.components + '/' + module + '/*.custom.scss')
				.pipe(rename({
					prefix: '_' + pad(index + 1, 3) + 'c-' + componentName
				}))
				.pipe(gulp.dest(paths.temp))
		);
	});
	return merged;
});

// Сборка через Compass стилей с импортом стилей из временной директории
gulp.task('compass', ['clean-styles', 'copy-style-imports'], function () {
	return gulp.src(paths.src.styles + '/**/*.scss')
		.pipe(compass({
			css: paths.dist.css,
			sass: paths.src.styles,
			image: paths.src.images,
			sourcemap: true,
			comments: argv.production ? false : true,
			require: ['sass-globbing']
		}));
		gulp.src(paths.src.components + '/' + module + '/*.custom.scss')
			.pipe(rename({
				prefix: '_' + pad(index + 1, 3) + 'c-' + componentName
			}))
			.pipe(gulp.dest(paths.temp))
});

// Обработка собранных css стилей в postcss
gulp.task('postcss', ['clean-styles', 'compass'], function () {
	var svgPaths = modules.map(function (module) {
		return paths.src.components + '/' + module;
	});
	svgPaths.push(paths.src.svgIcons);
	var postcssProcessors = [
		// Вставка svg в тело css
		require('postcss-svg')({
			paths: svgPaths
		}),
		// Сжатие svg в css-е
		require('postcss-svgo')(),
		// Генерирование png-заглушек для старых браузеров
		require('postcss-svg-fallback')({
			dest: paths.dist.css,
			fallbackSelector: '.mdr-no-svg' // Префикc css-правил для заглушек
		}),
		require('postcss-flexbugs-fixes')(),
		// Расстановка префиксов браузеров
		require('autoprefixer')({
			browsers: [
				'> 1%',
				'last 4 versions',
				'ie > 8',
				'Opera > 30',
				'Firefox > 40.0',
				'Safari > 5.1.7',
				'Chrome > 43.0'
			]
		}),
		require('postcss-unique-selectors'),
		require('postcss-discard-duplicates')
	];

	if (argv.production) {
		postcssProcessors.push(require('postcss-clean'));
	}

	return gulp.src(paths.dist.css + '/*.css')
		.pipe(postcss(postcssProcessors))
		.pipe(gulp.dest(paths.dist.css))
		// .pipe(postcss([require('postcss-discard-comments')]))
		// .pipe(bless())
		.pipe(gulp.dest(paths.dist.css + '/split'));
});

gulp.task('build-styles', ['postcss'], function () {
	return del(paths.temp + '/**/*');
});
