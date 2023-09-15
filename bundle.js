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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style_restaurant.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style_restaurant.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset CSS section*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n    display: block;\n\n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    position: relative;\n    font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n    padding: 0 1.5rem 0 1.5rem;\n}\n\nh1 {\n    color: #ED3237;\n    font-size: 1.4rem;\n    font-weight: 600;\n}\n\nh2 {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\nfooter {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    font-size: 12px;\n    padding: 2px 0 2px 0;\n    background-color: #4b4b4b;\n    color: #ffffff;\n}\n\n#content {\n    padding-bottom: 100px;\n}\n\n#nav_bar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 2rem;\n}\n\n.menu_items {\n    display: none;\n    list-style-type: none;\n    width: 100%;\n}\n\n.mobile_hamburger_icon {\n    background: #ffffff;\n    color: #A3A3A3;\n    display: block;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n  }\n  \n.nav_logo {\n    width: 150px;\n}\n\n.nav_divider {\n    border-top: 1px solid #ED3237;\n    width: 1200px;\n}\n\n.nav_button {\n    width: 100%;\n    height: 60px;\n    background-color: #ED3237;\n    color: #ffffff;\n    border: none;\n    font: inherit;\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\n.nav_button:active {\n    background-color: #A3A3A3;\n}\n\n.centered_food_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.centered_food_items > h1 {\n    margin: 2rem;\n}\n\n.food_items_grid {\n    display: grid;\n    align-items: end;\n    gap: 1rem;\n}\n\n.food_item {\n    padding: 15px;\n    line-height: 1.4rem;\n}\n\n.food_item > hr {\n    border-color: #f3f3f3;\n    border-style: solid;\n    border-width: 1px;\n}\n\n.food_item > h2 {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.food_item > h2, p {\n    padding-bottom: 1rem;\n}\n\n.food_item > ul > li {\n    margin-left: 3rem;\n}\n\n@media (min-width: 600px) {\n    .food_items_grid {\n        grid-template-columns: repeat(2, 300px);\n        gap: 3rem;\n    }\n}\n\n@media (min-width: 900px) {\n    .mobile_hamburger_icon {\n        display: none;\n    }\n\n    .menu_items {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: 1rem;\n        padding-top: 0.5rem;\n        list-style-type: none;\n    }\n\n    .nav_button {\n        width: 160px;\n        font-size: 0.9rem;\n    }\n\n    .food_items_grid {\n        grid-template-columns: repeat(3, 300px);\n        gap: 3rem;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/style_restaurant.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style_restaurant.css":
/*!**********************************!*\
  !*** ./src/style_restaurant.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_restaurant_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style_restaurant.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style_restaurant.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_restaurant_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_restaurant_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_restaurant_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_restaurant_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/style_restaurant.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/bebidas.js":
/*!************************!*\
  !*** ./src/bebidas.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bebidasAlt: () => (/* binding */ bebidasAlt)\n/* harmony export */ });\n/* harmony import */ var _menu_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_creation */ \"./src/menu_creation.js\");\n\n\nfunction bebidasAlt() {\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuPageTitle)('Bebidas');\n\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Agua Fresca - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Jugo de Naranja - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Café - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Vaso de Leche - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Leche con Chocolate - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Refresco de Lata - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryLong)('Licuado - $40', 'Opciones a elegir:', 'Plátano', 'Fresa', 'Papaya');\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/bebidas.js?");

/***/ }),

