const express = require("express");
const server = (module.exports.server = exports.server = express());

server.use(express.static(__dirname + "/"));
server.listen(9001);

console.log("Server runed on port 8081 (http://localhost:8081/)");
