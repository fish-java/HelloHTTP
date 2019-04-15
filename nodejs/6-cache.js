const http = require('http')

let server = http.createServer((req, res) => {
  if(req.headers['if-modified-since'] != null) {
    res.statusCode = 304
    res.end()
  } else {
    res.setHeader('last-modified', new Date().toISOString())
    res.write('hello world')
    res.end()
  }
  
  console.log(req.headers)

  res.end()

})

server.listen(8088)