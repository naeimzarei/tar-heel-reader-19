const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    const proxies = [];
    const proxy1 = proxy('/THR/api', {
        "target": "https://dev.tarheelreader.org/THR/api",
        "pathRewrite": {
          "^/THR/api/": ""
        },
        "secure": true,
        "changeOrigin": true,
        "host": "dev.tarheelreader.org"
    });

    const proxy2 = proxy('/cache', {
        "target": "https://dev.tarheelreader.org",
        "host": "dev.tarheelreader.org",
        "changeOrigin": true,
        "secure": false
    });

    const proxy3 = proxy('/uploads', {
        "target": "https://dev.tarheelreader.org",
        "host": "dev.tarheelreader.org",
        "changeOrigin": true,
        "secure": false
    });

    proxies.push(proxy1, proxy2, proxy3);
    app.use(proxies);
};