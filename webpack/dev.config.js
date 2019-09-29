const webpack = require('webpack');
const validate = require('webpack-validator');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const common = require('./common');

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry,
  ],

  output: Object.assign({}, common.output, {
    publicPath: '/',
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new HtmlPlugin(common.htmlPluginConfig('template-dev.html')),
  ],

  module: {
    preLoaders: [common.standardPreLoader],
    loaders: [common.jsLoaders, common.cssLoader],
  },

  resolve: common.resolve,
});
