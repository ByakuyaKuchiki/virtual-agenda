import paths from '../conf/paths.js';
import gulp from 'gulp';

function linting (done) {
  return gulp.src(paths.pug.MAIN)
    .pipe(plumber((error) => {
      console.log(error);
      this.emit('end');
    }))
    .pipe(gulppuglint())
    .pipe(reload({ stream: true }))
    .on('end', () => {
      done();
    });
}

function build (done) {
  return gulp.src(paths.origin + paths.pug.src)
    .pipe(plumber((error) => {
      console.log(error);
      this.emit('end');
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'))
    .on('end', () => {
      done();
    });
}

export function pugTask(params) {
    return gulp.parallel(linting, build);
}