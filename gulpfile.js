var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber');

var sassOptions = {
  style: 'expanded'
};

gulp.task('assets', function() {
	return gulp.src('assets/**/*.*')
	.pipe(gulp.dest('app/assets'))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('html', function  () {

	return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'));

})

gulp.task('styles', function() {

	return sass('src/sass', sassOptions)
	.pipe(autoprefixer())
  	.pipe(gulp.dest("app/css"))
  	.pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());

});

gulp.task('scripts', function () {
	
	return gulp.src('src/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default', { verbose: true }))
	.pipe(gulp.dest('app/js'))

});

gulp.task('serve', function() {

	browserSync.init({
	    server: "./"
	});

	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('assets/**/*.*', ['assets']);
	gulp.watch("app/assets/**/*.*").on('change', browserSync.reload);
	gulp.watch("app/*.html").on('change', browserSync.reload);
	gulp.watch("app/js/*.js").on('change', browserSync.reload);

});

gulp.task('default', ['assets', 'styles', 'scripts', 'html', 'serve'], function() {

});