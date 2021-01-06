const http = require('http');
const fs = require('fs')
const fileName = './demoFile.html'
const dt = require('./dateTimeModule');

console.log('First App is running')
http.createServer((req, res)=>{
  fs.readFile(fileName, (err, data)=>{
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    //res.write("The date and time are currently: " + dt.myDateTime().toString());
    res.write(data);
    res.end('');
    })
}).listen(8080);

