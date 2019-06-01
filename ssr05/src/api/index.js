export function fetchItem() {
    return new Promise((resolve, reject) => {
        resolve({
            title: '我是标题'
        })
    })
}