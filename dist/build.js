/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _script_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _script_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
([_script_navbar__WEBPACK_IMPORTED_MODULE_1__, _script_auth__WEBPACK_IMPORTED_MODULE_2__] = await Promise.all([_script_navbar__WEBPACK_IMPORTED_MODULE_1__, _script_auth__WEBPACK_IMPORTED_MODULE_2__]));




(0,_script_auth__WEBPACK_IMPORTED_MODULE_2__.startApp)(); //OAuth
(0,_script_navbar__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();

return __webpack_exports__;
})();

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
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
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; \n    \n}\n\nbody {\n    background-color: rgb(219, 82, 77);\n    font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\nheader {\n    margin: 0 auto;\n    width: 620px;\n    height: 60px;\n    padding: 20px;\n    border-bottom: 1px solid #b74c4c;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    width: 132px;\n    padding: 10px 0;\n    font-size: 20px;\n    color: white;\n}\n\n.logo a {\n    text-decoration: none;\n    color: white;\n\n}\n\n.logo img {\n    width: 20px;\n    margin-right: 4px;\n}\n\nnav {\n    height: 32px;\n    display: flex;\n    align-items: center;\n\n}\n\n.nav-btn {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    margin-left: 10px;\n    font-size: 13px;\n    padding: 8px 12px;\n    min-width: 70px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.mini-icon {\n    width: 16px;\n}\n\n\n.nav-btn div {\n    font-size: 13px;\n    margin-left: 4px;\n}\n\n\n.profile-box {\n    width: 32px;\n    margin-left: 8px;\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    font-size: 13px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.profile-box img {\n    width: 28px;\n    height: 28px;\n    margin: auto;\n    border-radius: 4px;\n    align-items: center;\n    display: flex;\n}\n\n.dropdown-container {\n    border-radius: 4px;\n    padding: 4px 0px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    background-color: white;\n    transform: translateY(10px);\n    width: 200px;\n    right: 0px;\n  }\n\n.dropdown-show {\n    display: block;\n    pointer-events: auto;\n}\n\n\n.dropdown-list {\n      color: rgb(79, 43, 65);\n      display: flex;\n      align-items: center;\n      padding: 10px 16px;\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n/* \n.dropdown-list :hover {\n    background-color: rgb(240, 238, 238);\n} */\n\n.dropdown-icon {\n      opacity: 0.8;\n      width: 14px;\n      margin-right: 8px;\n      color: rgb(79, 43, 45);\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;AAEA;IACI,kCAAkC;IAClC,0KAA0K;AAC9K;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;;AAEhB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yCAAyC;IACzC,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,wEAAwE;IACxE,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,YAAY;IACZ,UAAU;EACZ;;AAEF;IACI,cAAc;IACd,oBAAoB;AACxB;;;AAGA;MACM,sBAAsB;MACtB,aAAa;MACb,mBAAmB;MACnB,kBAAkB;MAClB,eAAe;MACf,eAAe;MACf,oBAAoB;AAC1B;AACA;;;GAGG;;AAEH;MACM,YAAY;MACZ,WAAW;MACX,iBAAiB;MACjB,sBAAsB;MACtB,eAAe;MACf,eAAe;MACf,oBAAoB;AAC1B","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; \n    \n}\n\nbody {\n    background-color: rgb(219, 82, 77);\n    font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n\nheader {\n    margin: 0 auto;\n    width: 620px;\n    height: 60px;\n    padding: 20px;\n    border-bottom: 1px solid #b74c4c;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    width: 132px;\n    padding: 10px 0;\n    font-size: 20px;\n    color: white;\n}\n\n.logo a {\n    text-decoration: none;\n    color: white;\n\n}\n\n.logo img {\n    width: 20px;\n    margin-right: 4px;\n}\n\nnav {\n    height: 32px;\n    display: flex;\n    align-items: center;\n\n}\n\n.nav-btn {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    margin-left: 10px;\n    font-size: 13px;\n    padding: 8px 12px;\n    min-width: 70px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.mini-icon {\n    width: 16px;\n}\n\n\n.nav-btn div {\n    font-size: 13px;\n    margin-left: 4px;\n}\n\n\n.profile-box {\n    width: 32px;\n    margin-left: 8px;\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    opacity: 0.9;\n    background: none rgba(255, 255, 255, 0.2);\n    font-size: 13px;\n    border: none;\n    color: white;\n    height: 100%;\n}\n\n.profile-box img {\n    width: 28px;\n    height: 28px;\n    margin: auto;\n    border-radius: 4px;\n    align-items: center;\n    display: flex;\n}\n\n.dropdown-container {\n    border-radius: 4px;\n    padding: 4px 0px;\n    box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;\n    display: none;\n    pointer-events: none;\n    position: absolute;\n    background-color: white;\n    transform: translateY(10px);\n    width: 200px;\n    right: 0px;\n  }\n\n.dropdown-show {\n    display: block;\n    pointer-events: auto;\n}\n\n\n.dropdown-list {\n      color: rgb(79, 43, 65);\n      display: flex;\n      align-items: center;\n      padding: 10px 16px;\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n/* \n.dropdown-list :hover {\n    background-color: rgb(240, 238, 238);\n} */\n\n.dropdown-icon {\n      opacity: 0.8;\n      width: 14px;\n      margin-right: 8px;\n      color: rgb(79, 43, 45);\n      font-size: 14px;\n      cursor: pointer;\n      pointer-events: auto;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => /* binding */ renderHeader
/* harmony export */ });
/* harmony import */ var _display_brand_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _display_report_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _display_setting_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _display_login_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _display_profile_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
_display_profile_btn__WEBPACK_IMPORTED_MODULE_4__ = await Promise.resolve(_display_profile_btn__WEBPACK_IMPORTED_MODULE_4__);







