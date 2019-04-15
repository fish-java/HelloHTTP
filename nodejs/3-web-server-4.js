const http = require('http')

let server = http.createServer((req, res) => {
  let host = req.headers['host']
  console.log(req.headers)
  if(host == 'localhost:8088'){
    res.write('hello, welcome to localhost:8080')
  } else if(host == 'github.com') {
    res.write('welcome to github.')
  } else {
    res.write('hello, world')
  }
  res.end()
})

server.listen(8088)