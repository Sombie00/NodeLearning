// 1.导入 fs 模块，来操作文件
const fs = require('fs')

// 2.调用fs.readFile()方法读取文件
//   参数1：文件路径   参数2：编码格式(默认UTF8)
fs.readFile('./files/1.txt', 'utf-8', function (err, dataStr) {
    // 2.1打印成功的结果
    console.log(dataStr);
    // 2.2失败的结果
    console.log(err);
})