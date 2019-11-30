const debug = require('debug');

const corsLoader = require('./cors');
const databaseLoader = require('./database');
const expressLoader = require('./express');
const loggingLoader = require('./logging');
const requestLogger = require('./requestLogger');
const routeLoader = require('./router');
const sessionLoader = require('./session');

const log = debug(':app');
const error = debug(':error');

module.exports = {
  init: async ({ app }) => {

    log('Database starting connection...')
    await databaseLoader()
      .then(() => {
        log('Database connection successfull')
      })
      .catch(err => {
        error('Database connection failed', JSON.stringify(err))
        process.exit()
      })

    await loggingLoader({ app })
    log('Logging setup successful')

    await requestLogger({ app })
    log('Request logger setup successful')

    await sessionLoader({ app })
    log('Session setup successful')

    await corsLoader({ app })
    log('CORS setup successful')

    await expressLoader({ app })
    log('Express setup successful')

    routeLoader({ app })
    log('Api router setup successful')
  }
}
