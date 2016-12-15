var gulp = require("gulp"),
	babel = require("gulp-babel"),
	rigger = require("gulp-rigger"),
	watch = require("gulp-watch"),
	browserSync = require("browser-sync"),
    reload = browserSync.reload,
	systemjsBuilder = require('gulp-systemjs-builder');

var path = {
	systemJSCongif: "./system.config.js",
	src: {
		img: "",
		js: "src/main.js",
		styles: "",
		html: "src/html/**/*.html"
	},
	build: {
		img: "",
		js: "./build/",
		styles: "",
		html: "build/html/"
	},
	watch: {
		html: "src/html/**/*.html",
		js: "src/**/*.js"
	}
};

var config = {
    server: {
        baseDir: "./build/"
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
	var builder = systemjsBuilder();
	
	builder.loadConfigSync(path.systemJSCongif);
	
	return builder.buildStatic(path.src.js, {
		minify: false,
		mangle: false
	})		
	.pipe(gulp.dest(path.build.js))
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
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task("default", [ "watch", "webserver" ]);