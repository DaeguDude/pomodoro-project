/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modal.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modal.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* .modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n} */\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#modal__open-btn {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.9;\n  background: none rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  margin-left: 10px;\n  font-size: 13px;\n  padding: 8px 12px;\n  min-width: 70px;\n  border: none;\n  color: white !important;\n}\n\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n.btn-img {\n  width: 16px;\n}\n\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n", "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA,gBAAgB;;AAEhB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;;;;;;GAMG;;AAEH;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,yCAAyC;EACzC,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oDAAoD;EACpD,oBAAoB;EACpB,yCAAyC;EACzC,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;;;EAGE;;qBAEmB;AACrB;;AAEA;EACE,oDAAoD;EACpD,oBAAoB;EACpB,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,mBAAmB;EACnB,wCAAwC;EACxC,2CAA2C;EAC3C,YAAY;EACZ,+BAA+B;EAC/B,2BAA2B;EAC3B,6EAA6E;EAC7E,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,8BAA8B;EAC9B,+BAA+B;EAC/B,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,0CAA0C;EAC1C,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,iCAAiC;EACjC,iCAAiC;EACjC,qBAAqB;AACvB","sourcesContent":["@charset \"UTF-8\";\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* .modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n} */\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#modal__open-btn {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.9;\n  background: none rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  margin-left: 10px;\n  font-size: 13px;\n  padding: 8px 12px;\n  min-width: 70px;\n  border: none;\n  color: white !important;\n}\n\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n.btn-img {\n  width: 16px;\n}\n\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/setting.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/setting.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n\ninput[type=\"checkbox\"] + label {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 21px;\n  border-radius: 10px;\n  background-color: #666;\n  /*\n    vertical-align: top;\n    overflow: hidden;\n    color: transparent;\n*/\n}\n\ninput[type=\"checkbox\"] + label:after {\n  position: absolute;\n  content: \"\";\n  top: 1px;\n  left: 1px;\n  width: 19px;\n  height: 19px;\n  background: #fff;\n  border-radius: 50%;\n}\n\ninput[type=\"checkbox\"]:checked + label {\n  background-color: #62a7ee;\n}\n\ninput[type=\"checkbox\"]:checked + label:after {\n  left: auto;\n  right: 1px;\n}\n\ninput[type=\"checkbox\"] {\n  position: absolute;\n  /*\n    overflow:hidden;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    clip: rect(0,0,0,0);\n*/\n  opacity: 0;\n}\n/* 겹치는 부분 */\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\n/* 겹치는 부분 */\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\n.btn-img {\n  width: 16px;\n}\n\n/* 겹치는 부분 */\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n/* 겹치는 부분 */\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n/* 겹치는 부분 */\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.setting__header {\n  font-size: 16px;\n  color: rgb(187, 187, 187);\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.setting__items {\n  border-top: 1px solid rgba(182, 165, 166, 0.2);\n  padding: 20px 0px;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.title {\n  color: rgb(85, 85, 85);\n  font-weight: bold;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.time__label {\n  display: block;\n  font-size: 14px;\n  color: rgb(187, 187, 187);\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.time__input {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.time__items {\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.time__item {\n  width: 98px;\n}\n\n.content {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.volume__content {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 50%;\n}\n\n.volume__display {\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  color: rgb(187, 187, 187);\n  margin-right: 5px;\n}\n\n.volume__range {\n  width: 80%;\n  background-color: rgb(204, 204, 204);\n  appearance: none;\n  border-radius: 50px;\n  height: 7px;\n}\n\n.longBreakInterval__number {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  box-sizing: border-box;\n  width: 70px;\n}\n\n/* 겹치는 부분 */\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n/* 겹치는 부분 */\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n", "",{"version":3,"sources":["webpack://./src/setting.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n\ninput[type=\"checkbox\"] + label {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 21px;\n  border-radius: 10px;\n  background-color: #666;\n  /*\n    vertical-align: top;\n    overflow: hidden;\n    color: transparent;\n*/\n}\n\ninput[type=\"checkbox\"] + label:after {\n  position: absolute;\n  content: \"\";\n  top: 1px;\n  left: 1px;\n  width: 19px;\n  height: 19px;\n  background: #fff;\n  border-radius: 50%;\n}\n\ninput[type=\"checkbox\"]:checked + label {\n  background-color: #62a7ee;\n}\n\ninput[type=\"checkbox\"]:checked + label:after {\n  left: auto;\n  right: 1px;\n}\n\ninput[type=\"checkbox\"] {\n  position: absolute;\n  /*\n    overflow:hidden;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    clip: rect(0,0,0,0);\n*/\n  opacity: 0;\n}\n/* 겹치는 부분 */\nbutton {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  color: -internal-light-dark(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: center;\n  cursor: default;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\nbutton,\ninput,\ntextarea {\n  font-family: \"ArialRounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n\n/* 겹치는 부분 */\ninput {\n  /* -webkit-writing-mode: horizontal-tb !important; */\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-rtl-ordering: logical;\n  font: 400 13.3333px Arial;\n}\n\n/* 겹치는 부분 */\n.btn-img {\n  width: 16px;\n}\n\n/* 겹치는 부분 */\nbody {\n  background-color: rgb(219, 82, 77);\n}\n\n/* 겹치는 부분 */\n.modal-content {\n  color: rgb(34, 34, 34);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  max-width: 400px;\n  width: 95%;\n  z-index: 2147483647;\n  border-top: 1px solid rgb(239, 239, 239);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  margin: auto;\n  transition: all 0.2s ease-in 0s;\n  transform: translateY(20px);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;\n  overflow: hidden;\n  display: block;\n}\n\n/* 겹치는 부분 */\n.padding-area {\n  padding: 20px 20px 0px;\n}\n\n.setting__remove-btn {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  cursor: pointer;\n  width: 17px;\n  opacity: 0.3;\n  z-index: 2147483647;\n}\n\n.setting__header {\n  font-size: 16px;\n  color: rgb(187, 187, 187);\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n.setting__items {\n  border-top: 1px solid rgba(182, 165, 166, 0.2);\n  padding: 20px 0px;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.title {\n  color: rgb(85, 85, 85);\n  font-weight: bold;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.time__label {\n  display: block;\n  font-size: 14px;\n  color: rgb(187, 187, 187);\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.time__input {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.time__items {\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.time__item {\n  width: 98px;\n}\n\n.content {\n  width: 100%;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.volume__content {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 50%;\n}\n\n.volume__display {\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  color: rgb(187, 187, 187);\n  margin-right: 5px;\n}\n\n.volume__range {\n  width: 80%;\n  background-color: rgb(204, 204, 204);\n  appearance: none;\n  border-radius: 50px;\n  height: 7px;\n}\n\n.longBreakInterval__number {\n  border-radius: 4px;\n  background-color: rgb(239, 239, 239);\n  font-size: 16px;\n  padding: 10px;\n  box-shadow: none;\n  border: none;\n  color: rgb(85, 85, 85);\n  box-sizing: border-box;\n  width: 70px;\n}\n\n/* 겹치는 부분 */\n.footer {\n  padding: 14px 20px;\n  text-align: right;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: rgb(239, 239, 239);\n}\n\n/* 겹치는 부분 */\n.footer__submit-btn {\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;\n  color: white;\n  opacity: 0.9;\n  font-size: 14px;\n  padding: 8px 12px;\n  min-width: 70px;\n  background-color: rgb(34, 34, 34);\n  border: 2px solid rgb(34, 34, 34);\n  display: inline-block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/share_navbar/style/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/share_navbar/style/style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; \n    \n}\n\nbody {\n    background-color: rgb(219, 82, 77);\n    font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\nheader {\n    margin: 0 auto;\n    width: 620px;\n    height: 60px;\n    padding: 20px;\n    border-bottom: 1px solid #b74c4c;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    width: 132px;\n    padding: 10px 0;\n    font-size: 20px;\n    color: white;\n}\n\n.logo a {\n    text-decoration: none;\n    color: white;\n\n}\n\n.logo img {\n    width: 20px;\n    margin-right: 4px;\n}\n\nnav {\n    height: 32px;\n    display: flex;\n    align-items: center;\n\n}\n\n.nav-btn {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    margin-left: 10px;\n    font-size: 13px;\n    padding: 8px 12px;\n    min-width: 70px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.mini-icon {\n    width: 16px;\n}\n\n\n.nav-btn div {\n    font-size: 13px;\n    margin-left: 4px;\n}\n\n\n.profile-box {\n    width: 32px;\n    margin-left: 8px;\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    font-size: 13px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.profile-box img {\n    width: 28px;\n    height: 28px;\n    margin: auto;\n    border-radius: 4px;\n    align-items: center;\n    display: flex;\n}\n\n.dropdown-container {\n    border-radius: 4px;\n    padding: 4px 0px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    background-color: white;\n    transform: translateY(10px);\n    width: 200px;\n    right: 0px;\n  }\n\n.dropdown-show {\n    display: block;\n    pointer-events: auto;\n}\n\n\n.dropdown-list {\n      color: rgb(79, 43, 65);\n      display: flex;\n      align-items: center;\n      padding: 10px 16px;\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n/* \n.dropdown-list :hover {\n    background-color: rgb(240, 238, 238);\n} */\n\n.dropdown-icon {\n      opacity: 0.8;\n      width: 14px;\n      margin-right: 8px;\n      color: rgb(79, 43, 45);\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n\n", "",{"version":3,"sources":["webpack://./src/share_navbar/style/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;AAEA;IACI,kCAAkC;IAClC,0KAA0K;AAC9K;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yCAAyC;IACzC,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,wEAAwE;IACxE,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,YAAY;IACZ,UAAU;EACZ;;AAEF;IACI,cAAc;IACd,oBAAoB;AACxB;;;AAGA;MACM,sBAAsB;MACtB,aAAa;MACb,mBAAmB;MACnB,kBAAkB;MAClB,eAAe;MACf,eAAe;MACf,oBAAoB;AAC1B;AACA;;;GAGG;;AAEH;MACM,YAAY;MACZ,WAAW;MACX,iBAAiB;MACjB,sBAAsB;MACtB,eAAe;MACf,eAAe;MACf,oBAAoB;AAC1B","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; \n    \n}\n\nbody {\n    background-color: rgb(219, 82, 77);\n    font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\nheader {\n    margin: 0 auto;\n    width: 620px;\n    height: 60px;\n    padding: 20px;\n    border-bottom: 1px solid #b74c4c;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    width: 132px;\n    padding: 10px 0;\n    font-size: 20px;\n    color: white;\n}\n\n.logo a {\n    text-decoration: none;\n    color: white;\n\n}\n\n.logo img {\n    width: 20px;\n    margin-right: 4px;\n}\n\nnav {\n    height: 32px;\n    display: flex;\n    align-items: center;\n\n}\n\n.nav-btn {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    margin-left: 10px;\n    font-size: 13px;\n    padding: 8px 12px;\n    min-width: 70px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.mini-icon {\n    width: 16px;\n}\n\n\n.nav-btn div {\n    font-size: 13px;\n    margin-left: 4px;\n}\n\n\n.profile-box {\n    width: 32px;\n    margin-left: 8px;\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    font-size: 13px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.profile-box img {\n    width: 28px;\n    height: 28px;\n    margin: auto;\n    border-radius: 4px;\n    align-items: center;\n    display: flex;\n}\n\n.dropdown-container {\n    border-radius: 4px;\n    padding: 4px 0px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    background-color: white;\n    transform: translateY(10px);\n    width: 200px;\n    right: 0px;\n  }\n\n.dropdown-show {\n    display: block;\n    pointer-events: auto;\n}\n\n\n.dropdown-list {\n      color: rgb(79, 43, 65);\n      display: flex;\n      align-items: center;\n      padding: 10px 16px;\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n/* \n.dropdown-list :hover {\n    background-color: rgb(240, 238, 238);\n} */\n\n.dropdown-icon {\n      opacity: 0.8;\n      width: 14px;\n      margin-right: 8px;\n      color: rgb(79, 43, 45);\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/modal.css":
/*!***********************!*\
  !*** ./src/modal.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/modal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/setting.css":
/*!*************************!*\
  !*** ./src/setting.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./setting.css */ "./node_modules/css-loader/dist/cjs.js!./src/setting.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_setting_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/share_navbar/style/style.css":
