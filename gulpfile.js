const gulp = require('gulp');
const  sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style(){
  // 1. where is css file
    return gulp.src('./scss/**/*.scss')
  // 2. pass file to sass compiler
        .pipe(sass())
  // 3. wher do i save it
        .pipe(gulp.dest('./css'))
 // 4. stream changes to all browsers
        .pipe(browserSync.stream());
};

function watch(){
    browserSync.init({
        server: {
          baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style; // runs in gulp after
exports.watch = watch;