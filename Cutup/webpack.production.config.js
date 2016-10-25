/*----------------------------------------------------------
Settings
----------------------------------------------------------*/

// Main
var webpack = require("webpack");
var path = require('path');

// Paths
var projectRoot = process.env.PWD; // Absolute path to the project root
var resolveRoot = path.join(projectRoot, 'node_modules'); // project root/node_modules
var buildPath = path.resolve(__dirname, 'build/');

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
	// sass : {
	// 	outputStyle : (env === 'development' ? 'nested' : 'compressed')
	// },
	// autoprefixer: {
	// 	browsers: ['> 1%', 'last 2 versions', 'IE 8', 'IE 9', 'Firefox >= 25', 'Firefox ESR', 'Opera 12.1']
	// },
	minify : (env === 'production'),
	eslint : {
		quiet : (env === 'production')
	},
	devtool : (env === 'production') ? 'source-map' : 'eval-cheap-source-map'
};

/*----------------------------------------------------------
Setup
----------------------------------------------------------*/

module.exports = {

	context: path.join(process.env.PWD, 'src'),

	entry: {
		'app': 'app/index',
	},

	output: {
		path: buildPath,
		filename: "[name].js"
	},

	module: {
		preLoaders: [
			{test: /\.jsx$/, exclude: /(node_modules|vendor)/, loader: "eslint-loader"},
			{test: /\.js$/, exclude: /(node_modules|vendor)/, loader: "eslint-loader"}
		],
		loaders: [
			{ test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /(node_modules|vendor)/ },
			{ test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /(node_modules|vendor)/ },
		]
	},

	eslint: settings.eslint,

	resolve: {
		root: [
			path.resolve('./src'),
		],
		extensions: ['', '.js', '.html', '.jsx']
	},

	plugins: [
		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"' + env + '"'
			}
		})
	].concat((env === 'production') ? [
		uglifyPlugin,
		new webpack.optimize.OccurenceOrderPlugin()
	] : []),

	stats: {
		// Nice colored output
		colors: true
	},

	// // Create Sourcemaps for the bundle
	devtool: settings.devtool,

	node: {
		console: true
	}

};
