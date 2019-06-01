/**
 * 注册当前应用中间件
 */
const proxy = require('./proxy')
module.exports = function (app) {
    proxy(app);
}
