var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    watch= require('gulp-watch'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');


gulp.task('log',function() {
    gutil.log('Workflows are awesome');
})

gulp.task('html',function(){
    gulp.src('index.html')
    .pipe(connect.reload()) 
});

gulp.task('compass', function() {
  gulp.src('assets/sass/*.scss')
    .pipe(compass({
      sass: 'assets/sass'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('scripts',function(){
    gulp.src('assets/js/*.js')
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('index.html',['html']),
    gulp.watch('assets/sass/*.scss',['compass']),
    gulp.watch('assets/js/*.js',['scripts']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('default', ['html','compass', 'scripts','connect', 'watch']);