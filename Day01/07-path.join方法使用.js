const fs = require('fs');
const path = require('path')

// 注意: ../会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../', '/d')
console.log(pathStr); // a/b/d

const pathStr2 = path.join(__dirname, "/files/1.txt")
console.log(pathStr2);

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf8', function (err, data) {
    console.log(data);
})