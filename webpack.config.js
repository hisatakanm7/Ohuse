const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/1x/1.0.0/app.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: "source-map",
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },        
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg)$/,
          use: [{
            loader: 'url-loader',
            options: { limit: 10000 } // Convert images < 10k to base64 strings
          }]
        },
        {
          test: /\.svg$/,
          loader: 'babel!react-svg'
        }
      ],
    },
};
