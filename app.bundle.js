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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/PageControl/style.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./src/PageControl/style.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/PageControl/style.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/ResultsContainer/style.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./src/ResultsContainer/style.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/ResultsContainer/style.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/SearchInput/style.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./src/SearchInput/style.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/SearchInput/style.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/VideoCard/style.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./src/VideoCard/style.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/VideoCard/style.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  } // blank or null?\n\n\n  if (!css || typeof css !== \"string\") {\n    return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\"); // convert each url(...)\n\n  /*\n  This regular expression is just a way to recursively match brackets within\n  a string.\n  \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n     (  = Start a capturing group\n       (?:  = Start a non-capturing group\n           [^)(]  = Match anything that isn't a parentheses\n           |  = OR\n           \\(  = Match a start parentheses\n               (?:  = Start another non-capturing groups\n                   [^)(]+  = Match anything that isn't a parentheses\n                   |  = OR\n                   \\(  = Match a start parentheses\n                       [^)(]*  = Match anything that isn't a parentheses\n                   \\)  = Match a end parentheses\n               )  = End Group\n               *\\) = Match anything and then a close parens\n           )  = Close non-capturing group\n           *  = Match anything\n        )  = Close capturing group\n   \\)  = Match a close parens\n  \t /gi  = Get all matches, not the first.  Be case insensitive.\n   */\n\n  var fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n    // strip quotes (if they exist)\n    var unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n      return $1;\n    }).replace(/^'(.*)'$/, function (o, $1) {\n      return $1;\n    }); // already a full url? no change\n\n    if (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n      return fullMatch;\n    } // convert the url to a full url\n\n\n    var newUrl;\n\n    if (unquotedOrigUrl.indexOf(\"//\") === 0) {\n      //TODO: should we add protocol?\n      newUrl = unquotedOrigUrl;\n    } else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n      // path should be relative to the base url\n      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n    } else {\n      // path should be relative to current directory\n      newUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n    } // send back the fixed url(...)\n\n\n    return \"url(\" + JSON.stringify(newUrl) + \")\";\n  }); // send back the fixed css\n\n  return fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/API/index.js":
/*!**************************!*\
  !*** ./src/API/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar API =\n/*#__PURE__*/\nfunction () {\n  function API() {\n    _classCallCheck(this, API);\n\n    this.urlBase = 'https://www.googleapis.com/youtube/v3/';\n    this.key = 'AIzaSyDHsniQStr16Jd7KbIL8zteooE9vsWNQqQ';\n  }\n\n  _createClass(API, [{\n    key: \"getChunk\",\n    value: function getChunk(value, chunkSize) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var XHR = new XMLHttpRequest();\n        var requestUri = \"\".concat(_this.urlBase, \"search?key=\").concat(_this.key, \"&type=video&part=snippet&maxResults=\").concat(chunkSize, \"&q=\").concat(value);\n\n        if (_this.nextPageToken) {\n          requestUri += \"&pageToken=\".concat(_this.nextPageToken);\n        }\n\n        XHR.open('GET', requestUri, true);\n\n        XHR.onload = function () {\n          if (XHR.status === 200) {\n            resolve(JSON.parse(XHR.responseText));\n          } else {\n            reject(new Error());\n          }\n        };\n\n        _this.isLoading = true;\n        XHR.send();\n      }).then(function (result) {\n        return new Promise(function (resolve, reject) {\n          _this.nextPageToken = result.nextPageToken;\n          var XHR2 = new XMLHttpRequest();\n          var ids = (result.items || []).map(function (video) {\n            return video.id.videoId;\n          }).toString();\n          XHR2.open('GET', \"\".concat(_this.urlBase, \"videos?key=\").concat(_this.key, \"&id=\").concat(ids, \"&&part=snippet,statistics\"), true);\n\n          XHR2.onload = function () {\n            _this.isLoading = false;\n\n            if (XHR2.status === 200) {\n              resolve(_objectSpread({}, JSON.parse(XHR2.responseText, result), {\n                totalResults: result.pageInfo.totalResults\n              }));\n            } else {\n              reject(new Error());\n            }\n          };\n\n          XHR2.send();\n        });\n      });\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.nextPageToken = '';\n    }\n  }]);\n\n  return API;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new API());\n\n//# sourceURL=webpack:///./src/API/index.js?");

/***/ }),

/***/ "./src/PageControl/index.js":
/*!**********************************!*\
  !*** ./src/PageControl/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/PageControl/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ \"./src/model.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar navigateToPage = function navigateToPage(e) {\n  if (e.target.classList.contains('page-circle')) {\n    _model__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].changeStartItemId(e.target.value * _model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].itemsRenderCount);\n  }\n};\n\nvar PageControl =\n/*#__PURE__*/\nfunction () {\n  function PageControl() {\n    _classCallCheck(this, PageControl);\n\n    this.controlContainer = window.document.createElement('div');\n    this.controlContainer.className = 'control-container';\n    this.circles = [];\n    this.circlesCount = 1;\n    this.activePage = 0;\n    this.controlContainer.addEventListener('click', navigateToPage);\n    this.controlContainer.addEventListener('mousedown', this.showTooltip.bind(this));\n    this.controlContainer.addEventListener('mouseup', this.hideTooltip.bind(this));\n    this.controlContainer.addEventListener('mouseleave', this.hideTooltip.bind(this));\n  }\n\n  _createClass(PageControl, [{\n    key: \"render\",\n    value: function render() {\n      if (_model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].results && _model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].results.items) {\n        this.calculateCirclesCount();\n        this.appendCircles(0, this.circlesCount);\n      }\n\n      return this.controlContainer;\n    }\n  }, {\n    key: \"appendCircles\",\n    value: function appendCircles(startIndex, count) {\n      this.activePage = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getPageId\"])(_model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].startItemId, _model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].itemsRenderCount);\n\n      for (var i = startIndex; i < startIndex + count; i += 1) {\n        var pageCircle = document.createElement('div');\n        pageCircle.className = 'page-circle';\n        pageCircle.value = i;\n        if (this.activePage === i) pageCircle.classList.add('active');\n        pageCircle.innerHTML = i + 1;\n        this.circles.push(pageCircle);\n        this.controlContainer.appendChild(pageCircle);\n      }\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.controlContainer.innerHTML = '';\n      this.circles = [];\n    }\n  }, {\n    key: \"calculateCirclesCount\",\n    value: function calculateCirclesCount() {\n      this.circlesCount = Math.min(Math.floor(_model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].chunkSize - 1 / _model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].itemsRenderCount) || 1, 4);\n    }\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      this.calculateCirclesCount();\n      if (!_model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].results.items || !_model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].results.items.length) return;\n      var newStartPage = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getPageId\"])(_model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].startItemId, _model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].itemsRenderCount);\n\n      if (this.circlesCount === this.circles.length) {\n        if (newStartPage < this.circles[0].value + this.circlesCount && newStartPage > this.circles[0].value) {\n          newStartPage = this.circles[0].value;\n        }\n\n        if (newStartPage < this.circles[0].value) {\n          newStartPage = this.circles[0].value - this.circlesCount;\n        }\n      }\n\n      this.destroy();\n      this.appendCircles(newStartPage, this.circlesCount);\n    }\n  }, {\n    key: \"showTooltip\",\n    value: function showTooltip(e) {\n      if (e.target.value === undefined) return;\n      this.toolTip = window.document.createElement('div');\n      this.toolTip.className = 'tooltip';\n      this.toolTip.innerHTML = e.target.value + 1;\n      e.target.appendChild(this.toolTip);\n    }\n  }, {\n    key: \"hideTooltip\",\n    value: function hideTooltip() {\n      if (!this.toolTip) return;\n      this.toolTip.parentNode.removeChild(this.toolTip);\n      this.toolTip = null;\n    }\n  }]);\n\n  return PageControl;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageControl);\n\n//# sourceURL=webpack:///./src/PageControl/index.js?");

/***/ }),

/***/ "./src/PageControl/style.css":
/*!***********************************!*\
  !*** ./src/PageControl/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!./style.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/PageControl/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/PageControl/style.css?");

/***/ }),