/***/ "./src/comida_a_la_carta.js":
/*!**********************************!*\
  !*** ./src/comida_a_la_carta.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comidaALaCarta: () => (/* binding */ comidaALaCarta)\n/* harmony export */ });\n/* harmony import */ var _menu_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_creation */ \"./src/menu_creation.js\");\n\n\nfunction comidaALaCarta() {\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuPageTitle)('Comida a la Carta');\n\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Comida del Día - $190','Deléitese con su elección de dos guisados únicos, cada uno servido con una sopa casera y calientita.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Menudo - $190','Solo Sábados y Domingos - Menudo tradicional servido con cebolla, cilantro y limón.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Pozole - $190','Solo Sábados y Domingos - Pozole tradicional de cerdo, acompañada de rábanos, lechuga y limón.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Club Sandwich - $190', 'Tres capas de pavo, jamón y tocino en pan tostado con aderezos frescos, servido con papas.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Caldo de Pollo - $190', 'Caldo casero con pollo tierno, vegetales y fideos.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Hot Dogs (2 Piezas) - $190', 'Dos hot dogs clásicos con tus aderezos favoritos.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Hamburguesa - $190', 'Hamburguesa jugosa con queso, lechuga y tomate, acompañado de papas fritas.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Pollo Estilo Sinaloa - $250', 'Pollo sazonado y a la parrilla con sabores únicos de Sinaloa.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Fajitas de Pollo - $250', 'Tiras de pollo a la parrilla con verduras y especias, servidas con tortillas.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Pechuga a la Plancha - $250', 'Pechuga de pollo a la plancha, simple y deliciosa.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Milanesa de Pollo - $250', 'Pechuga empanizada y frita, acompañada de guarniciones.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryLong)('Machaca de Pollo con Verdura - $250', 'Pollo desmenuzado con vegetales, acompañado de guarniciones.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryLong)('Enchiladas de Pollo o Carne - $250', 'Tortillas rellenas de pollo o carne, bañadas en salsa y queso, acompañadas de arroz y frijoles. A elegir:', 'Rojas', 'Suizas', 'Verdes');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Antojitos Mexicanos - $250', 'A elegir entre Tostadas, Flautas o Sopes. Crujientes y deliciosos, acompañados de salsas frescas y guarniciones auténticas.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Milanesa de Res - $290', 'Jugosa milanesa de res acompañada de papas y frijoles.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Fajitas de Res - $290', 'Tiras de res a la parrilla, acompañadas de papas y frijoles.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Carne Asada - $290', 'Deliciosa carne asada a la parrilla, jugosa y llena de sabor, acompañada de guarniciones frescas.');\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/comida_a_la_carta.js?");

/***/ }),

/***/ "./src/desayunos_a_la_carta.js":
/*!*************************************!*\
  !*** ./src/desayunos_a_la_carta.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   desayunosALaCarta: () => (/* binding */ desayunosALaCarta)\n/* harmony export */ });\n/* harmony import */ var _menu_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_creation */ \"./src/menu_creation.js\");\n\n\nfunction desayunosALaCarta() {\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuPageTitle)('Desayunos a la Carta');\n\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Hot Cakes - $190', 'Tres esponjosos hot cakes acompañados de tu elección de fruta fresca.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryLong)('Huevos Al Gusto - $190','Incluye arroz y frijoles. Opción a elegir:', 'Huevo con jamón','Huevo con salchicha', 'Huevos rancheros', 'Huevos con tocino', 'Huevos a la mexicana' )\n    ;(0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Fruta de Temporada - $190', '2 frutas de temporada a elegir, incluye miel, granola y yogurt');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Chilaquiles - $190', 'Trozos de tortilla fritos, cubiertos de salsa roja o verde, acompañados de crema, queso, cebolla y aguacate. Un clásico mexicano. Incluye arroz y frijoles.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Sincronizada - $190', 'Dos tortillas rellenas de jamón y queso, cocinadas a la perfección. Incluye arroz y frijoles.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Quesadillas - $190', 'Tres piezas (solo queso) incluye arroz y frijoles. Un clásico de la cocina mexicana.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Machaca A La Mexicana - $190', 'Carne de res desmenuzada, cocinada con cebolla, tomate y chiles, llena de sabor y servida con tortillas calientes.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Machaca Con Huevo - $190', 'Deliciosa carne de res desmenuzada y huevos revueltos, sazonados con especias, servidos con tortillas calientes.');\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/desayunos_a_la_carta.js?");

/***/ }),

