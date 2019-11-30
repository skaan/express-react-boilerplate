const { validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json({ error: errors.array(), result: null })
  }
  else next()
}
