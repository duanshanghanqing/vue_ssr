function setTitle(title) {
    document.title = title
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        var i = document.createElement('iframe')
        i.src = '/ico/favicon.ico'
        i.style.display = 'none'
        i.onload = function() {
            setTimeout(function() {
                i.remove()
            }, 9)
        }
        document.body.appendChild(i)
    }
}

function getTitle(vm) {
    // 组件可以提供一个 `title` 选项
    // 此选项可以是一个字符串或函数
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}

const serverTitleMixin = {
    created() {
        const title = getTitle(this)
        if (title) {
            this.$ssrContext.title = title
        }
    }
}

let titles = {}

const clientTitleMixin = {
    mounted() {
        const title = getTitle(this)
        if (title) {
            titles[this.$route.path] = title
            setTitle(title)
        }
    },
    watch: {
        $route(to, from) {
            if (titles[this.$route.path]) {
                setTitle(titles[this.$route.path])
            }
        }
    }
}

// 可以通过 `webpack.DefinePlugin` 注入 `VUE_ENV`
export default process.env.VUE_ENV === 'server'
    ? serverTitleMixin
    : clientTitleMixin
