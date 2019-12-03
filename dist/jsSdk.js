(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TPTJS-SDK"] = factory();
	else
		root["TPTJS-SDK"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _intentMiniProgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _khtRequestAppCurrentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = ({
  khtAppRouteRequest: _route__WEBPACK_IMPORTED_MODULE_0__["default"],
  intentMiniProgram: _intentMiniProgram__WEBPACK_IMPORTED_MODULE_1__["default"],
  khtRequestAppCurrentUser: _khtRequestAppCurrentUser__WEBPACK_IMPORTED_MODULE_2__["default"],
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtAppRouteRequest; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 原生路由跳转
 * @param authorization number 1: 需要实名认证
 * @param detail string
 * @param loginStatus number 1: 登录 0: 不用登录
 * @param pageType string  RN HTML native
 * @param tagUrl string
 */

function khtAppRouteRequest(authorization, detail,
  loginStatus, pageType, tagUrl) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ) {
    // eslint-disable-next-line no-undef
    kht.khtAppRouteRequest(
      authorization,
      detail,
      loginStatus,
      pageType,
      tagUrl,
    );
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ) {
    window.webkit.messageHandlers.khtAppRouteRequest.postMessage({
      authorization,
      detail,
      loginStatus,
      pageType,
      tagUrl,
    });
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const uXZ = navigator.userAgent;
const isAndroidXZ = uXZ.indexOf('Android') > -1 || uXZ.indexOf('Linux') > -1; // android终端或者uc浏览器
const isiOSXZ = !!uXZ.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
const uaXZ = window.navigator.userAgent.toLowerCase();
const isWeixin = uaXZ.indexOf('micromessenger') !== -1;

/* harmony default export */ __webpack_exports__["default"] = ({
  isAndroidXZ,
  isiOSXZ,
  isWeixin,
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intentMiniProgram; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 唤起小程序
 * @param userName  小程序原始id
 * @param path 小程序路径
 * @param type 可选打开开发版（1），体验版（2），正式版（0）number
 */
function intentMiniProgram({ userName, path, type }) {
  const obj = {
    userName,
    path,
    type,
  };
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ) {
    // eslint-disable-next-line no-undef
    kht.intentMiniProgram(JSON.stringify(obj));
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ) {
    window.webkit.messageHandlers.intentMiniProgram.postMessage(obj);
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtRequestAppCurrentUser; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 获取用户信息
 */
function khtRequestAppCurrentUser() {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ) {
    // eslint-disable-next-line no-undef
    kht.khtRequestAppCurrentUser();
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ) {
    window.webkit.messageHandlers.khtRequestAppCurrentUser.postMessage({});
  }
}


/***/ })
/******/ ])["default"];
});