const http = require('http')

let server = http.createServer((req, res) => {
  let method = req.method;
  let path = req.url
  let version = req.httpVersion
  let headers = req.headers;

  res.write(`method: ${method} 
  `)
  res.write(`path: ${path} 
  `)
  res.write(`http version: ${version}
  `)
  res.write(`headers: 
  `)
  for (const header in headers) {
    res.write(`${header}: ${headers[header]}
    `)
  }
  res.end()
})

server.listen(8088)