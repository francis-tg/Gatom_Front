"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemy_webpack_project"]("main",{

/***/ "./src/lib/keypad.js":
/*!***************************!*\
  !*** ./src/lib/keypad.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keypadFunc\": function() { return /* binding */ keypadFunc; }\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/lib/dom.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nfunction keypadFunc(state) {\n  var data = \"\";\n  var keys = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getEls)(\".keypad .key\");\n  keys.forEach(function (k, i) {\n    k.addEventListener(\"click\", function (e) {\n      if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isNumber(parseInt(e.target.innerText)) && !lodash__WEBPACK_IMPORTED_MODULE_1___default().isNaN(parseInt(e.target.innerText))) {\n        console.log(lodash__WEBPACK_IMPORTED_MODULE_1___default().isNaN(parseInt(e.target.innerText)));\n        data += parseInt(e.target.innerText);\n        state(data);\n      } else if (e.target.id === \"backspace\") {\n        data = String(data).slice(0, String(data).length - 1);\n        state(data);\n      }\n    });\n  });\n}\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(keypadFunc, \"keypadFunc\", \"D:\\\\projects\\\\gatom2\\\\src\\\\lib\\\\keypad.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://my-webpack-project/./src/lib/keypad.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "fb05ace1470bd0df0bd4"; }
/******/ }();
/******/ 
/******/ }
);