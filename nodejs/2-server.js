// 引用HTTP模块
const http = require('http')

// 创建一个HTTP服务器实例
let server = http.createServer((req, res) => {
  res.end("hello world")
})

// 监听8088端口
server.listen(8088)