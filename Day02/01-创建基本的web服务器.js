// 1.导入http模块
const http = require("http")
// 2.创建web服务器实例
const serve = http.createServer()
// 3.为服务器绑定实例request事件,监听客户端的请求
serve.on('request', function (req, res) {
    // const str = req
    console.log('Someone visit our web');
    // console.log(req);
})
// 4.启动服务器
serve.listen(8080, function () {
    console.log('serve is running on localhost:8080');
})