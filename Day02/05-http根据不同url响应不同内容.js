const http = require('http')
const serve = http.createServer()
serve.on('request', (req, res) => {
    const url = req.url
    if (url === '/' || url === '/index.html') {
        content = "<h1>首页</h1>"
    } else if (url === '/about.html') {
        content = '<h1>关于界面</h1>'
    } else {
        content = '404 not found'
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(content)
    console.log(req.url);
})
serve.listen(80, () => {
    console.log('serve is onload');
})