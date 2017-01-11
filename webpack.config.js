var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool:"eval-source-map", //生成source
	entry:__dirname + "/src/entry.js",
	output:{
		path:__dirname + "/prd",
		// filename:"[name]-[hash].js"
		filename:"bundle.js"
	},

	devServer:{
		contentBase: __dirname + '/prd',
		colors:true,
	    port: 8080,
	    host: 'localhost',
	    proxy: {
	      '/api': {
	        target: 'http://localhost:9000',
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
	    }
	},

	module:{
		loaders:[
			{
				test:/\.json$/,
				loader:"json",
			},
			{
				test:/\.css$/,
				loader:"style!css",
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel",
				// query: {
		        //   "presets": ['es2015',"react"]
		        // }
			},
			{
				test:/\.scss$/,
				// loader:"style!css!sass"
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},
			{
				test:/\.string$/,
				loader:"string"
			},
			{
				//test:/\.(png|jpg|gif|woff|svg|eot|ttf)$/,
				test:/\.(png|jpg)$/,
				loader:"url-loader?limit=8192"
			},
			{
				test:/\.vue/,
				loader:"vue"
			}

		]
	},

	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
	    new ExtractTextPlugin('bundle.css'),
		new webpack.BannerPlugin("Copyright yiqi"),
		// new ExtractTextPlugin("[name]-[hash].css")
	]

}
