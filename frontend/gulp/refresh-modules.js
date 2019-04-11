var gulp = require('gulp');
var Promise = require('bluebird');
var fs = require("fs");
var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);
var config = require('./config.js');
var paths = config.paths;
require('colors');
var jsdiff = require('diff');
var readline = require('readline');

// Регулярка, выцепляющая подключение компонент Битрикс
var headerRegexp = /IncludeComponent\(\s*"([^"]+)".\s*"([^"]*)"/gi;

/**
 * Получить список компонентов и шаблонов из конструкций IncludeComponent в php
 * @param  {String} source Исходный код php
 * @return {Array}         Массив строк "компонент/шаблон"
 */
function getComponentTemplates(source) {
	var moduleTemplates;
	var result = [];
	while (moduleTemplates = headerRegexp.exec(source)) {
		result.push(moduleTemplates[1] + '/' + moduleTemplates[2]);
	}
	return result;
}

/**
 * Сохранить новые настройки модулей и шаблонов в файл
 * @param  {Array} modules Массив строк "компонент/шаблон"
 * @return {Promise}
 */
function saveModules(modules) {
	var str = JSON.stringify(modules, null, '    ');
	return writeFile(config.paths.modulesJson, str);
}

gulp.task('refresh-modules', function (done) {

	// Парсим все нужные php-файлы на предмет подключенных компонент и получаем массив строк "компонент/шаблон"
	Promise.reduce([
			paths.templatePath + '/header.php',
			paths.templatePath + '/footer.php'
		], function (total, fileName) {
			return readFile(fileName, 'utf8')
				.then(function (contents) {
					return total.concat(getComponentTemplates(contents));
				});
		}, [])
		// Передаём полученный массив дальше
		.then(function (total) {
			// Читаем имеющийся файл со списком компонент
			return readFile(config.paths.modulesJson, 'utf8')
				.then(function (contents) {
					var diff = jsdiff.diffJson(JSON.parse(contents), total);

					// Если различий нет, говорим и выходим
					if (diff.length === 1 && !diff[0].added && !diff[0].removed) {
						console.log('The file is the same. We don\'t need to change it.');
						return true;
					}

					// Выводим список различий
					diff.forEach(function (part){
						var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
						process.stdout.write(part.value[color]);
					});

					// Спрашиваем, сохранять их или нет
					return new Promise(function (resolve, reject) {
						var rl = readline.createInterface({
							input: process.stdin,
							output: process.stdout
						});
						rl.question('Do you agree with this changes? Should we save them? (say "y" for agree) ', function (answer) {
							var save = (answer === 'y' || answer === 'Y');
							rl.close();
							if (save) {
								resolve(saveModules(total));
							} else {
								console.log('Ok, we\'ll keep the old file.');
								resolve();
							}
						});
					});
				});
		})
		.catch(function (e) {
		    console.log("Error reading file", e);
		});
});
