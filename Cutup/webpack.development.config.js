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
		quiet: true
	},

	resolve: {
		root: [
			path.join(__dirname, 'js'),
		],
		extensions: ['', '.js', '.html', '.jsx', ]
	},

	plugins: [
		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	],

	stats: {
		// Nice colored output
		colors: true
	}

};
