import Vue from 'vue'
import axios from 'axios'
import libs from '@/libs'

axios.defaults.baseURL = libs.config.baseURL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = axios

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        let { method } = config
        // 解决浏览器缓存请求
        if (method === 'get') {
            Object.assign(config.params, {
                '_@time': new Date() * 1
            })
        }

        // 请求挂载企业
        // Do something before request is sent
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error)
    }
)