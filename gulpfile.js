'use strict';

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');

gulp.task('build', function () {
  return gulp.src('./app/stylesheets/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function () {
  var app = require('./app.js');

  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
});
