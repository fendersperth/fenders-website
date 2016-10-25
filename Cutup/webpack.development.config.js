/*----------------------------------------------------------
Settings
----------------------------------------------------------*/

// Main
var webpack = require("webpack");
var path = require('path');

/*----------------------------------------------------------
Setup
----------------------------------------------------------*/

module.exports = {

  // // Create Sourcemaps for the bundle
  devtool: 'cheap-module-source-map',

	entry: {
		'main': 'index',
	},

	output: {
		path: path.join(__dirname, 'js', 'min'),
		filename: "[name].min.js"
	},

	module: {
		preLoaders: [
			{
				test: /\.j(s|sx)$/,
				exclude: /(node_modules|vendor)/,
				loader: "eslint-loader"
			}
		],
		loaders: [
			{
				test: /\.j(s|sx)$/,
				loaders: ['babel'],
				exclude: /(node_modules|vendor)/
			}
		]
	},

	eslint: {
		quiet: false
	},

	resolve: {
		root: [
			path.join(__dirname, 'js'),
		],
		extensions: ['', '.js', '.html', '.jsx', ]
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"DEVELOPMENT"'
			}
		}),
		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin(),
	],

	stats: {
		// Nice colored output
		colors: true
	}

};
