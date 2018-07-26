const fs = require('fs');

module.exports = (req, res) => {
  console.log('Request URL: ', req.url);
  if(req.url === '/') {
    fs.readFile('views/index.html', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/dojo') {
    fs.readFile('views/dojo.html', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/stylesheets/styles.css') {
    fs.readFile('stylesheets/styles.css', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(contents);
      res.end();
    });
  }
  else {
    res.writeHead(404);
    res.end('File not found!');
  }
}