var del = require('del');
var gulp = require('gulp');
var template = require('gulp-template');

var bases = {
  src: 'src/',
  dist: 'dist/',
  templates: 'templates/'
};

var paths = {
  js: [ bases.src + 'js/**/*.js'],
  css: [ bases.src + 'css/**/*.css'],
  html: [ bases.src + 'index.html', '!' + bases.src + 'test.html']
};

gulp.task('clean', function(cb) {
  del([
    bases.dist + '**'
  ], cb);
});

gulp.task('copy', ['clean'], function() {
  gulp.src(paths.js)
    .pipe(gulp.dest(bases.dist + 'js/'));

  gulp.src(paths.css)
    .pipe(gulp.dest(bases.dist + 'css/'));

  gulp.src(paths.html)
    .pipe(gulp.dest(bases.dist));
});

gulp.task('default', ['clean', 'copy'], function() {
  return gulp.src(bases.templates + '/endpoints.js')
    .pipe(template({ api_endpoint: 'https://api.photos.com' }))
    .pipe(gulp.dest(bases.dist + 'js/app/'));
});

gulp.task('local', ['clean', 'copy'], function() {
  return gulp.src(bases.templates + '/endpoints.js')
    .pipe(template({ api_endpoint: 'https://local.api.photos.com' }))
    .pipe(gulp.dest(bases.dist + 'js/app/'));
});
