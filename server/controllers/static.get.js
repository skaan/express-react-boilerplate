const path = require('path');

module.exports = (req, res) => {
  try {
    let file = path.resolve(__dirname, '../../../client/dist/index.html');
    res.sendFile(file);
  }
  catch (err) {
    res.status(500).send(err);
  }
};

