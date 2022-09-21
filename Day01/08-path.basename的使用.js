const path = require('path')

const fpath = 'a/b/c/d/index.html'

// const fullname = path.basename(fpath)
// console.log(fullname);

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)