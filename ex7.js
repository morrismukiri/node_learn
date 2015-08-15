var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
    res.on('error', function(err) {
        console.log("error:" + err.message);
    }).on('data', function(data) {
        data.toString().split('\n').forEach(function(line) {
            console.log(line);
        });
    });

});
