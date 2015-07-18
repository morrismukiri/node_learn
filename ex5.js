var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var fileExtension = process.argv[3];
// console.log('dirPath:'+dirPath+' fileExtension:'+fileExtension);
fs.readdir(dirPath, function(err, files) {
    if (err)
        throw err;
    files.sort();
    for (var i =0 ; i <= files.length - 1; i++) {
        if (path.extname(files[i]) === "."+fileExtension)
            console.log(files[i]);
    }
});