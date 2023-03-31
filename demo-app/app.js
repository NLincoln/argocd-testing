const http = require('http');

const { libhoney } = require('./libhoney');


http.createServer((req, res) => {
    if (Math.random() < 0.3) {
        libhoney({ statuscode: 500 })
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({
            error: "got rekt"
        }))
        return
    }

    libhoney({ statuscode: 200 })

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({
        error: "it works"
    }))


}).listen(8080)