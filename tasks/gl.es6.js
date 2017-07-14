import paths from '../conf/paths.js';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserify from 'browserify';
import eslint from 'gulp-eslint';
import babel from "gulp-babel";
import babelify from 'babelify';
import mocha from 'gulp-mocha';


export function javaScriptTask() {

  watchify.args.debug = true;

  var bundler;

  const getBundler = () => {
    if (!bundler) {
      bundler = watchify(browserify(paths.scripts.SRC, watchify.args));
    }
    return bundler;
  };

  const rebundle = () => {
    return getBundler()
      .transform(babelify)
      .bundle()
      .on('error', function(err) { console.log('Error: ' + err.message); })
      .pipe(source('script.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
          suffix: '.min'
        }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.scripts.DEST))
      .pipe(reload({ stream: true }));
  }

  getBundler().on('update', rebundle);

  return rebundle();

}

/** ESlint */
export function lintJavaScript (done) {
  return gulp.src(paths.scripts.ALL)
    .pipe(plumber((error) => {
      console.log(error);
      this.emit('end');
    }))
    .pipe(cache('scripts'))
    .pipe(eslint({
      useEslintrc: true,
      configFile: './.eslintrc'
    }))
    .pipe(eslint.formatEach())
    .on('end', () => {
      done();
    });
}

export function testTask (done) {
  return gulp.src(paths.scripts.TEST, {
    read: false
  })
  .pipe(mocha()).on('error', done)
  .on('end', () => {
    done();
  });
}