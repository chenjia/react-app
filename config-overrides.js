const { override, fixBabelImports } = require('customize-cra');
const path = require('path');

const rewiredConfig = () => config => {
  setTimeout(() => {
    console.log(config);
  },5555);
  config.output.publicPath = './'
  return config;
}

module.exports = {
  webpack: override(
    rewiredConfig(),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    })
  )
}
