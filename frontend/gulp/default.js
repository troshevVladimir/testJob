var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('build', ['build-js', 'build-styles', 'build-svg']);
gulp.task('default', ['build']);
