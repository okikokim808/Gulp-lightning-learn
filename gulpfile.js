var gulp = require('gulp'),
minifyHtml=require("gulp-minify-html"), 
minifyCss=require("gulp-minify-css"), 
sass = require("gulp-sass"), 
concat=require("gulp-concat"), 
header = require("gulp-header"), 
fs = require('fs'), 
uglify = require("gulp-uglify");

gulp.task('bacon', function(){
    console.log('Wow, bacon is so juicy!');
});

gulp.task('frogs', function(){
    console.log('Frogs are slimy');
})

gulp.task('minify-html', function(){
    gulp.src('./index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./minify'))
})

gulp.task('compile-sass', function () {
    gulp.src('./*.scss') // path to your file
    .pipe(sass())
    .pipe(gulp.dest('./styles/'));
});
 
gulp.task('watch-sass', function () {
    gulp.watch(['./main.scss'], ['compile-sass']);
});

gulp.task('minify-css', function(){
    gulp.src('./styles/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./minify/styles'))
})

// gulp.task('concat', function () {
//     gulp.src('./styles/*.css') // path to your files
//     .pipe(concat('concat.css'))  // concat and name it "concat.js"
//     .pipe(gulp.dest('./styles/'));
// });

var getCopyright = function () {
    return fs.readFileSync('Copyright');
};

gulp.task('concat-copyright', function () {
    gulp.src('./styles/*.css') // path to your files
    .pipe(concat('concat.css')) // concat and name it "concat-copyright.js"
    .pipe(header(getCopyright()))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('minify-js', function () {
    gulp.src('./gulpfile.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('./minify'));
});