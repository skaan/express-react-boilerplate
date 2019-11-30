const bcrypt = require('bcryptjs');

const User = require('../../../models/userModel');

const saltRounds = 10;
const hour = 3600000

module.exports = (req, res) => {
  console.log('Endpoint reached');
  User.findOne(
    { mail: req.body.mail },
    (err, user) => {
      if (err) throw err;
      if (user !== null) {
        bcrypt.compare(req.body.password, user.password, (err, success) => {
          if (err) throw err;
          if (success) {
            req.session.userId = user._id.toString();
            req.session.maxAge = hour;
            req.session.save();

            delete user.password;

            res.send(user);
          }
          else res.status(401).send({ result: 'Unauthorized' });
        });
      }
      else res.status(401).send({ result: 'Unauthorized' });
    }
  )
}