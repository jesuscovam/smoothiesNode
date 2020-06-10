"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _utils = require("../utils");

var router = (0, _express.Router)();
router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var smoothies;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return req.context.models.Smoothies.find();

          case 3:
            smoothies = _context.sent;

            if (!(smoothies !== [])) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.send(smoothies));

          case 8:
            return _context.abrupt("return", res.send('no smoothies created'));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.send('error getting smoothies', _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, fruits, liquid, protein, taste, points, fruitPoints, smoothie;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, fruits = _req$body.fruits, liquid = _req$body.liquid, protein = _req$body.protein, taste = _req$body.taste; // calculate points

            points = 0;

            if (fruits.length > 1) {
              fruitPoints = fruits.reduce(function (a, b) {
                return a + b.value;
              }, 0);
              points = fruitPoints + parseInt(liquid.value);
            } else {
              points = fruits[0].value + parseInt(liquid.value);
            }

            console.log(points);
            smoothie = req.context.models.Smoothies({
              name: (0, _utils.capitalize)(name),
              fruits: fruits,
              liquid: liquid,
              protein: protein,
              points: points,
              taste: parseInt(taste)
            });
            _context2.next = 8;
            return smoothie.save();

          case 8:
            res.send(smoothie);
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error('error creating smoothie', _context2.t0);
            res.status(400).send('error creating smoothie', _context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;