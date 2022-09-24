const http = require('http')
const serve = http.createServer()
serve.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    console.log(url, method);
})
serve.listen(80, () => {
    console.log('serve is running on 80');
})