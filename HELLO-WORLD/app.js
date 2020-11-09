// Get the filesystem and HTTPS module of Node.
// Filesystem used to read TLS certificate file.
// HTTPS module used to enable TLS encryption on REST API
var fs = require('fs');
var https = require('https');

// Added TLS certificate to run application on HTTPS rather than HTTP
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

// Used Express the REST API. Express is a Node.js framework to develop web applications.
var express = require('express');

// Node.js packages to enable logging recommended for production level app
const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

var app = express();

app.use(expressLogger);

// Set the hostname and port of the solution.
const hostname = 'localhost';
const port = 8080;

// Default route
app.get('/', function (req, resp) {
  resp.send({message: "Welcome to my NodeJS Rest API"});
});

// Hello Endpoint = https://localhost:8080/hello
app.get('/hello', function (req, resp) {
  resp.send({message: "hello world"});
});

app.set('port', port);

// Create HTTPS server to server the REST Endpoints
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, "0.0.0.0", () => {
  logger.info(`Server running at https://${hostname}:${port}/`);
  // console.log(`Server running at https://${hostname}:${port}/`);
});