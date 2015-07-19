var ex6module=require('./ex6module');
var path=process.argv[2];
var ext=process.argv[3];

ex6module(path,ext,function(err,data) {
	if(err) throw err;
	data.forEach(function  (elem) {
		console.log(elem);
	});	
});