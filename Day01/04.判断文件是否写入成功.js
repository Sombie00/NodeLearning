const fs = require('fs')
fs.writeFile('/files/2.txt', 'hello!', function (err) {
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');
})