/*!******************************************!*\
  !*** ./src/share_navbar/style/style.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/share_navbar/style/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _share_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share_navbar/navbar */ "./src/share_navbar/navbar.js");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting */ "./src/setting.js");
_share_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = await Promise.resolve(_share_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__);



const mySetting = new _setting__WEBPACK_IMPORTED_MODULE_1__.default();
(0,_share_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
mySetting.start();


return __webpack_exports__;
})();

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalOpenButton": () => /* binding */ createModalOpenButton,
/* harmony export */   "createModalArticle": () => /* binding */ createModalArticle,
/* harmony export */   "addFooterArticle": () => /* binding */ addFooterArticle,
/* harmony export */   "activateModal": () => /* binding */ activateModal
/* harmony export */ });
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ "./src/modal.css");


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

/***/ "./src/setting.js":
/*!************************!*\
  !*** ./src/setting.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.css */ "./src/setting.css");




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
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/share_navbar/style/style.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL2NvbmZpZy13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy9kZWxldGUtYmxhY2sucG5nIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NoYXJlX25hdmJhci9pbWcvZ29vZ2xlLWJsYWNrLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL2dyYXBoLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL2ljb24td2hpdGUucG5nIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NoYXJlX25hdmJhci9pbWcvbG9nb3V0LWJsYWNrLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL3JvY2tldC1ibGFjay5wbmciLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL2ltZy91c2VyLWJsYWNrLnBuZyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvaW1nL3VzZXItd2hpdGUucG5nIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL21vZGFsLmNzcz8zZmQ5Iiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NldHRpbmcuY3NzPzA1ZjkiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3N0eWxlL3N0eWxlLmNzcz80MmYyIiwid2VicGFjazovL1BvbW9kb3JvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvc2NyaXB0L2F1dGguanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L2JyYW5kLWxvZ28uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L2xvZ2luLWJ0bi5qcyIsIndlYnBhY2s6Ly9Qb21vZG9yby8uL3NyYy9zaGFyZV9uYXZiYXIvc2NyaXB0L2Rpc3BsYXkvcHJvZmlsZS1idG4uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L3JlcG9ydC1idG4uanMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vLi9zcmMvc2hhcmVfbmF2YmFyL3NjcmlwdC9kaXNwbGF5L3NldHRpbmctYnRuLmpzIiwid2VicGFjazovL1BvbW9kb3JvLy4vc3JjL3NoYXJlX25hdmJhci9zY3JpcHQvbmF2YmFyLmpzIiwid2VicGFjazovL1BvbW9kb3JvL2V4dGVybmFsIFtcImh0dHBzOi9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiLFwiZ2FwaVwiXSIsIndlYnBhY2s6Ly9Qb21vZG9yby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Qb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUG9tb2Rvcm8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9Qb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9Qb21vZG9yby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1BvbW9kb3JvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkRBQTZELFlBQVksa0JBQWtCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixtQ0FBbUMseUNBQXlDLEdBQUcsdUJBQXVCLDhCQUE4QixxQkFBcUIsa0JBQWtCLDJCQUEyQixlQUFlLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLG9CQUFvQixzQkFBc0IsR0FBRywrQkFBK0IsaUJBQWlCLDBCQUEwQixvQkFBb0IsR0FBRyxzQkFBc0Isa0JBQWtCLDhCQUE4Qix3QkFBd0IsNkJBQTZCLDRCQUE0Qix1QkFBdUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsOENBQThDLHFCQUFxQixzQkFBc0Isb0JBQW9CLHNCQUFzQixvQkFBb0IsaUJBQWlCLDRCQUE0QixHQUFHLFlBQVksc0RBQXNELDRCQUE0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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFPRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RmlCOztBQUVNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsNEJBQTRCLFFBQVE7V0FDMUQ7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLG9CQUFvQjtXQUNwQztXQUNBLGtHQUFrRyxZQUFZLE9BQU87V0FDckg7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0VBQWtFLGtDQUFrQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4vKiAubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG59ICovXFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbW9kYWxfX29wZW4tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgLyogLXdlYmtpdC13cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDsgKi9cXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrKGJsYWNrLCB3aGl0ZSk7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAwcHg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsUm91bmRlZFxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuaW5wdXQge1xcbiAgLyogLXdlYmtpdC13cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDsgKi9cXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWluZGVudDogMHB4O1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIC13ZWJraXQtcnRsLW9yZGVyaW5nOiBsb2dpY2FsO1xcbiAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcXG59XFxuXFxuLmJ0bi1pbWcge1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgODIsIDc3KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzksIDIzOSwgMjM5KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBtYXJnaW46IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDBzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDNweCA2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wYWRkaW5nLWFyZWEge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweDtcXG59XFxuXFxuLnNldHRpbmdfX3JlbW92ZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTdweDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbn1cXG5cXG4uZm9vdGVyX19zdWJtaXQtYnRuIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDJweCAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsb0JBQW9CO0VBQ3BCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRTs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDZFQUE2RTtFQUM3RSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLyogLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA1MCU7XFxufSAqL1xcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vZGFsX19vcGVuLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGNvbG9yOiAtaW50ZXJuYWwtbGlnaHQtZGFyayhibGFjaywgd2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWluZGVudDogMHB4O1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFJvdW5kZWRcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbmlucHV0IHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbi5idG4taW1nIHtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDgyLCA3Nyk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucGFkZGluZy1hcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XFxufVxcblxcbi5zZXR0aW5nX19yZW1vdmUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDE3cHg7XFxuICBvcGFjaXR5OiAwLjM7XFxuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcXG59XFxuXFxuLmZvb3Rlcl9fc3VibWl0LWJ0biB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAycHggMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAvKlxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTlweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmE3ZWU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qXFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbjogLTFweDtcXG4gICAgY2xpcDogcmVjdCgwLDAsMCwwKTtcXG4qL1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJ1dHRvbiB7XFxuICAvKiAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50OyAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmsoYmxhY2ssIHdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsUm91bmRlZFxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmlucHV0IHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4uYnRuLWltZyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgODIsIDc3KTtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLnBhZGRpbmctYXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4uc2V0dGluZ19fcmVtb3ZlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLnNldHRpbmdfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnNldHRpbmdfX2l0ZW1zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE4MiwgMTY1LCAxNjYsIDAuMik7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi50aW1lX19pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50aW1lX19pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50aW1lX19pdGVtIHtcXG4gIHdpZHRoOiA5OHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi52b2x1bWVfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnZvbHVtZV9fZGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udm9sdW1lX19yYW5nZSB7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBoZWlnaHQ6IDdweDtcXG59XFxuXFxuLmxvbmdCcmVha0ludGVydmFsX19udW1iZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4uZm9vdGVyX19zdWJtaXQtYnRuIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDJweCAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjs7QUFFaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qjs7OztDQUlEO0FBQ0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7Ozs7O0NBTUQ7RUFDQyxVQUFVO0FBQ1o7QUFDQSxXQUFXO0FBQ1g7RUFDRSxvREFBb0Q7RUFDcEQsb0JBQW9CO0VBQ3BCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7QUFDWDs7O0VBR0U7O3FCQUVtQjtBQUNyQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxvREFBb0Q7RUFDcEQsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7QUFDWDtFQUNFLFdBQVc7QUFDYjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVztBQUNYO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QywyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsNkVBQTZFO0VBQzdFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixvQ0FBb0M7QUFDdEM7O0FBRUEsV0FBVztBQUNYO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAvKlxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTlweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmE3ZWU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qXFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbjogLTFweDtcXG4gICAgY2xpcDogcmVjdCgwLDAsMCwwKTtcXG4qL1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJ1dHRvbiB7XFxuICAvKiAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50OyAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmsoYmxhY2ssIHdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsUm91bmRlZFxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmlucHV0IHtcXG4gIC8qIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7ICovXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1pbmRlbnQ6IDBweDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcXG4gIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4uYnRuLWltZyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgODIsIDc3KTtcXG59XFxuXFxuLyog6rK57LmY64qUIOu2gOu2hCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbiAwcztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLnBhZGRpbmctYXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4uc2V0dGluZ19fcmVtb3ZlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLnNldHRpbmdfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnNldHRpbmdfX2l0ZW1zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE4MiwgMTY1LCAxNjYsIDAuMik7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi50aW1lX19pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50aW1lX19pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50aW1lX19pdGVtIHtcXG4gIHdpZHRoOiA5OHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi52b2x1bWVfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnZvbHVtZV9fZGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udm9sdW1lX19yYW5nZSB7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBoZWlnaHQ6IDdweDtcXG59XFxuXFxuLmxvbmdCcmVha0ludGVydmFsX19udW1iZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4vKiDqsrnsuZjripQg67aA67aEICovXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxufVxcblxcbi8qIOqyuey5mOuKlCDrtoDrtoQgKi9cXG4uZm9vdGVyX19zdWJtaXQtYnRuIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDJweCAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxuICAgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgODIsIDc3KTtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbFJvdW5kZWQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNjIwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNzRjNGM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogMTMycHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2dvIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBtaW4td2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5taW5pLWljb24ge1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxuXFxuLm5hdi1idG4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG5cXG4ucHJvZmlsZS1ib3gge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYmFja2dyb3VuZDogbm9uZSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2ZpbGUtYm94IGltZyB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNSUpIDBweCAxMHB4IDIwcHgsIHJnYigwIDAgMCAvIDEwJSkgMHB4IDNweCA2cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gIH1cXG5cXG4uZHJvcGRvd24tc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuXFxuLmRyb3Bkb3duLWxpc3Qge1xcbiAgICAgIGNvbG9yOiByZ2IoNzksIDQzLCA2NSk7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4vKiBcXG4uZHJvcGRvd24tbGlzdCA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XFxufSAqL1xcblxcbi5kcm9wZG93bi1pY29uIHtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgd2lkdGg6IDE0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgY29sb3I6IHJnYig3OSwgNDMsIDQ1KTtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVfbmF2YmFyL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQywwS0FBMEs7QUFDOUs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0VBQXdFO0lBQ3hFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFVBQVU7RUFDWjs7QUFFRjtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7OztBQUdBO01BQ00sc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixlQUFlO01BQ2Ysb0JBQW9CO0FBQzFCO0FBQ0E7OztHQUdHOztBQUVIO01BQ00sWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixlQUFlO01BQ2Ysb0JBQW9CO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbiAgICBcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDgyLCA3Nyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWxSb3VuZGVkJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDYyMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjc0YzRjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDEzMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9nbyBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5sb2dvIGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWluaS1pY29uIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcblxcbi5uYXYtYnRuIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuXFxuLnByb2ZpbGUtYm94IHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9maWxlLWJveCBpbWcge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTUlKSAwcHggMTBweCAyMHB4LCByZ2IoMCAwIDAgLyAxMCUpIDBweCAzcHggNnB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICB9XFxuXFxuLmRyb3Bkb3duLXNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcblxcbi5kcm9wZG93bi1saXN0IHtcXG4gICAgICBjb2xvcjogcmdiKDc5LCA0MywgNjUpO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLyogXFxuLmRyb3Bkb3duLWxpc3QgOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM4LCAyMzgpO1xcbn0gKi9cXG5cXG4uZHJvcGRvd24taWNvbiB7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHdpZHRoOiAxNHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgIGNvbG9yOiByZ2IoNzksIDQzLCA0NSk7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjU4N2I0ODlhZjJjZTA4YThkMzE1MWRkZTc1NjE3NWIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRkZWFhNWYwNzdhY2YzNTExYjZiMjU4ZDViMTMxYzU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNThmZTM1NDFhODY2MDFiMTJmZWE4NGYwMTJiZWJkYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2NjZjYwYTM5M2E4MWE0YmI5OTQ3NWM4NTdlZDI5MWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk3NjBkN2E1NTgwNDZmOWRlZTIwZTA1MmE4MWM0YTZjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NzhjZTBmYTZmMDcyNzU4MmE1ZTkyODU1ODBhYjA5MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmZmYmUxMzBkMmZlMmM0YjU0OWE4MTUwYmExMjY2YWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVlOWM2ODU3MTI4MjkxNDY4NWFjZTBmNTAzZTVkYzgzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZDIzZTcyOTc0Y2RkMmEwZDc1MDU5MDBiOWFhMDIwZS5wbmdcIjsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2V0dGluZy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9zaGFyZV9uYXZiYXIvbmF2YmFyJ1xuaW1wb3J0IFNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJ1xuXG5jb25zdCBteVNldHRpbmcgPSBuZXcgU2V0dGluZygpO1xucmVuZGVySGVhZGVyKCk7XG5teVNldHRpbmcuc3RhcnQoKTtcblxuIiwiaW1wb3J0IFwiLi9tb2RhbC5jc3NcIjtcblxuY29uc3QgbW9kYWxPcGVuQnV0dG9uID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibW9kYWxfX29wZW4tYnRuXCI+XG48aW1nIHNyYz1cIi4uL2ltZy9jb25maWctd2hpdGUucG5nXCIgYWx0PVwiY29uZmlnIGljb25cIiBjbGFzcz1cImJ0bi1pbWdcIiAvPlxuJm5ic3A7U2V0dGluZ1xuPC9idXR0b24+YDtcblxuY29uc3QgbW9kYWxBcnRpY2xlID0gYFxuPGRpdiBjbGFzcz1cIm1vZGFsXCI+XG48ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiIGlkPVwibW9kYWwtY29udGVudFwiPlxuICA8ZGl2IGNsYXNzPVwicGFkZGluZy1hcmVhXCIgaWQ9XCJwYWRkaW5nLWFyZWFcIj5cbiAgICA8aW1nXG4gICAgICBzcmM9XCIuLi9pbWcvcmVtb3ZlLWJsYWNrLXNtLnBuZ1wiXG4gICAgICBhbHQ9XCJyZW1vdmUgaWNvblwiXG4gICAgICBjbGFzcz1cInNldHRpbmdfX3JlbW92ZS1idG4gYnRuLWltZyBjbG9zZVwiXG4gICAgLz5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuXG5jb25zdCBmb290ZXJBcnRpY2xlID0gYFxuPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICA8Zm9vdGVyPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiZm9vdGVyX19zdWJtaXQtYnRuXCI+T0s8L2J1dHRvbj5cbiAgPC9mb290ZXI+XG48L2Rpdj5gO1xuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbE9wZW5CdXR0b24oKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnRcbiAgICAuY3JlYXRlUmFuZ2UoKVxuICAgIC5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobW9kYWxPcGVuQnV0dG9uKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbEFydGljbGUoKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnRcbiAgICAuY3JlYXRlUmFuZ2UoKVxuICAgIC5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobW9kYWxBcnRpY2xlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5mdW5jdGlvbiBhZGRGb290ZXJBcnRpY2xlKCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50XG4gICAgLmNyZWF0ZVJhbmdlKClcbiAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGZvb3RlckFydGljbGUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG4vKiBtb2RhbCBjbG9zZSDtlajsiJggKi9cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vKiBtb2RhbCBvcGVuIO2VqOyImCAqL1xuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8qIG1vZGFsIO2ZnOyEse2ZlCDtlajsiJggKi9cbmZ1bmN0aW9uIGFjdGl2YXRlTW9kYWwoKSB7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibW9kYWxfX29wZW4tYnRuXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2V0dGluZ19fcmVtb3ZlLWJ0blwiKVswXVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb290ZXJfX3N1Ym1pdC1idG5cIilbMF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gIC8vbW9kYWwg67CU6rml7Kq9IOyYgeyXrSDtgbTrpq3si5wgbW9kYWwgY2xvc2Ug6rWs7ZiEXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU1vZGFsT3BlbkJ1dHRvbixcbiAgY3JlYXRlTW9kYWxBcnRpY2xlLFxuICBhZGRGb290ZXJBcnRpY2xlLFxuICBhY3RpdmF0ZU1vZGFsLFxufTtcblxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuLy8gY29uc3QgbW9kYWxPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbF9fb3Blbi1idG5cIik7XG4vLyBjb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNldHRpbmdfX3JlbW92ZS1idG5cIilbMF07XG4vLyBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9vdGVyX19zdWJtaXQtYnRuXCIpWzBdO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTW9kYWxPcGVuQnV0dG9uLFxuICBjcmVhdGVNb2RhbEFydGljbGUsXG4gIGFkZEZvb3RlckFydGljbGUsXG4gIGFjdGl2YXRlTW9kYWwsXG59IGZyb20gXCIuL21vZGFsXCI7XG5cbmltcG9ydCBcIi4vc2V0dGluZy5jc3NcIjtcblxuY29uc3Qgc2V0dGluZ0FydGljbGUgPSBgPGRpdiBjbGFzcz1cInNldHRpbmdcIj5cbjxoZWFkZXIgY2xhc3M9XCJzZXR0aW5nX19oZWFkZXJcIj5cbiAgPGRpdj5UaW1lciBTZXR0aW5nPC9kaXY+XG48L2hlYWRlcj5cbjxhcnRpY2xlPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ19faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGltZV9fdGl0bGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5UaW1lIChtaW51dGVzKTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGltZV9faXRlbXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19wb21vZG9yb19fbGFiZWxcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0aW1lX19sYWJlbFwiPlBvbW9kb3JvPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICBjbGFzcz1cInRpbWVfX2lucHV0IHRpbWVfX3BvbW9kb3JvXCJcbiAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lX19zaG9ydF9fbGFiZWxcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0aW1lX19sYWJlbFwiPlNob3J0IEJyZWFrPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICBjbGFzcz1cInRpbWVfX2lucHV0IHRpbWVfX3Nob3J0QnJlYWtcIlxuICAgICAgICAgIHZhbHVlPVwiNVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpbWVfX2l0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVfX2xvbmdfX2xhYmVsXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGltZV9fbGFiZWxcIj5Mb25nIEJyZWFrPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICBjbGFzcz1cInRpbWVfX2lucHV0IHRpbWVfX2xvbmdCcmVha1wiXG4gICAgICAgICAgdmFsdWU9XCIxNVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfX2l0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRvU3RhcnRfX3RpdGxlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5BdXRvIHN0YXJ0IG5leHQgcm91bmQ/PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrQm94XCIgaWQ9XCJhdXRvU3RhcnRfX2NoZWNrQm94XCIgbmFtZT1cIlwiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJhdXRvU3RhcnRfX2NoZWNrQm94XCI+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ19faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZV9fdGl0bGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlNvdW5kIFZvbHVtZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZV9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lX19kaXNwbGF5XCI+PHNwYW4gaWQ9XCJ2b2x1bWVfX2Rpc3BsYXlcIj41MDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lX19yYW5nZVwiXG4gICAgICAgICAgaWQ9XCJ2b2x1bWVfX3JhbmdlXCJcbiAgICAgICAgICB2YWx1ZT1cIjUwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ19faXRlbXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxvbmdCcmVha0ludGVydmFsX190aXRsZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+TG9uZyBCcmVhayBJbnRlcnZhbDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgIHdpZHRoPVwiNzBcIlxuICAgICAgICAgIGNsYXNzPVwibG9uZ0JyZWFrSW50ZXJ2YWxfX251bWJlclwiXG4gICAgICAgICAgdmFsdWU9XCI0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvYXJ0aWNsZT5cbjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5mdW5jdGlvbiBnZXRTZXR0aW5nKCkge1xuICBjb25zdCBwb21vZG9ybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZV9fcG9tb2Rvcm9cIikudmFsdWU7XG4gIGNvbnN0IHNob3J0QnJlYWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVfX3Nob3J0QnJlYWtcIikudmFsdWU7XG4gIGNvbnN0IGxvbmdCcmVhayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZV9fbG9uZ0JyZWFrXCIpLnZhbHVlO1xuICBjb25zdCBkaWRBdXRvU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dG9TdGFydF9fY2hlY2tCb3hcIikuY2hlY2tlZDtcbiAgY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWVfX3JhbmdlXCIpLnZhbHVlO1xuICBjb25zdCBsb25nQnJlYWtJbnRlcnZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9uZ0JyZWFrSW50ZXJ2YWxfX251bWJlclwiKVxuICAgIC52YWx1ZTtcblxuICByZXR1cm4ge1xuICAgIHBvbW9kb3JvLFxuICAgIHNob3J0QnJlYWssXG4gICAgbG9uZ0JyZWFrLFxuICAgIGRpZEF1dG9TdGFydCxcbiAgICB2b2x1bWUsXG4gICAgbG9uZ0JyZWFrSW50ZXJ2YWwsXG4gIH07XG59XG5cbi8qIHN1Ym1pdCBCdG4g7YG066atIOyLnCBnZXRTZXR0aW5nIO2VqOyImCDtmLjstpwgKi9cbmZ1bmN0aW9uIHNlbmRTZXR0aW5nVmFsdWUoKSB7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb290ZXJfX3N1Ym1pdC1idG5cIilbMF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFNldHRpbmcsIGZhbHNlKTtcbn1cblxuLyog67CY7J2R7ZiVIHZvbHVtZSBpbnB1dCByYW5nZSDqtaztmIQgKi9cbmZ1bmN0aW9uIHJlc3BvbnNpdmVWb2x1bWVWYWx1ZSgpIHtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVfX3JhbmdlXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGFuZ2VWb2x1bWVWYWx1ZSwgZmFsc2UpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInZvbHVtZV9fZGlzcGxheVwiXG4gICkuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVfX3JhbmdlXCIpLnZhbHVlO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVZvbHVtZVZhbHVlKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJ2b2x1bWVfX2Rpc3BsYXlcIlxuICAgICkuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVfX3JhbmdlXCIpLnZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNldHRpbmdBcnRpY2xlKCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50XG4gICAgLmNyZWF0ZVJhbmdlKClcbiAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHNldHRpbmdBcnRpY2xlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWRkaW5nLWFyZWFcIikuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5jbGFzcyBTZXR0aW5nIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIGNyZWF0ZU1vZGFsT3BlbkJ1dHRvbigpO1xuICAgIGNyZWF0ZU1vZGFsQXJ0aWNsZSgpO1xuICAgIGFkZFNldHRpbmdBcnRpY2xlKCk7XG4gICAgYWRkRm9vdGVyQXJ0aWNsZSgpO1xuICAgIGFjdGl2YXRlTW9kYWwoKTtcbiAgICBzZW5kU2V0dGluZ1ZhbHVlKCk7XG4gICAgcmVzcG9uc2l2ZVZvbHVtZVZhbHVlKCk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIGdldFNldHRpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nO1xuXG4vLyBjb25zdCB2b2x1bWVSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lX19yYW5nZVwiKTtcbi8vIGNvbnN0IHZvbHVtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZV9fZGlzcGxheVwiKTtcbiIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuZXhwb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9zY3JpcHQvbmF2YmFyJ1xuZXhwb3J0IHsgc3RhcnRBcHAgfSBmcm9tICcuL3NjcmlwdC9hdXRoJ1xuIiwiaW1wb3J0IGdhcGkgZnJvbSAnZ29vZ2xlQVBJJztcbmltcG9ydCB7IHRvZ2dsZU9uTmF2YmFyICwgdG9nZ2xlT2ZmTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXInO1xuXG52YXIgZ29vZ2xlVXNlciA9IHt9O1xubGV0IGdvb2dsZVVzZXJJbWc7XG5sZXQgaXNMb2dnZWRJbjtcblxudmFyIHN0YXJ0QXBwID0gZnVuY3Rpb24oKSB7XG4gIGdhcGkubG9hZCgnYXV0aDInLCBmdW5jdGlvbigpe1xuICAgIGxldCBhdXRoMjtcbiAgICBhdXRoMiA9IGdhcGkuYXV0aDIuaW5pdCh7XG4gICAgICBjbGllbnRfaWQ6ICc4ODY3MDA5MjQ4NDgtam01ZWpxdGtvbWQxNW1oMXVvMDhqMHEyb3Uwa2dxazQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAgICAgY29va2llcG9saWN5OiAnc2luZ2xlX2hvc3Rfb3JpZ2luJyxcbiAgICB9KTtcbiAgICBhdHRhY2hTaWduaW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZS1zaWduaW4nKSwgYXV0aDIpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGF0dGFjaFNpZ25pbihlbGVtZW50LCBhdXRoMikge1xuICBjb25zb2xlLmxvZyhlbGVtZW50LmlkKTtcbiAgYXV0aDIuYXR0YWNoQ2xpY2tIYW5kbGVyKGVsZW1lbnQsIHt9LFxuICAgICAgZnVuY3Rpb24oZ29vZ2xlVXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgU2lnbmVkIGluOiAke2dvb2dsZVVzZXIuZ2V0QmFzaWNQcm9maWxlKCkuZ2V0TmFtZSgpfWApO1xuICAgICAgICBnb29nbGVVc2VySW1nID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKS5nZXRJbWFnZVVybCgpO1xuICAgICAgICBpc0xvZ2dlZEluID0gZ29vZ2xlVXNlci5pc1NpZ25lZEluKCk7XG4gICAgICAgIHRvZ2dsZU9uTmF2YmFyKCk7XG4gICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShlcnJvciwgdW5kZWZpbmVkLCAyKSk7XG4gICAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgdmFyIGF1dGgyID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcbiAgYXV0aDIuc2lnbk91dCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHRvZ2dsZU9mZk5hdmJhcigpO1xuICAgIGNvbnNvbGUubG9nKCdVc2VyIHNpZ25lZCBvdXQuJyk7XG4gICAgfSk7XG4gIH1cblxuZXhwb3J0IHsgc3RhcnRBcHAgLCBzaWduT3V0ICwgaXNMb2dnZWRJbiAsIGdvb2dsZVVzZXJJbWcgfSIsImltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2ltZy9pY29uLXdoaXRlLnBuZyc7XG5cbmNvbnN0IGJyYW5kTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5cbmZ1bmN0aW9uIGdldEJyYW5kTG9nbygpIHtcbiAgICBjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtsb2dvfVwiIGFsdD1cIlwiPlBvbW9mb2N1c1xuICAgIDwvYT5cbmApO1xuICAgIGJyYW5kTG9nby5hcHBlbmRDaGlsZChsb2dvQm94KTtcbn1cblxuZXhwb3J0IHsgZ2V0QnJhbmRMb2dvIH07IiwiaW1wb3J0IGxvZ2luIGZyb20gJy4uLy4uL2ltZy91c2VyLXdoaXRlLnBuZyc7XG5pbXBvcnQgZ29vZ2xlIGZyb20gJy4uLy4uL2ltZy9nb29nbGUtYmxhY2sucG5nJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUxvZ2luRHJvcGRvd24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWRyb3Bkb3duJykuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLXNob3dcIik7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9naW5CdG4oKSB7XG4gICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtYXJlYVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ0blwiIGlkPVwibG9naW4tYnRuXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bG9naW59XCIgYWx0PVwiXCIgY2xhc3M9XCJtaW5pLWljb25cIj48ZGl2PkxvZ2luPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCIgaWQ9XCJsb2dpbi1kcm9wZG93blwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBpZD1cImdvb2dsZS1zaWduaW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z29vZ2xlfVwiIGFsdD1cIlwiIGNsYXNzPVwiZHJvcGRvd24taWNvblwiPjxkaXY+TG9naW4gd2l0aCBHb29nbGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgXG4gICAgPC9kaXY+XG5gKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9naW5CdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVMb2dpbkRyb3Bkb3duKTtcbn1cblxuZnVuY3Rpb24gcm1Mb2dpbkJ0bigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1hcmVhJykucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGdldExvZ2luQnRuICwgcm1Mb2dpbkJ0biB9OyIsImltcG9ydCBwcm9maWxlIGZyb20gXCIuLi8uLi9pbWcvdXNlci1ibGFjay5wbmdcIjtcbmltcG9ydCBzdWJzY3JpcHRpb24gZnJvbSBcIi4uLy4uL2ltZy9yb2NrZXQtYmxhY2sucG5nXCI7XG5pbXBvcnQgbG9nb3V0IGZyb20gXCIuLi8uLi9pbWcvbG9nb3V0LWJsYWNrLnBuZ1wiO1xuaW1wb3J0IGRlbGV0ZUFjYyBmcm9tIFwiLi4vLi4vaW1nL2RlbGV0ZS1ibGFjay5wbmdcIjtcbmltcG9ydCB7IHNpZ25PdXQgLCBnb29nbGVVc2VySW1nIH0gZnJvbSBcIi4uL2F1dGhcIlxuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcblxuXG5mdW5jdGlvbiB0b2dnbGVQcm9maWxlRHJvcGRvd24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtZHJvcGRvd24nKS5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tc2hvd1wiKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xufVxuXG4vL3JlbmRlciBwcm9maWxlIGJ1dHRvblxuZnVuY3Rpb24gZ2V0UHJvZmlsZUJ0bigpIHtcbiAgICBjb25zdCBwcm9maWxlQnRuID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWFyZWFcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ0blwiIGlkPVwicHJvZmlsZS1idG5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2dvb2dsZVVzZXJJbWd9XCIgYWx0PVwiXCIgY2xhc3M9XCJtaW5pLWljb25cIj48ZGl2PjwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250YWluZXJcIiBpZD1cInByb2ZpbGUtZHJvcGRvd25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBpZD1cInByb2ZpbGUtbWVudVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb2ZpbGV9XCIgYWx0PVwiXCIgY2xhc3M9XCJkcm9wZG93bi1pY29uXCI+PGRpdj5Qcm9maWxlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIGlkPVwic3Vic2NyaXB0aW9uLW1lbnVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzdWJzY3JpcHRpb259XCIgYWx0PVwiXCIgY2xhc3M9XCJkcm9wZG93bi1pY29uXCI+PGRpdj5TdWJzY3JpcHRpb248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgaWQ9XCJnb29nbGUtbG9nb3V0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bG9nb3V0fVwiIGFsdD1cIlwiIGNsYXNzPVwiZHJvcGRvd24taWNvblwiPjxkaXY+TG9nb3V0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIGlkPVwiZGVsZXRlLWFjY291bnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkZWxldGVBY2N9XCIgYWx0PVwiXCIgY2xhc3M9XCJkcm9wZG93bi1pY29uXCI+PGRpdj5EZWxldGVBY2NvdW50PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgICBcbjwvZGl2PlxuYCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2ZpbGVCdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVByb2ZpbGVEcm9wZG93bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGUtbG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaWduT3V0KTtcbn1cblxuZXhwb3J0IHsgZ2V0UHJvZmlsZUJ0biB9OyIsImltcG9ydCByZXBvcnQgZnJvbSAnLi4vLi4vaW1nL2dyYXBoLXdoaXRlLnBuZyc7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5mdW5jdGlvbiBnZXRSZXBvcnRCdG4oKSB7XG4gICAgY29uc3QgcmVwb3J0QnRuID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnRuIHJlcG9ydC1idG5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3JlcG9ydH1cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+UmVwb3J0PC9kaXY+XG4gICAgPC9idXR0b24+XG5gKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocmVwb3J0QnRuKTtcbn1cblxuZXhwb3J0IHsgZ2V0UmVwb3J0QnRuIH07IiwiaW1wb3J0IHNldHRpbmcgZnJvbSAnLi4vLi4vaW1nL2NvbmZpZy13aGl0ZS5wbmcnO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcblxuZnVuY3Rpb24gZ2V0U2V0dGluZ0J0bigpIHtcbiAgICBjb25zdCBzZXR0aW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxidXR0b24gaWQ9XCJtb2RhbF9fb3Blbi1idG5cIiBjbGFzcz1cIm5hdi1idG4gc2V0dGluZy1idG5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3NldHRpbmd9XCIgYWx0PVwiXCIgY2xhc3M9XCJtaW5pLWljb25cIj48ZGl2PlNldHRpbmc8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbmApO1xuICAgIG5hdi5hcHBlbmRDaGlsZChzZXR0aW5nQnRuKTtcbn1cblxuZXhwb3J0IHsgZ2V0U2V0dGluZ0J0biB9OyIsImltcG9ydCB7IGdldEJyYW5kTG9nbyB9IGZyb20gJy4vZGlzcGxheS9icmFuZC1sb2dvJ1xuaW1wb3J0IHsgZ2V0UmVwb3J0QnRuIH0gZnJvbSAnLi9kaXNwbGF5L3JlcG9ydC1idG4nXG5pbXBvcnQgeyBnZXRTZXR0aW5nQnRuIH0gZnJvbSAnLi9kaXNwbGF5L3NldHRpbmctYnRuJ1xuaW1wb3J0IHsgZ2V0TG9naW5CdG4gfSBmcm9tICcuL2Rpc3BsYXkvbG9naW4tYnRuJ1xuaW1wb3J0IHsgZ2V0UHJvZmlsZUJ0biB9IGZyb20gJy4vZGlzcGxheS9wcm9maWxlLWJ0bidcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuL2F1dGgnXG5cbi8vcmVuZGVyIGFsbCBidXR0b25zXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgZ2V0QnJhbmRMb2dvKCk7XG4gICAgZ2V0UmVwb3J0QnRuKCk7XG4gICAgZ2V0U2V0dGluZ0J0bigpO1xuICAgIGdldExvZ2luQnRuKCk7XG4gICAgLy8gZ2V0UHJvZmlsZUJ0bigpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVPbk5hdmJhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1hcmVhJykucmVtb3ZlKCk7XG4gICAgZ2V0UHJvZmlsZUJ0bigpOyAgIFxufVxuXG5mdW5jdGlvbiB0b2dnbGVPZmZOYXZiYXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtYXJlYScpLnJlbW92ZSgpO1xuICAgIGdldExvZ2luQnRuKCk7ICAgICBcbn1cblxuZXhwb3J0IHsgcmVuZGVySGVhZGVyICwgdG9nZ2xlT25OYXZiYXIgLCB0b2dnbGVPZmZOYXZiYXIgfTsiLCJ2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRpZih0eXBlb2YgZ2FwaSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc29sdmUoKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiLCAoZXZlbnQpID0+IHtcblx0XHRpZih0eXBlb2YgZ2FwaSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIHNjcmlwdCBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRlcnJvci5uYW1lID0gJ1NjcmlwdEV4dGVybmFsTG9hZEVycm9yJztcblx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdHJlamVjdChlcnJvcik7XG5cdH0sIFwiZ2FwaVwiKTtcbn0pLnRoZW4oKCkgPT4gZ2FwaSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIlBvbW9kb3JvOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiBmbihldmVudCkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==