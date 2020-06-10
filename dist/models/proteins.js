"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var Proteins = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

var model = _mongoose["default"].model('proteins', Proteins);

var _default = model;
exports["default"] = _default;