const http = require('http');
const static_contents = require('./static')

server = http.createServer((req, res) => {
  static_contents(req, res);
});

server.listen(6789);
console.log('Running in localhost at port 6789');