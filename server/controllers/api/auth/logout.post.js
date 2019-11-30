module.exports = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.sendStatus(200);
  });
};
