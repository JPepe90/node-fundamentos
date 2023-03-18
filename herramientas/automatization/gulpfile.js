const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
  console.log('Contruyendo el sitio');
  setTimeout(cb, 1200);
});

gulp.task('serve', function(cb) {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true,
    }))
});

// Hacer tareas en serie
gulp.task('default', gulp.series('build', 'serve'));