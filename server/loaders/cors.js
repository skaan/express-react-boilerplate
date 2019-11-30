module.exports = async ({ app }) => {
  app.use((req, res, next) => {
    const origin = `${req.protocol}://${req.hostname}`;
    const allowed = ['http://localhost'];

    if (allowed.includes(origin.toLowerCase())) {
      res.header('Access-Control-Allow-Origin', origin);
    } else {
      res.header('Access-Control-Allow-Origin', allowed[0]);
    }
    next();
  });

  app.options((req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
  });
  return app
}
