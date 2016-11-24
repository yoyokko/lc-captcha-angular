(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ngLuosimaoCaptcha = undefined;
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _validator = __webpack_require__(2);
	
	var _directiveDef = __webpack_require__(3);
	
	var _lccaptchaScriptLoader = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ngLuosimaoCaptcha = exports.ngLuosimaoCaptcha = function () {
	    var name = 'lccaptcha';
	
	    (0, _directiveDef.def)(name, {
	        restrict: 'E',
	        scope: {
	            dataSiteKey: '@lcKey',
	            dataWidth: '@lcWidth',
	            onVerified: '&lcVerified'
	        },
	        link: function link($scope, element, attrs) {
	
	            (0, _validator.validator)($scope.dataSiteKey, 'data-site-key must not be empty.');
	            if (_angular2.default.isUndefined($scope.dataWidth)) {
	                $scope.dataWidth = "100%";
	            }
	
	            (0, _lccaptchaScriptLoader.loader)(function () {
	                _angular2.default.element(document).ready(function () {});
	            });
	
	            $scope.getResponse = function (resp) {
	                if (!_angular2.default.isUndefined($scope.onVerified)) {
	                    $scope.onVerified({ resp: resp, LUOCAPTCHA: LUOCAPTCHA });
	                }
	            };
	        },
	        template: '<div id="luosimao-captcha" class="l-captcha" data-site-key="{{dataSiteKey}}" data-width="{{dataWidth}}" data-callback="luosimaoCaptchaResponse"></div>'
	    });
	
	    return name;
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var validator = exports.validator = function validator(prop, desc) {
	    if (!prop) {
	        throw new Error(desc);
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.def = undefined;
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var def = exports.def = function def(name, ddo) {
	    _angular2.default.module(name, []).directive(name, [function () {
	        return ddo;
	    }]);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var loader = exports.loader = function loader(callback) {
	    var SCRIPT_URL = '//captcha.luosimao.com/static/dist/api.js';
	
	    function onload() {
	        callback();
	    };
	    var scriptHeat = document.createElement('script');
	    scriptHeat.type = 'text/javascript';
	    scriptHeat.src = SCRIPT_URL;
	    scriptHeat.onload = onload;
	    document.body.appendChild(scriptHeat);
	
	    var scriptResponse = document.createElement('script');
	    scriptResponse.type = 'text/javascript';
	    var code = 'function luosimaoCaptchaResponse(response) { \
	        angular.element("#luosimao-captcha").scope().getResponse(response); \
	    };';
	    scriptResponse.text = code;
	    document.body.appendChild(scriptResponse);
	};

/***/ }
/******/ ])
});
;