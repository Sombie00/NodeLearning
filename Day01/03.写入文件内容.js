const fs = require('fs')

fs.writeFile('./files/2.txt', 'hello!', function (err) {
    if (err == null) {
        return
    }
    else {
        console.log(err);
    }
})