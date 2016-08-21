webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(128);


/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _promise = __webpack_require__(14);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(129);
	__webpack_require__(134);
	__webpack_require__(138);
	var queryString = __webpack_require__(3);
	var range = __webpack_require__(140);
	
	var _require = __webpack_require__(13);
	
	var utils = _require.utils;
	var api = _require.api;
	
	__webpack_require__(154);
	
	// reqwest('/api/hello').then(function (resp) {
	//   console.log('AJAX', resp);
	//   // setTimeout(a => {
	//   //   var head = document.getElementsByTagName('head')[0];
	//   //   var script = document.createElement('script');
	//   //   script.type = 'text/javascript';
	//   //   script.charset = 'utf-8';
	//   //   script.async = true;
	//   //   script.src = 'https://www.google.com/xjs/_/js/sdch=d/k=xjs.s.zh_CN.b4mFbpNvW4I.O/m=sx,c,sb,cdos,cr,elog,jsa,r,hsm,qsm,j,d,csi/am=AJQ0C4ZE_D8EhFsIFqQGDIwC/rt=j/d=1/t=zcms/rs=ACT90oEPwy3Z6bLEi3WHP0RnALmVKYTrRg';
	//   //   head.appendChild(script);
	//   // }, 5000);
	//
	// });
	
	api.get('osdeal/order/review/init').then(function (resp) {
	  console.log(resp);
	}, function (e) {
	  console.error(e);
	});
	
	api.post('osdeal/order/review/init', queryString.stringify({ fuck: 1, love: 2 })).then(function (resp) {
	  console.log(resp);
	}, function (e) {
	  console.error(e);
	});
	
	var RootComponent = Vue.extend({
	  template: __webpack_require__(157),
	  data: function data() {
	    return {
	      items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }],
	      swiperData: [{ link: 'Aha1' }, { link: 'Aha2' }, { link: 'Aha3' }],
	      nums: range(0, 100)
	    };
	  },
	
	  methods: {
	    showUA: function showUA() {
	      this.items = [{ text: 'Item 4' }, { text: 'Item 5' }];
	      // var queryString = require('query-string');
	      // console.log('Query', queryString.parse(location.search));
	      // KNB.use('getUA', {
	      //   success: function(ua) {
	      //     alert(JSON.stringify(ua));
	      //   }
	      // });
	    },
	    onRefresh: function onRefresh(e) {
	      e.promise = new _promise2.default(function (resolve, reject) {
	        setTimeout(function (__) {
	          resolve();
	        }, 2000);
	      });
	    },
	    onTouchEnd: function onTouchEnd(e) {
	      console.log(e);
	    }
	  },
	
	  computed: {},
	
	  ready: function ready() {
	    console.log('ready');
	    // setTimeout(__ => {
	    //   this.swiperData = [
	    //     {link: 'Aha1'}, {link: 'Aha2'}
	    //   ]
	    // }, 5000);
	  }
	});
	
	new RootComponent({ el: '#app' });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	__webpack_require__(130);
	__webpack_require__(132);
	
	Vue.component('pull-refresh', {
	  template: '\n  <div v-el:wrapper class="dp-pull-refresh">\n    <div class="dp-pull-refresh__indicator">\n      <div :style="pullRefreshTipStyle">\n        <i class="fa" :class="[canRefresh ? \'fa-long-arrow-up\' : \'fa-long-arrow-down\']"></i>\n      </div>\n    </div>\n    <div v-if="isRefreshing" :style="loadingStyle">\n      <div class="dp-loading dp-loading--pull-refresh">\n        <div class="dp-loading-leaf dp-loading-leaf-0"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-1"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-2"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-3"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-4"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-5"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-6"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-7"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-8"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-9"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-10"></div>\n        <div class="dp-loading-leaf dp-loading-leaf-11"></div>\n      </div>\n    </div>\n    <div class="dp-pull-refresh__content" v-el:main  :style="mainStyle"\n      @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">\n      <slot></slot>\n    </div>\n  </div>\n  ',
	
	  data: function data() {
	    return {
	      translateY: 0, // the translate Y for content to show the underlying pull refresh tip
	      pullEnabled: false, // allow scroll
	      startY: 0, // touch start Y
	      isRefreshing: false, // pull refresh is happening
	      canRefresh: false //
	    };
	  },
	
	  methods: {
	    onTouchStart: function onTouchStart(e) {
	      this.startY = e.changedTouches[0].clientY;
	      if (this.$els.wrapper.scrollTop === 0) {
	        this.pullEnabled = true;
	      } else this.pullEnabled = false;
	    },
	    onTouchMove: function onTouchMove(e) {
	      // console.log(e);
	      var deltaY = e.changedTouches[0].clientY - this.startY;
	      if (this.pullEnabled && !this.isRefreshing) {
	        if (deltaY > 0) {
	          // pull down
	          this.translateY = deltaY / 2;
	          e.preventDefault();
	          e.stopPropagation();
	        }
	      }
	    },
	    onTouchEnd: function onTouchEnd() {
	      var _this = this;
	
	      if (this.isRefreshing) return;
	
	      if (this.pullEnabled) {
	        this.isRefreshing = this.canRefresh;
	        this.translateY = this.isRefreshing ? 60 : 0;
	        if (this.isRefreshing) {
	          var e = {};
	          this.$emit('trigger-refresh', e);
	          //console.log('promise', e);
	          e.promise.finally(function (__) {
	            _this.isRefreshing = false;
	            _this.translateY = 0;
	          });
	        }
	      } else this.translateY = 0;
	    }
	  },
	
	  computed: {
	    mainStyle: function mainStyle() {
	      return {
	        transform: 'translateY(' + this.translateY + 'px)'
	      };
	    },
	    canRefresh: function canRefresh() {
	      return this.translateY > 50;
	    },
	    pullRefreshTipStyle: function pullRefreshTipStyle() {
	      return {
	        transform: 'translateY(' + (this.translateY - 30) + 'px)',
	        display: this.isRefreshing ? 'none' : 'initial'
	      };
	    },
	    loadingStyle: function loadingStyle() {
	      return {
	        transform: 'translateY(' + (this.translateY - 30) + 'px)'
	      };
	    }
	  }
	
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./pull-refresh.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./pull-refresh.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".dp-pull-refresh {\n  position: relative;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 100%;\n}\n\n.dp-pull-refresh__indicator {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  position: absolute;\n  background: #f0f0f0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n}\n\n.dp-pull-refresh__indicator > div {\n  color: #88888c;\n}\n\n.dp-pull-refresh__content {\n  background: white;\n}\n\n.dp-loading.dp-loading--pull-refresh .dp-loading-leaf::before {\n  background: #88888c;\n}\n\n", "", {"version":3,"sources":["/./src/components/pullrefresh/pull-refresh.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,iBAAA;EACA,kCAAA;EACA,aAAA;CADD;;AAID;EACE,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,mBAAA;EACA,oBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;CADD;;AAGE;EACC,eAAA;CAAH;;AAID;EACE,kBAAA;CADD;;AAID;EAEI,oBAAA;CAFH","file":"pull-refresh.scss","sourcesContent":["@import \"_var.scss\";\n\n.dp-pull-refresh {\n  position: relative;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 100%;\n}\n\n.dp-pull-refresh__indicator {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  background: #f0f0f0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n\n  >div {\n    color: #88888c;\n  }\n}\n\n.dp-pull-refresh__content {\n  background: white;\n}\n\n.dp-loading.dp-loading--pull-refresh {\n  .dp-loading-leaf::before {\n    background: #88888c;\n  }\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(133);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./loading.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./loading.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".dp-loading-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.dp-loading-container .dp-loading-content {\n  margin-top: 64%;\n  font-size: 14px;\n}\n\n.dp-loading-box {\n  position: fixed;\n  z-index: 3;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n\n.dp-loading {\n  position: absolute;\n  width: 0px;\n  z-index: 2000000000;\n  left: 50%;\n  top: 38%;\n}\n\n.dp-loading-leaf {\n  position: absolute;\n  top: -1px;\n  opacity: 0.25;\n}\n\n.dp-loading-leaf:before {\n  content: \" \";\n  position: absolute;\n  width: 8.14px;\n  height: 3.08px;\n  background: #d1d1d5;\n  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n  border-radius: 1px;\n  -webkit-transform-origin: left 50% 0px;\n          transform-origin: left 50% 0px;\n}\n\n.dp-loading-leaf-0 {\n  -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;\n          animation: opacity-60-25-0-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-0:before {\n  -webkit-transform: rotate(0deg) translate(7.92px, 0px);\n          transform: rotate(0deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-1 {\n  -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;\n          animation: opacity-60-25-1-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-1:before {\n  -webkit-transform: rotate(30deg) translate(7.92px, 0px);\n          transform: rotate(30deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-2 {\n  -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;\n          animation: opacity-60-25-2-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-2:before {\n  -webkit-transform: rotate(60deg) translate(7.92px, 0px);\n          transform: rotate(60deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-3 {\n  -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;\n          animation: opacity-60-25-3-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-3:before {\n  -webkit-transform: rotate(90deg) translate(7.92px, 0px);\n          transform: rotate(90deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-4 {\n  -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;\n          animation: opacity-60-25-4-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-4:before {\n  -webkit-transform: rotate(120deg) translate(7.92px, 0px);\n          transform: rotate(120deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-5 {\n  -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;\n          animation: opacity-60-25-5-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-5:before {\n  -webkit-transform: rotate(150deg) translate(7.92px, 0px);\n          transform: rotate(150deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-6 {\n  -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;\n          animation: opacity-60-25-6-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-6:before {\n  -webkit-transform: rotate(180deg) translate(7.92px, 0px);\n          transform: rotate(180deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-7 {\n  -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;\n          animation: opacity-60-25-7-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-7:before {\n  -webkit-transform: rotate(210deg) translate(7.92px, 0px);\n          transform: rotate(210deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-8 {\n  -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;\n          animation: opacity-60-25-8-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-8:before {\n  -webkit-transform: rotate(240deg) translate(7.92px, 0px);\n          transform: rotate(240deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-9 {\n  -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;\n          animation: opacity-60-25-9-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-9:before {\n  -webkit-transform: rotate(270deg) translate(7.92px, 0px);\n          transform: rotate(270deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-10 {\n  -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;\n          animation: opacity-60-25-10-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-10:before {\n  -webkit-transform: rotate(300deg) translate(7.92px, 0px);\n          transform: rotate(300deg) translate(7.92px, 0px);\n}\n\n.dp-loading-leaf-11 {\n  -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;\n          animation: opacity-60-25-11-12 1.25s linear infinite;\n}\n\n.dp-loading-leaf-11:before {\n  -webkit-transform: rotate(330deg) translate(7.92px, 0px);\n          transform: rotate(330deg) translate(7.92px, 0px);\n}\n\n@-webkit-keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  0.01% {\n    opacity: 0.25;\n  }\n\n  0.02% {\n    opacity: 1;\n  }\n\n  60.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  0.01% {\n    opacity: 0.25;\n  }\n\n  0.02% {\n    opacity: 1;\n  }\n\n  60.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  8.34333% {\n    opacity: 0.25;\n  }\n\n  8.35333% {\n    opacity: 1;\n  }\n\n  68.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  8.34333% {\n    opacity: 0.25;\n  }\n\n  8.35333% {\n    opacity: 1;\n  }\n\n  68.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  16.6767% {\n    opacity: 0.25;\n  }\n\n  16.6867% {\n    opacity: 1;\n  }\n\n  76.6767% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  16.6767% {\n    opacity: 0.25;\n  }\n\n  16.6867% {\n    opacity: 1;\n  }\n\n  76.6767% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  25.01% {\n    opacity: 0.25;\n  }\n\n  25.02% {\n    opacity: 1;\n  }\n\n  85.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  33.3433% {\n    opacity: 0.25;\n  }\n\n  33.3533% {\n    opacity: 1;\n  }\n\n  93.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n\n  33.3433% {\n    opacity: 0.25;\n  }\n\n  33.3533% {\n    opacity: 1;\n  }\n\n  93.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n\n  41.6767% {\n    opacity: 0.25;\n  }\n\n  41.6867% {\n    opacity: 1;\n  }\n\n  1.67667% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n\n@keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n\n  41.6767% {\n    opacity: 0.25;\n  }\n\n  41.6867% {\n    opacity: 1;\n  }\n\n  1.67667% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n\n  50.01% {\n    opacity: 0.25;\n  }\n\n  50.02% {\n    opacity: 1;\n  }\n\n  10.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.375125;\n  }\n}\n\n@keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n\n  50.01% {\n    opacity: 0.25;\n  }\n\n  50.02% {\n    opacity: 1;\n  }\n\n  10.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.375125;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n\n  58.3433% {\n    opacity: 0.25;\n  }\n\n  58.3533% {\n    opacity: 1;\n  }\n\n  18.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n\n@keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n\n  58.3433% {\n    opacity: 0.25;\n  }\n\n  58.3533% {\n    opacity: 1;\n  }\n\n  18.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n\n  66.6767% {\n    opacity: 0.25;\n  }\n\n  66.6867% {\n    opacity: 1;\n  }\n\n  26.6767% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n\n@keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n\n  66.6767% {\n    opacity: 0.25;\n  }\n\n  66.6867% {\n    opacity: 1;\n  }\n\n  26.6767% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n\n  75.01% {\n    opacity: 0.25;\n  }\n\n  75.02% {\n    opacity: 1;\n  }\n\n  35.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.687625;\n  }\n}\n\n@keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n\n  75.01% {\n    opacity: 0.25;\n  }\n\n  75.02% {\n    opacity: 1;\n  }\n\n  35.01% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.687625;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n\n  83.3433% {\n    opacity: 0.25;\n  }\n\n  83.3533% {\n    opacity: 1;\n  }\n\n  43.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n\n@keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n\n  83.3433% {\n    opacity: 0.25;\n  }\n\n  83.3533% {\n    opacity: 1;\n  }\n\n  43.3433% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n\n  91.6767% {\n    opacity: 0.25;\n  }\n\n  91.6867% {\n    opacity: 1;\n  }\n\n  51.6767% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.895958333333333;\n  }\n}\n\n@keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n\n  91.6767% {\n    opacity: 0.25;\n  }\n\n  91.6867% {\n    opacity: 1;\n  }\n\n  51.6767% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 0.895958333333333;\n  }\n}\n\n", "", {"version":3,"sources":["/./src/components/loading/loading.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;CADD;;AAJD;EAQI,gBAAA;EACA,gBAAA;CAAH;;AAID;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,oBAAA;EACA,mCAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;CADD;;AAID;EACE,mBAAA;EACA,WAAA;EACA,oBAAA;EACA,UAAA;EACA,SAAA;CADD;;AAID;EACE,mBAAA;EACA,UAAA;EACA,cAAA;CADD;;AAFD;EAKI,aAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,oBAAA;EACA,iDAAA;EACA,mBAAA;EACA,uCAAA;UAAA,+BAAA;CACH;;AAbD;EAgBI,4DAAA;UAAA,oDAAA;CACH;;AAjBD;EAkBM,uDAAA;UAAA,+CAAA;CAGL;;AArBD;EAuBI,4DAAA;UAAA,oDAAA;CAEH;;AAzBD;EAyBM,wDAAA;UAAA,gDAAA;CAIL;;AA7BD;EA8BI,4DAAA;UAAA,oDAAA;CAGH;;AAjCD;EAgCM,wDAAA;UAAA,gDAAA;CAKL;;AArCD;EAqCI,4DAAA;UAAA,oDAAA;CAIH;;AAzCD;EAuCM,wDAAA;UAAA,gDAAA;CAML;;AA7CD;EA4CI,4DAAA;UAAA,oDAAA;CAKH;;AAjDD;EA8CM,yDAAA;UAAA,iDAAA;CAOL;;AArDD;EAmDI,4DAAA;UAAA,oDAAA;CAMH;;AAzDD;EAqDM,yDAAA;UAAA,iDAAA;CAQL;;AA7DD;EA0DI,4DAAA;UAAA,oDAAA;CAOH;;AAjED;EA4DM,yDAAA;UAAA,iDAAA;CASL;;AArED;EAiEI,4DAAA;UAAA,oDAAA;CAQH;;AAzED;EAmEM,yDAAA;UAAA,iDAAA;CAUL;;AA7ED;EAwEI,4DAAA;UAAA,oDAAA;CASH;;AAjFD;EA0EM,yDAAA;UAAA,iDAAA;CAWL;;AArFD;EA+EI,4DAAA;UAAA,oDAAA;CAUH;;AAzFD;EAiFM,yDAAA;UAAA,iDAAA;CAYL;;AA7FD;EAsFI,6DAAA;UAAA,qDAAA;CAWH;;AAjGD;EAwFM,yDAAA;UAAA,iDAAA;CAaL;;AArGD;EA6FI,6DAAA;UAAA,qDAAA;CAYH;;AAzGD;EA+FM,yDAAA;UAAA,iDAAA;CAcL;;AATD;EACE;IACE,cAAA;GAYD;;EAVD;IACE,cAAA;GAaD;;EAXD;IACE,WAAA;GAcD;;EAZD;IACE,cAAA;GAeD;;EAbD;IACE,cAAA;GAgBD;CACF;;AA/BD;EACE;IACE,cAAA;GAYD;;EAVD;IACE,cAAA;GAaD;;EAXD;IACE,WAAA;GAcD;;EAZD;IACE,cAAA;GAeD;;EAbD;IACE,cAAA;GAgBD;CACF;;AAbD;EACE;IACE,cAAA;GAgBD;;EAdD;IACE,cAAA;GAiBD;;EAfD;IACE,WAAA;GAkBD;;EAhBD;IACE,cAAA;GAmBD;;EAjBD;IACE,cAAA;GAoBD;CACF;;AAnCD;EACE;IACE,cAAA;GAgBD;;EAdD;IACE,cAAA;GAiBD;;EAfD;IACE,WAAA;GAkBD;;EAhBD;IACE,cAAA;GAmBD;;EAjBD;IACE,cAAA;GAoBD;CACF;;AAjBD;EACE;IACE,cAAA;GAoBD;;EAlBD;IACE,cAAA;GAqBD;;EAnBD;IACE,WAAA;GAsBD;;EApBD;IACE,cAAA;GAuBD;;EArBD;IACE,cAAA;GAwBD;CACF;;AAvCD;EACE;IACE,cAAA;GAoBD;;EAlBD;IACE,cAAA;GAqBD;;EAnBD;IACE,WAAA;GAsBD;;EApBD;IACE,cAAA;GAuBD;;EArBD;IACE,cAAA;GAwBD;CACF;;AArBD;EACE;IACE,cAAA;GAwBD;;EAtBD;IACE,cAAA;GAyBD;;EAvBD;IACE,WAAA;GA0BD;;EAxBD;IACE,cAAA;GA2BD;;EAzBD;IACE,cAAA;GA4BD;CACF;;AAzBD;EACE;IACE,cAAA;GA4BD;;EA1BD;IACE,cAAA;GA6BD;;EA3BD;IACE,WAAA;GA8BD;;EA5BD;IACE,cAAA;GA+BD;;EA7BD;IACE,cAAA;GAgCD;CACF;;AA/CD;EACE;IACE,cAAA;GA4BD;;EA1BD;IACE,cAAA;GA6BD;;EA3BD;IACE,WAAA;GA8BD;;EA5BD;IACE,cAAA;GA+BD;;EA7BD;IACE,cAAA;GAgCD;CACF;;AA7BD;EACE;IACE,2BAAA;GAgCD;;EA9BD;IACE,cAAA;GAiCD;;EA/BD;IACE,WAAA;GAkCD;;EAhCD;IACE,cAAA;GAmCD;;EAjCD;IACE,2BAAA;GAoCD;CACF;;AAnDD;EACE;IACE,2BAAA;GAgCD;;EA9BD;IACE,cAAA;GAiCD;;EA/BD;IACE,WAAA;GAkCD;;EAhCD;IACE,cAAA;GAmCD;;EAjCD;IACE,2BAAA;GAoCD;CACF;;AAjCD;EACE;IACE,kBAAA;GAoCD;;EAlCD;IACE,cAAA;GAqCD;;EAnCD;IACE,WAAA;GAsCD;;EApCD;IACE,cAAA;GAuCD;;EArCD;IACE,kBAAA;GAwCD;CACF;;AAvDD;EACE;IACE,kBAAA;GAoCD;;EAlCD;IACE,cAAA;GAqCD;;EAnCD;IACE,WAAA;GAsCD;;EApCD;IACE,cAAA;GAuCD;;EArCD;IACE,kBAAA;GAwCD;CACF;;AArCD;EACE;IACE,2BAAA;GAwCD;;EAtCD;IACE,cAAA;GAyCD;;EAvCD;IACE,WAAA;GA0CD;;EAxCD;IACE,cAAA;GA2CD;;EAzCD;IACE,2BAAA;GA4CD;CACF;;AA3DD;EACE;IACE,2BAAA;GAwCD;;EAtCD;IACE,cAAA;GAyCD;;EAvCD;IACE,WAAA;GA0CD;;EAxCD;IACE,cAAA;GA2CD;;EAzCD;IACE,2BAAA;GA4CD;CACF;;AAzCD;EACE;IACE,2BAAA;GA4CD;;EA1CD;IACE,cAAA;GA6CD;;EA3CD;IACE,WAAA;GA8CD;;EA5CD;IACE,cAAA;GA+CD;;EA7CD;IACE,2BAAA;GAgDD;CACF;;AA/DD;EACE;IACE,2BAAA;GA4CD;;EA1CD;IACE,cAAA;GA6CD;;EA3CD;IACE,WAAA;GA8CD;;EA5CD;IACE,cAAA;GA+CD;;EA7CD;IACE,2BAAA;GAgDD;CACF;;AA7CD;EACE;IACE,kBAAA;GAgDD;;EA9CD;IACE,cAAA;GAiDD;;EA/CD;IACE,WAAA;GAkDD;;EAhDD;IACE,cAAA;GAmDD;;EAjDD;IACE,kBAAA;GAoDD;CACF;;AAnED;EACE;IACE,kBAAA;GAgDD;;EA9CD;IACE,cAAA;GAiDD;;EA/CD;IACE,WAAA;GAkDD;;EAhDD;IACE,cAAA;GAmDD;;EAjDD;IACE,kBAAA;GAoDD;CACF;;AAjDD;EACE;IACE,2BAAA;GAoDD;;EAlDD;IACE,cAAA;GAqDD;;EAnDD;IACE,WAAA;GAsDD;;EApDD;IACE,cAAA;GAuDD;;EArDD;IACE,2BAAA;GAwDD;CACF;;AAvED;EACE;IACE,2BAAA;GAoDD;;EAlDD;IACE,cAAA;GAqDD;;EAnDD;IACE,WAAA;GAsDD;;EApDD;IACE,cAAA;GAuDD;;EArDD;IACE,2BAAA;GAwDD;CACF;;AArDD;EACE;IACE,2BAAA;GAwDD;;EAtDD;IACE,cAAA;GAyDD;;EAvDD;IACE,WAAA;GA0DD;;EAxDD;IACE,cAAA;GA2DD;;EAzDD;IACE,2BAAA;GA4DD;CACF;;AA3ED;EACE;IACE,2BAAA;GAwDD;;EAtDD;IACE,cAAA;GAyDD;;EAvDD;IACE,WAAA;GA0DD;;EAxDD;IACE,cAAA;GA2DD;;EAzDD;IACE,2BAAA;GA4DD;CACF","file":"loading.scss","sourcesContent":["@import \"_var.scss\";\n\n.dp-loading-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  .dp-loading-content {\n    margin-top: 64%;\n    font-size: 14px;\n  }\n}\n\n.dp-loading-box {\n  position: fixed;\n  z-index: 3;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n\n.dp-loading {\n  position: absolute;\n  width: 0px;\n  z-index: 2000000000;\n  left: 50%;\n  top: 38%;\n}\n\n.dp-loading-leaf {\n  position: absolute;\n  top: -1px;\n  opacity: 0.25;\n  &:before {\n    content: \" \";\n    position: absolute;\n    width: 8.14px;\n    height: 3.08px;\n    background: rgb(209, 209, 213);\n    box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n    border-radius: 1px;\n    transform-origin: left 50% 0px;\n  }\n\n  &-0 {\n    animation: opacity-60-25-0-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(0deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-1 {\n    animation: opacity-60-25-1-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(30deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-2 {\n    animation: opacity-60-25-2-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(60deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-3 {\n    animation: opacity-60-25-3-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(90deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-4 {\n    animation: opacity-60-25-4-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(120deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-5 {\n    animation: opacity-60-25-5-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(150deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-6 {\n    animation: opacity-60-25-6-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(180deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-7 {\n    animation: opacity-60-25-7-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(210deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-8 {\n    animation: opacity-60-25-8-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(240deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-9 {\n    animation: opacity-60-25-9-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(270deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-10 {\n    animation: opacity-60-25-10-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(300deg) translate(7.92px, 0px);\n    }\n  }\n\n  &-11 {\n    animation: opacity-60-25-11-12 1.25s linear infinite;\n    &:before {\n      transform: rotate(330deg) translate(7.92px, 0px);\n    }\n  }\n}\n\n@keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n\n@keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n\n@keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n\n@keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n\n@keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n\n@keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n\n@keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n\n@keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958333333333;\n  }\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	__webpack_require__(135);
	var Hammer = __webpack_require__(137);
	
	var TRANSFORM = '-webkit-transform .3s ease-out';
	var INTERVAL = 3000;
	
	Vue.component('swiper-item', {
	  props: ['order'],
	  template: '\n  <div class="dp-swiper-slide" :style="{order: order}"><slot></slot></div>\n  ',
	
	  ready: function ready() {
	    this.$parent._build();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var $parent = this.$parent;
	    this.$nextTick(function () {
	      $parent._build();
	    });
	  }
	});
	
	function reorder(array, order0Index) {
	  var length = array.length;
	  for (var order = 0; order < length; ++order) {
	    array[(order0Index + order) % length].order = order;
	  }
	}
	
	Vue.component('swiper', {
	  props: {},
	
	  data: function data() {
	    return {
	      tx: 0,
	      txUnit: '%',
	      ts: 'none',
	      pages: [],
	      rebuiltCount: 0
	    };
	  },
	
	
	  computed: {
	    wrapperStyle: function wrapperStyle() {
	      return {
	        transition: this.ts,
	        transform: 'translate(' + this.tx + this.txUnit + ')'
	      };
	    },
	    slides: function slides() {
	      this.rebuiltCount;
	      return this.$children.filter(function (c) {
	        return c.constructor.name === 'SwiperItem';
	      });
	    }
	  },
	
	  template: '\n  <div class="dp-swiper-container">\n    <div v-el:wrapper class="dp-swiper-wrapper" :style="wrapperStyle">\n      <slot></slot>\n    </div>\n\n    <div class="dp-swiper-pagination">\n      <span v-for="page in pages" class="dp-swiper-pagination__bullet" :class="{\'dp-swiper-pagination__bullet--active\': page.active}"></span>\n    </div>\n  </div>\n  ',
	
	  methods: {
	    /*
	     * > 2 Slides
	     * order: 0 left
	     * order: 1 middle (visible)
	     * order: 2 right
	     * initial transform: -100%
	     *
	     * = 2 Slides
	     * order: 0 visible
	     * order: 1 right
	     * initial transform: 0%
	     */
	    transitionEnd: function transitionEnd() {
	      this._mc.set({ enable: true });
	      this.ts = 'none';
	      // Update Orders
	      if (this.slides.length > 2 || this.tx === -100) {
	        var order0Index = this.slides.findIndex(function (s) {
	          return s.order === 0;
	        });
	        var length = this.slides.length;
	        var newOrder0Index;
	        if (this.tx === -200) {
	          // Swipe Left
	          newOrder0Index = (order0Index + 1) % length;
	        } else {
	          // Swipe Right
	          newOrder0Index = (order0Index - 1 + length) % length;
	        }
	        reorder(this.slides, newOrder0Index);
	      }
	
	      // Update Page Indicator
	      var activeIndex = this.pages.findIndex(function (p) {
	        return p.active;
	      });
	      var nextActiveIndex = (this.tx === -200 ? activeIndex + 1 : activeIndex + this.pages.length - 1) % this.pages.length;
	      for (var i = 0; i < nextActiveIndex; ++i) {
	        this.pages[i].active = false;
	      }this.pages[nextActiveIndex].active = true;
	      for (var _i = nextActiveIndex + 1; _i < this.pages.length; ++_i) {
	        this.pages[_i].active = false;
	      } // Restore transform
	      this.tx = this.slides.length !== 2 ? -100 : 0;
	
	      // Prepare next
	      this._clearTimeout();
	      this._setTimeout();
	    },
	    _clearTimeout: function _clearTimeout() {
	      if (this._timeout) {
	        clearTimeout(this._timeout);
	      }
	    },
	    _setTimeout: function _setTimeout() {
	      var _this = this;
	
	      this._timeout = setTimeout(function () {
	        _this._mc.set({ enable: false });
	        _this.ts = TRANSFORM;
	        _this.tx = _this.slides.length !== 2 ? -200 : -100;
	        _this.txUnit = '%';
	      }, INTERVAL);
	    },
	    _clean: function _clean() {
	      this.$els.wrapper.removeEventListener('webkitTransitionEnd', this._listener);
	      this._clearTimeout();
	      if (this._mc) this._mc.destroy();
	    },
	    _build: function _build() {
	      var _this2 = this;
	
	      // 1. Cleanup
	      this.rebuiltCount++;
	      this._clean();
	      if (this.slides.length < 2) {
	        this.pages = [];
	        return;
	      }
	
	      // 2. Initialize slides and pages structure
	      if (this.slides.length === 2) reorder(this.slides, 0);else reorder(this.slides, this.slides.length - 1);
	      this.pages = this.slides.map(function (b) {
	        return { active: false };
	      });
	      this.pages[0].active = true;
	
	      this.tx = this.slides.length !== 2 ? -100 : 0;
	      this._setTimeout();
	      this._listener = this.transitionEnd.bind(this);
	      this.$els.wrapper.addEventListener('webkitTransitionEnd', this._listener);
	
	      // 3. Handle Guesture
	      var mc = new Hammer.Manager(this.$els.wrapper);
	      mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 }));
	      mc.on('swipeleft', function (e) {
	        _this2.ts = TRANSFORM;
	        _this2.tx = _this2.slides.length !== 2 ? -200 : -100;
	        _this2.txUnit = '%';
	      });
	
	      mc.on('swiperight', function (e) {
	        if (_this2.slides.length === 2) {
	          _this2.ts = 'none';
	          _this2.tx = -100;
	          var order0Index = _this2.slides.findIndex(function (s) {
	            return s.order === 0;
	          });
	          reorder(_this2.slides, order0Index === 0 ? 1 : 0);
	          requestAnimationFrame(function () {
	            _this2.ts = TRANSFORM;
	            _this2.tx = 0;
	          });
	        } else {
	          _this2.ts = TRANSFORM;
	          _this2.tx = 0;
	          _this2.txUnit = '%';
	        }
	      });
	
	      this._mc = mc;
	    }
	  },
	
	  ready: function ready() {
	    //this._build();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this._clean();
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./swiper.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./swiper.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".dp-swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.dp-swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  box-sizing: content-box;\n}\n\n.dp-swiper-slide {\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.dp-swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  z-index: 10;\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.dp-swiper-pagination__bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n  margin: 0 5px;\n}\n\n.dp-swiper-pagination__bullet--active {\n  opacity: 1;\n  background: #007aff;\n}\n\n", "", {"version":3,"sources":["/./src/components/swiper/swiper.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;CADD;;AAID;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,+CAAA;EAAA,uCAAA;EAAA,+BAAA;EAAA,kDAAA;EACA,wBAAA;CADD;;AAID;EACE,uBAAA;UAAA,eAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;CADD;;AAID;EACE,mBAAA;EACA,mBAAA;EACA,0BAAA;EAAA,kBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,QAAA;EACA,YAAA;CADD;;AAID;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;EACA,cAAA;CADD;;AAID;EACE,WAAA;EACA,oBAAA;CADD","file":"swiper.scss","sourcesContent":["@import \"_var.scss\";\n\n.dp-swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.dp-swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n\n.dp-swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.dp-swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.dp-swiper-pagination__bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n  margin: 0 5px;\n}\n\n.dp-swiper-pagination__bullet--active {\n  opacity: 1;\n  background: #007aff;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';
	
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');
	
	var TYPE_FUNCTION = 'function';
	
	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;
	
	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}
	
	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;
	
	    if (!obj) {
	        return;
	    }
	
	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}
	
	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');
	
	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	
	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;
	
	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;
	
	    if (properties) {
	        assign(childP, properties);
	    }
	}
	
	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}
	
	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}
	
	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}
	
	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}
	
	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}
	
	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}
	
	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}
	
	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}
	
	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}
	
	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;
	
	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }
	
	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }
	
	    return results;
	}
	
	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);
	
	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;
	
	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}
	
	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}
	
	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}
	
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	
	var COMPUTE_INTERVAL = 25;
	
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;
	
	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };
	
	    this.init();
	
	}
	
	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },
	
	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },
	
	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};
	
	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;
	
	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}
	
	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
	
	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;
	
	    if (isFirst) {
	        manager.session = {};
	    }
	
	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;
	
	    // compute scale, rotation etc
	    computeInputData(manager, input);
	
	    // emit secret event
	    manager.emit('hammer.input', input);
	
	    manager.recognize(input);
	    manager.session.prevInput = input;
	}
	
	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;
	
	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }
	
	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }
	
	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);
	
	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
	
	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
	
	    computeIntervalInputData(session, input);
	
	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}
	
	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};
	
	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };
	
	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }
	
	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	
	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;
	
	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;
	
	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);
	
	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }
	
	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}
	
	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }
	
	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}
	
	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;
	
	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }
	
	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }
	
	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}
	
	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}
	
	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }
	
	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}
	
	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	
	    return Math.sqrt((x * x) + (y * y));
	}
	
	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}
	
	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	
	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	
	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};
	
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;
	
	    this.pressed = false; // mousedown state
	
	    Input.apply(this, arguments);
	}
	
	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];
	
	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }
	
	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }
	
	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }
	
	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }
	
	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});
	
	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};
	
	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};
	
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	
	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;
	
	    Input.apply(this, arguments);
	
	    this.store = (this.manager.session.pointerEvents = []);
	}
	
	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;
	
	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
	
	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }
	
	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }
	
	        // update the event in the store
	        store[storeIndex] = ev;
	
	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });
	
	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});
	
	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;
	
	    Input.apply(this, arguments);
	}
	
	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }
	
	        if (!this.started) {
	            return;
	        }
	
	        var touches = normalizeSingleTouches.call(this, ev, type);
	
	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);
	
	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }
	
	    return [all, changed];
	}
	
	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};
	
	    Input.apply(this, arguments);
	}
	
	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;
	
	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }
	
	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;
	
	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });
	
	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }
	
	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }
	
	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }
	
	    if (!changedTargetTouches.length) {
	        return;
	    }
	
	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}
	
	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	
	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;
	
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	
	    this.primaryTouch = null;
	    this.lastTouches = [];
	}
	
	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
	
	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }
	
	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }
	
	        this.callback(manager, inputEvent, inputData);
	    },
	
	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});
	
	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}
	
	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];
	
	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}
	
	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();
	
	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}
	
	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },
	
	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },
	
	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },
	
	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
	
	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture
	
	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;
	
	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }
	
	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }
	
	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },
	
	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};
	
	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }
	
	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }
	
	    return TOUCH_ACTION_AUTO;
	}
	
	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {
	
	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}
	
	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	
	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});
	
	    this.id = uniqueId();
	
	    this.manager = null;
	
	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);
	
	    this.state = STATE_POSSIBLE;
	
	    this.simultaneous = {};
	    this.requireFail = [];
	}
	
	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},
	
	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },
	
	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }
	
	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },
	
	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }
	
	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },
	
	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },
	
	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },
	
	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;
	
	        function emit(event) {
	            self.manager.emit(event, input);
	        }
	
	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	
	        emit(self.options.event); // simple 'eventName' events
	
	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }
	
	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },
	
	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },
	
	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },
	
	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);
	
	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }
	
	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }
	
	        this.state = this.process(inputDataClone);
	
	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },
	
	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line
	
	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },
	
	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};
	
	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}
	
	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}
	
	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}
	
	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}
	
	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },
	
	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },
	
	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;
	
	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);
	
	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});
	
	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	
	    this.pX = null;
	    this.pY = null;
	}
	
	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },
	
	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },
	
	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;
	
	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },
	
	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },
	
	    emit: function(input) {
	
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;
	
	        var direction = directionStr(input.direction);
	
	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },
	
	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    this._timer = null;
	    this._input = null;
	}
	
	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },
	
	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;
	
	        this._input = input;
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }
	
	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});
	
	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },
	
	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },
	
	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;
	
	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }
	
	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },
	
	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }
	
	        this.manager.emit(this.options.event, input);
	    }
	});
	
	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;
	
	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}
	
	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },
	
	    process: function(input) {
	        var options = this.options;
	
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;
	
	        this.reset();
	
	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }
	
	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;
	
	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }
	
	            this._input = input;
	
	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },
	
	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}
	
	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';
	
	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,
	
	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,
	
	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,
	
	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,
	
	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,
	
	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],
	
	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',
	
	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',
	
	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',
	
	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',
	
	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',
	
	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};
	
	var STOP = 1;
	var FORCED_STOP = 2;
	
	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});
	
	    this.options.inputTarget = this.options.inputTarget || element;
	
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};
	
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	
	    toggleCssProps(this, true);
	
	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}
	
	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },
	
	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },
	
	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }
	
	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);
	
	        var recognizer;
	        var recognizers = this.recognizers;
	
	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;
	
	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }
	
	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];
	
	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }
	
	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },
	
	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }
	
	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },
	
	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }
	
	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }
	
	        this.recognizers.push(recognizer);
	        recognizer.manager = this;
	
	        this.touchAction.update();
	        return recognizer;
	    },
	
	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }
	
	        recognizer = this.get(recognizer);
	
	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);
	
	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }
	
	        return this;
	    },
	
	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },
	
	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },
	
	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }
	
	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }
	
	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };
	
	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },
	
	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);
	
	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};
	
	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}
	
	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}
	
	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,
	
	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,
	
	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,
	
	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,
	
	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,
	
	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,
	
	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});
	
	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}
	
	})(window, document, 'Hammer');


