const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg)$/,
          use: [{
            loader: 'url-loader',
            options: { limit: 10000 } // Convert images < 10k to base64 strings
          }]
        }
      ]
    },

};
