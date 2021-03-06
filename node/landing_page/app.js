const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
  console.log('Client request URL: ', request.url);
  if(request.url === '/') {
    fs.readFile('views/index.html', 'utf8', (errors, contents) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/ninjas') {
    fs.readFile('views/ninjas.html', 'utf8', (errors, contents) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/dojos/new') {
    fs.readFile('views/dojos.html', 'utf8', (errors, contents) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else {
    response.writeHead(404);
    response.end("The URL requested is not available.");
  }
});
server.listen(6789);
console.log("Running in localhost at port 6789");