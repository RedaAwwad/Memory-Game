const { src, dest, watch, series } = require("gulp");
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require("vinyl-buffer");
const terser = require("gulp-terser");
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const { mozjpeg, optipng, svgo} = imagemin;
const webp = require("gulp-webp");
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();

const PATHS = {
  dist: './dist',
  html: './src/*.html',
  js: [
    './src/js/main.ts',
  ],
  sass: './src/scss/**/*.scss',
  imgs: './src/assets/imgs/*',
  bootstrap_icons: () => {
    const bootstrapIconsToInclude = [
      'youtube', 'wordpress',
      'windows', 'wifi',
      'whatsapp', 'webcam',
      'wallet', 'vimeo',
      'usb', 'twitter'
    ]
    return bootstrapIconsToInclude.map(icon => {
      return `./node_modules/bootstrap-icons/icons/${icon}.svg`
    });
  },
  sounds: './src/assets/sounds/*'
}

// clean
const cleanDist = () => {
  return src(`${PATHS['dist']}/`, { 
      allowEmpty: true, 
      read: false 
    })
    .pipe(clean({ force: true }));
}

// move html files
const moveHTML = () => {
  return src(PATHS['html'], { allowEmpty: true })
    .pipe(dest(PATHS['dist']))
    .pipe(browserSync.stream());
}

// move Sounds files
const moveSounds = () => {
  return src(PATHS['sounds'], { allowEmpty: true })
    .pipe(dest(`${PATHS['dist']}/assets/sounds`))
    .pipe(browserSync.stream());
}

// js
const compileJS = () => {
  let b = browserify({
    basedir: ".",
    debug: true,
    entries: PATHS['js'],
    cache: {},
    packageCache: {},
  })
  .plugin(tsify).on('error', (err) => {
    console.error(err);
  })
  .transform("babelify", {
    presets: ["es2015"],
    extensions: [".ts"],
  });

  return b.bundle()
    .pipe(source("main.bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(dest(`${PATHS['dist']}/js`))
    .pipe(browserSync.stream());
}

// sass
const compileSass = () => {
  return src(PATHS['sass'], { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({ 
      grid: 'autoplace' 
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(rename(path => {
      path.basename += ".min";
    }))
    .pipe(dest(`${PATHS['dist']}/css`))
    .pipe(browserSync.stream());
}

// minify imgs
const minifyImgs = () => {
  return src(PATHS['bootstrap_icons'](), { allowEmpty: true })
    .pipe(imagemin([
      mozjpeg({ quality: 70, progressive: true }),
      optipng({ optimizationLevel: 5 }),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]})
      ]))
    .pipe(dest(`${PATHS['dist']}/assets/icons`))
    .pipe(browserSync.stream());
}

// transform imgs to webp ext.
// const webpImgs = () => {
//   let minifiedImgs = `${PATHS['dist']}/assets/icons`;
//   return src(`${minifiedImgs}/*`, { allowEmpty: true })
//     .pipe(webp())
//     .pipe(dest(minifiedImgs))
//     .pipe(browserSync.stream());
// }

// watch
const watchTasks = () => {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });

  watch(PATHS['html'], moveHTML);
  watch(PATHS['sounds'], moveSounds);
  watch(PATHS['sass'], compileSass);
  watch('./src/js/**/*.ts', compileJS);
  watch(PATHS['imgs'], minifyImgs);
}

// default
exports.default = series(
  cleanDist,
  moveHTML,
  moveSounds,
  compileJS,
  compileSass,
  minifyImgs,
  // webpImgs,
  watchTasks
);

// build
exports.build = series(
  cleanDist,
  moveHTML,
  moveSounds,
  compileSass,
  compileJS,
  minifyImgs,
  // webpImgs
);