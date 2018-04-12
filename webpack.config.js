const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./public/javascripts/jsx.js'],
  output: {
    path: path.resolve(__dirname, 'public/dist/assets'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  mode: 'development',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true, 
          warnings: false
        }        
      })
    ]
  }
};