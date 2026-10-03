const { watch } = require('fs')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist'),
		hashFunction: 'xxhash64'
	},
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true
		}
	}
	
}