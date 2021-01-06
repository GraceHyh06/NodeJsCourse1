const http = require('http');
const fs = require('fs')
const dt = require('./dateTimeModule');
const url = require('url');
const { runInNewContext } = require('vm');

console.log('First App is running')
http.createServer((req, res)=>{
  var q = url.parse(req.url);

  var fileName = './demoFile.html'

  if(q.pathname !== '/')
    fileName = '.'+q.pathname;

    fs.readFile(fileName, (err, data)=>{
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    if(err)
      res.write(err.message+' Error happened at '+ dt.myDateTime().toString())
    else
      res.write(data);
    res.end('');
    })
}).listen(8080);

