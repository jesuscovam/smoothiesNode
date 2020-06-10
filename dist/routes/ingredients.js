"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var fruits, liquids, proteins, ingredients;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.context.models.Fruits.find();

          case 2:
            fruits = _context.sent;
            _context.next = 5;
            return req.context.models.Liquids.find();

          case 5:
            liquids = _context.sent;
            _context.next = 8;
            return req.context.models.Proteins.find();

          case 8:
            proteins = _context.sent;
            ingredients = {
              fruits: fruits,
              liquids: liquids,
              proteins: proteins
            };
            return _context.abrupt("return", res.send(ingredients));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;