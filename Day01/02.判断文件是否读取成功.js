const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        console.log('读取失败', err.message);
    }
    else {
        console.log('读取成功' + dataStr);
    }

})