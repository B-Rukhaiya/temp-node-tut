const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','sub','test.txt');
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt'); //merging root path with following arguments
console.log(absolute);