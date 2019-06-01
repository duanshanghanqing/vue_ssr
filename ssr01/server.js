const path = require('path')
const express = require('express')
const server = express()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const createApp = require('./dist/main.server.js').default

server.use(express.static(path.join(__dirname, 'dist')))

server.get('*', (req, res) => {
    const context = {
        title: 'hello',
        meta: `
          <meta ...>
          <meta ...>
        `,
        url: req.url
    }

    const app = createApp(context)
    // 文档上这里写的有误，没有传，会报错
    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html)
    })
})

server.listen(8090)