const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8008,
    compress: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', include: __dirname, exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=100000000'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
      {
        test: /\.mp3$/,
        loader: 'url-loader'
    }
    ]
 },
externals: {
'react/lib/ExecutionEnvironment': true,
'react/addons': true,
'react/lib/ReactContext': 'window'
  },
 plugins: [
   injectConfig,
   new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
 ]
}
