"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var FruitsSchema = Schema({
  name: String,
  value: Number
});
var LiquidSchema = Schema({
  name: String,
  value: Number
});
var ProteinSchema = Schema({
  name: String
});
var SmoothieSchema = Schema({
  name: {
    type: String,
    required: true
  },
  fruits: [FruitsSchema],
  liquid: LiquidSchema,
  protein: ProteinSchema,
  points: {
    type: Number,
    required: true
  },
  taste: {
    type: Number,
    required: true
  }
});

var model = _mongoose["default"].model('Smoothie', SmoothieSchema);

var _default = model;
exports["default"] = _default;