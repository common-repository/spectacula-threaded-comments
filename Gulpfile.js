var gulp = require( 'gulp' ),
    rename = require( 'gulp-rename' ),
    uglify = require( 'gulp-uglify' ),
    sourcemaps = require( 'gulp-sourcemaps' );

gulp.task( 'js', function() {
    return gulp.src( ['js/*.js', '!js/*.min.js'] )
               .pipe( sourcemaps.init() )
               .pipe( uglify() )
               .pipe( rename( { extname: ".min.js" } ) )
               .pipe( sourcemaps.write( './' ) )
               .pipe( gulp.dest( 'js/' ) );
} );

gulp.task( 'watch', function() {
    gulp.watch( ['js/*.js', '!js/*.min.js'], ['js'] );
} );

gulp.task( 'default', ['watch', 'js'] );
