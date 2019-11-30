const mongoose = require('mongoose');
const config = require('../config');

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = async () => {
  const connection = await mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  return connection
}
