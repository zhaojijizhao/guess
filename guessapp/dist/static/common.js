/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({"1":"index","2":"test"}[chunkId]||chunkId) + "." + {"1":"8e438c262559bcfa13cf","2":"1456548db5094f2df17b"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(29);
	module.exports = __webpack_require__(33);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process, Vue) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');
	
	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
	
	function noop() {}
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);
	
	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var _this = this;
	
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop$1() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.26';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2), __webpack_require__(1)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(4);
	var objectAssign = __webpack_require__(5);
	
	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}
	
		return value;
	}
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);
	
		if (typeof str !== 'string') {
			return ret;
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return ret;
		}
	
		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});
	
		return ret;
	};
	
	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};
	
		opts = objectAssign(defaults, opts);
	
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return encode(key, opts);
			}
	
			if (Array.isArray(val)) {
				var result = [];
	
				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}
	
					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});
	
				return result.join('&');
			}
	
			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';
	
		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */
	
		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/
	
	
		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;
	
			options = options || {};
	
			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;
	
	
			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;
	
	
			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;
	
	
			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;
	
	
			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;
	
	
			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;
	
	
			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;
	
	
			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;
	
			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;
	
			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;
	
			if (FastClick.notNeeded(layer)) {
				return;
			}
	
			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}
	
	
			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}
	
			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}
	
			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);
	
			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};
	
				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}
	
			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {
	
				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}
	
		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
	
		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
	
	
		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
	
	
		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
	
	
		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
	
		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
	
		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {
	
			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}
	
				break;
			case 'input':
	
				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}
	
				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}
	
			return (/\bneedsclick\b/).test(target.className);
		};
	
	
		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}
	
				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};
	
	
		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;
	
			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}
	
			touch = event.changedTouches[0];
	
			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};
	
		FastClick.prototype.determineEventType = function(targetElement) {
	
			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}
	
			return 'click';
		};
	
	
		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;
	
			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};
	
	
		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;
	
			scrollParent = targetElement.fastClickScrollParent;
	
			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}
	
					parentElement = parentElement.parentElement;
				} while (parentElement);
			}
	
			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};
	
	
		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	
			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}
	
			return eventTarget;
		};
	
	
		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;
	
			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}
	
			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];
	
			if (deviceIsIOS) {
	
				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}
	
				if (!deviceIsIOS4) {
	
					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}
	
					this.lastTouchIdentifier = touch.identifier;
	
					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}
	
			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;
	
			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;
	
			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}
	
			return true;
		};
	
	
		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;
	
			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}
	
			return false;
		};
	
	
		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}
	
			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}
	
			return true;
		};
	
	
		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {
	
			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}
	
			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}
	
			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};
	
	
		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
	
			if (!this.trackingClick) {
				return true;
			}
	
			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}
	
			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}
	
			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;
	
			this.lastClickTime = event.timeStamp;
	
			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;
	
			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];
	
				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}
	
			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}
	
					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {
	
				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}
	
				this.focus(targetElement);
				this.sendClick(targetElement, event);
	
				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}
	
				return false;
			}
	
			if (deviceIsIOS && !deviceIsIOS4) {
	
				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}
	
			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}
	
			return false;
		};
	
	
		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};
	
	
		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {
	
			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}
	
			if (event.forwardedTouchEvent) {
				return true;
			}
	
			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}
	
			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
	
				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {
	
					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}
	
				// Cancel the event
				event.stopPropagation();
				event.preventDefault();
	
				return false;
			}
	
			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};
	
	
		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;
	
			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}
	
			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}
	
			permitted = this.onMouse(event);
	
			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}
	
			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};
	
	
		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;
	
			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}
	
			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};
	
	
		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;
	
			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}
	
			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	
			if (chromeVersion) {
	
				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');
	
					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
	
				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}
	
			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
	
				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');
	
					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}
	
			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}
	
			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	
			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
	
				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}
	
			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}
	
			return false;
		};
	
	
		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};
	
	
		if (true) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	var bind = __webpack_require__(10);
	var Axios = __webpack_require__(11);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = module.exports = createInstance();
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return createInstance(defaultConfig);
	};
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(28);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(10);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(12);
	var utils = __webpack_require__(9);
	var InterceptorManager = __webpack_require__(14);
	var dispatchRequest = __webpack_require__(15);
	var isAbsoluteURL = __webpack_require__(26);
	var combineURLs = __webpack_require__(27);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 */
	function Axios(defaultConfig) {
	  this.defaults = utils.merge(defaults, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	var normalizeHeaderName = __webpack_require__(13);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	module.exports = {
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(9);
	var transformData = __webpack_require__(16);
	
	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter;
	
	  if (typeof config.adapter === 'function') {
	    // For custom adapter support
	    adapter = config.adapter;
	  } else if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(17);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(17);
	  }
	
	  return Promise.resolve(config)
	    // Wrap synchronous adapter errors and pass configuration
	    .then(adapter)
	    .then(function onFulfilled(response) {
	      // Transform response data
	      response.data = transformData(
	        response.data,
	        response.headers,
	        config.transformResponse
	      );
	
	      return response;
	    }, function onRejected(error) {
	      // Transform response data
	      if (error && error.response) {
	        error.response.data = transformData(
	          error.response.data,
	          error.response.headers,
	          config.transformResponse
	        );
	      }
	
	      return Promise.reject(error);
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(9);
	var settle = __webpack_require__(18);
	var buildURL = __webpack_require__(21);
	var parseHeaders = __webpack_require__(22);
	var isURLSameOrigin = __webpack_require__(23);
	var createError = __webpack_require__(19);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(24);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      if (request.status === 0) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(25);
	
	      // Add xsrf header
	      var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.progress === 'function') {
	      if (config.method === 'post' || config.method === 'put') {
	        request.upload.addEventListener('progress', config.progress);
	      } else if (config.method === 'get') {
	        request.addEventListener('progress', config.progress);
	      }
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(19);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(20);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(9);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js?sourceMap&-autoprefixer!./../postcss-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js?sourceMap&-autoprefixer!./../postcss-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n", "", {"version":3,"sources":["/./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"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","file":"normalize.css","sourcesContent":["/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	__webpack_require__(42);
	__webpack_require__(44);
	
	var utils = __webpack_require__(100);
	var FastClick = __webpack_require__(6);
	document.addEventListener('DOMContentLoaded', function () {
	  FastClick.attach(document.body);
	}, false);
	
	window.onunhandledrejection = function (rejection) {
	  if (rejection.promise._d) console.error(rejection.promise._d.v.stack);else console.error(rejection.promise);
	};
	
	utils.setupMTStyleForTesting();
	
	var api = __webpack_require__(7).create({
	  baseURL: utils.APIPrefix(),
	  withCredentials: true
	});
	api.interceptors.response.use(function (resp) {
	  if (resp.data.code != null) {
	    if (resp.data.code == 200) return resp.data;else {
	      var error = new Error(resp.data.msg);
	      error.code = resp.data.code;
	      throw error;
	    }
	  } else return resp;
	}, function (e) {
	  throw e;
	});
	
	module.exports = {
	  api: api,
	  utils: utils
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js?sourceMap&-autoprefixer!./../../postcss-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!./../../css-loader/index.js?sourceMap&-autoprefixer!./../../postcss-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(36) + ");\n  src: url(" + __webpack_require__(37) + "?#iefix&v=4.6.3) format('embedded-opentype'), url(" + __webpack_require__(38) + ") format('woff2'), url(" + __webpack_require__(39) + ") format('woff'), url(" + __webpack_require__(40) + ") format('truetype'), url(" + __webpack_require__(41) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", "", {"version":3,"sources":["/./node_modules/font-awesome/css/font-awesome.css"],"names":[],"mappings":"AAAA;;;GAGG;AACH;gCACgC;AAChC;EACE,2BAA2B;EAC3B,mCAAqD;EACrD,2PAAkX;EAClX,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,8CAA8C;EAC9C,mBAAmB;EACnB,qBAAqB;EACrB,oCAAoC;EACpC,mCAAmC;CACpC;AACD,8DAA8D;AAC9D;EACE,wBAAwB;EACxB,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,oBAAoB;CACrB;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD,4BAA4B;AAC5B;EACE,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,8CAA8C;EAC9C,sCAAsC;CACvC;AACD;EACE,gDAAgD;EAChD,wCAAwC;CACzC;AACD;EACE;IACE,gCAAgC;IAChC,wBAAwB;GACzB;EACD;IACE,kCAAkC;IAClC,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,gCAAgC;IAChC,wBAAwB;GACzB;EACD;IACE,kCAAkC;IAClC,0BAA0B;GAC3B;CACF;AACD;EACE,uEAAuE;EACvE,iCAAiC;EAEjC,yBAAyB;CAC1B;AACD;EACE,uEAAuE;EACvE,kCAAkC;EAElC,0BAA0B;CAC3B;AACD;EACE,uEAAuE;EACvE,kCAAkC;EAElC,0BAA0B;CAC3B;AACD;EACE,iFAAiF;EACjF,gCAAgC;EAEhC,wBAAwB;CACzB;AACD;EACE,iFAAiF;EACjF,gCAAgC;EAEhC,wBAAwB;CACzB;AACD;;;;;EAKE,qBAAa;UAAb,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;CACxB;AACD;;EAEE,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;oEACoE;AACpE;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;;EAIE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;;;EAKE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,UAAU;CACX;AACD;;EAEE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,WAAW;CACZ","file":"font-awesome.css","sourcesContent":["/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('../fonts/fontawesome-webfont.eot?v=4.6.3');\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "data:application/octet-stream;base64,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"

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 40 */
/***/ function(module, exports) {


/***/ },
/* 41 */
/***/ function(module, exports) {


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../node_modules/postcss-loader/index.js!./../../node_modules/resolve-url-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../node_modules/postcss-loader/index.js!./../../node_modules/resolve-url-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background: #f0f0f0;\n}\n\n#wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n#header {\n  background: red;\n  height: 20px;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n\n#content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n#footer {\n  background-color: white;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n\nh1 {\n  font-size: 1.125rem;\n  margin: 0;\n  padding: 0;\n}\n\nh2 {\n  font-size: 1rem;\n  margin: 0;\n  padding: 0;\n}\n\nh3 {\n  font-size: 0.9375rem;\n  line-height: 1.375rem;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nh4 {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nh5 {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\n.layout-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.layout-column {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n.layout-wrap {\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.layout-m-align--start {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n\n.layout-m-align--center {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.layout-m-align--end {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n}\n\n.layout-m-align--space-between {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n\n.layout-m-align--space-around {\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n\n.layout-c-align--start {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n\n.layout-c-align--center {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.layout-c-align--end {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n\n.layout-c-align--baseline {\n  -webkit-box-align: baseline;\n  -webkit-align-items: baseline;\n          align-items: baseline;\n}\n\n.layout-c-align--stretch {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n}\n\n.layout-flex {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n\n.dp-1px-t-1 {\n  border-top: 1px solid #e0e0e0;\n}\n\n.dp-1px-t-1 {\n  border-top: 1px solid #e0e0e0;\n}\n\n.dp-1px-b-1 {\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.dp-1px-tb-1 {\n  border-top: #e0e0e0 1px solid;\n  border-bottom: #e0e0e0 1px solid;\n  background-image: none;\n}\n\n.dp-1px-l-1 {\n  border-left: 1px solid #e0e0e0;\n}\n\n.dp-1px-r-1 {\n  border-right: 1px solid #e0e0e0;\n}\n\n.dp-1px-1 {\n  border: 1px solid #e0e0e0;\n}\n\n.dp-1px-radius-1 {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n}\n\n@media screen and (min-device-pixel-ratio: 2) {\n  .dp-1px-radius-1 {\n    position: relative;\n    border: 0;\n  }\n\n  .dp-1px-radius-1:before {\n    content: \"\";\n    width: 200%;\n    height: 200%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 1px solid #e0e0e0;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    padding: 1px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    pointer-events: none;\n  }\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 2) {\n  .dp-1px-1 {\n    position: relative;\n    border: 0;\n  }\n\n  .dp-1px-t-1,\n  .dp-1px-b-1,\n  .dp-1px-l-1,\n  .dp-1px-r-1,\n  .dp-1px-tb-1 {\n    border: 0;\n  }\n\n  .dp-1px-t-1 {\n    background-position: left top;\n    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n  }\n\n  .dp-1px-b-1 {\n    background-position: left bottom;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n  }\n\n  .dp-1px-t-1,\n  .dp-1px-b-1,\n  .dp-1px-tb-1 {\n    background-repeat: repeat-x;\n    -webkit-background-size: 100% 1px;\n  }\n\n  .dp-1px-tb-1 {\n    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0)), -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n    background-position: top, bottom;\n  }\n\n  .dp-1px-l-1 {\n    background-position: left top;\n    background-image: -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n  }\n\n  .dp-1px-r-1 {\n    background-position: right top;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n  }\n\n  .dp-1px-l-1,\n  .dp-1px-r-1 {\n    background-repeat: repeat-y;\n    background-size: 1px 100%;\n  }\n\n  .dp-1px-rb-1 {\n    background: repeat-y right top/1px 100% -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0)), repeat-x left bottom/100% 1px -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n  }\n\n  .dp-1px-1:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0)), -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0)), -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0)), -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0));\n    background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;\n    background-repeat: no-repeat;\n    background-position: top, right, bottom, left;\n    padding: 1px;\n    box-sizing: border-box;\n    z-index: 10;\n    pointer-events: none;\n  }\n}\n\n.dp-1px-t-2 {\n  border-top: 1px solid #000;\n}\n\n.dp-1px-t-2 {\n  border-top: 1px solid #000;\n}\n\n.dp-1px-b-2 {\n  border-bottom: 1px solid #000;\n}\n\n.dp-1px-tb-2 {\n  border-top: #000 1px solid;\n  border-bottom: #000 1px solid;\n  background-image: none;\n}\n\n.dp-1px-l-2 {\n  border-left: 1px solid #000;\n}\n\n.dp-1px-r-2 {\n  border-right: 1px solid #000;\n}\n\n.dp-1px-2 {\n  border: 1px solid #000;\n}\n\n.dp-1px-radius-2 {\n  border: 1px solid #000;\n  border-radius: 4px;\n}\n\n@media screen and (min-device-pixel-ratio: 2) {\n  .dp-1px-radius-2 {\n    position: relative;\n    border: 0;\n  }\n\n  .dp-1px-radius-2:before {\n    content: \"\";\n    width: 200%;\n    height: 200%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 1px solid #000;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    padding: 1px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    pointer-events: none;\n  }\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 2) {\n  .dp-1px-2 {\n    position: relative;\n    border: 0;\n  }\n\n  .dp-1px-t-2,\n  .dp-1px-b-2,\n  .dp-1px-l-2,\n  .dp-1px-r-2,\n  .dp-1px-tb-2 {\n    border: 0;\n  }\n\n  .dp-1px-t-2 {\n    background-position: left top;\n    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #000));\n  }\n\n  .dp-1px-b-2 {\n    background-position: left bottom;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #000));\n  }\n\n  .dp-1px-t-2,\n  .dp-1px-b-2,\n  .dp-1px-tb-2 {\n    background-repeat: repeat-x;\n    -webkit-background-size: 100% 1px;\n  }\n\n  .dp-1px-tb-2 {\n    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #000)), -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #000));\n    background-position: top, bottom;\n  }\n\n  .dp-1px-l-2 {\n    background-position: left top;\n    background-image: -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, #000));\n  }\n\n  .dp-1px-r-2 {\n    background-position: right top;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, #000));\n  }\n\n  .dp-1px-l-2,\n  .dp-1px-r-2 {\n    background-repeat: repeat-y;\n    background-size: 1px 100%;\n  }\n\n  .dp-1px-rb-2 {\n    background: repeat-y right top/1px 100% -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, #000)), repeat-x left bottom/100% 1px -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #000));\n  }\n\n  .dp-1px-2:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, #000)), -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, #000)), -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #000)), -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, #000));\n    background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;\n    background-repeat: no-repeat;\n    background-position: top, right, bottom, left;\n    padding: 1px;\n    box-sizing: border-box;\n    z-index: 10;\n    pointer-events: none;\n  }\n}\n\n.dp-button {\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0.75em 1.125em;\n  color: #fff;\n  border: none transparent;\n  background-color: #ff6633;\n  text-decoration: none;\n  border-radius: 2px;\n  line-height: 1.1;\n  font-weight: normal;\n}\n\n.dp-button:focus {\n  background-image: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1));\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1));\n  outline: 0;\n}\n\n.dp-button:active {\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 0 6px rgba(0, 0, 0, 0.2) inset;\n  border-color: #000\\9;\n}\n\n", "", {"version":3,"sources":["/./src/common/style/global.scss","/./src/common/main.scss","/./src/common/style/layout.scss","/./src/common/style/1px.scss","/./src/common/style/button.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["body {\n  //font-family: Hiragino Sans GB,Arial,Helvetica,sans-serif;\n  background: #f0f0f0;\n}\n\n#wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n#header {\n  background: red;\n  height: 20px;\n  flex: 0 0 auto;\n}\n\n#content {\n  flex: 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n#footer {\n  background-color: white;\n  flex: 0 0 auto;\n}\n\n\n\nh1 {\n  font-size: rem(18);\n  margin: 0;\n  padding: 0;\n}\n\nh2 {\n  font-size: rem(16);\n  margin: 0;\n  padding: 0;\n}\n\nh3 {\n  font-size: rem(15);\n  line-height: rem(22);\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nh4 {\n  font-size: rem(14);\n  line-height: rem(20);\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nh5 {\n  font-size: rem(12);\n  line-height: rem(16);\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}","@import \"_var.scss\";\n@import \"./_common.scss\";\n@import \"./style/global.scss\";\n@import \"./style/layout.scss\";\n@import \"./style/1px.scss\";\n@import \"./style/button.scss\";\n",".layout-row {\n  display: flex;\n}\n\n.layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.layout-wrap {\n  flex-wrap: wrap;\n}\n\n@each $p, $q in (start, flex-start), center, (end, flex-end), space-between, space-around {\n  .layout-m-align--#{$p} {\n    @if $q == null {\n      justify-content: #{$p};\n    } @else {\n      justify-content: #{$q};\n    }\n  }\n}\n\n@each $p, $q in (start, flex-start), center, (end, flex-end), baseline, stretch {\n  .layout-c-align--#{$p} {\n    @if $q == null {\n      align-items: #{$p};\n    } @else {\n      align-items: #{$q};\n    }\n  }\n}\n\n.layout-flex {\n  flex: 1;\n}","@each $color, $name in (#e0e0e0, 1), (#000, 2) {\n\n  .dp-1px-t-#{$name} {\n    border-top: 1px solid $color;\n  }\n\n  .dp-1px-t-#{$name} {\n    border-top: 1px solid $color;\n  }\n\n  .dp-1px-b-#{$name} {\n    border-bottom: 1px solid $color;\n  }\n\n  .dp-1px-tb-#{$name} {\n    border-top: $color 1px solid;\n    border-bottom: $color 1px solid;\n    background-image: none;\n  }\n\n  .dp-1px-l-#{$name} {\n    border-left: 1px solid $color;\n  }\n\n  .dp-1px-r-#{$name} {\n    border-right: 1px solid $color;\n  }\n\n  .dp-1px-#{$name} {\n    border: 1px solid $color;\n  }\n\n  .dp-1px-radius-#{$name} {\n    border: 1px solid $color;\n    border-radius: 4px;\n  }\n\n  @media screen and (min-device-pixel-ratio: 2) {\n    .dp-1px-radius-#{$name} {\n      position: relative;\n      border: 0;\n    }\n\n    .dp-1px-radius-#{$name}:before {\n      content: \"\";\n      width: 200%;\n      height: 200%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      border: 1px solid $color;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n      padding: 1px;\n      box-sizing: border-box;\n      border-radius: 8px;\n      pointer-events: none;\n    }\n  }\n\n  @media screen and (-webkit-min-device-pixel-ratio: 2) {\n    .dp-1px-#{$name} {\n      position: relative;\n      border: 0;\n    }\n\n    .dp-1px-t-#{$name}, .dp-1px-b-#{$name}, .dp-1px-l-#{$name}, .dp-1px-r-#{$name}, .dp-1px-tb-#{$name} {\n      border: 0;\n    }\n\n    .dp-1px-t-#{$name} {\n      background-position: left top;\n      background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, $color)); }\n\n    .dp-1px-b-#{$name} {\n      background-position: left bottom;\n      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, $color)); }\n\n    .dp-1px-t-#{$name},\n    .dp-1px-b-#{$name},\n    .dp-1px-tb-#{$name} {\n      background-repeat: repeat-x;\n      -webkit-background-size: 100% 1px;\n    }\n\n    .dp-1px-tb-#{$name} {\n      background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, $color)), -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, $color));\n      background-position: top, bottom;\n    }\n\n    .dp-1px-l-#{$name} {\n      background-position: left top;\n      background-image: -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, $color)); }\n\n    .dp-1px-r-#{$name} {\n      background-position: right top;\n      background-image: -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, $color)); }\n\n    .dp-1px-l-#{$name},\n    .dp-1px-r-#{$name} {\n      background-repeat: repeat-y;\n      background-size: 1px 100%;\n    }\n\n    .dp-1px-rb-#{$name} {\n      background: repeat-y right top / 1px 100% -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, $color)),\n                  repeat-x left bottom / 100% 1px -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, $color));\n    }\n\n    .dp-1px-#{$name}:after {\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, transparent), color-stop(0.5, $color)), -webkit-gradient(linear, left top, right top, color-stop(0.5, transparent), color-stop(0.5, $color)), -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, $color)), -webkit-gradient(linear, right top, left top, color-stop(0.5, transparent), color-stop(0.5, $color));\n      background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;\n      background-repeat: no-repeat;\n      background-position: top, right, bottom, left;\n      padding: 1px;\n      box-sizing: border-box;\n      z-index: 10;\n      pointer-events: none;\n    }\n  }\n}\n","$color: #fff;\n\n.dp-button {\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0.75em 1.125em;\n  color: $color;\n  border: none rgba(0, 0, 0, 0);\n  background-color: $button-background-color;\n  text-decoration: none;\n  border-radius: 2px;\n  line-height: 1.1;\n  font-weight: normal;\n\n}\n\n.dp-button:focus {\n  background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));\n  outline: 0;\n}\n\n.dp-button:active {\n  box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;\n  border-color: #000\\9;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _promise = __webpack_require__(45);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// String
	if (!String.prototype.startsWith) {
	  String.prototype.startsWith = function (searchString, position) {
	    position = position || 0;
	    return this.indexOf(searchString, position) === position;
	  };
	}
	
	if (!String.prototype.includes) {
	  String.prototype.includes = function () {
	    'use strict';
	
	    return String.prototype.indexOf.apply(this, arguments) !== -1;
	  };
	}
	
	// Array
	if (!Array.prototype.find) {
	  Array.prototype.find = function (predicate) {
	    if (this === null) {
	      throw new TypeError('Array.prototype.find called on null or undefined');
	    }
	    if (typeof predicate !== 'function') {
	      throw new TypeError('predicate must be a function');
	    }
	    var list = Object(this);
	    var length = list.length >>> 0;
	    var thisArg = arguments[1];
	    var value;
	
	    for (var i = 0; i < length; i++) {
	      value = list[i];
	      if (predicate.call(thisArg, value, i, list)) {
	        return value;
	      }
	    }
	    return undefined;
	  };
	}
	
	if (!Array.prototype.findIndex) {
	  Array.prototype.findIndex = function (predicate) {
	    if (this === null) {
	      throw new TypeError('Array.prototype.findIndex called on null or undefined');
	    }
	    if (typeof predicate !== 'function') {
	      throw new TypeError('predicate must be a function');
	    }
	    var list = Object(this);
	    var length = list.length >>> 0;
	    var thisArg = arguments[1];
	    var value;
	
	    for (var i = 0; i < length; i++) {
	      value = list[i];
	      if (predicate.call(thisArg, value, i, list)) {
	        return i;
	      }
	    }
	    return -1;
	  };
	}
	
	if (!Array.prototype.includes) {
	  if (!Array.prototype.includes) {
	    Array.prototype.includes = function (searchElement /*, fromIndex*/) {
	      'use strict';
	
	      var O = Object(this);
	      var len = parseInt(O.length, 10) || 0;
	      if (len === 0) {
	        return false;
	      }
	      var n = parseInt(arguments[1], 10) || 0;
	      var k;
	      if (n >= 0) {
	        k = n;
	      } else {
	        k = len + n;
	        if (k < 0) {
	          k = 0;
	        }
	      }
	      var currentElement;
	      while (k < len) {
	        currentElement = O[k];
	        if (searchElement === currentElement) {
	          // NaN !== NaN
	          return true;
	        }
	        k++;
	      }
	      return false;
	    };
	  }
	}
	
	_promise2.default.prototype.finally = function (callback) {
	  var constructor = this.constructor;
	
	  return this.then(function (value) {
	    return constructor.resolve(callback()).then(function () {
	      return value;
	    });
	  }, function (reason) {
	    return constructor.resolve(callback()).then(function () {
	      throw reason;
	    });
	  });
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(72);
	__webpack_require__(79);
	module.exports = __webpack_require__(56).Promise;

/***/ },
/* 47 */
/***/ function(module, exports) {



/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(49)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(52)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(50)
	  , defined   = __webpack_require__(51);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(53)
	  , $export        = __webpack_require__(54)
	  , redefine       = __webpack_require__(59)
	  , hide           = __webpack_require__(60)
	  , has            = __webpack_require__(65)
	  , Iterators      = __webpack_require__(66)
	  , $iterCreate    = __webpack_require__(67)
	  , setToStringTag = __webpack_require__(68)
	  , getProto       = __webpack_require__(61).getProto
	  , ITERATOR       = __webpack_require__(69)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(55)
	  , core      = __webpack_require__(56)
	  , ctx       = __webpack_require__(57)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 55 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 56 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(58);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(61)
	  , createDesc = __webpack_require__(62);
	module.exports = __webpack_require__(63) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(64)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(61)
	  , descriptor     = __webpack_require__(62)
	  , setToStringTag = __webpack_require__(68)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(60)(IteratorPrototype, __webpack_require__(69)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(61).setDesc
	  , has = __webpack_require__(65)
	  , TAG = __webpack_require__(69)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(70)('wks')
	  , uid    = __webpack_require__(71)
	  , Symbol = __webpack_require__(55).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(55)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var Iterators = __webpack_require__(66);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(74)
	  , step             = __webpack_require__(75)
	  , Iterators        = __webpack_require__(66)
	  , toIObject        = __webpack_require__(76);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(52)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(77)
	  , defined = __webpack_require__(51);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(78);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(61)
	  , LIBRARY    = __webpack_require__(53)
	  , global     = __webpack_require__(55)
	  , ctx        = __webpack_require__(57)
	  , classof    = __webpack_require__(80)
	  , $export    = __webpack_require__(54)
	  , isObject   = __webpack_require__(81)
	  , anObject   = __webpack_require__(82)
	  , aFunction  = __webpack_require__(58)
	  , strictNew  = __webpack_require__(83)
	  , forOf      = __webpack_require__(84)
	  , setProto   = __webpack_require__(89).set
	  , same       = __webpack_require__(90)
	  , SPECIES    = __webpack_require__(69)('species')
	  , speciesConstructor = __webpack_require__(91)
	  , asap       = __webpack_require__(92)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , empty      = function(){ /* empty */ }
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(empty), promise;
	  if(sub)test.constructor = function(exec){
	    exec(empty, empty);
	  };
	  (promise = P.resolve(test))['catch'](empty);
	  return promise === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(63)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(97)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(68)(P, PROMISE);
	__webpack_require__(98)(PROMISE);
	Wrapper = __webpack_require__(56)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(99)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(78)
	  , TAG = __webpack_require__(69)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(81);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(57)
	  , call        = __webpack_require__(85)
	  , isArrayIter = __webpack_require__(86)
	  , anObject    = __webpack_require__(82)
	  , toLength    = __webpack_require__(87)
	  , getIterFn   = __webpack_require__(88);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(82);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(66)
	  , ITERATOR   = __webpack_require__(69)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(50)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(80)
	  , ITERATOR  = __webpack_require__(69)('iterator')
	  , Iterators = __webpack_require__(66);
	module.exports = __webpack_require__(56).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(61).getDesc
	  , isObject = __webpack_require__(81)
	  , anObject = __webpack_require__(82);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(57)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(82)
	  , aFunction = __webpack_require__(58)
	  , SPECIES   = __webpack_require__(69)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(55)
	  , macrotask = __webpack_require__(93).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(78)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(57)
	  , invoke             = __webpack_require__(94)
	  , html               = __webpack_require__(95)
	  , cel                = __webpack_require__(96)
	  , global             = __webpack_require__(55)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(78)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(55).document && document.documentElement;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(81)
	  , document = __webpack_require__(55).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(59);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(56)
	  , $           = __webpack_require__(61)
	  , DESCRIPTORS = __webpack_require__(63)
	  , SPECIES     = __webpack_require__(69)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(69)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(101);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(102);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var queryString = __webpack_require__(3);
	
	var Utils = function () {
	  function Utils() {
	    (0, _classCallCheck3.default)(this, Utils);
	  }
	
	  (0, _createClass3.default)(Utils, [{
	    key: 'APIPrefix',
	    value: function APIPrefix() {
	      var prefix;
	      var env = queryString.parse(location.search)._env_ || ('dev');
	      switch (env) {
	        case 'product':
	          prefix = 'http://m.dianping.com';
	          break;
	        case 'beta':
	          prefix = 'http://m.51ping.com';
	          break;
	        case 'dev':
	          prefix = 'http://' + ('172.22.34.191:5002');
	          break;
	        default:
	          prefix = env;
	          break;
	      }
	      return prefix;
	    }
	  }, {
	    key: 'setupMTStyleForTesting',
	    value: function setupMTStyleForTesting() {
	      if (('dev') === 'dev' && this.bridge() === 11) {
	        var fileref = document.createElement("link");
	        fileref.setAttribute("rel", "stylesheet");
	        fileref.setAttribute("type", "text/css");
	        fileref.setAttribute("href", './static/theme-mt.css');
	        document.getElementsByTagName("head")[0].appendChild(fileref);
	      }
	    }
	  }]);
	  return Utils;
	}();
	
	module.exports = new Utils();

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(103);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(61);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map