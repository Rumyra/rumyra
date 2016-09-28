var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var sass = require('gulp-sass');


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

,
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	},
	'whitepaperStyles': {
		all: './public/whitepaper/styles/application.scss',
		output: './public/whitepaper/styles/'
	}

};


gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
	gulp.watch('.public/whitepaper/styles/sass/*.scss', ['white']);
});

// gulp.task('watch:white', function () {
// 	gulp.watch('.public/whitepaper/styles/sass/*.scss', ['white']);
// });

gulp.task('sass', function(){
	return gulp.src(paths.style.all)
		.pipe(sass())//.on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});

gulp.task('white', function(){
	return gulp.src(paths.whitepaperStyles.all)
		.pipe(sass())
		.pipe(gulp.dest(paths.whitepaperStyles.output));
});



gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

  'watch:sass',

]);

gulp.task('default', ['watch', 'runKeystone']);
