var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger');



/* create svg sprite */

gulp.task('svgstore', function(){
    gulp.src(['app/assets/images/svg/sprite/*.svg','!app/assets/**/logo.svg','!app/assets/**/logo-gear.svg'])
        .pipe(svgstore())
        .pipe(gulp.dest('app/assets/images/svg'))
});



/* minimize images */

gulp.task('imagemin', function () {
    gulp.src('app/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/assets/images'))
});

/* compile sass to css */
//
// gulp.task('sass', function () {
//     return gulp.src('app/assets/sass/**/*.+(sass|scss)')
//         .pipe(sass())
//         .pipe(gulp.dest('app/assets/css'))
//         // .pipe(browserSync.reload({stream: true}))
// });


/* compile sass with notify errors */

gulp.task( 'sass', function() {
    gulp.src('app/assets/sass/**/*.+(sass|scss)')
        .pipe( sass().on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass ошибка!"
            } ) )
        )
        .pipe( gulp.dest( 'app/assets/css' ) )
        .pipe( notify( 'Готово!' ) );
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





