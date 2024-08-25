// build your server here and require it from index.js
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'The API is running' });
});

module.exports = server;
