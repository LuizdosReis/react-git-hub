const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./common');

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html')),
    new ExtractTextPlugin('[name]-[hash].css'),
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
