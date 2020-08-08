const path = require('path');
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');
const CompressionPlugin = require('compression-webpack-plugin');

const SERVER_CONFIG = {
  entry: './index.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	filename: 'bundle.js'
  },
  "target": "node",
  'devtool': 'eval-source-map',
  module: {
  	rules: [
  		{ test: /\.css/, use: ['css-loader', 'style-loader']},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
  		{
  			test: /\.jsx?$/, 
  			exclude: /(node_modules|bower_components)/,
  			use: {
  				loader: 'babel-loader',
  				options:{
  					presets: ["@babel/preset-react", '@babel/preset-env']
  				}
  			}
  		}
  	]
  },
  resolve :{
    alias: {
      '@components': path.resolve(__dirname, 'src/js/components'),
      '@styles': path.resolve(__dirname, 'src/js/styles'),
      '@pages': path.resolve(__dirname, 'src/js/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@js': path.resolve(__dirname, 'src/js')
    }
  },
  plugins:[
    new CleanWebpackPlugin(),
    new ReactLoadableSSRAddon({
      filename: 'assets-loadable.json',
    })
  ]
};

const CLIENT_CONFIG = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'clientBundles'),
    filename: '[name].bundle.js'
  },
  'devtool': 'eval-source-map',
  module: {
    rules: [
      { test: /\.css/, use: ['css-loader', 'style-loader']},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ["@babel/preset-react", '@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve :{
    alias: {
      '@components': path.resolve(__dirname, 'src/js/components'),
      '@styles': path.resolve(__dirname, 'src/js/styles'),
      '@pages': path.resolve(__dirname, 'src/js/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@js': path.resolve(__dirname, 'src/js')
    }
  },
  plugins:[
    new CleanWebpackPlugin(),
    new ReactLoadableSSRAddon({
      filename: 'assets-loadable.json',
    })
  ]
};


module.exports = env => {

  return [CLIENT_CONFIG ,SERVER_CONFIG]
}