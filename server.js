const express = require('express');
const server = module.exports.server = exports.server = express();

server.use(express.static(__dirname + '/'));
server.listen(8081);

console.log('Server on port 8081 runed');