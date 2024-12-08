const fs=require('fs');
const readableStream=fs.createReadStream('data.txt','utf8');
readableStream.on('data',(chunk )=>{
     console.log('recived:',chunk);
});
readableStream.on('end',()=>{
    console.log("end Stream!");

});