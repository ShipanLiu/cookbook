/*
暗号是api， 一旦link里面有api， 就会把地址 localhost:3000 换成 localhost:9000， 而服务器本身就是localhost:9000， 跨域问题完美解决。

test: open Chrome and  search   http://localhost:3000/api/hotcate ,  the json-server returns the same data

*/

const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};