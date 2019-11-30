const bcrypt = require('bcryptjs');

const User = require('../../../models/userModel');

const saltRounds = 10;
const hour = 3600000

module.exports = (req, res) => {

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    User.find(
      { mail: req.body.mail },
      (err, users) => {
        if (err) throw err;
        if (users.length === 0) {
          const newUser = User({
            mail: req.body.mail,
            password: hash,
          });

          newUser.save((err, user) => {
            if (err) throw err;
            req.session.user = user._id;
            req.session.maxAge = hour;
            req.session.save();
            res.send(user);
          });
        } else {
          res.status(401).send({ result: 'Unauthorized' });
        }
      });
  });
};