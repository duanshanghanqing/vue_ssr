
const root = (typeof self == 'object' && self.self === self && self) || (typeof global == 'object' && global.global === global && global) || this

let STAGE_ENV = ''
let _baseURL = ''
// 服务端
if (root.global) {
    STAGE_ENV = process.env.STAGE_ENV || 'dev'
    console.log(STAGE_ENV)
    if (STAGE_ENV === 'dev') {
        _baseURL = 'http://www.bejson.com'
    } else if (STAGE_ENV === 'test') {
        _baseURL = 'http://www.bejson.com'
    } else if (STAGE_ENV === 'sim') {
        _baseURL = 'http://www.bejson.com'
    } else if (STAGE_ENV === 'prod') {
        _baseURL = 'http://www.bejson.com'
    }
} else {
    STAGE_ENV = window.STAGE_ENV || 'dev'
    console.log(STAGE_ENV)
    if (STAGE_ENV === 'dev') {
        _baseURL = '/api'
    } else if (STAGE_ENV === 'test') {
        _baseURL = '/api'
    } else if (STAGE_ENV === 'sim') {
        _baseURL = '/api'
    } else if (STAGE_ENV === 'prod') {
        _baseURL = '/api'
    }
}

export const baseURL = _baseURL
