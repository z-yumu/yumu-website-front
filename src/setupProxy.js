const { createProxyMiddleware } = require('http-proxy-middleware')

const target = process.env.REACT_BASE_URL

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target,
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    )
}
