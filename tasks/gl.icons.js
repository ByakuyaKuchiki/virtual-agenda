import gulp from 'gulp';
import paths from '../conf/paths.js';
import plumber from 'gulp-plumber';
import iconfontCss from 'gulp-iconfont-css';
import iconfont from 'gulp-iconfont';

//--- task to change SVG to ICO

export function svgToFont(params) {
    var iconGen = gulp.src(paths.icons.src)
        .pipe(plumber(({
            errorHandler: function (error) {
                gutil.log(gutil.colors.red(error.name) + ' in plugin ' + gutil.colors.magenta(error.plugin) + ' : ' + error.message);
                this.emit('end');
            }
        })))
        .pipe(iconfontCss({
            fontName: paths.icons.name,
            path: paths.origin + paths.icon.TEMPLATE,
            targetPath: paths.origin + paths.css.src + 'basics\_icons.scss',
            fontPath: paths.fonts.dest
        }))
        .pipe(iconfont({
            fontName: paths.icons.name,
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
            normalize: true
        }))
        .on('glyphs', function (glyphs, options) {
            // CSS templating, e.g.
            console.log(glyphs, options);
        })
        .pipe(gulp.dest(paths.fonts.dest));


    var copyIcon = gulp.src(paths.origin + paths.css.src + '_icons.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.log(gutil.colors.red(err.name) + ' in plugin ' + gutil.colors.magenta(err.plugin) + ' : ' + err.message);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(ppaths.origin + paths.css.src + '_icons.scss'));

    return merge(iconGen, copyIcon);
}
