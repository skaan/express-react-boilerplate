const User = require('../../../models/userModel');

module.exports = (req, res) => {
  if (req.session.userId) {
    User.findById(
      req.session.userId,
      (err, user) => {
        if (err) throw err;
        res.send(user);
      }
    ).select('-password');
  } else res.status(401).send({ result: 'Unauthorized' });
}