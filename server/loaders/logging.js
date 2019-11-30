const debug = require('debug');
const config = require('../config');

module.exports = async () => {
  if (config.debug) debug.enable(':*')
}
