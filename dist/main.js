/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modal.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modal.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n/* .modal-content {\\n  background-color: #fefefe;\\n  margin: 15% auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 50%;\\n} */\\n\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n.close:hover,\\n.close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n#modal__open-btn {\\n  display: flex;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  text-align: center;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  opacity: 0.9;\\n  background: none rgba(255, 255, 255, 0.2);\\n  box-shadow: none;\\n  margin-left: 10px;\\n  font-size: 13px;\\n  padding: 8px 12px;\\n  min-width: 70px;\\n  border: none;\\n  color: white !important;\\n}\\n\\nbutton {\\n  /* -webkit-writing-mode: horizontal-tb !important; */\\n  text-rendering: auto;\\n  color: -internal-light-dark(black, white);\\n  letter-spacing: normal;\\n  word-spacing: normal;\\n  text-transform: none;\\n  text-indent: 0px;\\n  text-shadow: none;\\n  text-align: center;\\n  cursor: default;\\n  font: 400 13.3333px Arial;\\n}\\n\\nbutton,\\ninput,\\ntextarea {\\n  font-family: \\\"ArialRounded\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\",\\n    Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\",\\n    \\\"Segoe UI Symbol\\\";\\n}\\n\\ninput {\\n  /* -webkit-writing-mode: horizontal-tb !important; */\\n  text-rendering: auto;\\n  letter-spacing: normal;\\n  word-spacing: normal;\\n  text-transform: none;\\n  text-indent: 0px;\\n  text-shadow: none;\\n  display: inline-block;\\n  text-align: start;\\n  -webkit-rtl-ordering: logical;\\n  font: 400 13.3333px Arial;\\n}\\n\\n.btn-img {\\n  width: 16px;\\n}\\n\\nbody {\\n  background-color: rgb(219, 82, 77);\\n}\\n\\n.modal-content {\\n  color: rgb(34, 34, 34);\\n  border-radius: 8px;\\n  background-color: white;\\n  position: relative;\\n  max-width: 400px;\\n  width: 95%;\\n  z-index: 2147483647;\\n  border-top: 1px solid rgb(239, 239, 239);\\n  border-bottom: 1px solid rgb(239, 239, 239);\\n  margin: auto;\\n  transition: all 0.2s ease-in 0s;\\n  transform: translateY(20px);\\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\\n  overflow: hidden;\\n  display: block;\\n}\\n\\n.padding-area {\\n  padding: 20px 20px 0px;\\n}\\n\\n.setting__remove-btn {\\n  position: absolute;\\n  top: 20px;\\n  right: 24px;\\n  cursor: pointer;\\n  width: 17px;\\n  opacity: 0.3;\\n  z-index: 2147483647;\\n}\\n\\n.footer {\\n  padding: 14px 20px;\\n  text-align: right;\\n  border-bottom-left-radius: 8px;\\n  border-bottom-right-radius: 8px;\\n  background-color: rgb(239, 239, 239);\\n}\\n\\n.footer__submit-btn {\\n  -webkit-box-align: center;\\n  align-items: center;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  text-align: center;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\\n  color: white;\\n  opacity: 0.9;\\n  font-size: 14px;\\n  padding: 8px 12px;\\n  min-width: 70px;\\n  background-color: rgb(34, 34, 34);\\n  border: 2px solid rgb(34, 34, 34);\\n  display: inline-block;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Pomodoro/./src/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/setting.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/setting.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n\\ninput[type=\\\"checkbox\\\"] + label {\\n  position: relative;\\n  display: inline-block;\\n  width: 36px;\\n  height: 21px;\\n  border-radius: 10px;\\n  background-color: #666;\\n  /*\\n    vertical-align: top;\\n    overflow: hidden;\\n    color: transparent;\\n*/\\n}\\n\\ninput[type=\\\"checkbox\\\"] + label:after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  top: 1px;\\n  left: 1px;\\n  width: 19px;\\n  height: 19px;\\n  background: #fff;\\n  border-radius: 50%;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + label {\\n  background-color: #62a7ee;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + label:after {\\n  left: auto;\\n  right: 1px;\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  position: absolute;\\n  /*\\n    overflow:hidden;\\n    width: 1px;\\n    height: 1px;\\n    margin: -1px;\\n    clip: rect(0,0,0,0);\\n*/\\n  opacity: 0;\\n}\\n/* 겹치는 부분 */\\nbutton {\\n  /* -webkit-writing-mode: horizontal-tb !important; */\\n  text-rendering: auto;\\n  color: -internal-light-dark(black, white);\\n  letter-spacing: normal;\\n  word-spacing: normal;\\n  text-transform: none;\\n  text-indent: 0px;\\n  text-shadow: none;\\n  text-align: center;\\n  cursor: default;\\n  font: 400 13.3333px Arial;\\n}\\n\\n/* 겹치는 부분 */\\nbutton,\\ninput,\\ntextarea {\\n  font-family: \\\"ArialRounded\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\",\\n    Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\",\\n    \\\"Segoe UI Symbol\\\";\\n}\\n\\n/* 겹치는 부분 */\\ninput {\\n  /* -webkit-writing-mode: horizontal-tb !important; */\\n  text-rendering: auto;\\n  letter-spacing: normal;\\n  word-spacing: normal;\\n  text-transform: none;\\n  text-indent: 0px;\\n  text-shadow: none;\\n  display: inline-block;\\n  text-align: start;\\n  -webkit-rtl-ordering: logical;\\n  font: 400 13.3333px Arial;\\n}\\n\\n/* 겹치는 부분 */\\n.btn-img {\\n  width: 16px;\\n}\\n\\n/* 겹치는 부분 */\\nbody {\\n  background-color: rgb(219, 82, 77);\\n}\\n\\n/* 겹치는 부분 */\\n.modal-content {\\n  color: rgb(34, 34, 34);\\n  border-radius: 8px;\\n  background-color: white;\\n  position: relative;\\n  max-width: 400px;\\n  width: 95%;\\n  z-index: 2147483647;\\n  border-top: 1px solid rgb(239, 239, 239);\\n  border-bottom: 1px solid rgb(239, 239, 239);\\n  margin: auto;\\n  transition: all 0.2s ease-in 0s;\\n  transform: translateY(20px);\\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\\n  overflow: hidden;\\n  display: block;\\n}\\n\\n/* 겹치는 부분 */\\n.padding-area {\\n  padding: 20px 20px 0px;\\n}\\n\\n.setting__remove-btn {\\n  position: absolute;\\n  top: 20px;\\n  right: 24px;\\n  cursor: pointer;\\n  width: 17px;\\n  opacity: 0.3;\\n  z-index: 2147483647;\\n}\\n\\n.setting__header {\\n  font-size: 16px;\\n  color: rgb(187, 187, 187);\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  margin-bottom: 16px;\\n}\\n\\n.setting__items {\\n  border-top: 1px solid rgba(182, 165, 166, 0.2);\\n  padding: 20px 0px;\\n  min-height: 30px;\\n  display: flex;\\n  flex-direction: column;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n}\\n\\n.title {\\n  color: rgb(85, 85, 85);\\n  font-weight: bold;\\n  display: flex;\\n  -webkit-box-align: center;\\n  align-items: center;\\n}\\n\\n.time__label {\\n  display: block;\\n  font-size: 14px;\\n  color: rgb(187, 187, 187);\\n  font-weight: bold;\\n  margin-bottom: 4px;\\n}\\n\\n.time__input {\\n  border-radius: 4px;\\n  background-color: rgb(239, 239, 239);\\n  font-size: 16px;\\n  padding: 10px;\\n  box-shadow: none;\\n  border: none;\\n  color: rgb(85, 85, 85);\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n.time__items {\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  justify-content: space-between;\\n  margin-top: 10px;\\n}\\n\\n.time__item {\\n  width: 98px;\\n}\\n\\n.content {\\n  width: 100%;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  justify-content: space-between;\\n  -webkit-box-align: center;\\n  align-items: center;\\n}\\n\\n.volume__content {\\n  display: flex;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  width: 50%;\\n}\\n\\n.volume__display {\\n  display: inline-block;\\n  width: 20%;\\n  text-align: center;\\n  color: rgb(187, 187, 187);\\n  margin-right: 5px;\\n}\\n\\n.volume__range {\\n  width: 80%;\\n  background-color: rgb(204, 204, 204);\\n  appearance: none;\\n  border-radius: 50px;\\n  height: 7px;\\n}\\n\\n.longBreakInterval__number {\\n  border-radius: 4px;\\n  background-color: rgb(239, 239, 239);\\n  font-size: 16px;\\n  padding: 10px;\\n  box-shadow: none;\\n  border: none;\\n  color: rgb(85, 85, 85);\\n  box-sizing: border-box;\\n  width: 70px;\\n}\\n\\n/* 겹치는 부분 */\\n.footer {\\n  padding: 14px 20px;\\n  text-align: right;\\n  border-bottom-left-radius: 8px;\\n  border-bottom-right-radius: 8px;\\n  background-color: rgb(239, 239, 239);\\n}\\n\\n/* 겹치는 부분 */\\n.footer__submit-btn {\\n  -webkit-box-align: center;\\n  align-items: center;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  text-align: center;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\\n  color: white;\\n  opacity: 0.9;\\n  font-size: 14px;\\n  padding: 8px 12px;\\n  min-width: 70px;\\n  background-color: rgb(34, 34, 34);\\n  border: 2px solid rgb(34, 34, 34);\\n  display: inline-block;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Pomodoro/./src/setting.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Pomodoro/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/modal.css":
/*!***********************!*\
  !*** ./src/modal.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modal.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://Pomodoro/./src/modal.css?");

/***/ }),

