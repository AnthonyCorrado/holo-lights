var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify('./app/app.js')
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(source('main.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('./public/js/'));
})

gulp.task('default', ['connect', 'watch'])

gulp.task('sass', function() {
  return sass('./sass/style.scss')
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload());
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/**/*.js', ['browserify'])
  gulp.watch('sass/**/*.scss', ['sass'])
})

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    })
})