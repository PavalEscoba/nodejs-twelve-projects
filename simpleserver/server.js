// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 1337;

// http.createServer((req, res) =>{
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// });

// OR YOU MAY WRITE THIS WAY

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! I\'m server');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});