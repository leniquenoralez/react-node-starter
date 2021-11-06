"use strict";

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/api', (req, res) => {
  res.json('Response From Server!!');
});
app.listen(3000, () => {
  _db.default.connect();

  console.log('Server is listening on port 3000.');
});