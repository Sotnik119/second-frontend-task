const path = require('path');

module.exports = env => ({
	mode: env,
	entry: path.resolve(__dirname, './src/client/client.jsx'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		// modulesDirectories: [
		// 	'node_modules'
		// ]
	},
	module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			  loader: 'babel-loader',
			  options:{
				  presets: ['react', 'env','stage-2']
				}
			}
		  }
		  
		]
	  }
});