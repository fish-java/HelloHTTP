const http = require('http')

let server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.write('<h1>hello world</h1>')
  res.end()
})

server.listen(8088)