/***/ "./src/setting.css":
/*!*************************!*\
  !*** ./src/setting.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./setting.css */ \"./node_modules/css-loader/dist/cjs.js!./src/setting.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://Pomodoro/./src/setting.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Pomodoro/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ \"./src/modal.css\");\n/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.css */ \"./src/setting.css\");\n/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting */ \"./src/setting.js\");\n\n\n\n\nconst pomodoroSetting = new _setting__WEBPACK_IMPORTED_MODULE_2__.default();\npomodoroSetting.start();\n\n\n//# sourceURL=webpack://Pomodoro/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitButton\": () => /* binding */ submitButton,\n/* harmony export */   \"activateModal\": () => /* binding */ activateModal\n/* harmony export */ });\n/* modal 활성화 함수 */\nconst modal = document.querySelector(\".modal\");\nconst modalOpenBtn = document.getElementById(\"modal__open-btn\");\nconst modalCloseBtn = document.getElementsByClassName(\"setting__remove-btn\")[0];\nconst submitButton = document.getElementsByClassName(\"footer__submit-btn\")[0];\n\nfunction activateModal() {\n  modalOpenBtn.addEventListener(\"click\", openModal, false);\n  modalCloseBtn.addEventListener(\"click\", closeModal, false);\n  submitButton.addEventListener(\"click\", closeModal, false);\n\n  //modal 바깥쪽 영역 클릭시 modal close 구현\n  window.addEventListener(\n    \"click\",\n    (event) => {\n      if (event.target == modal) {\n        modal.style.display = \"none\";\n      }\n    },\n    false\n  );\n}\n\n/* modal close 함수 */\nfunction closeModal() {\n  modal.style.display = \"none\";\n}\n\n/* modal open 함수 */\nfunction openModal() {\n  modal.style.display = \"block\";\n}\n\n// modal 구현시 activateModal import 후 modal template 참고하여 사용\n\n\n\n//# sourceURL=webpack://Pomodoro/./src/modal.js?");

