import paths from '../conf/paths.js';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';

//--- task for optimisations of all images medias

export function imagesMin() {
    return gulp.src(paths.origin + paths.images.src, {since: gulp.lastRun(imagesMin)})
                .pipe(plumber((error) => {
                    console.error(error);
                    this.emit('end');
                }))
                .pipe(changed(paths.dest + paths.images.dest))
                .pipe(imagemin({
                    progressive: true,      //- gifsicle: compress GIF
                    interlaced: true,       //- jpegtran: compress JPEG
                    optimizationLevel: 5,   //- optipng: compress png 
                    svgoPlugins: [{removeViewBox: true}] //- svgo: compress SVG
                }))
                .pipe(changed(paths.dest + paths.images.dest))
                .pipe(reload({stream: true}))
};

