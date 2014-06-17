# gulpfile.coffee
#
# [About gulp](https://github.com/gulpjs/gulp/)
# [About coffeescript](http://coffeescript.org/)
#
# Make sure you have coffee-script:
# ---------------------------------
# $ npm install coffee-script -s
#
# Make sure you have cult
# $ npm install cult -g
#
# To run:
# -------
# $ cult -w

gulp       = require 'gulp'
sass       = require 'gulp-ruby-sass'
rename     = require 'gulp-rename'
gutil      = require 'gulp-util'
plumber    = require 'gulp-plumber'
browserify = require 'gulp-browserify'
livereload = require 'gulp-livereload'

# Tasks relating to JS
gulp.task 'js', ->

  gulp.src './static/js/main.js'
  .pipe browserify
    debug : true

  .on 'error', gutil.log
  .pipe rename 'app.min.js'
  .pipe gulp.dest './static/dist/'

# Tasks relating to CSS
gulp.task 'css', ->

  gulp.src './static/scss/main.scss'

  # prevent gulp-ruby-sass from killing every gorram thing on error
  # https://github.com/floatdrop/gulp-plumber
  .pipe plumber()
  .pipe sass
    style: 'compressed'

    # There are some limitations with gulp-sass, as it is based on
    # node-sass which is not sass 3.3 compliant yet.
    # Sourcemaps don't work correctly and libs that require 3.3
    # won't work yet
    # https://github.com/dlmanning/gulp-sass/issues/57
    # sourceComments : 'map'
    #errLogToConsole : true
    #outputStyle     : 'compressed'
    #includePaths    : [ 'static/scss/' ]

  .pipe rename 'app.css'
  .pipe gulp.dest './static/dist/'
  .pipe livereload()

# Watch task
gulp.task 'watch', ->

  gulp.watch [ 'static/scss/**/*.scss' ], [ 'css' ]
  gulp.watch [ 'static/js/**/*.js' ], [ 'js' ]

# Default task
gulp.task 'default', [ 'js', 'css', 'watch' ]


