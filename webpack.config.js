var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool:'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],
  output: {
    path: path.join(__dirname,'./dist'),
    filename: "bundle.js",
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: ["style", "css", "sass"]
    }]
  },
  resolve111: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js','.jsx']
  },
};
