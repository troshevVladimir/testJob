const webpack = require('webpack');
const gutil = require('gulp-util');
const argv = require('yargs').argv;
const config = require('./config.js');
const path = require('path');
const paths = config.paths;
const modules = require('./modules.js');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const mergeOptions = require('merge-options');
const StatsPlugin = require('stats-webpack-plugin');
const fs = require('fs');

// Список языков для локализованных модулей
var languages = ['en', 'ru'];

// Базовая конфигурация для всех модулей
var baseConfig = {
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			component: paths.src.components,
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			// {
			// 	enforce: 'pre',
			// 	test: /\.js$/,
			// 	exclude: [
			// 		/node_modules/,
			// 		/jquery\.[^\s]+\.js$/,
			// 		/\.min\.js$/
			// 	],
			// 	loader: 'jscs-loader'
			// },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: [
							{
								loader: 'babel-loader',
								options: {
									cacheDirectory: 'cache',
									presets: ['es2015'],
									plugins: [
										'transform-es3-member-expression-literals',
										'transform-es3-property-literals'
									] //Полифил для IE8
								}
							}
						]
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: 'cache',
					presets: ['es2015'],
					plugins: [
						'transform-es3-member-expression-literals',
						'transform-es3-property-literals'
					] //Полифил для IE8
				},
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: 'cache',
					presets: ['react', 'es2015'],
					plugins: [
						'transform-es3-member-expression-literals',
						'transform-es3-property-literals'
					] //Полифил для IE8
				},
				exclude: /node_modules/
			},
			{
				test: /\.modernizrrc$/,
				loader: "modernizr-loader!json-loader"
			},
			{
				test: /\.svg$/,
				use: 'raw-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.handlebars$/,
				use: 'handlebars-loader'
			},
			{
				test: /\.ejs$/,
				use: 'ejs-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: 'url-loader'
			}
		]
	},
	resolveLoader: {
		moduleExtensions: ["-loader"]
	},
	plugins: [
		new webpack.DefinePlugin({
			'\.catch': '["catch"]',
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en-gb/),
		new webpack.LoaderOptionsPlugin({
			options: {
				context: __dirname,
				postcss: [
					autoprefixer, cssnext, precss
				]
			}
		})
	],
	output: {
		path: paths.dist.js,
		pathinfo: true,
		publicPath: paths.templatePathSiteRelative + 'javascripts/'
	}
};

// Минификация при сборке в продакшн
if (argv.production) {
	gutil.log('Production mode');
	baseConfig.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: true
			},
			exclude: [
				/\.min\.js/i
			],
			mangle: {
				except: ['$', 'exports', 'require']
			}
		})
	);
	// baseConfig.plugins.push(
	// 	new webpack.DefinePlugin({
	// 		'process.env.NODE_ENV': '"production"',
	// 		'process.env.BLUEBIRD_WARNINGS': 0,
	// 	})
	// );
}

// Конфигурация модуля сторонних библиотек
var vendorConfig = mergeOptions(baseConfig, {
	entry: {
		vendor: [
			'expose-loader?Promise!bluebird',
			'expose-loader?$!jquery',
			'velocity-animate/velocity.js',
			'velocity-animate/velocity.ui.js',
			'jquery-validation/dist/jquery.validate.js'
		]
	},
	output: {
		filename: '[name].js'
	}
});

vendorConfig.plugins.push(new webpack.ProvidePlugin({
	jQuery: 'jquery',
	$: 'jquery',
	'window.jQuery': 'jquery',
	'root.jQuery': 'jquery',
	'window.Promise': 'bluebird'
}));
vendorConfig.plugins.push(new StatsPlugin('vendor.stats.json', {
	chunkModules: true,
	source: false,
	exclude: [/node_modules[\\\/]react/]
}));

// Конфигурация главного модуля
var mainConfig = mergeOptions(baseConfig, {
	entry: {
		main: ['./frontend/main.js']
	},
	devtool: 'source-map',
	output: {
		filename: '[name].js'
	},
	// loader, заменяющий вызовы определённых функций в исходнике на их результат
	plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true,
			options: {
				callbackLoader: {
					// Генерация require для всех используемых модулей
					requireComponents: function () {
						return modules.map(function (module) {
							var lastSlashIndex = module.lastIndexOf('/');
							var entryName = lastSlashIndex > -1 ? module.slice(lastSlashIndex + 1) : module;

							var filePath = paths.src.components + '/' + module + '/' + entryName + '.js';
							var customFilePath = paths.src.components + '/' + module + '/' + entryName + '.custom.js';

							if (fs.existsSync(customFilePath)) {
								return `require("${customFilePath}");`;
							} else if (fs.existsSync(filePath)) {
								return `require("${filePath}");`;
							} else {
								return '';
							}
						}).join('\n');
					}
					// ,
					// Получение координат из Google Maps по запросу
					// getCoords: function (address) {
					// 	var coords = googleCoords(address);
					// 	return '[' + coords.lng + ', ' + coords.lat + ']';
					// }
				}
			}
		})
	]
});
mainConfig.plugins.push(new StatsPlugin('main.stats.json', {
	chunkModules: true,
	source: false,
	exclude: [/node_modules[\\\/]react/]
}));

// Итоговая конфигурация модулей
module.exports = [vendorConfig, mainConfig];

// Добавление локализованных модулей
// module.exports = module.exports.concat(
// 	languages.map(function (language) {
// 		return mergeOptions(baseConfig, {
// 			entry: {
// 				'tour': ['callback!frontend/components/tour/tour.js']
// 			},
// 			devtool: 'source-map',
// 			output: {
// 				filename: '[name].' + language + '.js'
// 			},
// 			callbackLoader: {
// 				localize: function (textObj) {
// 					return '"' + textObj[language] + '"';
// 				},
// 				getLanguage: function () {
// 					return '"' + language + '"';
// 				}
// 			}
// 		})
// 	})
// );
