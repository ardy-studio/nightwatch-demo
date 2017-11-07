/**
 * Created by Ardy Chen on 9/30/2017.
 */
const gulp = require('gulp');
const nightwatch = require('gulp-nightwatch');
// const reactScripts = require('react-scripts');
const runSequence = require('run-sequence');

gulp.task('test:e2e', function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'config/nightwatch.config.js',
      cliArgs: ['--env default', '--test test/e2e/specs/firstTest.spec.js']
    }))
    .on('error', function (e) {
      console.log("Error occur:")
      console.log(e)
      console.log('E2E Testcase failed!')
      throw new Error('E2E Testcase failed!')
      this.emit('end')
    });
});

gulp.task('test', function (cb) {
  runSequence('browsersync', 'test:e2e', 'browsersync:stop', cb)
});