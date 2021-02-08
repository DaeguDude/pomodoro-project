/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* .modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n} */\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#modal__open-btn {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.9;\n  background: none rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  margin-left: 10px;\n  font-size: 13px;\n  padding: 8px 12px;\n  min-width: 70px;\n  border: none;\n  color: white !important;\n}\n\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n.btn-img {\n  width: 16px;\n}\n\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/modal.css"],"names":[],"mappings":"AAAA,gBAAgB;;AAEhB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;;;;;;GAMG;;AAEH;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,yCAAyC;EACzC,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oDAAoD;EACpD,oBAAoB;EACpB,yCAAyC;EACzC,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;;;EAGE;;qBAEmB;AACrB;;AAEA;EACE,oDAAoD;EACpD,oBAAoB;EACpB,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,mBAAmB;EACnB,wCAAwC;EACxC,2CAA2C;EAC3C,YAAY;EACZ,+BAA+B;EAC/B,2BAA2B;EAC3B,6EAA6E;EAC7E,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,8BAA8B;EAC9B,+BAA+B;EAC/B,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,0CAA0C;EAC1C,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,iCAAiC;EACjC,iCAAiC;EACjC,qBAAqB;AACvB","sourcesContent":["@charset \"UTF-8\";\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* .modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n} */\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#modal__open-btn {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.9;\n  background: none rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  margin-left: 10px;\n  font-size: 13px;\n  padding: 8px 12px;\n  min-width: 70px;\n  border: none;\n  color: white !important;\n}\n\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n.btn-img {\n  width: 16px;\n}\n\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/navbar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/navbar.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n    margin: 0 auto;\n    width: 620px;\n    height: 60px;\n    padding: 20px;\n    border-bottom: 1px solid #b74c4c;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    width: 132px;\n    padding: 10px 0;\n    font-size: 20px;\n    color: white;\n}\n\n.logo a {\n    text-decoration: none;\n    color: white;\n\n}\n\n.logo img {\n    width: 20px;\n    margin-right: 4px;\n}\n\nnav {\n    height: 32px;\n    display: flex;\n    align-items: center;\n}\n\n.nav-btn {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    margin-left: 10px;\n    font-size: 13px;\n    padding: 8px 12px;\n    min-width: 70px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.mini-icon {\n    width: 16px;\n}\n\n\n.nav-btn div {\n    font-size: 13px;\n    margin-left: 4px;\n}\n\n\n.profile-box {\n    width: 32px;\n    margin-left: 8px;\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    font-size: 13px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.profile-box img {\n    width: 28px;\n    height: 28px;\n    margin: auto;\n    border-radius: 4px;\n    align-items: center;\n    display: flex;\n}\n\n.dropdown-container {\n    border-radius: 4px;\n    padding: 4px 0px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    background-color: white;\n    transform: translateY(10px);\n    width: 200px;\n    right: 0px;\n  }\n\n.dropdown-show {\n    display: block;\n    pointer-events: auto;\n}\n\n\n.dropdown-list {\n      color: rgb(79, 43, 65);\n      display: flex;\n      align-items: center;\n      padding: 10px 16px;\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n/* \n.dropdown-list :hover {\n    background-color: rgb(240, 238, 238);\n} */\n\n.dropdown-icon {\n      opacity: 0.8;\n      width: 14px;\n      margin-right: 8px;\n      color: rgb(79, 43, 45);\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/navbar.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yCAAyC;IACzC,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,wEAAwE;IACxE,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,YAAY;IACZ,UAAU;EACZ;;AAEF;IACI,cAAc;IACd,oBAAoB;AACxB;;;AAGA;MACM,sBAAsB;MACtB,aAAa;MACb,mBAAmB;MACnB,kBAAkB;MAClB,eAAe;MACf,eAAe;MACf,oBAAoB;AAC1B;AACA;;;GAGG;;AAEH;MACM,YAAY;MACZ,WAAW;MACX,iBAAiB;MACjB,sBAAsB;MACtB,eAAe;MACf,eAAe;MACf,oBAAoB;AAC1B","sourcesContent":["header {\n    margin: 0 auto;\n    width: 620px;\n    height: 60px;\n    padding: 20px;\n    border-bottom: 1px solid #b74c4c;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    width: 132px;\n    padding: 10px 0;\n    font-size: 20px;\n    color: white;\n}\n\n.logo a {\n    text-decoration: none;\n    color: white;\n\n}\n\n.logo img {\n    width: 20px;\n    margin-right: 4px;\n}\n\nnav {\n    height: 32px;\n    display: flex;\n    align-items: center;\n}\n\n.nav-btn {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    margin-left: 10px;\n    font-size: 13px;\n    padding: 8px 12px;\n    min-width: 70px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.mini-icon {\n    width: 16px;\n}\n\n\n.nav-btn div {\n    font-size: 13px;\n    margin-left: 4px;\n}\n\n\n.profile-box {\n    width: 32px;\n    margin-left: 8px;\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    font-size: 13px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.profile-box img {\n    width: 28px;\n    height: 28px;\n    margin: auto;\n    border-radius: 4px;\n    align-items: center;\n    display: flex;\n}\n\n.dropdown-container {\n    border-radius: 4px;\n    padding: 4px 0px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    background-color: white;\n    transform: translateY(10px);\n    width: 200px;\n    right: 0px;\n  }\n\n.dropdown-show {\n    display: block;\n    pointer-events: auto;\n}\n\n\n.dropdown-list {\n      color: rgb(79, 43, 65);\n      display: flex;\n      align-items: center;\n      padding: 10px 16px;\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n/* \n.dropdown-list :hover {\n    background-color: rgb(240, 238, 238);\n} */\n\n.dropdown-icon {\n      opacity: 0.8;\n      width: 14px;\n      margin-right: 8px;\n      color: rgb(79, 43, 45);\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* Remove styles for button */\n\nbutton {\n  font-size: 100%;\n  font-family: inherit;\n  border: 0;\n  padding: 0;\n}\n\nbutton:focus {\n  outline: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,6BAA6B;;AAE7B;EACE,eAAe;EACf,oBAAoB;EACpB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* Remove styles for button */\n\nbutton {\n  font-size: 100%;\n  font-family: inherit;\n  border: 0;\n  padding: 0;\n}\n\nbutton:focus {\n  outline: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/setting.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/setting.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n\ninput[type=\"checkbox\"] + label {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 21px;\n  border-radius: 10px;\n  background-color: #666;\n  /*\n    vertical-align: top;\n    overflow: hidden;\n    color: transparent;\n*/\n}\n\ninput[type=\"checkbox\"] + label:after {\n  position: absolute;\n  content: \"\";\n  top: 1px;\n  left: 1px;\n  width: 19px;\n  height: 19px;\n  background: #fff;\n  border-radius: 50%;\n}\n\ninput[type=\"checkbox\"]:checked + label {\n  background-color: #62a7ee;\n}\n\ninput[type=\"checkbox\"]:checked + label:after {\n  left: auto;\n  right: 1px;\n}\n\ninput[type=\"checkbox\"] {\n  position: absolute;\n  /*\n    overflow:hidden;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    clip: rect(0,0,0,0);\n*/\n  opacity: 0;\n}\n/* 겹치는 부분 */\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\n/* 겹치는 부분 */\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\n.btn-img {\n  width: 16px;\n}\n\n/* 겹치는 부분 */\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n/* 겹치는 부분 */\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n/* 겹치는 부분 */\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.setting__header {\n  font-size: 16px;\n  color: rgb(187, 187, 187);\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.setting__items {\n  border-top: 1px solid rgba(182, 165, 166, 0.2);\n  padding: 20px 0px;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.title {\n  color: rgb(85, 85, 85);\n  font-weight: bold;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.time__label {\n  display: block;\n  font-size: 14px;\n  color: rgb(187, 187, 187);\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.time__input {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.time__items {\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.time__item {\n  width: 98px;\n}\n\n.content {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.volume__content {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 50%;\n}\n\n.volume__display {\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  color: rgb(187, 187, 187);\n  margin-right: 5px;\n}\n\n.volume__range {\n  width: 80%;\n  background-color: rgb(204, 204, 204);\n  appearance: none;\n  border-radius: 50px;\n  height: 7px;\n}\n\n.longBreakInterval__number {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  box-sizing: border-box;\n  width: 70px;\n}\n\n/* 겹치는 부분 */\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n/* 겹치는 부분 */\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/setting.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n\ninput[type=\"checkbox\"] + label {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 21px;\n  border-radius: 10px;\n  background-color: #666;\n  /*\n    vertical-align: top;\n    overflow: hidden;\n    color: transparent;\n*/\n}\n\ninput[type=\"checkbox\"] + label:after {\n  position: absolute;\n  content: \"\";\n  top: 1px;\n  left: 1px;\n  width: 19px;\n  height: 19px;\n  background: #fff;\n  border-radius: 50%;\n}\n\ninput[type=\"checkbox\"]:checked + label {\n  background-color: #62a7ee;\n}\n\ninput[type=\"checkbox\"]:checked + label:after {\n  left: auto;\n  right: 1px;\n}\n\ninput[type=\"checkbox\"] {\n  position: absolute;\n  /*\n    overflow:hidden;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    clip: rect(0,0,0,0);\n*/\n  opacity: 0;\n}\n/* 겹치는 부분 */\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\n/* 겹치는 부분 */\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\n.btn-img {\n  width: 16px;\n}\n\n/* 겹치는 부분 */\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n/* 겹치는 부분 */\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n/* 겹치는 부분 */\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.setting__header {\n  font-size: 16px;\n  color: rgb(187, 187, 187);\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.setting__items {\n  border-top: 1px solid rgba(182, 165, 166, 0.2);\n  padding: 20px 0px;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.title {\n  color: rgb(85, 85, 85);\n  font-weight: bold;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.time__label {\n  display: block;\n  font-size: 14px;\n  color: rgb(187, 187, 187);\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.time__input {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.time__items {\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.time__item {\n  width: 98px;\n}\n\n.content {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.volume__content {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 50%;\n}\n\n.volume__display {\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  color: rgb(187, 187, 187);\n  margin-right: 5px;\n}\n\n.volume__range {\n  width: 80%;\n  background-color: rgb(204, 204, 204);\n  appearance: none;\n  border-radius: 50px;\n  height: 7px;\n}\n\n.longBreakInterval__number {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  box-sizing: border-box;\n  width: 70px;\n}\n\n/* 겹치는 부분 */\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n/* 겹치는 부분 */\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE;;qBAEmB;AACrB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/task.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/task.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\n/*** stylings for tags ***/\nbutton:hover { cursor: pointer; }\n\nbutton:active { transform: translateY(1px); }\n\n/*** UTILITY CLASSES ***/\n.edit-btn {\n  width: 32px;\n  padding: 8px;\n  color: white;\n  background: none rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n}\n\n/****************************************\nTask Section\n****************************************/\n.container {\n  height: 100vh;\n  padding-top: 30px;\n  background: rgb(219, 82, 77);\n}\n\n#task-section {\n  width: 480px;\n  margin: 0 auto;\n}\n\n#task-section header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 48px;\n  padding-bottom: 14px;\n  margin-bottom: 18px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.6);\n}\n\n#task-section header h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n}\n\n/****************************************\nTask List\n****************************************/\n.task-list {\n  display: flex;\n  flex-direction: column;\n}\n\n/****************************************\nTask \n****************************************/\n.task {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 62px;\n  padding: 18px 0 14px 18px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  border-left: 6px solid transparent;\n  background-color: white;\n  cursor: pointer;\n}\n.task:hover { border-left: 6px solid rgb(204, 204, 204); }\n.task:focus { \n  border-left: 6px solid rgb(34, 34, 34);\n  outline: none;\n}\n\n.task__check-marker {\n  margin-right: 10px;\n  font-size: 24px;\n  color: rgb(223, 223, 223);\n}\n\n.task__check-marker:hover { opacity: 0.6; }\n.task__check-marker--completed { color: rgb(219, 82, 77); }\n\n.task__title {\n  flex: 1 0 0;\n  max-width: 70%;\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n  overflow-wrap: break-word;\n}\n\n.task__title--completed {\n  text-decoration: line-through;\n  color: rgb(187, 187, 187);\n}\n\n.task__pomodoros {\n  display: flex;\n  align-items: center;\n  width: 40px;\n  margin: 0 10px;\n  font-weight: bold;\n  color: #bbb;\n}\n\n.task .edit-btn {\n  width: 30px;\n  height: 30px;\n  padding: 2px 4px;\n  border: 1px solid rgb(223, 223, 223);\n  color: #555;\n}\n\n.task .edit-btn:hover { background: rgb(223, 223, 223); }\n\n/****************************************\nAdd Task Button\n****************************************/\n.add-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 62px;\n  margin: 8px 0;\n  border: 2px dashed rgba(255, 255, 255, 0.4);\n  border-radius: 8px;\n  font-weight: bold;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.1);\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.add-task-btn:hover {\n  border: 2px dashed rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n\n.add-task-btn .fa-plus-circle { margin-right: 8px; }\n\n/****************************************\nTASK DETAIL CARD\n****************************************/\n\n.task-detail {\n  display: flex;\n  flex-direction: column;\n  width: 480px;\n  margin-bottom: 8px;\n  background-color: white;\n  border-radius: 8px;\n}\n\n.task-detail main {\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n  padding: 18px 20px 18px;\n}\n\n.task-detail__title {\n  height: 61px;\n  padding: 8px 0;\n}\n\ninput[name=\"task-detail__title\"] {\n  width: 100%;\n  padding: 10px 0px;\n  border: none;\n  font-size: 22px;\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n  box-shadow: none;\n}\n\ninput[name=\"task-detail__title\"]:focus { outline: none; }\ninput[name=\"task-detail__title\"]::placeholder { color: rgba(0, 0, 0, 0.4); }\n\n.task-detail__pomodoro {\n  height: 82px;\n  padding: 8px 0;\n}\n\n.task-detail__pomodoro-content { margin-top: 8px; }\n\n.task-detail .label {\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n}\n\ninput[name=\"number-pomodoros\"] {\n  width: 75px;\n  padding: 10px;\n  margin-right: 10px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n  background-color: rgb(239, 239, 239);\n  box-shadow: none;\n}\n\ninput[name=\"number-pomodoros\"]:focus { outline: none; }\n\n.pomodoro-updown-btn {\n  width: 40px;\n  padding: 8px 12px;\n  margin: 0px 2px;\n  border: 1px solid rgb(223, 223, 223);\n  border-radius: 4px;\n  font-size: 14px;\n  color: rgb(85, 85, 85);\n  background-color: white;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.task-detail__note {\n  padding: 8px 0;\n}\n\n.add-note-btn {\n  font-size: 14px;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.4);\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n  opacity: 0.9;\n}\n\ntextarea[name=\"note\"] {\n  width: 100%;\n  padding: 10px 14px;\n  margin: 8px 0px;\n  border: none;\n  border-radius: 4px;\n  font-size: 15px;\n  line-height: 1.4em;\n  color: rgb(85, 85, 85);\n  background-color: rgb(239, 239, 239);\n}\n\ntextarea[name=\"note\"]:focus { outline: none; }\ntextarea[name=\"note\"]::placeholder { color: rgba(0, 0, 0, 0.4); }\n\n\n\n.task-detail footer {\n  display: flex;\n  align-items: center;\n  height: 62px;\n  padding: 14px 20px;\n  border-radius: 0 0 8px 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n.create-task footer { justify-content: flex-end; }\n.edit-task footer { justify-content: space-between; }\n\n.task-detail__delete-btn {\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  margin-right: 14px;\n  background: none;\n  border: none;\n  color: rgb(136, 136, 136);\n  font-weight: bold;\n  box-shadow: none;\n}\n\n.task-detail__cancel-btn {\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  margin-right: 14px;\n  background: none;\n  border: none;\n  color: rgb(136, 136, 136);\n  font-weight: bold;\n}\n\n.task-detail__cancel-btn:hover {\n  color: rgb(128, 128, 128);\n  opacity: 1;\n}\n\n.task-detail__save-btn {\n  min-width: 70px;\n  padding: 10px 12px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: white;\n  background-color: rgb(34, 34, 34);\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;\n  opacity: 0.9;\n}\n\n.task-detail__save-btn--disabled {\n  pointer-events: none;\n  background-color: rgb(171, 171, 171);\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/task.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\n/*** stylings for tags ***/\nbutton:hover { cursor: pointer; }\n\nbutton:active { transform: translateY(1px); }\n\n/*** UTILITY CLASSES ***/\n.edit-btn {\n  width: 32px;\n  padding: 8px;\n  color: white;\n  background: none rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n}\n\n/****************************************\nTask Section\n****************************************/\n.container {\n  height: 100vh;\n  padding-top: 30px;\n  background: rgb(219, 82, 77);\n}\n\n#task-section {\n  width: 480px;\n  margin: 0 auto;\n}\n\n#task-section header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 48px;\n  padding-bottom: 14px;\n  margin-bottom: 18px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.6);\n}\n\n#task-section header h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n}\n\n/****************************************\nTask List\n****************************************/\n.task-list {\n  display: flex;\n  flex-direction: column;\n}\n\n/****************************************\nTask \n****************************************/\n.task {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 62px;\n  padding: 18px 0 14px 18px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  border-left: 6px solid transparent;\n  background-color: white;\n  cursor: pointer;\n}\n.task:hover { border-left: 6px solid rgb(204, 204, 204); }\n.task:focus { \n  border-left: 6px solid rgb(34, 34, 34);\n  outline: none;\n}\n\n.task__check-marker {\n  margin-right: 10px;\n  font-size: 24px;\n  color: rgb(223, 223, 223);\n}\n\n.task__check-marker:hover { opacity: 0.6; }\n.task__check-marker--completed { color: rgb(219, 82, 77); }\n\n.task__title {\n  flex: 1 0 0;\n  max-width: 70%;\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n  overflow-wrap: break-word;\n}\n\n.task__title--completed {\n  text-decoration: line-through;\n  color: rgb(187, 187, 187);\n}\n\n.task__pomodoros {\n  display: flex;\n  align-items: center;\n  width: 40px;\n  margin: 0 10px;\n  font-weight: bold;\n  color: #bbb;\n}\n\n.task .edit-btn {\n  width: 30px;\n  height: 30px;\n  padding: 2px 4px;\n  border: 1px solid rgb(223, 223, 223);\n  color: #555;\n}\n\n.task .edit-btn:hover { background: rgb(223, 223, 223); }\n\n/****************************************\nAdd Task Button\n****************************************/\n.add-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 62px;\n  margin: 8px 0;\n  border: 2px dashed rgba(255, 255, 255, 0.4);\n  border-radius: 8px;\n  font-weight: bold;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.1);\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.add-task-btn:hover {\n  border: 2px dashed rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n\n.add-task-btn .fa-plus-circle { margin-right: 8px; }\n\n/****************************************\nTASK DETAIL CARD\n****************************************/\n\n.task-detail {\n  display: flex;\n  flex-direction: column;\n  width: 480px;\n  margin-bottom: 8px;\n  background-color: white;\n  border-radius: 8px;\n}\n\n.task-detail main {\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n  padding: 18px 20px 18px;\n}\n\n.task-detail__title {\n  height: 61px;\n  padding: 8px 0;\n}\n\ninput[name=\"task-detail__title\"] {\n  width: 100%;\n  padding: 10px 0px;\n  border: none;\n  font-size: 22px;\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n  box-shadow: none;\n}\n\ninput[name=\"task-detail__title\"]:focus { outline: none; }\ninput[name=\"task-detail__title\"]::placeholder { color: rgba(0, 0, 0, 0.4); }\n\n.task-detail__pomodoro {\n  height: 82px;\n  padding: 8px 0;\n}\n\n.task-detail__pomodoro-content { margin-top: 8px; }\n\n.task-detail .label {\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n}\n\ninput[name=\"number-pomodoros\"] {\n  width: 75px;\n  padding: 10px;\n  margin-right: 10px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(85, 85, 85);\n  background-color: rgb(239, 239, 239);\n  box-shadow: none;\n}\n\ninput[name=\"number-pomodoros\"]:focus { outline: none; }\n\n.pomodoro-updown-btn {\n  width: 40px;\n  padding: 8px 12px;\n  margin: 0px 2px;\n  border: 1px solid rgb(223, 223, 223);\n  border-radius: 4px;\n  font-size: 14px;\n  color: rgb(85, 85, 85);\n  background-color: white;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.task-detail__note {\n  padding: 8px 0;\n}\n\n.add-note-btn {\n  font-size: 14px;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.4);\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n  opacity: 0.9;\n}\n\ntextarea[name=\"note\"] {\n  width: 100%;\n  padding: 10px 14px;\n  margin: 8px 0px;\n  border: none;\n  border-radius: 4px;\n  font-size: 15px;\n  line-height: 1.4em;\n  color: rgb(85, 85, 85);\n  background-color: rgb(239, 239, 239);\n}\n\ntextarea[name=\"note\"]:focus { outline: none; }\ntextarea[name=\"note\"]::placeholder { color: rgba(0, 0, 0, 0.4); }\n\n\n\n.task-detail footer {\n  display: flex;\n  align-items: center;\n  height: 62px;\n  padding: 14px 20px;\n  border-radius: 0 0 8px 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n.create-task footer { justify-content: flex-end; }\n.edit-task footer { justify-content: space-between; }\n\n.task-detail__delete-btn {\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  margin-right: 14px;\n  background: none;\n  border: none;\n  color: rgb(136, 136, 136);\n  font-weight: bold;\n  box-shadow: none;\n}\n\n.task-detail__cancel-btn {\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  margin-right: 14px;\n  background: none;\n  border: none;\n  color: rgb(136, 136, 136);\n  font-weight: bold;\n}\n\n.task-detail__cancel-btn:hover {\n  color: rgb(128, 128, 128);\n  opacity: 1;\n}\n\n.task-detail__save-btn {\n  min-width: 70px;\n  padding: 10px 12px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: white;\n  background-color: rgb(34, 34, 34);\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;\n  opacity: 0.9;\n}\n\n.task-detail__save-btn--disabled {\n  pointer-events: none;\n  background-color: rgb(171, 171, 171);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/timer.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/timer.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_Arial_Rounded_MT_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/Arial-Rounded-MT-Bold.ttf */ "./src/fonts/Arial-Rounded-MT-Bold.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Arial_Rounded_MT_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'ArialRounded';\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: 'ArialRounded';\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: bold;\n}\n\n\nbody {\n  transition: all ease 1s 0s;\n  font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\n.slow-transition {\n  transition: all ease 1s 0s;\n  font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\n* {\n    text-align: center;\n}\n\ndiv > div {\n  font-size: 30px;\n}\n\n\n#mode > input[type=button] {\n  border: none;\n  color: white;\n  margin: 0px;\n  border-radius: 4px;\n  font-family: ArialRounded;\n  font-size: 16px;\n  padding: 2px 12px;\n  height: 28px;\n  cursor: pointer;\n  background: transparent;\n  box-shadow: none;\n  font-weight: 300;\n  outline: none;\n}\n\n.clickedBtn {\n  background: none rgba(0, 0, 0, 0.15) !important;\n}\n\n\n#time > input[type=button] {\n  cursor: pointer;\n    border: none;\n    margin: 20px 0px 0px;\n    padding: 0px 12px;\n    border-radius: 4px;\n    font-family: ArialRounded;\n    font-size: 22px;\n    height: 55px;\n    font-weight: bold;\n    width: 200px;\n    background-color: white;\n    transition: color 0.5s ease-in-out 0s;\n    outline: none;\n}\n\n#wrap {\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 20px 0px 30px;\n  border-radius: 6px;\n  margin: 0 auto;\n  max-width: 480px;\n}\n\n#time > h1 {\n  font-size: 120px;\n  font-weight: bold;\n  margin-top: 20px;\n  color: white;\n  padding: 0px;\n  margin: 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/timer.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,+DAAiE;EACjE,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,+DAAiE;EACjE,iBAAiB;AACnB;;;AAGA;EACE,0BAA0B;EAC1B,0KAA0K;AAC5K;;AAEA;EACE,0BAA0B;EAC1B,0KAA0K;AAC5K;;AAEA;IACI,kBAAkB;AACtB;;AAEA;EACE,eAAe;AACjB;;;AAGA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,+CAA+C;AACjD;;;AAGA;EACE,eAAe;IACb,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;IACvB,qCAAqC;IACrC,aAAa;AACjB;;AAEA;EACE,0CAA0C;EAC1C,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: 'ArialRounded';\n  font-display: swap;\n  src: url('../fonts/Arial-Rounded-MT-Bold.ttf') format('truetype');\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: 'ArialRounded';\n  font-display: swap;\n  src: url('../fonts/Arial-Rounded-MT-Bold.ttf') format('truetype');\n  font-weight: bold;\n}\n\n\nbody {\n  transition: all ease 1s 0s;\n  font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\n.slow-transition {\n  transition: all ease 1s 0s;\n  font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\n* {\n    text-align: center;\n}\n\ndiv > div {\n  font-size: 30px;\n}\n\n\n#mode > input[type=button] {\n  border: none;\n  color: white;\n  margin: 0px;\n  border-radius: 4px;\n  font-family: ArialRounded;\n  font-size: 16px;\n  padding: 2px 12px;\n  height: 28px;\n  cursor: pointer;\n  background: transparent;\n  box-shadow: none;\n  font-weight: 300;\n  outline: none;\n}\n\n.clickedBtn {\n  background: none rgba(0, 0, 0, 0.15) !important;\n}\n\n\n#time > input[type=button] {\n  cursor: pointer;\n    border: none;\n    margin: 20px 0px 0px;\n    padding: 0px 12px;\n    border-radius: 4px;\n    font-family: ArialRounded;\n    font-size: 22px;\n    height: 55px;\n    font-weight: bold;\n    width: 200px;\n    background-color: white;\n    transition: color 0.5s ease-in-out 0s;\n    outline: none;\n}\n\n#wrap {\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 20px 0px 30px;\n  border-radius: 6px;\n  margin: 0 auto;\n  max-width: 480px;\n}\n\n#time > h1 {\n  font-size: 120px;\n  font-weight: bold;\n  margin-top: 20px;\n  color: white;\n  padding: 0px;\n  margin: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/fonts/Arial-Rounded-MT-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Arial-Rounded-MT-Bold.ttf ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e0b4989b2095bff370bee4d9af8f1a2f.ttf");

