const http = require('http')

let server = http.createServer((req, res) => {

  req.on('data', chunk => {
    console.log(chunk.toString('utf8'))
  })
  req.on('end', () => {
    res.end('ok')
  })
})

server.listen(8088)