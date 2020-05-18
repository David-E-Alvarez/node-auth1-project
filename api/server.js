const express = require("express");

const server = express();

server.use(express.json());

usersRouter = require('../users/users-router.js');
server.use('/api/users', usersRouter);

module.exports = server;