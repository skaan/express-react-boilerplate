const express = require('express');
const http = require('http');
const https = require('https');
const debug = require('debug');
const config = require('./server/config');
const loaders = require('./server/loaders');

const log = debug(':app')

const startServer = async () => {
  const app = express();

  await loaders.init({ app })

  const server = config.useHttps
    ? https.createServer(config.httpsCredentials, app)
    : http.createServer(app);

  server.listen(config.port, () => {
    log(`listening on port ${config.port}`);
  });
}

startServer();
