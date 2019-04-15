const http = require('http')

let server = http.createServer((req, res) => {
    res.setHeader('Set-Cookie', 'name=fish; domain=localhost')
    res.end()
    console.log(req.headers)
})

server.listen(8088)