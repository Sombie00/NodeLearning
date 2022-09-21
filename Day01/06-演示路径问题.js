const fs = require('fs')

// 解决相对路径问题,就要用绝对路径 ❎也不是很方便
// 可以用node提供的__dirname
// fs.readFile('/Users/minss/代码/学习代码/Node/Day01/files/1.txt', 'utf-8', function (err, data) {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(data);
// })

fs.readFile(__dirname + '/files/1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log(err.message);
    }
    console.log(data);
    console.log(__dirname);
})