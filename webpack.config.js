const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
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
      rules: [
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
