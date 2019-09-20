const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry:{
		'index':'./src/js/index.js',
	},
	output:{
		path: path.resolve(__dirname,'../dist'),
		filename:'js/[name].js'
	},
	module:{
		rules:[
			{
				test: /\.(css|sass|scss)$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
			  test: /\.js$/,
			  exclude:/(node_modules|bower_components)/,
			  use:{
				  loader: 'babel-loader',
				  options:{
					  presets:['es2015']
				  }
			  }
			  
			},
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./index.html',
			filename:'index.html',
			inject: 'head'
		})
	],
}