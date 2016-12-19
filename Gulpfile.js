var gulp = require("gulp"),
	babel = require("gulp-babel"),
	rigger = require("gulp-rigger"),
	watch = require("gulp-watch"),
	browserSync = require("browser-sync"),
    reload = browserSync.reload,
	systemjsBuilder = require('gulp-systemjs-builder'),
	less = require('gulp-less'),
	pathes = require('path'),
	LessAutoprefix = require('less-plugin-autoprefix'),
	autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
	
var path = {
	systemJSCongif: "./system.config.js",
	src: {
		img: "",
		js: "src/js/**/*.js",
		styles: "src/styles/app.less",
		html: "src/**/*.html"
	},
	build: {
		img: "",
		js: "build/js/",
		styles: "build/styles/",
		html: "./build"
	},
	watch: {
		html: "src/**/*.html",
		js: "src/**/*.js",
		styles: "src/**/*.less"
	}
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: '127.0.0.1',
    port: 5152,
    logPrefix: "Laboratory Work #4"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task("build:html", function(){
	return gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({
			stream: true
		}));
});

gulp.task("build:js", function(){	
	return gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({
			stream: true
		}));	
});

gulp.task("build:styles", function(){
	return gulp.src(path.src.styles)
		.pipe(less({			
			plugins: [ autoprefix ]
		}))
		.pipe(gulp.dest(path.build.styles))
		.pipe(reload({
			stream: true
		}));
});

gulp.task("watch", function(){
	watch([ path.watch.html ], function(event, cb){
		gulp.start("build:html");
	});
	
	watch([ path.watch.js ], function(event, cb){
		gulp.start("build:js");
	});
	
	watch([ path.watch.styles ], function(event, cb){		
		gulp.start("build:styles");
	});
});

gulp.task("build", function(){
	gulp.start("build:js");
	gulp.start("build:styles");
	gulp.start("build:html");
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task("default", [ "build",  "watch", "webserver" ]);