var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger');

/* compile sass to css */

gulp.task('sass', function () {
    return gulp.src('app/assets/sass/**/*.+(sass|scss)')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
        // .pipe(browserSync.reload({stream: true}))
});




/* watch sass changes */

gulp.task('watch', ['sass'], function () {
    gulp.watch('app/assets/sass/**/*.+(sass|scss)',['sass']);
    // gulp.watch('app/*.html', browserSync.reload);
    // gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});



/* gulp rigger */

gulp.task('html:build', function () {
    gulp.src('app/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist'));
});





