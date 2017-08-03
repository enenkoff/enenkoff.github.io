var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    include = require('gulp-html-tag-include'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin');



/* create svg sprite */

gulp.task('svgstore', function(){
    gulp.src(['app/assets/images/svg/sprite/*.svg','!app/assets/**/logo.svg'])
        .pipe(svgstore())
        .pipe(gulp.dest('app/assets/images/svg'))
});


/* minimize images */

gulp.task('imagemin', function () {
    gulp.src('app/assets/images/**/*.+(jpg|jpeg|png)')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('app/assets/images'))
});

/* builders */

gulp.task('includer:html', function () {
    gulp.src('app/assets/pages/*.html')
        .pipe(include())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('rigger:js', function () {
    gulp.src('app/assets/js/libs/main.js')
        .pipe(rigger())
        .pipe(gulp.dest('app/assets/js'))
});

/*  */

/* browser sync */

gulp.task('browser-sync',function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        host: 'localhost',
        port: 9999,
        notify: false
    })
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
        .pipe( notify( 'Готово!' ) )
        // .pipe(browserSync.reload({stream: true}));
});

gulp.task('optimize:css', ['sass'], function () {
    setTimeout(function () {
        gulp.src('app/assets/css/styles.css')
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('app/assets/css'))
            .pipe(browserSync.reload({stream: true}));
    },300)

});


/* watch sass changes */

gulp.task('watch', ['optimize:css', 'includer:html', 'browser-sync'], function () {
    gulp.watch('app/assets/sass/**/*.+(sass|scss)',['optimize:css']);
    gulp.watch('app/assets/**/*.html', ['includer:html']);
    // gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});








