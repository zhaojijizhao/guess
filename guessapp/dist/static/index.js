webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(85);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	__webpack_require__(86);
	
	var VueRouter = __webpack_require__(88);
	
	//框架
	var Layout = __webpack_require__(89);
	
	//商品页面
	var Sign = __webpack_require__(94);
	var Login = __webpack_require__(96);
	var Profile = __webpack_require__(98);
	var Friend = __webpack_require__(100);
	var Addfriend = __webpack_require__(102);
	var Solo = __webpack_require__(104);
	var Duo = __webpack_require__(111);
	var Duomap = __webpack_require__(113);
	var Duofriend = __webpack_require__(116);
	var Duohot = __webpack_require__(118);
	var Msg = __webpack_require__(120);
	var Select = __webpack_require__(123);
	
	Vue.use(VueRouter);
	
	var RootComponent = Vue.extend({
	  template: __webpack_require__(126),
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  computed: {},
	  ready: function ready() {}
	});
	
	var router = new VueRouter();
	router.map({
	  '/index': {
	    component: Layout,
	    subRoutes: {
	      '/sign': {
	        component: Sign //注册
	      },
	      '/login': {
	        component: Login //登录
	      },
	      '/profile': {
	        component: Profile //个人资料
	      },
	      '/friend': {
	        component: Friend //好友列表
	      },
	      '/addfriend': {
	        component: Addfriend //添加好友
	      },
	      '/solo': {
	        component: Solo //单人模式
	      },
	      '/duo': {
	        component: Duo //多人模式选择
	      },
	      '/duomap': {
	        component: Duomap //多人地图
	      },
	      '/duofriend': {
	        component: Duofriend //多人好友
	      },
	      '/duohot': {
	        component: Duohot //多人热度
	      },
	      '/msg': {
	        component: Msg //我的消息
	      },
	      '/select/:id': {
	        component: Select //选项详情
	      }
	    }
	  }
	});
	
	router.redirect({
	  '*': '/index/solo'
	});
	
	router.start(RootComponent, '#app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./index.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "ul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\n.guess {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 40px;\n  bottom: 60px;\n  background: #f5f5f5;\n  overflow: auto;\n}\n\n.left {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 50%;\n  background-color: #fff;\n}\n\n.left form {\n  padding: 15px;\n  font: 16px;\n  line-height: 24px;\n}\n\n.left .inline {\n  margin-bottom: 15px;\n}\n\n.left form span {\n  display: block;\n  margin: 0 -15px;\n  padding: 10px 15px;\n  background-color: transparent;\n}\n\n.left form span.on {\n  background-color: #f60;\n}\n\n.left form input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 5px;\n  height: 32px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.left form button {\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  height: 32px;\n  font-size: 16px;\n  background: #f60;\n  border: none;\n  color: #fff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.right {\n  position: absolute;\n  z-index: 1;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 50%;\n  text-align: center;\n}\n\n.right span {\n  margin-top: 50px;\n  display: block;\n  text-align: center;\n  line-height: 60px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.pop {\n  position: fixed;\n  z-index: 99;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n\n.hide {\n  display: none !important;\n}\n\n.header {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  line-height: 40px;\n  background-color: #f60;\n}\n\n.header .pit-left,\n.header .pit-right {\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  display: inline-block;\n  height: 28px;\n  width: 60px;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 28px;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.header .pit-left:hover,\n.header .pit-right:hover {\n  color: #f60;\n  background-color: #fff;\n}\n\n.header .pit-left {\n  left: 5px;\n}\n\n.header .pit-right {\n  right: 5px;\n}\n\n.header ul {\n  position: fixed;\n  z-index: 3;\n  width: 40%;\n  right: -40%;\n  top: 0;\n  bottom: 0;\n  font-size: 14px;\n  line-height: 42px;\n  background-color: #f60;\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n.header ul.on {\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n}\n\n.header ul li {\n  display: block;\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.header ul li:hover,\n.header ul li.on {\n  background-color: #c85000;\n}\n\n.footer {\n  position: fixed;\n  height: 60px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  background-color: #f60;\n}\n\n.footer ul {\n  overflow: hidden;\n}\n\n.footer ul li {\n  display: inline-block;\n  float: left;\n  padding: 5px 0;\n  width: 20%;\n  text-align: center;\n}\n\n.footer ul li span.fa {\n  margin: 0 auto;\n  display: block;\n  width: 30px;\n  height: 30px;\n  font-size: 24px;\n  line-height: 30px;\n}\n\n.form {\n  margin: 20px;\n  padding: 20px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n}\n\n.form .inputline {\n  padding: 10px 0;\n  overflow: hidden;\n  border-bottom: 1px solid #ccc;\n}\n\n.form .inputline label {\n  float: left;\n  display: inline-block;\n  width: 35%;\n  padding-right: 5%;\n  text-align: right;\n  line-height: 32px;\n}\n\n.form .inputline input {\n  float: left;\n  padding: 0 5px;\n  box-sizing: border-box;\n  width: 60%;\n  height: 32px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n\n.form button {\n  width: 100%;\n  height: 42px;\n  margin-top: 20px;\n  color: #fff;\n  background-color: #f60;\n  border: none;\n  border-radius: 5px;\n}\n\n.links {\n  margin: 20px;\n}\n\n.links li {\n  margin: 10px 0;\n  width: 100%;\n  height: 42px;\n  color: #fff;\n  line-height: 42px;\n  text-align: center;\n  background-color: #f60;\n  border-radius: 5px;\n}\n\n.map {\n  width: 100%;\n  height: 400px;\n}\n\n.userlist {\n  margin: 20px 10px;\n}\n\n.userlist li {\n  margin: 10px 0;\n  padding: 5px 10px;\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  background-color: #f60;\n  border-radius: 5px;\n}\n\n.userlist li img {\n  margin-right: 10px;\n  vertical-align: top;\n  width: 40px;\n  height: 40px;\n  border-radius: 3px;\n}\n\n.userlist li input[type=checkbox] {\n  float: right;\n  width: 20px;\n  height: 20px;\n  margin-top: 10px;\n}\n\n.left.choose {\n  position: static;\n  width: 100%;\n}\n\n.toast-container.toast-anim-transition {\n  z-index: 99;\n}\n\n.msg {\n  margin: 20px;\n}\n\n.msg li {\n  margin-bottom: 20px;\n  padding: 10px;\n  background-color: #f60;\n  color: #fff;\n  border-radius: 5px;\n}\n\n.msg li.send {\n  background-color: #28c305;\n}\n\n.msg li.receive {\n  background-color: #058bc3;\n}\n\n.msg li p {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.msg li p.title {\n  font-size: 16px;\n  line-height: 32px;\n}\n\n.msg li p.time {\n  color: #ccc;\n}\n\n.msg li p.link {\n  color: #fff;\n}\n\n", "", {"version":3,"sources":["/./src/pages/index/index.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":["ul{\n    margin: 0;\n    padding: 0;\n}\nli{\n    list-style-type:none;\n}\n\n.guess{\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    right: 0;\n    top: 40px;\n    bottom: 60px;\n    background: #f5f5f5;\n    overflow: auto;\n}\n.left{\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    bottom:0;\n    width: 50%;\n    background-color: #fff;\n}\n.left form{\n    padding: 15px;\n    font: 16px;\n    line-height: 24px;\n}\n.left .inline{\n    margin-bottom: 15px;\n}\n.left form span{\n    display: block;\n    margin:0 -15px;\n    padding: 10px 15px;\n    background-color:transparent;\n}\n.left form span.on{\n    background-color: #f60;\n}\n.left form input{\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 0 5px;\n    height: 32px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n.left form button{\n    display: block;\n    margin-bottom: 15px;\n    width: 100%;\n    height: 32px;\n    font-size: 16px;\n    background: #f60;\n    border: none;\n    color: #fff;\n    border-radius: 5px;\n    outline: none;\n}\n.right{\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 0;\n    bottom:0;\n    width: 50%;\n    text-align: center;\n}\n.right span{\n    margin-top: 50px;\n    display: block;\n    text-align: center;\n    line-height: 60px;\n    font-size:20px;\n    font-weight:bold;\n}\n.pop{\n    position: fixed;\n    z-index: 99;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n.hide{\n    display: none !important;\n}\n\n\n.header{\n    position:fixed;\n    z-index: 2;\n    top:0;\n    left:0;\n    right:0;\n    height:40px;\n    color: #fff;\n    text-align:center;\n    font-size:20px;\n    line-height: 40px;\n    background-color: #f60;\n    .pit-left,.pit-right{\n        position: absolute;\n        z-index:1;\n        top:5px;\n        display:inline-block;\n        height:28px;\n        width:60px;\n        vertical-align: middle;\n        font-size: 14px;\n        line-height:28px;\n        border: 1px solid #fff;\n        border-radius: 5px;\n        cursor: pointer;\n        &:hover{\n            color:#f60;\n            background-color: #fff;\n        }\n    }\n    .pit-left{\n        left: 5px;\n    }\n    .pit-right{\n        right: 5px;\n    }\n    ul{\n        position:fixed;\n        z-index:3;\n        width:40%;\n        right:-40%;\n        top:0;\n        bottom:0;\n        font-size: 14px;\n        line-height: 42px;\n        background-color: #f60;\n        box-shadow: 0 0 5px 2px rgba(0,0,0,0.3);\n        transform: translate(0,0);\n        transition: all 0.3s ease;\n        &.on{\n            transform: translate(-100%,0);\n        }\n        li{\n            display:block;\n            text-align: center;\n            border-bottom: 1px solid rgba(255,255,255,0.5);\n            &:hover,&.on{\n                background-color: #c85000;\n            }\n        }\n    }\n}\n\n.footer{\n    position: fixed;\n    height: 60px;\n    bottom: 0;\n    left:0;\n    right:0;\n    color:#fff;\n    text-align: center;\n    font-size: 14px;\n    line-height: 20px;\n    background-color: #f60;\n    ul{\n        overflow:hidden;\n        li{\n            display: inline-block;\n            float:left;\n            padding: 5px 0;\n            width:20%;\n            text-align:center;\n            span.fa{\n                margin: 0 auto;\n                display: block;\n                width:30px;\n                height:30px;\n                font-size:24px;\n                line-height:30px;\n            }\n        }\n    }\n}\n\n.form{\n    margin:20px;\n    padding: 20px;\n    background-color:#fff;\n    border:1px solid #ccc;\n    border-radius:10px;\n    .inputline{\n        padding:10px 0;\n        overflow:hidden;\n        border-bottom: 1px solid #ccc;\n        label{\n            float:left;\n            display:inline-block;\n            width:35%;\n            padding-right:5%;\n            text-align:right;\n            line-height:32px;\n        }\n        input{\n            float:left;\n            padding:0 5px;\n            box-sizing: border-box;\n            width:60%;\n            height:32px;\n            border: 1px solid #ddd;\n            border-radius:3px;\n        }\n    }\n    button{\n        width:100%;\n        height:42px;\n        margin-top:20px;\n        color: #fff;\n        background-color:#f60;\n        border:none;\n        border-radius: 5px;\n    }\n}\n\n.links{\n    margin: 20px;\n    li{\n        margin: 10px 0;\n        width: 100%;\n        height:42px;\n        color: #fff;\n        line-height: 42px;\n        text-align: center;\n        background-color: #f60;\n        border-radius: 5px;\n    }\n}\n\n.map{\n    width:100%;\n    height:400px;\n}\n\n.userlist{\n    margin: 20px 10px;\n    li{\n        margin: 10px 0;\n        padding: 5px 10px;;\n        height:40px;\n        line-height:40px;\n        color: #fff;\n        background-color: #f60;\n        border-radius: 5px;\n        img{\n            margin-right:10px;\n            vertical-align:top;\n            width: 40px;\n            height: 40px;\n            border-radius: 3px;\n        }\n        input[type=checkbox]{\n            float:right;\n            width:20px;\n            height:20px;\n            margin-top:10px;\n        }\n    }\n}\n\n.left.choose{\n    position: static;\n    width: 100%;\n}\n.toast-container.toast-anim-transition{\n    z-index: 99;\n}\n.msg{\n    margin: 20px;\n    li{\n        margin-bottom: 20px;\n        padding: 10px;\n        background-color: #f60;\n        color:#fff;\n        border-radius: 5px;\n        &.send{\n            background-color: #28c305;\n        }\n        &.receive{\n            background-color: #058bc3;\n        }\n        p{\n            padding: 0;\n            margin: 0;\n            font-size:14px;\n            line-height: 20px;\n            &.title{\n                font-size: 16px;\n                line-height: 32px;\n            }\n            &.time{\n                color:#ccc;\n            }\n            &.info{\n\n            }\n            &.link{\n                color:#fff;\n            }\n        }\n    }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(93),
	
	  data: function data() {
	    return {
	      title: "选择决策器",
	      navshow: false,
	      navlist: [{
	        name: "注册",
	        link: "/index/sign",
	        icon: "fa-pencil"
	      }, {
	        name: "登录",
	        link: "/index/login",
	        icon: "fa-sign-in"
	      }, {
	        name: "消息列表",
	        link: "/index/msg",
	        icon: "fa-comments"
	      }, {
	        name: "添加好友",
	        link: "/index/addfriend",
	        icon: "fa-search"
	      }, {
	        name: "好友列表",
	        link: "/index/friend",
	        icon: "fa-phone"
	      }, {
	        name: "单人游戏",
	        link: "/index/solo",
	        icon: "fa-user"
	      }, {
	        name: "多人游戏",
	        link: "/index/duo",
	        icon: "fa-group"
	      }, {
	        name: "地图配对",
	        link: "/index/duomap",
	        icon: "fa-globe"
	      }, {
	        name: "好友配对",
	        link: "/index/duofriend",
	        icon: "fa-gift"
	      }, {
	        name: "随机配对",
	        link: "/index/duohot",
	        icon: "fa-random"
	      }],
	      btnlist: [{
	        name: "消息",
	        link: "/index/msg",
	        icon: "fa-comments"
	      }, {
	        name: "多人",
	        link: "/index/duo",
	        icon: "fa-group"
	      }, {
	        name: "单人",
	        link: "/index/solo",
	        icon: "fa-user"
	      }, {
	        name: "好友",
	        link: "/index/friend",
	        icon: "fa-phone"
	      }, {
	        name: "我",
	        link: "/index/profile",
	        icon: "fa-book"
	      }]
	    };
	  },
	
	  methods: {
	    back: function back() {
	      history.back();
	    },
	    shownav: function shownav(event) {
	      event.stopPropagation();
	      this.navshow = true;
	    },
	    reset: function reset() {
	      this.navshow = false;
	    },
	    hidenav: function hidenav() {
	      event.stopPropagation();
	      this.navshow = false;
	    }
	  },
	  ready: function ready() {},
	
	  computed: {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _classCallCheck2 = __webpack_require__(81);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(82);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(91);
	
	var ToastComp = {
	  data: function data() {
	    return {
	      content: ''
	    };
	  },
	
	  template: '\n  <div class="toast-container" transition="toast-anim">\n    <div class="content">{{content}}</div>\n  </div>\n  '
	};
	
	var Toast = function () {
	  function Toast() {
	    (0, _classCallCheck3.default)(this, Toast);
	  }
	
	  (0, _createClass3.default)(Toast, [{
	    key: 'show',
	    value: function show(msg) {
	      var comp = new Vue(ToastComp);
	      comp.content = msg;
	      comp.$mount().$appendTo('body');
	      setTimeout(function () {
	        comp.$destroy(true);
	      }, 2000);
	    }
	  }]);
	  return Toast;
	}();
	
	module.exports = new Toast();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./toast.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./toast.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".toast-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.toast-container .content {\n  font-size: 0.875rem;\n  padding: 0.625rem;\n  border-radius: 5px;\n  background: #000;\n  color: #fff;\n  max-width: 90%;\n}\n\n.toast-anim-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  opacity: 1;\n}\n\n.toast-anim-enter,\n.toast-anim-leave {\n  opacity: 0;\n}\n\n", "", {"version":3,"sources":["/./src/components/toast/toast.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;CADD;;AAPD;EAYI,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;CADH;;AAKD;EACE,iCAAA;EAAA,yBAAA;EACA,WAAA;CAFD;;AAKD;;EACE,WAAA;CADD","file":"toast.scss","sourcesContent":["@import \"~@common/_common.scss\";\n\n.toast-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n\n  .content {\n    font-size: rem(14);\n    padding: rem(10);\n    border-radius: 5px;\n    background: #000;\n    color: #fff;\n    max-width: 90%;\n  }\n}\n\n.toast-anim-transition {\n  transition: all .3s ease;\n  opacity: 1;\n}\n\n.toast-anim-enter, .toast-anim-leave {\n  opacity: 0;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div @click=\"reset\">\n  <div class=\"header\">\n    <span class=\"pit-left\" @click=\"back\">返回</span>\n    {{title}}\n    <span class=\"pit-right\" @click=\"shownav\">选项</span>\n    <ul :class=\"{on: navshow}\" @click=\"shownav\">\n      <li v-for=\"nav in navlist\" v-link=\"nav.link\" :class=\"{on: nav.link == $route.path}\" @click=\"hidenav\">\n        <span class=\"fa\" :class=\"nav.icon\"></span>\n        {{nav.name}}\n      </li>\n    </ul>\n  </div>\n  <router-view></router-view>\n  <div class=\"footer\">\n    <ul>\n      <li v-for=\"btn in btnlist\" v-link=\"btn.link\">\n        <span class=\"fa\" :class=\"btn.icon\"></span>\n        {{btn.name}}\n      </li>\n    </ul>\n  </div>\n</div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(95),
	
	  data: function data() {
	    return {
	      name: '',
	      password: '',
	      check: ''
	    };
	  },
	
	  methods: {
	    confirm: function confirm() {
	      if (!this.name) {
	        Toast.show('请输入用户名');
	        return;
	      }
	      if (!this.password) {
	        Toast.show('请输入密码');
	        return;
	      }
	      if (this.password != this.check) {
	        Toast.show('请确认两次密码一致');
	        return;
	      }
	      Toast.show('注册成功');
	      var _this = this;
	      setTimeout(function () {
	        _this.$router.go('/index/solo');
	      }, 2000);
	    }
	  },
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<div class=\"guess form\">\n  <div class=\"inputline\">\n    <label for=\"name\">姓名</label>\n    <input type=\"text\" id=\"name\" v-model=\"name\" placeholder=\"请输入用户名\" />\n  </div>\n  <div class=\"inputline\">\n    <label for=\"name\">密码</label>\n    <input type=\"password\" v-model=\"password\" placeholder=\"请输入密码\" />\n  </div>\n  <div class=\"inputline\">\n    <label for=\"name\">确认密码</label>\n    <input type=\"password\" v-model=\"check\" placeholder=\"请确认密码\" />\n  </div>\n  <button @click=\"confirm\" >确认</button>\n</div>";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(97),
	
	  data: function data() {
	    return {
	      name: '',
	      password: ''
	    };
	  },
	
	  methods: {
	    confirm: function confirm() {
	      if (!this.name) {
	        Toast.show('请输入用户名');
	        return;
	      }
	      if (!this.password) {
	        Toast.show('请输入密码');
	        return;
	      }
	      Toast.show('登录成功');
	      var _this = this;
	      setTimeout(function () {
	        _this.$router.go('/index/solo');
	      }, 2000);
	    }
	  },
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<div class=\"guess form\">\n  <div class=\"inputline\">\n    <label for=\"name\">姓名</label>\n    <input type=\"text\" id=\"name\" v-model=\"name\" placeholder=\"请输入用户名\" />\n  </div>\n  <div class=\"inputline\">\n    <label for=\"name\">密码</label>\n    <input type=\"password\" v-model=\"password\" placeholder=\"请输入密码\" />\n  </div>\n  <button @click=\"confirm\" >登录</button>\n</div>";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(99),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(101),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(103),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _assign = __webpack_require__(105);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var defaultOption = {
	  name: '',
	  hilight: false
	};
	
	var Solo = Vue.extend({
	  template: __webpack_require__(110),
	
	  data: function data() {
	    return {
	      options: [{
	        name: '',
	        hilight: false
	      }],
	      maskShow: false,
	      slide: '',
	      result: ''
	    };
	  },
	
	  methods: {
	    reset: function reset() {
	      var option = (0, _assign2.default)({}, defaultOption);
	      this.options = [option];
	    },
	    add: function add() {
	      var option = (0, _assign2.default)({}, defaultOption);
	      this.options.push(option);
	    },
	    start: function start() {
	      if (this.options.length <= 1) {
	        alert('请填写至少两个选项');
	        return false;
	      }
	      this.roll();
	    },
	    roll: function roll() {
	      var _this = this;
	      var options = _this.options;
	
	      _this.maskShow = true;
	      var result = parseInt(Math.random() * options.length + 1, 10);
	      var i = 0;
	      var t = 0;
	      _this.result = options[result - 1].name;
	
	      var finishRoll = function finishRoll() {
	        _this.maskShow = false;
	      };
	      var dealTurn = function dealTurn() {
	        options.forEach(function (v, k) {
	          v.hilight = false;
	        });
	        options[i].hilight = true;
	        _this.slide = options[i].name;
	      };
	
	      var inter = setInterval(function () {
	        dealTurn();
	        i++;
	        if (i == options.length) {
	          i = 0;
	          t++;
	          if (t == 3) {
	            clearInterval(inter);
	          }
	        }
	      }, 300);
	
	      setTimeout(function () {
	        var i = 0;
	        var last = setInterval(function () {
	          if (i == result - 1) {
	            clearInterval(last);
	            finishRoll();
	          }
	          dealTurn();
	          i++;
	        }, 800);
	      }, options.length * 300 * 3);
	    }
	  },
	  ready: function ready() {}
	});
	
	module.exports = Solo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(25).Object.assign;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(23);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(108)});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(30)
	  , toObject = __webpack_require__(109)
	  , IObject  = __webpack_require__(46);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(33)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(20);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pop\" v-show=\"maskShow\"></div>\n<div class=\"guess\">\n    <div class=\"left\" id=\"left\">\n        <form>\n            <div class=\"inline\" id=\"inline\">\n                <span v-for=\"(key,option) in options\" track-by=\"$index\" :class=\"{on:option.hilight}\">\n                    <input type=\"text\" v-model=\"option.name\" placeholder=\"请输入选项\" />\n                </span>\n            </div>\n            <button id=\"reset\" @click=\"reset\" >重置</button>\n            <button id=\"add\" @click=\"add\" >增加选项</button>\n            <button id=\"start\" @click=\"start\" >开始抽选</button>\n        </form>\n    </div>\n    <div class=\"right\" id=\"right\">\n        <span>{{slide}}</span>\n    </div>\n</div>";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(112),
	
	  data: function data() {
	    return {
	      links: [{
	        name: "地图模式",
	        link: "/index/duomap",
	        icon: "fa-globe"
	      }, {
	        name: "好友模式",
	        link: "/index/duofriend",
	        icon: "fa-gift"
	      }, {
	        name: "随机模式",
	        link: "/index/duohot",
	        icon: "fa-random"
	      }]
	    };
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "<div class=\"guess\">\n  <ul class=\"links\">\n    <li v-for=\"link in links\" v-link=\"link.link\">\n      <span class=\"fa\" :class=\"link.icon\" ></span>\n      {{link.name}}\n    </li>\n  </ul>\n</div>";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _assign = __webpack_require__(105);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	var Users = __webpack_require__(114);
	
	var defaultOption = {
	  name: '',
	  hilight: false
	};
	
	var About = Vue.extend({
	  template: __webpack_require__(115),
	
	  data: function data() {
	    return {
	      users: Users,
	      choosed: [],
	      options: [{
	        name: '',
	        hilight: false
	      }],
	      maskShow: false,
	      slide: '',
	      result: ''
	    };
	  },
	
	  methods: {
	    reset: function reset() {
	      var option = (0, _assign2.default)({}, defaultOption);
	      this.options = [option];
	    },
	    add: function add() {
	      var option = (0, _assign2.default)({}, defaultOption);
	      this.options.push(option);
	    },
	    start: function start() {
	      if (this.options.length <= 1) {
	        alert('请填写至少两个选项');
	        return false;
	      }
	      Toast.show('发送成功');
	      var _this = this;
	      setTimeout(function () {
	        _this.$router.go('/index/solo');
	      }, 2000);
	    }
	  },
	  ready: function ready() {
	    window.init();
	  }
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	var User = [{
	  "id": '1',
	  "name": '张三',
	  "img": 'data:image/jpeg;base64,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'
	}, {
	  "id": '2',
	  "name": '李四',
	  "img": 'data:image/jpeg;base64,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'
	}, {
	  "id": '3',
	  "name": '王五',
	  "img": 'data:image/jpeg;base64,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'
	}, {
	  "id": '4',
	  "name": '朱六',
	  "img": 'data:image/jpeg;base64,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'
	}, {
	  "id": '5',
	  "name": '燕七',
	  "img": 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADcANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0qiiivbPnAooooAWN2ikDoxDA5BrpLLUIrlcZxJjlTXMmobm8t9Ptnurq4SCKMZaR22gfjXPXpxkrvQ6sNVnB2jqd0GqnqWrWGkWpudQu4LaEfxzOFH614hr/AMYr1N1t4fDBen2q4XOfdFP8z+VeaajqV/rF2brUrye8nP8AHM5bHsB0A9hXkzqRi7LU92FOUleWh7j4h+NejWqtFo0FzfS/89NvlR/gW5P4CuG1D40+LLwbbT7HYLjrHH5j/m3H6V57yDnk0GsXWkzVUoo2b/xd4l1Qn7br2oSA9VWcxqfwXArEceaxeUtI3cuxY/rTqWoc2+pdkMEadlA/Cl2j0p1FK7AbtHtTWijPWNTn2qSk70rsB0Es9od1rcT27esMrJ/I1v2PjvxPpxGzVGuEB+5dIJM/jwf1rnsUYrSNWcdmTKnCS1R6dpfxcXhNX0xl9ZbVtw/74PP6mu50fxNo2vLnTr6KV8ZMZO1x9VPNfPB4FIOHV1ZlkXlXU4YH2PUV108dOPxanHVy+nPWOh9PUV4joHxJ1nRysV9nUrQf89DiVB7N3/H869X0HxLpXiO187T7lXK/6yJuHjPuP69K9KliIVdjya+EnS32NeiiitzkCjrQa1tHshIxnkGVU4Ue9Z1anJG5vQourKxDbaRNOu6Q+Wvv1P4VeGhQ4/1r/pWsBRivOdab6nrRoU4qyRxdFFFeseEFFFcn4z8Yx+HIBbW22TUphlEPKxL/AH2/oO9ZVasacbs2o0ZVZcqLfibxdY+G4AJP395IuYrZD8ze59F968a17xFqPiG6M1/MGAOY4kyI4/8AdHc+55rPu7ue8uZZ553lmlOXkf7zH3/wqDrXi18TKq/I+hoYaFFabgcnnOTS4oorlOgKKKKACiiigAooooAKKKKAE70tFFAAaTpRnrQMk0AHvSwTXFjdJd2MzwXKHKyRnBH+fSkIpMYpqTTugaurM9b8G/EiLVmj07WTHb3xO2OUcJMfT/Zb26Ht6V6HXy5LGHBOOa9L8A/ENleHRtcnLA4S3u3P5K5/kfzr18Ni+b3Znj4zA29+mesV1OmqEsIgO65rletdJpE4ksVXPzJwRWmLTaTMcC7NpmlRSA0VwnpHF0Uu0+lG0jrXsuSPn1Bt2MfxJr0Ph3RpL6UB5PuQxZwZHPQf1PsK8Cvb241C7mubqQyzzOXkcnqfb2HQCt/x74jOu+IpI4ZN1lZkxQ46M38Tfj0HsPeuXxXh4qv7SVlsfRYTDqlDzDApaKK5DqCiiigAoxzRRQAUUUUAFFFFABRRRQAUUUUAIaQU6kxQADpSkZoooATpVaRBnHYirGMGmSDK9OnNUnYHseo/Dbxu1w0egapKWmHFpO5++B/Ax9fT1r1izu2tJ968qeGHrXyirOjq6MVdCGVlPKkdCK9+8CeKB4l0FWmZft1tiO4UdzjhvoR+ua9fDVVVjyTPFxlB0pe1pnqdvdxXCAo/1HcVPmuOVmQ5UkH1BxU3266HAmf86bwjvoyY47TVF8WQ9K5L4iap/wAI94SuJIn23dyfs8B9GbOW/BQT+Ar0FkAGa8A+NGsteeLoNLjc+TYQAsB/z0k5P/joH5141LEVJNqT2PRjQhzJ2PNlGAABwOKdSD1paR2BRRRQIKKKM0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFAoADTT0Gac39Ka33RQhlb19q6XwFr3/CP+LLWWR9trdEW9x6YY8MfocH6Zrm2HzsBTWGRg962hJp3RlOKkrM+umsSOo5pv2I9wao/D3XP+Ej8DadeSNunRPImPfenyk/jgH8a6TbmuWtja1OXLc5VhabHu2VNfJniHUP7X8T6pqOcie6kK/wC6Dhf0Ar6h128+weHtSvM4MFrLID7hSa+SIMiFM8nAzUYV3puXc64IkooorcsKQmg0nqKADNOphyG9qWgY6g8UlJ2zQIXNGaTNA44oGLnnFLTT1zThQIKKKQ8UALRTVNOoAKKKQmgBe9ApvQUuaBitSN90Up5pD0+lCEVm++2PWm9TSk5YmkzWhPU9o+Auqts1nSWbgMlzGM+o2t/Ja9nr5w+DN2bfx/FCDxc20iH8MN/7LX0fxXm412q6kWOU+ItwYPh7rjA4LWrJ/wB9EL/WvmVeAPpX0d8USf8AhXOrEf3Yx/5ESvnEdB9KeWtvDJs1Q6igUV2gFGKKKADFGKKKAEwBScEkelBOBUEMm+R17gAmq5dLgWMc0AhhxUUrhI2b0FR2blolJ7jNHLpcL9CyQKWkFLUgFFFFABRRRQAUUUUAFGKMigHJoATjBpjOQhPtTzx071DO3QU0DIscUhpQeKQc5qyFudb8MZPK+JGhMOMyup/GN6+ny3Jr5Z+Hp2/EHQvX7T/7K1fUnJrws6quMoJdhpas5D4kIZvh3rIAyVgD/wDfLKf6V83jkZr6h8RWx1Dwrq1oBlpbOVQPfacfrXy5Ed0Sn1UGuvLX/s9uzK6j6UUg4NLXcMKKKKBCZo9KD9aa0iIPndV+pxTUW9g23GyHEbVBbxPHMzN0lXcv0yR/Sia8t8YEqn6VLdX9l5emmOdSVs1WUAH5X3uSPyIraMHytEOSuJcRmXbEvVyFH4kCo7YFAq+mRTre/tf7RtHMyhFnjLEjoAwJpsk0AuZhHKjKJH2kHqNxwabi+UFJcxbHSlJxTFcMMhhS59KwcWaC5pabkdyKNy+v60WAdSZqOSeKJcvIqj61Sk1iJSQiM/v0q40pMlySNHNLWMdZc9IV/E0g1iTPMSfrT9jIn2kTapO9ZQ1n+9D+TVImrQuQCpX60eykPniX2OKgb5iSaQy+YoIIKn0pcjFK1gbGkcUijnFO+lAHrSEjp/h2vmfEPQxzxOW/JGNfUOfevmz4UW5uPiJYHtDHLIf++Mf+zV9IkHtXzueP99FeX+Y0Nisy8JL8Bh0xXyjq1g2k61qGmuObW4kiHuAxwfyxX1xFcI8QGRkDkV88fGHSjY+O2vY1xDqMCy5xxvX5W/Tafxr2MM6ahywFFu+pwQpaTpSdelb2NBQaT6mtLQ/D+q+I7o22k2jTsv35Cdscf+8x4H0612f/AApTxC8Q3ajpquRkgByB7Zx/Sr5e5Nzyq/v/ACD5UeC/c+lZqxyXD7mcfVjUupWrWusXVox3PFM0ZIOckEivpy00Xw94J8K2c96ttEyQLucQqZJX25OO5PX6V0P3EkjJe87s+b7bw7fXYzb2t1P/ANcrd2/XFdVqnw2Gn+G9PvmvY4b6YBri2u50i2Ajtn07irvif4q6jqMzwaU7afYjjfHgyt+PQfh+Zrz661OSaVpACXPWSVvMc/Un+lWk+om10Na28O6b5o+2+IbG3jz83lLJO3/jq4/Wkm8N2Mly0en+ItOnX+Hzw8Bb/vpcD86597iV/vSOfq1Ptp1juI3liWZFI3RsSAw9MjmmRe5fvtI1fQtj3UDxxP8AckBDxv8ARhkH86t6GsWrXgtrjUbWwZuEe4VthPpkdPxr27wl4G0y50SK80u4a70LUogZ9PvDu2HoSjDoynI5HbrXg3iXSToPifUtK3Fha3Dxq3qoPB/LFQmpFu8TtbnwXbWUZkufF+hoAM/KxY/gAcmuIv7pYrl4rS4E8Q4EvllN3uAT0rt9J+CniPVtEh1JLiygWeISxxSu28qRkZwCBmuL8P6YuoeKtO0y5LBJrtIZMdQCwBoXLuDbLvh3wZrniqbNlAfJBw9xKcIv49/oK7mT4ItbQGa61+CJF+8zQEKPxLCvYPEOqQeDPDA/s6wT92ojt4lGEB6AHHJJOAAOST9SPm7xxrviO/1qWDXb13mjIJtwcJCSM7Qo4BGee/vSi3PUbSiXdR8LeGdLGJPFSTN2EFi7g/jux+tZP2bw0ZNv9q3f1/s8f/Ha6nS/gx4o1/wymupcW4M0XmwwSu3mSLjI7YGe2TXmrBo5CDkMpwfY1djPmPQNK8F+HNckWG18XWyStwI5rUxMT6fMwB/Cr/iX4LatoukPqNlcLfJEC8iLHtYL6gZOa89i1e5WMRS7Z4x/DMN2Poeo/A13fgj4kapol3FaRu15YOdrWNxJnH/XNj0+h4pNPdFXTWpw+i+VJqltb3U7QW0sqpJIF3bATgnHtXuc/wACoDBm01+YSY486BWU/kRXiXiaO3i8UaiLON4rc3DtHG67WQE5AI9s4r7D0xi+l2jnkmFCfyFZVXbVF09dD5h8T+EdX8JXiw6lCDDIcQ3ERJjk9s9j7GsOvq3xPoNv4k8PXemXCg+anyMRyjj7rD6HFfKW10LI6kSIxVh6EHBqL3Vyz1X4E6abjxHqd+y/u7e2WIH/AGnbP8k/WveHjAbivENK8UW3wv8ADMOmQ2gutdu1F1cozbUhLD5VYjnO3HH8qxpvjB4wllLpJYRqeiLbkgfm2a4cXhViNXoSlIg0T4o+JdKuUN1crqNvn5op1Ctj2ZQMH65ruPF02nfEf4fPqWktuvtPbzvIP+sTj50I9xkjscCvEHkC8d6s6Tqj6fqCSGR1t3ISdVJAdM8g46jviuqNGLmpbM1jBSklexAGBAI5BFWLGxn1PUrTTrb/AF91MsKH0JPX8Bk/hVrW9PSxvhLbENZ3PzxMpyAe6/4VsfDYRn4jaP5mMBpdv+95bYrTl5ZWHUjytxZ7/oGg2XhzR4NNsYwscS8tjl27sT3JrTYcClBxxSMeKyvqZrsfHHiuH7J471iMjAS/l/8AQzXb/EDUL/V7GbUZ2fyE2pGqjjaTgfReDjuxBJ6cYXxcsDp/xK1Q4wk5Sdffcoz+ua7qSOHxT8DJZbTMl9BiW4J5YvHgH8NnQeldjezMlG90ee/DHQ9O8S+OrDTdWkxaMWdkLY8wqMhc+9dx8c/CXh3QU02TRbSK1upNwlhg6GMYwxHbnjPevGomkjmUxsUcHKsDgg10dh4m1qwttTgW8Mq6lCILlpl8xinoGOSOprSxkc3HE0jEDjHemshjfB6itBEIYIi5LHAAHJNMvdOvLW4RbiBo2flQe9IaTZ9D/A25kl8BPG5O2G8dEz6EKf5k14l45mGqfEbWXh+YSXrouO+Dt/pXs+hyp8OvhK0918l15Zl2HqZX+6v8s/Q15P8ADPQpvEvj20aRS8MEn2q4c+inIz9WwKxjonI6Jx1UT6nsoBaWFtbrwIokjA+gAr5bvrVPDXxj2ONkMGqpIM9kLhh+hr6oDcCvn/486C9tr1nrsSfurmMQyMOzp0/Nf/Qaii9Wgmtme8yhJFAdVYAgjIzgjoa+UfiZbm3+ImtK2fnuPMGfRgG/rXt3w28bR+JvDkVvPLnUrNBHMD1dRwH/AB7+9cJ8Z/DUr3sXiC2jLoyiK4A/hI+6x9scfhRTfLKzNZ0+enzRK/h34261p2hWegSR2sUUarbi/Kszwx9M7ejFR0+lefa5ZWEevXUWk3z3tgrfu7l02F+OeD75qksqAAHj6ipDPEo4bP0rpOJorTxCPG0nn1ra8EWovPGmkQuiujXSb1YZBUHJyPTANZ9xYS/ZhclgcgHaOwNdX4Ytz4b8P3/ii5GyV42tdODdWkcYZx7KM0m+hcYvdnPaoE1PxddJaKfLnvGSEZJO0vhRk8njFfY9tGILeOIdEUL+VfLPwo0N9b8eWTlN0Fm32mU9ht+7+bYr6glvY4VPO5sdBWFZ+9Y1pqyuWJpUjxvIGTgV8pBrO61vU76Zv9FSaWZQoPzkudq8evFepfET4hQ21tPpemXCy6jKpjkePlbdTwef73tXlW97Hw5DbISovpTK47skfyr+G4v/AN8ilBcqKUrO5WuNQur2d7q7kMtxKd0jt1JqLzmPYUztSYqWTcdxzTelLSdaANzwkNOuNXTTdVjJs74eQJMnNvI33JF7ZzgH2JqW903V/AvieFLhALuznFxbuPuzKD1HseQfSsO2SSS7gjiBMjSoqY/vFhivo34j+Cv+Eu0ONrbA1KzzJbnpvyOUz74/OsKuJVKrCMnpIDe8OeIbLxLo8Oo2Mm5HXDoT80bd1b0IrVc5r5Q07Vda8MajI9lcT2V0h2SqOMkdnQ8Guwi+MnitYtjRaZKwH33gdT+QbFbuC3uUjY+OnhaW9sbbxBapua1HlXAA52E5VvwJI/GvMvAPjaXwjqUiTKZtOucLcQ/+zD3/AJ13Wk/FPVZtZQeIWt5dKmUxTQxwAKobjd3Jx3HoTVDxn8I5Uc6l4YK3FpKPMFsG+ZQefkP8Q/X61rGStysOWV+aJleJfAkd4W1rwnIl5p0x3+TGfniPcY/p1rhpre+tnMc0MkbjghlwatWt5rfhq8YQvc2cw++hBXP1U9a6CP4na8EAmhs5yP4ni5P5EVSclsx2pS+JNMwtJ0jWLu9ilsrWaSRGDA7eAR6npXqllo1rpvk634qmtY/swzDADlVb1P8AePHAFcLcfEjxHcLshMFvn/nlFz+uaqW2geJ/Fl0srx3M+f8AltMSFX8Tx+VS3f4mawUV/Ci2+7L3jXxheeONWhtLSOQWSNtt4ByXY8biPU+navcPhr4PTwl4eUSqp1G5w9ww7eifQfzzWH4D+HVn4bdb25ZbnUez4+WP/d9/evS4/uisZ1E9FsP2LjrLcnBPrWT4l0C08TaFc6ZermOUfKwHKMOjD3FaoHWlI4rJNp3RCV9GfJl9Y678OfFIw7QzwnMcq/cmT+oPcV6fonxK0bxFZi21Ly7S5Zdskc3+rk+hP8jXo3iPw7pviKwaz1K2WaPqrdGQ+qnsa8W1/wCDF7bSPJo94lxFniKb5HH49D+lb88J/FoaU41KTvT1RY1n4a6dqLm40m7SANyE++n4Ecj9awP+FU6qG5u7MIP4tzf4VlSeB/Fli5UafdA+sR3fyNJ/wini24G1rK/Yej5/rVqy+0OS59XS1Og/sfw34ajD63qv9oSR8rZ25yCfQ8/zxXL6/r994s1OJFh8uGP93a2kQ+VB2AHcmtvTvhV4gu3BuRFaR92lfJ/IZr0jw34J0jwnE97KwlnjUs1zKAAg7kDt/Oj2kVtqyJUpyV5qyOLu7OfwH4asbS3upbfWr5zPcPDIQUjAwE9DyR+Oa5+68Qa5fRGK71m+ljI5TziAfrjFdLrWg+J/FmsS6rFpcwtpMLbB2VcRD7p5PfOfxqfTvhRrVy6m+ngtI+4U+Y/4Y4/WuepjKMPimjnco9DkNF0a51vU4dPsU/eOeWxwi92PtW149sI9L8QQadCD5NtZRRx56nliT9SSTXsXh/wzp3hu0MNlEd7Y8yZ+Xf6n+lcz8SPCNxrUMOqaehku7dSkkQ+9InXj3Bz+defRzSFWvybR6epKetzxvNLTG3RTPHMpjYHlXG0j25pwcHoRj2r1Witw5Bo6E5NIj7iQTyDipbazmv7qK2toXnnkOEjQbiT9KLW1YHe/CHwsuveIm1WdgbXTmVlT+/JyV/Adfyr6IUHFcl8O/CreFPDMdvOF+2Tt51xg5wx6L+AAFdcDXymPxPt8Q2notEUtjlfFPgDQvE48+7heG7AwLmAhXx6Hsw+tefT/AATn80/ZddjKHp51sQR+INe0yIZFwOvpSC0k4Jx+ddeHrYnk913Q/dtqeSWPwNQODqOts691t4Ap/Nif5V0h8O3ng+2QaMlxqGlKAJbR33TRY/ijJ6j1X8vSu8xjqKSkswrRneT+Qotp3R58/wDY/iO3YqtvdBeHjlQb4z6MpGVP1rJk8FaAXJOkWuf+udd7q3hbSNZlE9xbFLpR8tzA5jlH/Al5/PIrFl8LeILMH+ztZgvIx0i1KH5v+/iY/UGu+njaM93ZnbTxij8SuYtr4d020YG3sLeM+qxAH862YLY8cVXLeJbQ/wCk+GvPA6vY3aPn/gL7TSr4jjg/4/NE1u2I6lrFnH5pmuhOMtpJ/M2ljYNaG5bxbRWgg4rmk8a+H4x+9ubmE+ktlMv/ALJUn/CwPCcbDfrEak8ANFIM/wDjtaqDZx1KykdOq+1BXJrmT8R/Ca9NXRv92Jz/AOy1Xm+J3hmOMuLqV1HUi2lx/wCg0/Zsw5kdQ8eRg1TmgB4xzXPv8QbSXIt9P1KX/csZP6gVXfxbfz5EHh/WXz6xxxj9WrNuK3kl8zaFdRNqa1UcsQPrVRkjB+Xn6VktqXiKf/VeHNn+1c3qD9FBNRmx8VXzfvr6w06I9RbRmWT/AL6bAH5VjLE4eGspo1+u20Rfvr200+2Nxe3EcMS92OPwA7n6VlwWtz4okSW8gktdHRg0dvIMPckdC47L3x371q6X4R09L9J5fNvbwf8ALxdv5jL/ALo6L+Arp5tNVIiyMxZRnB715WKzeP8ACorfqc9SpOrvsZ6pgDGAB0FP3Cmhh0p8ED3Em1QOmSfSvFlK2rMErsbuB47U0jJFaX9lrtx5jZ+nFUJYnt5CjDnOc+tRGalsVKNkYniDwtp3iWzFvfREMvMcyHDofY/0rgJfgzeCVvs+tQmL+HzYDu/Q162pzV6OIFBXoUcxxFFcsZaBGNzltJ+EPhKxVzc2j38jDBa5fp9AuMV1Ok+GtE0IH+y9MtrUnq0afMfxPNSwXOep5q0JQe9XicVUqRs5DSW5J0pcjOKjL+9AII615cpNPQuxZh6/hVg1QWTbyDUhuGPGK93D5lSo0lGe5nKDb0HysN2KZioiSeTTg+BXmRxPtZu5XLZD6CwAyaYZB60x3BUitbjt3HrKrtgdar3l/Zaeu+8uoLdexlkCZ/OsHxJqdzaQWun6WVOrajN5FtkZEfd5CPRVyfritjRfB2laQol8r7VfkZkvbr95M57ncen0GBXt4PLVVhzzZnUkouyOH8QfEvE8tnoUCylCVa7l/wBWCOu0DlvrwKwdB1i+1vxPYWmt6kHjila4tz5QUySFdpQkcAAEkDHOevFX/ib4abSNXbXbZT9hvCFulA4il6B/o3Q+/wBa4qSIOgALKykMrKcFGHQivZhQhTjaCPpsJl+GxuCvR+NH0ClpboABCn5Cs/X9GttV0K9spCIFliI81QMoeoP4EVy3hP4gxzxx6frzpb3YwqXTcRz+mT/C3sfwqp458YLcRy6LpMgYNlLm4U5CjuinufX0qFGXMePTwVWpX9g1qclF4t8QW6yXDX8NyhYkJJAApGeMYII/Emus0TxpaX+jQ319bXFmH+9KYWaHIJH3wMAcd8V5tqsy2unNjgbensK99+HmiHSPA+m2syASNArSAjuRnB/M1FbAUKytJHRnVOlh6sadLotTOt7iC7hE1vLHLEwyrxsGB/EVagiM0oXOPU+1ZPiTSoPC3iGx1KxjEFhqUv2a7hQYjWUjMcgHQEkFT65FdBYW8hIlGApGPrXy2Owiwlbleqex5VN8z1LMUMcXKKAfXvVuDZI5jkHVfXrUPr2xWbe3AaVRG33O4NTGcITUrXNZ2aLF3pha722qZXGTzwD9alsrWW1Z1lTBOMHrWlp6KlnHg5yMk+ppuoyCOzkYHDAcH3rsxWCpToOot9zCLsyM1Ru7f7QykNgrntVb+05tuNiZ9cVLHexmMFyQ/fivGoUlG/MbJp7lTYY5CjDkHmtGEgRis55DNMXA68Yq9HBNsGYzTcJb20IT1KCy4xzVhboirV9FF9mZtoBHQgV57qKR6t4um029urhLS3s45FgimaMOWZgS23k9AK78qwf1+pyN2sZVqnslzHdte28Me+5uYoVx1kcL/Osy58X+G7UHzPEGmAj+H7UhP6Gufh8LeFYGyulWjt13SR+YT+LZq9FZaLb48nT7NP8Act1H8hX1MeG8OlZs5ZZjppEc3xI8KrwNYjkPpEjv/IGpo/iT4fdMx/2lMw7RafM3/stOW5tYxhU2jH8K4oN9D2D1v/q1hGtUczzRroIfiDZt/qdE8QS/TTyv/oRFQP43vJHzD4W1pl7b0jT+b1P9viz916P7RTHCNW1Ph7Bw2iS80kQJ4u1nHy+Drtz/ANNL2JP5E0kniXxLKv7nwjBGf+mmqr/RDU/9oL/zzP51m67rkmn6RPLbxbrpgI7dc8tKx2qPzIronleGhC7iFPHVKkuVF/wAL3xBr2oeItUt4oGtM6faxxSeYgIOZWDYGcnC5x/DXR67450Tw/qEOnXM7yX8y7ktoU3OR/IfjV3wvoqeH/DljpqHcYYwJH/vueWb8WJNefeJdIs774i6jBe26TJPp8EoDjPRnU/0rz69WOHpOdtEetRp+1nynRah4wsLqzmttW8Oa7HZTIVkeSwLptPrsJOK81vvDDJAb3wxP/buls21RbkNPAeyuO49+CO471sR6Lq+hNv8PazdW0Q5+zu3mx/98Nx+RFV214f2gLjXdKksb4cHWNFJRx/10iP3h9d1Y4fMMPX+F69mdtP61gpc1Jlrw/8ADLUr/bc62iRx8FbQnKj/AH/7x9un1qz4j+Gcdnby3lhdRWO0F35Ah+rKeB9QRXTWHiXWIrBJVig1+3lISC+sGC5YnA81OdvuVzj0FUPEQsNMjj1Hxfcf2resc2mlwr+5Deixn7xHd3/Su1tJXZyrEV3U57vmPN/DOjXGp6qt3caVcazHbv8AuorTC20jA8FpXwNvsM+9ekXXxNuNJdob/RIRKg+aCzv1nkUe6hQBx6kVzc+oeIPFR8qeU2FgBgWVm21VX0dxy30GBT7zTbTR9HitbaJFe6uYbUlVxkSSKp/QmvOeZU5VlRp6tnRUw9SSdas9T07xBpKeJ/DFxYyAxm4hzGT1jfqrfUHB/CvOdF1fxzdaXFIk+iBlLRuksEu5HUlWBw3XINevEhVx7V5ffSQWvizU4bC6jkgn23DLC4YRSn5XBx0JwD+Jr1aWHpV58tSNzx8TVnShzRM2e98bCd976EzZ5wko/rUf9oeNMf6rQ8+u6WtRmLMWJJPqaTcfWu3+y8J/Ijy3mFfuU7fXPHdtxE2hqp7FZWH86LvVfHN5/rLzRkUdkgk/q1XMmjJ9av6hhuXl5dBf2hX7mUH8YE/NrGnL/u2RP82pMeLs/wDIes//AAAH/wAVWrk0ooWX4X+RC+v1+5RttT8Y6dOJfM0nUVH8EkbwN+BBI/SthfiLrCDbceEJjIOphvY2U/iQDWbf3sen2puJY5pEBAIhjLt+Q5rK/wCEz0EffvWjburwSAj8NtZ1Muwnw8tjpp4vEtXWp3kksj4Ejs2PU15t42jt4/Glm1zZ31zFdWLR7bTcGLI+4dCM4BOfwr1u7jRoWYj5lGQa8/8AGoEVx4fulH71dSSIH/ZdWDD9BXw+RP2eMUe57OJVoM5H7LpA6+HvE35yf/F1rWHhnR762Wf7JqVvkkeXcXEisMe26uozwDXK3/iW8tZHVIrchSQNyn/Gv0JxjB66nhRnKsrR0Omt4EtbaOCPdsRdqhmLHH1NPx3rzu58e6rF92Cz/FG/+Kq34U8Z6lrmu/YrqK1WLy2bMaMDkfUmrVVPQxnhpKLk2dzg0lONN71bOVjqqXcUou7K/gSCWWxl85IrjOxjgjJI6EZyDzj0q3mob3/jwuccfum6fSpqpSg0zbDycaiaOj0f4hG7023vNR0HUrSCdA6Twx/aIyD3ymWH4qKwdX1jTdU8f2Nzpt3DcLLpssbiNvmUrIrAMOoPzHrXQ+CDnwLoR/6cov8A0EVwPjyyGmeNTrlrPKl21uFIO0pjBHQj+tfK117enOl3PraK9nNTOuqvd2UN4m2Rfm7MOoryiT4l69byBNtm/u8R/oRXTeHfGmo6tOI7iG1UH+4jD/2avnHlVSnqpI9VYqMtLFbULOfTtfS2jnubaOeF3Y2szRCQqVAJ2kZ4JqXRNNa71+7UvK6xxR5klkMjDO7PLEnmpPG8si67oEUbmM3HmxM6gbgCUzjORnj0rQ13Ql8FfY9R0zUL+SS4nigmS6lEiOpJ6jAIPJ6EV60qFSeGtzdDlVWKq7dTpoYI7eERxKAorlviLqU2jeHrfUbdUM1tfQyoHGRuUkjP4iutrktUgj8ReOtN8N6gu7TdhunReDIy5wCf7vsMV5OUUW6/tL7HTjJpU7dzp38NahrEEdxrWr31+jqH+zRyeTDyM42Jgn8SawdGSKE6jaQRJFFbXskaIowAOCP516ccRxAKAAq8CvLdAYyDVZm5eTUrgsfo2B+gFfbZZJym2z5fNElSSNY9aTBpTS4r2bHz42inU0HmiwCgUvf2pKXvTGgzSHB7VFdytBZTzqAWjjZgD0yBms7TtVnvLGOeRIwzDkKDj+dROoouzN6dKUldM//Z'
	}];
	
	module.exports = User;

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div class=\"guess\">\n  <div id=\"allmap\" class=\"map\"></div>\n  <ul class=\"userlist\">\n    <li v-for=\"user in users\">\n      <img :src=\"user.img\" />{{user.name}}<input type=\"checkbox\" :value=\"user.id\" v-model=\"choosed\"/>\n    </li>\n  </ul>\n  <div class=\"choose left\">\n    <form>\n      <div class=\"inline\" id=\"inline\">\n          <span v-for=\"(key,option) in options\" track-by=\"$index\" :class=\"{on:option.hilight}\">\n              <input type=\"text\" v-model=\"option.name\" placeholder=\"请输入选项\" />\n          </span>\n      </div>\n      <button id=\"reset\" @click=\"reset\" >重置</button>\n      <button id=\"add\" @click=\"add\" >增加选项</button>\n      <button id=\"start\" @click=\"start\" >开始抽选</button>\n    </form>\n  </div>\n</div>\n";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(117),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	
	var About = Vue.extend({
	  template: __webpack_require__(119),
	
	  data: function data() {
	    return {};
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	var Msg = __webpack_require__(121);
	
	var About = Vue.extend({
	  template: __webpack_require__(122),
	
	  data: function data() {
	    return {
	      msgs: Msg
	    };
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';
	
	var Msg = [{
	  "title": "chen邀请你参加选择",
	  "time": "2016－08-12",
	  "info": "关于如何回答老板的问题",
	  "link": "/index/select/1",
	  "type": "receive"
	}, {
	  "title": "您向好友发送选择",
	  "time": "2016-8-13",
	  "info": "女友生日我该送什么",
	  "link": "/index/select/2",
	  "type": "send"
	}, {
	  "title": "您已经参与tt的选择",
	  "time": "2016-08-15",
	  "info": "我该考哪所大学",
	  "link": "/index/select/3",
	  "type": "attend"
	}];
	
	module.exports = Msg;

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div class=\"guess\">\n  <ul class=\"msg\">\n    <li v-for=\"msg in msgs\" v-link=\"msg.link\" :class=\"msg.type\">\n      <p class=\"title\">{{msg.title}}</p>\n      <p class=\"time\">{{msg.time}}</p>\n      <p class=\"info\">{{msg.info}}</p>\n      <p class=\"link\">点击查看</p>\n    </li>\n  </ul>\n</div>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _require = __webpack_require__(13);
	
	var reqwest = _require.reqwest;
	var utils = _require.utils;
	
	var Toast = __webpack_require__(90);
	var Options = __webpack_require__(124);
	
	var About = Vue.extend({
	  template: __webpack_require__(125),
	
	  data: function data() {
	    return {
	      options: Options
	    };
	  },
	
	  methods: {},
	  ready: function ready() {}
	});
	
	module.exports = About;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';
	
	var Options = [{
	  "id": '1',
	  "num": 4,
	  "name": "xx",
	  "choosers": [{
	    "name": "",
	    "img": ""
	  }, {
	    "name": "",
	    "img": ""
	  }]
	}];
	
	module.exports = Options;

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<div class=\"guess\">\n  <div class=\"select\">\n    <div class=\"info\">\n      {{select}}\n      <div>{{select.title}}</div>\n      <div>{{select.time}}</div>\n      <div>{{select.info}}</div>\n      <div>总人数{{select.total}}人，已经参与{{select.attend}}人。</div>\n    </div>\n    <ul class=\"options\">\n      <li v-for=\"option in options\">\n        <span>{{option.num}}</span>\n        <span>{{option.name}}</span>\n        <ul class=\"chooser\">\n          <li v-for=\"chooser in option.choosers\">\n            <img :src=\"chooser.img\" />\n            <p>{{chooser.name}}</p>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\"";

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">\n  <router-view></router-view>\n</div>";

/***/ }
]);
//# sourceMappingURL=index.js.map