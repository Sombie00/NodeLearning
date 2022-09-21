// 1.1 导入fs模块
const fs = require('fs')

// 1.2 导入path模块
const path = require('path')

// 1.3 定义正则表达式,分别匹配<style></style>和<script></script>
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


// 2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '/素材/index.html'), 'utf8', function (err, dataStr) {
    // 2.2 判断读取html失败
    if (err) {
        return console.log('读取失败\n', err.message);
    }
    // 2.3 读取完成后,调用三个对应的方法拆解除html css js
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1 定义处理CSS样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1[0]);
    // 3.3 将提取出来的样式字符串,进行字符串的replace操作
    const newCSS = r1[0].replace('<style>', '').replace("</style>", "")
    // 3.4 将处理好的字符串newCSS写入到index.css文件中
    fs.writeFile(path.join(__dirname, "/素材/index.css"), newCSS, function (err) {
        if (err) {
            return console.log('写入CSS样式失败');
        }
        console.log('写入CSS成功惹!');
    })
}

// 4.1 定义处理JS的方法
function resolveJS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    // console.log(r1[0]);
    // 3.3 将提取出来的js字符串,进行字符串的replace操作
    const newJS = r2[0].replace('<script>', '').replace("</script>", "")
    // 3.4 将处理好的字符串newJS写入到index.js文件中
    fs.writeFile(path.join(__dirname, "/素材/index.js"), newJS, function (err) {
        if (err) {
            return console.log('写入JS失败');
        }
        console.log('写入JS成功惹!');
    })
}

// 5.1 定义处理HTML的方法
function resolveHTML(htmlStr) {
    // 将字符串调用replace方法,把内嵌的style标签和script标签,替换成link和script标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">')
        .replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './素材/index1.html'), newHTML, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('写入成功');
    })
}