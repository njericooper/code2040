require('http').createServer(function (req, res){
  res.writeHead(200, {'Content-Type' : 'text/html' });
  res.end('hello');
}).listen(3000);
