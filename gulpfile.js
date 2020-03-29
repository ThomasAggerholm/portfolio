var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

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

function script() {
    return (
        gulp
            .src(paths.jsFiles.main)
            // Send them to the destination
            .pipe(gulp.dest(paths.jsFiles.dest))
            // Start bS stream
            .pipe(browserSync.stream())
    )
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
            .pipe(gulp.dest(paths.scss.dest))
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