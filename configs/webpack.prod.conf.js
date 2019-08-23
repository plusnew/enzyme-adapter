const constants = require('./constants');

const prodConfig = require('plusnew-webpack-config').prod('enzyme-adapter-plusnew', constants.baseDirectory);
prodConfig.externals = {
  '@plusnew/core': '@plusnew/core',
  '@plusnew/driver-dom': '@plusnew/driver-dom',
  enzyme: 'enzyme',
};

module.exports = prodConfig;
