'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// browser sync watching files
gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('src/**/*.js', ['webpack']);
});

// webpack tasks
gulp.task('webpack', function (callback) {
  webpack( require('./webpack.config.js'), (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      // error output options
    }));
    callback();
  });
});

gulp.task('default', ['webpack', 'watch']);