/***/ "./src/ResultsContainer/index.js":
/*!***************************************!*\
  !*** ./src/ResultsContainer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/ResultsContainer/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VideoCard */ \"./src/VideoCard/index.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ \"./src/model.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar minSwipeWidth = 10;\n\nvar maxCountToDisplay = function maxCountToDisplay() {\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getMaxCountToDisplay\"])(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].cardWidth);\n};\n\nvar ResultsContainer =\n/*#__PURE__*/\nfunction () {\n  function ResultsContainer() {\n    _classCallCheck(this, ResultsContainer);\n\n    this.searchResults = {};\n    this.videoCards = [];\n    this.videoContainer = window.document.createElement('div');\n    this.videoContainer.className = 'video-container';\n    this.videoContainer.addEventListener('mousedown', this.startSwipe.bind(this));\n    this.videoContainer.addEventListener('touchstart', this.startSwipe.bind(this));\n    this.videoContainer.addEventListener('mouseup', this.doSwipe.bind(this));\n    this.videoContainer.addEventListener('touchend', this.doSwipe.bind(this));\n  }\n\n  _createClass(ResultsContainer, [{\n    key: \"render\",\n    value: function render() {\n      this.searchResults = _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].results || {};\n      this.effectiveWidth = Math.floor(document.documentElement.clientWidth / _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      this.frameElement = document.createElement('div');\n      this.frameElement.style.setProperty('--ew', this.effectiveWidth * _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      this.frameElement.style.setProperty('--cardew', this.effectiveWidth);\n      this.frameElement.className = 'video-frame';\n      this.appendResults(0);\n      this.videoContainer.appendChild(this.frameElement);\n      return this.videoContainer;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.videoContainer.innerHTML = '';\n      this.videoCards = [];\n    }\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      _model__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].changeItemsRenderCount(maxCountToDisplay());\n      this.effectiveWidth = Math.floor(window.innerWidth / _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      this.frameElement.style.removeProperty('--ew');\n      this.frameElement.style.setProperty('--ew', this.effectiveWidth * _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      this.frameElement.style.removeProperty('--cardew');\n      this.frameElement.style.setProperty('--cardew', this.effectiveWidth);\n      _model__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].changeStartItemId(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getPageId\"])(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId, _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount) * _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      this.frameElement.style.removeProperty('--pageId');\n      this.frameElement.style.setProperty('--pageId', Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getPageId\"])(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId, _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount));\n    }\n  }, {\n    key: \"appendResults\",\n    value: function appendResults(startResultId) {\n      for (var i = startResultId; i < (this.searchResults.items || []).length; i += 1) {\n        var element = new _VideoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.searchResults.items[i].snippet, this.searchResults.items[i].statistics, i, this.searchResults.items[i].id);\n        this.frameElement.appendChild(element.render());\n        this.videoCards.push(element);\n      }\n    }\n  }, {\n    key: \"startSwipe\",\n    value: function startSwipe(event) {\n      var e = event.changedTouches ? event.changedTouches[0] : event;\n      this.startXPoint = e.screenX;\n    }\n  }, {\n    key: \"doSwipe\",\n    value: function doSwipe(event) {\n      var e = event.changedTouches ? event.changedTouches[0] : event;\n      if (Math.abs(e.screenX - this.startSwipe) < minSwipeWidth) return;\n      var resultsCount = (_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].results.items || []).length;\n\n      if (e.screenX < this.startXPoint) {\n        _model__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].changeStartItemId(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId + 2 * _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount > resultsCount ? resultsCount - _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount : _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId + _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      }\n\n      if (e.screenX > this.startXPoint) {\n        _model__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].changeStartItemId(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId - _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount <= 0 ? 0 : _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId - _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount);\n      }\n\n      this.frameElement.style.setProperty('--pageId', Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getPageId\"])(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId, _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].itemsRenderCount));\n    }\n  }]);\n\n  return ResultsContainer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultsContainer);\n\n//# sourceURL=webpack:///./src/ResultsContainer/index.js?");

