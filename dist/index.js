"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireWildcard(require("./models/index"));

var _routes = _interopRequireDefault(require("./routes"));

require('dotenv').config();

// Config //
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // Middlewares //

app.use(function (req, res, next) {
  req.context = {
    models: _index["default"]
  };
  next();
}); // Routes //

app.use('/ingredients', _routes["default"].ingredients);
app.use('/smoothies', _routes["default"].smoothies);
var port = process.env.PORT || 5000;
var eraseDatabaseOnSync = true;
(0, _index.connectDB)().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('MongoDB connected');

          if (!eraseDatabaseOnSync) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return _index["default"].Smoothies.deleteMany({});

        case 4:
          app.listen(port, function (error) {
            error ? console.error('Error starting server', error) : console.log("app running @ http://localhost:".concat(port));
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (error) {
  return console.error('Error connecting to mongoDB', error);
});