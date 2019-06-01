const proxy = require('express-http-proxy')
const libs = require('../../libs')
module.exports = function (app) {
    // 代理浏览器接口请求
    app.use('/api', proxy(libs.config.apiBaseURL, {
        proxyReqPathResolver(req) {
            console.log(`${libs.config.apiBaseURL}${req.url}`)
            return `${req.url}`
        }
    }))
}
