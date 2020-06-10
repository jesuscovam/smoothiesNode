"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;

function capitalize(name) {
  var capitalized = name.split(' ').map(function (word) {
    var first = word.charAt(0).toUpperCase();
    var full = "".concat(first).concat(word.slice(1));
    return full;
  }).join(' ');
  return capitalized;
}