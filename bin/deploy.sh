#!/bin/bash

APP_PATH=$(pwd) ./node_modules/gulp/bin/gulp.js &&
NODE_ENV=production node ./node_modules/webpack/bin/webpack.js --p --progress &&
rsync -av --exclude 'node_modules' --exclude 'webpack.*' --exclude 'gulpfile.js' --exclude 'bin' ../Cutup/ fenders@fende.rs:~/public_html/