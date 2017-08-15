import concat from 'gulp-concat';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';

export function buildVendor() {
    return gulp.src('./app/vendors/*.js')
        .pipe(sourcemaos.init())
        .pipe(concat('vendors.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/resources/js'))
        .on('end', () => {
            done();
        });
};