var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const PATHS = {
	MOVIES : path.join(__dirname,'./movies'),
	EVENTS : path.join(__dirname,'./events'),
	BUILD : path.join(__dirname,'./public'),
	SERVER : path.join(__dirname,'./server/server.js')
}
var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
})
module.exports = {
	target:'node',
	entry:{
		server:PATHS.SERVER
	},
	externals:nodeModules,
	output:{
		filename:'[name].js',
		path:PATHS.BUILD,
		publicPath:'/assets/'
	},
	module:{
		loaders:[
			{
				test:/\.less$/,
				loaders:['isomorphic-style-loader','css-loader','less-loader'],
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				},
				exclude:['/node_modules/']
			}
		]
	}
}
