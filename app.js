//load hhtp module
const http = require('http');
const  fs = require('fs'); 
const  myModule = require('./videos');

//create a HTTP server
const server = http.createServer((request, response) => {
    //check if the route is /
    if (request.url === '/') {
        response.write("Hello from node.js on Rachael's computer");
        response.end();
    }

    if (request.url === '/site') {
        fs.readFile('index2.html', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            return response.end();
        });
    }
if (request.url === '/image.jpg') {
        fs.readFile('image.jpg', function(err, data) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(data);
            return response.end();
        });
    }
if (request.url === '/ajax.js') {
        fs.readFile('ajax.js', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(data);
            return response.end();
        });
    }
});
//tell the server to listen on port 8080
server.listen(8080);
console.log("Server started and listening on port 8080");