/***/ }),

/***/ "./src/share_navbar/img/config-white.png":
/*!***********************************************!*\
  !*** ./src/share_navbar/img/config-white.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2587b489af2ce08a8d3151dde756175b.png");

/***/ }),

/***/ "./src/share_navbar/img/delete-black.png":
/*!***********************************************!*\
  !*** ./src/share_navbar/img/delete-black.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ddeaa5f077acf3511b6b258d5b131c54.png");

/***/ }),

/***/ "./src/share_navbar/img/google-black.png":
/*!***********************************************!*\
  !*** ./src/share_navbar/img/google-black.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c58fe3541a86601b12fea84f012bebdc.png");

/***/ }),

/***/ "./src/share_navbar/img/graph-white.png":
/*!**********************************************!*\
  !*** ./src/share_navbar/img/graph-white.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cccf60a393a81a4bb99475c857ed291c.png");

/***/ }),

/***/ "./src/share_navbar/img/icon-white.png":
/*!*********************************************!*\
  !*** ./src/share_navbar/img/icon-white.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9760d7a558046f9dee20e052a81c4a6c.png");

/***/ }),

/***/ "./src/share_navbar/img/logout-black.png":
/*!***********************************************!*\
  !*** ./src/share_navbar/img/logout-black.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "978ce0fa6f0727582a5e9285580ab091.png");

/***/ }),

/***/ "./src/share_navbar/img/rocket-black.png":
/*!***********************************************!*\
  !*** ./src/share_navbar/img/rocket-black.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bffbe130d2fe2c4b549a8150ba1266af.png");

/***/ }),

/***/ "./src/share_navbar/img/user-black.png":
/*!*********************************************!*\
  !*** ./src/share_navbar/img/user-black.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5e9c68571282914685ace0f503e5dc83.png");

/***/ }),

/***/ "./src/share_navbar/img/user-white.png":
/*!*********************************************!*\
  !*** ./src/share_navbar/img/user-white.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1d23e72974cdd2a0d7505900b9aa020e.png");

/***/ }),

/***/ "./src/timer/sounds/alertSound.mp3":
/*!*****************************************!*\
  !*** ./src/timer/sounds/alertSound.mp3 ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "12062a25649a221632662899d3812e41.mp3");

/***/ }),

/***/ "./src/styles/modal.css":
/*!******************************!*\
  !*** ./src/styles/modal.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/navbar.css":
/*!*******************************!*\
  !*** ./src/styles/navbar.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/navbar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/setting.css":
/*!********************************!*\
  !*** ./src/styles/setting.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./setting.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/setting.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/task.css":
/*!*****************************!*\
  !*** ./src/styles/task.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/task.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/timer.css":
/*!******************************!*\
  !*** ./src/styles/timer.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./timer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/timer.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _share_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share_navbar/navbar */ "./src/share_navbar/navbar.js");
/* harmony import */ var _setting_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting/setting */ "./src/setting/setting.js");
/* harmony import */ var _taskSection_taskSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskSection/taskSection */ "./src/taskSection/taskSection.js");
/* harmony import */ var _timer_timerSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timerSection */ "./src/timer/timerSection.js");
_share_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = await Promise.resolve(_share_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__);










const myTaskSection = new _taskSection_taskSection__WEBPACK_IMPORTED_MODULE_4__.default();
const mySetting = new _setting_setting__WEBPACK_IMPORTED_MODULE_3__.default();
(0,_share_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__.renderHeader)();
mySetting.start();

console.log(_timer_timerSection__WEBPACK_IMPORTED_MODULE_5__.mode);
console.log(_timer_timerSection__WEBPACK_IMPORTED_MODULE_5__.timer);

_timer_timerSection__WEBPACK_IMPORTED_MODULE_5__.mode.setDefaultMode();
_timer_timerSection__WEBPACK_IMPORTED_MODULE_5__.mode.waitForMode();
_timer_timerSection__WEBPACK_IMPORTED_MODULE_5__.timer.waitForTimer();
_timer_timerSection__WEBPACK_IMPORTED_MODULE_5__.timer.listenSettings();

const container = document.querySelector(".container");
console.log(container);
container.appendChild(myTaskSection.render());
myTaskSection.start();

return __webpack_exports__;
})();

/***/ }),

/***/ "./src/setting/modal.js":
/*!******************************!*\
  !*** ./src/setting/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalOpenButton": () => /* binding */ createModalOpenButton,
/* harmony export */   "createModalArticle": () => /* binding */ createModalArticle,
/* harmony export */   "addFooterArticle": () => /* binding */ addFooterArticle,
/* harmony export */   "activateModal": () => /* binding */ activateModal
/* harmony export */ });
/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/modal.css */ "./src/styles/modal.css");


const modalOpenButton = `<button type="button" id="modal__open-btn">
<img src="../img/config-white.png" alt="config icon" class="btn-img" />
&nbsp;Setting
</button>`;

const modalArticle = `
<div class="modal">
<div class="modal-content" id="modal-content">
  <div class="padding-area" id="padding-area">
    <img
      src="../img/remove-black-sm.png"
      alt="remove icon"
      class="setting__remove-btn btn-img close"
    />
  </div>
</div>`;

const footerArticle = `
<div class="footer">
  <footer>
    <button type="submit" class="footer__submit-btn">OK</button>
  </footer>
</div>`;

function createModalOpenButton() {
  const fragment = document
    .createRange()
    .createContextualFragment(modalOpenButton);
  document.querySelector("body").appendChild(fragment);
}

function createModalArticle() {
  const fragment = document
    .createRange()
    .createContextualFragment(modalArticle);
  document.querySelector("body").appendChild(fragment);
}

function addFooterArticle() {
  const fragment = document
    .createRange()
    .createContextualFragment(footerArticle);
  document.getElementById("modal-content").appendChild(fragment);
}

/* modal close 함수 */
function closeModal() {
  document.querySelector(".modal").style.display = "none";
}

/* modal open 함수 */
function openModal() {
  document.querySelector(".modal").style.display = "block";
}

/* modal 활성화 함수 */
function activateModal() {
  document
    .getElementById("modal__open-btn")
    .addEventListener("click", openModal);
  document
    .getElementsByClassName("setting__remove-btn")[0]
    .addEventListener("click", closeModal);
  document
    .getElementsByClassName("footer__submit-btn")[0]
    .addEventListener("click", closeModal);

  //modal 바깥쪽 영역 클릭시 modal close 구현
  window.addEventListener(
    "click",
    (event) => {
      if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
      }
    },
    false
  );
}



// const modal = document.querySelector(".modal");
// const modalOpenBtn = document.getElementById("modal__open-btn");
// const modalCloseBtn = document.getElementsByClassName("setting__remove-btn")[0];
// const submitButton = document.getElementsByClassName("footer__submit-btn")[0];


/***/ }),

/***/ "./src/setting/setting.js":
/*!********************************!*\
  !*** ./src/setting/setting.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/setting/modal.js");
/* harmony import */ var _styles_setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/setting.css */ "./src/styles/setting.css");




const settingArticle = `<div class="setting">
<header class="setting__header">
  <div>Timer Setting</div>
</header>
<article>
  <div class="setting__items">
    <div class="time__title">
      <span class="title">Time (minutes)</span>
    </div>
    <div class="time__items">
      <div class="time__item">
        <div class="time__pomodoro__label">
          <label class="time__label">Pomodoro</label>
        </div>
        <input
          type="number"
          min="0"
          step="1"
          class="time__input time__pomodoro"
          value="1"
        />
      </div>

      <div class="time__item">
        <div class="time__short__label">
          <label class="time__label">Short Break</label>
        </div>
        <input
          type="number"
          min="0"
          step="1"
          class="time__input time__shortBreak"
          value="5"
        />
      </div>

      <div class="time__item">
        <div class="time__long__label">
          <label class="time__label">Long Break</label>
        </div>
        <input
          type="number"
          min="0"
          step="1"
          class="time__input time__longBreak"
          value="15"
        />
      </div>
    </div>
  </div>

  <div class="setting__items">
    <div class="content">
      <div class="autoStart__title">
        <span class="title">Auto start next round?</span>
      </div>
      <div>
        <input type="checkBox" id="autoStart__checkBox" name="" />
        <label for="autoStart__checkBox"></label>
      </div>
    </div>
  </div>

  <div class="setting__items">
    <div class="content">
      <div class="volume__title">
        <span class="title">Sound Volume</span>
      </div>
      <div class="volume__content">
        <div class="volume__display"><span id="volume__display">50</span></div>
        <input
          type="range"
          min="0"
          max="100"
          class="volume__range"
          id="volume__range"
          value="50"
        />
      </div>
    </div>
  </div>

  <div class="setting__items">
    <div class="content">
      <div class="longBreakInterval__title">
        <span class="title">Long Break Interval</span>
      </div>
      <div>
        <input
          type="number"
          min="1"
          step="1"
          width="70"
          class="longBreakInterval__number"
          value="4"
        />
      </div>
    </div>
  </div>
</article>
</div>
</div>
`;

function getSetting() {
  const pomodoro = document.querySelector(".time__pomodoro").value;
  const shortBreak = document.querySelector(".time__shortBreak").value;
  const longBreak = document.querySelector(".time__longBreak").value;
  const didAutoStart = document.querySelector("#autoStart__checkBox").checked;
  const volume = document.querySelector(".volume__range").value;
  const longBreakInterval = document.querySelector(".longBreakInterval__number")
    .value;

  return {
    pomodoro,
    shortBreak,
    longBreak,
    didAutoStart,
    volume,
    longBreakInterval,
  };
}

/* submit Btn 클릭 시 getSetting 함수 호출 */
function sendSettingValue() {
  document
    .getElementsByClassName("footer__submit-btn")[0]
    .addEventListener("click", getSetting, false);
}

/* 반응형 volume input range 구현 */
function responsiveVolumeValue() {
  document
    .getElementById("volume__range")
    .addEventListener("input", changeVolumeValue, false);
  document.getElementById(
    "volume__display"
  ).innerText = document.getElementById("volume__range").value;

  function changeVolumeValue() {
    document.getElementById(
      "volume__display"
    ).innerText = document.getElementById("volume__range").value;
  }
}

function addSettingArticle() {
  const fragment = document
    .createRange()
    .createContextualFragment(settingArticle);
  document.getElementById("padding-area").appendChild(fragment);
}

class Setting {
  constructor() {}

  start() {
    // createModalOpenButton();
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.createModalArticle)();
    addSettingArticle();
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.addFooterArticle)();
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.activateModal)();
    sendSettingValue();
    responsiveVolumeValue();
  }

  get() {
    return getSetting();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);

// const volumeRange = document.getElementById("volume__range");
// const volumeDisplay = document.getElementById("volume__display");


/***/ }),

/***/ "./src/share_navbar/navbar.js":
/*!************************************!*\
  !*** ./src/share_navbar/navbar.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => /* reexport safe */ _script_navbar__WEBPACK_IMPORTED_MODULE_1__.renderHeader,
/* harmony export */   "startApp": () => /* reexport safe */ _script_auth__WEBPACK_IMPORTED_MODULE_2__.startApp
/* harmony export */ });
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/navbar.css */ "./src/styles/navbar.css");
/* harmony import */ var _script_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/navbar */ "./src/share_navbar/script/navbar.js");
/* harmony import */ var _script_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/auth */ "./src/share_navbar/script/auth.js");
([_script_auth__WEBPACK_IMPORTED_MODULE_2__, _script_navbar__WEBPACK_IMPORTED_MODULE_1__] = await Promise.all([_script_auth__WEBPACK_IMPORTED_MODULE_2__, _script_navbar__WEBPACK_IMPORTED_MODULE_1__]));




return __webpack_exports__;
})();

/***/ }),

/***/ "./src/share_navbar/script/auth.js":
/*!*****************************************!*\
  !*** ./src/share_navbar/script/auth.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startApp": () => /* binding */ startApp,
/* harmony export */   "signOut": () => /* binding */ signOut,
/* harmony export */   "isLoggedIn": () => /* binding */ isLoggedIn,
/* harmony export */   "googleUserImg": () => /* binding */ googleUserImg
/* harmony export */ });
/* harmony import */ var googleAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleAPI */ "googleAPI");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/share_navbar/script/navbar.js");
([_navbar__WEBPACK_IMPORTED_MODULE_1__, googleAPI__WEBPACK_IMPORTED_MODULE_0__] = await Promise.all([_navbar__WEBPACK_IMPORTED_MODULE_1__, googleAPI__WEBPACK_IMPORTED_MODULE_0__]));
/* harmony import */ var googleAPI__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleAPI__WEBPACK_IMPORTED_MODULE_0__);



var googleUser = {};
let googleUserImg;
let isLoggedIn;

var startApp = function() {
  googleAPI__WEBPACK_IMPORTED_MODULE_0___default().load('auth2', function(){
    let auth2;
    auth2 = googleAPI__WEBPACK_IMPORTED_MODULE_0___default().auth2.init({
      client_id: '886700924848-jm5ejqtkomd15mh1uo08j0q2ou0kgqk4.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('google-signin'), auth2);
  });
};

function attachSignin(element, auth2) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        console.log(`Signed in: ${googleUser.getBasicProfile().getName()}`);
        googleUserImg = googleUser.getBasicProfile().getImageUrl();
        isLoggedIn = googleUser.isSignedIn();
        (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.toggleOnNavbar)();
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

function signOut() {
  var auth2 = googleAPI__WEBPACK_IMPORTED_MODULE_0___default().auth2.getAuthInstance();
  auth2.signOut().then(function () {
    (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.toggleOffNavbar)();
    console.log('User signed out.');
    });
  }


return __webpack_exports__;
})();

/***/ }),

/***/ "./src/share_navbar/script/display/brand-logo.js":
/*!*******************************************************!*\
  !*** ./src/share_navbar/script/display/brand-logo.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrandLogo": () => /* binding */ getBrandLogo
/* harmony export */ });
/* harmony import */ var _img_icon_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/icon-white.png */ "./src/share_navbar/img/icon-white.png");


const brandLogo = document.querySelector('.logo');

function getBrandLogo() {
    const logoBox = document.createRange().createContextualFragment(`
    <a href="/">
        <img src="${_img_icon_white_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="">Pomofocus
    </a>
`);
    brandLogo.appendChild(logoBox);
}



/***/ }),

/***/ "./src/share_navbar/script/display/login-btn.js":
/*!******************************************************!*\
  !*** ./src/share_navbar/script/display/login-btn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginBtn": () => /* binding */ getLoginBtn,
/* harmony export */   "rmLoginBtn": () => /* binding */ rmLoginBtn
/* harmony export */ });
/* harmony import */ var _img_user_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/user-white.png */ "./src/share_navbar/img/user-white.png");
/* harmony import */ var _img_google_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/google-black.png */ "./src/share_navbar/img/google-black.png");



const nav = document.querySelector('nav');

function toggleLoginDropdown() {
    document.querySelector('#login-dropdown').classList.toggle("dropdown-show");
    console.log("click");
}

function getLoginBtn() {
    const loginBtn = document.createRange().createContextualFragment(`
    <div class="profile-area">
        <button class="nav-btn" id="login-btn">
            <img src="${_img_user_white_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="" class="mini-icon"><div>Login</div>
        </button>
        <div class="dropdown-container" id="login-dropdown">
            <div class="dropdown-list" id="google-signin">
                <img src="${_img_google_black_png__WEBPACK_IMPORTED_MODULE_1__.default}" alt="" class="dropdown-icon"><div>Login with Google</div>
            </div>
        </div>    
    </div>
`);
    nav.appendChild(loginBtn);
    document.getElementById("login-btn").addEventListener("click", toggleLoginDropdown);
}

function rmLoginBtn() {
    document.querySelector('.profile-area').remove();
}



/***/ }),

/***/ "./src/share_navbar/script/display/profile-btn.js":
/*!********************************************************!*\
  !*** ./src/share_navbar/script/display/profile-btn.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileBtn": () => /* binding */ getProfileBtn
/* harmony export */ });
/* harmony import */ var _img_user_black_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/user-black.png */ "./src/share_navbar/img/user-black.png");
/* harmony import */ var _img_rocket_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/rocket-black.png */ "./src/share_navbar/img/rocket-black.png");
/* harmony import */ var _img_logout_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/logout-black.png */ "./src/share_navbar/img/logout-black.png");
/* harmony import */ var _img_delete_black_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/delete-black.png */ "./src/share_navbar/img/delete-black.png");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ "./src/share_navbar/script/auth.js");
_auth__WEBPACK_IMPORTED_MODULE_4__ = await Promise.resolve(_auth__WEBPACK_IMPORTED_MODULE_4__);






const nav = document.querySelector('nav');


function toggleProfileDropdown() {
    document.querySelector('#profile-dropdown').classList.toggle("dropdown-show");
    console.log("click");
}

