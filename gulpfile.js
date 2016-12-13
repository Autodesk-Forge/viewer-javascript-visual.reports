'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', function() {
  return gulp.src('./src/styles/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('dist'));
});

const webpackConfig = {
    entry: './src/scripts/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    }
};

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
  gulp.watch(['*.html', 'src/scripts/*.js', 'src/styles/*.css']).on('change', browserSync.reload);
  gulp.watch('src/**/*.js', ['webpack']);
});

// webpack tasks
gulp.task('webpack', function (callback) {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      // error output options
    }));
    callback();
  });
});

gulp.task('default', ['minify-css' ,'webpack', 'watch']);
