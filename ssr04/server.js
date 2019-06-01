const express = require("express");
const server = express();

const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = require("vue-server-renderer").createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template: require("fs").readFileSync("./index.template.html", "utf-8"), //读取一个本地模板
    clientManifest // （可选）客户端构建 manifest
});

//修改静态文件指定目录
server.use("/dist",express.static("./dist"));

server.get("*", (req, res) => {
    const context = {
        title: "hello",
        meta: `
          <meta ...>
          <meta ...>
        `,
        url: req.url
    };

    renderer.renderToString(context,(err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
});

server.listen(8090);
