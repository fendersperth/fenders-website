#!/bin/bash
# trap killgroup SIGINT

killgroup(){
	echo killing...
	kill 0
}

loop(){
	echo $1
	sleep $1
	loop $1
}

APP_PATH=$(pwd) ./node_modules/gulp/bin/gulp.js &
NODE_ENV=PRODUCTION node ./node_modules/webpack/bin/webpack.js --p --progress
wait

# trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

# # launch webpack in the background to watch for changed files in the frontend code
# webpack --watch &

# # launch the node server
# nodemon /src --debug