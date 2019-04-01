//var webpack = require('webpack');

var APP_PORT = 8080;

module.exports = {
	entry: __dirname+"/app/components/index.js",
	output:{
		path: __dirname+"/public", filename: 'bundle.js'
	},
  devServer:{
    contentBase: __dirname+"/public",
    port: APP_PORT
  },
	module:{
		rules: [
			{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
			{
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /(node_modules)/
      }
		]
	}
}
