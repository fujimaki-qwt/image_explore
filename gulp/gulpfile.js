'use strict';

// load plugins
var path = require('path');
var gulp = require('gulp');
var gulpPlumber = require('gulp-plumber');
var gulpSass = require('gulp-sass');
var gulpReplace = require('gulp-replace');
var gulpWatch = require('gulp-watch');
var gulpPostcss = require('gulp-postcss');
var gulpSourceMaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var gulpSize = require('gulp-size');
var autoprefixer = require('autoprefixer');
var runSequence = require('run-sequence');
var del = require('del');
var buildMode = false;
var fs = require('fs');

// set varivables
var APP_DIRECTORY      = '' ;
var WEBROOT_DIRECTORY  = path.resolve('../webroot');
var CSS_DIRECTORY      = WEBROOT_DIRECTORY + '/css';
var SCSS_DIRECTORY     = path.resolve('../scss');
var SCSS_TASK_FUNCTION = function(){
    return gulp.src(SCSS_DIRECTORY + "/*.scss")
        .pipe(gulpPlumber())
        .pipe(gulpIf(!buildMode,gulpSourceMaps.init()))
        .pipe(gulpSass({
            outputStyle:buildMode ? 'compressed': 'expanded',
            includePaths:[
                SCSS_DIRECTORY,
            ]
        })).on("error", gulpSass.logError)
        .pipe(gulpPostcss([autoprefixer({
            browsers: [
                '> 1%' , 'ie >= 10' , 'ff >= 20' , 'ios >= 8' , 'safari >= 8' , 'android > 4'
            ]
        })]))
        .pipe(gulpIf(!buildMode,gulpSourceMaps.write()))
        .pipe(gulpSize())
        .pipe(gulp.dest(CSS_DIRECTORY));
};


// define private task
gulp.task('scss',SCSS_TASK_FUNCTION);
gulp.task('scss-watch',function(){
    gulpWatch(SCSS_DIRECTORY + '/**/*',{ ignoreinital : false },SCSS_TASK_FUNCTION);
});

gulp.task('clean', del.bind(null, ['.tmp'], {dot: true, force: true}));

// define public task
gulp.task('serve', function(cb){
    runSequence('clean','scss','scss-watch', cb);
});

gulp.task('build',function(cb){
    buildMode = true;
    runSequence('clean','scss', cb);
});
