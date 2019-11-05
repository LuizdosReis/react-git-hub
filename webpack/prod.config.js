const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./common');

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html')),
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoaders,
      {
        ...common.cssLoader,
        use: ExtractTextPlugin.extract({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1),
        }),
      },
    ],
  },

  resolve: common.resolve,
};
