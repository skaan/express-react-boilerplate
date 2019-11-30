const apiRouter = require('../controllers/api/router');
const staticController = require('../controllers/static.get');

module.exports = async ({ app }) => {

  app.use('/api', apiRouter)
  app.get('/*', staticController)

  return app
}
