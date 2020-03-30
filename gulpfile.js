var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var webpack = require('webpack-stream')
var cleanCss = require('gulp-clean-css')

let paths = {
    // Destination for your files
    jsFiles: {
        main: 'src/js/*',
        dest: 'dist/js'
    },
    html: {
        main: 'src/*.html',
        dest: 'dist'
    },
    scss: {
        main: 'src/style/*.scss',
        dest: 'dist/scss'
    }
}

function html() {
    return (
        gulp
            .src(paths.html.main)
            .pipe(gulp.dest(paths.html.dest))
    )
}

function scss() {
    return (
        gulp
            .src(paths.scss.main)
            .pipe(sass())
            .pipe(cleanCss())
            .pipe(gulp.dest(paths.scss.dest))
            .pipe(browserSync.stream())
    )
}

function script() {
    return (
        gulp
            .src(paths.jsFiles.main)
            // Send them to the destination
            .pipe(
                webpack({
                    output: {
                        filename: 'app.js'
                    }
                })
            )
            .pipe(gulp.dest(paths.jsFiles.dest))
            // Start bS stream
            .pipe(browserSync.stream())
    )
}

// Make sure the task is completed before the browser reload
function reload(done) {
    browserSync.reload()
    done()
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    // Watching gulp changes to the files
    gulp.watch(paths.jsFiles.main, script)
    gulp.watch(paths.html.main, html)
    gulp.watch(paths.scss.main, scss)
    // Reloading from the dist html file
    gulp.watch(paths.html.dest, reload)
}

exports.default = watch