/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(139);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./test.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./test.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody,\nmain,\n#app {\n  height: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\narticle {\n  color: red;\n}\n\n.test {\n  font-size: 0.75rem;\n}\n\n.my-swiper {\n  height: 100px;\n}\n\n.my-swiper .item-template {\n  margin: auto;\n}\n\n.grid::after {\n  content: ' ';\n  display: table;\n  clear: both;\n}\n\n.grid .grid-item {\n  float: left;\n  width: 33.3%;\n}\n\n#grid2 .flex-item {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 80px;\n          flex: 0 0 80px;\n  width: 80px;\n}\n\n", "", {"version":3,"sources":["/./src/pages/test/test.scss"],"names":[],"mappings":"AAGA;;;;EACE,aAAA;EACA,0BAAA;UAAA,kBAAA;CACD;;AAED;EACE,WAAA;CACD;;AAED;EACE,mBAAA;CACD;;AAED;EACE,cAAA;CACD;;AAAC;EACE,aAAA;CAGH;;AAKD;EAEI,aAAA;EACA,eAAA;EACA,YAAA;CAHH;;AADD;EAQI,YAAA;EACA,aAAA;CAHH;;AAOM;EACL,oBAAA;EAAA,uBAAA;UAAA,eAAA;EACA,YAAA;CAJD","file":"test.scss","sourcesContent":["@import \"_var.scss\";\n@import \"../../common/_common.scss\";\n\nhtml, body, main, #app {\n  height: 100%;\n  user-select: none;\n}\n\narticle {\n  color: $primary-color;\n}\n\n.test {\n  font-size: rem(12);\n}\n\n.my-swiper {\n  height: 100px;\n  .item-template {\n    margin: auto;\n  }\n}\n\n\n\n\n// Float based grid\n.grid {\n  &::after {\n    content: ' ';\n    display: table;\n    clear: both;\n  }\n\n  .grid-item {\n    float: left;\n    width: 33.3%\n  }\n}\n\n#grid2 .flex-item {\n  flex: 0 0 80px;\n  width: 80px;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	var createRange = __webpack_require__(141);
	
	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @see _.inRange, _.rangeRight
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = createRange();
	
	module.exports = range;


