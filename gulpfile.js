/**
 * Bradley Taniguchi
 * Gulp Build file
 * ------
 * COMMANDS AVAILABLE
 * clean - removes dist folder
 * edit - watches all files calls build, swallows errors!
 * build - builds js/css/static/html files
 * build:js
 * build:css
 * build:static
 * jshint
 *
 */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  log = gutil.log,
  concat = require('gulp-concat'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  watch = require('gulp-watch'),
  distFolder = './dist/';
 
gulp.task('build', ['jshint', 'build:lib', 'build:js', 'build:css', 'build:static']);
//gulp.task('edit', ['build', 'watch:js', 'watch:css', 'watch:html']);
gulp.task('default', ['build']);
gulp.task('jshint', function(){
  return watch('./src/app/**.*.js', function() {
    log('[[jshint]]');
    gulp.src('./src/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
  });
});

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
      .pipe(clean());
});

gulp.task('build:lib', function(){
  var src= [
    './node_modules/angular/angular.js',
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.js.map',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js.map',
    './node_modules/angular-animate/angular-animate.js',
    './node_modules/angular-animate/angular-animate.min.js',
    './node_modules/angular-aria/angular-aria.js',
    './node_modules/angular-aria/angular-aria.min.js',
    './node_modules/angular-material/angular-material.js',
    './node_modules/angular-material/angular-material.min.js',
  ];
  var prodSrc = [
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js.map',
    './node_modules/angular-animate/angular-animate.min.js',
    './node_modules/angular-aria/angular-aria.min.js',
    './node_modules/angular-material/angular-material.min.js',
  ];
  return gulp.src(gutil.env.env === 'prod' ? prodSrc : src)
    .pipe(gulp.dest(distFolder + 'lib'));
});

gulp.task('build:js', function(){
  return watch('./src/**/*.js', function() {
    log('[[build:js]]');
    gulp.src('./src/**/*.js', {base: './src/'})
    .pipe(concat('app.js'))
    .on('error', swallowError)
    .pipe(gutil.env.env === 'prod' ? uglify() : gutil.noop())
    .on('error', swallowError)
    .pipe(gulp.dest(distFolder+'js'));
  });
});

gulp.task('build:css', function(){
  var src = [
    './node_modules/angular-material/angular-material.css',
    './node_modules/angular-material/angular-material.min.css',
    './src/css/**/*.css'
  ];
  var prodSrc = [
    './node_modules/angular-material/angular-material.min.css',
    './src/css/**/*.css'
  ];
  return watch('./src/css/**/*.css', function() {
    log('[[build:css]]');
    gulp.src(gutil.env.env === 'prod' ? prodSrc : src)
    .pipe(gulp.dest(distFolder+'css'));
  });
});

gulp.task('build:static', function(){
  return watch('./src/**/*.html', function() {
    log('[[build:static]]');
    gulp.src(['./src/**/*.html', './README.md'], {base: './src/'})
    .on('error', swallowError)
    .pipe(gulp.dest(distFolder));
  });
});

gulp.task('build:readme', function(){
  return gulp.src('./README.md')
    .pipe(gulp.dest(distFolder));
});

/*utility functions*/
/**
 * Handles errors and proceeds regardless.
 * @param  {object} err error object to print
 */
function swallowError(err) {
  log('[[ERROR]]:');
  log('  ', err);
  this.emit('end');
}
