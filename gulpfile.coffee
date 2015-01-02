#------------------------------------------------------------------------------
#
# gulpfile.coffee
#
# [About gulp](https://github.com/gulpjs/gulp/)
# [About coffeescript](http://coffeescript.org/)
#
# Make sure you have coffee-script:
# ---------------------------------
# $ npm install coffee-script -s
#
# To run:
# -------
# $ gulp
#
#--- IMPORTS ------------------------------------------------------------------

gulp       = require 'gulp'
#sass       = require 'gulp-sass'           # one day ...
sass       = require 'gulp-ruby-sass'
gutil      = require 'gulp-util'
browserify = require 'browserify'
reactify   = require 'reactify'             # Transform for .jsx
es6ify     = require 'es6ify'               # Transform for es6 -> es5
source     = require 'vinyl-source-stream'  # Bridge text stream -> gulp stream
rename     = require 'gulp-rename'
livereload = require 'gulp-livereload'

#--- HELPERS ------------------------------------------------------------------

# Handle browserify errors.
handleError = (err) ->
  gutil.log err.message
  this.emit 'end'

#--- FILES - FOLDERS  ---------------------------------------------------------

jsEntryFile   = './static/js/main.jsx'
jsPath        = './static/js/'
jsBundle      = 'app.min.js'

scssEntryFile = './static/scss/main.scss'
scssPath      = './static/scss/'
cssBundle     = 'app.css'

serverPath    = './server'

destFolder    = './static/dist/'

#--- JS TASKS -----------------------------------------------------------------

gulp.task 'js', ->

  b = browserify jsEntryFile,
        debug : true

  b.transform reactify                  # Transform .jsx
  b.transform es6ify.configure(/.jsx?/) # Apply to .js and .jsx files

  b.bundle()
    .on 'error', handleError
    .pipe source jsBundle
    .pipe gulp.dest destFolder
    .pipe livereload()

#--- CSS TASKS ----------------------------------------------------------------

gulp.task 'css', ->

  gulp.src scssEntryFile

  # These options are for the worrying gulp-ruby-sass present.
  # https://github.com/sindresorhus/gulp-ruby-sass/issues/142
  .pipe sass
    'sourcemap=none' : true
    'sourcemapPath'  : scssPath
  .on 'error', (err) -> console.log err.message


  # These options are for a hopeful future where gulp-sass can
  # replace gulp-ruby-sass
    #sourceComments : 'map'
    #outputStyle    : 'compressed'
    #includePaths   : [ scssPath ]

  .pipe rename cssBundle
  .pipe gulp.dest destFolder
  .pipe livereload()

#-- SERVERSIDE TASKS ----------------------------------------------------------

gulp.task 'server', ->

  console.log 'Reloading client'
  livereload()

#--- WATCH TASK ---------------------------------------------------------------

gulp.task 'watch', ->

  livereload.listen()

  gulp.watch [
    scssPath + '**/*.scss'
  ], [ 'css' ]

  gulp.watch [
    jsPath + '**/*.js'
    jsPath + '**/*.jsx'
  ], [ 'js' ]

  gulp.watch [
    './server.js',
    serverPath + '**/*.js',
    serverPath + '**/*.jade'
  ], [ 'server' ]

#--- DEFAULT TASK -------------------------------------------------------------

gulp.task 'default', [ 'js', 'css', 'watch' ]

#--- KAIZEN -------------------------------------------------------------------
