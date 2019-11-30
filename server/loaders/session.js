const session = require('express-session');
const mongoose = require('mongoose');
const ConnectMongo = require('connect-mongo');

const MongoStore = ConnectMongo(session);

module.exports = async ({ app }) => {
  app.use(session({
    resave: false,
    secret: 'secret',
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  }))

  return app
}
