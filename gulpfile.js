"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var plumber = require("gulp-plumber");
var pug = require('gulp-pug');
var notify = require("gulp-notify");

gulp.task('css', function () {
  return gulp.src('app/sass/**/*.scss')
   .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('pug', function() {
  return gulp.src("app/pug/*.pug")
    .pipe(plumber({
     errorHandler: notify.onError()
   }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("app"))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {

  browserSync.init({
    server: "app",
    notify: false,
  });

   gulp.watch("app/sass/**/*.{scss,sass}", gulp.series("css"));
   gulp.watch("app/pug/**/*.pug", gulp.series("pug"));
   gulp.watch("app/js/*.js").on("change", browserSync.reload);
});


gulp.task("start", gulp.parallel("css", "pug", "serve"));
