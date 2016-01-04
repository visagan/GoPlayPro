"use strict";

var gulp = require('gulp');
var browserify = require('browserify');// Bundles Js
var source = require('vinyl-source-stream'); //Use conventional text streams with gulp
var concat = require('gulp-concat');//Concatenates multiple files
var connect = require("gulp-connect");
var bower = require('gulp-bower');

var config = {
	port: 3200,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './web-app/*.html',
		js: './web-app/app/**/*.js',
		css:'./web-app/css',
		images: './web-app/images/**/*',
		fonts: './web-app/fonts/**/*',
		dest: './src/main/resources/static'
	}
}

//starts a local dev server
gulp.task('connect',function(){
	connect.server({
		root: ['public'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('html',function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dest))
		.pipe(connect.reload());
});

gulp.task('app-js',function(){
	browserify(config.paths.js)
		.bundle()
		.on('error',console.error.bind(console))
		.pipe(source('mca-app.js'))
		.pipe(gulp.dest(config.paths.dest+'/app'))
		.pipe(connect.reload());
});
/*
gulp.task('css',function(){
	gulp.src(config.paths.css)
		.pipe(concat('mca.css'))
		.pipe(gulp.dest(config.paths.dest+'/css'))
		.pipe(connect.reload());
});
*/
gulp.task('images',function(){
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dest + '/images'))
		.pipe(connect.reload());

	//publish favicon
	 gulp.src('./web-app/favicon.ico')
	 	.pipe(gulp.dest(config.paths.dest));
});

gulp.task('watch',function(){
	gulp.watch(config.paths.html,['html']);
	gulp.watch(config.paths.dest,['js']);
	//gulp.watch(config.paths.css,['css']);
});
 
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('default',['bower', 'html','app-js','images','connect','watch']);
gulp.task('build', ['bower', 'html', 'app-js', 'images'])