/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	var baseRange = __webpack_require__(142),
	    isIterateeCall = __webpack_require__(143),
	    toFinite = __webpack_require__(150);
	
	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toFinite(start);
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toFinite(end);
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	    return baseRange(start, end, step, fromRight);
	  };
	}
	
	module.exports = createRange;


/***/ },

/***/ 142:
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);
	
	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}
	
	module.exports = baseRange;


/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(144),
	    isArrayLike = __webpack_require__(145),
	    isIndex = __webpack_require__(149),
	    isObject = __webpack_require__(147);
	
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
	
	module.exports = isIterateeCall;


/***/ },

/***/ 144:
/***/ function(module, exports) {

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
	
	module.exports = eq;


/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(146),
	    isLength = __webpack_require__(148);
	
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
	
	module.exports = isArrayLike;


/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(147);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
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
	
	module.exports = isFunction;


/***/ },

/***/ 147:
/***/ function(module, exports) {

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
	
	module.exports = isObject;


/***/ },

/***/ 148:
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	
	module.exports = isLength;


/***/ },

/***/ 149:
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
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
	
	module.exports = isIndex;


/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(151);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
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
	
	module.exports = toFinite;


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(147),
	    isSymbol = __webpack_require__(152);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
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
	
	module.exports = toNumber;


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(153);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
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
	
	module.exports = isSymbol;


