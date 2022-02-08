(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("odd-money", [], factory);
	else if(typeof exports === 'object')
		exports["odd-money"] = factory();
	else
		root["odd-money"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(3);

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = __webpack_require__(4);

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = __webpack_require__(5);

var _lodash8 = _interopRequireDefault(_lodash7);

var _lodash9 = __webpack_require__(6);

var _lodash10 = _interopRequireDefault(_lodash9);

var _lodash11 = __webpack_require__(7);

var _lodash12 = _interopRequireDefault(_lodash11);

var _currency_iso = __webpack_require__(8);

var _currency_iso2 = _interopRequireDefault(_currency_iso);

var _numberPrecision = __webpack_require__(9);

var _numberPrecision2 = _interopRequireDefault(_numberPrecision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isInteger = function isInteger(n) {
  return Number(n) === n && n % 1 === 0;
};

var testSameCurrency = function testSameCurrency(left, right) {
  if (left.currency !== right.currency) throw new Error('not same currency');
};

var testInteger = function testInteger(n) {
  if (!isInteger(n)) throw new TypeError('not an integer');
};

var testMoneyInstance = function testMoneyInstance(other) {
  if (!(other instanceof Money)) throw new TypeError('not Money instance');
};

var testOperand = function testOperand(operand) {
  if ((0, _lodash6.default)(parseFloat(operand)) && !isFinite(operand)) throw new TypeError('operand not a number');
};

var fetchCurrencyData = function fetchCurrencyData(customCurrencies, targetCurrency) {
  if (customCurrencies) return customCurrencies[targetCurrency] || _currency_iso2.default[targetCurrency];

  return _currency_iso2.default[targetCurrency];
};

var Money = function () {
  function Money(cents, currency) {
    var customCurrencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, Money);

    if ((0, _lodash10.default)(currency)) currency = fetchCurrencyData(customCurrencies, currency);
    if (!(0, _lodash8.default)(currency)) throw new TypeError('Invalid currency');

    this.cents = _numberPrecision2.default.strip(cents);

    testInteger(this.cents);

    this.currency = currency.iso_code;
    this.customCurrencies = customCurrencies;

    Object.freeze(this);
  }

  _createClass(Money, [{
    key: 'format',
    value: function format() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { withSymbol: null, zeroSymbol: null };

      if (this.isZero() && options['zeroSymbol']) return options['zeroSymbol'];
      if (!options['withSymbol']) return this.amount.toLocaleString();

      return this.currencyData.symbol_first ? '' + this.currencyData.symbol + this.amount.toLocaleString() : '' + this.amount.toLocaleString() + this.currencyData.symbol;
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      testMoneyInstance(other);

      return this.cents === other.cents && this.currency === other.currency;
    }
  }, {
    key: 'add',
    value: function add(other) {
      testMoneyInstance(other);
      testSameCurrency(this, other);

      return new Money(this.cents + other.cents, this.currency, this.customCurrencies);
    }
  }, {
    key: 'substract',
    value: function substract(other) {
      testMoneyInstance(other);
      testSameCurrency(this, other);

      return new Money(this.cents - other.cents, this.currency, this.customCurrencies);
    }
  }, {
    key: 'multiply',
    value: function multiply(multiplier) {
      var rounder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lodash12.default;

      if (!(0, _lodash4.default)(rounder)) throw new TypeError('rounder must be a function');
      testOperand(multiplier);

      var result = rounder(this.amount * multiplier, this.roundPrecision) * this.currencyData.subunit_to_unit;

      return new Money(result, this.currency, this.customCurrencies);
    }
  }, {
    key: 'divide',
    value: function divide(divisor) {
      var rounder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lodash12.default;

      if (!(0, _lodash4.default)(rounder)) throw new TypeError('rounder must be a function');
      testOperand(divisor);

      var result = rounder(this.amount / divisor, this.roundPrecision) * this.currencyData.subunit_to_unit;

      return new Money(result, this.currency, this.customCurrencies);
    }
  }, {
    key: 'allocate',
    value: function allocate(ratios) {
      var _this = this;

      var remainCents = this.cents;
      var results = [];
      var total = ratios.reduce(function (total, ratio) {
        return total + ratio;
      });

      ratios.forEach(function (ratio) {
        var shareUnit = Math.floor(_this.cents * (ratio / total));

        results.push(shareUnit);
        remainCents -= shareUnit;
      });

      results.forEach(function (result, index) {
        if (remainCents > 0) {
          results[index] += 1;
          remainCents -= 1;
        }
      });

      return results.map(function (result) {
        return new Money(result, _this.currency);
      });
    }
  }, {
    key: 'isZero',
    value: function isZero() {
      return this.cents === 0;
    }
  }, {
    key: 'isPositive',
    value: function isPositive() {
      return this.cents > 0;
    }
  }, {
    key: 'isNegative',
    value: function isNegative() {
      return this.cents < 0;
    }
  }, {
    key: 'amount',
    get: function get() {
      return this.cents / this.currencyData.subunit_to_unit;
    }
  }, {
    key: 'currencyData',
    get: function get() {
      return fetchCurrencyData(this.customCurrencies, this.currency);
    }
  }, {
    key: 'roundPrecision',
    get: function get() {
      var precisionString = String(this.currencyData.smallest_denomination / this.currencyData.subunit_to_unit).split('.')[1];

      return precisionString ? precisionString.length : 0;
    }
  }], [{
    key: 'fromAmount',
    value: function fromAmount(amount, currency) {
      var customCurrencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      if ((0, _lodash10.default)(currency)) currency = fetchCurrencyData(customCurrencies, currency);
      if (!(0, _lodash8.default)(currency)) throw new TypeError('Invalid currency');

      testInteger(amount);

      return new this(amount * currency.subunit_to_unit, currency.iso_code, customCurrencies);
    }
  }]);

  return Money;
}();

exports.default = (0, _lodash2.default)(Money, _currency_iso2.default);
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = assignIn;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
 * which returns `true` for `undefined` and other non-numeric values.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

module.exports = isNaN;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = nativeMin(toInteger(precision), 292);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

module.exports = round;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  AED: {
    iso_code: 'AED',
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ',
    subunit: 'Fils',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 25
  },
  AFN: {
    iso_code: 'AFN',
    name: 'Afghan Afghani',
    symbol: '؋',
    subunit: 'Pul',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  ALL: {
    iso_code: 'ALL',
    name: 'Albanian Lek',
    symbol: 'L',
    disambiguate_symbol: 'Lek',
    subunit: 'Qintar',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  AMD: {
    iso_code: 'AMD',
    name: 'Armenian Dram',
    symbol: 'դր.',
    subunit: 'Luma',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10
  },
  ANG: {
    iso_code: 'ANG',
    name: 'Netherlands Antillean Gulden',
    symbol: 'ƒ',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  AOA: {
    iso_code: 'AOA',
    name: 'Angolan Kwanza',
    symbol: 'Kz',
    subunit: 'Cêntimo',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10
  },
  ARS: {
    iso_code: 'ARS',
    name: 'Argentine Peso',
    symbol: '$',
    disambiguate_symbol: '$m/n',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  AUD: {
    iso_code: 'AUD',
    name: 'Australian Dollar',
    symbol: '$',
    disambiguate_symbol: 'A$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  AWG: {
    iso_code: 'AWG',
    name: 'Aruban Florin',
    symbol: 'ƒ',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  AZN: {
    iso_code: 'AZN',
    name: 'Azerbaijani Manat',
    symbol: '₼',
    subunit: 'Qəpik',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  BAM: {
    iso_code: 'BAM',
    name: 'Bosnia and Herzegovina Convertible Mark',
    symbol: 'КМ',
    subunit: 'Fening',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  BBD: {
    iso_code: 'BBD',
    name: 'Barbadian Dollar',
    symbol: '$',
    disambiguate_symbol: 'Bds$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  BDT: {
    iso_code: 'BDT',
    name: 'Bangladeshi Taka',
    symbol: '৳',
    subunit: 'Paisa',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  BGN: {
    iso_code: 'BGN',
    name: 'Bulgarian Lev',
    symbol: 'лв.',
    subunit: 'Stotinka',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  BHD: {
    iso_code: 'BHD',
    name: 'Bahraini Dinar',
    symbol: 'ب.د',
    subunit: 'Fils',
    subunit_to_unit: 1000,
    symbol_first: true,
    smallest_denomination: 5
  },
  BIF: {
    iso_code: 'BIF',
    name: 'Burundian Franc',
    symbol: 'Fr',
    disambiguate_symbol: 'FBu',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  BMD: {
    iso_code: 'BMD',
    name: 'Bermudian Dollar',
    symbol: '$',
    disambiguate_symbol: 'BD$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  BND: {
    iso_code: 'BND',
    name: 'Brunei Dollar',
    symbol: '$',
    disambiguate_symbol: 'BND',
    subunit: 'Sen',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  BOB: {
    iso_code: 'BOB',
    name: 'Bolivian Boliviano',
    symbol: 'Bs.',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 10
  },
  BRL: {
    iso_code: 'BRL',
    name: 'Brazilian Real',
    symbol: 'R$',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 5
  },
  BSD: {
    iso_code: 'BSD',
    name: 'Bahamian Dollar',
    symbol: '$',
    disambiguate_symbol: 'BSD',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  BTN: {
    iso_code: 'BTN',
    name: 'Bhutanese Ngultrum',
    symbol: 'Nu.',
    subunit: 'Chertrum',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  BWP: {
    iso_code: 'BWP',
    name: 'Botswana Pula',
    symbol: 'P',
    subunit: 'Thebe',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  BYN: {
    iso_code: 'BYN',
    name: 'Belarusian Ruble',
    symbol: 'Br',
    disambiguate_symbol: 'BYN',
    subunit: 'Kapeyka',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: ' ',
    smallest_denomination: 1
  },
  BYR: {
    iso_code: 'BYR',
    name: 'Belarusian Ruble',
    symbol: 'Br',
    disambiguate_symbol: 'BYR',
    subunit: null,
    subunit_to_unit: 1,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: ' ',
    smallest_denomination: 100
  },
  BZD: {
    iso_code: 'BZD',
    name: 'Belize Dollar',
    symbol: '$',
    disambiguate_symbol: 'BZ$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  CAD: {
    iso_code: 'CAD',
    name: 'Canadian Dollar',
    symbol: '$',
    disambiguate_symbol: 'C$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  CDF: {
    iso_code: 'CDF',
    name: 'Congolese Franc',
    symbol: 'Fr',
    disambiguate_symbol: 'FC',
    subunit: 'Centime',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  CHF: {
    iso_code: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF',
    subunit: 'Rappen',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  CLF: {
    iso_code: 'CLF',
    name: 'Unidad de Fomento',
    symbol: 'UF',
    subunit: 'Peso',
    subunit_to_unit: 10000,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.'
  },
  CLP: {
    iso_code: 'CLP',
    name: 'Chilean Peso',
    symbol: '$',
    disambiguate_symbol: 'CLP',
    subunit: 'Peso',
    subunit_to_unit: 1,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  CNY: {
    iso_code: 'CNY',
    name: 'Chinese Renminbi Yuan',
    symbol: '¥',
    subunit: 'Fen',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  COP: {
    iso_code: 'COP',
    name: 'Colombian Peso',
    symbol: '$',
    disambiguate_symbol: 'COL$',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 20
  },
  CRC: {
    iso_code: 'CRC',
    name: 'Costa Rican Colón',
    symbol: '₡',
    subunit: 'Céntimo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 500
  },
  CUC: {
    iso_code: 'CUC',
    name: 'Cuban Convertible Peso',
    symbol: '$',
    disambiguate_symbol: 'CUC$',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  CUP: {
    iso_code: 'CUP',
    name: 'Cuban Peso',
    symbol: '$',
    disambiguate_symbol: '$MN',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  CVE: {
    iso_code: 'CVE',
    name: 'Cape Verdean Escudo',
    symbol: '$',
    disambiguate_symbol: 'Esc',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  CZK: {
    iso_code: 'CZK',
    name: 'Czech Koruna',
    symbol: 'Kč',
    subunit: 'Haléř',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: ' ',
    smallest_denomination: 100
  },
  DJF: {
    iso_code: 'DJF',
    name: 'Djiboutian Franc',
    symbol: 'Fdj',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  DKK: {
    iso_code: 'DKK',
    name: 'Danish Krone',
    symbol: 'kr.',
    disambiguate_symbol: 'DKK',
    subunit: 'Øre',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 50
  },
  DOP: {
    iso_code: 'DOP',
    name: 'Dominican Peso',
    symbol: '$',
    disambiguate_symbol: 'RD$',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 100
  },
  DZD: {
    iso_code: 'DZD',
    name: 'Algerian Dinar',
    symbol: 'د.ج',
    subunit: 'Centime',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  EGP: {
    iso_code: 'EGP',
    name: 'Egyptian Pound',
    symbol: 'ج.م',
    subunit: 'Piastre',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 25
  },
  ERN: {
    iso_code: 'ERN',
    name: 'Eritrean Nakfa',
    symbol: 'Nfk',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  ETB: {
    iso_code: 'ETB',
    name: 'Ethiopian Birr',
    symbol: 'Br',
    disambiguate_symbol: 'ETB',
    subunit: 'Santim',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  EUR: {
    iso_code: 'EUR',
    name: 'Euro',
    symbol: '€',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  FJD: {
    iso_code: 'FJD',
    name: 'Fijian Dollar',
    symbol: '$',
    disambiguate_symbol: 'FJ$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  FKP: {
    iso_code: 'FKP',
    name: 'Falkland Pound',
    symbol: '£',
    disambiguate_symbol: 'FK£',
    subunit: 'Penny',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  GBP: {
    iso_code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    subunit: 'Penny',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  GEL: {
    iso_code: 'GEL',
    name: 'Georgian Lari',
    symbol: 'ლ',
    subunit: 'Tetri',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  GHS: {
    iso_code: 'GHS',
    name: 'Ghanaian Cedi',
    symbol: '₵',
    subunit: 'Pesewa',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  GIP: {
    iso_code: 'GIP',
    name: 'Gibraltar Pound',
    symbol: '£',
    disambiguate_symbol: 'GIP',
    subunit: 'Penny',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  GMD: {
    iso_code: 'GMD',
    name: 'Gambian Dalasi',
    symbol: 'D',
    subunit: 'Butut',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  GNF: {
    iso_code: 'GNF',
    name: 'Guinean Franc',
    symbol: 'Fr',
    disambiguate_symbol: 'FG',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  GTQ: {
    iso_code: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbol: 'Q',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  GYD: {
    iso_code: 'GYD',
    name: 'Guyanese Dollar',
    symbol: '$',
    disambiguate_symbol: 'G$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  HKD: {
    iso_code: 'HKD',
    name: 'Hong Kong Dollar',
    symbol: '$',
    disambiguate_symbol: 'HK$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 10
  },
  HNL: {
    iso_code: 'HNL',
    name: 'Honduran Lempira',
    symbol: 'L',
    disambiguate_symbol: 'HNL',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  HRK: {
    iso_code: 'HRK',
    name: 'Croatian Kuna',
    symbol: 'kn',
    subunit: 'Lipa',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  HTG: {
    iso_code: 'HTG',
    name: 'Haitian Gourde',
    symbol: 'G',
    subunit: 'Centime',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  HUF: {
    iso_code: 'HUF',
    name: 'Hungarian Forint',
    symbol: 'Ft',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: ' ',
    smallest_denomination: 5
  },
  IDR: {
    iso_code: 'IDR',
    name: 'Indonesian Rupiah',
    symbol: 'Rp',
    subunit: 'Sen',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 5000
  },
  ILS: {
    iso_code: 'ILS',
    name: 'Israeli New Sheqel',
    symbol: '₪',
    subunit: 'Agora',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 10
  },
  INR: {
    iso_code: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    subunit: 'Paisa',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 50
  },
  IQD: {
    iso_code: 'IQD',
    name: 'Iraqi Dinar',
    symbol: 'ع.د',
    subunit: 'Fils',
    subunit_to_unit: 1000,
    symbol_first: false,
    smallest_denomination: 50000
  },
  IRR: {
    iso_code: 'IRR',
    name: 'Iranian Rial',
    symbol: '﷼',
    subunit: null,
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5000
  },
  ISK: {
    iso_code: 'ISK',
    name: 'Icelandic Króna',
    symbol: 'kr',
    subunit: null,
    subunit_to_unit: 1,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  JMD: {
    iso_code: 'JMD',
    name: 'Jamaican Dollar',
    symbol: '$',
    disambiguate_symbol: 'J$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  JOD: {
    iso_code: 'JOD',
    name: 'Jordanian Dinar',
    symbol: 'د.ا',
    subunit: 'Fils',
    subunit_to_unit: 1000,
    symbol_first: true,
    smallest_denomination: 5
  },
  JPY: {
    iso_code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    subunit: null,
    subunit_to_unit: 1,
    symbol_first: true,
    smallest_denomination: 1
  },
  KES: {
    iso_code: 'KES',
    name: 'Kenyan Shilling',
    symbol: 'KSh',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 50
  },
  KGS: {
    iso_code: 'KGS',
    name: 'Kyrgyzstani Som',
    symbol: 'som',
    subunit: 'Tyiyn',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  KHR: {
    iso_code: 'KHR',
    name: 'Cambodian Riel',
    symbol: '៛',
    subunit: 'Sen',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5000
  },
  KMF: {
    iso_code: 'KMF',
    name: 'Comorian Franc',
    symbol: 'Fr',
    disambiguate_symbol: 'CF',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  KPW: {
    iso_code: 'KPW',
    name: 'North Korean Won',
    symbol: '₩',
    subunit: 'Chŏn',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  KRW: {
    iso_code: 'KRW',
    name: 'South Korean Won',
    symbol: '₩',
    subunit: null,
    subunit_to_unit: 1,
    symbol_first: true,
    smallest_denomination: 1
  },
  KWD: {
    iso_code: 'KWD',
    name: 'Kuwaiti Dinar',
    symbol: 'د.ك',
    subunit: 'Fils',
    subunit_to_unit: 1000,
    symbol_first: true,
    smallest_denomination: 5
  },
  KYD: {
    iso_code: 'KYD',
    name: 'Cayman Islands Dollar',
    symbol: '$',
    disambiguate_symbol: 'CI$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  KZT: {
    iso_code: 'KZT',
    name: 'Kazakhstani Tenge',
    symbol: '₸',
    subunit: 'Tiyn',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  LAK: {
    iso_code: 'LAK',
    name: 'Lao Kip',
    symbol: '₭',
    subunit: 'Att',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10
  },
  LBP: {
    iso_code: 'LBP',
    name: 'Lebanese Pound',
    symbol: 'ل.ل',
    subunit: 'Piastre',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 25000
  },
  LKR: {
    iso_code: 'LKR',
    name: 'Sri Lankan Rupee',
    symbol: '₨',
    disambiguate_symbol: 'SLRs',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  LRD: {
    iso_code: 'LRD',
    name: 'Liberian Dollar',
    symbol: '$',
    disambiguate_symbol: 'L$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  LSL: {
    iso_code: 'LSL',
    name: 'Lesotho Loti',
    symbol: 'L',
    disambiguate_symbol: 'M',
    subunit: 'Sente',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  LYD: {
    iso_code: 'LYD',
    name: 'Libyan Dinar',
    symbol: 'ل.د',
    subunit: 'Dirham',
    subunit_to_unit: 1000,
    symbol_first: false,
    smallest_denomination: 50
  },
  MAD: {
    iso_code: 'MAD',
    name: 'Moroccan Dirham',
    symbol: 'د.م.',
    subunit: 'Centime',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  MDL: {
    iso_code: 'MDL',
    name: 'Moldovan Leu',
    symbol: 'L',
    subunit: 'Ban',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  MGA: {
    iso_code: 'MGA',
    name: 'Malagasy Ariary',
    symbol: 'Ar',
    subunit: 'Iraimbilanja',
    subunit_to_unit: 5,
    symbol_first: true,
    smallest_denomination: 1
  },
  MKD: {
    iso_code: 'MKD',
    name: 'Macedonian Denar',
    symbol: 'ден',
    subunit: 'Deni',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  MMK: {
    iso_code: 'MMK',
    name: 'Myanmar Kyat',
    symbol: 'K',
    disambiguate_symbol: 'MMK',
    subunit: 'Pya',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 50
  },
  MNT: {
    iso_code: 'MNT',
    name: 'Mongolian Tögrög',
    symbol: '₮',
    subunit: 'Möngö',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 2000
  },
  MOP: {
    iso_code: 'MOP',
    name: 'Macanese Pataca',
    symbol: 'P',
    subunit: 'Avo',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10
  },
  MRU: {
    iso_code: 'MRU',
    name: 'Mauritanian Ouguiya',
    symbol: 'UM',
    subunit: 'Khoums',
    subunit_to_unit: 5,
    symbol_first: false,
    smallest_denomination: 1
  },
  MUR: {
    iso_code: 'MUR',
    name: 'Mauritian Rupee',
    symbol: '₨',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 100
  },
  MVR: {
    iso_code: 'MVR',
    name: 'Maldivian Rufiyaa',
    symbol: 'MVR',
    subunit: 'Laari',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  MWK: {
    iso_code: 'MWK',
    name: 'Malawian Kwacha',
    symbol: 'MK',
    subunit: 'Tambala',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  MXN: {
    iso_code: 'MXN',
    name: 'Mexican Peso',
    symbol: '$',
    disambiguate_symbol: 'MEX$',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  MYR: {
    iso_code: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM',
    subunit: 'Sen',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  MZN: {
    iso_code: 'MZN',
    name: 'Mozambican Metical',
    symbol: 'MTn',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  NAD: {
    iso_code: 'NAD',
    name: 'Namibian Dollar',
    symbol: '$',
    disambiguate_symbol: 'N$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  NGN: {
    iso_code: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦',
    subunit: 'Kobo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 50
  },
  NIO: {
    iso_code: 'NIO',
    name: 'Nicaraguan Córdoba',
    symbol: 'C$',
    disambiguate_symbol: 'NIO$',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  NOK: {
    iso_code: 'NOK',
    name: 'Norwegian Krone',
    symbol: 'kr',
    disambiguate_symbol: 'NOK',
    subunit: 'Øre',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 100
  },
  NPR: {
    iso_code: 'NPR',
    name: 'Nepalese Rupee',
    symbol: '₨',
    disambiguate_symbol: 'NPR',
    subunit: 'Paisa',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  NZD: {
    iso_code: 'NZD',
    name: 'New Zealand Dollar',
    symbol: '$',
    disambiguate_symbol: 'NZ$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 10
  },
  OMR: {
    iso_code: 'OMR',
    name: 'Omani Rial',
    symbol: 'ر.ع.',
    subunit: 'Baisa',
    subunit_to_unit: 1000,
    symbol_first: true,
    smallest_denomination: 5
  },
  PAB: {
    iso_code: 'PAB',
    name: 'Panamanian Balboa',
    symbol: 'B/.',
    subunit: 'Centésimo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  PEN: {
    iso_code: 'PEN',
    name: 'Peruvian Sol',
    symbol: 'S/',
    subunit: 'Céntimo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  PGK: {
    iso_code: 'PGK',
    name: 'Papua New Guinean Kina',
    symbol: 'K',
    disambiguate_symbol: 'PGK',
    subunit: 'Toea',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  PHP: {
    iso_code: 'PHP',
    name: 'Philippine Peso',
    symbol: '₱',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  PKR: {
    iso_code: 'PKR',
    name: 'Pakistani Rupee',
    symbol: '₨',
    disambiguate_symbol: 'PKR',
    subunit: 'Paisa',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 100
  },
  PLN: {
    iso_code: 'PLN',
    name: 'Polish Złoty',
    symbol: 'zł',
    subunit: 'Grosz',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: ' ',
    smallest_denomination: 1
  },
  PYG: {
    iso_code: 'PYG',
    name: 'Paraguayan Guaraní',
    symbol: '₲',
    subunit: 'Céntimo',
    subunit_to_unit: 1,
    symbol_first: true,
    smallest_denomination: 5000
  },
  QAR: {
    iso_code: 'QAR',
    name: 'Qatari Riyal',
    symbol: 'ر.ق',
    subunit: 'Dirham',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  RON: {
    iso_code: 'RON',
    name: 'Romanian Leu',
    symbol: 'Lei',
    subunit: 'Bani',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  RSD: {
    iso_code: 'RSD',
    name: 'Serbian Dinar',
    symbol: 'РСД',
    subunit: 'Para',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 100
  },
  RUB: {
    iso_code: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽',
    subunit: 'Kopeck',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  RWF: {
    iso_code: 'RWF',
    name: 'Rwandan Franc',
    symbol: 'FRw',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  SAR: {
    iso_code: 'SAR',
    name: 'Saudi Riyal',
    symbol: 'ر.س',
    subunit: 'Hallallah',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  },
  SBD: {
    iso_code: 'SBD',
    name: 'Solomon Islands Dollar',
    symbol: '$',
    disambiguate_symbol: 'SI$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10
  },
  SCR: {
    iso_code: 'SCR',
    name: 'Seychellois Rupee',
    symbol: '₨',
    disambiguate_symbol: 'SRe',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  SDG: {
    iso_code: 'SDG',
    name: 'Sudanese Pound',
    symbol: '£',
    disambiguate_symbol: 'SDG',
    subunit: 'Piastre',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  SEK: {
    iso_code: 'SEK',
    name: 'Swedish Krona',
    symbol: 'kr',
    disambiguate_symbol: 'SEK',
    subunit: 'Öre',
    subunit_to_unit: 100,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: ' ',
    smallest_denomination: 100
  },
  SGD: {
    iso_code: 'SGD',
    name: 'Singapore Dollar',
    symbol: '$',
    disambiguate_symbol: 'S$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  SHP: {
    iso_code: 'SHP',
    name: 'Saint Helenian Pound',
    symbol: '£',
    disambiguate_symbol: 'SHP',
    subunit: 'Penny',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  SKK: {
    iso_code: 'SKK',
    name: 'Slovak Koruna',
    symbol: 'Sk',
    subunit: 'Halier',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 50
  },
  SLL: {
    iso_code: 'SLL',
    name: 'Sierra Leonean Leone',
    symbol: 'Le',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1000
  },
  SOS: {
    iso_code: 'SOS',
    name: 'Somali Shilling',
    symbol: 'Sh',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  SRD: {
    iso_code: 'SRD',
    name: 'Surinamese Dollar',
    symbol: '$',
    disambiguate_symbol: 'SRD',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  SSP: {
    iso_code: 'SSP',
    name: 'South Sudanese Pound',
    symbol: '£',
    disambiguate_symbol: 'SSP',
    subunit: 'piaster',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  STD: {
    iso_code: 'STD',
    name: 'São Tomé and Príncipe Dobra',
    symbol: 'Db',
    subunit: 'Cêntimo',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10000
  },
  SVC: {
    iso_code: 'SVC',
    name: 'Salvadoran Colón',
    symbol: '₡',
    subunit: 'Centavo',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  SYP: {
    iso_code: 'SYP',
    name: 'Syrian Pound',
    symbol: '£S',
    subunit: 'Piastre',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  SZL: {
    iso_code: 'SZL',
    name: 'Swazi Lilangeni',
    symbol: 'E',
    disambiguate_symbol: 'SZL',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  THB: {
    iso_code: 'THB',
    name: 'Thai Baht',
    symbol: '฿',
    subunit: 'Satang',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  TJS: {
    iso_code: 'TJS',
    name: 'Tajikistani Somoni',
    symbol: 'ЅМ',
    subunit: 'Diram',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  TMT: {
    iso_code: 'TMT',
    name: 'Turkmenistani Manat',
    symbol: 'T',
    subunit: 'Tenge',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  TND: {
    iso_code: 'TND',
    name: 'Tunisian Dinar',
    symbol: 'د.ت',
    subunit: 'Millime',
    subunit_to_unit: 1000,
    symbol_first: false,
    smallest_denomination: 10
  },
  TOP: {
    iso_code: 'TOP',
    name: 'Tongan Paʻanga',
    symbol: 'T$',
    subunit: 'Seniti',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  TRY: {
    iso_code: 'TRY',
    name: 'Turkish Lira',
    symbol: '₺',
    subunit: 'kuruş',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  TTD: {
    iso_code: 'TTD',
    name: 'Trinidad and Tobago Dollar',
    symbol: '$',
    disambiguate_symbol: 'TT$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  TWD: {
    iso_code: 'TWD',
    name: 'New Taiwan Dollar',
    symbol: '$',
    disambiguate_symbol: 'NT$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 50
  },
  TZS: {
    iso_code: 'TZS',
    name: 'Tanzanian Shilling',
    symbol: 'Sh',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5000
  },
  UAH: {
    iso_code: 'UAH',
    name: 'Ukrainian Hryvnia',
    symbol: '₴',
    subunit: 'Kopiyka',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 1
  },
  UGX: {
    iso_code: 'UGX',
    name: 'Ugandan Shilling',
    symbol: 'USh',
    subunit: 'Cent',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 1000
  },
  USD: {
    iso_code: 'USD',
    name: 'United States Dollar',
    symbol: '$',
    disambiguate_symbol: 'US$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  UYU: {
    iso_code: 'UYU',
    name: 'Uruguayan Peso',
    symbol: '$',
    subunit: 'Centésimo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 100
  },
  UZS: {
    iso_code: 'UZS',
    name: 'Uzbekistan Som',
    symbol: 'so‘m',
    subunit: 'Tiyin',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  VES: {
    iso_code: 'VES',
    name: 'Venezuelan Bolívar Soberano',
    symbol: 'Bs',
    subunit: 'Céntimo',
    subunit_to_unit: 100,
    symbol_first: true,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 1
  },
  VND: {
    iso_code: 'VND',
    name: 'Vietnamese Đồng',
    symbol: '₫',
    subunit: 'Hào',
    subunit_to_unit: 1,
    symbol_first: false,
    decimal_mark: ',',
    thousands_separator: '.',
    smallest_denomination: 100
  },
  VUV: {
    iso_code: 'VUV',
    name: 'Vanuatu Vatu',
    symbol: 'Vt',
    subunit: null,
    subunit_to_unit: 1,
    symbol_first: true,
    smallest_denomination: 1
  },
  WST: {
    iso_code: 'WST',
    name: 'Samoan Tala',
    symbol: 'T',
    disambiguate_symbol: 'WS$',
    subunit: 'Sene',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 10
  },
  XAF: {
    iso_code: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'Fr',
    disambiguate_symbol: 'FCFA',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  XAG: {
    iso_code: 'XAG',
    name: 'Silver (Troy Ounce)',
    symbol: 'oz t',
    disambiguate_symbol: 'XAG',
    subunit: 'oz',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XAU: {
    iso_code: 'XAU',
    name: 'Gold (Troy Ounce)',
    symbol: 'oz t',
    disambiguate_symbol: 'XAU',
    subunit: 'oz',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XBA: {
    iso_code: 'XBA',
    name: 'European Composite Unit',
    symbol: '',
    disambiguate_symbol: 'XBA',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XBB: {
    iso_code: 'XBB',
    name: 'European Monetary Unit',
    symbol: '',
    disambiguate_symbol: 'XBB',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XBC: {
    iso_code: 'XBC',
    name: 'European Unit of Account 9',
    symbol: '',
    disambiguate_symbol: 'XBC',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XBD: {
    iso_code: 'XBD',
    name: 'European Unit of Account 17',
    symbol: '',
    disambiguate_symbol: 'XBD',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XCD: {
    iso_code: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$',
    disambiguate_symbol: 'EX$',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 1
  },
  XDR: {
    iso_code: 'XDR',
    name: 'Special Drawing Rights',
    symbol: 'SDR',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XOF: {
    iso_code: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'Fr',
    disambiguate_symbol: 'CFA',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  XPD: {
    iso_code: 'XPD',
    name: 'Palladium',
    symbol: 'oz t',
    disambiguate_symbol: 'XPD',
    subunit: 'oz',
    subunit_to_unit: 1,
    symbol_first: false
  },
  XPF: {
    iso_code: 'XPF',
    name: 'Cfp Franc',
    symbol: 'Fr',
    subunit: 'Centime',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: 100
  },
  XPT: {
    iso_code: 'XPT',
    name: 'Platinum',
    symbol: 'oz t',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: ''
  },
  XTS: {
    iso_code: 'XTS',
    name: 'Codes specifically reserved for testing purposes',
    symbol: '',
    subunit: '',
    subunit_to_unit: 1,
    symbol_first: false,
    smallest_denomination: ''
  },
  YER: {
    iso_code: 'YER',
    name: 'Yemeni Rial',
    symbol: '﷼',
    subunit: 'Fils',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 100
  },
  ZAR: {
    iso_code: 'ZAR',
    name: 'South African Rand',
    symbol: 'R',
    subunit: 'Cent',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 10
  },
  ZMK: {
    iso_code: 'ZMK',
    name: 'Zambian Kwacha',
    symbol: 'ZK',
    disambiguate_symbol: 'ZMK',
    subunit: 'Ngwee',
    subunit_to_unit: 100,
    symbol_first: false,
    smallest_denomination: 5
  },
  ZMW: {
    iso_code: 'ZMW',
    name: 'Zambian Kwacha',
    symbol: 'K',
    disambiguate_symbol: 'ZMW',
    subunit: 'Ngwee',
    subunit_to_unit: 100,
    symbol_first: true,
    smallest_denomination: 5
  }
};
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return strip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return times; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitLength", function() { return digitLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float2Fixed", function() { return float2Fixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBoundaryChecking", function() { return enableBoundaryChecking; });
/**
 * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。
 * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998
 */
/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function strip(num, precision) {
    if (precision === void 0) { precision = 15; }
    return +parseFloat(Number(num).toPrecision(precision));
}
/**
 * Return digits length of a number
 * @param {*number} num Input number
 */
function digitLength(num) {
    // Get digit length of e
    var eSplit = num.toString().split(/[eE]/);
    var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
}
/**
 * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
 * @param {*number} num 输入数
 */
function float2Fixed(num) {
    if (num.toString().indexOf('e') === -1) {
        return Number(num.toString().replace('.', ''));
    }
    var dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
/**
 * 检测数字是否越界，如果越界给出提示
 * @param {*number} num 输入数
 */
function checkBoundary(num) {
    if (_boundaryCheckingState) {
        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
            console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
        }
    }
}
/**
 * 迭代操作
 */
function iteratorOperation(arr, operation) {
    var num1 = arr[0], num2 = arr[1], others = arr.slice(2);
    var res = operation(num1, num2);
    others.forEach(function (num) {
        res = operation(res, num);
    });
    return res;
}
/**
 * 精确乘法
 */
function times() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length > 2) {
        return iteratorOperation(nums, times);
    }
    var num1 = nums[0], num2 = nums[1];
    var num1Changed = float2Fixed(num1);
    var num2Changed = float2Fixed(num2);
    var baseNum = digitLength(num1) + digitLength(num2);
    var leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
}
/**
 * 精确加法
 */
function plus() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length > 2) {
        return iteratorOperation(nums, plus);
    }
    var num1 = nums[0], num2 = nums[1];
    // 取最大的小数位
    var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    // 把小数都转为整数然后再计算
    return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}
/**
 * 精确减法
 */
function minus() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length > 2) {
        return iteratorOperation(nums, minus);
    }
    var num1 = nums[0], num2 = nums[1];
    var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}
/**
 * 精确除法
 */
function divide() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length > 2) {
        return iteratorOperation(nums, divide);
    }
    var num1 = nums[0], num2 = nums[1];
    var num1Changed = float2Fixed(num1);
    var num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
/**
 * 四舍五入
 */
function round(num, ratio) {
    var base = Math.pow(10, ratio);
    var result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
        result = times(result, -1);
    }
    return result;
}
var _boundaryCheckingState = true;
/**
 * 是否进行边界检查，默认开启
 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
 */
function enableBoundaryChecking(flag) {
    if (flag === void 0) { flag = true; }
    _boundaryCheckingState = flag;
}
var index = {
    strip: strip,
    plus: plus,
    minus: minus,
    times: times,
    divide: divide,
    round: round,
    digitLength: digitLength,
    float2Fixed: float2Fixed,
    enableBoundaryChecking: enableBoundaryChecking,
};


/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })
/******/ ]);
});
//# sourceMappingURL=odd-money.js.map