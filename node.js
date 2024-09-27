var http = require('http');
var m = require('./module.js');
var url = require('url');
var fs = require('fs');
var js=require('fs')
var vs = js.createReadStream('./text.txt');

vs.on('open', function () {
  console.log("file is open");
})

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(200, { 'content-type': 'text/html' })
      return res.end("not found");
    }
    else {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write(data);
    }
  });
 
  // es.write("time is "+m.myDateTime());
  //   var q=url.parse(req.url,true).query;
  //  var y=q.year,z=q.month;
  //   var text=y+" "+z;
  //   res.write(text);
  //   res.end();
  console.log(q.host);


}).listen(8080);

