var gulp = require('gulp');
var template = require('gulp-template');

gulp.task('default', function() {
  return gulp.src('src/app/endpoints.js')
    .pipe(template({ api_endpoint: 'https://api.photos.com' }))
    .pipe(gulp.dest('js/app'));
});

gulp.task('local', function() {
  return gulp.src('src/app/endpoints.js')
    .pipe(template({ api_endpoint: 'https://local.api.photos.com' }))
    .pipe(gulp.dest('js/app'));
});