/***/ }),

/***/ "./src/ResultsContainer/style.css":
/*!****************************************!*\
  !*** ./src/ResultsContainer/style.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!./style.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/ResultsContainer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/ResultsContainer/style.css?");

/***/ }),

/***/ "./src/SearchInput/index.js":
/*!**********************************!*\
  !*** ./src/SearchInput/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/SearchInput/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ \"./src/model.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar SearchInput =\n/*#__PURE__*/\nfunction () {\n  function SearchInput() {\n    _classCallCheck(this, SearchInput);\n\n    this.element = window.document.createElement('div');\n    this.element.className = 'search-container';\n    this.element.innerHTML = '<i class=\"fas fa-search search-icon\"></i><input type=\"text\" class=\"search-input\" />';\n    this.element.addEventListener('keyup', function (e) {\n      if (e.key === 'Enter' && _model__WEBPACK_IMPORTED_MODULE_1__[\"state\"].value !== e.target.value) {\n        _model__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].changeSearchText(e.target.value);\n        _model__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].getResults();\n      }\n    });\n  }\n\n  _createClass(SearchInput, [{\n    key: \"render\",\n    value: function render() {\n      return this.element;\n    }\n  }]);\n\n  return SearchInput;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\n\n//# sourceURL=webpack:///./src/SearchInput/index.js?");

/***/ }),

/***/ "./src/SearchInput/style.css":
/*!***********************************!*\
  !*** ./src/SearchInput/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!./style.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/SearchInput/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/SearchInput/style.css?");

/***/ }),

/***/ "./src/VideoCard/index.js":
/*!********************************!*\
  !*** ./src/VideoCard/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/VideoCard/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar VideoCard =\n/*#__PURE__*/\nfunction () {\n  function VideoCard(snippet, statistics, index, id) {\n    _classCallCheck(this, VideoCard);\n\n    this.publishedAt = snippet.publishedAt;\n    this.title = snippet.title;\n    this.description = snippet.description;\n    this.channelTitle = snippet.channelTitle;\n    this.thumbnails = snippet.thumbnails;\n\n    var _ref = statistics || {};\n\n    this.viewCount = _ref.viewCount;\n    this.index = index;\n    this.id = id;\n    this.element = window.document.createElement('div');\n    this.element.className = 'video-card';\n    this.element.dataset.index = this.index;\n  }\n\n  _createClass(VideoCard, [{\n    key: \"render\",\n    value: function render() {\n      this.element.innerHTML = \"<section class=\\\"video-thumbnail\\\">\\n        <img class=\\\"thumbnail\\\" src=\\\"\".concat(this.thumbnails.medium.url, \"\\\">\\n        <div class=\\\"video-title\\\"><a href=\\\"https://www.youtube.com/watch?v=\").concat(this.id, \"\\\" target=\\\"_blank\\\">\").concat(this.title, \"</a></div>\\n        </section>\\n        <section class=\\\"video-info\\\">\\n            <div class=\\\"icon\\\"><i class=\\\"fas fa-male\\\"></i>\\n            </div>\\n            <div>\").concat(this.channelTitle, \"</div>\\n            <div class=\\\"icon\\\"><i class=\\\"fas fa-calendar-alt\\\"></i></div>\\n            <div>\").concat(new Date(this.publishedAt).toISOString().slice(0, 10), \"</div>\\n            <div class=\\\"icon\\\"><i class=\\\"far fa-eye\\\"></i></div>\\n            <div>\").concat(this.viewCount, \"</div>\\n        </section>\\n        <div class='video-description'>\").concat(this.description, \"</div>\\n        </section>\");\n      return this.element;\n    }\n  }]);\n\n  return VideoCard;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoCard);\n\n//# sourceURL=webpack:///./src/VideoCard/index.js?");

/***/ }),

/***/ "./src/VideoCard/style.css":
/*!*********************************!*\
  !*** ./src/VideoCard/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!./style.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/VideoCard/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/VideoCard/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ResultsContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsContainer */ \"./src/ResultsContainer/index.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput */ \"./src/SearchInput/index.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _PageControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageControl */ \"./src/PageControl/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n\nvar searchInput = new _SearchInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nwindow.document.body.appendChild(searchInput.render());\nvar videoContainer = new _ResultsContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nwindow.document.body.appendChild(videoContainer.render());\nvar pageControl = new _PageControl__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nwindow.document.body.appendChild(pageControl.render());\n_model__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].changeItemsRenderCount(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getMaxCountToDisplay\"])(_model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].cardWidth));\n_model__WEBPACK_IMPORTED_MODULE_2__[\"eventBus\"].eventCallbacks.searchChange = [function () {\n  videoContainer.destroy();\n  videoContainer.render();\n  _model__WEBPACK_IMPORTED_MODULE_2__[\"state\"].startItemId = 0;\n  pageControl.destroy();\n  pageControl.render();\n}];\n_model__WEBPACK_IMPORTED_MODULE_2__[\"eventBus\"].eventCallbacks.chunkLoaded = [function () {\n  videoContainer.appendResults(videoContainer.videoCards.length);\n}];\n_model__WEBPACK_IMPORTED_MODULE_2__[\"eventBus\"].eventCallbacks.resultsViewChange = [function () {\n  pageControl.rerender();\n  videoContainer.rerender();\n}];\nwindow.addEventListener('resize', function () {\n  videoContainer.rerender();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: state, eventBus, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventBus\", function() { return eventBus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/API/index.js\");\n\nvar state = {\n  results: {},\n  startItemId: 0,\n  itemsRenderCount: 1,\n  cardWidth: 320,\n  searchText: '',\n  chunkSize: 15,\n  isLoadingChunk: false\n};\nvar eventBus = {\n  eventCallbacks: {},\n  trigger: function trigger(eventType) {\n    if (this.eventCallbacks[eventType] === undefined || this.eventCallbacks[eventType].length === 0) {\n      return;\n    }\n\n    for (var i = 0; i < this.eventCallbacks[eventType].length; i += 1) {\n      if (typeof this.eventCallbacks[eventType][i] === 'function') {\n        this.eventCallbacks[eventType][i]();\n      }\n    }\n  }\n};\nvar actions = {\n  getResults: function getResults() {\n    _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clear();\n    _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getChunk(state.searchText, state.chunkSize).then(function (res) {\n      state.results = res;\n      eventBus.trigger('searchChange');\n      eventBus.trigger('resultsViewChange');\n    });\n  },\n  changeStartItemId: function changeStartItemId(newStartItemId) {\n    if (state.startItemId === newStartItemId) return;\n    state.startItemId = newStartItemId;\n    var loadedResultsCount = (state.results.items || []).length;\n\n    if (newStartItemId + state.chunkSize > loadedResultsCount && state.results.totalResults > loadedResultsCount) {\n      this.getMoreResults();\n    }\n\n    eventBus.trigger('resultsViewChange');\n  },\n  changeSearchText: function changeSearchText(value) {\n    state.searchText = value;\n  },\n  getMoreResults: function getMoreResults() {\n    if (state.isLoadingChunk) return;\n    state.isLoadingChunk = true;\n    _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getChunk(state.searchText, state.chunkSize).then(function (res) {\n      state.results.items = state.results.items.concat(res.items);\n      eventBus.trigger('chunkLoaded');\n      state.isLoadingChunk = false;\n    });\n  },\n  changeItemsRenderCount: function changeItemsRenderCount(newCount) {\n    if (state.itemsRenderCount === newCount) return;\n    state.itemsRenderCount = newCount;\n    eventBus.trigger('resultsViewChange');\n  }\n};\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getMaxCountToDisplay, getPageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxCountToDisplay\", function() { return getMaxCountToDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPageId\", function() { return getPageId; });\nfunction getMaxCountToDisplay(cardWidth) {\n  return Math.max(1, Math.min(Math.floor(window.visualViewport.width / cardWidth), 4));\n}\nfunction getPageId(startItemId, itemsPerPage) {\n  return Math.floor(startItemId / itemsPerPage);\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });