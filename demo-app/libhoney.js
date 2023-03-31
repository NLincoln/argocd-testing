const https = require('https');
const os = require('os');

if (!process.env.HONEYCOMB_WRITE_TOKEN) {
    console.log("HONEYCOMB_WRITE_TOKEN is required");
    process.exit(1);
}

exports.libhoney = function libhoney(event) {
    let req = https.request({
        hostname: 'api.honeycomb.io',
        path: '/1/events/test-service',
        method: 'POST',
        headers: {
            'X-Honeycomb-Team': process.env.HONEYCOMB_WRITE_TOKEN.trim(),
            'Content-Type': 'application/json'
        },

    });

    req.write(JSON.stringify({
        ...event,
        'meta.hostname': os.hostname(),
        'meta.arch': os.arch(),
        'global.commit': process.env.COMMIT_HASH,
    }))
    req.end();

}