/***/ "./src/desayunos_de_cortesia.js":
/*!**************************************!*\
  !*** ./src/desayunos_de_cortesia.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   desayunosDeCortesia: () => (/* binding */ desayunosDeCortesia)\n/* harmony export */ });\n/* harmony import */ var _menu_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_creation */ \"./src/menu_creation.js\");\n\n\nfunction desayunosDeCortesia() {\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuPageTitle)('Desayunos de Cortesia');\n\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Hot Cakes', 'Tres esponjosos hot cakes acompañados de tu elección de fruta fresca.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryLong)('Huevos Al Gusto','Incluye arroz y frijoles. Opción a elegir:', 'Huevo con jamón','Huevo con salchicha', 'Huevos rancheros' )\n    ;(0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryLong)('Burritos', 'Dos burritos deliciosos, incluye arroz y frijoles. Opción a elegir:', 'Huevo','Huevo con chorizo', 'Salchichas a la mexicana')\n    ;(0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Pan Francés', 'Servido con tu elección de complementos, como fruta, miel o azúcar en polvo.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Fruta de Temporada', 'Dos frutas de temporada a elegir, incluye miel, granola y yogurt.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Chilaquiles', 'Trozos de tortilla fritos, cubiertos de salsa roja o verde, acompañados de crema, queso, cebolla y aguacate. Un clásico mexicano. Incluye arroz y frijoles.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Sincronizada', 'Dos tortillas rellenas de jamón y queso, cocinadas a la perfección. Incluye arroz y frijoles.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Cereal', 'Una mezcla de cereales crujientes servida con leche y plátano fresco. Un desayuno equilibrado y lleno de sabor para comenzar tu día.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Avena', 'Avena cremosa cocinada a fuego lento y endulzada con trozos de plátano fresco.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Molletes Con Queso', 'Dos piezas con frijoles refritos, queso derretido. Incluye salsa bandera y arroz.');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Quesadillas', 'Tres piezas (solo queso) incluye arroz y frijoles. Un clásico de la cocina mexicana.');\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/desayunos_de_cortesia.js?");

/***/ }),

/***/ "./src/extras.js":
/*!***********************!*\
  !*** ./src/extras.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extrasAlt: () => (/* binding */ extrasAlt)\n/* harmony export */ });\n/* harmony import */ var _menu_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_creation */ \"./src/menu_creation.js\");\n\n\nfunction extrasAlt() {\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuPageTitle)('Extras');\n\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Arroz y Frijoles - $40');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Salsa Bandera - $40');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Papas Fritas - $60');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Dos Huevos - $30');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Pan de Barra (3 Piezas) - $25');\n    (0,_menu_creation__WEBPACK_IMPORTED_MODULE_0__.menuEntryShort)('Guacamole con Totopos - $70');\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/extras.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_restaurant_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style_restaurant.css */ \"./src/style_restaurant.css\");\n/* harmony import */ var _nav_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_create */ \"./src/nav_create.js\");\n/* harmony import */ var _nav_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav_initialize */ \"./src/nav_initialize.js\");\n/* harmony import */ var _desayunos_de_cortesia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desayunos_de_cortesia */ \"./src/desayunos_de_cortesia.js\");\n\n\n\n\n\n// Create nav bar and add click event listeners\n(0,_nav_create__WEBPACK_IMPORTED_MODULE_1__.createNav)();\n(0,_nav_initialize__WEBPACK_IMPORTED_MODULE_2__.initializeNav)();\n// Load the first page in site\n(0,_desayunos_de_cortesia__WEBPACK_IMPORTED_MODULE_3__.desayunosDeCortesia)();\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu_creation.js":
