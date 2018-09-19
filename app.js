const express = require('express');
const app = express();

const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 5000);

app.get('/', function(req, res) {
    res.send('Hello World (my 4th go at creating an express app...)');
}).listen(PORT);

console.log("Waiting for requests. Go to LocalHost:5000");