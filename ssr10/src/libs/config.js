
const root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this;

let _baseURL = '';
// 服务端
if (root.global) {
    _baseURL = 'http://www.bejson.com'
} else {
    _baseURL = '/api'
}

export const baseURL = _baseURL;
