var webpack = require('webpack')
var path = require('path')
var AssetsPlugin = require('assets-webpack-plugin')
const PATHS = {
	MOVIES : path.join(__dirname,'./movies'),
	EVENTS : path.join(__dirname,'./events'),
	BUILD : path.join(__dirname,'./public')
}
module.exports = {
	target:'web',
	devtool : 'eval',
	entry:{
		movies : PATHS.MOVIES,
		events : PATHS.EVENTS
	},
	output : {
		filename : '[name].js',
		path : PATHS.BUILD,
		publicPath: "/assets/"
	},
	module:{
		loaders:[
			{
				test:/\.less$/,
				loader:'style!css!less',
				exclude:['/node_modules/']
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:['/node_modules/']
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin({quiet:true}),
		new webpack.optimize.OccurenceOrderPlugin(true)
	]


}
