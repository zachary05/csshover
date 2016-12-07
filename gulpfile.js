var gulp = require("gulp");
var sass = require("gulp-sass")
var autoprefixer = require('gulp-autoprefixer')
var minifycss = require('gulp-minify-css')


    //sass>css
    gulp.task("sass", function() {
        gulp.src("src/sass/*.scss")
            .pipe(sass()).on("error", function(err) {
                console.error("Error!", err.message);
            })
            .pipe(minifycss())
            .pipe(autoprefixer({
                browsers: 'last 2 versions'
            }))
            .pipe(gulp.dest("dist/css"))
    })
    gulp.task("watchsass", function() {
        gulp.watch("src/sass/*.scss", ["sass"])
    })



//设置默认
gulp.task('default', ['watchsass', 'sass'])
