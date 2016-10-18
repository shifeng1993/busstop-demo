// 模块引入
var gulp = require('gulp'), //主模块
  sass = require('gulp-sass'), //编译模块
  minifycss = require('gulp-minify-css'), //css压缩
  minifyhtml = require('gulp-minify-html'), //html压缩
  rename = require('gulp-rename'), //更换名称
  del = require('del');


//html任务
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(minifyhtml())
    .pipe(gulp.dest('./'));
});

//sass任务
gulp.task('sass', function() {
  return gulp.src('src/*.scss') //引入路径
    .pipe(sass()) //编译
    .pipe(minifycss()) //压缩
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css')); //输出路径
});

// 清空之前缓存
gulp.task('clean', function(cb) {
  del(['css', 'js', 'index.html'], cb);
});

//默认执行任务
gulp.task('default', ['clean', 'sass', 'html'], function() {
  gulp.start('sass','html');
});
