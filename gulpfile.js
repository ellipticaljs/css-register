var gulp=require('gulp'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    uglify = require('gulp-uglify'),
    BUILD_JSON=require('./build.json'),
    BUILD_NAME='elliptical.css-register.js',
    MIN_NAME='elliptical.css-register.min.js',
    REPO_NAME='css-register',
    DIST='./dist';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp build|minify|webcomponents-css"');
});

gulp.task('build',function(){
    concatStream(BUILD_NAME)
        .pipe(gulp.dest(DIST));
});

gulp.task('minify',function(){
    concatStream(MIN_NAME)
        .pipe(uglify())
        .pipe(gulp.dest(DIST));
});

gulp.task('webcomponents-css',function(){
    concatFileStream(['./lib/css-elements.js','./lib/css-register.js','./dist/webcomponents-lite.js'],DIST,'webcomponents-css.js');
});

function srcStream(src){
    if(src===undefined) src=BUILD_JSON;
    return gulp.src(src);
}

function concatStream(name,src){
    if(src===undefined) src=BUILD_JSON;
    return srcStream(src)
        .pipe(concat(name))
}

function fileStream(src,dest){
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

function concatFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function minFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}