/*!******************************!*\
  !*** ./src/menu_creation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuEntryLong: () => (/* binding */ menuEntryLong),\n/* harmony export */   menuEntryShort: () => (/* binding */ menuEntryShort),\n/* harmony export */   menuPageTitle: () => (/* binding */ menuPageTitle)\n/* harmony export */ });\nfunction menuPageTitle(menuTitleName) {\n    const main = document.querySelector('.centered_food_items')\n\n    const menuTitle = document.createElement('h1');\n    menuTitle.textContent = menuTitleName;\n    main.appendChild(menuTitle);\n\n    const foodItemGrid = document.createElement('div');\n    foodItemGrid.classList.add('food_items_grid');\n    main.appendChild(foodItemGrid);\n}\n\nfunction menuEntryShort(name, desc) {\n    const foodItemGrid = document.querySelector('.food_items_grid');\n\n    const div = document.createElement('div');\n    div.classList.add('food_item')\n    const h2 = document.createElement('h2')\n    h2.textContent = name;\n    div.appendChild(h2);\n    const p = document.createElement('p');\n    p.textContent = desc;\n    div.appendChild(p);\n    const hr = document.createElement('hr');\n    div.appendChild(hr);\n    foodItemGrid.appendChild(div);\n}\n\nfunction menuEntryLong(name, desc, ...list) {\n    const foodItemGrid = document.querySelector('.food_items_grid');\n\n    const div = document.createElement('div');\n    div.classList.add('food_item')\n    const h2 = document.createElement('h2')\n    h2.textContent = name;\n    div.appendChild(h2);\n    const p = document.createElement('p');\n    p.textContent = desc;\n    div.appendChild(p);\n    const ul = document.createElement('ul');\n    div.appendChild(ul);\n\n    for (const listItem of list) {\n        const li = document.createElement('li');\n        li.textContent = listItem;\n        ul.appendChild(li);\n    }\n\n    const hr = document.createElement('hr');\n    div.appendChild(hr);\n    foodItemGrid.appendChild(div);\n}\n\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/menu_creation.js?");

/***/ }),

/***/ "./src/nav_create.js":
/*!***************************!*\
  !*** ./src/nav_create.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNav: () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _images_youkoso_logo_color_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/youkoso_logo_color.svg */ \"./src/images/youkoso_logo_color.svg\");\n\n\nfunction createNav() {\n    const contentDiv = document.getElementById('content');\n\n    const navBar = document.createElement('nav');\n    navBar.setAttribute('id', 'nav_bar');\n    contentDiv.appendChild(navBar);\n\n    const youkosoLogo = new Image();\n    youkosoLogo.src = _images_youkoso_logo_color_svg__WEBPACK_IMPORTED_MODULE_0__;\n    youkosoLogo.classList.add('nav_logo');\n    navBar.appendChild(youkosoLogo)\n\n    const navDivider = document.createElement('hr');\n    navDivider.classList.add('nav_divider');\n    navBar.appendChild(navDivider);\n\n    const menuItems = document.createElement('ul');\n    menuItems.classList.add('menu_items');\n    navBar.appendChild(menuItems);\n\n    const listButton1 = document.createElement('li');\n    menuItems.appendChild(listButton1);\n    const button1 = document.createElement('button');\n    button1.textContent = 'Desayunos de cortesía';\n    button1.classList.add('nav_button');\n    button1.classList.add('desayunos_de_cortesia');\n    listButton1.appendChild(button1);\n\n    const listButton2 = document.createElement('li');\n    menuItems.appendChild(listButton2);\n    const button2 = document.createElement('button');\n    button2.textContent = 'Desayunos a la carta';\n    button2.classList.add('nav_button');\n    button2.classList.add('desayunos_a_la_carta');\n    listButton2.appendChild(button2);\n\n    const listButton3 = document.createElement('li');\n    menuItems.appendChild(listButton3);\n    const button3 = document.createElement('button');\n    button3.textContent = 'Comida a la carta';\n    button3.classList.add('nav_button');\n    button3.classList.add('comida_a_la_carta');\n    listButton3.appendChild(button3);\n\n    const listButton4 = document.createElement('li');\n    menuItems.appendChild(listButton4);\n    const button4 = document.createElement('button');\n    button4.textContent = 'Bebidas';\n    button4.classList.add('nav_button');\n    button4.classList.add('bebidas');\n    listButton4.appendChild(button4);\n\n    const listButton5 = document.createElement('li');\n    menuItems.appendChild(listButton5);\n    const button5 = document.createElement('button');\n    button5.textContent = 'Extras';\n    button5.classList.add('nav_button');\n    button5.classList.add('extras');\n    listButton5.appendChild(button5);\n\n    const hamburgerMenu = document.createElement('a');\n    hamburgerMenu.setAttribute('href', 'javascript:void(0);');\n    hamburgerMenu.classList.add('mobile_hamburger_icon');\n    navBar.appendChild(hamburgerMenu);\n\n    const main = document.createElement('main');\n    main.classList.add('centered_food_items');\n    contentDiv.appendChild(main);\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/nav_create.js?");