/***/ },

/***/ 153:
/***/ function(module, exports) {

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
	
	module.exports = isObjectLike;


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	/**
	 * Flex Grid - Fixed & Responsive Grid using flexbox
	 *
	 * @columns column count, if not given, it's totally flexible
	 *
	 */
	__webpack_require__(155);
	Vue.component('flex-grid', {
	  props: {
	    columns: Number
	  },
	  data: function data() {
	    return {
	      dividers: [],
	      placeholders: []
	    };
	  },
	
	  template: '\n  <section class="flex-grid">\n    <slot></slot>\n    <div v-for="divider in dividers" style="width: 100%" :style="{order: divider.order}"></div>\n    <div class="flex-item" v-for="placeholder in placeholders" style="height: 0;" :style="{order: placeholder.order}"></div>\n  </section>\n  ',
	
	  ready: function ready() {
	    var itemCount = this.$children.length;
	    var order = 0;
	    for (var i = 0; i < itemCount; ++i) {
	      this.$children[i].order = order;
	      order++;
	      if (this.columns && (order - this.columns) % (this.columns + 1) === 0) {
	        this.dividers.push({ order: order });
	        order++;
	      }
	    }
	
	    if (this.columns) {
	      if (itemCount % this.columns !== 0) for (var _i = 0; _i < this.columns - itemCount % this.columns; ++_i) {
	        this.placeholders.push({ order: order });
	        order++;
	      }
	    } else {
	      for (var _i2 = 0; _i2 < 20; ++_i2) {
	        this.placeholders.push({ order: order });
	        order++;
	      }
	    }
	  }
	});
	
	Vue.component('flex-item', {
	  props: ['order'],
	  template: '\n  <div class="flex-item" :style="{order: order}"><slot></slot></div>\n  '
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(156);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./flex-grid.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./flex-grid.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".flex-grid {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.flex-grid .flex-item {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n\n", "", {"version":3,"sources":["/./src/components/flexgrid/flex-grid.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,0BAAA;EAAA,uCAAA;UAAA,+BAAA;EACA,wBAAA;UAAA,gBAAA;CACD;;AACC;EACE,oBAAA;EAAA,gBAAA;UAAA,QAAA;CAEH","file":"flex-grid.scss","sourcesContent":[".flex-grid {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  .flex-item {\n    flex: 1;\n  }\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 157:
/***/ function(module, exports) {

	module.exports = "<main @touchend=\"onTouchEnd\">\n  <pull-refresh @trigger-refresh=\"onRefresh\">\n    <article>Hello World</article>\n    <button class=\"dp-button test\" @click=\"showUA()\">DPApp</button>\n    <h1>Fixed Column Grid</h1>\n    <flex-grid :columns=\"3\">\n      <flex-item v-for=\"item in items\">{{item.text}}</flex-item>\n    </flex-grid>\n\n    <swiper class=\"my-swiper\">\n      <swiper-item v-for=\"slide in swiperData\">\n        <a class=\"item-template\">\n          <span class=\"title\">{{slide.link}}</span>\n        </a>\n      </swiper-item>\n    </swiper>\n    <div v-for=\"num in nums\">\n      {{num}}\n    </div>\n\n    <h1>Fully Responsive Grid</h1>\n    <!--<flex-grid id=\"grid2\">-->\n      <!--<flex-item>Item 1</flex-item>-->\n      <!--<flex-item>Item 2</flex-item>-->\n      <!--<flex-item>Item 3</flex-item>-->\n      <!--<flex-item>Item 4</flex-item>-->\n      <!--<flex-item>Item 5</flex-item>-->\n      <!--<flex-item>Item 6</flex-item>-->\n      <!--<flex-item>Item 7</flex-item>-->\n      <!--<flex-item>Item 8</flex-item>-->\n    <!--</flex-grid>-->\n  </pull-refresh>\n</main>\n";

/***/ }

});
//# sourceMappingURL=test.js.map