const debug = require('debug');
const log = debug(':request')

module.exports = async ({ app }) => {
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      log(req.method, req.path)
    }
    next()
  })
  return app
}
