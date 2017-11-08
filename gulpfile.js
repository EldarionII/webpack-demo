let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('src/stylesheets/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('src/stylesheets//css'))
})

gulp.task('watch', function(){
    gulp.watch('src/stylesheets/scss/**/*.scss', ['scss']);
})

