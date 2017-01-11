'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flatTypes = [String, Number, Boolean];

var isDefined = function isDefined(val) {
  return val !== null && val !== undefined;
};

var isFlat = function isFlat(val) {
  return !isDefined(val) || flatTypes.indexOf(val.constructor) !== -1;
};

var truncate = function truncate(obj, maxDepth, options, curDepth) {
  curDepth = curDepth || 0;
  maxDepth = isDefined(maxDepth) ? maxDepth : 10;
  options = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' ? options : {};
  options.replace = typeof options.replace === 'string' ? options.replace : undefined;

  if (curDepth < maxDepth) {
    var _ret = function () {
      var newDepth = curDepth + 1;

      if (isFlat(obj)) {
        return {
          v: obj
        };
      } else if (Array.isArray(obj)) {
        var _ret2 = function () {
          var newArr = [];
          obj.map(function (value) {
            if (isFlat(value)) {
              newArr.push(value);
            } else {
              newArr.push(truncate(value, maxDepth, options, newDepth));
            }
          });
          return {
            v: {
              v: newArr
            }
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      } else {
        var newObj = {};
        for (var key in obj) {
          if (obj) {
            if (isFlat(obj[key])) {
              newObj[key] = obj[key];
            } else {
              newObj[key] = truncate(obj[key], maxDepth, options, newDepth);
            }
          }
        }
        return {
          v: newObj
        };
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return options.replace;
};

exports.default = truncate;