//render profile button
function getProfileBtn() {
    const profileBtn = document.createRange().createContextualFragment(`
    <div class="profile-area">
    <button class="nav-btn" id="profile-btn">
        <img src="${_auth__WEBPACK_IMPORTED_MODULE_4__.googleUserImg}" alt="" class="mini-icon"><div></div>
    </button>
    <div class="dropdown-container" id="profile-dropdown">
        <div class="dropdown-list" id="profile-menu">
            <img src="${_img_user_black_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="" class="dropdown-icon"><div>Profile</div>
        </div>
        <div class="dropdown-list" id="subscription-menu">
            <img src="${_img_rocket_black_png__WEBPACK_IMPORTED_MODULE_1__.default}" alt="" class="dropdown-icon"><div>Subscription</div>
        </div>
        <div class="dropdown-list" id="google-logout">
            <img src="${_img_logout_black_png__WEBPACK_IMPORTED_MODULE_2__.default}" alt="" class="dropdown-icon"><div>Logout</div>
        </div>
        <div class="dropdown-list" id="delete-account">
            <img src="${_img_delete_black_png__WEBPACK_IMPORTED_MODULE_3__.default}" alt="" class="dropdown-icon"><div>DeleteAccount</div>
        </div>
    </div>    
</div>
`);
    nav.appendChild(profileBtn);
    document.getElementById("profile-btn").addEventListener("click", toggleProfileDropdown);
    document.getElementById("google-logout").addEventListener("click", _auth__WEBPACK_IMPORTED_MODULE_4__.signOut);
}


return __webpack_exports__;
})();

/***/ }),

/***/ "./src/share_navbar/script/display/report-btn.js":
/*!*******************************************************!*\
  !*** ./src/share_navbar/script/display/report-btn.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReportBtn": () => /* binding */ getReportBtn
/* harmony export */ });
/* harmony import */ var _img_graph_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/graph-white.png */ "./src/share_navbar/img/graph-white.png");


const nav = document.querySelector('nav');

