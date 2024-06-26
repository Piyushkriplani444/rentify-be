"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const uuid = require("node-uuid");
const debug = require("debug")("netify:server");
const httpContext = require("express-http-context");

const app = express();

const UserRouter = require("./server/userManagement&Auth/routes/index");

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(cors());
app.use(bodyParser.json());

app.use(httpContext.middleware);

app.use(function (req, res, next) {
  httpContext.set("reqId", uuid.v1());
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("X-Frame-Options", "deny");
  res.header("X-Content-Type-Options", "nosniff");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE , HEAD , OPTIONS"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization, X-Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use("/api", UserRouter);

const port = process.env.REACT_APP_SERVER_PORT || 3000;

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);

    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  console.info(
    `The server has started on port: ${process.env.REACT_APP_SERVER_PORT}`
  );
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
