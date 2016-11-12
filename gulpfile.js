'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
    return gulp.src('themes/DD2/src/css/*.scss')
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
  			browsers: ['last 2 versions'],
  			cascade: false
		  }))
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('themes/DD2/static/css'))
});

gulp.task('css:watch', function () {
  gulp.watch('themes/DD2/**/*.scss', ['css']);
});