function getReportBtn() {
    const reportBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn report-btn">
        <img src="${_img_graph_white_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="" class="mini-icon"><div>Report</div>
    </button>
`);
    nav.appendChild(reportBtn);
}



/***/ }),

/***/ "./src/share_navbar/script/display/setting-btn.js":
/*!********************************************************!*\
  !*** ./src/share_navbar/script/display/setting-btn.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingBtn": () => /* binding */ getSettingBtn
/* harmony export */ });
/* harmony import */ var _img_config_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/config-white.png */ "./src/share_navbar/img/config-white.png");


const nav = document.querySelector('nav');

function getSettingBtn() {
    const settingBtn = document.createRange().createContextualFragment(`
    <button id="modal__open-btn" class="nav-btn setting-btn">
        <img src="${_img_config_white_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="" class="mini-icon"><div>Setting</div>
    </button>
`);
    nav.appendChild(settingBtn);
}



/***/ }),

/***/ "./src/share_navbar/script/navbar.js":
/*!*******************************************!*\
  !*** ./src/share_navbar/script/navbar.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => /* binding */ renderHeader,
/* harmony export */   "toggleOnNavbar": () => /* binding */ toggleOnNavbar,
/* harmony export */   "toggleOffNavbar": () => /* binding */ toggleOffNavbar
/* harmony export */ });
/* harmony import */ var _display_brand_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/brand-logo */ "./src/share_navbar/script/display/brand-logo.js");
/* harmony import */ var _display_report_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/report-btn */ "./src/share_navbar/script/display/report-btn.js");
/* harmony import */ var _display_setting_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/setting-btn */ "./src/share_navbar/script/display/setting-btn.js");
/* harmony import */ var _display_login_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/login-btn */ "./src/share_navbar/script/display/login-btn.js");
/* harmony import */ var _display_profile_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/profile-btn */ "./src/share_navbar/script/display/profile-btn.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./src/share_navbar/script/auth.js");
([_display_profile_btn__WEBPACK_IMPORTED_MODULE_4__, _auth__WEBPACK_IMPORTED_MODULE_5__] = await Promise.all([_display_profile_btn__WEBPACK_IMPORTED_MODULE_4__, _auth__WEBPACK_IMPORTED_MODULE_5__]));







//render all buttons
function renderHeader() {
    (0,_display_brand_logo__WEBPACK_IMPORTED_MODULE_0__.getBrandLogo)();
    (0,_display_report_btn__WEBPACK_IMPORTED_MODULE_1__.getReportBtn)();
    (0,_display_setting_btn__WEBPACK_IMPORTED_MODULE_2__.getSettingBtn)();
    (0,_display_login_btn__WEBPACK_IMPORTED_MODULE_3__.getLoginBtn)();
    // getProfileBtn();
}

function toggleOnNavbar() {
    document.querySelector('.profile-area').remove();
    (0,_display_profile_btn__WEBPACK_IMPORTED_MODULE_4__.getProfileBtn)();   
}

function toggleOffNavbar() {
    document.querySelector('.profile-area').remove();
    (0,_display_login_btn__WEBPACK_IMPORTED_MODULE_3__.getLoginBtn)();     
}


return __webpack_exports__;
})();

/***/ }),

/***/ "./src/taskSection/addTaskBtn.js":
/*!***************************************!*\
  !*** ./src/taskSection/addTaskBtn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AddTaskBtn
/* harmony export */ });
class AddTaskBtn {
  constructor() {}

  render() {
    return document.createRange().createContextualFragment(`
      <button class="add-task-btn">
        <i class="fas fa-plus-circle"></i> Add Task
      </button>
    `);
  }
}


/***/ }),

/***/ "./src/taskSection/createTask.js":
/*!***************************************!*\
  !*** ./src/taskSection/createTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CreateTask
/* harmony export */ });
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/taskSection/taskManager.js");
/* harmony import */ var _taskViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskViewController */ "./src/taskSection/taskViewController.js");



const createTaskHtmlContent = `
    <article class="task-detail create-task">
    <main>
      <div class="task-detail__title">
        <input
          name="task-detail__title"
          type="text"
          placeholder="What are you working on?"
        />
      </div>
      <div class="task-detail__pomodoro">
        <span class="label">Est Pomodoros</span>
        <div class="task-detail__pomodoro-content">
          <input name="number-pomodoros" type="number" value="1" />
          <button class="pomodoro-updown-btn pomodoro-up" data-action="increment">
            <i class="fas fa-caret-up"></i>
          </button>
          <button class="pomodoro-updown-btn pomodoro-down" data-action="decrement">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
      <div class="task-detail__note">
        <button class="add-note-btn" data-action="addNote">+ Add Note</button>
      </div>
    </main>
    <footer>
      <div>
        <button class="task-detail__cancel-btn" data-action="cancel">Cancel</button>
        <button class="task-detail__save-btn task-detail__save-btn--disabled" data-action="save">Save</button>
      </div>
    </footer>
    </article>
  `;

class CreateTask {
  constructor() {
    this.elem = null;
  }

  render() {
    const result = document
      .createRange()
      .createContextualFragment(createTaskHtmlContent);

    result
      .querySelector(".create-task")
      .addEventListener("click", this.onClickHandler.bind(this));

    result
      .querySelector(".task-detail__title")
      .addEventListener("input", this.onInputHandler.bind(this));

    this.elem = result.querySelector(".create-task");
    return result;
  }

  hide() {
    this.elem.remove();
  }

  save() {
    const task = _taskManager__WEBPACK_IMPORTED_MODULE_0__.default.createTask(this.getTaskInfo());
    _taskManager__WEBPACK_IMPORTED_MODULE_0__.default.addTask(task);
    _taskViewController__WEBPACK_IMPORTED_MODULE_1__.default.showTask(task);
    _taskViewController__WEBPACK_IMPORTED_MODULE_1__.default.showAddTaskBtn();
    this.hide();
  }

  increment() {
    this.elem.querySelector('input[name="number-pomodoros"]').value++;
  }

  decrement() {
    this.elem.querySelector('input[name="number-pomodoros"]').value--;
  }

  addNote() {
    this.removeAddNoteBtn();
    this.showTextArea(createTextArea());
  }

  removeAddNoteBtn() {
    this.elem.querySelector(".add-note-btn").remove();
  }

  showTextArea(noteTextArea) {
    this.elem.querySelector(".task-detail__note").appendChild(noteTextArea);
  }

  cancel() {
    this.hide();
    _taskViewController__WEBPACK_IMPORTED_MODULE_1__.default.showAddTaskBtn();
  }

  onClickHandler(event) {
    let action;
    if (event.target.tagName === "I") {
      const pomodoroUpdownBtn = event.target.closest(".pomodoro-updown-btn");
      action = pomodoroUpdownBtn.dataset.action;
    } else {
      action = event.target.dataset.action;
    }

    if (action) {
      this[action]();
    }
  }

  onInputHandler(event) {
    if (event.target.value) {
      return this.elem
        .querySelector(".task-detail__save-btn")
        .classList.remove("task-detail__save-btn--disabled");
    }

    if (!event.target.value) {
      return this.elem
        .querySelector(".task-detail__save-btn")
        .classList.add("task-detail__save-btn--disabled");
    }
  }

  getTaskInfo() {
    const title = this.elem.querySelector('input[name="task-detail__title"]')
      .value;
    const estimatedPomodoros = this.elem.querySelector(
      'input[name="number-pomodoros"]'
    ).value;
    let note = "";

    if (this.elem.querySelector('textarea[name="note"]')) {
      note = this.elem.querySelector('textarea[name="note"]').value;
    }

    return { title, estimatedPomodoros, note };
  }
}

function createTextArea() {
  return document
    .createRange()
    .createContextualFragment(
      `<textarea name="note" placeholder="Some notes..."></textarea>`
    );
}


/***/ }),

/***/ "./src/taskSection/editTask.js":
/*!*************************************!*\
  !*** ./src/taskSection/editTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EditTask
/* harmony export */ });
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/taskSection/taskManager.js");
/* harmony import */ var _taskViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskViewController */ "./src/taskSection/taskViewController.js");



class EditTask {
  constructor(task) {
    this.elem = null;
    this.task = task;
    this.htmlContent = `
    <article class="task-detail edit-task">
    <main>
      <div class="task-detail__title">
        <input
          name="task-detail__title"
          type="text"
          placeholder="What are you working on?"
        />
      </div>
      <div class="task-detail__pomodoro">
        <span class="label">Est Pomodoros</span>
        <div class="task-detail__pomodoro-content">
          <input name="number-pomodoros" type="number" value="0" />
          <button class="pomodoro-updown-btn pomodoro-up" data-action="increment">
            <i class="fas fa-caret-up"></i>
          </button>
          <button class="pomodoro-updown-btn pomodoro-down" data-action="decrement">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
      <div class="task-detail__note">
        <button class="add-note-btn" data-action="addNote">+ Add Note</button>
      </div>
    </main>
    <footer>
      <button class="task-detail__delete-btn" data-action="delete">Delete</button>
      <div>
        <button class="task-detail__cancel-btn" data-action="cancel">Cancel</button>
        <button class="task-detail__save-btn" data-action="save">Save</button>
      </div>
    </footer>
    </article>
  `;
  }

  render() {
    const result = document
      .createRange()
      .createContextualFragment(this.htmlContent);

    result
      .querySelector(".edit-task")
      .addEventListener("click", this.onClickHandler.bind(this));

    result
      .querySelector(".task-detail__title")
      .addEventListener("input", this.onInputHandler.bind(this));

    this.insertTaskInfo(result);

    this.elem = result.querySelector(".edit-task");
    return result;
  }

  insertTaskInfo(result) {
    const titleInputElem = result.querySelector(
      'input[name="task-detail__title"]'
    );
    const pomodoroInputElem = result.querySelector(
      'input[name="number-pomodoros"]'
    );
    titleInputElem.value = this.task.title;
    pomodoroInputElem.value = this.task.estimatedPomodoros;

    if (this.task.note != "") {
      const addNoteBtn = result.querySelector(".add-note-btn");
      const textArea = createTextArea(this.task.note);

      addNoteBtn.replaceWith(textArea);
    }
  }

  hide() {
    this.elem.remove();
  }

  save() {
    const modifiedTask = _taskManager__WEBPACK_IMPORTED_MODULE_0__.default.modifyTask(this.task, this.getTaskInfo());
    _taskViewController__WEBPACK_IMPORTED_MODULE_1__.default.replace(this.elem, modifiedTask.render())
  }

  increment() {
    this.elem.querySelector('input[name="number-pomodoros"]').value++;
  }

  decrement() {
    this.elem.querySelector('input[name="number-pomodoros"]').value--;
  }

  delete() {
    // remove from display
    this.task.elem.remove();
    // remove from task Manager
    _taskManager__WEBPACK_IMPORTED_MODULE_0__.default.removeTaskById(this.task.id);
    // close modal
    this.hide();
  }

  addNote() {
    this.removeAddNoteBtn();
    this.showTextArea(createTextArea());

    function createTextArea() {
      return document
        .createRange()
        .createContextualFragment(
          `<textarea name="note" placeholder="Some notes..."></textarea>`
        );
    }
  }

  removeAddNoteBtn() {
    this.elem.querySelector(".add-note-btn").remove();
  }

  showTextArea(noteTextArea) {
    this.elem.querySelector(".task-detail__note").appendChild(noteTextArea);
  }

  cancel() {
    const editTask = this.elem;

    // replace editTask display with task display
    editTask.replaceWith(this.task.elem);
  }

  onClickHandler(event) {
    let action;
    if (event.target.tagName === "I") {
      const pomodoroUpdownBtn = event.target.closest(".pomodoro-updown-btn");
      action = pomodoroUpdownBtn.dataset.action;
    } else {
      action = event.target.dataset.action;
    }

    if (action) {
      this[action]();
    }
  }

  onInputHandler(event) {
    if (event.target.value) {
      return document
        .querySelector(".task-detail__save-btn")
        .classList.remove("task-detail__save-btn--disabled");
    }

    if (!event.target.value) {
      return document
        .querySelector(".task-detail__save-btn")
        .classList.add("task-detail__save-btn--disabled");
    }
  }

  getTaskInfo() {
    const title = document.querySelector('input[name="task-detail__title"]')
      .value;
    const estimatedPomodoros = Number(
      document.querySelector('input[name="number-pomodoros"]').value
    );
    let note = "";
    if (document.querySelector('textarea[name="note"]')) {
      note = document.querySelector('textarea[name="note"]').value;
    }

    return { title, estimatedPomodoros, note };
  }
}

function createTextArea(note) {
  return document
    .createRange()
    .createContextualFragment(
      `<textarea name="note" placeholder="Some notes...">${note}</textarea>`
    );
}


/***/ }),

/***/ "./src/taskSection/task.js":
/*!*********************************!*\
  !*** ./src/taskSection/task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Task
/* harmony export */ });
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask */ "./src/taskSection/editTask.js");
/* harmony import */ var _taskViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskViewController */ "./src/taskSection/taskViewController.js");



class Task {
  constructor(TaskInfo) {
    const { id, title, note, estimatedPomodoros } = TaskInfo;
    this.elem = null;
    this.id = id;
    this.title = title;
    this.note = note;
    this.estimatedPomodoros = estimatedPomodoros;
    this.completedPomodoros = 0;
    this.isCompleted = false;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
    this.toggleCompletedDisplay();
  }

  toggleCompletedDisplay() {
    const title = this.elem.querySelector(".task__title");
    const checkMarker = this.elem.querySelector(".task__check-marker");
    title.classList.toggle("task__title--completed");
    checkMarker.classList.toggle("task__check-marker--completed");
  }

  openEditTask() {
    const editTask = new _editTask__WEBPACK_IMPORTED_MODULE_0__.default(this);
    const renderedEditTask = editTask.render().querySelector(".edit-task");
    _taskViewController__WEBPACK_IMPORTED_MODULE_1__.default.replace(this.elem, renderedEditTask)
  }

  onClickHandler(event) {
    let action;
    if (event.target.classList.contains("fa-ellipsis-v")) {
      const editBtn = event.target.closest(".edit-btn");
      action = editBtn.dataset.action;
    } else {
      action = event.target.dataset.action;
    }

    if (action) {
      this[action]();
    }
  }

  render() {
    const NO_TAB_FOCUS = -1;
    const taskHtmlContent = `
        <li class="task" tabindex="${NO_TAB_FOCUS}">
        <i class="task__check-marker fas fa-check-circle" data-action="toggleCompleted"></i>
        <span class="task__title">
          ${this.title}
        </span>
        <div class="task__pomodoros">
          <span class="task__completed-pomodoros">${this.completedPomodoros}</span> /
          <span class="task__estimated-pomodoros">${this.estimatedPomodoros}</span>
        </div>
        <button class="edit-btn" data-action="openEditTask">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </li>
    `;

    const result = document
      .createRange()
      .createContextualFragment(taskHtmlContent);

    result
      .querySelector(".task")
      .addEventListener("click", this.onClickHandler.bind(this));

    this.elem = result.querySelector(".task");
    return this.elem;
  }

  hide() {
    this.elem.remove();
  }
}


/***/ }),

/***/ "./src/taskSection/taskManager.js":
/*!****************************************!*\
  !*** ./src/taskSection/taskManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/taskSection/task.js");


class TaskManager {
  constructor() {
    this.tasks = [];
  }

  createTask(taskInfo) {
    taskInfo.id = this.getNewTaskId();
    return new _task__WEBPACK_IMPORTED_MODULE_0__.default(taskInfo);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getNewTaskId() {
    return this.tasks.length + 1;
  }

  removeTaskById(id) {
    this.tasks.splice(id - 1, 1);
    this.updateAllTasksId();
  }

  removeCompletedTasks() {
    this.tasks = this.tasks.filter((task) => task.isCompleted);
  }

  updateAllTasksId() {
    this.tasks.forEach((task, index) => (task.id = index + 1));
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  getAllTasks() {
    return this.tasks;
  }

  renderAllTasks() {
    return this.tasks.map((task) => task.render());
  }

  modifyTask(task, taskInfo) {
    task.title = taskInfo.title;
    task.estimatedPomodoros = taskInfo.estimatedPomodoros;
    task.note = taskInfo.note;

    return task;
  }
}

const taskManager = new TaskManager();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskManager);


/***/ }),

/***/ "./src/taskSection/taskSection.js":
/*!****************************************!*\
  !*** ./src/taskSection/taskSection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TaskSection
/* harmony export */ });
/* harmony import */ var _styles_task_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/task.css */ "./src/styles/task.css");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/taskSection/createTask.js");



class TaskSection {
  constructor() {
    this.addTaskBtn = null;
    this.createTask = new _createTask__WEBPACK_IMPORTED_MODULE_1__.default();
  }

  start() {
    document
      .querySelector("#task-section")
      .addEventListener("click", this.onClickHandler.bind(this));
  }

  render() {
    const result = document.createRange().createContextualFragment(`
      <section id="task-section">
      <header>
        <h3>Tasks</h3>
        <div>
          <button class="edit-btn feature-btn">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </header>
      <ul class="task-list"></ul>
      <button class="add-task-btn">
        <i class="fas fa-plus-circle"></i> Add Task
      </button>
    </section>
    `);

    // 태스크 리스트들이 있다면 `task-list`에 append해주고 rendering을 해주어야함

    return result;
  }

  onClickHandler(event) {
    if (
      event.target.className === "add-task-btn" ||
      event.target.className === "fas fa-plus-circle"
    ) {
      this.showCreateTask();
    }
  }

  showCreateTask() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.replaceWith(this.createTask.render());
  }
}


/***/ }),

/***/ "./src/taskSection/taskViewController.js":
/*!***********************************************!*\
  !*** ./src/taskSection/taskViewController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addTaskBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskBtn */ "./src/taskSection/addTaskBtn.js");


class TaskViewController {
  constructor() {}

  showTask(task) {
    document.querySelector(".task-list").appendChild(task.render());
  }

  showAddTaskBtn() {
    const taskSection = document.querySelector("#task-section");
    const addTaskBtn = new _addTaskBtn__WEBPACK_IMPORTED_MODULE_0__.default();
    taskSection.appendChild(addTaskBtn.render());
  }
  
  replace(oldElem, newElem) {
    oldElem.replaceWith(newElem);
  }
}

const taskViewController = new TaskViewController();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskViewController);


/***/ }),

/***/ "./src/timer/display.js":
/*!******************************!*\
  !*** ./src/timer/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => /* binding */ display
/* harmony export */ });
const Display = () => {
    const updateMode = (button) => {
        const buttonList = document.getElementById('mode').querySelectorAll('input[type=button]');
            for (let i = 0; i < buttonList.length; i++) {
                let hasClassClickedMenu = buttonList[i].classList.contains('clickedBtn');
                if (hasClassClickedMenu)
                    buttonList[i].classList.remove('clickedBtn');
            }
        button.classList.add('clickedBtn');
    }

    const updateBtnToPomodoroMode = (button) => {
        button.classList.remove('clickedBtn');
        const buttonList = document.getElementById('mode').querySelectorAll('input[type=button]');
        for (let i = 0; i < buttonList.length; i++) {
            if(buttonList[i].name === 'pomodoroMode') {
                buttonList[i].classList.add('clickedBtn');
                break;
            }
        }
    }

    const updateBtnToShortMode = (button) => {
        button.classList.remove('clickedBtn');
        const buttonList = document.getElementById('mode').querySelectorAll('input[type=button]');
        for (let i = 0; i < buttonList.length; i++) {
            if(buttonList[i].name === 'shortMode') {
                buttonList[i].classList.add('clickedBtn');
                break;
            }
        }
    }

    const updateBtnToLongMode = (button) => {
        button.classList.remove('clickedBtn');
        const buttonList = document.getElementById('mode').querySelectorAll('input[type=button]');
        for (let i = 0; i < buttonList.length; i++) {
            if(buttonList[i].name === 'longMode') {
                buttonList[i].classList.add('clickedBtn');
                break;
            }
        }
    }

    const updateTimer = (button) => {
        if(button.value === "START") {
            button.style.boxShadow = 'none';
            button.value = 'STOP';
        }
        else if(button.value === 'STOP') {
            button.style.boxShadow = 'rgb(235 235 235) 0px 6px 0px';
            button.value = 'START';
        }
    }

    return {
        updateMode,
        updateBtnToPomodoroMode,
        updateBtnToShortMode,
        updateBtnToLongMode,
        updateTimer
    }
}

const display = Display();



/***/ }),

/***/ "./src/timer/modal.js":
/*!****************************!*\
  !*** ./src/timer/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitButton": () => /* binding */ submitButton,
/* harmony export */   "activateModal": () => /* binding */ activateModal
/* harmony export */ });
/* modal 활성화 함수 */
const modal = document.querySelector(".modal");
const modalOpenBtn = document.getElementById("modal__open-btn");
const modalCloseBtn = document.getElementsByClassName("setting__remove-btn")[0];
const submitButton = document.getElementsByClassName("footer__submit-btn")[0];

function activateModal() {
  modalOpenBtn.addEventListener("click", openModal, false);
  modalCloseBtn.addEventListener("click", closeModal, false);
  submitButton.addEventListener("click", closeModal, false);

  //modal 바깥쪽 영역 클릭시 modal close 구현
  window.addEventListener(
    "click",
    (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    },
    false
  );
}

/* modal close 함수 */
function closeModal() {
  modal.style.display = "none";
}

/* modal open 함수 */
function openModal() {
  modal.style.display = "block";
}

// modal 구현시 activateModal import 후 modal template 참고하여 사용



/***/ }),

/***/ "./src/timer/mode.js":
/*!***************************!*\
  !*** ./src/timer/mode.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mode": () => /* binding */ mode
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./src/timer/timer.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/timer/display.js");



const Mode = () => {
    const setDefaultMode = () => {
        _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.setTime('pomodoroMode');
    }

    const waitForMode = () => {
        const btn = document.getElementById('mode').querySelectorAll('input[type=button]');
        btn.forEach((button) => {
            button.addEventListener('click', () => {
                _display_js__WEBPACK_IMPORTED_MODULE_1__.display.updateMode(button);
                _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.setTime(button.name);

                _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.initPomodoroRunCnt();

                if(_timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.isRunningTimer()) {
                    _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.stopTimer();
                    _display_js__WEBPACK_IMPORTED_MODULE_1__.display.updateTimer(_timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.btnTimerState());
                }

                if(button.name !== 'pomodoroMode')
                    _timer_js__WEBPACK_IMPORTED_MODULE_0__.timer.setSingleTimer(true);
            })
        })
    }

    return {
        setDefaultMode,
        waitForMode
    }
}

const mode = Mode();


/***/ }),

/***/ "./src/timer/setting.js":
/*!******************************!*\
  !*** ./src/timer/setting.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/timer/modal.js");


function getSetting() {
  const pomodoro = document.querySelector(".time__pomodoro").value;
  const shortBreak = document.querySelector(".time__shortBreak").value;
  const longBreak = document.querySelector(".time__longBreak").value;
  const didAutoStart = document.querySelector("#autoStart__checkBox").checked;
  const volume = document.querySelector(".volume__range").value;
  const longBreakInterval = document.querySelector(".longBreakInterval__number")
    .value;

  // console.log({
  //   pomodoro,
  //   shortBreak,
  //   longBreak,
  //   didAutoStart,
  //   volume,
  //   longBreakInterval,
  // });

  return {
    pomodoro,
    shortBreak,
    longBreak,
    didAutoStart,
    volume,
    longBreakInterval,
  };
}

/* submit Btn 클릭 시 getSetting 함수 호출 */
function sendSettingValue() {
  _modal__WEBPACK_IMPORTED_MODULE_0__.submitButton.addEventListener("click", getSetting, false);
}

const volumeRange = document.getElementById("vr");
const volumeDisplay = document.getElementById("vd");

/* 반응형 volume input range 구현 */
function responsiveVolumeValue() {
  volumeRange.addEventListener("input", changeVolumeValue, false);
  volumeDisplay.innerText = volumeRange.value;

  function changeVolumeValue() {
    volumeDisplay.innerText = volumeRange.value;
  }
}

class Setting {
  constructor() {}

  start() {
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.activateModal)();
    sendSettingValue();
    responsiveVolumeValue();
  }
  get() {
    return getSetting();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);

// const mySetting = [];

// class Setting {
//   constructor(
//     pomodoro,
//     shortBreak,
//     longBreak,
//     didAutoStart,
//     volume,
//     longBreakInterval
//   ) {
//     this.pomodoro = pomodoro;
//     this.shortBreak = shortBreak;
//     this.longBreak = longBreak;
//     this.didAutoStart = didAutoStart;
//     this.volume = volume;
//     this.longBreakInterval = longBreakInterval;
//   }
// }


/***/ }),

/***/ "./src/timer/timer.js":
/*!****************************!*\
  !*** ./src/timer/timer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => /* binding */ timer
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/timer/display.js");
/* harmony import */ var _sounds_alertSound_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds/alertSound.mp3 */ "./src/timer/sounds/alertSound.mp3");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting */ "./src/timer/setting.js");




const Timer = () => {
    let mode;
    let timerId;
    let runningTimer = false;
    let pomodoroRunCnt = 0;
    let taskCompleteCnt = 0;
    let singleTimer = false;

    //Preference Value
    let autoStartNextRound = false;
    let longBreakInterval = 0;
    let pomodoroMin = 0;
    let pomodoroSec = 0;
    let shortBreakMin = 0;
    let shortBreakSec = 0;
    let longBreakMin = 0;
    let longBreakSec = 0;
    let soundVolume = 0;


    const listenSettings = () => {
        const submitButton = document.getElementsByClassName("footer__submit-btn")[0];
        submitButton.addEventListener("click", importSettings, false);
    }

    const importSettings = () => {
        const setting = new _setting__WEBPACK_IMPORTED_MODULE_2__.default();
        const pomodoroSettings = setting.get();


        // pomodoroMin = pomodoroSettings.pomodoro;
        // pomodoroSec = 0;
        // shortBreakMin = pomodoroSettings.shortBreak;
        // shortBreakSec = 0;
        // longBreakMin = pomodoroSettings.longBreak;
        // longBreakSec = 0;

        pomodoroMin = 0//pomodoroSettings.pomodoro;
        pomodoroSec = 2//0;
        shortBreakMin = 0//pomodoroSettings.shortBreak;
        shortBreakSec = 1//0;
        longBreakMin = 0//pomodoroSettings.longBreak;
        longBreakSec = 3//0;
        autoStartNextRound = pomodoroSettings.didAutoStart;
        longBreakInterval = parseInt(pomodoroSettings.longBreakInterval);
        soundVolume = pomodoroSettings.volume;
        console.log(pomodoroSettings);
        applyTime();
    }

    const debugStatus = () => {
        console.log("autoStartNextRound: " + autoStartNextRound + ", longBreakInterval: " + longBreakInterval);
    }

    const isRunningTimer = () => {
        return runningTimer;
    }

    const setSingleTimer = (state) => {
        singleTimer = state;
    }

    const isSingleTimer = () => {
        return singleTimer;
    }

    const initPomodoroRunCnt = () => {
        pomodoroRunCnt = 0;
    }

    const setTime = (modeState) => {
        mode = modeState;

        if (mode === 'pomodoroMode') {
            setThemeForPomoroMode();
        } else if (mode === 'shortMode') {
            setThemeForShortMode();
        } else if (mode === 'longMode') {
            setThemeForLongMode();
        }

        importSettings();
        applyTime();
    }

    const setThemeForPomoroMode = () => {
        const red = "rgb(219, 82, 77)";
        document.body.style.backgroundColor = red;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.color = red;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.boxShadow = 'rgb(235 235 235) 0px 6px 0px';
    }

    const setThemeForShortMode = () => {
        const green = "rgb(70, 142, 145)";
        document.body.style.backgroundColor = green;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.color = green;
    }

    const setThemeForLongMode = () => {
        const blue = "rgb(67, 126, 168)";
        document.body.style.background = blue;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.color = blue;
    }

    const numFormat = (num) => {
        if (num < 10)
            num = "0" + num;
        return num;
    }

    const applyTime = () => {
        //debugger;
        if(mode == 'pomodoroMode') {
            const timeString = numFormat(pomodoroMin) + ':' + numFormat(pomodoroSec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
        else if(mode == 'shortMode') {
            const timeString = numFormat(shortBreakMin) + ':' + numFormat(shortBreakSec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
        else if(mode == 'longMode') {
            const timeString = numFormat(longBreakMin) + ':' + numFormat(longBreakSec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
    }

    const waitForTimer = () => {
        const btn = document.getElementById('time').querySelectorAll('input[type=button]');
        btn.forEach((button) => {
            button.addEventListener('click', () => {
                debugStatus();
                _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateTimer(button);
                Timer(button.value);
            })
        })
    }

    const Timer = (state) => {
        if (state === 'START')
            stopTimer();
        else if (state === 'STOP')
            timerId = setInterval(startTimer, 1000);
    }

    const nextTimer = () => {
        //debugger;
        if (singleTimer) {
            // Pomodoro Mode Start
            mode = 'pomodoroMode';
            setThemeForPomoroMode();
            applyTime();
            _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateBtnToPomodoroMode(btnModeState());
            stopTimer();
            _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateTimer(btnTimerState());
            singleTimer = false;
            return;
        }

        if (mode === 'pomodoroMode') {
            pomodoroRunCnt++;
            console.log("pomodoroRunCnt: " + pomodoroRunCnt + "longBreakInterval: " + longBreakInterval);
            if(pomodoroRunCnt === 4)
                debugger;
            if (pomodoroRunCnt === longBreakInterval) {
                debugger;
                // Increase Task Count
                taskCompleteCnt++;
                console.log("taskCompleteCnt: " + taskCompleteCnt);

                // Long Break Start
                mode = 'longMode';
                setThemeForLongMode();
                applyTime();
                _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateBtnToLongMode(btnModeState());
            } else if (pomodoroRunCnt < longBreakInterval) {
                // Short Break Start
                mode = 'shortMode';
                setThemeForShortMode();
                applyTime();
                _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateBtnToShortMode(btnModeState());
            }
        } else if (mode === 'shortMode') {
            // Pomodoro Start
            mode = 'pomodoroMode';
            setThemeForPomoroMode();
            applyTime();
            _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateBtnToPomodoroMode(btnModeState());
        } else if (mode === 'longMode') {
            // Pomodoro Start
            mode = 'pomodoroMode';
            setThemeForPomoroMode();
            applyTime();
            _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateBtnToPomodoroMode(btnModeState());

            //Initialize pomodoroRunCnt
            pomodoroRunCnt = 0;
        } 
        if(!autoStartNextRound) {
            stopTimer();
            _display_js__WEBPACK_IMPORTED_MODULE_0__.display.updateTimer(btnTimerState());
        }
    }

    const btnModeState = () => {
        const buttonList = document.getElementById('mode').querySelectorAll('input[type=button]');
            for (let i = 0; i < buttonList.length; i++) {
                let hasClassClickedMenu = buttonList[i].classList.contains('clickedBtn');
                if (hasClassClickedMenu)
                    return buttonList[i];
            }
    }

    const btnTimerState = () => {
        return document.getElementById('time').querySelector('input[type=button]');
    }

    const startTimer = () => {
        runningTimer = true;
        let min = 0;
        let sec = 0;
        let timerEnd = false;
        
        if(mode == 'pomodoroMode') {
            min = pomodoroMin;
            sec = pomodoroSec;
        }
        else if(mode == 'shortMode') {
            min = shortBreakMin;
            sec = shortBreakSec;
        }
        else if(mode == 'longMode') {
            min = longBreakMin;
            sec = longBreakSec;
        }

        sec--;
        if (sec === -1) {
            min--;
            sec = 59;
        }
        if (min === 0 && sec === 0) {
            playEndSound();
            nextTimer();
            timerEnd = true;
            importSettings();
        }
        if (min === -1) {
            min = 0;
            sec = 0;
            stopTimer();
        }
        // applyTime();
        if(!timerEnd) {
            if(mode == 'pomodoroMode') {
                pomodoroMin = min;
                pomodoroSec = sec;
            }
            else if(mode == 'shortMode') {
                shortBreakMin = min;
                shortBreakSec = sec;
            }
            else if(mode == 'longMode') {
                longBreakMin = min;
                longBreakSec = sec;
            }

            const timeString = numFormat(min) + ':' + numFormat(sec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
    }

    const stopTimer = () => {
        runningTimer = false;
        clearInterval(timerId);
    }

    const playEndSound = () => {
        const sound = new Audio(_sounds_alertSound_mp3__WEBPACK_IMPORTED_MODULE_1__.default);
        sound.volume = soundVolume * 0.01;
        sound.play();
    }

    return {
        listenSettings,
        setSingleTimer,
        isSingleTimer,
        initPomodoroRunCnt,
        isRunningTimer,
        btnTimerState,
        setTime,
        stopTimer,
        waitForTimer
    }
}

const timer = Timer();



/***/ }),

/***/ "./src/timer/timerSection.js":
/*!***********************************!*\
  !*** ./src/timer/timerSection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mode": () => /* reexport safe */ _mode_js__WEBPACK_IMPORTED_MODULE_1__.mode,
/* harmony export */   "timer": () => /* reexport safe */ _timer_js__WEBPACK_IMPORTED_MODULE_2__.timer
/* harmony export */ });
/* harmony import */ var _styles_timer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/timer.css */ "./src/styles/timer.css");
/* harmony import */ var _mode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode.js */ "./src/timer/mode.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.js */ "./src/timer/timer.js");




// mode.setDefaultMode();

// mode.waitForMode();
// timer.waitForTimer();
// timer.listenSettings();


/***/ }),

/***/ "googleAPI":
/*!********************************************************************!*\
  !*** external ["https://apis.google.com/js/api:client.js","gapi"] ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var error = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof gapi !== "undefined") return resolve();
	__webpack_require__.l("https://apis.google.com/js/api:client.js", (event) => {
		if(typeof gapi !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		error.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		error.name = 'ScriptExternalLoadError';
		error.type = errorType;
		error.request = realSrc;
		reject(error);
	}, "gapi");
}).then(() => gapi);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Pomodoro:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zdHlsZXMvbW9kYWwuY3NzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy9uYXZiYXIuY3NzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc3R5bGVzL3NldHRpbmcuY3NzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc3R5bGVzL3Rhc2suY3NzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy90aW1lci5jc3MiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL2ZvbnRzL0FyaWFsLVJvdW5kZWQtTVQtQm9sZC50dGYiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy9jb25maWctd2hpdGUucG5nIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NoYXJlX25hdmJhci9pbWcvZGVsZXRlLWJsYWNrLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL2dvb2dsZS1ibGFjay5wbmciLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy9ncmFwaC13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy9pY29uLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL2xvZ291dC1ibGFjay5wbmciLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy9yb2NrZXQtYmxhY2sucG5nIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NoYXJlX25hdmJhci9pbWcvdXNlci1ibGFjay5wbmciLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy91c2VyLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy90aW1lci9zb3VuZHMvYWxlcnRTb3VuZC5tcDMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc3R5bGVzL21vZGFsLmNzcz8wN2JlIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy9uYXZiYXIuY3NzP2MxZGIiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy9zZXR0aW5nLmNzcz83ZDIyIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zdHlsZXMvdGFzay5jc3M/ODgwOCIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zdHlsZXMvdGltZXIuY3NzPzQxYzYiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2V0dGluZy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zZXR0aW5nL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvc2NyaXB0L2F1dGguanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L2JyYW5kLWxvZ28uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L2xvZ2luLWJ0bi5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvc2NyaXB0L2Rpc3BsYXkvcHJvZmlsZS1idG4uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L3JlcG9ydC1idG4uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L3NldHRpbmctYnRuLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NoYXJlX25hdmJhci9zY3JpcHQvbmF2YmFyLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3Rhc2tTZWN0aW9uL2FkZFRhc2tCdG4uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvdGFza1NlY3Rpb24vY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy90YXNrU2VjdGlvbi9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy90YXNrU2VjdGlvbi90YXNrLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3Rhc2tTZWN0aW9uL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3Rhc2tTZWN0aW9uL3Rhc2tTZWN0aW9uLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3Rhc2tTZWN0aW9uL3Rhc2tWaWV3Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy90aW1lci9kaXNwbGF5LmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3RpbWVyL21vZGFsLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3RpbWVyL21vZGUuanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvdGltZXIvc2V0dGluZy5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy90aW1lci90aW1lci5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy90aW1lci90aW1lclNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vZXh0ZXJuYWwgW1wiaHR0cHM6L2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzXCIsXCJnYXBpXCJdIiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Qb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2REFBNkQsWUFBWSxrQkFBa0Isb0JBQW9CLGVBQWUsWUFB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Ozs7QUN0RmlCOztBQUVjOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBEQUFrQjtBQUN0QjtBQUNBLElBQUksd0RBQWdCO0FBQ3BCLElBQUkscURBQWE7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7QUFFdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQTJCO0FBQzNDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBNEI7QUFDNUM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUErQjtBQUMzQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUErQjs7QUFFM0M7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBbUI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsMkRBQVE7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUzZCOztBQUVJO0FBQ0U7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDLG1COzs7Ozs7VUNiRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQiw0QkFBNEIsUUFBUTtXQUMxRDtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0Isb0JBQW9CO1dBQ3BDO1dBQ0Esa0dBQWtHLFlBQVksT0FBTztXQUNySDtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrRUFBa0Usa0NBQWtDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDekNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7O1VDZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi8qIC5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNTAlO1xcbn0gKi9cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2RhbF9fb3Blbi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAvKiAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50OyAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmsoYmxhY2ssIHdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxSb3VuZGVkXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxuICAgIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAvKiAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50OyAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAwcHg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgLXdlYmtpdC1ydGwtb3JkZXJpbmc6IGxvZ2ljYWw7XFxuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xcbn1cXG5cXG4uYnRuLWltZyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCA4MiwgNzcpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzksIDIzOSwgMjM5KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMHM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggM3B4IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnBhZGRpbmctYXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4uc2V0dGluZ19fcmVtb3ZlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi5mb290ZXJfX3N1Ym1pdC1idG4ge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMnB4IDJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDM0LCAzNCwgMzQpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsb0JBQW9CO0VBQ3BCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRTs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDZFQUE2RTtFQUM3RSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLyogLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA1MCU7XFxufSAqL1xcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vZGFsX19vcGVuLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGNvbG9yOiAtaW50ZXJuYWwtbGlnaHQtZGFyayhibGFjaywgd2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWluZGVudDogMHB4O1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFJvdW5kZWRcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbmlucHV0IHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbi5idG4taW1nIHtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDgyLCA3Nyk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucGFkZGluZy1hcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XFxufVxcblxcbi5zZXR0aW5nX19yZW1vdmUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDE3cHg7XFxuICBvcGFjaXR5OiAwLjM7XFxuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcXG59XFxuXFxuLmZvb3Rlcl9fc3VibWl0LWJ0biB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNjIwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNzRjNGM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogMTMycHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2dvIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBtaW4td2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5taW5pLWljb24ge1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxuXFxuLm5hdi1idG4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG5cXG4ucHJvZmlsZS1ib3gge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2ZpbGUtYm94IGltZyB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNSUpIDBweCAxMHB4IDIwcHgsIHJnYigwIDAgMCAvIDEwJSkgMHB4IDNweCA2cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gIH1cXG5cXG4uZHJvcGRvd24tc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuXFxuLmRyb3Bkb3duLWxpc3Qge1xcbiAgICAgIGNvbG9yOiByZ2IoNzksIDQzLCA2NSk7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4vKiBcXG4uZHJvcGRvd24tbGlzdCA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XFxufSAqL1xcblxcbi5kcm9wZG93bi1pY29uIHtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgd2lkdGg6IDE0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgY29sb3I6IHJnYig3OSwgNDMsIDQ1KTtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3RUFBd0U7SUFDeEUsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osVUFBVTtFQUNaOztBQUVGO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7O0FBR0E7TUFDTSxzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGVBQWU7TUFDZixvQkFBb0I7QUFDMUI7QUFDQTs7O0dBR0c7O0FBRUg7TUFDTSxZQUFZO01BQ1osV0FBVztNQUNYLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLGVBQWU7TUFDZixvQkFBb0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA2MjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I3NGM0YztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAxMzJweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ28gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIG1pbi13aWR0aDogNzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1pbmktaWNvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5cXG4ubmF2LWJ0biBkaXYge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcblxcbi5wcm9maWxlLWJveCB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvZmlsZS1ib3ggaW1nIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE1JSkgMHB4IDEwcHggMjBweCwgcmdiKDAgMCAwIC8gMTAlKSAwcHggM3B4IDZweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgfVxcblxcbi5kcm9wZG93bi1zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5cXG4uZHJvcGRvd24tbGlzdCB7XFxuICAgICAgY29sb3I6IHJnYig3OSwgNDMsIDY1KTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi8qIFxcbi5kcm9wZG93bi1saXN0IDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOCwgMjM4KTtcXG59ICovXFxuXFxuLmRyb3Bkb3duLWljb24ge1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICB3aWR0aDogMTRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICBjb2xvcjogcmdiKDc5LCA0MywgNDUpO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIHN0eWxlcyBmb3IgYnV0dG9uICovXFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQSw2QkFBNkI7O0FBRTdCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIHN0eWxlcyBmb3IgYnV0dG9uICovXFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAvKlxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTlweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmE3ZWU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qXFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbjogLTFweDtcXG4gICAgY2xpcDogcmVjdCgwLDAsMCwwKTtcXG4qL1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJ1dHRvbiB7XFxuICAvKiAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50OyAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmsoYmxhY2ssIHdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsUm91bmRlZFxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmlucHV0IHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4uYnRuLWltZyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgODIsIDc3KTtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLnBhZGRpbmctYXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4uc2V0dGluZ19fcmVtb3ZlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLnNldHRpbmdfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnNldHRpbmdfX2l0ZW1zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE4MiwgMTY1LCAxNjYsIDAuMik7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi50aW1lX19pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50aW1lX19pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50aW1lX19pdGVtIHtcXG4gIHdpZHRoOiA5OHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi52b2x1bWVfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnZvbHVtZV9fZGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udm9sdW1lX19yYW5nZSB7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBoZWlnaHQ6IDdweDtcXG59XFxuXFxuLmxvbmdCcmVha0ludGVydmFsX19udW1iZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4uZm9vdGVyX19zdWJtaXQtYnRuIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDJweCAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zZXR0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEI7Ozs7Q0FJRDtBQUNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xC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LFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isb0NBQW9DO0FBQ3RDOztBQUVBLFdBQVc7QUFDWDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcbiAgLypcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiovXFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbDphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE5cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJhN2VlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDFweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKlxcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IC0xcHg7XFxuICAgIGNsaXA6IHJlY3QoMCwwLDAsMCk7XFxuKi9cXG4gIG9wYWNpdHk6IDA7XFxufVxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG5idXR0b24ge1xcbiAgLyogLXdlYmtpdC13cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDsgKi9cXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrKGJsYWNrLCB3aGl0ZSk7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAwcHg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG5idXR0b24sXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFJvdW5kZWRcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG5pbnB1dCB7XFxuICAvKiAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50OyAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAwcHg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgLXdlYmtpdC1ydGwtb3JkZXJpbmc6IGxvZ2ljYWw7XFxuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLmJ0bi1pbWcge1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDgyLCA3Nyk7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzksIDIzOSwgMjM5KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMHM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggM3B4IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbi5wYWRkaW5nLWFyZWEge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweDtcXG59XFxuXFxuLnNldHRpbmdfX3JlbW92ZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTdweDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxufVxcblxcbi5zZXR0aW5nX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5zZXR0aW5nX19pdGVtcyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxODIsIDE2NSwgMTY2LCAwLjIpO1xcbiAgcGFkZGluZzogMjBweCAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbWVfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4udGltZV9faW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udGltZV9faXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udGltZV9faXRlbSB7XFxuICB3aWR0aDogOThweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udm9sdW1lX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi52b2x1bWVfX2Rpc3BsYXkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnZvbHVtZV9fcmFuZ2Uge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgaGVpZ2h0OiA3cHg7XFxufVxcblxcbi5sb25nQnJlYWtJbnRlcnZhbF9fbnVtYmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNzBweDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLmZvb3Rlcl9fc3VibWl0LWJ0biB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFJvdW5kZWRcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs7cUJBRW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFJvdW5kZWRcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFJvdW5kZWRcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qKiogc3R5bGluZ3MgZm9yIHRhZ3MgKioqL1xcbmJ1dHRvbjpob3ZlciB7IGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJ1dHRvbjphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsgfVxcblxcbi8qKiogVVRJTElUWSBDTEFTU0VTICoqKi9cXG4uZWRpdC1idG4ge1xcbiAgd2lkdGg6IDMycHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5UYXNrIFNlY3Rpb25cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDIxOSwgODIsIDc3KTtcXG59XFxuXFxuI3Rhc2stc2VjdGlvbiB7XFxuICB3aWR0aDogNDgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI3Rhc2stc2VjdGlvbiBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4jdGFzay1zZWN0aW9uIGhlYWRlciBoMyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5UYXNrIExpc3RcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi50YXNrLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuVGFzayBcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA2MnB4O1xcbiAgcGFkZGluZzogMThweCAwIDE0cHggMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2s6aG92ZXIgeyBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTsgfVxcbi50YXNrOmZvY3VzIHsgXFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrX19jaGVjay1tYXJrZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG59XFxuXFxuLnRhc2tfX2NoZWNrLW1hcmtlcjpob3ZlciB7IG9wYWNpdHk6IDAuNjsgfVxcbi50YXNrX19jaGVjay1tYXJrZXItLWNvbXBsZXRlZCB7IGNvbG9yOiByZ2IoMjE5LCA4MiwgNzcpOyB9XFxuXFxuLnRhc2tfX3RpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGFza19fdGl0bGUtLWNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxufVxcblxcbi50YXNrX19wb21vZG9yb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuXFxuLnRhc2sgLmVkaXQtYnRuIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMnB4IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4udGFzayAuZWRpdC1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyMjMsIDIyMyk7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbkFkZCBUYXNrIEJ1dHRvblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmFkZC10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA2MnB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biAuZmEtcGx1cy1jaXJjbGUgeyBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuVEFTSyBERVRBSUwgQ0FSRFxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLnRhc2stZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQ4MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50YXNrLWRldGFpbCBtYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxOHB4IDIwcHggMThweDtcXG59XFxuXFxuLnRhc2stZGV0YWlsX190aXRsZSB7XFxuICBoZWlnaHQ6IDYxcHg7XFxuICBwYWRkaW5nOiA4cHggMDtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwidGFzay1kZXRhaWxfX3RpdGxlXFxcIl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmlucHV0W25hbWU9XFxcInRhc2stZGV0YWlsX190aXRsZVxcXCJdOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxcbmlucHV0W25hbWU9XFxcInRhc2stZGV0YWlsX190aXRsZVxcXCJdOjpwbGFjZWhvbGRlciB7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cXG4udGFzay1kZXRhaWxfX3BvbW9kb3JvIHtcXG4gIGhlaWdodDogODJweDtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbn1cXG5cXG4udGFzay1kZXRhaWxfX3BvbW9kb3JvLWNvbnRlbnQgeyBtYXJnaW4tdG9wOiA4cHg7IH1cXG5cXG4udGFzay1kZXRhaWwgLmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwibnVtYmVyLXBvbW9kb3Jvc1xcXCJdIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmlucHV0W25hbWU9XFxcIm51bWJlci1wb21vZG9yb3NcXFwiXTpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cXG5cXG4ucG9tb2Rvcm8tdXBkb3duLWJ0biB7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMnB4IDJweDtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZGV0YWlsX19ub3RlIHtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbn1cXG5cXG4uYWRkLW5vdGUtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxudGV4dGFyZWFbbmFtZT1cXFwibm90ZVxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNHB4O1xcbiAgbWFyZ2luOiA4cHggMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcXG59XFxuXFxudGV4dGFyZWFbbmFtZT1cXFwibm90ZVxcXCJdOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxcbnRleHRhcmVhW25hbWU9XFxcIm5vdGVcXFwiXTo6cGxhY2Vob2xkZXIgeyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuXFxuXFxuLnRhc2stZGV0YWlsIGZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNjJweDtcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2sgZm9vdGVyIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcbi5lZGl0LXRhc2sgZm9vdGVyIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLnRhc2stZGV0YWlsX19kZWxldGUtYnRuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi50YXNrLWRldGFpbF9fY2FuY2VsLWJ0biB7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTRweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWRldGFpbF9fY2FuY2VsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stZGV0YWlsX19zYXZlLWJ0biB7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAycHggMnB4O1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4udGFzay1kZXRhaWxfX3NhdmUtYnRuLS1kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90YXNrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7O3FCQUVtQjtBQUNyQjs7QUFFQSwwQkFBMEI7QUFDMUIsZUFBZSxlQUFlLEVBQUU7O0FBRWhDLGdCQUFnQiwwQkFBMEIsRUFBRTs7QUFFNUMsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjs7QUFFQTs7d0NBRXdDO0FBQ3hDO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBOzt3Q0FFd0M7QUFDeEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzt3Q0FFd0M7QUFDeEM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0EsY0FB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a0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsUm91bmRlZFxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyoqKiBzdHlsaW5ncyBmb3IgdGFncyAqKiovXFxuYnV0dG9uOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuYnV0dG9uOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOyB9XFxuXFxuLyoqKiBVVElMSVRZIENMQVNTRVMgKioqL1xcbi5lZGl0LWJ0biB7XFxuICB3aWR0aDogMzJweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblRhc2sgU2VjdGlvblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCA4MiwgNzcpO1xcbn1cXG5cXG4jdGFzay1zZWN0aW9uIHtcXG4gIHdpZHRoOiA0ODBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jdGFzay1zZWN0aW9uIGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbiN0YXNrLXNlY3Rpb24gaGVhZGVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblRhc2sgTGlzdFxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnRhc2stbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5UYXNrIFxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDYycHg7XFxuICBwYWRkaW5nOiAxOHB4IDAgMTRweCAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzazpob3ZlciB7IGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpOyB9XFxuLnRhc2s6Zm9jdXMgeyBcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiKDM0LCAzNCwgMzQpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2tfX2NoZWNrLW1hcmtlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcbn1cXG5cXG4udGFza19fY2hlY2stbWFya2VyOmhvdmVyIHsgb3BhY2l0eTogMC42OyB9XFxuLnRhc2tfX2NoZWNrLW1hcmtlci0tY29tcGxldGVkIHsgY29sb3I6IHJnYigyMTksIDgyLCA3Nyk7IH1cXG5cXG4udGFza19fdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50YXNrX190aXRsZS0tY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG59XFxuXFxuLnRhc2tfX3BvbW9kb3JvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG4udGFzayAuZWRpdC1idG4ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAycHggNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbi50YXNrIC5lZGl0LWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYigyMjMsIDIyMywgMjIzKTsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuQWRkIFRhc2sgQnV0dG9uXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDYycHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIC5mYS1wbHVzLWNpcmNsZSB7IG1hcmdpbi1yaWdodDogOHB4OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5UQVNLIERFVEFJTCBDQVJEXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4udGFzay1kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDgwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2stZGV0YWlsIG1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDE4cHggMjBweCAxOHB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxfX3RpdGxlIHtcXG4gIGhlaWdodDogNjFweDtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbn1cXG5cXG5pbnB1dFtuYW1lPVxcXCJ0YXNrLWRldGFpbF9fdGl0bGVcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwidGFzay1kZXRhaWxfX3RpdGxlXFxcIl06Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XFxuaW5wdXRbbmFtZT1cXFwidGFzay1kZXRhaWxfX3RpdGxlXFxcIl06OnBsYWNlaG9sZGVyIHsgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxcblxcbi50YXNrLWRldGFpbF9fcG9tb2Rvcm8ge1xcbiAgaGVpZ2h0OiA4MnB4O1xcbiAgcGFkZGluZzogOHB4IDA7XFxufVxcblxcbi50YXNrLWRldGFpbF9fcG9tb2Rvcm8tY29udGVudCB7IG1hcmdpbi10b3A6IDhweDsgfVxcblxcbi50YXNrLWRldGFpbCAubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG5pbnB1dFtuYW1lPVxcXCJudW1iZXItcG9tb2Rvcm9zXFxcIl0ge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW5wdXRbbmFtZT1cXFwibnVtYmVyLXBvbW9kb3Jvc1xcXCJdOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxcblxcbi5wb21vZG9yby11cGRvd24tYnRuIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtYXJnaW46IDBweCAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAycHggMnB4O1xcbiAgb3BhY2l0eTogMC45O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZXRhaWxfX25vdGUge1xcbiAgcGFkZGluZzogOHB4IDA7XFxufVxcblxcbi5hZGQtbm90ZS1idG4ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG50ZXh0YXJlYVtuYW1lPVxcXCJub3RlXFxcIl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBtYXJnaW46IDhweCAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbn1cXG5cXG50ZXh0YXJlYVtuYW1lPVxcXCJub3RlXFxcIl06Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XFxudGV4dGFyZWFbbmFtZT1cXFwibm90ZVxcXCJdOjpwbGFjZWhvbGRlciB7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cXG5cXG5cXG4udGFzay1kZXRhaWwgZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2MnB4O1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi5jcmVhdGUtdGFzayBmb290ZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuLmVkaXQtdGFzayBmb290ZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4udGFzay1kZXRhaWxfX2RlbGV0ZS1idG4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnRhc2stZGV0YWlsX19jYW5jZWwtYnRuIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stZGV0YWlsX19jYW5jZWwtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZXRhaWxfX3NhdmUtYnRuIHtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDJweCAycHg7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi50YXNrLWRldGFpbF9fc2F2ZS1idG4tLWRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9mb250cy9BcmlhbC1Sb3VuZGVkLU1ULUJvbGQudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0FyaWFsUm91bmRlZCc7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBcmlhbFJvdW5kZWQnO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDFzIDBzO1xcbiAgZm9udC1mYW1pbHk6ICdBcmlhbFJvdW5kZWQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxufVxcblxcbi5zbG93LXRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMXMgMHM7XFxuICBmb250LWZhbWlseTogJ0FyaWFsUm91bmRlZCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcXG59XFxuXFxuKiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2ID4gZGl2IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXFxuI21vZGUgPiBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogQXJpYWxSb3VuZGVkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMnB4IDEycHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNsaWNrZWRCdG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbiN0aW1lID4gaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweDtcXG4gICAgcGFkZGluZzogMHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsUm91bmRlZDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2UtaW4tb3V0IDBzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBwYWRkaW5nOiAyMHB4IDBweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbn1cXG5cXG4jdGltZSA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogMTIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90aW1lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLCtEQUFpRTtFQUNqRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLCtEQUFpRTtFQUNqRSxpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsMEJBQTBCO0VBQzFCLDBLQUEwSztBQUM1Szs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwS0FBMEs7QUFDNUs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7O0FBR0E7RUFDRSxlQUFlO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBcmlhbFJvdW5kZWQnO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0FyaWFsLVJvdW5kZWQtTVQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0FyaWFsUm91bmRlZCc7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvQXJpYWwtUm91bmRlZC1NVC1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDFzIDBzO1xcbiAgZm9udC1mYW1pbHk6ICdBcmlhbFJvdW5kZWQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxufVxcblxcbi5zbG93LXRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMXMgMHM7XFxuICBmb250LWZhbWlseTogJ0FyaWFsUm91bmRlZCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcXG59XFxuXFxuKiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2ID4gZGl2IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXFxuI21vZGUgPiBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogQXJpYWxSb3VuZGVkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMnB4IDEycHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNsaWNrZWRCdG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbiN0aW1lID4gaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweDtcXG4gICAgcGFkZGluZzogMHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsUm91bmRlZDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2UtaW4tb3V0IDBzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBwYWRkaW5nOiAyMHB4IDBweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbn1cXG5cXG4jdGltZSA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogMTIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTBiNDk4OWIyMDk1YmZmMzcwYmVlNGQ5YWY4ZjFhMmYudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI1ODdiNDg5YWYyY2UwOGE4ZDMxNTFkZGU3NTYxNzViLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZGVhYTVmMDc3YWNmMzUxMWI2YjI1OGQ1YjEzMWM1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzU4ZmUzNTQxYTg2NjAxYjEyZmVhODRmMDEyYmViZGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNjY2Y2MGEzOTNhODFhNGJiOTk0NzVjODU3ZWQyOTFjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NzYwZDdhNTU4MDQ2ZjlkZWUyMGUwNTJhODFjNGE2Yy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTc4Y2UwZmE2ZjA3Mjc1ODJhNWU5Mjg1NTgwYWIwOTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJmZmJlMTMwZDJmZTJjNGI1NDlhODE1MGJhMTI2NmFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZTljNjg1NzEyODI5MTQ2ODVhY2UwZjUwM2U1ZGM4My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWQyM2U3Mjk3NGNkZDJhMGQ3NTA1OTAwYjlhYTAyMGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEyMDYyYTI1NjQ5YTIyMTYzMjY2Mjg5OWQzODEyZTQxLm1wM1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NldHRpbmcuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aW1lci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL3NoYXJlX25hdmJhci9uYXZiYXJcIjtcbmltcG9ydCBTZXR0aW5nIGZyb20gXCIuL3NldHRpbmcvc2V0dGluZ1wiO1xuaW1wb3J0IFRhc2tTZWN0aW9uIGZyb20gXCIuL3Rhc2tTZWN0aW9uL3Rhc2tTZWN0aW9uXCI7XG5cbmltcG9ydCB7IG1vZGUgfSBmcm9tIFwiLi90aW1lci90aW1lclNlY3Rpb25cIjtcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSBcIi4vdGltZXIvdGltZXJTZWN0aW9uXCI7XG5cbmNvbnN0IG15VGFza1NlY3Rpb24gPSBuZXcgVGFza1NlY3Rpb24oKTtcbmNvbnN0IG15U2V0dGluZyA9IG5ldyBTZXR0aW5nKCk7XG5yZW5kZXJIZWFkZXIoKTtcbm15U2V0dGluZy5zdGFydCgpO1xuXG5jb25zb2xlLmxvZyhtb2RlKTtcbmNvbnNvbGUubG9nKHRpbWVyKTtcblxubW9kZS5zZXREZWZhdWx0TW9kZSgpO1xubW9kZS53YWl0Rm9yTW9kZSgpO1xudGltZXIud2FpdEZvclRpbWVyKCk7XG50aW1lci5saXN0ZW5TZXR0aW5ncygpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbmNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobXlUYXNrU2VjdGlvbi5yZW5kZXIoKSk7XG5teVRhc2tTZWN0aW9uLnN0YXJ0KCk7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvbW9kYWwuY3NzXCI7XG5cbmNvbnN0IG1vZGFsT3BlbkJ1dHRvbiA9IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIm1vZGFsX19vcGVuLWJ0blwiPlxuPGltZyBzcmM9XCIuLi9pbWcvY29uZmlnLXdoaXRlLnBuZ1wiIGFsdD1cImNvbmZpZyBpY29uXCIgY2xhc3M9XCJidG4taW1nXCIgLz5cbiZuYnNwO1NldHRpbmdcbjwvYnV0dG9uPmA7XG5cbmNvbnN0IG1vZGFsQXJ0aWNsZSA9IGBcbjxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBpZD1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cInBhZGRpbmctYXJlYVwiIGlkPVwicGFkZGluZy1hcmVhXCI+XG4gICAgPGltZ1xuICAgICAgc3JjPVwiLi4vaW1nL3JlbW92ZS1ibGFjay1zbS5wbmdcIlxuICAgICAgYWx0PVwicmVtb3ZlIGljb25cIlxuICAgICAgY2xhc3M9XCJzZXR0aW5nX19yZW1vdmUtYnRuIGJ0bi1pbWcgY2xvc2VcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC9kaXY+YDtcblxuY29uc3QgZm9vdGVyQXJ0aWNsZSA9IGBcbjxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgPGZvb3Rlcj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImZvb3Rlcl9fc3VibWl0LWJ0blwiPk9LPC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9kaXY+YDtcblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxPcGVuQnV0dG9uKCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50XG4gICAgLmNyZWF0ZVJhbmdlKClcbiAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG1vZGFsT3BlbkJ1dHRvbik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxBcnRpY2xlKCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50XG4gICAgLmNyZWF0ZVJhbmdlKClcbiAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG1vZGFsQXJ0aWNsZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cblxuZnVuY3Rpb24gYWRkRm9vdGVyQXJ0aWNsZSgpIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudFxuICAgIC5jcmVhdGVSYW5nZSgpXG4gICAgLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChmb290ZXJBcnRpY2xlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250ZW50XCIpLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cblxuLyogbW9kYWwgY2xvc2Ug7ZWo7IiYICovXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLyogbW9kYWwgb3BlbiDtlajsiJggKi9cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vKiBtb2RhbCDtmZzshLHtmZQg7ZWo7IiYICovXG5mdW5jdGlvbiBhY3RpdmF0ZU1vZGFsKCkge1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1vZGFsX19vcGVuLWJ0blwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNldHRpbmdfX3JlbW92ZS1idG5cIilbMF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9vdGVyX19zdWJtaXQtYnRuXCIpWzBdXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAvL21vZGFsIOuwlOq5peyqvSDsmIHsl60g7YG066at7IucIG1vZGFsIGNsb3NlIOq1rO2YhFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVNb2RhbE9wZW5CdXR0b24sXG4gIGNyZWF0ZU1vZGFsQXJ0aWNsZSxcbiAgYWRkRm9vdGVyQXJ0aWNsZSxcbiAgYWN0aXZhdGVNb2RhbCxcbn07XG5cbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbi8vIGNvbnN0IG1vZGFsT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX29wZW4tYnRuXCIpO1xuLy8gY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZXR0aW5nX19yZW1vdmUtYnRuXCIpWzBdO1xuLy8gY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvb3Rlcl9fc3VibWl0LWJ0blwiKVswXTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZU1vZGFsT3BlbkJ1dHRvbixcbiAgY3JlYXRlTW9kYWxBcnRpY2xlLFxuICBhZGRGb290ZXJBcnRpY2xlLFxuICBhY3RpdmF0ZU1vZGFsLFxufSBmcm9tIFwiLi9tb2RhbFwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvc2V0dGluZy5jc3NcIjtcblxuY29uc3Qgc2V0dGluZ0FydGljbGUgPSBgPGRpdiBjbGFzcz1cInNldHRpbmdcIj5cbjxoZWFkZXIgY2xhc3M9XCJzZXR0aW5nX19oZWFkZXJcIj5cbiAgPGRpdj5UaW1lciBTZXR0aW5nPC9kaXY+XG48L2hlYWRlcj5cbjxhcnRpY2xlPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ19faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGltZV9fdGl0bGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5UaW1lIChtaW51dGVzKTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGltZV9faXRlbXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19wb21vZG9yb19fbGFiZWxcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0aW1lX19sYWJlbFwiPlBvbW9kb3JvPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICBjbGFzcz1cInRpbWVfX2lucHV0IHRpbWVfX3BvbW9kb3JvXCJcbiAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19zaG9ydF9fbGFiZWxcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0aW1lX19sYWJlbFwiPlNob3J0IEJyZWFrPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICBjbGFzcz1cInRpbWVfX2lucHV0IHRpbWVfX3Nob3J0QnJlYWtcIlxuICAgICAgICAgIHZhbHVlPVwiNVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpbWVfX2l0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVfX2xvbmdfX2xhYmVsXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGltZV9fbGFiZWxcIj5Mb25nIEJyZWFrPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICBjbGFzcz1cInRpbWVfX2lucHV0IHRpbWVfX2xvbmdCcmVha1wiXG4gICAgICAgICAgdmFsdWU9XCIxNVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRvU3RhcnRfX3RpdGxlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5BdXRvIHN0YXJ0IG5leHQgcm91bmQ/PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrQm94XCIgaWQ9XCJhdXRvU3RhcnRfX2NoZWNrQm94XCIgbmFtZT1cIlwiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJhdXRvU3RhcnRfX2NoZWNrQm94XCI+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ19faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZV9fdGl0bGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlNvdW5kIFZvbHVtZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZV9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lX19kaXNwbGF5XCI+PHNwYW4gaWQ9XCJ2b2x1bWVfX2Rpc3BsYXlcIj41MDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lX19yYW5nZVwiXG4gICAgICAgICAgaWQ9XCJ2b2x1bWVfX3JhbmdlXCJcbiAgICAgICAgICB2YWx1ZT1cIjUwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ19faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxvbmdCcmVha0ludGVydmFsX190aXRsZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+TG9uZyBCcmVhayBJbnRlcnZhbDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgIHdpZHRoPVwiNzBcIlxuICAgICAgICAgIGNsYXNzPVwibG9uZ0JyZWFrSW50ZXJ2YWxfX251bWJlclwiXG4gICAgICAgICAgdmFsdWU9XCI0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvYXJ0aWNsZT5cbjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5mdW5jdGlvbiBnZXRTZXR0aW5nKCkge1xuICBjb25zdCBwb21vZG9ybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZV9fcG9tb2Rvcm9cIikudmFsdWU7XG4gIGNvbnN0IHNob3J0QnJlYWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVfX3Nob3J0QnJlYWtcIikudmFsdWU7XG4gIGNvbnN0IGxvbmdCcmVhayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZV9fbG9uZ0JyZWFrXCIpLnZhbHVlO1xuICBjb25zdCBkaWRBdXRvU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dG9TdGFydF9fY2hlY2tCb3hcIikuY2hlY2tlZDtcbiAgY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWVfX3JhbmdlXCIpLnZhbHVlO1xuICBjb25zdCBsb25nQnJlYWtJbnRlcnZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9uZ0JyZWFrSW50ZXJ2YWxfX251bWJlclwiKVxuICAgIC52YWx1ZTtcblxuICByZXR1cm4ge1xuICAgIHBvbW9kb3JvLFxuICAgIHNob3J0QnJlYWssXG4gICAgbG9uZ0JyZWFrLFxuICAgIGRpZEF1dG9TdGFydCxcbiAgICB2b2x1bWUsXG4gICAgbG9uZ0JyZWFrSW50ZXJ2YWwsXG4gIH07XG59XG5cbi8qIHN1Ym1pdCBCdG4g7YG066atIOyLnCBnZXRTZXR0aW5nIO2VqOyImCDtmLjstpwgKi9cbmZ1bmN0aW9uIHNlbmRTZXR0aW5nVmFsdWUoKSB7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb290ZXJfX3N1Ym1pdC1idG5cIilbMF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFNldHRpbmcsIGZhbHNlKTtcbn1cblxuLyog67CY7J2R7ZiVIHZvbHVtZSBpbnB1dCByYW5nZSDqtaztmIQgKi9cbmZ1bmN0aW9uIHJlc3BvbnNpdmVWb2x1bWVWYWx1ZSgpIHtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVfX3JhbmdlXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGFuZ2VWb2x1bWVWYWx1ZSwgZmFsc2UpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInZvbHVtZV9fZGlzcGxheVwiXG4gICkuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVfX3JhbmdlXCIpLnZhbHVlO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVZvbHVtZVZhbHVlKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJ2b2x1bWVfX2Rpc3BsYXlcIlxuICAgICkuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVfX3JhbmdlXCIpLnZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNldHRpbmdBcnRpY2xlKCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50XG4gICAgLmNyZWF0ZVJhbmdlKClcbiAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHNldHRpbmdBcnRpY2xlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWRkaW5nLWFyZWFcIikuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5jbGFzcyBTZXR0aW5nIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIGNyZWF0ZU1vZGFsT3BlbkJ1dHRvbigpO1xuICAgIGNyZWF0ZU1vZGFsQXJ0aWNsZSgpO1xuICAgIGFkZFNldHRpbmdBcnRpY2xlKCk7XG4gICAgYWRkRm9vdGVyQXJ0aWNsZSgpO1xuICAgIGFjdGl2YXRlTW9kYWwoKTtcbiAgICBzZW5kU2V0dGluZ1ZhbHVlKCk7XG4gICAgcmVzcG9uc2l2ZVZvbHVtZVZhbHVlKCk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIGdldFNldHRpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nO1xuXG4vLyBjb25zdCB2b2x1bWVSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lX19yYW5nZVwiKTtcbi8vIGNvbnN0IHZvbHVtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZV9fZGlzcGxheVwiKTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9uYXZiYXIuY3NzXCI7XG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9zY3JpcHQvbmF2YmFyXCI7XG5leHBvcnQgeyBzdGFydEFwcCB9IGZyb20gXCIuL3NjcmlwdC9hdXRoXCI7XG4iLCJpbXBvcnQgZ2FwaSBmcm9tICdnb29nbGVBUEknO1xuaW1wb3J0IHsgdG9nZ2xlT25OYXZiYXIgLCB0b2dnbGVPZmZOYXZiYXIgfSBmcm9tICcuL25hdmJhcic7XG5cbnZhciBnb29nbGVVc2VyID0ge307XG5sZXQgZ29vZ2xlVXNlckltZztcbmxldCBpc0xvZ2dlZEluO1xuXG52YXIgc3RhcnRBcHAgPSBmdW5jdGlvbigpIHtcbiAgZ2FwaS5sb2FkKCdhdXRoMicsIGZ1bmN0aW9uKCl7XG4gICAgbGV0IGF1dGgyO1xuICAgIGF1dGgyID0gZ2FwaS5hdXRoMi5pbml0KHtcbiAgICAgIGNsaWVudF9pZDogJzg4NjcwMDkyNDg0OC1qbTVlanF0a29tZDE1bWgxdW8wOGowcTJvdTBrZ3FrNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXG4gICAgICBjb29raWVwb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLFxuICAgIH0pO1xuICAgIGF0dGFjaFNpZ25pbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLXNpZ25pbicpLCBhdXRoMik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gYXR0YWNoU2lnbmluKGVsZW1lbnQsIGF1dGgyKSB7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnQuaWQpO1xuICBhdXRoMi5hdHRhY2hDbGlja0hhbmRsZXIoZWxlbWVudCwge30sXG4gICAgICBmdW5jdGlvbihnb29nbGVVc2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTaWduZWQgaW46ICR7Z29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKS5nZXROYW1lKCl9YCk7XG4gICAgICAgIGdvb2dsZVVzZXJJbWcgPSBnb29nbGVVc2VyLmdldEJhc2ljUHJvZmlsZSgpLmdldEltYWdlVXJsKCk7XG4gICAgICAgIGlzTG9nZ2VkSW4gPSBnb29nbGVVc2VyLmlzU2lnbmVkSW4oKTtcbiAgICAgICAgdG9nZ2xlT25OYXZiYXIoKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycm9yLCB1bmRlZmluZWQsIDIpKTtcbiAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaWduT3V0KCkge1xuICB2YXIgYXV0aDIgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO1xuICBhdXRoMi5zaWduT3V0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgdG9nZ2xlT2ZmTmF2YmFyKCk7XG4gICAgY29uc29sZS5sb2coJ1VzZXIgc2lnbmVkIG91dC4nKTtcbiAgICB9KTtcbiAgfVxuXG5leHBvcnQgeyBzdGFydEFwcCAsIHNpZ25PdXQgLCBpc0xvZ2dlZEluICwgZ29vZ2xlVXNlckltZyB9IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vaW1nL2ljb24td2hpdGUucG5nJztcblxuY29uc3QgYnJhbmRMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcblxuZnVuY3Rpb24gZ2V0QnJhbmRMb2dvKCkge1xuICAgIGNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2xvZ299XCIgYWx0PVwiXCI+UG9tb2ZvY3VzXG4gICAgPC9hPlxuYCk7XG4gICAgYnJhbmRMb2dvLmFwcGVuZENoaWxkKGxvZ29Cb3gpO1xufVxuXG5leHBvcnQgeyBnZXRCcmFuZExvZ28gfTsiLCJpbXBvcnQgbG9naW4gZnJvbSAnLi4vLi4vaW1nL3VzZXItd2hpdGUucG5nJztcbmltcG9ydCBnb29nbGUgZnJvbSAnLi4vLi4vaW1nL2dvb2dsZS1ibGFjay5wbmcnO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcblxuZnVuY3Rpb24gdG9nZ2xlTG9naW5Ecm9wZG93bigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tZHJvcGRvd24nKS5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tc2hvd1wiKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dpbkJ0bigpIHtcbiAgICBjb25zdCBsb2dpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvZmlsZS1hcmVhXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnRuXCIgaWQ9XCJsb2dpbi1idG5cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtsb2dpbn1cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+TG9naW48L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250YWluZXJcIiBpZD1cImxvZ2luLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIGlkPVwiZ29vZ2xlLXNpZ25pblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtnb29nbGV9XCIgYWx0PVwiXCIgY2xhc3M9XCJkcm9wZG93bi1pY29uXCI+PGRpdj5Mb2dpbiB3aXRoIEdvb2dsZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICBcbiAgICA8L2Rpdj5cbmApO1xuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dpbkJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUxvZ2luRHJvcGRvd24pO1xufVxuXG5mdW5jdGlvbiBybUxvZ2luQnRuKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWFyZWEnKS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IHsgZ2V0TG9naW5CdG4gLCBybUxvZ2luQnRuIH07IiwiaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uLy4uL2ltZy91c2VyLWJsYWNrLnBuZ1wiO1xuaW1wb3J0IHN1YnNjcmlwdGlvbiBmcm9tIFwiLi4vLi4vaW1nL3JvY2tldC1ibGFjay5wbmdcIjtcbmltcG9ydCBsb2dvdXQgZnJvbSBcIi4uLy4uL2ltZy9sb2dvdXQtYmxhY2sucG5nXCI7XG5pbXBvcnQgZGVsZXRlQWNjIGZyb20gXCIuLi8uLi9pbWcvZGVsZXRlLWJsYWNrLnBuZ1wiO1xuaW1wb3J0IHsgc2lnbk91dCAsIGdvb2dsZVVzZXJJbWcgfSBmcm9tIFwiLi4vYXV0aFwiXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2ZpbGVEcm9wZG93bigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1kcm9wZG93bicpLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1zaG93XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG59XG5cbi8vcmVuZGVyIHByb2ZpbGUgYnV0dG9uXG5mdW5jdGlvbiBnZXRQcm9maWxlQnRuKCkge1xuICAgIGNvbnN0IHByb2ZpbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtYXJlYVwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnRuXCIgaWQ9XCJwcm9maWxlLWJ0blwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Z29vZ2xlVXNlckltZ31cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+PC9kaXY+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiIGlkPVwicHJvZmlsZS1kcm9wZG93blwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIGlkPVwicHJvZmlsZS1tZW51XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvZmlsZX1cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PlByb2ZpbGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgaWQ9XCJzdWJzY3JpcHRpb24tbWVudVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3N1YnNjcmlwdGlvbn1cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PlN1YnNjcmlwdGlvbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBpZD1cImdvb2dsZS1sb2dvdXRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtsb2dvdXR9XCIgYWx0PVwiXCIgY2xhc3M9XCJkcm9wZG93bi1pY29uXCI+PGRpdj5Mb2dvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgaWQ9XCJkZWxldGUtYWNjb3VudFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2RlbGV0ZUFjY31cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PkRlbGV0ZUFjY291bnQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+ICAgIFxuPC9kaXY+XG5gKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvZmlsZUJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUHJvZmlsZURyb3Bkb3duKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvb2dsZS1sb2dvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZ25PdXQpO1xufVxuXG5leHBvcnQgeyBnZXRQcm9maWxlQnRuIH07IiwiaW1wb3J0IHJlcG9ydCBmcm9tICcuLi8uLi9pbWcvZ3JhcGgtd2hpdGUucG5nJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5cbmZ1bmN0aW9uIGdldFJlcG9ydEJ0bigpIHtcbiAgICBjb25zdCByZXBvcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idG4gcmVwb3J0LWJ0blwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7cmVwb3J0fVwiIGFsdD1cIlwiIGNsYXNzPVwibWluaS1pY29uXCI+PGRpdj5SZXBvcnQ8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbmApO1xuICAgIG5hdi5hcHBlbmRDaGlsZChyZXBvcnRCdG4pO1xufVxuXG5leHBvcnQgeyBnZXRSZXBvcnRCdG4gfTsiLCJpbXBvcnQgc2V0dGluZyBmcm9tICcuLi8uLi9pbWcvY29uZmlnLXdoaXRlLnBuZyc7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5mdW5jdGlvbiBnZXRTZXR0aW5nQnRuKCkge1xuICAgIGNvbnN0IHNldHRpbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgPGJ1dHRvbiBpZD1cIm1vZGFsX19vcGVuLWJ0blwiIGNsYXNzPVwibmF2LWJ0biBzZXR0aW5nLWJ0blwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7c2V0dGluZ31cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+U2V0dGluZzwvZGl2PlxuICAgIDwvYnV0dG9uPlxuYCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHNldHRpbmdCdG4pO1xufVxuXG5leHBvcnQgeyBnZXRTZXR0aW5nQnRuIH07IiwiaW1wb3J0IHsgZ2V0QnJhbmRMb2dvIH0gZnJvbSAnLi9kaXNwbGF5L2JyYW5kLWxvZ28nXG5pbXBvcnQgeyBnZXRSZXBvcnRCdG4gfSBmcm9tICcuL2Rpc3BsYXkvcmVwb3J0LWJ0bidcbmltcG9ydCB7IGdldFNldHRpbmdCdG4gfSBmcm9tICcuL2Rpc3BsYXkvc2V0dGluZy1idG4nXG5pbXBvcnQgeyBnZXRMb2dpbkJ0biB9IGZyb20gJy4vZGlzcGxheS9sb2dpbi1idG4nXG5pbXBvcnQgeyBnZXRQcm9maWxlQnRuIH0gZnJvbSAnLi9kaXNwbGF5L3Byb2ZpbGUtYnRuJ1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4vYXV0aCdcblxuLy9yZW5kZXIgYWxsIGJ1dHRvbnNcbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICBnZXRCcmFuZExvZ28oKTtcbiAgICBnZXRSZXBvcnRCdG4oKTtcbiAgICBnZXRTZXR0aW5nQnRuKCk7XG4gICAgZ2V0TG9naW5CdG4oKTtcbiAgICAvLyBnZXRQcm9maWxlQnRuKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU9uTmF2YmFyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWFyZWEnKS5yZW1vdmUoKTtcbiAgICBnZXRQcm9maWxlQnRuKCk7ICAgXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU9mZk5hdmJhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1hcmVhJykucmVtb3ZlKCk7XG4gICAgZ2V0TG9naW5CdG4oKTsgICAgIFxufVxuXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgLCB0b2dnbGVPbk5hdmJhciAsIHRvZ2dsZU9mZk5hdmJhciB9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRhc2tCdG4ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRhc2stYnRuXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPiBBZGQgVGFza1xuICAgICAgPC9idXR0b24+XG4gICAgYCk7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrTWFuYWdlciBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuaW1wb3J0IFRhc2tWaWV3Q29udHJvbGxlciBmcm9tIFwiLi90YXNrVmlld0NvbnRyb2xsZXJcIjtcblxuY29uc3QgY3JlYXRlVGFza0h0bWxDb250ZW50ID0gYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwidGFzay1kZXRhaWwgY3JlYXRlLXRhc2tcIj5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbF9fdGl0bGVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cInRhc2stZGV0YWlsX190aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IHdvcmtpbmcgb24/XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsX19wb21vZG9yb1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RXN0IFBvbW9kb3Jvczwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsX19wb21vZG9yby1jb250ZW50XCI+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJudW1iZXItcG9tb2Rvcm9zXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvbW9kb3JvLXVwZG93bi1idG4gcG9tb2Rvcm8tdXBcIiBkYXRhLWFjdGlvbj1cImluY3JlbWVudFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FyZXQtdXBcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvbW9kb3JvLXVwZG93bi1idG4gcG9tb2Rvcm8tZG93blwiIGRhdGEtYWN0aW9uPVwiZGVjcmVtZW50XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYXJldC1kb3duXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsX19ub3RlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtbm90ZS1idG5cIiBkYXRhLWFjdGlvbj1cImFkZE5vdGVcIj4rIEFkZCBOb3RlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICAgPGZvb3Rlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRldGFpbF9fY2FuY2VsLWJ0blwiIGRhdGEtYWN0aW9uPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRldGFpbF9fc2F2ZS1idG4gdGFzay1kZXRhaWxfX3NhdmUtYnRuLS1kaXNhYmxlZFwiIGRhdGEtYWN0aW9uPVwic2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICAgIDwvYXJ0aWNsZT5cbiAgYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlVGFzayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWxlbSA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnRcbiAgICAgIC5jcmVhdGVSYW5nZSgpXG4gICAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGNyZWF0ZVRhc2tIdG1sQ29udGVudCk7XG5cbiAgICByZXN1bHRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGlja0hhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICByZXN1bHRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsX190aXRsZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLm9uSW5wdXRIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5lbGVtID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2tcIik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCB0YXNrID0gVGFza01hbmFnZXIuY3JlYXRlVGFzayh0aGlzLmdldFRhc2tJbmZvKCkpO1xuICAgIFRhc2tNYW5hZ2VyLmFkZFRhc2sodGFzayk7XG4gICAgVGFza1ZpZXdDb250cm9sbGVyLnNob3dUYXNrKHRhc2spO1xuICAgIFRhc2tWaWV3Q29udHJvbGxlci5zaG93QWRkVGFza0J0bigpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibnVtYmVyLXBvbW9kb3Jvc1wiXScpLnZhbHVlKys7XG4gIH1cblxuICBkZWNyZW1lbnQoKSB7XG4gICAgdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJudW1iZXItcG9tb2Rvcm9zXCJdJykudmFsdWUtLTtcbiAgfVxuXG4gIGFkZE5vdGUoKSB7XG4gICAgdGhpcy5yZW1vdmVBZGROb3RlQnRuKCk7XG4gICAgdGhpcy5zaG93VGV4dEFyZWEoY3JlYXRlVGV4dEFyZWEoKSk7XG4gIH1cblxuICByZW1vdmVBZGROb3RlQnRuKCkge1xuICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlLWJ0blwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIHNob3dUZXh0QXJlYShub3RlVGV4dEFyZWEpIHtcbiAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbF9fbm90ZVwiKS5hcHBlbmRDaGlsZChub3RlVGV4dEFyZWEpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIFRhc2tWaWV3Q29udHJvbGxlci5zaG93QWRkVGFza0J0bigpO1xuICB9XG5cbiAgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBsZXQgYWN0aW9uO1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJJXCIpIHtcbiAgICAgIGNvbnN0IHBvbW9kb3JvVXBkb3duQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucG9tb2Rvcm8tdXBkb3duLWJ0blwiKTtcbiAgICAgIGFjdGlvbiA9IHBvbW9kb3JvVXBkb3duQnRuLmRhdGFzZXQuYWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5hY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgdGhpc1thY3Rpb25dKCk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsX19zYXZlLWJ0blwiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stZGV0YWlsX19zYXZlLWJ0bi0tZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudC50YXJnZXQudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1cbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxfX3NhdmUtYnRuXCIpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxfX3NhdmUtYnRuLS1kaXNhYmxlZFwiKTtcbiAgICB9XG4gIH1cblxuICBnZXRUYXNrSW5mbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGFzay1kZXRhaWxfX3RpdGxlXCJdJylcbiAgICAgIC52YWx1ZTtcbiAgICBjb25zdCBlc3RpbWF0ZWRQb21vZG9yb3MgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFtuYW1lPVwibnVtYmVyLXBvbW9kb3Jvc1wiXSdcbiAgICApLnZhbHVlO1xuICAgIGxldCBub3RlID0gXCJcIjtcblxuICAgIGlmICh0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cIm5vdGVcIl0nKSkge1xuICAgICAgbm90ZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwibm90ZVwiXScpLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRpdGxlLCBlc3RpbWF0ZWRQb21vZG9yb3MsIG5vdGUgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50XG4gICAgLmNyZWF0ZVJhbmdlKClcbiAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KFxuICAgICAgYDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIHBsYWNlaG9sZGVyPVwiU29tZSBub3Rlcy4uLlwiPjwvdGV4dGFyZWE+YFxuICAgICk7XG59XG4iLCJpbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza01hbmFnZXJcIjtcbmltcG9ydCBUYXNrVmlld0NvbnRyb2xsZXIgZnJvbSAnLi90YXNrVmlld0NvbnRyb2xsZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRUYXNrIHtcbiAgY29uc3RydWN0b3IodGFzaykge1xuICAgIHRoaXMuZWxlbSA9IG51bGw7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLmh0bWxDb250ZW50ID0gYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwidGFzay1kZXRhaWwgZWRpdC10YXNrXCI+XG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxfX3RpdGxlXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJ0YXNrLWRldGFpbF9fdGl0bGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSB3b3JraW5nIG9uP1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbF9fcG9tb2Rvcm9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkVzdCBQb21vZG9yb3M8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbF9fcG9tb2Rvcm8tY29udGVudFwiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwibnVtYmVyLXBvbW9kb3Jvc1wiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjBcIiAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb21vZG9yby11cGRvd24tYnRuIHBvbW9kb3JvLXVwXCIgZGF0YS1hY3Rpb249XCJpbmNyZW1lbnRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhcmV0LXVwXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb21vZG9yby11cGRvd24tYnRuIHBvbW9kb3JvLWRvd25cIiBkYXRhLWFjdGlvbj1cImRlY3JlbWVudFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FyZXQtZG93blwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbF9fbm90ZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLW5vdGUtYnRuXCIgZGF0YS1hY3Rpb249XCJhZGROb3RlXCI+KyBBZGQgTm90ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICAgIDxmb290ZXI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidGFzay1kZXRhaWxfX2RlbGV0ZS1idG5cIiBkYXRhLWFjdGlvbj1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stZGV0YWlsX19jYW5jZWwtYnRuXCIgZGF0YS1hY3Rpb249XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stZGV0YWlsX19zYXZlLWJ0blwiIGRhdGEtYWN0aW9uPVwic2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICAgIDwvYXJ0aWNsZT5cbiAgYDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudFxuICAgICAgLmNyZWF0ZVJhbmdlKClcbiAgICAgIC5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodGhpcy5odG1sQ29udGVudCk7XG5cbiAgICByZXN1bHRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFza1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2tIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgcmVzdWx0XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbF9fdGl0bGVcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5vbklucHV0SGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuaW5zZXJ0VGFza0luZm8ocmVzdWx0KTtcblxuICAgIHRoaXMuZWxlbSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFza1wiKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaW5zZXJ0VGFza0luZm8ocmVzdWx0KSB7XG4gICAgY29uc3QgdGl0bGVJbnB1dEVsZW0gPSByZXN1bHQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFtuYW1lPVwidGFzay1kZXRhaWxfX3RpdGxlXCJdJ1xuICAgICk7XG4gICAgY29uc3QgcG9tb2Rvcm9JbnB1dEVsZW0gPSByZXN1bHQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFtuYW1lPVwibnVtYmVyLXBvbW9kb3Jvc1wiXSdcbiAgICApO1xuICAgIHRpdGxlSW5wdXRFbGVtLnZhbHVlID0gdGhpcy50YXNrLnRpdGxlO1xuICAgIHBvbW9kb3JvSW5wdXRFbGVtLnZhbHVlID0gdGhpcy50YXNrLmVzdGltYXRlZFBvbW9kb3JvcztcblxuICAgIGlmICh0aGlzLnRhc2subm90ZSAhPSBcIlwiKSB7XG4gICAgICBjb25zdCBhZGROb3RlQnRuID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnRuXCIpO1xuICAgICAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVUZXh0QXJlYSh0aGlzLnRhc2subm90ZSk7XG5cbiAgICAgIGFkZE5vdGVCdG4ucmVwbGFjZVdpdGgodGV4dEFyZWEpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBtb2RpZmllZFRhc2sgPSBUYXNrTWFuYWdlci5tb2RpZnlUYXNrKHRoaXMudGFzaywgdGhpcy5nZXRUYXNrSW5mbygpKTtcbiAgICBUYXNrVmlld0NvbnRyb2xsZXIucmVwbGFjZSh0aGlzLmVsZW0sIG1vZGlmaWVkVGFzay5yZW5kZXIoKSlcbiAgfVxuXG4gIGluY3JlbWVudCgpIHtcbiAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm51bWJlci1wb21vZG9yb3NcIl0nKS52YWx1ZSsrO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibnVtYmVyLXBvbW9kb3Jvc1wiXScpLnZhbHVlLS07XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgLy8gcmVtb3ZlIGZyb20gZGlzcGxheVxuICAgIHRoaXMudGFzay5lbGVtLnJlbW92ZSgpO1xuICAgIC8vIHJlbW92ZSBmcm9tIHRhc2sgTWFuYWdlclxuICAgIFRhc2tNYW5hZ2VyLnJlbW92ZVRhc2tCeUlkKHRoaXMudGFzay5pZCk7XG4gICAgLy8gY2xvc2UgbW9kYWxcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGFkZE5vdGUoKSB7XG4gICAgdGhpcy5yZW1vdmVBZGROb3RlQnRuKCk7XG4gICAgdGhpcy5zaG93VGV4dEFyZWEoY3JlYXRlVGV4dEFyZWEoKSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0QXJlYSgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudFxuICAgICAgICAuY3JlYXRlUmFuZ2UoKVxuICAgICAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KFxuICAgICAgICAgIGA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIlNvbWUgbm90ZXMuLi5cIj48L3RleHRhcmVhPmBcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVBZGROb3RlQnRuKCkge1xuICAgIHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlLWJ0blwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIHNob3dUZXh0QXJlYShub3RlVGV4dEFyZWEpIHtcbiAgICB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbF9fbm90ZVwiKS5hcHBlbmRDaGlsZChub3RlVGV4dEFyZWEpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGhpcy5lbGVtO1xuXG4gICAgLy8gcmVwbGFjZSBlZGl0VGFzayBkaXNwbGF5IHdpdGggdGFzayBkaXNwbGF5XG4gICAgZWRpdFRhc2sucmVwbGFjZVdpdGgodGhpcy50YXNrLmVsZW0pO1xuICB9XG5cbiAgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBsZXQgYWN0aW9uO1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJJXCIpIHtcbiAgICAgIGNvbnN0IHBvbW9kb3JvVXBkb3duQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucG9tb2Rvcm8tdXBkb3duLWJ0blwiKTtcbiAgICAgIGFjdGlvbiA9IHBvbW9kb3JvVXBkb3duQnRuLmRhdGFzZXQuYWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5hY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgdGhpc1thY3Rpb25dKCk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxfX3NhdmUtYnRuXCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZXRhaWxfX3NhdmUtYnRuLS1kaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsX19zYXZlLWJ0blwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlsX19zYXZlLWJ0bi0tZGlzYWJsZWRcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFza0luZm8oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGFzay1kZXRhaWxfX3RpdGxlXCJdJylcbiAgICAgIC52YWx1ZTtcbiAgICBjb25zdCBlc3RpbWF0ZWRQb21vZG9yb3MgPSBOdW1iZXIoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibnVtYmVyLXBvbW9kb3Jvc1wiXScpLnZhbHVlXG4gICAgKTtcbiAgICBsZXQgbm90ZSA9IFwiXCI7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJub3RlXCJdJykpIHtcbiAgICAgIG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwibm90ZVwiXScpLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRpdGxlLCBlc3RpbWF0ZWRQb21vZG9yb3MsIG5vdGUgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShub3RlKSB7XG4gIHJldHVybiBkb2N1bWVudFxuICAgIC5jcmVhdGVSYW5nZSgpXG4gICAgLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChcbiAgICAgIGA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBwbGFjZWhvbGRlcj1cIlNvbWUgbm90ZXMuLi5cIj4ke25vdGV9PC90ZXh0YXJlYT5gXG4gICAgKTtcbn1cbiIsImltcG9ydCBFZGl0VGFzayBmcm9tIFwiLi9lZGl0VGFza1wiO1xuaW1wb3J0IFRhc2tWaWV3Q29udHJvbGxlciBmcm9tICcuL3Rhc2tWaWV3Q29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihUYXNrSW5mbykge1xuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBub3RlLCBlc3RpbWF0ZWRQb21vZG9yb3MgfSA9IFRhc2tJbmZvO1xuICAgIHRoaXMuZWxlbSA9IG51bGw7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMuZXN0aW1hdGVkUG9tb2Rvcm9zID0gZXN0aW1hdGVkUG9tb2Rvcm9zO1xuICAgIHRoaXMuY29tcGxldGVkUG9tb2Rvcm9zID0gMDtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9ICF0aGlzLmlzQ29tcGxldGVkO1xuICAgIHRoaXMudG9nZ2xlQ29tcGxldGVkRGlzcGxheSgpO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGVkRGlzcGxheSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2tfX3RpdGxlXCIpO1xuICAgIGNvbnN0IGNoZWNrTWFya2VyID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFza19fY2hlY2stbWFya2VyXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrX190aXRsZS0tY29tcGxldGVkXCIpO1xuICAgIGNoZWNrTWFya2VyLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrX19jaGVjay1tYXJrZXItLWNvbXBsZXRlZFwiKTtcbiAgfVxuXG4gIG9wZW5FZGl0VGFzaygpIHtcbiAgICBjb25zdCBlZGl0VGFzayA9IG5ldyBFZGl0VGFzayh0aGlzKTtcbiAgICBjb25zdCByZW5kZXJlZEVkaXRUYXNrID0gZWRpdFRhc2sucmVuZGVyKCkucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG4gICAgVGFza1ZpZXdDb250cm9sbGVyLnJlcGxhY2UodGhpcy5lbGVtLCByZW5kZXJlZEVkaXRUYXNrKVxuICB9XG5cbiAgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBsZXQgYWN0aW9uO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtZWxsaXBzaXMtdlwiKSkge1xuICAgICAgY29uc3QgZWRpdEJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmVkaXQtYnRuXCIpO1xuICAgICAgYWN0aW9uID0gZWRpdEJ0bi5kYXRhc2V0LmFjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWN0aW9uO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIHRoaXNbYWN0aW9uXSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBOT19UQUJfRk9DVVMgPSAtMTtcbiAgICBjb25zdCB0YXNrSHRtbENvbnRlbnQgPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cInRhc2tcIiB0YWJpbmRleD1cIiR7Tk9fVEFCX0ZPQ1VTfVwiPlxuICAgICAgICA8aSBjbGFzcz1cInRhc2tfX2NoZWNrLW1hcmtlciBmYXMgZmEtY2hlY2stY2lyY2xlXCIgZGF0YS1hY3Rpb249XCJ0b2dnbGVDb21wbGV0ZWRcIj48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGFza19fdGl0bGVcIj5cbiAgICAgICAgICAke3RoaXMudGl0bGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tfX3BvbW9kb3Jvc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza19fY29tcGxldGVkLXBvbW9kb3Jvc1wiPiR7dGhpcy5jb21wbGV0ZWRQb21vZG9yb3N9PC9zcGFuPiAvXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrX19lc3RpbWF0ZWQtcG9tb2Rvcm9zXCI+JHt0aGlzLmVzdGltYXRlZFBvbW9kb3Jvc308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1idG5cIiBkYXRhLWFjdGlvbj1cIm9wZW5FZGl0VGFza1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICBgO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnRcbiAgICAgIC5jcmVhdGVSYW5nZSgpXG4gICAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHRhc2tIdG1sQ29udGVudCk7XG5cbiAgICByZXN1bHRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZWxlbSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIik7XG4gICAgcmV0dXJuIHRoaXMuZWxlbTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmNsYXNzIFRhc2tNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlVGFzayh0YXNrSW5mbykge1xuICAgIHRhc2tJbmZvLmlkID0gdGhpcy5nZXROZXdUYXNrSWQoKTtcbiAgICByZXR1cm4gbmV3IFRhc2sodGFza0luZm8pO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZ2V0TmV3VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aCArIDE7XG4gIH1cblxuICByZW1vdmVUYXNrQnlJZChpZCkge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKGlkIC0gMSwgMSk7XG4gICAgdGhpcy51cGRhdGVBbGxUYXNrc0lkKCk7XG4gIH1cblxuICByZW1vdmVDb21wbGV0ZWRUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaXNDb21wbGV0ZWQpO1xuICB9XG5cbiAgdXBkYXRlQWxsVGFza3NJZCgpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiAodGFzay5pZCA9IGluZGV4ICsgMSkpO1xuICB9XG5cbiAgZ2V0VGFza0J5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIH1cblxuICBnZXRBbGxUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIHJlbmRlckFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5yZW5kZXIoKSk7XG4gIH1cblxuICBtb2RpZnlUYXNrKHRhc2ssIHRhc2tJbmZvKSB7XG4gICAgdGFzay50aXRsZSA9IHRhc2tJbmZvLnRpdGxlO1xuICAgIHRhc2suZXN0aW1hdGVkUG9tb2Rvcm9zID0gdGFza0luZm8uZXN0aW1hdGVkUG9tb2Rvcm9zO1xuICAgIHRhc2subm90ZSA9IHRhc2tJbmZvLm5vdGU7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxufVxuXG5jb25zdCB0YXNrTWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlcigpO1xuZXhwb3J0IGRlZmF1bHQgdGFza01hbmFnZXI7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvdGFzay5jc3NcIjtcbmltcG9ydCBDcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1NlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFkZFRhc2tCdG4gPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlVGFzayA9IG5ldyBDcmVhdGVUYXNrKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1zZWN0aW9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGlja0hhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgICAgPHNlY3Rpb24gaWQ9XCJ0YXNrLXNlY3Rpb25cIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMz5UYXNrczwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnRuIGZlYXR1cmUtYnRuXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12XCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHVsIGNsYXNzPVwidGFzay1saXN0XCI+PC91bD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGFzay1idG5cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+IEFkZCBUYXNrXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYCk7XG5cbiAgICAvLyDtg5zsiqTtgawg66as7Iqk7Yq465Ok7J20IOyeiOuLpOuptCBgdGFzay1saXN0YOyXkCBhcHBlbmTtlbTso7zqs6AgcmVuZGVyaW5n7J2EIO2VtOyjvOyWtOyVvO2VqFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtdGFzay1idG5cIiB8fFxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJmYXMgZmEtcGx1cy1jaXJjbGVcIlxuICAgICkge1xuICAgICAgdGhpcy5zaG93Q3JlYXRlVGFzaygpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKTtcbiAgICBhZGRUYXNrQnRuLnJlcGxhY2VXaXRoKHRoaXMuY3JlYXRlVGFzay5yZW5kZXIoKSk7XG4gIH1cbn1cbiIsImltcG9ydCBBZGRUYXNrQnRuIGZyb20gXCIuL2FkZFRhc2tCdG5cIjtcblxuY2xhc3MgVGFza1ZpZXdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNob3dUYXNrKHRhc2spIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKS5hcHBlbmRDaGlsZCh0YXNrLnJlbmRlcigpKTtcbiAgfVxuXG4gIHNob3dBZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IHRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXNlY3Rpb25cIik7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IG5ldyBBZGRUYXNrQnRuKCk7XG4gICAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bi5yZW5kZXIoKSk7XG4gIH1cbiAgXG4gIHJlcGxhY2Uob2xkRWxlbSwgbmV3RWxlbSkge1xuICAgIG9sZEVsZW0ucmVwbGFjZVdpdGgobmV3RWxlbSk7XG4gIH1cbn1cblxuY29uc3QgdGFza1ZpZXdDb250cm9sbGVyID0gbmV3IFRhc2tWaWV3Q29udHJvbGxlcigpO1xuZXhwb3J0IGRlZmF1bHQgdGFza1ZpZXdDb250cm9sbGVyO1xuIiwiY29uc3QgRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVNb2RlID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBoYXNDbGFzc0NsaWNrZWRNZW51ID0gYnV0dG9uTGlzdFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWRCdG4nKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2xhc3NDbGlja2VkTWVudSlcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGlzdFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkQnRuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkQnRuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlQnRuVG9Qb21vZG9yb01vZGUgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkQnRuJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9YnV0dG9uXScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGJ1dHRvbkxpc3RbaV0ubmFtZSA9PT0gJ3BvbW9kb3JvTW9kZScpIHtcbiAgICAgICAgICAgICAgICBidXR0b25MaXN0W2ldLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWRCdG4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUJ0blRvU2hvcnRNb2RlID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZEJ0bicpO1xuICAgICAgICBjb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihidXR0b25MaXN0W2ldLm5hbWUgPT09ICdzaG9ydE1vZGUnKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uTGlzdFtpXS5jbGFzc0xpc3QuYWRkKCdjbGlja2VkQnRuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVCdG5Ub0xvbmdNb2RlID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZEJ0bicpO1xuICAgICAgICBjb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihidXR0b25MaXN0W2ldLm5hbWUgPT09ICdsb25nTW9kZScpIHtcbiAgICAgICAgICAgICAgICBidXR0b25MaXN0W2ldLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWRCdG4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZihidXR0b24udmFsdWUgPT09IFwiU1RBUlRcIikge1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgIGJ1dHRvbi52YWx1ZSA9ICdTVE9QJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJ1dHRvbi52YWx1ZSA9PT0gJ1NUT1AnKSB7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ3JnYigyMzUgMjM1IDIzNSkgMHB4IDZweCAwcHgnO1xuICAgICAgICAgICAgYnV0dG9uLnZhbHVlID0gJ1NUQVJUJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZU1vZGUsXG4gICAgICAgIHVwZGF0ZUJ0blRvUG9tb2Rvcm9Nb2RlLFxuICAgICAgICB1cGRhdGVCdG5Ub1Nob3J0TW9kZSxcbiAgICAgICAgdXBkYXRlQnRuVG9Mb25nTW9kZSxcbiAgICAgICAgdXBkYXRlVGltZXJcbiAgICB9XG59XG5cbmNvbnN0IGRpc3BsYXkgPSBEaXNwbGF5KCk7XG5cbmV4cG9ydCB7IGRpc3BsYXkgfSIsIi8qIG1vZGFsIO2ZnOyEse2ZlCDtlajsiJggKi9cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbmNvbnN0IG1vZGFsT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX29wZW4tYnRuXCIpO1xuY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZXR0aW5nX19yZW1vdmUtYnRuXCIpWzBdO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvb3Rlcl9fc3VibWl0LWJ0blwiKVswXTtcblxuZnVuY3Rpb24gYWN0aXZhdGVNb2RhbCgpIHtcbiAgbW9kYWxPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwsIGZhbHNlKTtcbiAgbW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCwgZmFsc2UpO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwsIGZhbHNlKTtcblxuICAvL21vZGFsIOuwlOq5peyqvSDsmIHsl60g7YG066at7IucIG1vZGFsIGNsb3NlIOq1rO2YhFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG5cbi8qIG1vZGFsIGNsb3NlIO2VqOyImCAqL1xuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vKiBtb2RhbCBvcGVuIO2VqOyImCAqL1xuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBtb2RhbCDqtaztmITsi5wgYWN0aXZhdGVNb2RhbCBpbXBvcnQg7ZuEIG1vZGFsIHRlbXBsYXRlIOywuOqzoO2VmOyXrCDsgqzsmqlcbmV4cG9ydCB7IHN1Ym1pdEJ1dHRvbiwgYWN0aXZhdGVNb2RhbCB9O1xuIiwiaW1wb3J0IHsgdGltZXIgfSBmcm9tICcuL3RpbWVyLmpzJztcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuXG5jb25zdCBNb2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldERlZmF1bHRNb2RlID0gKCkgPT4ge1xuICAgICAgICB0aW1lci5zZXRUaW1lKCdwb21vZG9yb01vZGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB3YWl0Rm9yTW9kZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKTtcbiAgICAgICAgYnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlTW9kZShidXR0b24pO1xuICAgICAgICAgICAgICAgIHRpbWVyLnNldFRpbWUoYnV0dG9uLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgdGltZXIuaW5pdFBvbW9kb3JvUnVuQ250KCk7XG5cbiAgICAgICAgICAgICAgICBpZih0aW1lci5pc1J1bm5pbmdUaW1lcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRpbWVyKHRpbWVyLmJ0blRpbWVyU3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uLm5hbWUgIT09ICdwb21vZG9yb01vZGUnKVxuICAgICAgICAgICAgICAgICAgICB0aW1lci5zZXRTaW5nbGVUaW1lcih0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0RGVmYXVsdE1vZGUsXG4gICAgICAgIHdhaXRGb3JNb2RlXG4gICAgfVxufVxuXG5jb25zdCBtb2RlID0gTW9kZSgpO1xuZXhwb3J0IHsgbW9kZSB9IiwiaW1wb3J0IHsgc3VibWl0QnV0dG9uLCBhY3RpdmF0ZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcblxuZnVuY3Rpb24gZ2V0U2V0dGluZygpIHtcbiAgY29uc3QgcG9tb2Rvcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVfX3BvbW9kb3JvXCIpLnZhbHVlO1xuICBjb25zdCBzaG9ydEJyZWFrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lX19zaG9ydEJyZWFrXCIpLnZhbHVlO1xuICBjb25zdCBsb25nQnJlYWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVfX2xvbmdCcmVha1wiKS52YWx1ZTtcbiAgY29uc3QgZGlkQXV0b1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRvU3RhcnRfX2NoZWNrQm94XCIpLmNoZWNrZWQ7XG4gIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lX19yYW5nZVwiKS52YWx1ZTtcbiAgY29uc3QgbG9uZ0JyZWFrSW50ZXJ2YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvbmdCcmVha0ludGVydmFsX19udW1iZXJcIilcbiAgICAudmFsdWU7XG5cbiAgLy8gY29uc29sZS5sb2coe1xuICAvLyAgIHBvbW9kb3JvLFxuICAvLyAgIHNob3J0QnJlYWssXG4gIC8vICAgbG9uZ0JyZWFrLFxuICAvLyAgIGRpZEF1dG9TdGFydCxcbiAgLy8gICB2b2x1bWUsXG4gIC8vICAgbG9uZ0JyZWFrSW50ZXJ2YWwsXG4gIC8vIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcG9tb2Rvcm8sXG4gICAgc2hvcnRCcmVhayxcbiAgICBsb25nQnJlYWssXG4gICAgZGlkQXV0b1N0YXJ0LFxuICAgIHZvbHVtZSxcbiAgICBsb25nQnJlYWtJbnRlcnZhbCxcbiAgfTtcbn1cblxuLyogc3VibWl0IEJ0biDtgbTrpq0g7IucIGdldFNldHRpbmcg7ZWo7IiYIO2YuOy2nCAqL1xuZnVuY3Rpb24gc2VuZFNldHRpbmdWYWx1ZSgpIHtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRTZXR0aW5nLCBmYWxzZSk7XG59XG5cbmNvbnN0IHZvbHVtZVJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2clwiKTtcbmNvbnN0IHZvbHVtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZkXCIpO1xuXG4vKiDrsJjsnZHtmJUgdm9sdW1lIGlucHV0IHJhbmdlIOq1rO2YhCAqL1xuZnVuY3Rpb24gcmVzcG9uc2l2ZVZvbHVtZVZhbHVlKCkge1xuICB2b2x1bWVSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2hhbmdlVm9sdW1lVmFsdWUsIGZhbHNlKTtcbiAgdm9sdW1lRGlzcGxheS5pbm5lclRleHQgPSB2b2x1bWVSYW5nZS52YWx1ZTtcblxuICBmdW5jdGlvbiBjaGFuZ2VWb2x1bWVWYWx1ZSgpIHtcbiAgICB2b2x1bWVEaXNwbGF5LmlubmVyVGV4dCA9IHZvbHVtZVJhbmdlLnZhbHVlO1xuICB9XG59XG5cbmNsYXNzIFNldHRpbmcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhcnQoKSB7XG4gICAgYWN0aXZhdGVNb2RhbCgpO1xuICAgIHNlbmRTZXR0aW5nVmFsdWUoKTtcbiAgICByZXNwb25zaXZlVm9sdW1lVmFsdWUoKTtcbiAgfVxuICBnZXQoKSB7XG4gICAgcmV0dXJuIGdldFNldHRpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nO1xuXG4vLyBjb25zdCBteVNldHRpbmcgPSBbXTtcblxuLy8gY2xhc3MgU2V0dGluZyB7XG4vLyAgIGNvbnN0cnVjdG9yKFxuLy8gICAgIHBvbW9kb3JvLFxuLy8gICAgIHNob3J0QnJlYWssXG4vLyAgICAgbG9uZ0JyZWFrLFxuLy8gICAgIGRpZEF1dG9TdGFydCxcbi8vICAgICB2b2x1bWUsXG4vLyAgICAgbG9uZ0JyZWFrSW50ZXJ2YWxcbi8vICAgKSB7XG4vLyAgICAgdGhpcy5wb21vZG9ybyA9IHBvbW9kb3JvO1xuLy8gICAgIHRoaXMuc2hvcnRCcmVhayA9IHNob3J0QnJlYWs7XG4vLyAgICAgdGhpcy5sb25nQnJlYWsgPSBsb25nQnJlYWs7XG4vLyAgICAgdGhpcy5kaWRBdXRvU3RhcnQgPSBkaWRBdXRvU3RhcnQ7XG4vLyAgICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG4vLyAgICAgdGhpcy5sb25nQnJlYWtJbnRlcnZhbCA9IGxvbmdCcmVha0ludGVydmFsO1xuLy8gICB9XG4vLyB9XG4iLCJpbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCBlbmRTb3VuZCBmcm9tICcuL3NvdW5kcy9hbGVydFNvdW5kLm1wMyc7XG5pbXBvcnQgU2V0dGluZyBmcm9tIFwiLi9zZXR0aW5nXCI7XG5cbmNvbnN0IFRpbWVyID0gKCkgPT4ge1xuICAgIGxldCBtb2RlO1xuICAgIGxldCB0aW1lcklkO1xuICAgIGxldCBydW5uaW5nVGltZXIgPSBmYWxzZTtcbiAgICBsZXQgcG9tb2Rvcm9SdW5DbnQgPSAwO1xuICAgIGxldCB0YXNrQ29tcGxldGVDbnQgPSAwO1xuICAgIGxldCBzaW5nbGVUaW1lciA9IGZhbHNlO1xuXG4gICAgLy9QcmVmZXJlbmNlIFZhbHVlXG4gICAgbGV0IGF1dG9TdGFydE5leHRSb3VuZCA9IGZhbHNlO1xuICAgIGxldCBsb25nQnJlYWtJbnRlcnZhbCA9IDA7XG4gICAgbGV0IHBvbW9kb3JvTWluID0gMDtcbiAgICBsZXQgcG9tb2Rvcm9TZWMgPSAwO1xuICAgIGxldCBzaG9ydEJyZWFrTWluID0gMDtcbiAgICBsZXQgc2hvcnRCcmVha1NlYyA9IDA7XG4gICAgbGV0IGxvbmdCcmVha01pbiA9IDA7XG4gICAgbGV0IGxvbmdCcmVha1NlYyA9IDA7XG4gICAgbGV0IHNvdW5kVm9sdW1lID0gMDtcblxuXG4gICAgY29uc3QgbGlzdGVuU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb290ZXJfX3N1Ym1pdC1idG5cIilbMF07XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW1wb3J0U2V0dGluZ3MsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbXBvcnRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKCk7XG4gICAgICAgIGNvbnN0IHBvbW9kb3JvU2V0dGluZ3MgPSBzZXR0aW5nLmdldCgpO1xuXG5cbiAgICAgICAgLy8gcG9tb2Rvcm9NaW4gPSBwb21vZG9yb1NldHRpbmdzLnBvbW9kb3JvO1xuICAgICAgICAvLyBwb21vZG9yb1NlYyA9IDA7XG4gICAgICAgIC8vIHNob3J0QnJlYWtNaW4gPSBwb21vZG9yb1NldHRpbmdzLnNob3J0QnJlYWs7XG4gICAgICAgIC8vIHNob3J0QnJlYWtTZWMgPSAwO1xuICAgICAgICAvLyBsb25nQnJlYWtNaW4gPSBwb21vZG9yb1NldHRpbmdzLmxvbmdCcmVhaztcbiAgICAgICAgLy8gbG9uZ0JyZWFrU2VjID0gMDtcblxuICAgICAgICBwb21vZG9yb01pbiA9IDAvL3BvbW9kb3JvU2V0dGluZ3MucG9tb2Rvcm87XG4gICAgICAgIHBvbW9kb3JvU2VjID0gMi8vMDtcbiAgICAgICAgc2hvcnRCcmVha01pbiA9IDAvL3BvbW9kb3JvU2V0dGluZ3Muc2hvcnRCcmVhaztcbiAgICAgICAgc2hvcnRCcmVha1NlYyA9IDEvLzA7XG4gICAgICAgIGxvbmdCcmVha01pbiA9IDAvL3BvbW9kb3JvU2V0dGluZ3MubG9uZ0JyZWFrO1xuICAgICAgICBsb25nQnJlYWtTZWMgPSAzLy8wO1xuICAgICAgICBhdXRvU3RhcnROZXh0Um91bmQgPSBwb21vZG9yb1NldHRpbmdzLmRpZEF1dG9TdGFydDtcbiAgICAgICAgbG9uZ0JyZWFrSW50ZXJ2YWwgPSBwYXJzZUludChwb21vZG9yb1NldHRpbmdzLmxvbmdCcmVha0ludGVydmFsKTtcbiAgICAgICAgc291bmRWb2x1bWUgPSBwb21vZG9yb1NldHRpbmdzLnZvbHVtZTtcbiAgICAgICAgY29uc29sZS5sb2cocG9tb2Rvcm9TZXR0aW5ncyk7XG4gICAgICAgIGFwcGx5VGltZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlYnVnU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1dG9TdGFydE5leHRSb3VuZDogXCIgKyBhdXRvU3RhcnROZXh0Um91bmQgKyBcIiwgbG9uZ0JyZWFrSW50ZXJ2YWw6IFwiICsgbG9uZ0JyZWFrSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUnVubmluZ1RpbWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcnVubmluZ1RpbWVyO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFNpbmdsZVRpbWVyID0gKHN0YXRlKSA9PiB7XG4gICAgICAgIHNpbmdsZVRpbWVyID0gc3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTaW5nbGVUaW1lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNpbmdsZVRpbWVyO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRQb21vZG9yb1J1bkNudCA9ICgpID0+IHtcbiAgICAgICAgcG9tb2Rvcm9SdW5DbnQgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpbWUgPSAobW9kZVN0YXRlKSA9PiB7XG4gICAgICAgIG1vZGUgPSBtb2RlU3RhdGU7XG5cbiAgICAgICAgaWYgKG1vZGUgPT09ICdwb21vZG9yb01vZGUnKSB7XG4gICAgICAgICAgICBzZXRUaGVtZUZvclBvbW9yb01vZGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnc2hvcnRNb2RlJykge1xuICAgICAgICAgICAgc2V0VGhlbWVGb3JTaG9ydE1vZGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnbG9uZ01vZGUnKSB7XG4gICAgICAgICAgICBzZXRUaGVtZUZvckxvbmdNb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbXBvcnRTZXR0aW5ncygpO1xuICAgICAgICBhcHBseVRpbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaGVtZUZvclBvbW9yb01vZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZCA9IFwicmdiKDIxOSwgODIsIDc3KVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJlZDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKVswXS5zdHlsZS5jb2xvciA9IHJlZDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKVswXS5zdHlsZS5ib3hTaGFkb3cgPSAncmdiKDIzNSAyMzUgMjM1KSAwcHggNnB4IDBweCc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGhlbWVGb3JTaG9ydE1vZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyZWVuID0gXCJyZ2IoNzAsIDE0MiwgMTQ1KVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdyZWVuO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9YnV0dG9uXScpWzBdLnN0eWxlLmNvbG9yID0gZ3JlZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGhlbWVGb3JMb25nTW9kZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmx1ZSA9IFwicmdiKDY3LCAxMjYsIDE2OClcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYmx1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKVswXS5zdHlsZS5jb2xvciA9IGJsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgbnVtRm9ybWF0ID0gKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtIDwgMTApXG4gICAgICAgICAgICBudW0gPSBcIjBcIiArIG51bTtcbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBseVRpbWUgPSAoKSA9PiB7XG4gICAgICAgIC8vZGVidWdnZXI7XG4gICAgICAgIGlmKG1vZGUgPT0gJ3BvbW9kb3JvTW9kZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBudW1Gb3JtYXQocG9tb2Rvcm9NaW4pICsgJzonICsgbnVtRm9ybWF0KHBvbW9kb3JvU2VjKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0aW1lU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSAnc2hvcnRNb2RlJykge1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IG51bUZvcm1hdChzaG9ydEJyZWFrTWluKSArICc6JyArIG51bUZvcm1hdChzaG9ydEJyZWFrU2VjKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0aW1lU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSAnbG9uZ01vZGUnKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gbnVtRm9ybWF0KGxvbmdCcmVha01pbikgKyAnOicgKyBudW1Gb3JtYXQobG9uZ0JyZWFrU2VjKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQgPSB0aW1lU3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd2FpdEZvclRpbWVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9YnV0dG9uXScpO1xuICAgICAgICBidG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRpbWVyKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgVGltZXIoYnV0dG9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgVGltZXIgPSAoc3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAnU1RBUlQnKVxuICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAnU1RPUCcpXG4gICAgICAgICAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoc3RhcnRUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFRpbWVyID0gKCkgPT4ge1xuICAgICAgICAvL2RlYnVnZ2VyO1xuICAgICAgICBpZiAoc2luZ2xlVGltZXIpIHtcbiAgICAgICAgICAgIC8vIFBvbW9kb3JvIE1vZGUgU3RhcnRcbiAgICAgICAgICAgIG1vZGUgPSAncG9tb2Rvcm9Nb2RlJztcbiAgICAgICAgICAgIHNldFRoZW1lRm9yUG9tb3JvTW9kZSgpO1xuICAgICAgICAgICAgYXBwbHlUaW1lKCk7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUJ0blRvUG9tb2Rvcm9Nb2RlKGJ0bk1vZGVTdGF0ZSgpKTtcbiAgICAgICAgICAgIHN0b3BUaW1lcigpO1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUaW1lcihidG5UaW1lclN0YXRlKCkpO1xuICAgICAgICAgICAgc2luZ2xlVGltZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlID09PSAncG9tb2Rvcm9Nb2RlJykge1xuICAgICAgICAgICAgcG9tb2Rvcm9SdW5DbnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9tb2Rvcm9SdW5DbnQ6IFwiICsgcG9tb2Rvcm9SdW5DbnQgKyBcImxvbmdCcmVha0ludGVydmFsOiBcIiArIGxvbmdCcmVha0ludGVydmFsKTtcbiAgICAgICAgICAgIGlmKHBvbW9kb3JvUnVuQ250ID09PSA0KVxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgaWYgKHBvbW9kb3JvUnVuQ250ID09PSBsb25nQnJlYWtJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIC8vIEluY3JlYXNlIFRhc2sgQ291bnRcbiAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVDbnQrKztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tDb21wbGV0ZUNudDogXCIgKyB0YXNrQ29tcGxldGVDbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9uZyBCcmVhayBTdGFydFxuICAgICAgICAgICAgICAgIG1vZGUgPSAnbG9uZ01vZGUnO1xuICAgICAgICAgICAgICAgIHNldFRoZW1lRm9yTG9uZ01vZGUoKTtcbiAgICAgICAgICAgICAgICBhcHBseVRpbWUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUJ0blRvTG9uZ01vZGUoYnRuTW9kZVN0YXRlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb21vZG9yb1J1bkNudCA8IGxvbmdCcmVha0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvcnQgQnJlYWsgU3RhcnRcbiAgICAgICAgICAgICAgICBtb2RlID0gJ3Nob3J0TW9kZSc7XG4gICAgICAgICAgICAgICAgc2V0VGhlbWVGb3JTaG9ydE1vZGUoKTtcbiAgICAgICAgICAgICAgICBhcHBseVRpbWUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUJ0blRvU2hvcnRNb2RlKGJ0bk1vZGVTdGF0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnc2hvcnRNb2RlJykge1xuICAgICAgICAgICAgLy8gUG9tb2Rvcm8gU3RhcnRcbiAgICAgICAgICAgIG1vZGUgPSAncG9tb2Rvcm9Nb2RlJztcbiAgICAgICAgICAgIHNldFRoZW1lRm9yUG9tb3JvTW9kZSgpO1xuICAgICAgICAgICAgYXBwbHlUaW1lKCk7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUJ0blRvUG9tb2Rvcm9Nb2RlKGJ0bk1vZGVTdGF0ZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnbG9uZ01vZGUnKSB7XG4gICAgICAgICAgICAvLyBQb21vZG9ybyBTdGFydFxuICAgICAgICAgICAgbW9kZSA9ICdwb21vZG9yb01vZGUnO1xuICAgICAgICAgICAgc2V0VGhlbWVGb3JQb21vcm9Nb2RlKCk7XG4gICAgICAgICAgICBhcHBseVRpbWUoKTtcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlQnRuVG9Qb21vZG9yb01vZGUoYnRuTW9kZVN0YXRlKCkpO1xuXG4gICAgICAgICAgICAvL0luaXRpYWxpemUgcG9tb2Rvcm9SdW5DbnRcbiAgICAgICAgICAgIHBvbW9kb3JvUnVuQ250ID0gMDtcbiAgICAgICAgfSBcbiAgICAgICAgaWYoIWF1dG9TdGFydE5leHRSb3VuZCkge1xuICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRpbWVyKGJ0blRpbWVyU3RhdGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidG5Nb2RlU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9YnV0dG9uXScpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc0NsYXNzQ2xpY2tlZE1lbnUgPSBidXR0b25MaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZEJ0bicpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzc0NsaWNrZWRNZW51KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uTGlzdFtpXTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidG5UaW1lclN0YXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWJ1dHRvbl0nKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuICAgICAgICBydW5uaW5nVGltZXIgPSB0cnVlO1xuICAgICAgICBsZXQgbWluID0gMDtcbiAgICAgICAgbGV0IHNlYyA9IDA7XG4gICAgICAgIGxldCB0aW1lckVuZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYobW9kZSA9PSAncG9tb2Rvcm9Nb2RlJykge1xuICAgICAgICAgICAgbWluID0gcG9tb2Rvcm9NaW47XG4gICAgICAgICAgICBzZWMgPSBwb21vZG9yb1NlYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG1vZGUgPT0gJ3Nob3J0TW9kZScpIHtcbiAgICAgICAgICAgIG1pbiA9IHNob3J0QnJlYWtNaW47XG4gICAgICAgICAgICBzZWMgPSBzaG9ydEJyZWFrU2VjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSAnbG9uZ01vZGUnKSB7XG4gICAgICAgICAgICBtaW4gPSBsb25nQnJlYWtNaW47XG4gICAgICAgICAgICBzZWMgPSBsb25nQnJlYWtTZWM7XG4gICAgICAgIH1cblxuICAgICAgICBzZWMtLTtcbiAgICAgICAgaWYgKHNlYyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1pbi0tO1xuICAgICAgICAgICAgc2VjID0gNTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbiA9PT0gMCAmJiBzZWMgPT09IDApIHtcbiAgICAgICAgICAgIHBsYXlFbmRTb3VuZCgpO1xuICAgICAgICAgICAgbmV4dFRpbWVyKCk7XG4gICAgICAgICAgICB0aW1lckVuZCA9IHRydWU7XG4gICAgICAgICAgICBpbXBvcnRTZXR0aW5ncygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW4gPT09IC0xKSB7XG4gICAgICAgICAgICBtaW4gPSAwO1xuICAgICAgICAgICAgc2VjID0gMDtcbiAgICAgICAgICAgIHN0b3BUaW1lcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFwcGx5VGltZSgpO1xuICAgICAgICBpZighdGltZXJFbmQpIHtcbiAgICAgICAgICAgIGlmKG1vZGUgPT0gJ3BvbW9kb3JvTW9kZScpIHtcbiAgICAgICAgICAgICAgICBwb21vZG9yb01pbiA9IG1pbjtcbiAgICAgICAgICAgICAgICBwb21vZG9yb1NlYyA9IHNlYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYobW9kZSA9PSAnc2hvcnRNb2RlJykge1xuICAgICAgICAgICAgICAgIHNob3J0QnJlYWtNaW4gPSBtaW47XG4gICAgICAgICAgICAgICAgc2hvcnRCcmVha1NlYyA9IHNlYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYobW9kZSA9PSAnbG9uZ01vZGUnKSB7XG4gICAgICAgICAgICAgICAgbG9uZ0JyZWFrTWluID0gbWluO1xuICAgICAgICAgICAgICAgIGxvbmdCcmVha1NlYyA9IHNlYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IG51bUZvcm1hdChtaW4pICsgJzonICsgbnVtRm9ybWF0KHNlYyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0ID0gdGltZVN0cmluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3BUaW1lciA9ICgpID0+IHtcbiAgICAgICAgcnVubmluZ1RpbWVyID0gZmFsc2U7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheUVuZFNvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhlbmRTb3VuZCk7XG4gICAgICAgIHNvdW5kLnZvbHVtZSA9IHNvdW5kVm9sdW1lICogMC4wMTtcbiAgICAgICAgc291bmQucGxheSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlblNldHRpbmdzLFxuICAgICAgICBzZXRTaW5nbGVUaW1lcixcbiAgICAgICAgaXNTaW5nbGVUaW1lcixcbiAgICAgICAgaW5pdFBvbW9kb3JvUnVuQ250LFxuICAgICAgICBpc1J1bm5pbmdUaW1lcixcbiAgICAgICAgYnRuVGltZXJTdGF0ZSxcbiAgICAgICAgc2V0VGltZSxcbiAgICAgICAgc3RvcFRpbWVyLFxuICAgICAgICB3YWl0Rm9yVGltZXJcbiAgICB9XG59XG5cbmNvbnN0IHRpbWVyID0gVGltZXIoKTtcblxuZXhwb3J0IHsgdGltZXIgfSIsImltcG9ydCBcIi4uL3N0eWxlcy90aW1lci5jc3NcIjtcblxuZXhwb3J0IHsgbW9kZSB9IGZyb20gXCIuL21vZGUuanNcIjtcbmV4cG9ydCB7IHRpbWVyIH0gZnJvbSBcIi4vdGltZXIuanNcIjtcbi8vIG1vZGUuc2V0RGVmYXVsdE1vZGUoKTtcblxuLy8gbW9kZS53YWl0Rm9yTW9kZSgpO1xuLy8gdGltZXIud2FpdEZvclRpbWVyKCk7XG4vLyB0aW1lci5saXN0ZW5TZXR0aW5ncygpO1xuIiwidmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0aWYodHlwZW9mIGdhcGkgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiByZXNvbHZlKCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ubChcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanNcIiwgKGV2ZW50KSA9PiB7XG5cdFx0aWYodHlwZW9mIGdhcGkgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBzY3JpcHQgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0ZXJyb3IubmFtZSA9ICdTY3JpcHRFeHRlcm5hbExvYWRFcnJvcic7XG5cdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRyZWplY3QoZXJyb3IpO1xuXHR9LCBcImdhcGlcIik7XG59KS50aGVuKCgpID0+IGdhcGkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJQb21vZG9ybzpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gZm4oZXZlbnQpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=