/***/ }),

/***/ "./src/nav_initialize.js":
/*!*******************************!*\
  !*** ./src/nav_initialize.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeNav: () => (/* binding */ initializeNav)\n/* harmony export */ });\n/* harmony import */ var _desayunos_de_cortesia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desayunos_de_cortesia */ \"./src/desayunos_de_cortesia.js\");\n/* harmony import */ var _desayunos_a_la_carta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desayunos_a_la_carta */ \"./src/desayunos_a_la_carta.js\");\n/* harmony import */ var _comida_a_la_carta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comida_a_la_carta */ \"./src/comida_a_la_carta.js\");\n/* harmony import */ var _bebidas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bebidas */ \"./src/bebidas.js\");\n/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extras */ \"./src/extras.js\");\n\n\n\n\n\n\n\nfunction clearContent() {\n    const menuItems = document.querySelector('.centered_food_items')\n    while (menuItems.hasChildNodes()) {\n        menuItems.removeChild(menuItems.firstChild);\n    }\n}\n\nfunction toggleMobileMenu() {\n    const mobileMenu = document.querySelector('.mobile_hamburger_icon');\n    const mobileMenuButtons = document.querySelector('.menu_items')\n\n    mobileMenu.addEventListener('click', function() {\n        if (mobileMenuButtons.style.display === \"block\") {\n            mobileMenuButtons.style.display = \"none\";\n          } else {\n            mobileMenuButtons.style.display = \"block\";\n          }\n    })\n  }\n\nfunction addNavListeners() {\n    const desayunosCortesia = document.querySelector('.desayunos_de_cortesia')\n    const desayunosCarta = document.querySelector('.desayunos_a_la_carta')\n    const comidaCarta = document.querySelector('.comida_a_la_carta')\n    const bebidas = document.querySelector('.bebidas')\n    const extras = document.querySelector('.extras')\n\n    desayunosCortesia.addEventListener('click', function() {\n        clearContent();\n        (0,_desayunos_de_cortesia__WEBPACK_IMPORTED_MODULE_0__.desayunosDeCortesia)();\n    });\n\n    desayunosCarta.addEventListener('click', function() {\n        clearContent();\n        (0,_desayunos_a_la_carta__WEBPACK_IMPORTED_MODULE_1__.desayunosALaCarta)();\n    });\n\n    comidaCarta.addEventListener('click', function() {\n        clearContent();\n        (0,_comida_a_la_carta__WEBPACK_IMPORTED_MODULE_2__.comidaALaCarta)();\n    });\n\n    bebidas.addEventListener('click', function() {\n        clearContent();\n        (0,_bebidas__WEBPACK_IMPORTED_MODULE_3__.bebidasAlt)();\n    });\n\n    extras.addEventListener('click', function() {\n        clearContent();\n        (0,_extras__WEBPACK_IMPORTED_MODULE_4__.extrasAlt)();\n    });\n}\n\nfunction initializeNav() {\n    addNavListeners();\n    toggleMobileMenu();\n}\n\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/nav_initialize.js?");

/***/ }),

/***/ "./src/images/youkoso_logo_color.svg":
/*!*******************************************!*\
  !*** ./src/images/youkoso_logo_color.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e574deed8117cb275ca3.svg\";\n\n//# sourceURL=webpack://odin_restaurant_page/./src/images/youkoso_logo_color.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;