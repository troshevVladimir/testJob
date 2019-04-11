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
/******/ 	__webpack_require__.p = "./local/templates/z-template/javascripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** multi ./frontend/main.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./frontend/main.js */1);


/***/ }),
/* 1 */
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! modernizr-loader!json-loader!./.modernizrrc */ 2);
__webpack_require__(/*! ./polyfills.js */ 3);
__webpack_require__(/*! apply!callback!./components.js */ 4);

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/modernizr-loader!./node_modules/json-loader!./frontend/.modernizrrc ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

;(function(window){
var hadGlobal = 'Modernizr' in window;
var oldGlobal = window.Modernizr;
/*! modernizr 3.7.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-borderradius-boxshadow-cssanimations-cssremunit-flexbox-flexboxlegacy-flexboxtweener-flexwrap-svg-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-testallprops-testprop-teststyles-cssclassprefix:mdr- !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),w?C.className.baseVal=t:C.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)N(e,n)&&i(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),a=Modernizr[r[0]];if(2===r.length&&(a=a[r[1]]),void 0!==a)return Modernizr;t="function"==typeof t?t():t,1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&!1!==t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,l,u,c,f="modernizr",d=a("div"),p=s();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:f+(r+1),d.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=c,C.offsetHeight):d.parentNode.removeChild(d),!!l}function u(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function d(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===f(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,o,i){function s(){c&&(delete M.style,delete M.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var l=d(e,o);if(!r(l,"undefined"))return l}for(var c,f,m,h,v,g=["modernizr","tspan","samp"];!M.style&&g.length;)c=!0,M.modElem=a(g.shift()),M.style=M.modElem.style;for(m=e.length,f=0;f<m;f++)if(h=e[f],v=M.style[h],u(h,"-")&&(h=p(h)),M.style[h]!==n){if(i||r(o,"undefined"))return s(),"pfx"!==t||h;try{M.style[h]=o}catch(e){}if(M.style[h]!==v)return s(),"pfx"!==t||h}return s(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:(o=t[e[i]],r(o,"function")?h(o,n||t):o);return!1}function g(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+z.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,o,i):(s=(e+" "+E.join(a+" ")+a).split(" "),v(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var S=[],x={_version:"3.7.1",_config:{classPrefix:'mdr-',enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var b=[],C=t.documentElement,w="svg"===C.nodeName.toLowerCase(),_="Moz O ms Webkit",E=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=E;var T=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=T;var N;!function(){var e={}.hasOwnProperty;N=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=i});var z=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=z;var P=function(t){var r,o=T.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var a=0;a<o;a++){var s=T[a];if(s.toUpperCase()+"_"+r in i)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=P;var j=function(){function e(e,r){var o;return!!e&&(r&&"string"!=typeof r||(r=a(r||"div")),e="on"+e,o=e in r,!o&&t&&(r.setAttribute||(r=a("div")),r.setAttribute(e,""),o="function"==typeof r[e],r[e]!==n&&(r[e]=n),r.removeAttribute(e)),o)}var t=!("onblur"in C);return e}();x.hasEvent=j;var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"===(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=k;var F={elem:a("modernizr")};Modernizr._q.push(function(){delete F.elem});var M={style:F.elem.style};Modernizr._q.unshift(function(){delete M.style}),x.testAllProps=g;var A=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!==e.indexOf("-")&&(e=p(e)),t?g(e,t,n):g(e,"pfx"))},L=(x.prefixedCSS=function(e){var t=A(e);return t&&c(t)},function(e,t){var n=!1,r=a("div"),o=r.style;if(e in o){var i=E.length;for(o[e]=t,n=o[e];i--&&!n;)o[e]="-"+E[i]+"-"+t,n=o[e]}return""===n&&(n=!1),n});x.prefixedCSSValue=L,x.testAllProps=y;x.testProp=function(e,t,r){return m([e],n,t,r)},x.testStyles=l;w||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,u(t)}function i(e){var t=g[e[h]];return t||(t={},v++,e[h]=v,g[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;a<l;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=i(e);return!y.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){c=!0,f=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==d.shivCSS,supportsUnknownElements:f,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=y,u(t),"object"==typeof module&&module.exports&&(module.exports=y)}(void 0!==e?e:this,t),Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(e){}return/rem/.test(e.fontSize)}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),b.push((o?"":"no-")+s.join("-"))}}(),o(b),delete x.addTest,delete x.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
module.exports = window.Modernizr;
if (hadGlobal) { window.Modernizr = oldGlobal; }
else { delete window.Modernizr; }
})(window);

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./frontend/polyfills.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (!Array.from) {
	Array.from = function () {
		var toStr = Object.prototype.toString;
		var isCallable = function isCallable(fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function toInteger(value) {
			var number = new Number(value);
			if (isNaN(number)) {
				return 0;
			}
			if (number === 0 || !isFinite(number)) {
				return number;
			}
			return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function toLength(value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};

		// The length property of the from method is 1.
		return function from(arrayLike /*, mapFn, thisArg */) {
			// 1. Let C be the this value.
			var C = this;

			// 2. Let items be ToObject(arrayLike).
			var items = new Object(arrayLike);

			// 3. ReturnIfAbrupt(items).
			if (arrayLike == null) {
				throw new TypeError('Array.from requires an array-like object - not null or undefined');
			}

			// 4. If mapfn is undefined, then let mapping be false.
			var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
			var T;
			if (typeof mapFn !== 'undefined') {
				// 5. else
				// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
				if (!isCallable(mapFn)) {
					throw new TypeError('Array.from: when provided, the second argument must be a function');
				}

				// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
				if (arguments.length > 2) {
					T = arguments[2];
				}
			}

			// 10. Let lenValue be Get(items, "length").
			// 11. Let len be ToLength(lenValue).
			var len = toLength(items.length);

			// 13. If IsConstructor(C) is true, then
			// 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
			// 14. a. Else, Let A be ArrayCreate(len).
			var A = isCallable(C) ? new Object(new C(len)) : new Array(len);

			// 16. Let k be 0.
			var k = 0;
			// 17. Repeat, while k < len… (also steps a - h)
			var kValue;
			while (k < len) {
				kValue = items[k];
				if (mapFn) {
					A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					A[k] = kValue;
				}
				k += 1;
			}
			// 18. Let putStatus be Put(A, "length", len, true).
			A.length = len;
			// 20. Return A.
			return A;
		};
	}();
}

!function () {
	'use strict';
	if ('objectFit' in document.documentElement.style != !1) {
		return void (window.objectFitPolyfill = function () {
			return !1;
		});
	}var t = function t(_t) {
		var e = window.getComputedStyle(_t, null),
		    i = e.getPropertyValue('position'),
		    o = e.getPropertyValue('overflow'),
		    n = e.getPropertyValue('display');i && i !== 'static' || (_t.style.position = 'relative'), o !== 'hidden' && (_t.style.overflow = 'hidden'), n && n !== 'inline' || (_t.style.display = 'block'), _t.clientHeight === 0 && (_t.style.height = '100%'), _t.className.indexOf('object-fit-polyfill') === -1 && (_t.className = _t.className + ' object-fit-polyfill');
	},
	    e = function e(t) {
		var e = window.getComputedStyle(t, null),
		    i = { 'max-width': 'none', 'max-height': 'none', 'min-width': '0px', 'min-height': '0px', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto', 'margin-top': '0px', 'margin-right': '0px', 'margin-bottom': '0px', 'margin-left': '0px' };for (var o in i) {
			e.getPropertyValue(o) !== i[o] && (t.style[o] = i[o]);
		}
	},
	    i = function i(t, e, _i) {
		var o, n, l, a, d;if (_i = _i.split(' '), _i.length < 2 && (_i[1] = _i[0]), t === 'x') {
			o = _i[0], n = _i[1], l = 'left', a = 'right', d = e.clientWidth;
		} else {
			if (t !== 'y') {
				return;
			}o = _i[1], n = _i[0], l = 'top', a = 'bottom', d = e.clientHeight;
		}return o === l || n === l ? void (e.style[l] = '0') : o === a || n === a ? void (e.style[a] = '0') : o === 'center' || o === '50%' ? (e.style[l] = '50%', void (e.style['margin-' + l] = d / -2 + 'px')) : o.indexOf('%') >= 0 ? (o = parseInt(o), void (o < 50 ? (e.style[l] = o + '%', e.style['margin-' + l] = d * (o / -100) + 'px') : (o = 100 - o, e.style[a] = o + '%', e.style['margin-' + a] = d * (o / -100) + 'px'))) : void (e.style[l] = o);
	},
	    o = function o(_o) {
		var n = _o.dataset ? _o.dataset.objectFit : _o.getAttribute('data-object-fit'),
		    l = _o.dataset ? _o.dataset.objectPosition : _o.getAttribute('data-object-position');n = n || 'cover', l = l || '50% 50%';var a = _o.parentNode;t(a), e(_o), _o.style.position = 'absolute', _o.style.height = '100%', _o.style.width = 'auto', n === 'scale-down' && (_o.style.height = 'auto', _o.clientWidth < a.clientWidth && _o.clientHeight < a.clientHeight ? (i('x', _o, l), i('y', _o, l)) : (n = 'contain', _o.style.height = '100%')), n === 'none' ? (_o.style.width = 'auto', _o.style.height = 'auto', i('x', _o, l), i('y', _o, l)) : n === 'cover' && _o.clientWidth > a.clientWidth || n === 'contain' && _o.clientWidth < a.clientWidth ? (_o.style.top = '0', _o.style.marginTop = '0', i('x', _o, l)) : n !== 'scale-down' && (_o.style.width = '100%', _o.style.height = 'auto', _o.style.left = '0', _o.style.marginLeft = '0', i('y', _o, l));
	},
	    n = function n(t) {
		if (void 0 === t) {
			t = document.querySelectorAll('[data-object-fit]');
		} else if (t && t.nodeName) {
			t = [t];
		} else {
			if ((typeof t === 'undefined' ? 'undefined' : _typeof(t)) != 'object' || !t.length || !t[0].nodeName) {
				return !1;
			}t = t;
		}for (var e = 0; e < t.length; e++) {
			if (t[e].nodeName) {
				var i = t[e].nodeName.toLowerCase();i === 'img' ? t[e].complete ? o(t[e]) : t[e].addEventListener('load', function () {
					o(this);
				}) : i === 'video' && (t[e].readyState > 0 ? o(t[e]) : t[e].addEventListener('loadedmetadata', function () {
					o(this);
				}));
			}
		}return !0;
	};document.addEventListener('DOMContentLoaded', function () {
		n();
	}), window.addEventListener('resize', function () {
		n();
	}), window.objectFitPolyfill = n;
}();

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
	Object.defineProperty(Array.prototype, 'findIndex', {
		value: function value(predicate) {
			// 1. Let O be ? ToObject(this value).
			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}

			var o = Object(this);

			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;

			// 3. If IsCallable(predicate) is false, throw a TypeError exception.
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}

			// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
			var thisArg = arguments[1];

			// 5. Let k be 0.
			var k = 0;

			// 6. Repeat, while k < len
			while (k < len) {
				// a. Let Pk be ! ToString(k).
				// b. Let kValue be ? Get(O, Pk).
				// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
				// d. If testResult is true, return k.
				var kValue = o[k];
				if (predicate.call(thisArg, kValue, k, o)) {
					return k;
				}
				// e. Increase k by 1.
				k++;
			}

			// 7. Return -1.
			return -1;
		}
	});
}

if (!Object.assign) {
	Object.defineProperty(Object, 'assign', {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function value(target) {
			'use strict';

			if (target === undefined || target === null) {
				throw new TypeError('Cannot convert first argument to object');
			}

			var to = Object(target);
			for (var i = 1; i < arguments.length; i++) {
				var nextSource = arguments[i];
				if (nextSource === undefined || nextSource === null) {
					continue;
				}
				nextSource = Object(nextSource);

				var keysArray = Object.keys(Object(nextSource));
				for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
					var nextKey = keysArray[nextIndex];
					var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
					if (desc !== undefined && desc.enumerable) {
						to[nextKey] = nextSource[nextKey];
					}
				}
			}
			return to;
		}
	});
}

(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {
			return null;
		} else return this.parentElement.closest(selector);
	};
})(Element.prototype);

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.2.20171210
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

	// Full polyfill for browsers with no classList support
	// Including IE < Edge missing SVGElement.classList
	if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

		(function (view) {

			"use strict";

			if (!('Element' in view)) return;

			var classListProp = "classList",
			    protoProp = "prototype",
			    elemCtrProto = view.Element[protoProp],
			    objCtr = Object,
			    strTrim = String[protoProp].trim || function () {
				return this.replace(/^\s+|\s+$/g, "");
			},
			    arrIndexOf = Array[protoProp].indexOf || function (item) {
				var i = 0,
				    len = this.length;
				for (; i < len; i++) {
					if (i in this && this[i] === item) {
						return i;
					}
				}
				return -1;
			}
			// Vendors: please allow content code to instantiate DOMExceptions
			,
			    DOMEx = function DOMEx(type, message) {
				this.name = type;
				this.code = DOMException[type];
				this.message = message;
			},
			    checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
				if (token === "") {
					throw new DOMEx("SYNTAX_ERR", "The token must not be empty.");
				}
				if (/\s/.test(token)) {
					throw new DOMEx("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
				}
				return arrIndexOf.call(classList, token);
			},
			    ClassList = function ClassList(elem) {
				var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
				    classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
				    i = 0,
				    len = classes.length;
				for (; i < len; i++) {
					this.push(classes[i]);
				}
				this._updateClassName = function () {
					elem.setAttribute("class", this.toString());
				};
			},
			    classListProto = ClassList[protoProp] = [],
			    classListGetter = function classListGetter() {
				return new ClassList(this);
			};
			// Most DOMException implementations don't allow calling DOMException's toString()
			// on non-DOMExceptions. Error's toString() is sufficient here.
			DOMEx[protoProp] = Error[protoProp];
			classListProto.item = function (i) {
				return this[i] || null;
			};
			classListProto.contains = function (token) {
				return ~checkTokenAndGetIndex(this, token + "");
			};
			classListProto.add = function () {
				var tokens = arguments,
				    i = 0,
				    l = tokens.length,
				    token,
				    updated = false;
				do {
					token = tokens[i] + "";
					if (!~checkTokenAndGetIndex(this, token)) {
						this.push(token);
						updated = true;
					}
				} while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.remove = function () {
				var tokens = arguments,
				    i = 0,
				    l = tokens.length,
				    token,
				    updated = false,
				    index;
				do {
					token = tokens[i] + "";
					index = checkTokenAndGetIndex(this, token);
					while (~index) {
						this.splice(index, 1);
						updated = true;
						index = checkTokenAndGetIndex(this, token);
					}
				} while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.toggle = function (token, force) {
				var result = this.contains(token),
				    method = result ? force !== true && "remove" : force !== false && "add";

				if (method) {
					this[method](token);
				}

				if (force === true || force === false) {
					return force;
				} else {
					return !result;
				}
			};
			classListProto.replace = function (token, replacement_token) {
				var index = checkTokenAndGetIndex(token + "");
				if (~index) {
					this.splice(index, 1, replacement_token);
					this._updateClassName();
				}
			};
			classListProto.toString = function () {
				return this.join(" ");
			};

			if (objCtr.defineProperty) {
				var classListPropDesc = {
					get: classListGetter,
					enumerable: true,
					configurable: true
				};
				try {
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				} catch (ex) {
					// IE 8 doesn't support enumerable:true
					// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
					// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
					if (ex.number === undefined || ex.number === -0x7FF5EC54) {
						classListPropDesc.enumerable = false;
						objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
					}
				}
			} else if (objCtr[protoProp].__defineGetter__) {
				elemCtrProto.__defineGetter__(classListProp, classListGetter);
			}
		})(self);
	}

	// There is full or partial native classList support, so just check if we need
	// to normalize the add/remove and toggle APIs.

	(function () {
		"use strict";

		var testElement = document.createElement("_");

		testElement.classList.add("c1", "c2");

		// Polyfill for IE 10/11 and Firefox <26, where classList.add and
		// classList.remove exist but support only one argument at a time.
		if (!testElement.classList.contains("c2")) {
			var createMethod = function createMethod(method) {
				var original = DOMTokenList.prototype[method];

				DOMTokenList.prototype[method] = function (token) {
					var i,
					    len = arguments.length;

					for (i = 0; i < len; i++) {
						token = arguments[i];
						original.call(this, token);
					}
				};
			};
			createMethod('add');
			createMethod('remove');
		}

		testElement.classList.toggle("c3", false);

		// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		// support the second argument.
		if (testElement.classList.contains("c3")) {
			var _toggle = DOMTokenList.prototype.toggle;

			DOMTokenList.prototype.toggle = function (token, force) {
				if (1 in arguments && !this.contains(token) === !force) {
					return force;
				} else {
					return _toggle.call(this, token);
				}
			};
		}

		// replace() polyfill
		if (!("replace" in document.createElement("_").classList)) {
			DOMTokenList.prototype.replace = function (token, replacement_token) {
				var tokens = this.toString().split(" "),
				    index = tokens.indexOf(token + "");
				if (~index) {
					tokens = tokens.slice(index);
					this.remove.apply(this, tokens);
					this.add(replacement_token);
					this.add.apply(this, tokens.slice(1));
				}
			};
		}

		testElement = null;
	})();
}

/***/ }),
/* 4 */
/*!**************************************************************************************************************!*\
  !*** ./node_modules/apply-loader!./node_modules/callback-loader/callback-loader.js!./frontend/components.js ***!
  \**************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/callback-loader/callback-loader.js!./node_modules/babel-loader/lib??ref--1!./frontend/components.js */ 5);
module.exports = (req['default'] || req).apply(req, [])

/***/ }),
/* 5 */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/callback-loader/callback-loader.js!./node_modules/babel-loader/lib?{"cacheDirectory":"cache","presets":["es2015"],"plugins":["transform-es3-member-expression-literals","transform-es3-property-literals"]}!./frontend/components.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	__webpack_require__(/*! ./frontend/components/core/core.js */ 6);
__webpack_require__(/*! ./frontend/components/list/list.js */ 7);
__webpack_require__(/*! ./frontend/components/scheme/scheme.js */ 8);;
};

/***/ }),
/* 6 */
/*!******************************************!*\
  !*** ./frontend/components/core/core.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('work');

/***/ }),
/* 7 */
/*!******************************************!*\
  !*** ./frontend/components/list/list.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('list inited');

/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./frontend/components/scheme/scheme.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('scheme');

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map