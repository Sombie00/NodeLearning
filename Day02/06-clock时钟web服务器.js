// 1.1导入http模块
const http = require('http')
// 1.2导入fs模块
const fs = require('fs')
// 1.3导入path模块
const path = require('path')

// 2.1创建web服务器
const serve = http.createServer()
// 2.2监听web服务器
serve.on('request', (req, res) => {
    // 3.1 获取客户端请求的地址
    const url = req.url
    // 3.2 将地址映射
    const fpath = path.join(__dirname, '/clock', url)
    console.log(fpath);
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) {
            return console.log("读取失败了");
        }
        res.setHeader('Content-Type', 'text/html;charset:utf8')
        res.end(dataStr)
    })
})
// 2.3启动web服务器
serve.listen(80, () => {
    console.log('serve is on http://127.0.0.1');
})