//render all buttons
function renderHeader() {
    (0,_display_brand_logo__WEBPACK_IMPORTED_MODULE_0__.getBrandLogo)();
    (0,_display_report_btn__WEBPACK_IMPORTED_MODULE_1__.getReportBtn)();
    (0,_display_setting_btn__WEBPACK_IMPORTED_MODULE_2__.getSettingBtn)();
    // getLoginBtn();
    (0,_display_profile_btn__WEBPACK_IMPORTED_MODULE_4__.getProfileBtn)();
}



return __webpack_exports__;
})();

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrandLogo": () => /* binding */ getBrandLogo
/* harmony export */ });
/* harmony import */ var _img_icon_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


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
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9760d7a558046f9dee20e052a81c4a6c.png");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReportBtn": () => /* binding */ getReportBtn
/* harmony export */ });
/* harmony import */ var _img_graph_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


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
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cccf60a393a81a4bb99475c857ed291c.png");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingBtn": () => /* binding */ getSettingBtn
/* harmony export */ });
/* harmony import */ var _img_config_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


const nav = document.querySelector('nav');

function getSettingBtn() {
    const settingBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn setting-btn">
        <img src="${_img_config_white_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="" class="mini-icon"><div>Setting</div>
    </button>
`);
    nav.appendChild(settingBtn);
}



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2587b489af2ce08a8d3151dde756175b.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginBtn": () => /* binding */ getLoginBtn
/* harmony export */ });
/* harmony import */ var _img_user_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _img_google_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



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

// function rmLoginBtn() {
//     const loginBtn = document.querySelector('.profile-area');
//     loginBtn.remove();
// }



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1d23e72974cdd2a0d7505900b9aa020e.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c58fe3541a86601b12fea84f012bebdc.png");

/***/ }),
/* 16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileBtn": () => /* binding */ getProfileBtn
/* harmony export */ });
/* harmony import */ var _img_user_black_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _img_rocket_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _img_logout_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _img_delete_black_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
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
        <img src="${_img_user_black_png__WEBPACK_IMPORTED_MODULE_0__.default}" alt="" class="mini-icon"><div></div>
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
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5e9c68571282914685ace0f503e5dc83.png");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bffbe130d2fe2c4b549a8150ba1266af.png");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "978ce0fa6f0727582a5e9285580ab091.png");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ddeaa5f077acf3511b6b258d5b131c54.png");

/***/ }),
/* 21 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startApp": () => /* binding */ startApp,
/* harmony export */   "googleUser": () => /* binding */ googleUser,
/* harmony export */   "signOut": () => /* binding */ signOut
/* harmony export */ });
/* harmony import */ var googleAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
googleAPI__WEBPACK_IMPORTED_MODULE_0__ = await Promise.resolve(googleAPI__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var googleAPI__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleAPI__WEBPACK_IMPORTED_MODULE_0__);


var googleUser = {};
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
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

function signOut() {
  var auth2 = googleAPI__WEBPACK_IMPORTED_MODULE_0___default().auth2.getAuthInstance();
  auth2.signOut().then(function () {
  console.log('User signed out.');
    });
  }


return __webpack_exports__;
})();

/***/ }),
/* 22 */
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
/******/ 	]);
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pomodoro-project:";
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
/******/ 		__webpack_require__.p = "dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL3NyYy9zY3JpcHQvbmF2YmFyLmpzIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3QvLi9zcmMvc2NyaXB0L2Rpc3BsYXkvYnJhbmQtbG9nby5qcyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL2ltZy9pY29uLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL3NjcmlwdC9kaXNwbGF5L3JlcG9ydC1idG4uanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL3NyYy9pbWcvZ3JhcGgtd2hpdGUucG5nIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3QvLi9zcmMvc2NyaXB0L2Rpc3BsYXkvc2V0dGluZy1idG4uanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL3NyYy9pbWcvY29uZmlnLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL3NjcmlwdC9kaXNwbGF5L2xvZ2luLWJ0bi5qcyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL2ltZy91c2VyLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL2ltZy9nb29nbGUtYmxhY2sucG5nIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3QvLi9zcmMvc2NyaXB0L2Rpc3BsYXkvcHJvZmlsZS1idG4uanMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL3NyYy9pbWcvdXNlci1ibGFjay5wbmciLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL3NyYy9pbWcvcm9ja2V0LWJsYWNrLnBuZyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL2ltZy9sb2dvdXQtYmxhY2sucG5nIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3QvLi9zcmMvaW1nL2RlbGV0ZS1ibGFjay5wbmciLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC8uL3NyYy9zY3JpcHQvYXV0aC5qcyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0L2V4dGVybmFsIFtcImh0dHBzOi9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiLFwiZ2FwaVwiXSIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNtQjtBQUNOOztBQUV4QyxzREFBUSxHQUFHO0FBQ1gsNERBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZ0Y7QUFDNUYsWUFBMEY7O0FBRTFGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSXhCLGlFQUFlLDBGQUFjLE1BQU0sRTs7Ozs7O0FDWnRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNB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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQiw0QkFBNEIsUUFBUTtXQUMxRDtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0Isb0JBQW9CO1dBQ3BDO1dBQ0Esa0dBQWtHLFlBQVksT0FBTztXQUNySDtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrRUFBa0Usa0NBQWtDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDekNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLGdDOzs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gJy4vc2NyaXB0L25hdmJhcidcbmltcG9ydCB7IHN0YXJ0QXBwIH0gZnJvbSAnLi9zY3JpcHQvYXV0aCdcblxuc3RhcnRBcHAoKTsgLy9PQXV0aFxucmVuZGVySGVhZGVyKCk7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG4gICAgXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCA4MiwgNzcpO1xcbiAgICBmb250LWZhbWlseTogJ0FyaWFsUm91bmRlZCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA2MjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I3NGM0YztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAxMzJweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ28gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIG1pbi13aWR0aDogNzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1pbmktaWNvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5cXG4ubmF2LWJ0biBkaXYge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcblxcbi5wcm9maWxlLWJveCB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvZmlsZS1ib3ggaW1nIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE1JSkgMHB4IDEwcHggMjBweCwgcmdiKDAgMCAwIC8gMTAlKSAwcHggM3B4IDZweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgfVxcblxcbi5kcm9wZG93bi1zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5cXG4uZHJvcGRvd24tbGlzdCB7XFxuICAgICAgY29sb3I6IHJnYig3OSwgNDMsIDY1KTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi8qIFxcbi5kcm9wZG93bi1saXN0IDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOCwgMjM4KTtcXG59ICovXFxuXFxuLmRyb3Bkb3duLWljb24ge1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICB3aWR0aDogMTRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICBjb2xvcjogcmdiKDc5LCA0MywgNDUpO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsMEtBQTBLO0FBQzlLOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdFQUF3RTtJQUN4RSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0FBRUY7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOzs7QUFHQTtNQUNNLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZUFBZTtNQUNmLG9CQUFvQjtBQUMxQjtBQUNBOzs7R0FHRzs7QUFFSDtNQUNNLFlBQVk7TUFDWixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsZUFBZTtNQUNmLG9CQUFvQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG4gICAgXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCA4MiwgNzcpO1xcbiAgICBmb250LWZhbWlseTogJ0FyaWFsUm91bmRlZCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA2MjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I3NGM0YztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAxMzJweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ28gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIG1pbi13aWR0aDogNzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1pbmktaWNvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG5cXG4ubmF2LWJ0biBkaXYge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcblxcbi5wcm9maWxlLWJveCB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvZmlsZS1ib3ggaW1nIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE1JSkgMHB4IDEwcHggMjBweCwgcmdiKDAgMCAwIC8gMTAlKSAwcHggM3B4IDZweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgfVxcblxcbi5kcm9wZG93bi1zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5cXG4uZHJvcGRvd24tbGlzdCB7XFxuICAgICAgY29sb3I6IHJnYig3OSwgNDMsIDY1KTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi8qIFxcbi5kcm9wZG93bi1saXN0IDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOCwgMjM4KTtcXG59ICovXFxuXFxuLmRyb3Bkb3duLWljb24ge1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICB3aWR0aDogMTRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICBjb2xvcjogcmdiKDc5LCA0MywgNDUpO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiaW1wb3J0IHsgZ2V0QnJhbmRMb2dvIH0gZnJvbSAnLi9kaXNwbGF5L2JyYW5kLWxvZ28nXG5pbXBvcnQgeyBnZXRSZXBvcnRCdG4gfSBmcm9tICcuL2Rpc3BsYXkvcmVwb3J0LWJ0bidcbmltcG9ydCB7IGdldFNldHRpbmdCdG4gfSBmcm9tICcuL2Rpc3BsYXkvc2V0dGluZy1idG4nXG5pbXBvcnQgeyBnZXRMb2dpbkJ0biB9IGZyb20gJy4vZGlzcGxheS9sb2dpbi1idG4nXG5pbXBvcnQgeyBnZXRQcm9maWxlQnRuIH0gZnJvbSAnLi9kaXNwbGF5L3Byb2ZpbGUtYnRuJ1xuXG5cbi8vcmVuZGVyIGFsbCBidXR0b25zXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgZ2V0QnJhbmRMb2dvKCk7XG4gICAgZ2V0UmVwb3J0QnRuKCk7XG4gICAgZ2V0U2V0dGluZ0J0bigpO1xuICAgIC8vIGdldExvZ2luQnRuKCk7XG4gICAgZ2V0UHJvZmlsZUJ0bigpO1xufVxuXG5cbmV4cG9ydCB7IHJlbmRlckhlYWRlciB9OyIsImltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2ltZy9pY29uLXdoaXRlLnBuZyc7XG5cbmNvbnN0IGJyYW5kTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5cbmZ1bmN0aW9uIGdldEJyYW5kTG9nbygpIHtcbiAgICBjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtsb2dvfVwiIGFsdD1cIlwiPlBvbW9mb2N1c1xuICAgIDwvYT5cbmApO1xuICAgIGJyYW5kTG9nby5hcHBlbmRDaGlsZChsb2dvQm94KTtcbn1cblxuZXhwb3J0IHsgZ2V0QnJhbmRMb2dvIH07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk3NjBkN2E1NTgwNDZmOWRlZTIwZTA1MmE4MWM0YTZjLnBuZ1wiOyIsImltcG9ydCByZXBvcnQgZnJvbSAnLi4vLi4vaW1nL2dyYXBoLXdoaXRlLnBuZyc7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5mdW5jdGlvbiBnZXRSZXBvcnRCdG4oKSB7XG4gICAgY29uc3QgcmVwb3J0QnRuID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnRuIHJlcG9ydC1idG5cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3JlcG9ydH1cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+UmVwb3J0PC9kaXY+XG4gICAgPC9idXR0b24+XG5gKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocmVwb3J0QnRuKTtcbn1cblxuZXhwb3J0IHsgZ2V0UmVwb3J0QnRuIH07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNjY2Y2MGEzOTNhODFhNGJiOTk0NzVjODU3ZWQyOTFjLnBuZ1wiOyIsImltcG9ydCBzZXR0aW5nIGZyb20gJy4uLy4uL2ltZy9jb25maWctd2hpdGUucG5nJztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5cbmZ1bmN0aW9uIGdldFNldHRpbmdCdG4oKSB7XG4gICAgY29uc3Qgc2V0dGluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGBcbiAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWJ0biBzZXR0aW5nLWJ0blwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7c2V0dGluZ31cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+U2V0dGluZzwvZGl2PlxuICAgIDwvYnV0dG9uPlxuYCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHNldHRpbmdCdG4pO1xufVxuXG5leHBvcnQgeyBnZXRTZXR0aW5nQnRuIH07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI1ODdiNDg5YWYyY2UwOGE4ZDMxNTFkZGU3NTYxNzViLnBuZ1wiOyIsImltcG9ydCBsb2dpbiBmcm9tICcuLi8uLi9pbWcvdXNlci13aGl0ZS5wbmcnO1xuaW1wb3J0IGdvb2dsZSBmcm9tICcuLi8uLi9pbWcvZ29vZ2xlLWJsYWNrLnBuZyc7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5mdW5jdGlvbiB0b2dnbGVMb2dpbkRyb3Bkb3duKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1kcm9wZG93bicpLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1zaG93XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG59XG5cbmZ1bmN0aW9uIGdldExvZ2luQnRuKCkge1xuICAgIGNvbnN0IGxvZ2luQnRuID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWFyZWFcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdi1idG5cIiBpZD1cImxvZ2luLWJ0blwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2xvZ2lufVwiIGFsdD1cIlwiIGNsYXNzPVwibWluaS1pY29uXCI+PGRpdj5Mb2dpbjwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiIGlkPVwibG9naW4tZHJvcGRvd25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgaWQ9XCJnb29nbGUtc2lnbmluXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2dvb2dsZX1cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PkxvZ2luIHdpdGggR29vZ2xlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgIDwvZGl2PlxuYCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ2luQnRuKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTG9naW5Ecm9wZG93bik7XG59XG5cbi8vIGZ1bmN0aW9uIHJtTG9naW5CdG4oKSB7XG4vLyAgICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1hcmVhJyk7XG4vLyAgICAgbG9naW5CdG4ucmVtb3ZlKCk7XG4vLyB9XG5cbmV4cG9ydCB7IGdldExvZ2luQnRuIH07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkMjNlNzI5NzRjZGQyYTBkNzUwNTkwMGI5YWEwMjBlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNThmZTM1NDFhODY2MDFiMTJmZWE4NGYwMTJiZWJkYy5wbmdcIjsiLCJpbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi4vLi4vaW1nL3VzZXItYmxhY2sucG5nXCI7XG5pbXBvcnQgc3Vic2NyaXB0aW9uIGZyb20gXCIuLi8uLi9pbWcvcm9ja2V0LWJsYWNrLnBuZ1wiO1xuaW1wb3J0IGxvZ291dCBmcm9tIFwiLi4vLi4vaW1nL2xvZ291dC1ibGFjay5wbmdcIjtcbmltcG9ydCBkZWxldGVBY2MgZnJvbSBcIi4uLy4uL2ltZy9kZWxldGUtYmxhY2sucG5nXCI7XG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIi4uL2F1dGhcIlxuXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2ZpbGVEcm9wZG93bigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1kcm9wZG93bicpLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1zaG93XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG59XG5cbi8vcmVuZGVyIHByb2ZpbGUgYnV0dG9uXG5mdW5jdGlvbiBnZXRQcm9maWxlQnRuKCkge1xuICAgIGNvbnN0IHByb2ZpbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXG4gICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtYXJlYVwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJuYXYtYnRuXCIgaWQ9XCJwcm9maWxlLWJ0blwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7cHJvZmlsZX1cIiBhbHQ9XCJcIiBjbGFzcz1cIm1pbmktaWNvblwiPjxkaXY+PC9kaXY+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiIGlkPVwicHJvZmlsZS1kcm9wZG93blwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIGlkPVwicHJvZmlsZS1tZW51XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvZmlsZX1cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PlByb2ZpbGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgaWQ9XCJzdWJzY3JpcHRpb24tbWVudVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3N1YnNjcmlwdGlvbn1cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PlN1YnNjcmlwdGlvbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBpZD1cImdvb2dsZS1sb2dvdXRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtsb2dvdXR9XCIgYWx0PVwiXCIgY2xhc3M9XCJkcm9wZG93bi1pY29uXCI+PGRpdj5Mb2dvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgaWQ9XCJkZWxldGUtYWNjb3VudFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2RlbGV0ZUFjY31cIiBhbHQ9XCJcIiBjbGFzcz1cImRyb3Bkb3duLWljb25cIj48ZGl2PkRlbGV0ZUFjY291bnQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+ICAgIFxuPC9kaXY+XG5gKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvZmlsZUJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUHJvZmlsZURyb3Bkb3duKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvb2dsZS1sb2dvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZ25PdXQpO1xuXG59XG5cbmV4cG9ydCB7IGdldFByb2ZpbGVCdG4gfTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWU5YzY4NTcxMjgyOTE0Njg1YWNlMGY1MDNlNWRjODMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJmZmJlMTMwZDJmZTJjNGI1NDlhODE1MGJhMTI2NmFmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NzhjZTBmYTZmMDcyNzU4MmE1ZTkyODU1ODBhYjA5MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGRlYWE1ZjA3N2FjZjM1MTFiNmIyNThkNWIxMzFjNTQucG5nXCI7IiwiaW1wb3J0IGdhcGkgZnJvbSAnZ29vZ2xlQVBJJztcblxudmFyIGdvb2dsZVVzZXIgPSB7fTtcbnZhciBzdGFydEFwcCA9IGZ1bmN0aW9uKCkge1xuICBnYXBpLmxvYWQoJ2F1dGgyJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgYXV0aDI7XG4gICAgYXV0aDIgPSBnYXBpLmF1dGgyLmluaXQoe1xuICAgICAgY2xpZW50X2lkOiAnODg2NzAwOTI0ODQ4LWptNWVqcXRrb21kMTVtaDF1bzA4ajBxMm91MGtncWs0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgIGNvb2tpZXBvbGljeTogJ3NpbmdsZV9ob3N0X29yaWdpbicsXG4gICAgfSk7XG4gICAgYXR0YWNoU2lnbmluKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29nbGUtc2lnbmluJyksIGF1dGgyKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBhdHRhY2hTaWduaW4oZWxlbWVudCwgYXV0aDIpIHtcbiAgY29uc29sZS5sb2coZWxlbWVudC5pZCk7XG4gIGF1dGgyLmF0dGFjaENsaWNrSGFuZGxlcihlbGVtZW50LCB7fSxcbiAgICAgIGZ1bmN0aW9uKGdvb2dsZVVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFNpZ25lZCBpbjogJHtnb29nbGVVc2VyLmdldEJhc2ljUHJvZmlsZSgpLmdldE5hbWUoKX1gKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycm9yLCB1bmRlZmluZWQsIDIpKTtcbiAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaWduT3V0KCkge1xuICB2YXIgYXV0aDIgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO1xuICBhdXRoMi5zaWduT3V0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdVc2VyIHNpZ25lZCBvdXQuJyk7XG4gICAgfSk7XG4gIH1cblxuZXhwb3J0IHsgc3RhcnRBcHAgLCBnb29nbGVVc2VyICwgc2lnbk91dH0iLCJ2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRpZih0eXBlb2YgZ2FwaSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc29sdmUoKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qc1wiLCAoZXZlbnQpID0+IHtcblx0XHRpZih0eXBlb2YgZ2FwaSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIHNjcmlwdCBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRlcnJvci5uYW1lID0gJ1NjcmlwdEV4dGVybmFsTG9hZEVycm9yJztcblx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdHJlamVjdChlcnJvcik7XG5cdH0sIFwiZ2FwaVwiKTtcbn0pLnRoZW4oKCkgPT4gZ2FwaSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJwb21vZG9yby1wcm9qZWN0OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiBmbihldmVudCkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==