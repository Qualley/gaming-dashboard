const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

//scss
function compilescss() {
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}

//watch function
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', compilescss).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
}
exports.compilescss = compilescss;
exports.watch = watch;