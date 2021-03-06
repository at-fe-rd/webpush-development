const del = require('del');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const path = require('path');
const runSequence = require('run-sequence');
const ejs = require("gulp-ejs");

const plugins = gulpLoadPlugins();
const paths = {
  js: ['./src/**/*.js'],
  ejs: ['./src/views/*.ejs'],
  nonJs: ['./package.json']
};
// Clean up dist and coverage directory
gulp.task('clean', () =>
  del.sync(['dist/**', 'reports/**', '!dist', '!reports'])
);

// Copy non-js files to dist
gulp.task('copy', () =>
  gulp.src(paths.nonJs)
  .pipe(plugins.newer('dist'))
  .pipe(gulp.dest('dist'))
);

// Compile ES6 to ES5 and copy to dist
gulp.task('babel', () =>
  gulp.src([...paths.js, '!gulpfile.babel.js'], {
    base: '.'
  })
  .pipe(plugins.newer('dist'))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.babel())
  .pipe(plugins.sourcemaps.write('.', {
    includeContent: false,
    sourceRoot(file) {
      return path.relative(file.path, __dirname);
    }
  }))
  .pipe(gulp.dest('dist'))
);

gulp.task('ejs', () => {
  return gulp.src(paths.ejs)
   .pipe(ejs({}, {ext:'.html'}))
   .pipe(gulp.dest(`dist/src/views`));
});

// Start server with restart on file changes
gulp.task('nodemon', ['copy', 'ejs', 'babel'], () =>
  plugins.nodemon({
    script: 'dist/src/index.js',
    ext: 'js',
    ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
    tasks: ['copy', 'babel']
  })
);

// gulp serve for development
gulp.task('serve', ['clean'], () => runSequence('nodemon'));

// default task: clean dist, compile js files and copy non-js files.
gulp.task('default', ['clean'], () => {
  runSequence(
    ['copy', 'ejs', 'babel' ]
  );
});
