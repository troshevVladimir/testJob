var arrayUniq = require('array-uniq');
var config = require('./config.js');
var paths = config.paths;
var modules = require(config.paths.defaultModulesJson);
modules.splice(0, 0, 'core');
modules = arrayUniq(modules);
var fs = require('fs');

var knownModules = [];

//TODO переименовать все модули и варианты в соответствиии с битрикс24, фронтендом и бекэндом

// Преобразуем массив вариантов модулей, добавляя корневую директорию модуля и оставляя только те директории, которые реально существуют
dirs = modules.reduce(function (dirs, module, index) {
	var moduleName;
	var variantName;
	module = module
		.replace('.', '-');
	var lastSlashIndex = module.lastIndexOf('/');

	function checkAndAdd(relativeComponentPath) {
		var error;
		if (fs.accessSync) {
			try {
				fs.accessSync(paths.src.components + '/' + relativeComponentPath, fs.F_OK);
			} catch (e) {
				error = e;
			}
		} else {
			error = !fs.existsSync(paths.src.components + '/' + relativeComponentPath);
		}
		if (!error) {
			dirs.push(relativeComponentPath);
		}
	}

	if (lastSlashIndex > -1) {
		moduleName = module.slice(0, lastSlashIndex);
		variantName = module.slice(lastSlashIndex + 1);
	} else {
		moduleName = module;
	}
	if (knownModules.indexOf(moduleName) === -1) {
		knownModules.push(moduleName);
		checkAndAdd(moduleName);
	}
	if (variantName) {
		checkAndAdd(moduleName + '/' + variantName);
	}
	return dirs;
}, []);

console.log('Selected component folders:\n    ' + dirs.join('\n    '));
module.exports = dirs;
