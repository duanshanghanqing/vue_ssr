import axios from 'axios'

export function fetchItem() {
    return new Promise((resolve, reject) => {
        resolve({
            title: '我是标题'
        })
    })
}

export function getrecommend() {
    return axios.get("/article/ajax/getrecommend/index", {
        params: {}
    })
}
