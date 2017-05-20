var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
    // path: path.resolve(__dirname, 'dist')
  },
  module: {
    //     rules: [{
    //   		test: /\.css$/,
    //       exclude: /node_modules/,
    //       loader: "babel-loader",
		// use: ExtractTextPlugin.extract({
		// 	use: 'css-loader'
	  //           })
    //     }],
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },

};
