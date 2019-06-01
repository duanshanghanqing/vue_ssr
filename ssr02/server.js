const express = require("express");
const server = express();
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync("./index.template.html", "utf-8") //读取一个本地模板
});
//vue实例只会创建一次
const createApp = require('./dist/main.server.js').default;

//修改静态文件指定目录
server.use("/dist", express.static("./dist"));

server.get("*", (req, res) => {
  console.log(req.url);
  const context = {
    title: "hello",
    meta: `
          <meta ...>
          <meta ...>
        `,
    url: req.url
  };
  createApp(context).then(app => {
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        res.end(err)
      } else {
        res.end(html)
      }
    })
  }).catch((err) => {
    if (err.code === 404) {
      res.status(404).end('Page not found')
    } else {
      res.status(500).end('Internal Server Error')
    }
  })
});

server.listen(8090);
