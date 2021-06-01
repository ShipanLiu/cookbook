/*
  so whatever features we want from webpack, they all can be added here

*/
const path = require('path')
const {
  override,
  fixBabelImports,
  addWebpackResolve,
  addWebpackAlias,
  addDecoratorsLegacy,
  } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackResolve({
    //  引入的时候不用写后缀
    extensions: [".js", ".json", ".jsx"],
    // way one:
    alias: {
      // assets: path.resolve(__dirname, 'src/assets/')
    }
  }),

  // way two
   addWebpackAlias({
     '@assets': path.resolve(__dirname, 'src/assets/'),
     '@': path.resolve(__dirname, 'src/'),
     '@c': path.resolve(__dirname, 'src/components'),

   }),
   // Decorators @ fro class Components
   addDecoratorsLegacy()
);