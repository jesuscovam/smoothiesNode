"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var liquidsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

var model = _mongoose["default"].model('liquids', liquidsSchema);

var _default = model;
exports["default"] = _default;