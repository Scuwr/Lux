const PROXY_CONFIG = {
    "/": {
        "target": process.env.FRONTEND_TARGET || "http://localhost:4100",
        "secure": false
    }
}

console.log('STARTING FRONTEND WITH BACKEND TARGET URL: ' + PROXY_CONFIG['/'].target)

module.exports = PROXY_CONFIG;
