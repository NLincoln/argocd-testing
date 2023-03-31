const http = require('http');
const { libhoney } = require('./libhoney');

const NUM_WORKERS = Number.parseInt(process.env.NUM_WORKERS || '10')

async function worker(i) {
    while (true) {
        await new Promise(r => {
            const req = http.request({
                host: 'demo-app',
                path: '/',
                method: 'GET',
                timeout: 1000
            });
            req.end();
            req.on('response', r)
        });
    }
}


for (let i = 0; i < NUM_WORKERS; i++) {
    worker(i)
}