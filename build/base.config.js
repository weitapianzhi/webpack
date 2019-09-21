const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry:{
		'index':'./src/js/index.js',
	},
	output:{
		path: path.resolve(__dirname,'../dist'),
		filename:'js/[name].js',
		publicPath:'./'
	},
	module:{
		rules:[
			{
				test: /\.(css|sass|scss)$/,
				use:['style-loader','css-loader','sass-loader']
			},
			// {
			//   test: /\.js$/,
			//   exclude:/(node_modules|bower_components)/,
			//   use:{
			// 	  loader: 'babel-loader',
			// 	  options:{
			// 		  presets:['es2015']
			// 	  }
			//   }
			// },
			{
				test:/\.(png|jpg|git|jpeg)$/,
				use:[
					{
						loader: 'url-loader',
						options:{
							limit: 1300,
							name:'img/[name].[hash:8].[ext]'
						}
					},
					
				]
			}
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