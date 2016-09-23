'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: true,
  entry: {
    'app': './app/entry'
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
    // publicPath:''
  },
  module: {
    loaders: [ {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", 'css-loader!postcss-loader')
      }
      , {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded'
      }, {
        test: /\.woff/,
        loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf/,
        loader: 'file?prefix=font/'
      }, {
        test: /\.eot/,
        loader: 'file?prefix=font/'
      }, {
        test: /\.svg/,
        loader: 'file?prefix=font/'
      }, {
        test: /[\/]angular\.js$/,
        loader: 'exports?angular'
      }, {
        test: /[\/]ionic\.js$/,
        loader: 'exports?ionic'
      },
      {test: /\.png$/, loader: "url-loader?limit=100000000"},
      {test: /\.jpg$/, loader: "url-loader?limit=100000000"}]
  },
  resolve: {
    root: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'node_modules'),
    ],
    moduleDirectories: [
      'bower_components',
      'node_modules',
    ],
    alias: {}
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
        'bower.json', ['main'])
    ),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      pkg: require('./package.json'),
      template: 'app/index-webpack.html',
      minify: false
    }),
    new ExtractTextPlugin('style.css')
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
    // new webpack.BannerPlugin(banner, options),
    // new webpack.optimize.DedupePlugin()
  ]
};
