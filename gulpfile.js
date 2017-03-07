var gulp = require('gulp'),
    sass = require('gulp-sass');
    //mincss = require('gulp-mini-css'),
    //sourcemaps = require('gulp-sourcemaps'),
    //uglify = require('gulp-uglify');

var resources_css = './resources/sass',
     com_css = './public/css';
    // raw_js = './RAW/js',
    // com_js = './COMPRESS/js';

gulp.task('sass', function () {
    gulp.src(resources_css+'/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass())
        //.pipe(mincss())
        //.pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(com_css));
});

 //gulp.task('mincss', function () {
 //    gulp.src(resources_css+'/*.scss')
 //        .pipe(mincss())
 //        .pipe(gulp.dest(com_css));
 //});

 //gulp.task('minjs', function () {
 //    gulp.src(raw_js+'/!**!/!*.js')
 //        .pipe(uglify())
 //        .pipe(gulp.dest(com_js));
 //});

gulp.task('watch', function () {
    gulp.watch(resources_css+'/!*.scss',['sass']);
});

 gulp.task('default',function(){
     gulp.run('sass');
     gulp.run('watch');
 });

//每个gulp.task(name, fn)都是一个任务配置模块，如本代码段定义了名为"sass"的任务的执行流程
// gulp.task('sass', function () {
//     gulp.src(raw_css+'/!**!/!*.scss')   //gulp.src(glob)返回了一个可读的stream，如此行返回了RAW/css/下的全部（包含子文件夹里的）.scss文件流
//         .pipe(sourcemaps.init())  //.pipe()管道化执行组件任务，此处调用gulp-sourcemaps的初始化api来处理接收的文件流（方便后续编译出.map文件）
//         .pipe(sass())         //执行gulp-sass组件任务，把.scss文件流编译为.css文件流
//         .pipe(sourcemaps.write('/'))      //调用gulp-sourcemaps的写入api，额外输出.map文件流
//         .pipe(mincss())     //执行gulp-mini-css组件任务，压缩所有css文件流
//         .pipe(gulp.dest(com_css));   //gulp.dest(glob)返回一个可写的stream，如此行是将文件流写入到 COMPRESS/css 里的对应路径下
// });
// gulp.task('watch', function () {  //定义名为"watch"的任务
//     gulp.watch(raw_css+'/!**!/!*.scss',['sass']);   //监听 RAW/css 下的全部.scss文件，若有改动则执行名为'sass'任务
//     gulp.watch(raw_js+'/!**/!*.js',['minjs']);   //监听 RAW/js 下的全部.js文件，若有改动则执行名为'minjs'任务
// });
//
// gulp.task('default',function(){  //每个gulpfile.js里都应当有一个dafault任务，它是缺省任务入口（类似C语言的main()入口），运行gulp的时候实际只是调用该任务（从而来调用其它的任务）
//     gulp.run('sass','minjs','mincss');   //gulp.run(tasks)表示运行对应的任务，这里表示执行名为'sass','minjs','mincss'的三个任务
//     gulp.run('watch');    //执行'watch'监听任务
// });

var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss')
        .browserify('app.js');
});