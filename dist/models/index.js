"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDB = void 0;

var _fruits = _interopRequireDefault(require("./fruits"));

var _liquids = _interopRequireDefault(require("./liquids"));

var _proteins = _interopRequireDefault(require("./proteins"));

var _smoothies = _interopRequireDefault(require("./smoothies"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require('dotenv').config();

var connectDB = function connectDB() {
  return _mongoose["default"].connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

exports.connectDB = connectDB;
var models = {
  Fruits: _fruits["default"],
  Liquids: _liquids["default"],
  Proteins: _proteins["default"],
  Smoothies: _smoothies["default"]
};
var _default = models;
exports["default"] = _default;