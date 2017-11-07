const conf = require('./gulp.conf')

// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
//
// const webpackConf = require('./webpack-dev.conf')
// const webpackBundler = webpack(webpackConf)

console.log("-------------------")
console.log(conf.paths.src)

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src,
        "./"
      ],
      middleware: [
        // webpackDevMiddleware(webpackBundler, {
        //   // IMPORTANT: dev middleware can't access config, so we should
        //   // provide publicPath by ourselves
        //   publicPath: webpackConf.output.publicPath,
        //   stats: {colors: true},
        //   // Quiet verbose output in console
        //   quiet: true,
        // }),
        //
        // // bundler should be the same as above
        // webpackHotMiddleware(webpackBundler),
      ],
    },
    open: false,
    port: 3000,
  }
}
