if (!Array.from) {
	Array.from = (function () {
		var toStr = Object.prototype.toString;
		var isCallable = function (fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function (value) {
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
		var toLength = function (value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};

		// The length property of the from method is 1.
		return function from(arrayLike/*, mapFn, thisArg */) {
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
	}());
}

!(function () {
	'use strict';if ('objectFit' in document.documentElement.style != !1) {
		return void (window.objectFitPolyfill = function () {
			return !1;
		});
	} var t = function (t) {
			var e = window.getComputedStyle(t, null), i = e.getPropertyValue('position'), o = e.getPropertyValue('overflow'), n = e.getPropertyValue('display');i && i !== 'static' || (t.style.position = 'relative'), o !== 'hidden' && (t.style.overflow = 'hidden'), n && n !== 'inline' || (t.style.display = 'block'), t.clientHeight === 0 && (t.style.height = '100%'), t.className.indexOf('object-fit-polyfill') === -1 && (t.className = t.className + ' object-fit-polyfill');
		}, e = function (t) {
			var e = window.getComputedStyle(t, null), i = {'max-width': 'none', 'max-height': 'none', 'min-width': '0px', 'min-height': '0px', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto', 'margin-top': '0px', 'margin-right': '0px', 'margin-bottom': '0px', 'margin-left': '0px'};for (var o in i) {
				e.getPropertyValue(o) !== i[o] && (t.style[o] = i[o]);
			}
		}, i = function (t, e, i) {
			var o, n, l, a, d;if (i = i.split(' '), i.length < 2 && (i[1] = i[0]), t === 'x') {
				o = i[0], n = i[1], l = 'left', a = 'right', d = e.clientWidth;
			} else {
				if (t !== 'y') {
					return;
				}o = i[1], n = i[0], l = 'top', a = 'bottom', d = e.clientHeight;
			} return o === l || n === l ? void (e.style[l] = '0') : o === a || n === a ? void (e.style[a] = '0') : o === 'center' || o === '50%' ? (e.style[l] = '50%', void (e.style['margin-' + l] = d / -2 + 'px')) : o.indexOf('%') >= 0 ? (o = parseInt(o), void (o < 50 ? (e.style[l] = o + '%', e.style['margin-' + l] = d * (o / -100) + 'px') : (o = 100 - o, e.style[a] = o + '%', e.style['margin-' + a] = d * (o / -100) + 'px'))) : void (e.style[l] = o);
		}, o = function (o) {
			var n = o.dataset ? o.dataset.objectFit : o.getAttribute('data-object-fit'), l = o.dataset ? o.dataset.objectPosition : o.getAttribute('data-object-position');n = n || 'cover', l = l || '50% 50%';var a = o.parentNode;t(a), e(o), o.style.position = 'absolute', o.style.height = '100%', o.style.width = 'auto', n === 'scale-down' && (o.style.height = 'auto', o.clientWidth < a.clientWidth && o.clientHeight < a.clientHeight ? (i('x', o, l), i('y', o, l)) : (n = 'contain', o.style.height = '100%')), n === 'none' ? (o.style.width = 'auto', o.style.height = 'auto', i('x', o, l), i('y', o, l)) : n === 'cover' && o.clientWidth > a.clientWidth || n === 'contain' && o.clientWidth < a.clientWidth ? (o.style.top = '0', o.style.marginTop = '0', i('x', o, l)) : n !== 'scale-down' && (o.style.width = '100%', o.style.height = 'auto', o.style.left = '0', o.style.marginLeft = '0', i('y', o, l));
		}, n = function (t) {
			if (void 0 === t) {
				t = document.querySelectorAll('[data-object-fit]');
			} else if (t && t.nodeName) {
				t = [t];
			} else {
				if (typeof t != 'object' || !t.length || !t[0].nodeName) {
					return !1;
				}t = t;
			} for (var e = 0;e < t.length;e++) {
				if (t[e].nodeName) {
					var i = t[e].nodeName.toLowerCase();i === 'img' ? t[e].complete ? o(t[e]) : t[e].addEventListener('load', function () {
						o(this);
					}) : i === 'video' && (t[e].readyState > 0 ? o(t[e]) : t[e].addEventListener('loadedmetadata', function () {
						o(this);
					}));
				}
			} return !0;
		};document.addEventListener('DOMContentLoaded', function () {
			n();
		}), window.addEventListener('resize', function () {
			n();
		}), window.objectFitPolyfill = n;
}());

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
	Object.defineProperty(Array.prototype, 'findIndex', {
		value: function (predicate) {
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
		value: function (target) {
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

(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
      };
}(Element.prototype));

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
if (
	   !("classList" in document.createElement("_")) 
	|| document.createElementNS
	&& !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))
) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "The token must not be empty."
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "The token must not contain space characters."
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
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
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (!~checkTokenAndGetIndex(this, token)) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (~index) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

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
}
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
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

}(self));

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
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

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

		DOMTokenList.prototype.toggle = function(token, force) {
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
			var
				  tokens = this.toString().split(" ")
				, index = tokens.indexOf(token + "")
			;
			if (~index) {
				tokens = tokens.slice(index);
				this.remove.apply(this, tokens);
				this.add(replacement_token);
				this.add.apply(this, tokens.slice(1));
			}
		}
	}

	testElement = null;
}());

}