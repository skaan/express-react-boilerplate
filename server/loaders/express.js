const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = async ({ app }) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(path.resolve(__dirname, '../../client/dist')));
  return app
}
