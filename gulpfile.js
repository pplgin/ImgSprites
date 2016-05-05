var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

gulp.task('sprites', function() {
    sprity.src({
        src: 'icons/*.png',
        style: '_icon.scss',
        format: 'png',
        orientation: 'left-right',
        template: './sprity-css.hbs',
        processor: 'scss',
        prefix: 'icon',
        name: 'icon'
    })
    .pipe(gulpif('*.png', gulp.dest('img/'), gulp.dest('css/')));
});