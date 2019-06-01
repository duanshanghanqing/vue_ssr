
const STAGE_ENV = process.env.STAGE_ENV || 'dev'

let _apiBaseURL = 'http://www.bejson.com'
if (STAGE_ENV === 'dev') {
    _apiBaseURL = 'http://www.bejson.com'
} else if (STAGE_ENV === 'test') {
    _apiBaseURL = 'http://www.bejson.com'
} else if (STAGE_ENV === 'sim') {
    _apiBaseURL = 'http://www.bejson.com'
} else if (STAGE_ENV === 'prod') {
    _apiBaseURL = 'http://www.bejson.com'
}

exports.apiBaseURL = _apiBaseURL
