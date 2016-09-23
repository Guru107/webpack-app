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
	devServer:{
		contentBase: PATHS.BUILD,
		hot: true,
		publicPath: "/assets",
		quiet: false,
  		noInfo: false,
		headers: { 'Access-Control-Allow-Origin': 'http://localhost:4000','Access-Control-Allow-Credentials':'true' }
	},
	entry:{
		movies : PATHS.MOVIES,
		events : PATHS.EVENTS
	},
	output : {
		filename : '[name].js',
		path : PATHS.BUILD,
		publicPath: "/assets/"
	},
	externals:{
		'./webpack-assets.json':'commonjs ./webpack-assets.json'
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
				loader:'babel-loader?presets[]=react,presets[]=es2015',
				exclude:['/node_modules/']
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin({quiet:true}),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new AssetsPlugin({path: PATHS.BUILD})
	]


}
