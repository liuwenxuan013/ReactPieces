var http = require("http");
//var express = require('express');
//var app = express();
http.createServer = (function (req, res)
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("hello world\n");
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');