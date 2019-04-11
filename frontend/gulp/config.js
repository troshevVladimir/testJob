var path = require('path');
var packageConfig = require('../../package.json').config;

const envPathToTemplates = process.env.PATH_TO_TEMPLATES || './local/templates/';
if (!envPathToTemplates) throw new Error("Missing env PATH_TO_TEMPLATES!");

// Путь к шаблону Битрикс
var templatePath = envPathToTemplates + packageConfig.template + '/';
var templatePathSiteRelative = envPathToTemplates + packageConfig.template + '/';
// var templatePath = './htdocs/bitrix/templates/test/';
var frontendPath = './frontend/';
var htdocsPath = '';
var sgPath = envPathToTemplates + 'styleguide/';

module.exports = {
	paths: {
		templatePath: templatePath,
		templatePathSiteRelative: templatePathSiteRelative,
		sgPath: sgPath,
		root: path.resolve('.'),
		// Временная директория сборки
		temp: path.resolve(frontendPath + '/temp'),
		// Директория фронтенда
		frontend: path.resolve(frontendPath),
		// Файл со списком используемых компонентов на определённом проекте
		modulesJson: path.resolve(htdocsPath) + '/tzcorp.components.json',
		// Файл со списком используемых компонентов по-умолчанию (фронтенд)
		defaultModulesJson: path.resolve(frontendPath) + '/default-modules.json',
		// Исходные файлы
		src: {
			// Папка фронтенд компонентов
			components: path.resolve(frontendPath + '/components'),
			// Папка общих стилей
			styles: path.resolve(frontendPath + '/styles'),
			// Папка общих изображений
			images: path.resolve(frontendPath + '/images'),
			// Папка общих svg-иконок
			svgIcons: path.resolve(frontendPath + '/images/svg-icons'),
			// Папка с контентными svg
			contentSvg: path.resolve(htdocsPath + '/images/svg'),
			// Папка с расположением файла с sass-переменными, который генерируется мастером
			sassVars: path.resolve(templatePath + '/sass/vars')
		},
		// Выходные директории
		dist: {
			// Папка с выходными css
			css: path.resolve(templatePath + '/stylesheets'),
			// Папка с выходными js
			js: path.resolve(templatePath + '/javascripts'),
			// Папка с выходными изображениями
			images: path.resolve(templatePath + '/images'),
			// Папка с выходными контентными svg
			contentSvg: path.resolve(htdocsPath + '/images/out_svg'),
			// Папка с выходными контентными png
			contentPng: path.resolve(htdocsPath + '/images/out_png'),
			// Deprecated
			template: path.resolve(templatePath + '/components'),
			// Папка с выходной технической документацией
			docs: path.resolve(envPathToTemplates + 'docs')
		}
	},
	devServer: {
		host: 'localhost',
		port: 8080
	}
}
