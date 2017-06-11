var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    path = require('path'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    rigger = require('gulp-rigger');



/* create svg sprite */

gulp.task('svgstore', function(){
    gulp.src(['app/assets/images/**/*.svg','!app/assets/images/svg/logo.svg','!app/assets/images/svg/logo-gear.svg'])
        .pipe(svgmin(function(file){
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        removeXMLProcInst:true,
                        removeDoctype: true,
                        removeComments: true,
                        prefix: prefix + '_',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('app/assets/images'))
})


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





