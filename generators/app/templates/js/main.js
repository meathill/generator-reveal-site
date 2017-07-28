/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helper = __webpack_require__(1);

var query = (0, _helper.getSearchParams)(location.search);

Reveal.initialize({
  history: true,
  controls: 'controls' in query ? query.controls : true,
  transition: query.transition || 'slide',
  dependencies: [{
    src: './node_modules/reveal.js/plugin/markdown/marked.js',
    condition: function condition() {
      return !!document.querySelector('[data-markdown]');
    }
  }, {
    src: './node_modules/reveal.js/plugin/markdown/markdown.js',
    condition: function condition() {
      return !!document.querySelector('[data-markdown]');
    }
  }, {
    src: './node_modules/reveal.js/plugin/highlight/highlight.js',
    async: true,
    callback: function callback() {
      hljs.initHighlightingOnLoad();
    }
  }]
});

if (query.print) {
  (0, _helper.load)('./node_modules/reveal.js/css/print/pdf.css');
}

if (query.platform) {
  document.body.classList.add(query.platform);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchParams = getSearchParams;
exports.load = load;
/**
 * Created by meathill on 2017/7/18.
 */

function getSearchParams(search) {
  var query = {};
  if (search) {
    search = search.substr(1);
    search = search.split('&');
    for (var i = 0, len = search.length; i < len; i++) {
      var kv = search[i].split('=');
      if (!isNaN(kv[1])) {
        kv[1] = Number(kv[1]);
      }
      if (/^true|false$/i.test(kv[1])) {
        kv[1] = Boolean(kv[1]);
      }
      query[kv[0]] = kv[1];
    }
  }
  return query;
}

function loadCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
  return new Promise(function (resolve, reject) {
    link.onload = resolve;
    link.onerror = reject;
  });
}

function load(url) {
  if (/\.css$/.test(url)) {
    return loadCSS(url);
  }
}

/***/ })
/******/ ]);