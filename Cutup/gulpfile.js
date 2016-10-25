var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	mmq = require('gulp-merge-media-queries'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css'),
	csso = require('gulp-csso');

// Compile Sass (using node-sass), run autoprefixer, and combine the media queries before saving the CSS.
gulp.task('styles', function() {
    gulp.src('css/style.scss')
        .pipe(sass({
            style: 'expanded',
            sourcemap: false
        })
        .on('error', sass.logError))
        .pipe(autoprefixer({
	        browsers: 'last 3 versions, Explorer > 8'
        }))
        .pipe(mmq({
            log: true
        }))
        .pipe(gulp.dest('css'))
        .pipe(notify({
            message: 'Generated CSS!'
        }));
});

//create minified css
gulp.task('minifycss', function() {
  return gulp.src('css/*.css')
    .pipe(minifycss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/min/'));
});

var fontName = 'Icons';

// Generate an icon font and the required CSS to use it.
gulp.task('iconfont', function(){
	gulp.src(['img/icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            fontPath: 'fonts/',
            targetPath: '_icons.scss'
        }))
        .pipe(iconfont({
            fontName: fontName,
            fontHeight: 1001,
            normalize: true
        }))
        .pipe(gulp.dest('css/fonts/'));
});

// Optimise all images.
gulp.task('images', function() {
	return gulp.src('img/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('img'))
        .pipe(notify({
            message: 'Optimised all images!'
        }));
});

// Run combine media queries on the CSS.
gulp.task('mmq', function () {
    gulp.src('css/**/*.css')
        .pipe(mmq({
			log: true
        }))
        .pipe(gulp.dest('css'));
});

// Run all major tasks when just `gulp` is run.
gulp.task('default', function() {
	gulp.start('styles', 'concat', 'images');
});

// Watch these files and run tasks when they're modified.
gulp.task('watch', function() {
	gulp.watch('css/**/*.scss', ['styles']);
	// gulp.watch('img/**/*', ['images']);
});

gulp.task('minify', function() {
    return gulp.src('css/style.css')
        .pipe(csso())
        .pipe(gulp.dest('css/min/'))
        .pipe(notify({
            message: 'Min copy created.'
    }));
});
