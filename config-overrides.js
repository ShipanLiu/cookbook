/*
  so whatever features we want from webpack, they all can be added here

*/
const path = require('path')
const {
  override,
  fixBabelImports,
  addWebpackResolve,
  addWebpackAlias,
  } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackResolve({
    //  引入的时候不用写后缀
    extensions: [".js", ".json", ".jsx"],
    // 给文件夹起别名, 因为为了达到assets， 路径非常非常难。
    alias: {
      // assets: path.resolve(__dirname, 'src/assets/')
    }
  }),

  // 给文件夹起别名, 因为为了达到assets， 路径非常非常难。这是第二种方法.
   addWebpackAlias({
     '@assets': path.resolve(__dirname, 'src/assets/'),
     '@': path.resolve(__dirname, 'src/')
   })
);