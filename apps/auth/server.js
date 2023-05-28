const express = require("express");

export default function createServer() {
  const server = express();
  server.use(express.urlencoded()).use(json()).use(cors());

  return server;
}
