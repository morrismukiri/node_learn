var fs= require('fs');
var fileName=process.argv[2];
// console.log(fileName);
var fileContentBuffer=fs.readFileSync(fileName);
var fileContent=fileContentBuffer.toString('ascii');
var fileContentArray=fileContent.split('\n');
//console.log(fileContent);
var linecount=fileContentArray.length-1;
console.log(linecount);

 
/* could have just done:
var fs= require('fs');
console.log(fs.readFileSync(process.argv[2],'ascii').split('\n').length-1)
but where's the learning in that?
*/

