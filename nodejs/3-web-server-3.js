const http = require('http')

let server = http.createServer((req, res) => {
  res.statusCode = 404
  res.statusMessage = 'hello world'
  res.setHeader('server', 'node')
  res.end()
})

server.listen(8088)