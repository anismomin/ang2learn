var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

/* Server */
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

/* Images */
var imagemin = require('gulp-imagemin');

/* style */
var sass        = require('gulp-sass');

gulp.task('ts-lint', function() {
    return gulp.src(config.devTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.devTs
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.production));
});

gulp.task('build_html', function() {
    gulp.src(config.devHtml)
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(config.production));
});

gulp.task('build_sass', function() {
    return gulp.src(config.devScss)
        .pipe(sass())
        .pipe(gulp.dest(config.prodScss))
        .pipe(browserSync.stream());
});

gulp.task('build_img', function () {
    return gulp.src(config.devImages)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.prodImages));
});


gulp.task('serve', ['ts-lint', 'compile-ts', 'build_html', 'build_img', 'build_sass'], function() {
        
    gulp.watch([config.devTs, config.devHtml], ['ts-lint', 'compile-ts', 'build_html', 'build_img', 'build_sass']);
    
    browserSync({
        port: 3000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',    
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: superstatic({ debug: false})
        }
    }); 
});

gulp.task('default', ['serve']);
