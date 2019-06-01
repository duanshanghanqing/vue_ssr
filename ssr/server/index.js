const express = require('express')
const server = express()
const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')
const fs = require('fs')
// 中间件
require('./middlewares/index')(server)
const { config } = require('./libs')

const microCache = new LRU({
  max: 100,
  maxAge: 10000 // 重要提示：条目在 10 秒后过期。
})

const isCacheable = req => {
  // 实现逻辑为，检查请求是否是用户特定(user-specific)。
  // 只有非用户特定(non-user-specific)页面才会缓存
  return true
}

// 读取一个本地模板
const template = fs.readFileSync('./index.template.html', 'utf-8')

// 封装获取renderer
function getRenderer() {
  const serverBundle = require('../dist/vue-ssr-server-bundle.json')
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template, // 读取一个本地模板
    clientManifest // （可选）客户端构建 manifest
  })
  return renderer
}

// 修改静态文件指定目录
server.use('/dist', express.static('./dist'))
server.use(express.static('./public'))

server.get('*', (req, res) => {
  // 缓存设置
  const cacheable = isCacheable(req)
  if (cacheable) {
    const hit = microCache.get(req.url)
    if (hit) {
      console.log('从缓存中渲染页面')
      return res.end(hit)
    }
  }

  const context = {
    title: 'hello',
    meta: `
          <meta ...>
          <meta ...>
        `,
    url: req.url,
    STAGE_ENV: config.STAGE_ENV// 告诉前端当前运行的阶段环境
  }

  const renderer = getRenderer()
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        console.error(err)
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
      // 缓存设置
      if (cacheable) {
        microCache.set(req.url, html)
      }
    }
  })
})

const PORT = config.PORT

server.listen(PORT, () => {
  console.log(`server started at：http://localhost:${PORT}`)
})
