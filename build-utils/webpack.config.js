const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const getAddons = (addonsArg) => {
  const addons = Array.isArray(addonsArg) ? addonsArg : [addonsArg];

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);
  return merge(commonConfig, envConfig, ...getAddons(addon));
};
