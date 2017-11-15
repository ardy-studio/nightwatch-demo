/**
 * Created by Ardy Chen on 9/30/2017.
 */
const gulp = require('gulp');
const nightwatch = require('gulp-nightwatch');

gulp.task('test:simple', function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'config/nightwatch.config.js',
      cliArgs: ['--env default', '--test test/e2e/specs/todo.simple.spec.js']
    }))
    .on('error', function (e) {
      console.log("Error occur:")
      console.log(e)
      console.log('Testcase failed!')
      throw new Error('Testcase failed!')
      this.emit('end')
    });
});

gulp.task('test:po', function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'config/nightwatch.config.js',
      cliArgs: ['--env default', '--test test/e2e/specs/todo.page.object.spec.js']
    }))
    .on('error', function (e) {
      console.log("Error occur:")
      console.log(e)
      console.log('Testcase failed!')
      throw new Error('Testcase failed!')
      this.emit('end')
    });
});
