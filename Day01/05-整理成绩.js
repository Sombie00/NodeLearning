const fs = require('fs')

fs.readFile('./素材/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return err.message
    }
    // console.log('读取成功', dataStr);
    // 先把成绩的数据按照空格分割
    const arrOld = dataStr.split(' ')
    // console.log(arrOld);
    const arrNew = []
    // forEach循环函数
    arrOld.forEach(aitem => {
        arrNew.push(aitem.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')

    // 写入到新文件
    fs.writeFile('./素材/成绩0k.txt', newStr, function (err) {
        if (err) {
            return err.message
        }
        console.log('写入成功');
    })
})