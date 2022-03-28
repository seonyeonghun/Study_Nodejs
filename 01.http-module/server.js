const http = require('http')

const hostname = '127.0.0.1'
const port = 1337;

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('hello world\n')
})

server.listen(port, hostname, function(){
    console.log(`server running at http://${hostname}:${port}/`)
})

// 손이 많이 가니까 --> node롤 만들어진 framework : Express 설치하는게 좋다