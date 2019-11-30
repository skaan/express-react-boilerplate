const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config()

const useHttps = process.env.USE_HTTPS === 'TRUE'

module.exports = {
  port: process.env.PORT || 3000,
  useHttps,
  mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/test',
  sessionSecret: process.env.SESSION_SECRET || 'secret',
  debug: process.env.DEBUG === 'TRUE'
}
