/*----------------------------------------------------------
Settings
----------------------------------------------------------*/

// Main
var webpack = require("webpack");
var path = require('path');

// Plugins
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
	sourceMap: true,
	comments: false,
	compress: {
		dead_code: true,
		sequences: true,
		booleans: true,
		conditionals: true,
		if_return: true,
    join_vars: true,
		unused: true,
		warnings: true,
		evaluate: true,
	},
	mangle: {
		toplevel: true,
		sort: true,
		properties: true
	},
	output: {
		space_colon: false,
		comments: false
	}
});

var settings = {
	minify : true,
	eslint : {
		quiet : 'production'
	}
};

/*----------------------------------------------------------
Setup
----------------------------------------------------------*/

module.exports = {

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

	devtool: 'source-map',

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
		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		uglifyPlugin,
		new webpack.optimize.OccurenceOrderPlugin()
	]
};
