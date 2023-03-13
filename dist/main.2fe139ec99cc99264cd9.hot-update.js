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

/***/ "./src/lib/validation.js":
/*!*******************************!*\
  !*** ./src/lib/validation.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moovValidNumber\": function() { return /* binding */ moovValidNumber; },\n/* harmony export */   \"tgcelValidNumber\": function() { return /* binding */ tgcelValidNumber; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nvar tgcelRegex = /^[7,9]{1}[0-3]{1}[0-9]{6}$/;\nvar moovRegex = /^[7,9]{1}[6-9]{1}[0-9]{6}$/;\n/**\r\n *\r\n * @param {string | number} value\r\n * @returns\r\n */\nfunction tgcelValidNumber(value) {\n  return !tgcelRegex.test(value);\n}\n/**\r\n *\r\n * @param {string | number} value\r\n * @returns\r\n */\nfunction moovValidNumber(value) {\n  return !moovRegex.test(value);\n}\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(tgcelRegex, \"tgcelRegex\", \"D:\\\\projects\\\\gatom2\\\\src\\\\lib\\\\validation.js\");\n  reactHotLoader.register(moovRegex, \"moovRegex\", \"D:\\\\projects\\\\gatom2\\\\src\\\\lib\\\\validation.js\");\n  reactHotLoader.register(tgcelValidNumber, \"tgcelValidNumber\", \"D:\\\\projects\\\\gatom2\\\\src\\\\lib\\\\validation.js\");\n  reactHotLoader.register(moovValidNumber, \"moovValidNumber\", \"D:\\\\projects\\\\gatom2\\\\src\\\\lib\\\\validation.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://my-webpack-project/./src/lib/validation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "661867749ab03e93436f"; }
/******/ }();
/******/ 
/******/ }
);