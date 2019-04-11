var gulp = require('gulp');

gulp.task('default', ['build']);

require('require-dir')('./frontend/gulp');
