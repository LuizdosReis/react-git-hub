const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const common = require('../webpack/common');

module.exports = function(config, env) {
  const newConfig = webpackConfig(config, env);

  newConfig.module.rules = (newConfig.module.rules || []).concat(common.standardPreLoader);

  newConfig.resolve = common.resolve;

  return newConfig;
};
