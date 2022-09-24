const http = require('http')
const serve = http.createServer()
serve.on('request', (req, res) => {
    // 调用res.setHeader()

    const str = '您请求的地址是 ${req.url}'
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})
serve.listen(80, () => {
    console.log('running');
})