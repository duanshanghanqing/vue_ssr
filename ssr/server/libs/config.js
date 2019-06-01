// 运行阶段环境变量
const STAGE_ENV = process.env.STAGE_ENV || 'dev'

exports.STAGE_ENV = STAGE_ENV

// 服务监听端口
let PORT = 8090
// api转发url
let apiBaseURL = 'http://www.bejson.com'
if (STAGE_ENV === 'dev') {
    PORT = 8090
    apiBaseURL = 'http://www.bejson.com'
} else if (STAGE_ENV === 'test') {
    PORT = 8091
    apiBaseURL = 'http://www.bejson.com'
} else if (STAGE_ENV === 'sim') {
    PORT = 8092
    apiBaseURL = 'http://www.bejson.com'
} else if (STAGE_ENV === 'prod') {
    PORT = 8093
    apiBaseURL = 'http://www.bejson.com'
}

exports.PORT = PORT
exports.apiBaseURL = apiBaseURL