/***/ }),

/***/ "./src/setting.js":
/*!************************!*\
  !*** ./src/setting.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\nfunction getSetting() {\n  const pomodoro = document.querySelector(\".time__pomodoro\").value;\n  const shortBreak = document.querySelector(\".time__shortBreak\").value;\n  const longBreak = document.querySelector(\".time__longBreak\").value;\n  const didAutoStart = document.querySelector(\"#autoStart__checkBox\").checked;\n  const volume = document.querySelector(\".volume__range\").value;\n  const longBreakInterval = document.querySelector(\".longBreakInterval__number\")\n    .value;\n\n  console.log({\n    pomodoro,\n    shortBreak,\n    longBreak,\n    didAutoStart,\n    volume,\n    longBreakInterval,\n  });\n\n  return {\n    pomodoro,\n    shortBreak,\n    longBreak,\n    didAutoStart,\n    volume,\n    longBreakInterval,\n  };\n}\n\n/* submit Btn 클릭 시 getSetting 함수 호출 */\nfunction sendSettingValue() {\n  _modal__WEBPACK_IMPORTED_MODULE_0__.submitButton.addEventListener(\"click\", getSetting, false);\n}\n\nconst volumeRange = document.getElementById(\"vr\");\nconst volumeDisplay = document.getElementById(\"vd\");\n\n/* 반응형 volume input range 구현 */\nfunction responsiveVolumeValue() {\n  volumeRange.addEventListener(\"input\", changeVolumeValue, false);\n  volumeDisplay.innerText = volumeRange.value;\n\n  function changeVolumeValue() {\n    volumeDisplay.innerText = volumeRange.value;\n  }\n}\n\nclass Setting {\n  constructor() {}\n\n  start() {\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.activateModal)();\n    sendSettingValue();\n    responsiveVolumeValue();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);\n\n// const mySetting = [];\n\n// class Setting {\n//   constructor(\n//     pomodoro,\n//     shortBreak,\n//     longBreak,\n//     didAutoStart,\n//     volume,\n//     longBreakInterval\n//   ) {\n//     this.pomodoro = pomodoro;\n//     this.shortBreak = shortBreak;\n//     this.longBreak = longBreak;\n//     this.didAutoStart = didAutoStart;\n//     this.volume = volume;\n//     this.longBreakInterval = longBreakInterval;\n//   }\n// }\n\n\n//# sourceURL=webpack://Pomodoro/./src/setting.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;