const  
  gulp = require('gulp'),
  pump = require('pump'),
  minify = require('gulp-minify'),
  concat = require('gulp-concat'),
  cleanCSS = require('gulp-clean-css'),
  browserSync = require('browser-sync').create();

function styles() {  
  gulp.src('src/css/style.css')
    .pipe(concat('style.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};


function scripts() {
  gulp.src('src/js/script.js')
    .pipe(concat('script.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};


function watch() {
  browserSync.init({
    proxy: "redBinPhp"
  });
  
  gulp.watch('./src/css/*.css', async ()=> {
    styles(); 
  });
  gulp.watch('./src/js/*.js', async ()=> { 
    scripts(); 
  }); 
};

gulp.task('styles', async ()=> { 
  styles(); 
});
gulp.task('scripts', async ()=> {
  scripts(); 
});
gulp.task('watch', async ()=> { 
  watch(); 
});

