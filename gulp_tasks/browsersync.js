const gulp = require('gulp')
const browserSync = require('browser-sync')
const spa = require('browser-sync-spa')

const browserSyncConf = require('../config/browsersync.conf')
const browserSyncProdConf = require('../config/browsersync-prod.conf')

browserSync.use(spa())

gulp.task('browsersync', browserSyncServe)
gulp.task('browsersync:prod', browserSyncProd)
gulp.task('browsersync:stop', browserSyncStop)

function browserSyncServe(done) {
  browserSync.init(browserSyncConf())
  done()
}

function browserSyncProd(done) {
  browserSync.init(browserSyncProdConf())
  done()
}

function browserSyncStop(done) {
  if (browserSync.active) {
    browserSync.exit()
  }
  done()
}