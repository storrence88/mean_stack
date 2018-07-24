let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
  console.log('Client request URL: ', req.url);
  if(req.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/cars/new') {
    fs.readFile('./views/form.html', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/stylesheets/styles.css') {
    fs.readFile('./stylesheets/styles.css', 'utf8', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/car_1.jpg') {
    fs.readFile('./images/car_1.jpg', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/car_2.jpg') {
    fs.readFile('./images/car_2.jpg', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/car_3.jpg') {
    fs.readFile('./images/car_3.jpg', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/cat_1.jpg') {
    fs.readFile('./images/cat_1.jpg', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/cat_2.png') {
    fs.readFile('./images/cat_2.png', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/cat_3.jpg') {
    fs.readFile('./images/cat_3.jpg', (errors, contents) => {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else {
    res.writeHead(404);
    res.end('File not found!')
  }
});

server.listen(6789);
console.log("Running in localhost at port 6789");