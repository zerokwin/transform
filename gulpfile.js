﻿'use strict';

const fs = require('fs'),
    gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    //jshint = require('gulp-jshint'),
    //group = require('gulp-group-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    //cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

const src = {

    scss : {

        'base' : 'src/scss/base.scss',

        'univ' : 'src/scss/univ.scss',

        'univ-detail' : 'src/scss/univ-detail.scss',

        'st-voice' : 'src/scss/st-voice.scss'

    },

    script : {

        'html5-es5' : [
            'src/vender/html5shiv/dist/html5shiv.js',
            'src/vender/es5-shim/es5-shim.js',
            'src/vender/es5-shim/es5-sham.js'
        ],

        'jquery' : [
            'src/vender/jquery/dist/jquery.js'
        ]
    }

};

const dist = {

    css : 'assets/css',

    js : 'assets/js'

};

var changedPath = '';

const filterPath = (e) => {
    let absolutePath = e.path,
        relativePath = absolutePath.substring(absolutePath.lastIndexOf('src')).replace(/\\/g, '/');
    changedPath = relativePath;
};

gulp.task('styles', () => {

    let path = src.scss;

    for (let key in path) {

        gulp.src(path[key])
            .pipe(changed(dist.css))
            .pipe(plumber())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest(dist.css))
            .pipe(minifycss())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(dist.css))
            .pipe(notify({
                message: `${key}.scss compile completed`
            }));

    }

});

gulp.task('scripts', () => {

    let path = src.script;

    for (let key in path) {

        if (changedPath && path[key].findIndex(x => x == changedPath) === -1) continue;

	    if (!fs.existsSync(path[key][0])) continue;

        gulp.src(path[key])
            .pipe(plumber())
            .pipe(concat(`${key}.js`))
            .pipe(babel())
            //.pipe(jshint())
            //.pipe(jshint.reporter('default'))
            .pipe(gulp.dest(dist.js))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(dist.js))
            .pipe(notify({
                message: `${key}.js compile completed`
            }));

    }

    changedPath = '';

});

gulp.task('watch', () => {

    gulp.watch('src/scss/**/*.scss', ['styles']);

    gulp.watch('src/scripts/**/*.js', (e) => {
        filterPath(e);
        gulp.start('scripts');
    });

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('assets/**').on('change', browserSync.reload);

    //browserSync.init({
    //    proxy: 'localhost:27008'
    //});

});

gulp.task('default',['styles', 'scripts', 'watch']);
