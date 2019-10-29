const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./common');

const crp = new ExtractTextPlugin({ filename: 'crp.css' });
const styles = new ExtractTextPlugin({
  filename: '[name]-[hash].css',
});

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),

    new HtmlPlugin(common.htmlPluginConfig('template.html')),
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoaders,
      {
        test: /\.css$/,
        exclude: /node_modules|(search|style)\.css/,
        include: /src/,
        use: styles.extract('style', 'css'),
      },
      {
        test: /(search|style)\.css$/,
        exclude: /node_modules/,
        include: /src/,
        use: crp.extract('style', 'css'),
      },
    ],
  },

  resolve: common.resolve,
};
