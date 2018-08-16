const path = require('path');

module.exports = env => ({
	mode: env,
	entry: path.resolve(__dirname, './src/client/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
});