/**
 * Created by Ardy Chen on 9/30/2017.
 */
const gulp = require('gulp');
const nightwatch = require('gulp-nightwatch');

gulp.task('test:e2e', function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'config/nightwatch.config.js',
      cliArgs: ['--env default', '--test test/e2e/specs/todo.simple.spec.js']
    }))
    .on('error', function (e) {
      console.log("Error occur:")
      console.log(e)
      console.log('E2E Testcase failed!')
      throw new Error('E2E Testcase failed!')
      this.emit('end')
    });
});
