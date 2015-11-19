(function () {
    'use strict';
    
    require('es6-promise').polyfill();
    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var watch = require('gulp-watch');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var minifyCss = require('gulp-minify-css');
    var rename = require('gulp-rename');

    gulp.task('watch', function() {
        gulp.watch('scss/**/*.scss', ['scss']);
    });

    gulp.task('scss', function() {
        return gulp
            .src(['**/*.scss'])
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(minifyCss())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('css'));
    });

    gulp.task('default', ['scss', 'watch']);
    
})();