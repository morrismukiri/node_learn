module.exports = fileOps;

function fileOps(dirPath, fileExtension, callback) {
    var fs = require('fs');
    var path = require('path');
    fs.readdir(dirPath, function(err, files) {
        var filteredFiles = [];
        if (err)
            return callback(err);

        for (var i = 0; i <= files.length - 1; i++) {
            if (path.extname(files[i]) === "." + fileExtension)
                filteredFiles.push(files[i]);
        }

        callback(err, filteredFiles);
    }
    );
}