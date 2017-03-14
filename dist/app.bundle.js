/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//webpack imports
	window.$ = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(9);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(13);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(15);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports) {

	// MyAuthToken.js
	//
	// object to encapsulate retrieval of an authorization code for the viewing service.  After declaring
	// a global instance, you can repeatedly call value() whenever you need the token to pass to an API
	// call.  It will keep track of the expiration of the token and referesh it when necessary.
	//
	// NOTE: there is another way to accomplish this by just calling the API function with a token without
	// worrying about whether it has expired, and then if it returns "Invalid Token", then get a new token
	// and retry.  This is possible with jQuery, but only works with the .success()/.error() constructs and
	// not with .done(), .fail() (at least not without a lot of convoluted extra work).  For now, I am
	// happier doing it this way, but am open to suggestions on best practices.
	//
	// Jim Awe
	// Autodesk, Inc.


	// CONS MyAuthToken():
	// Make a call to the AuthTokenServer to get our authToken to pass on to the View and Data APIs.
	// This is setup currently to call my AuthTokenService.  If you want to add your own models to this project
	// then you will also have to have your own token service.  Adjust lines below appropriately to point
	// to your service (either locally, or deployed on something like Heroku).


	function MyAuthToken(env) {
	    if (env === "PROD") {
	        //this.tokenService = "http://localhost:5000/auth";
	        this.tokenService = "https://salty-caverns-3017.herokuapp.com/auth";
	    }
	    else if (env === "STG") {
	        //this.tokenService = "http://localhost:5000/auth-stg";
	        this.tokenService = "https://salty-caverns-3017.herokuapp.com/auth-stg";
	    }
	    else if (env === "DEV") {
	        //this.tokenService = "http://localhost:5000/auth-dev";
	        this.tokenService = "https://salty-caverns-3017.herokuapp.com/auth-dev";
	    }
	    else {
	        alert("DEVELOPER ERROR: No valid environment set for MyAuthToken()");
	    }

	    this.token = "";
	    this.expires_in = 0;
	    this.timestamp = 0;
	}

	// FUNC value():
	// return the value of the token

	MyAuthToken.prototype.value = function()
	{
	        // if we've never retrieved it, do it the first time
	    if (this.token === "") {
	        console.log("AUTH TOKEN: Getting for first time...");
	        this.get();
	    }
	    else {
	            // get current timestamp and see if we've expired yet
	        var curTimestamp = Math.round(new Date() / 1000);   // time in seconds
	        var secsElapsed = curTimestamp - this.timestamp;

	        if (secsElapsed > (this.expires_in - 10)) { // if we are within 10 secs of expiring, get new token
	            console.log("AUTH TOKEN: expired, refreshing...");
	            this.get();
	        }
	        else {
	            var secsLeft = this.expires_in - secsElapsed;
	            console.log("AUTH TOKEN: still valid (" + secsLeft + " secs)");
	        }
	    }

	    return this.token;
	};

	// FUNC get():
	// get the token from the Authentication service and cache it, along with the expiration time

	MyAuthToken.prototype.get = function()
	{
	    var retVal = "";
	    var expires_in = 0;

	    console.log("getting from url " + this.tokenService );

	    var jqxhr = $.ajax({
	        url: this.tokenService,
	        type: 'GET',
	        async: false,
	        success: function(ajax_data) {
	            console.log("AUTH TOKEN: " + ajax_data.access_token);
	            retVal = ajax_data.access_token;  // NOTE: this only works because we've made the ajax call Synchronous (and "this" is not valid in this scope!)
	            expires_in = ajax_data.expires_in;

	        },
	        error: function(jqXHR, textStatus) {
	            console.log(jqXHR);
	            alert("AUTH TOKEN: Failed to get new auth token!");
	        }
	    });

	    this.token = retVal;
	    this.expires_in = expires_in;
	    this.timestamp = Math.round(new Date() / 1000);  // get time in seconds when we retrieved this token
	};

	module.exports = {
	  MyAuthToken
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function e(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function r(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function o(){}function a(n){return ia+n in this}function c(n){return n=ia+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===oa&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===oa)return!1;return!0}function h(){}function g(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=aa.length;r>e;++e){var u=aa[e]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new o;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function y(){Zo.event.preventDefault()}function x(){for(var n,t=Zo.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,e=0,r=arguments.length;++e<r;)t[arguments[e]]=m(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Zo.event;u.target=n,Zo.event=u,t[u.type].apply(e,r)}finally{Zo.event=i}}},t}function _(n){return sa(n,pa),n}function b(n){return"function"==typeof n?n:function(){return la(n,this)}}function w(n){return"function"==typeof n?n:function(){return fa(n,this)}}function S(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Zo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Zo.requote(n)+"(?:\\s+|$)","g")}function A(n){return(n+"").trim().split(/^|\s+/)}function C(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=A(n).map(N);var u=n.length;return"function"==typeof t?r:e}function N(n){var t=E(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",k(u+" "+n))):e.setAttribute("class",k(u.replace(t," ")))}}function z(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function L(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function T(n){return"function"==typeof n?n:(n=Zo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function q(n){return{__data__:n}}function R(n){return function(){return ga(this,n)}}function D(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function P(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function U(n){return sa(n,da),n}function j(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Xo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Zo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ya.get(n);return s&&(n=s,c=Y),a?t?u:r:t?v:i}function O(n,t){return function(e){var r=Zo.event;Zo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Zo.event=r}}}function Y(n,t){var e=O(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function I(){var n=".dragsuppress-"+ ++Ma,t="click"+n,e=Zo.select(Wo).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(xa){var r=Bo.style,u=r[xa];r[xa]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),xa&&(r[xa]=u),i&&(e.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>_a&&(Wo.scrollX||Wo.scrollY)){e=Zo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();_a=!(u.f||u.e),e.remove()}return _a?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function V(){return Zo.event.changedTouches[0].identifier}function X(){return Zo.event.target}function $(){return Wo}function B(n){return n>0?1:0>n?-1:0}function W(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function J(n){return n>1?0:-1>n?ba:Math.acos(n)}function G(n){return n>1?Sa:-1>n?-Sa:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function et(){}function rt(n,t,e){return this instanceof rt?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof rt?new rt(n.h,n.s,n.l):mt(""+n,yt,rt):new rt(n,t,e)}function ut(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new gt(u(n+120),u(n),u(n-120))}function it(n,t,e){return this instanceof it?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof it?new it(n.h,n.c,n.l):n instanceof at?st(n.l,n.a,n.b):st((n=xt((n=Zo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new it(n,t,e)}function ot(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new at(e,Math.cos(n*=Aa)*t,Math.sin(n)*t)}function at(n,t,e){return this instanceof at?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof at?new at(n.l,n.a,n.b):n instanceof it?ot(n.l,n.c,n.h):xt((n=gt(n)).r,n.g,n.b):new at(n,t,e)}function ct(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=lt(u)*ja,r=lt(r)*Ha,i=lt(i)*Fa,new gt(ht(3.2404542*u-1.5371385*r-.4985314*i),ht(-.969266*u+1.8760108*r+.041556*i),ht(.0556434*u-.2040259*r+1.0572252*i))}function st(n,t,e){return n>0?new it(Math.atan2(e,t)*Ca,Math.sqrt(t*t+e*e),n):new it(0/0,0/0,n)}function lt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function ft(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function ht(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function gt(n,t,e){return this instanceof gt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof gt?new gt(n.r,n.g,n.b):mt(""+n,gt,ut):new gt(n,t,e)}function pt(n){return new gt(n>>16,255&n>>8,255&n)}function vt(n){return pt(n)+""}function dt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function mt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(_t(u[0]),_t(u[1]),_t(u[2]))}return(i=Ia.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function yt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new rt(r,u,c)}function xt(n,t,e){n=Mt(n),t=Mt(t),e=Mt(e);var r=ft((.4124564*n+.3575761*t+.1804375*e)/ja),u=ft((.2126729*n+.7151522*t+.072175*e)/Ha),i=ft((.0193339*n+.119192*t+.9503041*e)/Fa);return at(116*u-16,500*(r-u),200*(u-i))}function Mt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function _t(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function bt(n){return"function"==typeof n?n:function(){return n}}function wt(n){return n}function St(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),kt(t,e,n,r)}}function kt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Zo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Wo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Zo.event;Zo.event=n;try{o.progress.call(i,c)}finally{Zo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Xo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Zo.rebind(i,o,"on"),null==r?i:i.get(Et(r))}function Et(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function At(){var n=Ct(),t=Nt()-n;t>24?(isFinite(t)&&(clearTimeout($a),$a=setTimeout(At,t)),Xa=0):(Xa=1,Wa(At))}function Ct(){var n=Date.now();for(Ba=Za;Ba;)n>=Ba.t&&(Ba.f=Ba.c(n-Ba.t)),Ba=Ba.n;return n}function Nt(){for(var n,t=Za,e=1/0;t;)t.f?t=n?n.n=t.n:Za=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Va=n,e}function zt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Lt(n,t){var e=Math.pow(10,3*ua(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Tt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:wt;return function(n){var e=Ga.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=Ka.get(g)||qt;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Zo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function qt(n){return n+""}function Rt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Dt(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new nc(e-1)),1),e}function i(n,e){return t(n=new nc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{nc=Rt;var r=new Rt;return r._=n,o(r,t,e)}finally{nc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Pt(n);return c.floor=c,c.round=Pt(r),c.ceil=Pt(u),c.offset=Pt(i),c.range=a,n}function Pt(n){return function(t,e){try{nc=Rt;var r=new Rt;return r._=t,n(r,e)._}finally{nc=Date}}}function Ut(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=ec[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&nc!==Rt,o=new(i?Rt:nc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in ec?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{nc=Rt;var t=new nc;return t._=n,r(t)}finally{nc=Date}}var r=t(n);return e.parse=function(n){try{nc=Rt;var t=r.parse(n);return t&&t._}finally{nc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=re;var x=Zo.map(),M=Ht(v),_=Ft(v),b=Ht(d),w=Ft(d),S=Ht(m),k=Ft(m),E=Ht(y),A=Ft(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return jt(n.getDate(),t,2)},e:function(n,t){return jt(n.getDate(),t,2)},H:function(n,t){return jt(n.getHours(),t,2)},I:function(n,t){return jt(n.getHours()%12||12,t,2)},j:function(n,t){return jt(1+Qa.dayOfYear(n),t,3)},L:function(n,t){return jt(n.getMilliseconds(),t,3)},m:function(n,t){return jt(n.getMonth()+1,t,2)},M:function(n,t){return jt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return jt(n.getSeconds(),t,2)},U:function(n,t){return jt(Qa.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return jt(Qa.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return jt(n.getFullYear()%100,t,2)},Y:function(n,t){return jt(n.getFullYear()%1e4,t,4)},Z:te,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Wt,e:Wt,H:Gt,I:Gt,j:Jt,L:ne,m:Bt,M:Kt,p:l,S:Qt,U:Yt,w:Ot,W:It,x:c,X:s,y:Vt,Y:Zt,Z:Xt,"%":ee};return t}function jt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Ht(n){return new RegExp("^(?:"+n.map(Zo.requote).join("|")+")","i")}function Ft(n){for(var t=new o,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Ot(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Yt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function It(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Zt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Vt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.y=$t(+r[0]),e+r[0].length):-1}function Xt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=-t,e+5):-1}function $t(n){return n+(n>68?1900:2e3)}function Bt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Wt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Jt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function Gt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Kt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Qt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ne(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function te(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(ua(t)/60),u=ua(t)%60;return e+jt(r,"0",2)+jt(u,"0",2)}function ee(n,t,e){uc.lastIndex=0;var r=uc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function re(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ue(){}function ie(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function oe(n,t){n&&cc.hasOwnProperty(n.type)&&cc[n.type](n,t)}function ae(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ce(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)ae(n[e],t,1);t.polygonEnd()}function se(){function n(n,t){n*=Aa,t=t*Aa/2+ba/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);lc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;fc.point=function(o,a){fc.point=n,r=(t=o)*Aa,u=Math.cos(a=(e=a)*Aa/2+ba/4),i=Math.sin(a)},fc.lineEnd=function(){n(t,e)}}function le(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function fe(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function he(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function ge(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function pe(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function ve(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function de(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function me(n,t){return ua(n[0]-t[0])<ka&&ua(n[1]-t[1])<ka}function ye(n,t){n*=Aa;var e=Math.cos(t*=Aa);xe(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function xe(n,t,e){++hc,pc+=(n-pc)/hc,vc+=(t-vc)/hc,dc+=(e-dc)/hc}function Me(){function n(n,u){n*=Aa;var i=Math.cos(u*=Aa),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);gc+=s,mc+=s*(t+(t=o)),yc+=s*(e+(e=a)),xc+=s*(r+(r=c)),xe(t,e,r)}var t,e,r;wc.point=function(u,i){u*=Aa;var o=Math.cos(i*=Aa);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),wc.point=n,xe(t,e,r)}}function _e(){wc.point=ye}function be(){function n(n,t){n*=Aa;var e=Math.cos(t*=Aa),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-J(g)/h,v=Math.atan2(h,g);Mc+=p*s,_c+=p*l,bc+=p*f,gc+=v,mc+=v*(r+(r=o)),yc+=v*(u+(u=a)),xc+=v*(i+(i=c)),xe(r,u,i)}var t,e,r,u,i;wc.point=function(o,a){t=o,e=a,wc.point=n,o*=Aa;var c=Math.cos(a*=Aa);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),xe(r,u,i)},wc.lineEnd=function(){n(t,e),wc.lineEnd=_e,wc.point=ye}}function we(){return!0}function Se(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(me(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Ee(e,n,null,!0),s=new Ee(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new Ee(r,n,null,!1),s=new Ee(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),ke(i),ke(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ke(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Ee(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ae(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Ce))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Zo.merge(g);var n=Le(m,p);g.length?(_||(i.polygonStart(),_=!0),Se(g,ze,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Ne(),M=t(x),_=!1;return y}}function Ce(n){return n.length>1}function Ne(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:v,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function ze(n,t){return((n=n.x)[0]<0?n[1]-Sa-ka:Sa-n[1])-((t=t.x)[0]<0?t[1]-Sa-ka:Sa-t[1])}function Le(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;lc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+ba/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+ba/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>ba,k=p*x;if(lc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*wa:_,S^h>=e^m>=e){var E=he(le(f),le(n));ve(E);var A=he(u,E);ve(A);var C=(S^_>=0?-1:1)*G(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-ka>i||ka>i&&0>lc)^1&o}function Te(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?ba:-ba,c=ua(i-e);ua(c-ba)<ka?(n.point(e,r=(r+o)/2>0?Sa:-Sa),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=ba&&(ua(e-u)<ka&&(e-=u*ka),ua(i-a)<ka&&(i-=a*ka),r=qe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function qe(n,t,e,r){var u,i,o=Math.sin(n-e);return ua(o)>ka?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Re(n,t,e,r){var u;if(null==n)u=e*Sa,r.point(-ba,u),r.point(0,u),r.point(ba,u),r.point(ba,0),r.point(ba,-u),r.point(0,-u),r.point(-ba,-u),r.point(-ba,0),r.point(-ba,u);else if(ua(n[0]-t[0])>ka){var i=n[0]<t[0]?ba:-ba;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function De(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?ba:-ba),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(me(e,g)||me(p,g))&&(p[0]+=ka,p[1]+=ka,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&me(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=le(n),u=le(t),o=[1,0,0],a=he(r,u),c=fe(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=he(o,a),p=pe(o,f),v=pe(a,h);ge(p,v);var d=g,m=fe(p,d),y=fe(d,d),x=m*m-y*(fe(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=pe(d,(-m-M)/y);if(ge(_,p),_=de(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ua(A-ba)<ka,N=C||ka>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ua(_[0]-w)<ka?k:E):k<=_[1]&&_[1]<=E:A>ba^(w<=_[0]&&_[0]<=S)){var z=pe(d,(-m+M)/y);return ge(z,p),[_,de(z)]}}}function u(t,e){var r=o?n:ba-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ua(i)>ka,c=sr(n,6*Aa);return Ae(t,e,c,o?[0,-n]:[-ba,n-ba])}function Pe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Ue(n,t,e,r){function u(r,u){return ua(r[0]-n)<ka?u>0?0:3:ua(r[0]-e)<ka?u>0?2:1:ua(r[1]-t)<ka?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&W(s,i,n)>0&&++t:i[1]<=r&&W(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-kc,Math.min(kc,n)),t=Math.max(-kc,Math.min(kc,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=Ne(),C=Pe(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Zo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Se(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function je(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function He(n){var t=0,e=ba/3,r=tr(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ba/180,e=n[1]*ba/180):[180*(t/ba),180*(e/ba)]},u}function Fe(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,G((i-(n*n+e*e)*u*u)/(2*u))]},e}function Oe(){function n(n,t){Ac+=u*n-r*t,r=n,u=t}var t,e,r,u;Tc.point=function(i,o){Tc.point=n,t=r=i,e=u=o},Tc.lineEnd=function(){n(t,e)}}function Ye(n,t){Cc>n&&(Cc=n),n>zc&&(zc=n),Nc>t&&(Nc=t),t>Lc&&(Lc=t)}function Ie(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Ze(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Ze(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Ze(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Ve(n,t){pc+=n,vc+=t,++dc}function Xe(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);mc+=o*(t+n)/2,yc+=o*(e+r)/2,xc+=o,Ve(t=n,e=r)}var t,e;Rc.point=function(r,u){Rc.point=n,Ve(t=r,e=u)}}function $e(){Rc.point=Ve}function Be(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);mc+=o*(r+n)/2,yc+=o*(u+t)/2,xc+=o,o=u*n-r*t,Mc+=o*(r+n),_c+=o*(u+t),bc+=3*o,Ve(r=n,u=t)}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,Ve(t=r=i,e=u=o)},Rc.lineEnd=function(){n(t,e)}}function We(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,wa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function Je(n){function t(n){return(a?r:e)(n)}function e(t){return Qe(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=le([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ua(ua(w)-1)<ka||ua(r-h)<ka?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-e,T=x*z-y*L;(T*T/M>i||ua((y*z+x*L)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Aa),a=16;
	return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function Ge(n){var t=Je(function(t,e){return n([t*Ca,e*Ca])});return function(n){return er(t(n))}}function Ke(n){this.stream=n}function Qe(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function nr(n){return tr(function(){return n})()}function tr(n){function t(n){return n=a(n[0]*Aa,n[1]*Aa),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ca,n[1]*Ca]}function r(){a=je(o=ir(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=Je(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Sc,_=wt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=er(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Sc):De((b=+n)*Aa),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Ue(n[0][0],n[0][1],n[1][0],n[1][1]):wt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Aa,d=n[1]%360*Aa,r()):[v*Ca,d*Ca]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Aa,y=n[1]%360*Aa,x=n.length>2?n[2]%360*Aa:0,r()):[m*Ca,y*Ca,x*Ca]},Zo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function er(n){return Qe(n,function(t,e){n.point(t*Aa,e*Aa)})}function rr(n,t){return[n,t]}function ur(n,t){return[n>ba?n-wa:-ba>n?n+wa:n,t]}function ir(n,t,e){return n?t||e?je(ar(n),cr(t,e)):ar(n):t||e?cr(t,e):ur}function or(n){return function(t,e){return t+=n,[t>ba?t-wa:-ba>t?t+wa:t,e]}}function ar(n){var t=or(n);return t.invert=or(-n),t}function cr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),G(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),G(l*r-a*u)]},e}function sr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=lr(e,u),i=lr(e,i),(o>0?i>u:u>i)&&(u+=o*wa)):(u=n+o*wa,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=de([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function lr(n,t){var e=le(t);e[0]-=n,ve(e);var r=J(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-ka)%(2*Math.PI)}function fr(n,t,e){var r=Zo.range(n,t-ka,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function hr(n,t,e){var r=Zo.range(n,t-ka,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function gr(n){return n.source}function pr(n){return n.target}function vr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(tt(r-t)+u*o*tt(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ca,Math.atan2(o,Math.sqrt(r*r+u*u))*Ca]}:function(){return[n*Ca,t*Ca]};return p.distance=h,p}function dr(){function n(n,u){var i=Math.sin(u*=Aa),o=Math.cos(u),a=ua((n*=Aa)-t),c=Math.cos(a);Dc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Pc.point=function(u,i){t=u*Aa,e=Math.sin(i*=Aa),r=Math.cos(i),Pc.point=n},Pc.lineEnd=function(){Pc.point=Pc.lineEnd=v}}function mr(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function yr(n,t){function e(n,t){o>0?-Sa+ka>t&&(t=-Sa+ka):t>Sa-ka&&(t=Sa-ka);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ba/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=B(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Sa]},e):Mr}function xr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ua(u)<ka?rr:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-B(u)*Math.sqrt(n*n+e*e)]},e)}function Mr(n,t){return[n,Math.log(Math.tan(ba/4+t/2))]}function _r(n){var t,e=nr(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=ba*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function br(n,t){return[Math.log(Math.tan(ba/4+t/2)),-n]}function wr(n){return n[0]}function Sr(n){return n[1]}function kr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&W(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function Er(n,t){return n[0]-t[0]||n[1]-t[1]}function Ar(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Cr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function Nr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function zr(){Gr(this),this.edge=this.site=this.circle=null}function Lr(n){var t=Bc.pop()||new zr;return t.site=n,t}function Tr(n){Yr(n),Vc.remove(n),Bc.push(n),Gr(n)}function qr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Tr(n);for(var c=i;c.circle&&ua(e-c.circle.x)<ka&&ua(r-c.circle.cy)<ka;)i=c.P,a.unshift(c),Tr(c),c=i;a.unshift(c),Yr(c);for(var s=o;s.circle&&ua(e-s.circle.x)<ka&&ua(r-s.circle.cy)<ka;)o=s.N,a.push(s),Tr(s),s=o;a.push(s),Yr(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Br(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Xr(c.site,s.site,null,u),Or(c),Or(s)}function Rr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Vc._;a;)if(r=Dr(a,o)-i,r>ka)a=a.L;else{if(u=i-Pr(a,o),!(u>ka)){r>-ka?(t=a.P,e=a):u>-ka?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Lr(n);if(Vc.insert(t,c),t||e){if(t===e)return Yr(t),e=Lr(t.site),Vc.insert(c,e),c.edge=e.edge=Xr(t.site,c.site),Or(t),Or(e),void 0;if(!e)return c.edge=Xr(t.site,c.site),void 0;Yr(t),Yr(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Br(e.edge,s,p,M),c.edge=Xr(s,n,null,M),e.edge=Xr(n,p,null,M),Or(t),Or(e)}}function Dr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Pr(n,t){var e=n.N;if(e)return Dr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ur(n){this.site=n,this.edges=[]}function jr(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Zc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(ua(r-t)>ka||ua(u-e)>ka)&&(a.splice(o,0,new Wr($r(i.site,l,ua(r-f)<ka&&p-u>ka?{x:f,y:ua(t-f)<ka?e:p}:ua(u-p)<ka&&h-r>ka?{x:ua(e-p)<ka?t:h,y:p}:ua(r-h)<ka&&u-g>ka?{x:h,y:ua(t-h)<ka?e:g}:ua(u-g)<ka&&r-f>ka?{x:ua(e-g)<ka?t:f,y:g}:null),i.site,null)),++c)}function Hr(n,t){return t.angle-n.angle}function Fr(){Gr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Or(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Ea)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Wc.pop()||new Fr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=$c._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}$c.insert(y,m),y||(Xc=m)}}}}function Yr(n){var t=n.circle;t&&(t.P||(Xc=t.N),$c.remove(t),Wc.push(t),Gr(t),n.circle=null)}function Ir(n){for(var t,e=Ic,r=Pe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Zr(t,n)||!r(t)||ua(t.a.x-t.b.x)<ka&&ua(t.a.y-t.b.y)<ka)&&(t.a=t.b=null,e.splice(u,1))}function Zr(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Vr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Xr(n,t,e,r){var u=new Vr(n,t);return Ic.push(u),e&&Br(u,n,t,e),r&&Br(u,t,n,r),Zc[n.i].edges.push(new Wr(u,n,t)),Zc[t.i].edges.push(new Wr(u,t,n)),u}function $r(n,t,e){var r=new Vr(n,null);return r.a=t,r.b=e,Ic.push(r),r}function Br(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Wr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function Jr(){this._=null}function Gr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function Kr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Qr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function nu(n){for(;n.L;)n=n.L;return n}function tu(n,t){var e,r,u,i=n.sort(eu).pop();for(Ic=[],Zc=new Array(n.length),Vc=new Jr,$c=new Jr;;)if(u=Xc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Zc[i.i]=new Ur(i),Rr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;qr(u.arc)}t&&(Ir(t),jr(t));var o={cells:Zc,edges:Ic};return Vc=$c=Ic=Zc=null,o}function eu(n,t){return t.y-n.y||t.x-n.x}function ru(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function uu(n){return n.x}function iu(n){return n.y}function ou(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function au(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&au(n,c[0],e,r,o,a),c[1]&&au(n,c[1],o,r,u,a),c[2]&&au(n,c[2],e,a,o,i),c[3]&&au(n,c[3],o,a,u,i)}}function cu(n,t){n=Zo.rgb(n),t=Zo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+dt(Math.round(e+i*n))+dt(Math.round(r+o*n))+dt(Math.round(u+a*n))}}function su(n,t){var e,r={},u={};for(e in n)e in t?r[e]=hu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function lu(n,t){return t-=n=+n,function(e){return n+t*e}}function fu(n,t){var e,r,u,i=Gc.lastIndex=Kc.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=Gc.exec(n))&&(r=Kc.exec(t));)(u=r.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:lu(e,r)})),i=Kc.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function hu(n,t){for(var e,r=Zo.interpolators.length;--r>=0&&!(e=Zo.interpolators[r](n,t)););return e}function gu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(hu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function pu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function vu(n){return function(t){return 1-n(1-t)}}function du(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function mu(n){return n*n}function yu(n){return n*n*n}function xu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Mu(n){return function(t){return Math.pow(t,n)}}function _u(n){return 1-Math.cos(n*Sa)}function bu(n){return Math.pow(2,10*(n-1))}function wu(n){return 1-Math.sqrt(1-n*n)}function Su(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/wa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*wa/t)}}function ku(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Eu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Au(n,t){n=Zo.hcl(n),t=Zo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ot(e+i*n,r+o*n,u+a*n)+""}}function Cu(n,t){n=Zo.hsl(n),t=Zo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ut(e+i*n,r+o*n,u+a*n)+""}}function Nu(n,t){n=Zo.lab(n),t=Zo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function zu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Lu(n){var t=[n.a,n.b],e=[n.c,n.d],r=qu(t),u=Tu(t,e),i=qu(Ru(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ca,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ca:0}function Tu(n,t){return n[0]*t[0]+n[1]*t[1]}function qu(n){var t=Math.sqrt(Tu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Ru(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Du(n,t){var e,r=[],u=[],i=Zo.transform(n),o=Zo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:lu(a[0],c[0])},{i:3,x:lu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:lu(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:lu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:lu(g[0],p[0])},{i:e-2,x:lu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Pu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Uu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function ju(n){for(var t=n.source,e=n.target,r=Fu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Hu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Fu(n,t){if(n===t)return n;for(var e=Hu(n),r=Hu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Ou(n){n.fixed|=2}function Yu(n){n.fixed&=-7}function Iu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Zu(n){n.fixed&=-5}function Vu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Vu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Xu(n,t){return Zo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Ku,n}function $u(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Bu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function Wu(n){return n.children}function Ju(n){return n.value}function Gu(n,t){return t.value-n.value}function Ku(n){return Zo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Qu(n){return n.x}function ni(n){return n.y}function ti(n,t,e){n.y0=t,n.y=e}function ei(n){return Zo.range(n.length)}function ri(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ui(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ii(n){return n.reduce(oi,0)}function oi(n,t){return n+t[1]}function ai(n,t){return ci(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ci(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function si(n){return[Zo.min(n),Zo.max(n)]}function li(n,t){return n.value-t.value}function fi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function hi(n,t){n._pack_next=t,t._pack_prev=n}function gi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function pi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(vi),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],yi(r,u,i),t(i),fi(r,i),r._pack_prev=i,fi(i,u),u=r._pack_next,o=3;s>o;o++){yi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(gi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!gi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?hi(r,u=a):hi(r=c,u),o--):(fi(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(di)}}function vi(n){n._pack_next=n._pack_prev=n}function di(n){delete n._pack_next,delete n._pack_prev}function mi(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)mi(u[i],t,e,r)}function yi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function xi(n,t){return n.parent==t.parent?1:2}function Mi(n){var t=n.children;return t.length?t[0]:n.t}function _i(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function bi(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function wi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Si(n,t,e){return n.a.parent===t.parent?n.a:e}function ki(n){return 1+Zo.max(n,function(n){return n.y})}function Ei(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ai(n){var t=n.children;return t&&t.length?Ai(t[0]):n}function Ci(n){var t,e=n.children;return e&&(t=e.length)?Ci(e[t-1]):n}function Ni(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function zi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Li(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ti(n){return n.rangeExtent?n.rangeExtent():Li(n.range())}function qi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Ri(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Di(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ss}function Pi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Zo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ui(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Pi:qi,c=r?Uu:Pu;return o=u(n,t,c,e),a=u(t,n,c,hu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(zu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Oi(n,t)},i.tickFormat=function(t,e){return Yi(n,t,e)},i.nice=function(t){return Hi(n,t),u()},i.copy=function(){return Ui(n,t,e,r)},u()}function ji(n,t){return Zo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Hi(n,t){return Ri(n,Di(Fi(n,t)[2]))}function Fi(n,t){null==t&&(t=10);var e=Li(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Oi(n,t){return Zo.range.apply(Zo,Fi(n,t))}function Yi(n,t,e){var r=Fi(n,t);if(e){var u=Ga.exec(e);if(u.shift(),"s"===u[8]){var i=Zo.formatPrefix(Math.max(ua(r[0]),ua(r[1])));return u[7]||(u[7]="."+Ii(i.scale(r[2]))),u[8]="f",e=Zo.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Zi(u[8],r)),e=u.join("")}else e=",."+Ii(r[2])+"f";return Zo.format(e)}function Ii(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Zi(n,t){var e=Ii(t[2]);return n in ls?Math.abs(e-Ii(Math.max(ua(t[0]),ua(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Vi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Ri(r.map(u),e?Math:hs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Li(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return fs;arguments.length<2?t=fs:"function"!=typeof t&&(t=Zo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Vi(n.copy(),t,e,r)},ji(o,n)}function Xi(n,t,e){function r(t){return n(u(t))}var u=$i(t),i=$i(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Oi(e,n)},r.tickFormat=function(n,t){return Yi(e,n,t)},r.nice=function(n){return r.domain(Hi(e,n))},r.exponent=function(o){return arguments.length?(u=$i(t=o),i=$i(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Xi(n.copy(),t,e)},ji(r,n)}function $i(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Bi(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Zo.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=r.length;++a<c;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=r(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=r(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=r(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Li(t.a[0])},e.copy=function(){return Bi(n,t)},e.domain(n)}function Wi(e,r){function u(){var n=0,t=r.length;for(o=[];++n<t;)o[n-1]=Zo.quantile(e,n/t);return i}function i(n){return isNaN(n=+n)?void 0:r[Zo.bisect(o,n)]}var o;return i.domain=function(r){return arguments.length?(e=r.filter(t).sort(n),u()):e},i.range=function(n){return arguments.length?(r=n,u()):r},i.quantiles=function(){return o},i.invertExtent=function(n){return n=r.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:e[0],n<o.length?o[n]:e[e.length-1]]},i.copy=function(){return Wi(e,r)},u()}function Ji(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return Ji(n,t,e)},u()}function Gi(n,t){function e(e){return e>=e?t[Zo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Gi(n,t)},e}function Ki(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Oi(n,t)},t.tickFormat=function(t,e){return Yi(n,t,e)},t.copy=function(){return Ki(n)},t}function Qi(n){return n.innerRadius}function no(n){return n.outerRadius}function to(n){return n.startAngle}function eo(n){return n.endAngle}function ro(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=bt(e),p=bt(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=wr,r=Sr,u=we,i=uo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=xs.get(n)||uo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function uo(n){return n.join("L")}function io(n){return uo(n)+"Z"}function oo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function ao(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function co(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function so(n,t){return n.length<4?uo(n):n[1]+ho(n.slice(1,n.length-1),go(n,t))}function lo(n,t){return n.length<3?uo(n):n[0]+ho((n.push(n[0]),n),go([n[n.length-2]].concat(n,[n[1]]),t))}function fo(n,t){return n.length<3?uo(n):n[0]+ho(n,go(n,t))}function ho(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return uo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function go(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function po(n){if(n.length<3)return uo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",xo(bs,o),",",xo(bs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Mo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function vo(n){if(n.length<4)return uo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(xo(bs,i)+","+xo(bs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Mo(e,i,o);return e.join("")}function mo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[xo(bs,o),",",xo(bs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Mo(t,o,a);return t.join("")}function yo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return po(n)}function xo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Mo(n,t,e){n.push("C",xo(Ms,t),",",xo(Ms,e),",",xo(_s,t),",",xo(_s,e),",",xo(bs,t),",",xo(bs,e))}function _o(n,t){return(t[1]-n[1])/(t[0]-n[0])}function bo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=_o(u,i);++t<e;)r[t]=(o+(o=_o(u=i,i=n[t+1])))/2;return r[t]=o,r}function wo(n){for(var t,e,r,u,i=[],o=bo(n),a=-1,c=n.length-1;++a<c;)t=_o(n[a],n[a+1]),ua(t)<ka?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function So(n){return n.length<3?uo(n):n[0]+ho(n,wo(n))}function ko(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ms,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Eo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=bt(e),_=bt(u),b=e===r?function(){return g}:bt(r),w=u===i?function(){return p}:bt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=wr,r=wr,u=0,i=Sr,o=we,a=uo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=xs.get(n)||uo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ao(n){return n.radius}function Co(n){return[n.x,n.y]}function No(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ms;return[e*Math.cos(r),e*Math.sin(r)]}}function zo(){return 64}function Lo(){return"circle"}function To(n){var t=Math.sqrt(n/ba);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function qo(n,t){return sa(n,Cs),n.id=t,n}function Ro(n,t,e,r){var u=n.id;return P(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Do(n){return null==n&&(n=""),function(){this.textContent=n}}function Po(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var a=r.time;i=u[e]={tween:new o,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Zo.timer(function(r){function o(r){return u.active>e?s():(u.active=e,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Zo.timer(function(){return p.c=c(r||1)?we:c,1},0,a),void 0)}function c(r){if(u.active!==e)return s();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);
	return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[e]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ba,v=[];return p.t=h+a,r>=h?o(r-h):(p.c=o,void 0)},0,a)}}function Uo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function jo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Ho(n){return n.toISOString()}function Fo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Zo.bisect(Us,u);return i==Us.length?[t.year,Fi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Us[i-1]<Us[i]/u?i-1:i]:[Fs,Fi(n,e)[2]]}return r.invert=function(t){return Oo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Oo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Oo(+e+1),t).length}var i=r.domain(),o=Li(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Ri(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Oo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Oo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Li(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Oo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Fo(n.copy(),t,e)},ji(r,n)}function Oo(n){return new Date(n)}function Yo(n){return JSON.parse(n.responseText)}function Io(n){var t=$o.createRange();return t.selectNode($o.body),t.createContextualFragment(n.responseText)}var Zo={version:"3.4.11"};Date.now||(Date.now=function(){return+new Date});var Vo=[].slice,Xo=function(n){return Vo.call(n)},$o=document,Bo=$o.documentElement,Wo=window;try{Xo(Bo.childNodes)[0].nodeType}catch(Jo){Xo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{$o.createElement("div").style.setProperty("opacity",0,"")}catch(Go){var Ko=Wo.Element.prototype,Qo=Ko.setAttribute,na=Ko.setAttributeNS,ta=Wo.CSSStyleDeclaration.prototype,ea=ta.setProperty;Ko.setAttribute=function(n,t){Qo.call(this,n,t+"")},Ko.setAttributeNS=function(n,t,e){na.call(this,n,t,e+"")},ta.setProperty=function(n,t,e){ea.call(this,n,t+"",e)}}Zo.ascending=n,Zo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Zo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Zo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Zo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Zo.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Zo.mean=function(n,e){var r,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(r=n[o])?u+=r:--a;else for(;++o<i;)t(r=e.call(n,n[o],o))?u+=r:--a;return a?u/a:void 0},Zo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Zo.median=function(e,r){return arguments.length>1&&(e=e.map(r)),e=e.filter(t),e.length?Zo.quantile(e.sort(n),.5):void 0};var ra=e(n);Zo.bisectLeft=ra.left,Zo.bisect=Zo.bisectRight=ra.right,Zo.bisector=function(t){return e(1===t.length?function(e,r){return n(t(e),r)}:t)},Zo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Zo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Zo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Zo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Zo.min(arguments,r),e=new Array(t);++n<t;)for(var u,i=-1,o=e[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return e},Zo.transpose=function(n){return Zo.zip.apply(Zo,n)},Zo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Zo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Zo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Zo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ua=Math.abs;Zo.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,i=[],o=u(ua(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)i.push(r/o);else for(;(r=n+e*++a)<t;)i.push(r/o);return i},Zo.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},i(o,{has:a,get:function(n){return this[ia+n]},set:function(n,t){return this[ia+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===oa&&n.call(this,t.substring(1),this[t])}});var ia="\x00",oa=ia.charCodeAt(0);Zo.nest=function(){function n(t,a,c){if(c>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Zo.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Zo.set=function(n){var t=new h;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},i(h,{has:a,add:function(n){return this[ia+n]=!0,n},remove:function(n){return n=ia+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===oa&&n.call(this,t.substring(1))}}),Zo.behavior={},Zo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=g(n,t,t[e]);return n};var aa=["webkit","ms","moz","Moz","o","O"];Zo.dispatch=function(){for(var n=new d,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Zo.event=null,Zo.requote=function(n){return n.replace(ca,"\\$&")};var ca=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,sa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},la=function(n,t){return t.querySelector(n)},fa=function(n,t){return t.querySelectorAll(n)},ha=Bo.matches||Bo[p(Bo,"matchesSelector")],ga=function(n,t){return ha.call(n,t)};"function"==typeof Sizzle&&(la=function(n,t){return Sizzle(n,t)[0]||null},fa=Sizzle,ga=Sizzle.matchesSelector),Zo.selection=function(){return ma};var pa=Zo.selection.prototype=[];pa.select=function(n){var t,e,r,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return _(i)},pa.selectAll=function(n){var t,e,r=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Xo(n.call(e,e.__data__,a,u))),t.parentNode=e);return _(r)};var va={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Zo.ns={prefix:va,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),va.hasOwnProperty(e)?{space:va[e],local:n}:n}},pa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Zo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},pa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=A(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},pa.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(z(e,n[e],t));return this}if(2>r)return Wo.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(z(n,t,e))},pa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},pa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},pa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},pa.append=function(n){return n=T(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},pa.insert=function(n,t){return n=T(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},pa.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},pa.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(r=-1;++r<a;)d=t.call(u=n[r],u.__data__,r),m.has(d)?v[r]=u:m.set(d,u),x.push(d);for(r=-1;++r<f;)d=t.call(e,i=e[r],r),(u=m.get(d))?(g[r]=u,u.__data__=i):y.has(d)||(p[r]=q(i)),y.set(d,i),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=q(i);for(;f>r;++r)p[r]=q(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},pa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},pa.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return _(u)},pa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},pa.sort=function(n){n=D.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},pa.each=function(n){return P(this,function(t,e,r){n.call(t,t.__data__,e,r)})},pa.call=function(n){var t=Xo(arguments);return n.apply(t[0]=this,t),this},pa.empty=function(){return!this.node()},pa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},pa.size=function(){var n=0;return this.each(function(){++n}),n};var da=[];Zo.selection.enter=U,Zo.selection.enter.prototype=da,da.append=pa.append,da.empty=pa.empty,da.node=pa.node,da.call=pa.call,da.size=pa.size,da.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return _(o)},da.insert=function(n,t){return arguments.length<2&&(t=j(this)),pa.insert.call(this,n,t)},pa.transition=function(){for(var n,t,e=Ss||++Ns,r=[],u=ks||{time:Date.now(),ease:xu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Po(t,c,e,u),n.push(t)}return qo(r,e)},pa.interrupt=function(){return this.each(H)},Zo.select=function(n){var t=["string"==typeof n?la(n,$o):n];return t.parentNode=Bo,_([t])},Zo.selectAll=function(n){var t=Xo("string"==typeof n?fa(n,$o):n);return t.parentNode=Bo,_([t])};var ma=Zo.select(Bo);pa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(F(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(F(n,t,e))};var ya=Zo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ya.forEach(function(n){"on"+n in $o&&ya.remove(n)});var xa="onselectstart"in $o?null:p(Bo.style,"userSelect"),Ma=0;Zo.mouse=function(n){return Z(n,x())};var _a=/WebKit/.test(Wo.navigator.userAgent)?-1:0;Zo.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Xo(t).map(function(t){var e=Z(n,t);return e.identifier=t.identifier,e}):[]},Zo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+s[0],y:r[1]+s[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Zo.event.target===f),g({type:"dragend"}))}var s,l=this,f=Zo.event.target,h=l.parentNode,g=e.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Zo.select(u()).on(i+d,a).on(o+d,c),y=I(),x=t(h,v);r?(s=r.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var e=M(n,"drag","dragstart","dragend"),r=null,u=t(v,Zo.mouse,$,"mousemove","mouseup"),i=t(V,Zo.touch,X,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Zo.rebind(n,e,"on")};var ba=Math.PI,wa=2*ba,Sa=ba/2,ka=1e-6,Ea=ka*ka,Aa=ba/180,Ca=180/ba,Na=Math.SQRT2,za=2,La=4;Zo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=Q(v),o=i/(za*h)*(e*nt(Na*t+v)-K(v));return[r+o*s,u+o*l,i*e/Q(Na*t+v)]}return[r+n*s,u+n*l,i*Math.exp(Na*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+La*f)/(2*i*za*h),p=(c*c-i*i-La*f)/(2*c*za*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Na;return e.duration=1e3*y,e},Zo.behavior.zoom=function(){function n(n){n.on(A,s).on(Ra+".zoom",f).on("dblclick.zoom",h).on(z,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Zo.mouse(r),h),a(s)}function e(){f.on(C,null).on(N,null),g(l&&Zo.event.target===i),c(s)}var r=this,i=Zo.event.target,s=L.of(r,arguments),l=0,f=Zo.select(Wo).on(C,n).on(N,e),h=t(Zo.mouse(r)),g=I();H.call(r),o(s)}function l(){function n(){var n=Zo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){var t=Zo.event.target;Zo.select(t).on(M,i).on(_,f),b.push(t);for(var e=Zo.event.changedTouches,o=0,c=e.length;c>o;++o)v[e[o].identifier]=null;var s=n(),l=Date.now();if(1===s.length){if(500>l-m){var h=s[0],g=v[h.identifier];r(2*S.k),u(h,g),y(),a(p)}m=l}else if(s.length>1){var h=s[0],x=s[1],w=h[0]-x[0],k=h[1]-x[1];d=w*w+k*k}}function i(){for(var n,t,e,i,o=Zo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Zo.event.touches.length){for(var t=Zo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}Zo.selectAll(b).on(x,null),w.on(A,s).on(z,l),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,x=".zoom-"+Zo.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=[],w=Zo.select(g).on(A,null).on(z,e),k=I();H.call(g),e(),o(p)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(g=t(p=v||Zo.mouse(this)),H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y(),r(Math.pow(2,.002*Ta())*S.k),u(p,g),a(n)}function h(){var n=L.of(this,arguments),e=Zo.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Zo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var g,p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=qa,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;Ss?Zo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Zo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?qa:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Zo.rebind(n,L,"on")};var Ta,qa=[0,1/0],Ra="onwheel"in $o?(Ta=function(){return-Zo.event.deltaY*(Zo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in $o?(Ta=function(){return Zo.event.wheelDelta},"mousewheel"):(Ta=function(){return-Zo.event.detail},"MozMousePixelScroll");Zo.color=et,et.prototype.toString=function(){return this.rgb()+""},Zo.hsl=rt;var Da=rt.prototype=new et;Da.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new rt(this.h,this.s,this.l/n)},Da.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new rt(this.h,this.s,n*this.l)},Da.rgb=function(){return ut(this.h,this.s,this.l)},Zo.hcl=it;var Pa=it.prototype=new et;Pa.brighter=function(n){return new it(this.h,this.c,Math.min(100,this.l+Ua*(arguments.length?n:1)))},Pa.darker=function(n){return new it(this.h,this.c,Math.max(0,this.l-Ua*(arguments.length?n:1)))},Pa.rgb=function(){return ot(this.h,this.c,this.l).rgb()},Zo.lab=at;var Ua=18,ja=.95047,Ha=1,Fa=1.08883,Oa=at.prototype=new et;Oa.brighter=function(n){return new at(Math.min(100,this.l+Ua*(arguments.length?n:1)),this.a,this.b)},Oa.darker=function(n){return new at(Math.max(0,this.l-Ua*(arguments.length?n:1)),this.a,this.b)},Oa.rgb=function(){return ct(this.l,this.a,this.b)},Zo.rgb=gt;var Ya=gt.prototype=new et;Ya.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new gt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new gt(u,u,u)},Ya.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new gt(n*this.r,n*this.g,n*this.b)},Ya.hsl=function(){return yt(this.r,this.g,this.b)},Ya.toString=function(){return"#"+dt(this.r)+dt(this.g)+dt(this.b)};var Ia=Zo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ia.forEach(function(n,t){Ia.set(n,pt(t))}),Zo.functor=bt,Zo.xhr=St(wt),Zo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=kt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new h,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Zo.csv=Zo.dsv(",","text/csv"),Zo.tsv=Zo.dsv("	","text/tab-separated-values"),Zo.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=x().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return Z(n,r)};var Za,Va,Xa,$a,Ba,Wa=Wo[p(Wo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Zo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Va?Va.n=i:Za=i,Va=i,Xa||($a=clearTimeout($a),Xa=1,Wa(At))},Zo.timer.flush=function(){Ct(),Nt()},Zo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Ja=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Lt);Zo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Zo.round(n,zt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),Ja[8+e/3]};var Ga=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,Ka=Zo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Zo.round(n,zt(n,t))).toFixed(Math.max(0,Math.min(20,zt(n*(1+1e-15),t))))}}),Qa=Zo.time={},nc=Date;Rt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){tc.setUTCDate.apply(this._,arguments)},setDay:function(){tc.setUTCDay.apply(this._,arguments)},setFullYear:function(){tc.setUTCFullYear.apply(this._,arguments)},setHours:function(){tc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){tc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){tc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){tc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){tc.setUTCSeconds.apply(this._,arguments)},setTime:function(){tc.setTime.apply(this._,arguments)}};var tc=Date.prototype;Qa.year=Dt(function(n){return n=Qa.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),Qa.years=Qa.year.range,Qa.years.utc=Qa.year.utc.range,Qa.day=Dt(function(n){var t=new nc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),Qa.days=Qa.day.range,Qa.days.utc=Qa.day.utc.range,Qa.dayOfYear=function(n){var t=Qa.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=Qa[n]=Dt(function(n){return(n=Qa.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Qa.year(n).getDay();return Math.floor((Qa.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});Qa[n+"s"]=e.range,Qa[n+"s"].utc=e.utc.range,Qa[n+"OfYear"]=function(n){var e=Qa.year(n).getDay();return Math.floor((Qa.dayOfYear(n)+(e+t)%7)/7)}}),Qa.week=Qa.sunday,Qa.weeks=Qa.sunday.range,Qa.weeks.utc=Qa.sunday.utc.range,Qa.weekOfYear=Qa.sundayOfYear;var ec={"-":"",_:" ",0:"0"},rc=/^\s*\d+/,uc=/^%/;Zo.locale=function(n){return{numberFormat:Tt(n),timeFormat:Ut(n)}};var ic=Zo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Zo.format=ic.numberFormat,Zo.geo={},ue.prototype={s:0,t:0,add:function(n){ie(n,this.t,oc),ie(oc.s,this.s,this),this.s?this.t+=oc.t:this.s=oc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var oc=new ue;Zo.geo.stream=function(n,t){n&&ac.hasOwnProperty(n.type)?ac[n.type](n,t):oe(n,t)};var ac={Feature:function(n,t){oe(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)oe(e[r].geometry,t)}},cc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){ae(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ae(e[r],t,0)},Polygon:function(n,t){ce(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ce(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)oe(e[r],t)}};Zo.geo.area=function(n){return sc=0,Zo.geo.stream(n,fc),sc};var sc,lc=new ue,fc={sphere:function(){sc+=4*ba},point:v,lineStart:v,lineEnd:v,polygonStart:function(){lc.reset(),fc.lineStart=se},polygonEnd:function(){var n=2*lc;sc+=0>n?4*ba+n:n,fc.lineStart=fc.lineEnd=fc.point=v}};Zo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=le([t*Aa,e*Aa]);if(m){var u=he(m,r),i=[u[1],-u[0],0],o=he(i,u);ve(o),o=de(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ca*s,d=ua(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ca;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ca;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ua(r)>180?r+(r>0?360:-360):r}else v=n,d=e;fc.point(n,e),t(n,e)}function i(){fc.lineStart()}function o(){u(v,d),fc.lineEnd(),ua(y)>ka&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,fc.polygonStart()},polygonEnd:function(){fc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>lc?(l=-(h=180),f=-(g=90)):y>ka?g=90:-ka>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Zo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);
	for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Zo.geo.centroid=function(n){hc=gc=pc=vc=dc=mc=yc=xc=Mc=_c=bc=0,Zo.geo.stream(n,wc);var t=Mc,e=_c,r=bc,u=t*t+e*e+r*r;return Ea>u&&(t=mc,e=yc,r=xc,ka>gc&&(t=pc,e=vc,r=dc),u=t*t+e*e+r*r,Ea>u)?[0/0,0/0]:[Math.atan2(e,t)*Ca,G(r/Math.sqrt(u))*Ca]};var hc,gc,pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc={sphere:v,point:ye,lineStart:Me,lineEnd:_e,polygonStart:function(){wc.lineStart=be},polygonEnd:function(){wc.lineStart=Me}},Sc=Ae(we,Te,Re,[-ba,-ba/2]),kc=1e9;Zo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ue(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Zo.geo.conicEqualArea=function(){return He(Fe)}).raw=Fe,Zo.geo.albers=function(){return Zo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Zo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Zo.geo.albers(),o=Zo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Zo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+ka,f+.12*s+ka],[l-.214*s-ka,f+.234*s-ka]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+ka,f+.166*s+ka],[l-.115*s-ka,f+.234*s-ka]]).stream(c).point,n},n.scale(1070)};var Ec,Ac,Cc,Nc,zc,Lc,Tc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){Ac=0,Tc.lineStart=Oe},polygonEnd:function(){Tc.lineStart=Tc.lineEnd=Tc.point=v,Ec+=ua(Ac/2)}},qc={point:Ye,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Rc={point:Ve,lineStart:Xe,lineEnd:$e,polygonStart:function(){Rc.lineStart=Be},polygonEnd:function(){Rc.point=Ve,Rc.lineStart=Xe,Rc.lineEnd=$e}};Zo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Zo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Ec=0,Zo.geo.stream(n,u(Tc)),Ec},n.centroid=function(n){return pc=vc=dc=mc=yc=xc=Mc=_c=bc=0,Zo.geo.stream(n,u(Rc)),bc?[Mc/bc,_c/bc]:xc?[mc/xc,yc/xc]:dc?[pc/dc,vc/dc]:[0/0,0/0]},n.bounds=function(n){return zc=Lc=-(Cc=Nc=1/0),Zo.geo.stream(n,u(qc)),[[Cc,Nc],[zc,Lc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||Ge(n):wt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Ie:new We(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Zo.geo.albersUsa()).context(null)},Zo.geo.transform=function(n){return{stream:function(t){var e=new Ke(t);for(var r in n)e[r]=n[r];return e}}},Ke.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Zo.geo.projection=nr,Zo.geo.projectionMutator=tr,(Zo.geo.equirectangular=function(){return nr(rr)}).raw=rr.invert=rr,Zo.geo.rotation=function(n){function t(t){return t=n(t[0]*Aa,t[1]*Aa),t[0]*=Ca,t[1]*=Ca,t}return n=ir(n[0]%360*Aa,n[1]*Aa,n.length>2?n[2]*Aa:0),t.invert=function(t){return t=n.invert(t[0]*Aa,t[1]*Aa),t[0]*=Ca,t[1]*=Ca,t},t},ur.invert=rr,Zo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=ir(-n[0]*Aa,-n[1]*Aa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ca,n[1]*=Ca}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=sr((t=+r)*Aa,u*Aa),n):t},n.precision=function(r){return arguments.length?(e=sr(t*Aa,(u=+r)*Aa),n):u},n.angle(90)},Zo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Aa,u=n[1]*Aa,i=t[1]*Aa,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Zo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Zo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Zo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Zo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ua(n%d)>ka}).map(l)).concat(Zo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ua(n%m)>ka}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=fr(a,o,90),f=hr(r,e,y),h=fr(s,c,90),g=hr(i,u,y),n):y},n.majorExtent([[-180,-90+ka],[180,90-ka]]).minorExtent([[-180,-80-ka],[180,80+ka]])},Zo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=gr,u=pr;return n.distance=function(){return Zo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Zo.geo.interpolate=function(n,t){return vr(n[0]*Aa,n[1]*Aa,t[0]*Aa,t[1]*Aa)},Zo.geo.length=function(n){return Dc=0,Zo.geo.stream(n,Pc),Dc};var Dc,Pc={sphere:v,point:v,lineStart:dr,lineEnd:v,polygonStart:v,polygonEnd:v},Uc=mr(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Zo.geo.azimuthalEqualArea=function(){return nr(Uc)}).raw=Uc;var jc=mr(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},wt);(Zo.geo.azimuthalEquidistant=function(){return nr(jc)}).raw=jc,(Zo.geo.conicConformal=function(){return He(yr)}).raw=yr,(Zo.geo.conicEquidistant=function(){return He(xr)}).raw=xr;var Hc=mr(function(n){return 1/n},Math.atan);(Zo.geo.gnomonic=function(){return nr(Hc)}).raw=Hc,Mr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Sa]},(Zo.geo.mercator=function(){return _r(Mr)}).raw=Mr;var Fc=mr(function(){return 1},Math.asin);(Zo.geo.orthographic=function(){return nr(Fc)}).raw=Fc;var Oc=mr(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Zo.geo.stereographic=function(){return nr(Oc)}).raw=Oc,br.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Sa]},(Zo.geo.transverseMercator=function(){var n=_r(br),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=br,Zo.geom={},Zo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=bt(e),i=bt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(Er),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=kr(a),l=kr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=wr,r=Sr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Zo.geom.polygon=function(n){return sa(n,Yc),n};var Yc=Zo.geom.polygon.prototype=[];Yc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Yc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Yc.clip=function(n){for(var t,e,r,u,i,o,a=Nr(n),c=-1,s=this.length-Nr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Ar(o,l,u)?(Ar(i,l,u)||n.push(Cr(i,o,l,u)),n.push(o)):Ar(i,l,u)&&n.push(Cr(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Ic,Zc,Vc,Xc,$c,Bc=[],Wc=[];Ur.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Hr),t.length},Wr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},Jr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=nu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(Kr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Qr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(Qr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Kr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?nu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,Kr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,Qr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,Kr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,Qr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,Kr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,Qr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Zo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return tu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/ka)*ka,y:Math.round(o(n,t)/ka)*ka,i:t}})}var r=wr,u=Sr,i=r,o=u,a=Jc;return n?t(n):(t.links=function(n){return tu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return tu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Hr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&ru(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=bt(r=n),t):r},t.y=function(n){return arguments.length?(o=bt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Jc:n,t):a===Jc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Jc?null:a&&a[1]},t)};var Jc=[[-1e6,-1e6],[1e6,1e6]];Zo.geom.delaunay=function(n){return Zo.geom.voronoi().triangles(n)},Zo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(ua(c-e)+ua(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=ou()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=bt(a),M=bt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=ou();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){au(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=wr,c=Sr;return(o=arguments.length)?(a=uu,c=iu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Zo.interpolateRgb=cu,Zo.interpolateObject=su,Zo.interpolateNumber=lu,Zo.interpolateString=fu;var Gc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Kc=new RegExp(Gc.source,"g");Zo.interpolate=hu,Zo.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ia.has(t)||/^(#|rgb\(|hsl\()/.test(t)?cu:fu:t instanceof et?cu:Array.isArray(t)?gu:"object"===e&&isNaN(t)?su:lu)(n,t)}],Zo.interpolateArray=gu;var Qc=function(){return wt},ns=Zo.map({linear:Qc,poly:Mu,quad:function(){return mu},cubic:function(){return yu},sin:function(){return _u},exp:function(){return bu},circle:function(){return wu},elastic:Su,back:ku,bounce:function(){return Eu}}),ts=Zo.map({"in":wt,out:vu,"in-out":du,"out-in":function(n){return du(vu(n))}});Zo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ns.get(e)||Qc,r=ts.get(r)||wt,pu(r(e.apply(null,Vo.call(arguments,1))))},Zo.interpolateHcl=Au,Zo.interpolateHsl=Cu,Zo.interpolateLab=Nu,Zo.interpolateRound=zu,Zo.transform=function(n){var t=$o.createElementNS(Zo.ns.prefix.svg,"g");return(Zo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Lu(e?e.matrix:es)})(n)},Lu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var es={a:1,b:0,c:0,d:1,e:0,f:0};Zo.interpolateTransform=Du,Zo.layout={},Zo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(ju(n[e]));return t}},Zo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Zo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Zo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(wa-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Zo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Zo.event.x,n.py=Zo.event.y,a.resume()}var e,r,u,i,o,a={},c=Zo.dispatch("start","tick","end"),s=[1,1],l=.9,f=rs,h=us,g=-30,p=is,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Vu(t=Zo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Zo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Zo.behavior.drag().origin(wt).on("dragstart.force",Ou).on("drag.force",t).on("dragend.force",Yu)),arguments.length?(this.on("mouseover.force",Iu).on("mouseout.force",Zu).call(e),void 0):e},Zo.rebind(a,c,"on")};var rs=20,us=1,is=1/0;Zo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(s=e.call(n,i,i.depth))&&(c=s.length)){for(var c,s,l;--c>=0;)o.push(l=s[c]),l.parent=i,l.depth=i.depth+1;r&&(i.value=0),i.children=s}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Bu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=Gu,e=Wu,r=Ju;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&($u(t,function(n){n.children&&(n.value=0)}),Bu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},Zo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Zo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Xu(e,r)},Zo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Zo.sum(o),s=Zo.range(i.length);null!=e&&s.sort(e===os?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=os,r=0,u=wa;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var os={};Zo.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Zo.permute(s,f),l=Zo.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=wt,e=ei,r=ri,u=ti,i=Qu,o=ni;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:as.get(t)||ei,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:cs.get(t)||ri,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var as=Zo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ui),i=n.map(ii),o=Zo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Zo.range(n.length).reverse()},"default":ei}),cs=Zo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ri});Zo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Zo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=si,u=ai;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=bt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return ci(n,t)}:bt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Zo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Bu(a,function(n){n.r=+l(n.value)}),Bu(a,pi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;Bu(a,function(n){n.r+=f}),Bu(a,pi),Bu(a,function(n){n.r-=f})}return mi(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Zo.layout.hierarchy().sort(li),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Xu(n,e)},Zo.layout.tree=function(){function n(n,u){var l=o.call(this,n,u),f=l[0],h=t(f);if(Bu(h,e),h.parent.m=-h.z,$u(h,r),s)$u(f,i);else{var g=f,p=f,v=f;$u(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);$u(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return l}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){wi(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],s=u.m,l=i.m,f=o.m,h=c.m;o=_i(o),u=Mi(u),o&&u;)c=Mi(c),i=_i(i),i.a=n,r=o.z+f-u.z-s+a(o._,u._),r>0&&(bi(Si(o,n,e),n,r),s+=r,l+=r),f+=o.m,s+=u.m,h+=c.m,l+=i.m;o&&!_i(i)&&(i.t=o,i.m+=f-l),u&&!Mi(c)&&(c.t=u,c.m+=s-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Zo.layout.hierarchy().sort(null).value(null),a=xi,c=[1,1],s=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(s=null==(c=t)?i:null,n):s?null:c},n.nodeSize=function(t){return arguments.length?(s=null==(c=t)?null:i,n):s?c:null},Xu(n,o)},Zo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;Bu(c,function(n){var t=n.children;t&&t.length?(n.x=Ei(t),n.y=ki(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ai(c),f=Ci(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return Bu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Zo.layout.hierarchy().sort(null).value(null),e=xi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Xu(n,t)},Zo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Zo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Ni,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ni(t):zi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return zi(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Ni:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Xu(i,a)},Zo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Zo.random.normal.apply(Zo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Zo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Zo.scale={};var ss={floor:wt,ceil:wt};Zo.scale.linear=function(){return Ui([0,1],[0,1],hu,!1)};var ls={s:1,g:1,p:1,r:1,e:1};Zo.scale.log=function(){return Vi(Zo.scale.linear().domain([0,1]),10,!0,[1,10])};var fs=Zo.format(".0e"),hs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Zo.scale.pow=function(){return Xi(Zo.scale.linear(),1,[0,1])},Zo.scale.sqrt=function(){return Zo.scale.pow().exponent(.5)},Zo.scale.ordinal=function(){return Bi([],{t:"range",a:[[]]})},Zo.scale.category10=function(){return Zo.scale.ordinal().range(gs)},Zo.scale.category20=function(){return Zo.scale.ordinal().range(ps)},Zo.scale.category20b=function(){return Zo.scale.ordinal().range(vs)},Zo.scale.category20c=function(){return Zo.scale.ordinal().range(ds)};var gs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(vt),ps=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(vt),vs=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(vt),ds=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(vt);Zo.scale.quantile=function(){return Wi([],[])},Zo.scale.quantize=function(){return Ji(0,1,[0,1])},Zo.scale.threshold=function(){return Gi([.5],[0,1])},Zo.scale.identity=function(){return Ki([0,1])},Zo.svg={},Zo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ms,a=u.apply(this,arguments)+ms,c=(o>a&&(c=o,o=a,a=c),a-o),s=ba>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
	return c>=ys?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=Qi,e=no,r=to,u=eo;return n.innerRadius=function(e){return arguments.length?(t=bt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=bt(t),n):e},n.startAngle=function(t){return arguments.length?(r=bt(t),n):r},n.endAngle=function(t){return arguments.length?(u=bt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ms;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ms=-Sa,ys=wa-ka;Zo.svg.line=function(){return ro(wt)};var xs=Zo.map({linear:uo,"linear-closed":io,step:oo,"step-before":ao,"step-after":co,basis:po,"basis-open":vo,"basis-closed":mo,bundle:yo,cardinal:fo,"cardinal-open":so,"cardinal-closed":lo,monotone:So});xs.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Ms=[0,2/3,1/3,0],_s=[0,1/3,2/3,0],bs=[0,1/6,2/3,1/6];Zo.svg.line.radial=function(){var n=ro(ko);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},ao.reverse=co,co.reverse=ao,Zo.svg.area=function(){return Eo(wt)},Zo.svg.area.radial=function(){var n=Eo(ko);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Zo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ms,l=s.call(n,u,r)+ms;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ba)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=gr,o=pr,a=Ao,c=to,s=eo;return n.radius=function(t){return arguments.length?(a=bt(t),n):a},n.source=function(t){return arguments.length?(i=bt(t),n):i},n.target=function(t){return arguments.length?(o=bt(t),n):o},n.startAngle=function(t){return arguments.length?(c=bt(t),n):c},n.endAngle=function(t){return arguments.length?(s=bt(t),n):s},n},Zo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=gr,e=pr,r=Co;return n.source=function(e){return arguments.length?(t=bt(e),n):t},n.target=function(t){return arguments.length?(e=bt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Zo.svg.diagonal.radial=function(){var n=Zo.svg.diagonal(),t=Co,e=n.projection;return n.projection=function(n){return arguments.length?e(No(t=n)):t},n},Zo.svg.symbol=function(){function n(n,r){return(ws.get(t.call(this,n,r))||To)(e.call(this,n,r))}var t=Lo,e=zo;return n.type=function(e){return arguments.length?(t=bt(e),n):t},n.size=function(t){return arguments.length?(e=bt(t),n):e},n};var ws=Zo.map({circle:To,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*As)),e=t*As;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Zo.svg.symbolTypes=ws.keys();var Ss,ks,Es=Math.sqrt(3),As=Math.tan(30*Aa),Cs=[],Ns=0;Cs.call=pa.call,Cs.empty=pa.empty,Cs.node=pa.node,Cs.size=pa.size,Zo.transition=function(n){return arguments.length?Ss?n.transition():n:ma.transition()},Zo.transition.prototype=Cs,Cs.select=function(n){var t,e,r,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Po(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return qo(i,u)},Cs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Po(u,g,o,i),t.push(u)}return qo(a,o)},Cs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return qo(u,this.id)},Cs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):P(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Cs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Du:hu,a=Zo.ns.qualify(n);return Ro(this,"attr."+n,t,a.local?i:u)},Cs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Zo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Cs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Wo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=hu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Ro(this,"style."+n,t,u)},Cs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Wo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Cs.text=function(n){return Ro(this,"text",n,Do)},Cs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Cs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Zo.ease.apply(Zo,arguments)),P(this,function(e){e.__transition__[t].ease=n}))},Cs.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Cs.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Cs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=ks,u=Ss;Ss=e,P(this,function(t,r,u){ks=t.__transition__[e],n.call(t,t.__data__,r,u)}),ks=r,Ss=u}else P(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Zo.dispatch("start","end"))).on(n,t)});return this},Cs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ns,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Po(e,s,i,r)),n.push(e)}return qo(o,i)},Zo.svg.axis=function(){function n(n){n.each(function(){var n,s=Zo.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):wt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",ka),d=Zo.transition(p.exit()).style("opacity",ka).remove(),m=Zo.transition(p.order()).style("opacity",1),y=Ti(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Zo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Uo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Uo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=jo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=jo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Zo.scale.linear(),r=zs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ls?t+"":zs,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var zs="bottom",Ls={top:1,right:1,bottom:1,left:1};Zo.svg.brush=function(){function n(i){i.each(function(){var i=Zo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,wt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ts[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Zo.transition(i),h=Zo.transition(o);c&&(l=Ti(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Ti(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Zo.event.keyCode&&(C||(x=null,z[0]-=l[1],z[1]-=f[1],C=2),y())}function p(){32==Zo.event.keyCode&&2==C&&(z[0]+=l[1],z[1]+=f[1],C=0,y())}function v(){var n=Zo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Zo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),z[0]=l[+(n[0]<x[0])],z[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Ti(t),c=a[0],s=a[1],p=z[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Zo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Zo.select(Zo.event.target),w=a.of(_,arguments),S=Zo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=I(),z=Zo.mouse(_),L=Zo.select(Wo).on("keydown.brush",u).on("keyup.brush",p);if(Zo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=l[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);M=[l[1-T]-z[0],f[1-q]-z[1]],z[0]=l[T],z[1]=f[q]}else Zo.event.altKey&&(x=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Zo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=qs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ss?Zo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=gu(l,t.x),r=gu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=qs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=qs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Zo.rebind(n,a,"on")};var Ts={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},qs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Rs=Qa.format=ic.timeFormat,Ds=Rs.utc,Ps=Ds("%Y-%m-%dT%H:%M:%S.%LZ");Rs.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ho:Ps,Ho.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Ho.toString=Ps.toString,Qa.second=Dt(function(n){return new nc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),Qa.seconds=Qa.second.range,Qa.seconds.utc=Qa.second.utc.range,Qa.minute=Dt(function(n){return new nc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),Qa.minutes=Qa.minute.range,Qa.minutes.utc=Qa.minute.utc.range,Qa.hour=Dt(function(n){var t=n.getTimezoneOffset()/60;return new nc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),Qa.hours=Qa.hour.range,Qa.hours.utc=Qa.hour.utc.range,Qa.month=Dt(function(n){return n=Qa.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),Qa.months=Qa.month.range,Qa.months.utc=Qa.month.utc.range;var Us=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],js=[[Qa.second,1],[Qa.second,5],[Qa.second,15],[Qa.second,30],[Qa.minute,1],[Qa.minute,5],[Qa.minute,15],[Qa.minute,30],[Qa.hour,1],[Qa.hour,3],[Qa.hour,6],[Qa.hour,12],[Qa.day,1],[Qa.day,2],[Qa.week,1],[Qa.month,1],[Qa.month,3],[Qa.year,1]],Hs=Rs.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",we]]),Fs={range:function(n,t,e){return Zo.range(Math.ceil(n/e)*e,+t,e).map(Oo)},floor:wt,ceil:wt};js.year=Qa.year,Qa.scale=function(){return Fo(Zo.scale.linear(),js,Hs)};var Os=js.map(function(n){return[n[0].utc,n[1]]}),Ys=Ds.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",we]]);Os.year=Qa.year.utc,Qa.scale.utc=function(){return Fo(Zo.scale.linear(),Os,Ys)},Zo.text=St(function(n){return n.responseText}),Zo.json=function(n,t){return kt(n,"application/json",Yo,t)},Zo.html=function(n,t){return kt(n,"text/html",Io,t)},Zo.xml=St(function(n){return n.responseXML}), true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Zo), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports&&(module.exports=Zo),this.d3=Zo}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*!
	* d3pie
	* @author Ben Keen
	* @version 0.1.3
	* @date June 2014
	* @repo http://github.com/benkeen/d3pie
	*/
	!function(){"use strict";var a="d3pie",b="0.1.3",c=0,d={header:{title:{text:"",color:"#333333",fontSize:18,font:"arial"},subtitle:{text:"",color:"#666666",fontSize:14,font:"arial"},location:"top-center",titleSubtitlePadding:8},footer:{text:"",color:"#666666",fontSize:14,font:"arial",location:"left"},size:{canvasHeight:500,canvasWidth:500,pieInnerRadius:"0%",pieOuterRadius:null},data:{sortOrder:"none",smallSegmentGrouping:{enabled:!1,value:1,valueType:"percentage",label:"Other",color:"#cccccc"},content:[]},labels:{outer:{format:"label",hideWhenLessThanPercentage:null,pieDistance:30},inner:{format:"percentage",hideWhenLessThanPercentage:null},mainLabel:{color:"#333333",font:"arial",fontSize:10},percentage:{color:"#dddddd",font:"arial",fontSize:10,decimalPlaces:0},value:{color:"#cccc44",font:"arial",fontSize:10},lines:{enabled:!0,style:"curved",color:"segment"},truncation:{enabled:!1,length:30}},effects:{load:{effect:"default",speed:1e3},pullOutSegmentOnClick:{effect:"bounce",speed:300,size:10},highlightSegmentOnMouseover:!0,highlightLuminosity:-.2},misc:{colors:{background:null,segments:["#2484c1","#65a620","#7b6888","#a05d56","#961a1a","#d8d23a","#e98125","#d0743c","#635222","#6ada6a","#0c6197","#7d9058","#207f33","#44b9b0","#bca44a","#e4a14b","#a3acb2","#8cc3e9","#69a6f9","#5b388f","#546e91","#8bde95","#d2ab58","#273c71","#98bf6e","#4daa4b","#98abc5","#cc1010","#31383b","#006391","#c2643f","#b0a474","#a5a39c","#a9c2bc","#22af8c","#7fcecf","#987ac6","#3d3b87","#b77b1c","#c9c2b6","#807ece","#8db27c","#be66a2","#9ed3c6","#00644b","#005064","#77979f","#77e079","#9c73ab","#1f79a7"],segmentStroke:"#ffffff"},gradient:{enabled:!1,percentage:95,color:"#000000"},canvasPadding:{top:5,right:5,bottom:5,left:5},pieCenterOffset:{x:0,y:0},cssPrefix:null},callbacks:{onload:null,onMouseoverSegment:null,onMouseoutSegment:null,onClickSegment:null}},e={initialCheck:function(a){var b=a.cssPrefix,c=a.element,d=a.options;if(!window.d3||!window.d3.hasOwnProperty("version"))return console.error("d3pie error: d3 is not available"),!1;if(!(c instanceof HTMLElement))return console.error("d3pie error: the first d3pie() param must be a valid DOM element (not jQuery) or a ID string."),!1;if(!/[a-zA-Z][a-zA-Z0-9_-]*$/.test(b))return console.error("d3pie error: invalid options.misc.cssPrefix"),!1;if(!f.isArray(d.data.content))return console.error("d3pie error: invalid config structure: missing data.content property."),!1;if(0===d.data.content.length)return console.error("d3pie error: no data supplied."),!1;for(var e=[],g=0;g<d.data.content.length;g++)"number"!=typeof d.data.content[g].value||isNaN(d.data.content[g].value)?console.log("not valid: ",d.data.content[g]):d.data.content[g].value<=0?console.log("not valid - should have positive value: ",d.data.content[g]):e.push(d.data.content[g]);return a.options.data.content=e,!0}},f={addSVGSpace:function(a){var b=a.element,c=a.options.size.canvasWidth,d=a.options.size.canvasHeight,e=a.options.misc.colors.background,f=d3.select(b).append("svg:svg").attr("width",c).attr("height",d);return"transparent"!==e&&f.style("background-color",function(){return e}),f},whenIdExists:function(a,b){var c=1,d=1e3,e=setInterval(function(){document.getElementById(a)&&(clearInterval(e),b()),c>d&&clearInterval(e),c++},1)},whenElementsExist:function(a,b){var c=1,d=1e3,e=setInterval(function(){for(var f=!0,g=0;g<a.length;g++)if(!document.getElementById(a[g])){f=!1;break}f&&(clearInterval(e),b()),c>d&&clearInterval(e),c++},1)},shuffleArray:function(a){for(var b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a},processObj:function(a,b,c){return"string"==typeof b?f.processObj(a,b.split("."),c):1==b.length&&void 0!==c?a[b[0]]=c:0==b.length?a:f.processObj(a[b[0]],b.slice(1),c)},getDimensions:function(a){var b=document.getElementById(a),c=0,d=0;if(b){var e=b.getBBox();c=e.width,d=e.height}else console.log("error: getDimensions() "+a+" not found.");return{w:c,h:d}},rectIntersect:function(a,b){var c=b.x>a.x+a.w||b.x+b.w<a.x||b.y+b.h<a.y||b.y>a.y+a.h;return!c},getColorShade:function(a,b){a=String(a).replace(/[^0-9a-f]/gi,""),a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),b=b||0;for(var c="#",d=0;3>d;d++){var e=parseInt(a.substr(2*d,2),16);e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+e).substr(e.length)}return c},initSegmentColors:function(a){for(var b=a.options.data.content,c=a.options.misc.colors.segments,d=[],e=0;e<b.length;e++)d.push(b[e].hasOwnProperty("color")?b[e].color:c[e]);return d},applySmallSegmentGrouping:function(a,b){var c;"percentage"===b.valueType&&(c=h.getTotalPieSize(a));for(var d=[],e=[],f=0,g=0;g<a.length;g++)if("percentage"===b.valueType){var i=a[g].value/c*100;if(i<=b.value){e.push(a[g]),f+=a[g].value;continue}a[g].isGrouped=!1,d.push(a[g])}else{if(a[g].value<=b.value){e.push(a[g]),f+=a[g].value;continue}a[g].isGrouped=!1,d.push(a[g])}return e.length&&d.push({color:b.color,label:b.label,value:f,isGrouped:!0,groupedData:e}),d},showPoint:function(a,b,c){a.append("circle").attr("cx",b).attr("cy",c).attr("r",2).style("fill","black")},isFunction:function(a){var b={};return a&&"[object Function]"===b.toString.call(a)},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)}},g=function(){var a,b,c,d,e,f,h=arguments[0]||{},i=1,j=arguments.length,k=!1,l=Object.prototype.toString,m=Object.prototype.hasOwnProperty,n={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},o={isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray||function(a){return"array"===o.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):n[l.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==o.type(a)||a.nodeType)return!1;try{if(a.constructor&&!m.call(a,"constructor")&&!m.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}var c;for(c in a);return void 0===c||m.call(a,c)}};for("boolean"==typeof h&&(k=h,h=arguments[1]||{},i=2),"object"==typeof h||o.isFunction(h)||(h={}),j===i&&(h=this,--i),i;j>i;i++)if(null!=(a=arguments[i]))for(b in a)c=h[b],d=a[b],h!==d&&(k&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},h[b]=g(k,f,d)):void 0!==d&&(h[b]=d));return h},h={toRadians:function(a){return a*(Math.PI/180)},toDegrees:function(a){return a*(180/Math.PI)},computePieRadius:function(a){var b=a.options.size,c=a.options.misc.canvasPadding,d=b.canvasWidth-c.left-c.right,e=b.canvasHeight-c.top-c.bottom;e-=a.textComponents.headerHeight,a.textComponents.footer.exists&&(e-=a.textComponents.footer.h),e=0>e?0:e;var f,g,h=(e>d?d:e)/3;if(null!==b.pieOuterRadius)if(/%/.test(b.pieOuterRadius)){g=parseInt(b.pieOuterRadius.replace(/[\D]/,""),10),g=g>99?99:g,g=0>g?0:g;var i=e>d?d:e;if("none"!==a.options.labels.outer.format){var j=2*parseInt(a.options.labels.outer.pieDistance,10);i-j>0&&(i-=j)}h=Math.floor(i/100*g)/2}else h=parseInt(b.pieOuterRadius,10);/%/.test(b.pieInnerRadius)?(g=parseInt(b.pieInnerRadius.replace(/[\D]/,""),10),g=g>99?99:g,g=0>g?0:g,f=Math.floor(h/100*g)):f=parseInt(b.pieInnerRadius,10),a.innerRadius=f,a.outerRadius=h},getTotalPieSize:function(a){for(var b=0,c=0;c<a.length;c++)b+=a[c].value;return b},sortPieData:function(a){var b=a.options.data.content,c=a.options.data.sortOrder;switch(c){case"none":break;case"random":b=f.shuffleArray(b);break;case"value-asc":b.sort(function(a,b){return a.value<b.value?-1:1});break;case"value-desc":b.sort(function(a,b){return a.value<b.value?1:-1});break;case"label-asc":b.sort(function(a,b){return a.label.toLowerCase()>b.label.toLowerCase()?1:-1});break;case"label-desc":b.sort(function(a,b){return a.label.toLowerCase()<b.label.toLowerCase()?1:-1})}return b},getPieTranslateCenter:function(a){return"translate("+a.x+","+a.y+")"},calculatePieCenter:function(a){var b=a.options.misc.pieCenterOffset,c=a.textComponents.title.exists&&"pie-center"!==a.options.header.location,d=a.textComponents.subtitle.exists&&"pie-center"!==a.options.header.location,e=a.options.misc.canvasPadding.top;c&&d?e+=a.textComponents.title.h+a.options.header.titleSubtitlePadding+a.textComponents.subtitle.h:c?e+=a.textComponents.title.h:d&&(e+=a.textComponents.subtitle.h);var f=0;a.textComponents.footer.exists&&(f=a.textComponents.footer.h+a.options.misc.canvasPadding.bottom);var g=(a.options.size.canvasWidth-a.options.misc.canvasPadding.left-a.options.misc.canvasPadding.right)/2+a.options.misc.canvasPadding.left,h=(a.options.size.canvasHeight-f-e)/2+e;g+=b.x,h+=b.y,a.pieCenter={x:g,y:h}},rotate:function(a,b,c,d,e){var f=Math.cos,g=Math.sin,e=e*Math.PI/180,h=(a-c)*f(e)-(b-d)*g(e)+c,i=(a-c)*g(e)+(b-d)*f(e)+d;return{x:h,y:i}},translate:function(a,b,c,d){var e=h.toRadians(d);return{x:a+c*Math.sin(e),y:b-c*Math.cos(e)}},pointIsInArc:function(a,b,c){var d=c.innerRadius()(b),e=c.outerRadius()(b),f=c.startAngle()(b),g=c.endAngle()(b),h=a.x*a.x+a.y*a.y,i=Math.atan2(a.x,-a.y);return i=0>i?i+2*Math.PI:i,h>=d*d&&e*e>=h&&i>=f&&g>=i}},i={add:function(a,b,c){var d=i.getIncludes(c),e=a.options.labels,f=a.svg.insert("g","."+a.cssPrefix+"labels-"+b).attr("class",a.cssPrefix+"labels-"+b),g=f.selectAll("."+a.cssPrefix+"labelGroup-"+b).data(a.options.data.content).enter().append("g").attr("id",function(c,d){return a.cssPrefix+"labelGroup"+d+"-"+b}).attr("data-index",function(a,b){return b}).attr("class",a.cssPrefix+"labelGroup-"+b).style("opacity",0);d.mainLabel&&g.append("text").attr("id",function(c,d){return a.cssPrefix+"segmentMainLabel"+d+"-"+b}).attr("class",a.cssPrefix+"segmentMainLabel-"+b).text(function(a){var b=a.label;return e.truncation.enabled&&a.label.length>e.truncation.length&&(b=a.label.substring(0,e.truncation.length)+"..."),b}).style("font-size",e.mainLabel.fontSize+"px").style("font-family",e.mainLabel.font).style("fill",e.mainLabel.color),d.percentage&&g.append("text").attr("id",function(c,d){return a.cssPrefix+"segmentPercentage"+d+"-"+b}).attr("class",a.cssPrefix+"segmentPercentage-"+b).text(function(b){var c=b.value/a.totalSize*100;return c.toFixed(a.options.labels.percentage.decimalPlaces)+"%"}).style("font-size",e.percentage.fontSize+"px").style("font-family",e.percentage.font).style("fill",e.percentage.color),d.value&&g.append("text").attr("id",function(c,d){return a.cssPrefix+"segmentValue"+d+"-"+b}).attr("class",a.cssPrefix+"segmentValue-"+b).text(function(a){return a.value}).style("font-size",e.value.fontSize+"px").style("font-family",e.value.font).style("fill",e.value.color)},positionLabelElements:function(a,b,c){i["dimensions-"+b]=[];var d=d3.selectAll("."+a.cssPrefix+"labelGroup-"+b);d.each(function(){var c=d3.select(this).selectAll("."+a.cssPrefix+"segmentMainLabel-"+b),d=d3.select(this).selectAll("."+a.cssPrefix+"segmentPercentage-"+b),e=d3.select(this).selectAll("."+a.cssPrefix+"segmentValue-"+b);i["dimensions-"+b].push({mainLabel:null!==c.node()?c.node().getBBox():null,percentage:null!==d.node()?d.node().getBBox():null,value:null!==e.node()?e.node().getBBox():null})});var e=5,f=i["dimensions-"+b];switch(c){case"label-value1":d3.selectAll("."+a.cssPrefix+"segmentValue-"+b).attr("dx",function(a,b){return f[b].mainLabel.width+e});break;case"label-value2":d3.selectAll("."+a.cssPrefix+"segmentValue-"+b).attr("dy",function(a,b){return f[b].mainLabel.height});break;case"label-percentage1":d3.selectAll("."+a.cssPrefix+"segmentPercentage-"+b).attr("dx",function(a,b){return f[b].mainLabel.width+e});break;case"label-percentage2":d3.selectAll("."+a.cssPrefix+"segmentPercentage-"+b).attr("dx",function(a,b){return f[b].mainLabel.width/2-f[b].percentage.width/2}).attr("dy",function(a,b){return f[b].mainLabel.height})}},computeLabelLinePositions:function(a){a.lineCoordGroups=[],d3.selectAll("."+a.cssPrefix+"labelGroup-outer").each(function(b,c){return i.computeLinePosition(a,c)})},computeLinePosition:function(a,b){var c,d,e,f,g=j.getSegmentAngle(b,a.options.data.content,a.totalSize,{midpoint:!0}),i=h.rotate(a.pieCenter.x,a.pieCenter.y-a.outerRadius,a.pieCenter.x,a.pieCenter.y,g),k=a.outerLabelGroupData[b].h/5,l=6,m=Math.floor(g/90),n=4;switch(2===m&&180===g&&(m=1),m){case 0:c=a.outerLabelGroupData[b].x-l-(a.outerLabelGroupData[b].x-l-i.x)/2,d=a.outerLabelGroupData[b].y+(i.y-a.outerLabelGroupData[b].y)/n,e=a.outerLabelGroupData[b].x-l,f=a.outerLabelGroupData[b].y-k;break;case 1:c=i.x+(a.outerLabelGroupData[b].x-i.x)/n,d=i.y+(a.outerLabelGroupData[b].y-i.y)/n,e=a.outerLabelGroupData[b].x-l,f=a.outerLabelGroupData[b].y-k;break;case 2:var o=a.outerLabelGroupData[b].x+a.outerLabelGroupData[b].w+l;c=i.x-(i.x-o)/n,d=i.y+(a.outerLabelGroupData[b].y-i.y)/n,e=a.outerLabelGroupData[b].x+a.outerLabelGroupData[b].w+l,f=a.outerLabelGroupData[b].y-k;break;case 3:var p=a.outerLabelGroupData[b].x+a.outerLabelGroupData[b].w+l;c=p+(i.x-p)/n,d=a.outerLabelGroupData[b].y+(i.y-a.outerLabelGroupData[b].y)/n,e=a.outerLabelGroupData[b].x+a.outerLabelGroupData[b].w+l,f=a.outerLabelGroupData[b].y-k}a.lineCoordGroups[b]="straight"===a.options.labels.lines.style?[{x:i.x,y:i.y},{x:e,y:f}]:[{x:i.x,y:i.y},{x:c,y:d},{x:e,y:f}]},addLabelLines:function(a){var b=a.svg.insert("g","."+a.cssPrefix+"pieChart").attr("class",a.cssPrefix+"lineGroups").style("opacity",0),c=b.selectAll("."+a.cssPrefix+"lineGroup").data(a.lineCoordGroups).enter().append("g").attr("class",a.cssPrefix+"lineGroup"),d=d3.svg.line().interpolate("basis").x(function(a){return a.x}).y(function(a){return a.y});c.append("path").attr("d",d).attr("stroke",function(b,c){return"segment"===a.options.labels.lines.color?a.options.colors[c]:a.options.labels.lines.color}).attr("stroke-width",1).attr("fill","none").style("opacity",function(b,c){var d=a.options.labels.outer.hideWhenLessThanPercentage,e=j.getPercentage(a,c),f=null!==d&&d>e||""===a.options.data.content[c].label;return f?0:1})},positionLabelGroups:function(a,b){d3.selectAll("."+a.cssPrefix+"labelGroup-"+b).style("opacity",0).attr("transform",function(c,d){var e,i;if("outer"===b)e=a.outerLabelGroupData[d].x,i=a.outerLabelGroupData[d].y;else{var k=g(!0,{},a.pieCenter);if(a.innerRadius>0){var l=j.getSegmentAngle(d,a.options.data.content,a.totalSize,{midpoint:!0}),m=h.translate(a.pieCenter.x,a.pieCenter.y,a.innerRadius,l);k.x=m.x,k.y=m.y}var n=f.getDimensions(a.cssPrefix+"labelGroup"+d+"-inner"),o=n.w/2,p=n.h/4;e=k.x+(a.lineCoordGroups[d][0].x-k.x)/1.8,i=k.y+(a.lineCoordGroups[d][0].y-k.y)/1.8,e-=o,i+=p}return"translate("+e+","+i+")"})},fadeInLabelsAndLines:function(a){var b="default"===a.options.effects.load.effect?a.options.effects.load.speed:1;setTimeout(function(){var b="default"===a.options.effects.load.effect?400:1;d3.selectAll("."+a.cssPrefix+"labelGroup-outer").transition().duration(b).style("opacity",function(b,c){var d=a.options.labels.outer.hideWhenLessThanPercentage,e=j.getPercentage(a,c);return null!==d&&d>e?0:1}),d3.selectAll("."+a.cssPrefix+"labelGroup-inner").transition().duration(b).style("opacity",function(b,c){var d=a.options.labels.inner.hideWhenLessThanPercentage,e=j.getPercentage(a,c);return null!==d&&d>e?0:1}),d3.selectAll("g."+a.cssPrefix+"lineGroups").transition().duration(b).style("opacity",1),f.isFunction(a.options.callbacks.onload)&&setTimeout(function(){try{a.options.callbacks.onload()}catch(b){}},b)},b)},getIncludes:function(a){var b=!1,c=!1,d=!1;switch(a){case"label":b=!0;break;case"value":c=!0;break;case"percentage":d=!0;break;case"label-value1":case"label-value2":b=!0,c=!0;break;case"label-percentage1":case"label-percentage2":b=!0,d=!0}return{mainLabel:b,value:c,percentage:d}},computeOuterLabelCoords:function(a){a.svg.selectAll("."+a.cssPrefix+"labelGroup-outer").each(function(b,c){return i.getIdealOuterLabelPositions(a,c)}),i.resolveOuterLabelCollisions(a)},resolveOuterLabelCollisions:function(a){var b=a.options.data.content.length;i.checkConflict(a,0,"clockwise",b),i.checkConflict(a,b-1,"anticlockwise",b)},checkConflict:function(a,b,c,d){if(!(1>=d)){var e=a.outerLabelGroupData[b].hs;if(!("clockwise"===c&&"right"!=e||"anticlockwise"===c&&"left"!=e)){var g="clockwise"===c?b+1:b-1,h=a.outerLabelGroupData[b],j=a.outerLabelGroupData[g],k={labelHeights:a.outerLabelGroupData[0].h,center:a.pieCenter,lineLength:a.outerRadius+a.options.labels.outer.pieDistance,heightChange:a.outerLabelGroupData[0].h+1};if("clockwise"===c)for(var l=0;b>=l;l++){var m=a.outerLabelGroupData[l];if(f.rectIntersect(m,j)){i.adjustLabelPos(a,g,h,k);break}}else for(var l=d-1;l>=b;l--){var m=a.outerLabelGroupData[l];if(f.rectIntersect(m,j)){i.adjustLabelPos(a,g,h,k);break}}i.checkConflict(a,g,c,d)}}},adjustLabelPos:function(a,b,c,d){var e,f,g,h;h=c.y+d.heightChange,f=d.center.y-h,e=Math.sqrt(Math.abs(d.lineLength)>Math.abs(f)?d.lineLength*d.lineLength-f*f:f*f-d.lineLength*d.lineLength),g="right"===c.hs?d.center.x+e:d.center.x-e-a.outerLabelGroupData[b].w,g||console.log(c.hs,e),a.outerLabelGroupData[b].x=g,a.outerLabelGroupData[b].y=h},getIdealOuterLabelPositions:function(a,b){var c=d3.select("#"+a.cssPrefix+"labelGroup"+b+"-outer").node().getBBox(),d=j.getSegmentAngle(b,a.options.data.content,a.totalSize,{midpoint:!0}),e=a.pieCenter.x,f=a.pieCenter.y-(a.outerRadius+a.options.labels.outer.pieDistance),g=h.rotate(e,f,a.pieCenter.x,a.pieCenter.y,d),i="right";d>180?(g.x-=c.width+8,i="left"):g.x+=8,a.outerLabelGroupData[b]={x:g.x,y:g.y,w:c.width,h:c.height,hs:i}}},j={create:function(a){var b=a.pieCenter,c=a.options.colors,d=a.options.effects.load,e=a.options.misc.colors.segmentStroke,f=a.svg.insert("g","#"+a.cssPrefix+"title").attr("transform",function(){return h.getPieTranslateCenter(b)}).attr("class",a.cssPrefix+"pieChart"),g=d3.svg.arc().innerRadius(a.innerRadius).outerRadius(a.outerRadius).startAngle(0).endAngle(function(b){return b.value/a.totalSize*2*Math.PI}),i=f.selectAll("."+a.cssPrefix+"arc").data(a.options.data.content).enter().append("g").attr("class",a.cssPrefix+"arc"),k=d.speed;"none"===d.effect&&(k=0),i.append("path").attr("id",function(b,c){return a.cssPrefix+"segment"+c}).attr("fill",function(b,d){var e=c[d];return a.options.misc.gradient.enabled&&(e="url(#"+a.cssPrefix+"grad"+d+")"),e}).style("stroke",e).style("stroke-width",1).transition().ease("cubic-in-out").duration(k).attr("data-index",function(a,b){return b}).attrTween("d",function(b){var c=d3.interpolate({value:0},b);return function(b){return a.arc(c(b))}}),a.svg.selectAll("g."+a.cssPrefix+"arc").attr("transform",function(b,c){var d=0;return c>0&&(d=j.getSegmentAngle(c-1,a.options.data.content,a.totalSize)),"rotate("+d+")"}),a.arc=g},addGradients:function(a){var b=a.svg.append("defs").selectAll("radialGradient").data(a.options.data.content).enter().append("radialGradient").attr("gradientUnits","userSpaceOnUse").attr("cx",0).attr("cy",0).attr("r","120%").attr("id",function(b,c){return a.cssPrefix+"grad"+c});b.append("stop").attr("offset","0%").style("stop-color",function(b,c){return a.options.colors[c]}),b.append("stop").attr("offset",a.options.misc.gradient.percentage+"%").style("stop-color",a.options.misc.gradient.color)},addSegmentEventHandlers:function(a){var b=d3.selectAll("."+a.cssPrefix+"arc,."+a.cssPrefix+"labelGroup-inner,."+a.cssPrefix+"labelGroup-outer");b.on("click",function(){var b,c=d3.select(this);if(c.attr("class")===a.cssPrefix+"arc")b=c.select("path");else{var d=c.attr("data-index");b=d3.select("#"+a.cssPrefix+"segment"+d)}var e=b.attr("class")===a.cssPrefix+"expanded";j.onSegmentEvent(a,a.options.callbacks.onClickSegment,b,e),"none"!==a.options.effects.pullOutSegmentOnClick.effect&&(e?j.closeSegment(a,b.node()):j.openSegment(a,b.node()))}),b.on("mouseover",function(){var b,c,d=d3.select(this);if(d.attr("class")===a.cssPrefix+"arc"?b=d.select("path"):(c=d.attr("data-index"),b=d3.select("#"+a.cssPrefix+"segment"+c)),a.options.effects.highlightSegmentOnMouseover){c=b.attr("data-index");var e=a.options.colors[c];b.style("fill",f.getColorShade(e,a.options.effects.highlightLuminosity))}var g=b.attr("class")===a.cssPrefix+"expanded";j.onSegmentEvent(a,a.options.callbacks.onMouseoverSegment,b,g)}),b.on("mouseout",function(){var b,c,d=d3.select(this);if(d.attr("class")===a.cssPrefix+"arc"?b=d.select("path"):(c=d.attr("data-index"),b=d3.select("#"+a.cssPrefix+"segment"+c)),a.options.effects.highlightSegmentOnMouseover){c=b.attr("data-index");var e=a.options.colors[c];a.options.misc.gradient.enabled&&(e="url(#"+a.cssPrefix+"grad"+c+")"),b.style("fill",e)}var f=b.attr("class")===a.cssPrefix+"expanded";j.onSegmentEvent(a,a.options.callbacks.onMouseoutSegment,b,f)})},onSegmentEvent:function(a,b,c,d){if(f.isFunction(b)){var e=parseInt(c.attr("data-index"),10);b({segment:c.node(),index:e,expanded:d,data:a.options.data.content[e]})}},openSegment:function(a,b){a.isOpeningSegment||(a.isOpeningSegment=!0,d3.selectAll("."+a.cssPrefix+"expanded").length>0&&j.closeSegment(a,d3.select("."+a.cssPrefix+"expanded").node()),d3.select(b).transition().ease(a.options.effects.pullOutSegmentOnClick.effect).duration(a.options.effects.pullOutSegmentOnClick.speed).attr("transform",function(b){var c=a.arc.centroid(b),d=c[0],e=c[1],f=Math.sqrt(d*d+e*e),g=parseInt(a.options.effects.pullOutSegmentOnClick.size,10);return"translate("+d/f*g+","+e/f*g+")"}).each("end",function(){a.currentlyOpenSegment=b,a.isOpeningSegment=!1,d3.select(this).attr("class",a.cssPrefix+"expanded")}))},closeSegment:function(a,b){d3.select(b).transition().duration(400).attr("transform","translate(0,0)").each("end",function(){d3.select(this).attr("class",""),a.currentlyOpenSegment=null})},getCentroid:function(a){var b=a.getBBox();return{x:b.x+b.width/2,y:b.y+b.height/2}},getSegmentAngle:function(a,b,c,d){var e,f=g({compounded:!0,midpoint:!1},d),h=b[a].value;if(f.compounded){e=0;for(var i=0;a>=i;i++)e+=b[i].value}"undefined"==typeof e&&(e=h);var j=e/c*360;if(f.midpoint){var k=h/c*360;j-=k/2}return j},getPercentage:function(a,b){return Math.floor(a.options.data.content[b].value/a.totalSize*100)}},k={offscreenCoord:-1e4,addTitle:function(a){a.svg.selectAll("."+a.cssPrefix+"title").data([a.options.header.title]).enter().append("text").text(function(a){return a.text}).attr("id",a.cssPrefix+"title").attr("class",a.cssPrefix+"title").attr("x",k.offscreenCoord).attr("y",k.offscreenCoord).attr("text-anchor",function(){var b;return b="top-center"===a.options.header.location||"pie-center"===a.options.header.location?"middle":"left"}).attr("fill",function(a){return a.color}).style("font-size",function(a){return a.fontSize+"px"}).style("font-family",function(a){return a.font})},positionTitle:function(a){var b,c=a.textComponents,d=a.options.header.location,e=a.options.misc.canvasPadding,f=a.options.size.canvasWidth,g=a.options.header.titleSubtitlePadding;b="top-left"===d?e.left:(f-e.right)/2+e.left;var h=e.top+c.title.h;if("pie-center"===d)if(h=a.pieCenter.y,c.subtitle.exists){var i=c.title.h+g+c.subtitle.h;h=h-i/2+c.title.h}else h+=c.title.h/4;a.svg.select("#"+a.cssPrefix+"title").attr("x",b).attr("y",h)},addSubtitle:function(a){var b=a.options.header.location;a.svg.selectAll("."+a.cssPrefix+"subtitle").data([a.options.header.subtitle]).enter().append("text").text(function(a){return a.text}).attr("x",k.offscreenCoord).attr("y",k.offscreenCoord).attr("id",a.cssPrefix+"subtitle").attr("class",a.cssPrefix+"subtitle").attr("text-anchor",function(){var a;return a="top-center"===b||"pie-center"===b?"middle":"left"}).attr("fill",function(a){return a.color}).style("font-size",function(a){return a.fontSize+"px"}).style("font-family",function(a){return a.font})},positionSubtitle:function(a){var b,c=a.options.misc.canvasPadding,d=a.options.size.canvasWidth;b="top-left"===a.options.header.location?c.left:(d-c.right)/2+c.left;var e=k.getHeaderHeight(a);a.svg.select("#"+a.cssPrefix+"subtitle").attr("x",b).attr("y",e)},addFooter:function(a){a.svg.selectAll("."+a.cssPrefix+"footer").data([a.options.footer]).enter().append("text").text(function(a){return a.text}).attr("x",k.offscreenCoord).attr("y",k.offscreenCoord).attr("id",a.cssPrefix+"footer").attr("class",a.cssPrefix+"footer").attr("text-anchor",function(){var b="left";return"bottom-center"===a.options.footer.location?b="middle":"bottom-right"===a.options.footer.location&&(b="left"),b}).attr("fill",function(a){return a.color}).style("font-size",function(a){return a.fontSize+"px"}).style("font-family",function(a){return a.font})},positionFooter:function(a){var b,c=a.options.footer.location,d=a.textComponents.footer.w,e=a.options.size.canvasWidth,f=a.options.size.canvasHeight,g=a.options.misc.canvasPadding;b="bottom-left"===c?g.left:"bottom-right"===c?e-d-g.right:e/2,a.svg.select("#"+a.cssPrefix+"footer").attr("x",b).attr("y",f-g.bottom)},getHeaderHeight:function(a){var b;if(a.textComponents.title.exists){var c=a.textComponents.title.h+a.options.header.titleSubtitlePadding+a.textComponents.subtitle.h;b="pie-center"===a.options.header.location?a.pieCenter.y-c/2+c:c+a.options.misc.canvasPadding.top}else if("pie-center"===a.options.header.location){var d=a.options.misc.canvasPadding.bottom+a.textComponents.footer.h;b=(a.options.size.canvasHeight-d)/2+a.options.misc.canvasPadding.top+a.textComponents.subtitle.h/2}else b=a.options.misc.canvasPadding.top+a.textComponents.subtitle.h;return b}},l=function(i,j){if(this.element=i,"string"==typeof i){var k=i.replace(/^#/,"");this.element=document.getElementById(k)}var l={};g(!0,l,d,j),this.options=l,null!==this.options.misc.cssPrefix?this.cssPrefix=this.options.misc.cssPrefix:(this.cssPrefix="p"+c+"_",c++),e.initialCheck(this)&&(d3.select(this.element).attr(a,b),this.options.data.content=h.sortPieData(this),this.options.data.smallSegmentGrouping.enabled&&(this.options.data.content=f.applySmallSegmentGrouping(this.options.data.content,this.options.data.smallSegmentGrouping)),this.options.colors=f.initSegmentColors(this),this.totalSize=h.getTotalPieSize(this.options.data.content),m.call(this))};l.prototype.redraw=function(){this.element.innerHTML="",m.call(this)},l.prototype.destroy=function(){this.element.innerHTML="",d3.select(this.element).attr(a,null)},l.prototype.getOpenSegment=function(){var a=this.currentlyOpenSegment;if(null!==a&&"undefined"!=typeof a){var b=parseInt(d3.select(a).attr("data-index"),10);return{element:a,index:b,data:this.options.data.content[b]}}return null},l.prototype.openSegment=function(a){var a=parseInt(a,10);0>a||a>this.options.data.content.length-1||j.openSegment(this,d3.select("#"+this.cssPrefix+"segment"+a).node())},l.prototype.closeSegment=function(){var a=this.currentlyOpenSegment;a&&j.closeSegment(this,a)},l.prototype.updateProp=function(a,b){switch(a){case"header.title.text":var c=f.processObj(this.options,a);f.processObj(this.options,a,b),d3.select("#"+this.cssPrefix+"title").html(b),(""===c&&""!==b||""!==c&&""===b)&&this.redraw();break;case"header.subtitle.text":var d=f.processObj(this.options,a);f.processObj(this.options,a,b),d3.select("#"+this.cssPrefix+"subtitle").html(b),(""===d&&""!==b||""!==d&&""===b)&&this.redraw();break;case"callbacks.onload":case"callbacks.onMouseoverSegment":case"callbacks.onMouseoutSegment":case"callbacks.onClickSegment":case"effects.pullOutSegmentOnClick.effect":case"effects.pullOutSegmentOnClick.speed":case"effects.pullOutSegmentOnClick.size":case"effects.highlightSegmentOnMouseover":case"effects.highlightLuminosity":f.processObj(this.options,a,b)}};var m=function(){this.svg=f.addSVGSpace(this),this.textComponents={headerHeight:0,title:{exists:""!==this.options.header.title.text,h:0,w:0},subtitle:{exists:""!==this.options.header.subtitle.text,h:0,w:0},footer:{exists:""!==this.options.footer.text,h:0,w:0}},this.outerLabelGroupData=[],this.textComponents.title.exists&&k.addTitle(this),this.textComponents.subtitle.exists&&k.addSubtitle(this),k.addFooter(this);var a=this;f.whenIdExists(this.cssPrefix+"footer",function(){k.positionFooter(a);var b=f.getDimensions(a.cssPrefix+"footer");a.textComponents.footer.h=b.h,a.textComponents.footer.w=b.w});var b=[];this.textComponents.title.exists&&b.push(this.cssPrefix+"title"),this.textComponents.subtitle.exists&&b.push(this.cssPrefix+"subtitle"),this.textComponents.footer.exists&&b.push(this.cssPrefix+"footer"),f.whenElementsExist(b,function(){if(a.textComponents.title.exists){var b=f.getDimensions(a.cssPrefix+"title");a.textComponents.title.h=b.h,a.textComponents.title.w=b.w}if(a.textComponents.subtitle.exists){var c=f.getDimensions(a.cssPrefix+"subtitle");a.textComponents.subtitle.h=c.h,a.textComponents.subtitle.w=c.w}if(a.textComponents.title.exists||a.textComponents.subtitle.exists){var d=0;a.textComponents.title.exists&&(d+=a.textComponents.title.h,a.textComponents.subtitle.exists&&(d+=a.options.header.titleSubtitlePadding)),a.textComponents.subtitle.exists&&(d+=a.textComponents.subtitle.h),a.textComponents.headerHeight=d}h.computePieRadius(a),h.calculatePieCenter(a),k.positionTitle(a),k.positionSubtitle(a),a.options.misc.gradient.enabled&&j.addGradients(a),j.create(a),i.add(a,"inner",a.options.labels.inner.format),i.add(a,"outer",a.options.labels.outer.format),i.positionLabelElements(a,"inner",a.options.labels.inner.format),i.positionLabelElements(a,"outer",a.options.labels.outer.format),i.computeOuterLabelCoords(a),i.positionLabelGroups(a,"outer"),i.computeLabelLinePositions(a),a.options.labels.lines.enabled&&"none"!==a.options.labels.outer.format&&i.addLabelLines(a),i.positionLabelGroups(a,"inner"),i.fadeInLabelsAndLines(a),j.addSegmentEventHandlers(a)})};window.d3pie=l}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	(function(){function t(e,t){return(new Date(t,e+1,0)).getDate()}function n(e,t,n){return function(r,i,s){var o=e(r),u=[];o<r&&t(o);if(s>1)while(o<i){var a=new Date(+o);n(a)%s===0&&u.push(a),t(o)}else while(o<i)u.push(new Date(+o)),t(o);return u}}var e=window.nv||{};e.version="1.1.15b",e.dev=!0,window.nv=e,e.tooltip=e.tooltip||{},e.utils=e.utils||{},e.models=e.models||{},e.charts={},e.graphs=[],e.logs={},e.dispatch=d3.dispatch("render_start","render_end"),e.dev&&(e.dispatch.on("render_start",function(t){e.logs.startTime=+(new Date)}),e.dispatch.on("render_end",function(t){e.logs.endTime=+(new Date),e.logs.totalTime=e.logs.endTime-e.logs.startTime,e.log("total",e.logs.totalTime)})),e.log=function(){if(e.dev&&console.log&&console.log.apply)console.log.apply(console,arguments);else if(e.dev&&typeof console.log=="function"&&Function.prototype.bind){var t=Function.prototype.bind.call(console.log,console);t.apply(console,arguments)}return arguments[arguments.length-1]},e.render=function(n){n=n||1,e.render.active=!0,e.dispatch.render_start(),setTimeout(function(){var t,r;for(var i=0;i<n&&(r=e.render.queue[i]);i++)t=r.generate(),typeof r.callback==typeof Function&&r.callback(t),e.graphs.push(t);e.render.queue.splice(0,i),e.render.queue.length?setTimeout(arguments.callee,0):(e.dispatch.render_end(),e.render.active=!1)},0)},e.render.active=!1,e.render.queue=[],e.addGraph=function(t){typeof arguments[0]==typeof Function&&(t={generate:arguments[0],callback:arguments[1]}),e.render.queue.push(t),e.render.active||e.render()},e.identity=function(e){return e},e.strip=function(e){return e.replace(/(\s|&)/g,"")},d3.time.monthEnd=function(e){return new Date(e.getFullYear(),e.getMonth(),0)},d3.time.monthEnds=n(d3.time.monthEnd,function(e){e.setUTCDate(e.getUTCDate()+1),e.setDate(t(e.getMonth()+1,e.getFullYear()))},function(e){return e.getMonth()}),e.interactiveGuideline=function(){"use strict";function c(o){o.each(function(o){function g(){var e=d3.mouse(this),n=e[0],r=e[1],o=!0,a=!1;l&&(n=d3.event.offsetX,r=d3.event.offsetY,d3.event.target.tagName!=="svg"&&(o=!1),d3.event.target.className.baseVal.match("nv-legend")&&(a=!0)),o&&(n-=i.left,r-=i.top);if(n<0||r<0||n>p||r>d||d3.event.relatedTarget&&d3.event.relatedTarget.ownerSVGElement===undefined||a){if(l&&d3.event.relatedTarget&&d3.event.relatedTarget.ownerSVGElement===undefined&&d3.event.relatedTarget.className.match(t.nvPointerEventsClass))return;u.elementMouseout({mouseX:n,mouseY:r}),c.renderGuideLine(null);return}var f=s.invert(n);u.elementMousemove({mouseX:n,mouseY:r,pointXValue:f}),d3.event.type==="dblclick"&&u.elementDblclick({mouseX:n,mouseY:r,pointXValue:f})}var h=d3.select(this),p=n||960,d=r||400,v=h.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([o]),m=v.enter().append("g").attr("class"," nv-wrap nv-interactiveLineLayer");m.append("g").attr("class","nv-interactiveGuideLine");if(!f)return;f.on("mousemove",g,!0).on("mouseout",g,!0).on("dblclick",g),c.renderGuideLine=function(t){if(!a)return;var n=v.select(".nv-interactiveGuideLine").selectAll("line").data(t!=null?[e.utils.NaNtoZero(t)]:[],String);n.enter().append("line").attr("class","nv-guideline").attr("x1",function(e){return e}).attr("x2",function(e){return e}).attr("y1",d).attr("y2",0),n.exit().remove()}})}var t=e.models.tooltip(),n=null,r=null,i={left:0,top:0},s=d3.scale.linear(),o=d3.scale.linear(),u=d3.dispatch("elementMousemove","elementMouseout","elementDblclick"),a=!0,f=null,l=navigator.userAgent.indexOf("MSIE")!==-1;return c.dispatch=u,c.tooltip=t,c.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.left=typeof e.left!="undefined"?e.left:i.left,c):i},c.width=function(e){return arguments.length?(n=e,c):n},c.height=function(e){return arguments.length?(r=e,c):r},c.xScale=function(e){return arguments.length?(s=e,c):s},c.showGuideLine=function(e){return arguments.length?(a=e,c):a},c.svgContainer=function(e){return arguments.length?(f=e,c):f},c},e.interactiveBisect=function(e,t,n){"use strict";if(!e instanceof Array)return null;typeof n!="function"&&(n=function(e,t){return e.x});var r=d3.bisector(n).left,i=d3.max([0,r(e,t)-1]),s=n(e[i],i);typeof s=="undefined"&&(s=i);if(s===t)return i;var o=d3.min([i+1,e.length-1]),u=n(e[o],o);return typeof u=="undefined"&&(u=o),Math.abs(u-t)>=Math.abs(s-t)?i:o},e.nearestValueIndex=function(e,t,n){"use strict";var r=Infinity,i=null;return e.forEach(function(e,s){var o=Math.abs(t-e);o<=r&&o<n&&(r=o,i=s)}),i},function(){"use strict";window.nv.tooltip={},window.nv.models.tooltip=function(){function y(){if(a){var e=d3.select(a);e.node().tagName!=="svg"&&(e=e.select("svg"));var t=e.node()?e.attr("viewBox"):null;if(t){t=t.split(" ");var n=parseInt(e.style("width"))/t[2];l.left=l.left*n,l.top=l.top*n}}}function b(e){var t;a?t=d3.select(a):t=d3.select("body");var n=t.select(".nvtooltip");return n.node()===null&&(n=t.append("div").attr("class","nvtooltip "+(u?u:"xy-tooltip")).attr("id",h)),n.node().innerHTML=e,n.style("top",0).style("left",0).style("opacity",0),n.selectAll("div, table, td, tr").classed(p,!0),n.classed(p,!0),n.node()}function w(){if(!c)return;if(!g(n))return;y();var t=l.left,u=o!=null?o:l.top,h=b(m(n));f=h;if(a){var p=a.getElementsByTagName("svg")[0],d=p?p.getBoundingClientRect():a.getBoundingClientRect(),v={left:0,top:0};if(p){var E=p.getBoundingClientRect(),S=a.getBoundingClientRect(),x=E.top;if(x<0){var T=a.getBoundingClientRect();x=Math.abs(x)>T.height?0:x}v.top=Math.abs(x-S.top),v.left=Math.abs(E.left-S.left)}t+=a.offsetLeft+v.left-2*a.scrollLeft,u+=a.offsetTop+v.top-2*a.scrollTop}return s&&s>0&&(u=Math.floor(u/s)*s),e.tooltip.calcTooltipPosition([t,u],r,i,h),w}var t=null,n=null,r="w",i=50,s=25,o=null,u=null,a=null,f=null,l={left:null,top:null},c=!0,h="nvtooltip-"+Math.floor(Math.random()*1e5),p="nv-pointer-events-none",d=function(e,t){return e},v=function(e){return e},m=function(e){if(t!=null)return t;if(e==null)return"";var n=d3.select(document.createElement("table")),r=n.selectAll("thead").data([e]).enter().append("thead");r.append("tr").append("td").attr("colspan",3).append("strong").classed("x-value",!0).html(v(e.value));var i=n.selectAll("tbody").data([e]).enter().append("tbody"),s=i.selectAll("tr").data(function(e){return e.series}).enter().append("tr").classed("highlight",function(e){return e.highlight});s.append("td").classed("legend-color-guide",!0).append("div").style("background-color",function(e){return e.color}),s.append("td").classed("key",!0).html(function(e){return e.key}),s.append("td").classed("value",!0).html(function(e,t){return d(e.value,t)}),s.selectAll("td").each(function(e){if(e.highlight){var t=d3.scale.linear().domain([0,1]).range(["#fff",e.color]),n=.6;d3.select(this).style("border-bottom-color",t(n)).style("border-top-color",t(n))}});var o=n.node().outerHTML;return e.footer!==undefined&&(o+="<div class='footer'>"+e.footer+"</div>"),o},g=function(e){return e&&e.series&&e.series.length>0?!0:!1};return w.nvPointerEventsClass=p,w.content=function(e){return arguments.length?(t=e,w):t},w.tooltipElem=function(){return f},w.contentGenerator=function(e){return arguments.length?(typeof e=="function"&&(m=e),w):m},w.data=function(e){return arguments.length?(n=e,w):n},w.gravity=function(e){return arguments.length?(r=e,w):r},w.distance=function(e){return arguments.length?(i=e,w):i},w.snapDistance=function(e){return arguments.length?(s=e,w):s},w.classes=function(e){return arguments.length?(u=e,w):u},w.chartContainer=function(e){return arguments.length?(a=e,w):a},w.position=function(e){return arguments.length?(l.left=typeof e.left!="undefined"?e.left:l.left,l.top=typeof e.top!="undefined"?e.top:l.top,w):l},w.fixedTop=function(e){return arguments.length?(o=e,w):o},w.enabled=function(e){return arguments.length?(c=e,w):c},w.valueFormatter=function(e){return arguments.length?(typeof e=="function"&&(d=e),w):d},w.headerFormatter=function(e){return arguments.length?(typeof e=="function"&&(v=e),w):v},w.id=function(){return h},w},e.tooltip.show=function(t,n,r,i,s,o){var u=document.createElement("div");u.className="nvtooltip "+(o?o:"xy-tooltip");var a=s;if(!s||s.tagName.match(/g|svg/i))a=document.getElementsByTagName("body")[0];u.style.left=0,u.style.top=0,u.style.opacity=0,u.innerHTML=n,a.appendChild(u),s&&(t[0]=t[0]-s.scrollLeft,t[1]=t[1]-s.scrollTop),e.tooltip.calcTooltipPosition(t,r,i,u)},e.tooltip.findFirstNonSVGParent=function(e){while(e.tagName.match(/^g|svg$/i)!==null)e=e.parentNode;return e},e.tooltip.findTotalOffsetTop=function(e,t){var n=t;do isNaN(e.offsetTop)||(n+=e.offsetTop);while(e=e.offsetParent);return n},e.tooltip.findTotalOffsetLeft=function(e,t){var n=t;do isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return n},e.tooltip.calcTooltipPosition=function(t,n,r,i){var s=parseInt(i.offsetHeight),o=parseInt(i.offsetWidth),u=e.utils.windowSize().width,a=e.utils.windowSize().height,f=window.pageYOffset,l=window.pageXOffset,c,h;a=window.innerWidth>=document.body.scrollWidth?a:a-16,u=window.innerHeight>=document.body.scrollHeight?u:u-16,n=n||"s",r=r||20;var p=function(t){return e.tooltip.findTotalOffsetTop(t,h)},d=function(t){return e.tooltip.findTotalOffsetLeft(t,c)};switch(n){case"e":c=t[0]-o-r,h=t[1]-s/2;var v=d(i),m=p(i);v<l&&(c=t[0]+r>l?t[0]+r:l-v+c),m<f&&(h=f-m+h),m+s>f+a&&(h=f+a-m+h-s);break;case"w":c=t[0]+r,h=t[1]-s/2;var v=d(i),m=p(i);v+o>u&&(c=t[0]-o-r),m<f&&(h=f+5),m+s>f+a&&(h=f+a-m+h-s);break;case"n":c=t[0]-o/2-5,h=t[1]+r;var v=d(i),m=p(i);v<l&&(c=l+5),v+o>u&&(c=c-o/2+5),m+s>f+a&&(h=f+a-m+h-s);break;case"s":c=t[0]-o/2,h=t[1]-s-r;var v=d(i),m=p(i);v<l&&(c=l+5),v+o>u&&(c=c-o/2+5),f>m&&(h=f);break;case"none":c=t[0],h=t[1]-r;var v=d(i),m=p(i)}return i.style.left=c+"px",i.style.top=h+"px",i.style.opacity=1,i.style.position="absolute",i},e.tooltip.cleanup=function(){var e=document.getElementsByClassName("nvtooltip"),t=[];while(e.length)t.push(e[0]),e[0].style.transitionDelay="0 !important",e[0].style.opacity=0,e[0].className="nvtooltip-pending-removal";setTimeout(function(){while(t.length){var e=t.pop();e.parentNode.removeChild(e)}},500)}}(),e.utils.windowSize=function(){var e={width:640,height:480};return document.body&&document.body.offsetWidth&&(e.width=document.body.offsetWidth,e.height=document.body.offsetHeight),document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth&&(e.width=document.documentElement.offsetWidth,e.height=document.documentElement.offsetHeight),window.innerWidth&&window.innerHeight&&(e.width=window.innerWidth,e.height=window.innerHeight),e},e.utils.windowResize=function(e){if(e===undefined)return;var t=window.onresize;window.onresize=function(n){typeof t=="function"&&t(n),e(n)}},e.utils.getColor=function(t){return arguments.length?Object.prototype.toString.call(t)==="[object Array]"?function(e,n){return e.color||t[n%t.length]}:t:e.utils.defaultColor()},e.utils.defaultColor=function(){var e=d3.scale.category20().range();return function(t,n){return t.color||e[n%e.length]}},e.utils.customTheme=function(e,t,n){t=t||function(e){return e.key},n=n||d3.scale.category20().range();var r=n.length;return function(i,s){var o=t(i);return r||(r=n.length),typeof e[o]!="undefined"?typeof e[o]=="function"?e[o]():e[o]:n[--r]}},e.utils.pjax=function(t,n){function r(r){d3.html(r,function(r){var i=d3.select(n).node();i.parentNode.replaceChild(d3.select(r).select(n).node(),i),e.utils.pjax(t,n)})}d3.selectAll(t).on("click",function(){history.pushState(this.href,this.textContent,this.href),r(this.href),d3.event.preventDefault()}),d3.select(window).on("popstate",function(){d3.event.state&&r(d3.event.state)})},e.utils.calcApproxTextWidth=function(e){if(typeof e.style=="function"&&typeof e.text=="function"){var t=parseInt(e.style("font-size").replace("px","")),n=e.text().length;return n*t*.5}return 0},e.utils.NaNtoZero=function(e){return typeof e!="number"||isNaN(e)||e===null||e===Infinity?0:e},e.utils.optionsFunc=function(e){return e&&d3.map(e).forEach(function(e,t){typeof this[e]=="function"&&this[e](t)}.bind(this)),this},e.models.axis=function(){"use strict";function m(e){return e.each(function(e){var i=d3.select(this),m=i.selectAll("g.nv-wrap.nv-axis").data([e]),g=m.enter().append("g").attr("class","nvd3 nv-wrap nv-axis"),y=g.append("g"),b=m.select("g");p!==null?t.ticks(p):(t.orient()=="top"||t.orient()=="bottom")&&t.ticks(Math.abs(s.range()[1]-s.range()[0])/100),b.transition().call(t),v=v||t.scale();var w=t.tickFormat();w==null&&(w=v.tickFormat());var E=b.selectAll("text.nv-axislabel").data([o||null]);E.exit().remove();switch(t.orient()){case"top":E.enter().append("text").attr("class","nv-axislabel");var S=s.range().length==2?s.range()[1]:s.range()[s.range().length-1]+(s.range()[1]-s.range()[0]);E.attr("text-anchor","middle").attr("y",0).attr("x",S/2);if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text"),x.exit().remove(),x.attr("transform",function(e,t){return"translate("+s(e)+",0)"}).select("text").attr("dy","-0.5em").attr("y",-t.tickPadding()).attr("text-anchor","middle").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate("+s.range()[t]+",0)"})}break;case"bottom":var T=36,N=30,C=b.selectAll("g").select("text");if(f%360){C.each(function(e,t){var n=this.getBBox().width;n>N&&(N=n)});var k=Math.abs(Math.sin(f*Math.PI/180)),T=(k?k*N:N)+30;C.attr("transform",function(e,t,n){return"rotate("+f+" 0,0)"}).style("text-anchor",f%360>0?"start":"end")}E.enter().append("text").attr("class","nv-axislabel");var S=s.range().length==2?s.range()[1]:s.range()[s.range().length-1]+(s.range()[1]-s.range()[0]);E.attr("text-anchor","middle").attr("y",T).attr("x",S/2);if(u){var x=m.selectAll("g.nv-axisMaxMin").data([s.domain()[0],s.domain()[s.domain().length-1]]);x.enter().append("g").attr("class","nv-axisMaxMin").append("text"),x.exit().remove(),x.attr("transform",function(e,t){return"translate("+(s(e)+(h?s.rangeBand()/2:0))+",0)"}).select("text").attr("dy",".71em").attr("y",t.tickPadding()).attr("transform",function(e,t,n){return"rotate("+f+" 0,0)"}).style("text-anchor",f?f%360>0?"start":"end":"middle").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate("+(s(e)+(h?s.rangeBand()/2:0))+",0)"})}c&&C.attr("transform",function(e,t){return"translate(0,"+(t%2==0?"0":"12")+")"});break;case"right":E.enter().append("text").attr("class","nv-axislabel"),E.style("text-anchor",l?"middle":"begin").attr("transform",l?"rotate(90)":"").attr("y",l?-Math.max(n.right,r)+12:-10).attr("x",l?s.range()[0]/2:t.tickPadding());if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(e,t){return"translate(0,"+s(e)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",t.tickPadding()).style("text-anchor","start").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate(0,"+s.range()[t]+")"}).select("text").style("opacity",1)}break;case"left":E.enter().append("text").attr("class","nv-axislabel"),E.style("text-anchor",l?"middle":"end").attr("transform",l?"rotate(-90)":"").attr("y",l?-Math.max(n.left,r)+d:-10).attr("x",l?-s.range()[0]/2:-t.tickPadding());if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(e,t){return"translate(0,"+v(e)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",-t.tickPadding()).attr("text-anchor","end").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate(0,"+s.range()[t]+")"}).select("text").style("opacity",1)}}E.text(function(e){return e}),u&&(t.orient()==="left"||t.orient()==="right")&&(b.selectAll("g").each(function(e,t){d3.select(this).select("text").attr("opacity",1);if(s(e)<s.range()[1]+10||s(e)>s.range()[0]-10)(e>1e-10||e<-1e-10)&&d3.select(this).attr("opacity",0),d3.select(this).select("text").attr("opacity",0)}),s.domain()[0]==s.domain()[1]&&s.domain()[0]==0&&m.selectAll("g.nv-axisMaxMin").style("opacity",function(e,t){return t?0:1}));if(u&&(t.orient()==="top"||t.orient()==="bottom")){var L=[];m.selectAll("g.nv-axisMaxMin").each(function(e,t){try{t?L.push(s(e)-this.getBBox().width-4):L.push(s(e)+this.getBBox().width+4)}catch(n){t?L.push(s(e)-4):L.push(s(e)+4)}}),b.selectAll("g").each(function(e,t){if(s(e)<L[0]||s(e)>L[1])e>1e-10||e<-1e-10?d3.select(this).remove():d3.select(this).select("text").remove()})}a&&b.selectAll(".tick").filter(function(e){return!parseFloat(Math.round(e.__data__*1e5)/1e6)&&e.__data__!==undefined}).classed("zero",!0),v=s.copy()}),m}var t=d3.svg.axis(),n={top:0,right:0,bottom:0,left:0},r=75,i=60,s=d3.scale.linear(),o=null,u=!0,a=!0,f=0,l=!0,c=!1,h=!1,p=null,d=12;t.scale(s).orient("bottom").tickFormat(function(e){return e});var v;return m.axis=t,d3.rebind(m,t,"orient","tickValues","tickSubdivide","tickSize","tickPadding","tickFormat"),d3.rebind(m,s,"domain","range","rangeBand","rangeBands"),m.options=e.utils.optionsFunc.bind(m),m.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,m):n},m.width=function(e){return arguments.length?(r=e,m):r},m.ticks=function(e){return arguments.length?(p=e,m):p},m.height=function(e){return arguments.length?(i=e,m):i},m.axisLabel=function(e){return arguments.length?(o=e,m):o},m.showMaxMin=function(e){return arguments.length?(u=e,m):u},m.highlightZero=function(e){return arguments.length?(a=e,m):a},m.scale=function(e){return arguments.length?(s=e,t.scale(s),h=typeof s.rangeBands=="function",d3.rebind(m,s,"domain","range","rangeBand","rangeBands"),m):s},m.rotateYLabel=function(e){return arguments.length?(l=e,m):l},m.rotateLabels=function(e){return arguments.length?(f=e,m):f},m.staggerLabels=function(e){return arguments.length?(c=e,m):c},m.axisLabelDistance=function(e){return arguments.length?(d=e,m):d},m},e.models.bullet=function(){"use strict";function m(e){return e.each(function(e,n){var p=c-t.left-t.right,m=h-t.top-t.bottom,g=d3.select(this),y=i.call(this,e,n).slice().sort(d3.descending),b=s.call(this,e,n).slice().sort(d3.descending),w=o.call(this,e,n).slice().sort(d3.descending),E=u.call(this,e,n).slice(),S=a.call(this,e,n).slice(),x=f.call(this,e,n).slice(),T=d3.scale.linear().domain(d3.extent(d3.merge([l,y]))).range(r?[p,0]:[0,p]),N=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(T.range());this.__chart__=T;var C=d3.min(y),k=d3.max(y),L=y[1],A=g.selectAll("g.nv-wrap.nv-bullet").data([e]),O=A.enter().append("g").attr("class","nvd3 nv-wrap nv-bullet"),M=O.append("g"),_=A.select("g");M.append("rect").attr("class","nv-range nv-rangeMax"),M.append("rect").attr("class","nv-range nv-rangeAvg"),M.append("rect").attr("class","nv-range nv-rangeMin"),M.append("rect").attr("class","nv-measure"),M.append("path").attr("class","nv-markerTriangle"),A.attr("transform","translate("+t.left+","+t.top+")");var D=function(e){return Math.abs(N(e)-N(0))},P=function(e){return Math.abs(T(e)-T(0))},H=function(e){return e<0?N(e):N(0)},B=function(e){return e<0?T(e):T(0)};_.select("rect.nv-rangeMax").attr("height",m).attr("width",P(k>0?k:C)).attr("x",B(k>0?k:C)).datum(k>0?k:C),_.select("rect.nv-rangeAvg").attr("height",m).attr("width",P(L)).attr("x",B(L)).datum(L),_.select("rect.nv-rangeMin").attr("height",m).attr("width",P(k)).attr("x",B(k)).attr("width",P(k>0?C:k)).attr("x",B(k>0?C:k)).datum(k>0?C:k),_.select("rect.nv-measure").style("fill",d).attr("height",m/3).attr("y",m/3).attr("width",w<0?T(0)-T(w[0]):T(w[0])-T(0)).attr("x",B(w)).on("mouseover",function(){v.elementMouseover({value:w[0],label:x[0]||"Current",pos:[T(w[0]),m/2]})}).on("mouseout",function(){v.elementMouseout({value:w[0],label:x[0]||"Current"})});var j=m/6;b[0]?_.selectAll("path.nv-markerTriangle").attr("transform",function(e){return"translate("+T(b[0])+","+m/2+")"}).attr("d","M0,"+j+"L"+j+","+ -j+" "+ -j+","+ -j+"Z").on("mouseover",function(){v.elementMouseover({value:b[0],label:S[0]||"Previous",pos:[T(b[0]),m/2]})}).on("mouseout",function(){v.elementMouseout({value:b[0],label:S[0]||"Previous"})}):_.selectAll("path.nv-markerTriangle").remove(),A.selectAll(".nv-range").on("mouseover",function(e,t){var n=E[t]||(t?t==1?"Mean":"Minimum":"Maximum");v.elementMouseover({value:e,label:n,pos:[T(e),m/2]})}).on("mouseout",function(e,t){var n=E[t]||(t?t==1?"Mean":"Minimum":"Maximum");v.elementMouseout({value:e,label:n})})}),m}var t={top:0,right:0,bottom:0,left:0},n="left",r=!1,i=function(e){return e.ranges},s=function(e){return e.markers},o=function(e){return e.measures},u=function(e){return e.rangeLabels?e.rangeLabels:[]},a=function(e){return e.markerLabels?e.markerLabels:[]},f=function(e){return e.measureLabels?e.measureLabels:[]},l=[0],c=380,h=30,p=null,d=e.utils.getColor(["#1f77b4"]),v=d3.dispatch("elementMouseover","elementMouseout");return m.dispatch=v,m.options=e.utils.optionsFunc.bind(m),m.orient=function(e){return arguments.length?(n=e,r=n=="right"||n=="bottom",m):n},m.ranges=function(e){return arguments.length?(i=e,m):i},m.markers=function(e){return arguments.length?(s=e,m):s},m.measures=function(e){return arguments.length?(o=e,m):o},m.forceX=function(e){return arguments.length?(l=e,m):l},m.width=function(e){return arguments.length?(c=e,m):c},m.height=function(e){return arguments.length?(h=e,m):h},m.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,m):t},m.tickFormat=function(e){return arguments.length?(p=e,m):p},m.color=function(t){return arguments.length?(d=e.utils.getColor(t),m):d},m},e.models.bulletChart=function(){"use strict";function m(e){return e.each(function(n,h){var g=d3.select(this),y=(a||parseInt(g.style("width"))||960)-i.left-i.right,b=f-i.top-i.bottom,w=this;m.update=function(){m(e)},m.container=this;if(!n||!s.call(this,n,h)){var E=g.selectAll(".nv-noData").data([p]);return E.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),E.attr("x",i.left+y/2).attr("y",18+i.top+b/2).text(function(e){return e}),m}g.selectAll(".nv-noData").remove();var S=s.call(this,n,h).slice().sort(d3.descending),x=o.call(this,n,h).slice().sort(d3.descending),T=u.call(this,n,h).slice().sort(d3.descending),N=g.selectAll("g.nv-wrap.nv-bulletChart").data([n]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-bulletChart"),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-bulletWrap"),k.append("g").attr("class","nv-titles"),N.attr("transform","translate("+i.left+","+i.top+")");var A=d3.scale.linear().domain([0,Math.max(S[0],x[0],T[0])]).range(r?[y,0]:[0,y]),O=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(A.range());this.__chart__=A;var M=function(e){return Math.abs(O(e)-O(0))},_=function(e){return Math.abs(A(e)-A(0))},D=k.select(".nv-titles").append("g").attr("text-anchor","end").attr("transform","translate(-6,"+(f-i.top-i.bottom)/2+")");D.append("text").attr("class","nv-title").text(function(e){return e.title}),D.append("text").attr("class","nv-subtitle").attr("dy","1em").text(function(e){return e.subtitle}),t.width(y).height(b);var P=L.select(".nv-bulletWrap");d3.transition(P).call(t);var H=l||A.tickFormat(y/100),B=L.selectAll("g.nv-tick").data(A.ticks(y/50),function(e){return this.textContent||H(e)}),j=B.enter().append("g").attr("class","nv-tick").attr("transform",function(e){return"translate("+O(e)+",0)"}).style("opacity",1e-6);j.append("line").attr("y1",b).attr("y2",b*7/6),j.append("text").attr("text-anchor","middle").attr("dy","1em").attr("y",b*7/6).text(H);var F=d3.transition(B).attr("transform",function(e){return"translate("+A(e)+",0)"}).style("opacity",1);F.select("line").attr("y1",b).attr("y2",b*7/6),F.select("text").attr("y",b*7/6),d3.transition(B.exit()).attr("transform",function(e){return"translate("+A(e)+",0)"}).style("opacity",1e-6).remove(),d.on("tooltipShow",function(e){e.key=n.title,c&&v(e,w.parentNode)})}),d3.timer.flush(),m}var t=e.models.bullet(),n="left",r=!1,i={top:5,right:40,bottom:20,left:120},s=function(e){return e.ranges},o=function(e){return e.markers},u=function(e){return e.measures},a=null,f=55,l=null,c=!0,h=function(e,t,n,r,i){return"<h3>"+t+"</h3>"+"<p>"+n+"</p>"},p="No Data Available.",d=d3.dispatch("tooltipShow","tooltipHide"),v=function(t,n){var r=t.pos[0]+(n.offsetLeft||0)+i.left,s=t.pos[1]+(n.offsetTop||0)+i.top,o=h(t.key,t.label,t.value,t,m);e.tooltip.show([r,s],o,t.value<0?"e":"w",null,n)};return t.dispatch.on("elementMouseover.tooltip",function(e){d.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){d.tooltipHide(e)}),d.on("tooltipHide",function(){c&&e.tooltip.cleanup()}),m.dispatch=d,m.bullet=t,d3.rebind(m,t,"color"),m.options=e.utils.optionsFunc.bind(m),m.orient=function(e){return arguments.length?(n=e,r=n=="right"||n=="bottom",m):n},m.ranges=function(e){return arguments.length?(s=e,m):s},m.markers=function(e){return arguments.length?(o=e,m):o},m.measures=function(e){return arguments.length?(u=e,m):u},m.width=function(e){return arguments.length?(a=e,m):a},m.height=function(e){return arguments.length?(f=e,m):f},m.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.right=typeof e.right!="undefined"?e.right:i.right,i.bottom=typeof e.bottom!="undefined"?e.bottom:i.bottom,i.left=typeof e.left!="undefined"?e.left:i.left,m):i},m.tickFormat=function(e){return arguments.length?(l=e,m):l},m.tooltips=function(e){return arguments.length?(c=e,m):c},m.tooltipContent=function(e){return arguments.length?(h=e,m):h},m.noData=function(e){return arguments.length?(p=e,m):p},m},e.models.cumulativeLineChart=function(){"use strict";function D(b){return b.each(function(b){function q(e,t){d3.select(D.container).style("cursor","ew-resize")}function R(e,t){M.x=d3.event.x,M.i=Math.round(O.invert(M.x)),rt()}function U(e,t){d3.select(D.container).style("cursor","auto"),x.index=M.i,k.stateChange(x)}function rt(){nt.data([M]);var e=D.transitionDuration();D.transitionDuration(0),D.update(),D.transitionDuration(e)}var A=d3.select(this).classed("nv-chart-"+S,!0),H=this,B=(f||parseInt(A.style("width"))||960)-u.left-u.right,j=(l||parseInt(A.style("height"))||400)-u.top-u.bottom;D.update=function(){A.transition().duration(L).call(D)},D.container=this,x.disabled=b.map(function(e){return!!e.disabled});if(!T){var F;T={};for(F in x)x[F]instanceof Array?T[F]=x[F].slice(0):T[F]=x[F]}var I=d3.behavior.drag().on("dragstart",q).on("drag",R).on("dragend",U);if(!b||!b.length||!b.filter(function(e){return e.values.length}).length){var z=A.selectAll(".nv-noData").data([N]);return z.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),z.attr("x",u.left+B/2).attr("y",u.top+j/2).text(function(e){return e}),D}A.selectAll(".nv-noData").remove(),w=t.xScale(),E=t.yScale();if(!y){var W=b.filter(function(e){return!e.disabled}).map(function(e,n){var r=d3.extent(e.values,t.y());return r[0]<-0.95&&(r[0]=-0.95),[(r[0]-r[1])/(1+r[1]),(r[1]-r[0])/(1+r[0])]}),X=[d3.min(W,function(e){return e[0]}),d3.max(W,function(e){return e[1]})];t.yDomain(X)}else t.yDomain(null);O.domain([0,b[0].values.length-1]).range([0,B]).clamp(!0);var b=P(M.i,b),V=g?"none":"all",$=A.selectAll("g.nv-wrap.nv-cumulativeLine").data([b]),J=$.enter().append("g").attr("class","nvd3 nv-wrap nv-cumulativeLine").append("g"),K=$.select("g");J.append("g").attr("class","nv-interactive"),J.append("g").attr("class","nv-x nv-axis").style("pointer-events","none"),J.append("g").attr("class","nv-y nv-axis"),J.append("g").attr("class","nv-background"),J.append("g").attr("class","nv-linesWrap").style("pointer-events",V),J.append("g").attr("class","nv-avgLinesWrap").style("pointer-events","none"),J.append("g").attr("class","nv-legendWrap"),J.append("g").attr("class","nv-controlsWrap"),c&&(i.width(B),K.select(".nv-legendWrap").datum(b).call(i),u.top!=i.height()&&(u.top=i.height(),j=(l||parseInt(A.style("height"))||400)-u.top-u.bottom),K.select(".nv-legendWrap").attr("transform","translate(0,"+ -u.top+")"));if(m){var Q=[{key:"Re-scale y-axis",disabled:!y}];s.width(140).color(["#444","#444","#444"]).rightAlign(!1).margin({top:5,right:0,bottom:5,left:20}),K.select(".nv-controlsWrap").datum(Q).attr("transform","translate(0,"+ -u.top+")").call(s)}$.attr("transform","translate("+u.left+","+u.top+")"),d&&K.select(".nv-y.nv-axis").attr("transform","translate("+B+",0)");var G=b.filter(function(e){return e.tempDisabled});$.select(".tempDisabled").remove(),G.length&&$.append("text").attr("class","tempDisabled").attr("x",B/2).attr("y","-.71em").style("text-anchor","end").text(G.map(function(e){return e.key}).join(", ")+" values cannot be calculated for this time period."),g&&(o.width(B).height(j).margin({left:u.left,top:u.top}).svgContainer(A).xScale(w),$.select(".nv-interactive").call(o)),J.select(".nv-background").append("rect"),K.select(".nv-background rect").attr("width",B).attr("height",j),t.y(function(e){return e.display.y}).width(B).height(j).color(b.map(function(e,t){return e.color||a(e,t)}).filter(function(e,t){return!b[t].disabled&&!b[t].tempDisabled}));var Y=K.select(".nv-linesWrap").datum(b.filter(function(e){return!e.disabled&&!e.tempDisabled}));Y.call(t),b.forEach(function(e,t){e.seriesIndex=t});var Z=b.filter(function(e){return!e.disabled&&!!C(e)}),et=K.select(".nv-avgLinesWrap").selectAll("line").data(Z,function(e){return e.key}),tt=function(e){var t=E(C(e));return t<0?0:t>j?j:t};et.enter().append("line").style("stroke-width",2).style("stroke-dasharray","10,10").style("stroke",function(e,n){return t.color()(e,e.seriesIndex)}).attr("x1",0).attr("x2",B).attr("y1",tt).attr("y2",tt),et.style("stroke-opacity",function(e){var t=E(C(e));return t<0||t>j?0:1}).attr("x1",0).attr("x2",B).attr("y1",tt).attr("y2",tt),et.exit().remove();var nt=Y.selectAll(".nv-indexLine").data([M]);nt.enter().append("rect").attr("class","nv-indexLine").attr("width",3).attr("x",-2).attr("fill","red").attr("fill-opacity",.5).style("pointer-events","all").call(I),nt.attr("transform",function(e){return"translate("+O(e.i)+",0)"}).attr("height",j),h&&(n.scale(w).ticks(Math.min(b[0].values.length,B/70)).tickSize(-j,0),K.select(".nv-x.nv-axis").attr("transform","translate(0,"+E.range()[0]+")"),d3.transition(K.select(".nv-x.nv-axis")).call(n)),p&&(r.scale(E).ticks(j/36).tickSize(-B,0),d3.transition(K.select(".nv-y.nv-axis")).call(r)),K.select(".nv-background rect").on("click",function(){M.x=d3.mouse(this)[0],M.i=Math.round(O.invert(M.x)),x.index=M.i,k.stateChange(x),rt()}),t.dispatch.on("elementClick",function(e){M.i=e.pointIndex,M.x=O(M.i),x.index=M.i,k.stateChange(x),rt()}),s.dispatch.on("legendClick",function(e,t){e.disabled=!e.disabled,y=!e.disabled,x.rescaleY=y,k.stateChange(x),D.update()}),i.dispatch.on("stateChange",function(e){x.disabled=e.disabled,k.stateChange(x),D.update()}),o.dispatch.on("elementMousemove",function(i){t.clearHighlights();var s,f,l,c=[];b.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){f=e.interactiveBisect(n.values,i.pointXValue,D.x()),t.highlightPoint(r,f,!0);var o=n.values[f];if(typeof o=="undefined")return;typeof s=="undefined"&&(s=o),typeof l=="undefined"&&(l=D.xScale()(D.x()(o,f))),c.push({key:n.key,value:D.y()(o,f),color:a(n,n.seriesIndex)})});if(c.length>2){var h=D.yScale().invert(i.mouseY),p=Math.abs(D.yScale().domain()[0]-D.yScale().domain()[1]),d=.03*p,m=e.nearestValueIndex(c.map(function(e){return e.value}),h,d);m!==null&&(c[m].highlight=!0)}var g=n.tickFormat()(D.x()(s,f),f);o.tooltip.position({left:l+u.left,top:i.mouseY+u.top}).chartContainer(H.parentNode).enabled(v).valueFormatter(function(e,t){return r.tickFormat()(e)}).data({value:g,series:c})(),o.renderGuideLine(l)}),o.dispatch.on("elementMouseout",function(e){k.tooltipHide(),t.clearHighlights()}),k.on("tooltipShow",function(e){v&&_(e,H.parentNode)}),k.on("changeState",function(e){typeof e.disabled!="undefined"&&(b.forEach(function(t,n){t.disabled=e.disabled[n]}),x.disabled=e.disabled),typeof e.index!="undefined"&&(M.i=e.index,M.x=O(M.i),x.index=e.index,nt.data([M])),typeof e.rescaleY!="undefined"&&(y=e.rescaleY),D.update()})}),D}function P(e,n){return n.map(function(n,r){if(!n.values)return n;var i=t.y()(n.values[e],e);return i<-0.95&&!A?(n.tempDisabled=!0,n):(n.tempDisabled=!1,n.values=
	n.values.map(function(e,n){return e.display={y:(t.y()(e,n)-i)/(1+i)},e}),n)})}var t=e.models.line(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.interactiveGuideline(),u={top:30,right:30,bottom:50,left:60},a=e.utils.defaultColor(),f=null,l=null,c=!0,h=!0,p=!0,d=!1,v=!0,m=!0,g=!1,y=!0,b=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},w,E,S=t.id(),x={index:0,rescaleY:y},T=null,N="No Data Available.",C=function(e){return e.average},k=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),L=250,A=!1;n.orient("bottom").tickPadding(7),r.orient(d?"right":"left"),s.updateState(!1);var O=d3.scale.linear(),M={i:0,x:0},_=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=b(i.series.key,a,f,i,D);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],k.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){k.tooltipHide(e)}),k.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),D.dispatch=k,D.lines=t,D.legend=i,D.xAxis=n,D.yAxis=r,D.interactiveLayer=o,d3.rebind(D,t,"defined","isArea","x","y","xScale","yScale","size","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","useVoronoi","id"),D.options=e.utils.optionsFunc.bind(D),D.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,D):u},D.width=function(e){return arguments.length?(f=e,D):f},D.height=function(e){return arguments.length?(l=e,D):l},D.color=function(t){return arguments.length?(a=e.utils.getColor(t),i.color(a),D):a},D.rescaleY=function(e){return arguments.length?(y=e,D):y},D.showControls=function(e){return arguments.length?(m=e,D):m},D.useInteractiveGuideline=function(e){return arguments.length?(g=e,e===!0&&(D.interactive(!1),D.useVoronoi(!1)),D):g},D.showLegend=function(e){return arguments.length?(c=e,D):c},D.showXAxis=function(e){return arguments.length?(h=e,D):h},D.showYAxis=function(e){return arguments.length?(p=e,D):p},D.rightAlignYAxis=function(e){return arguments.length?(d=e,r.orient(e?"right":"left"),D):d},D.tooltips=function(e){return arguments.length?(v=e,D):v},D.tooltipContent=function(e){return arguments.length?(b=e,D):b},D.state=function(e){return arguments.length?(x=e,D):x},D.defaultState=function(e){return arguments.length?(T=e,D):T},D.noData=function(e){return arguments.length?(N=e,D):N},D.average=function(e){return arguments.length?(C=e,D):C},D.transitionDuration=function(e){return arguments.length?(L=e,D):L},D.noErrorCheck=function(e){return arguments.length?(A=e,D):A},D},e.models.discreteBar=function(){"use strict";function E(e){return e.each(function(e){var i=n-t.left-t.right,E=r-t.top-t.bottom,S=d3.select(this);e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})});var T=p&&d?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0}})});s.domain(p||d3.merge(T).map(function(e){return e.x})).rangeBands(v||[0,i],.1),o.domain(d||d3.extent(d3.merge(T).map(function(e){return e.y}).concat(f))),c?o.range(m||[E-(o.domain()[0]<0?12:0),o.domain()[1]>0?12:0]):o.range(m||[E,0]),b=b||s,w=w||o.copy().range([o(0),o(0)]);var N=S.selectAll("g.nv-wrap.nv-discretebar").data([e]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-discretebar"),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-groups"),N.attr("transform","translate("+t.left+","+t.top+")");var A=N.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});A.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),A.exit().transition().style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),A.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}),A.transition().style("stroke-opacity",1).style("fill-opacity",.75);var O=A.selectAll("g.nv-bar").data(function(e){return e.values});O.exit().remove();var M=O.enter().append("g").attr("transform",function(e,t,n){return"translate("+(s(u(e,t))+s.rangeBand()*.05)+", "+o(0)+")"}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),g.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),g.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){g.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){g.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()});M.append("rect").attr("height",0).attr("width",s.rangeBand()*.9/e.length),c?(M.append("text").attr("text-anchor","middle"),O.select("text").text(function(e,t){return h(a(e,t))}).transition().attr("x",s.rangeBand()*.9/2).attr("y",function(e,t){return a(e,t)<0?o(a(e,t))-o(0)+12:-4})):O.selectAll("text").remove(),O.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).style("fill",function(e,t){return e.color||l(e,t)}).style("stroke",function(e,t){return e.color||l(e,t)}).select("rect").attr("class",y).transition().attr("width",s.rangeBand()*.9/e.length),O.transition().attr("transform",function(e,t){var n=s(u(e,t))+s.rangeBand()*.05,r=a(e,t)<0?o(0):o(0)-o(a(e,t))<1?o(0)-1:o(a(e,t));return"translate("+n+", "+r+")"}).select("rect").attr("height",function(e,t){return Math.max(Math.abs(o(a(e,t))-o(d&&d[0]||0))||1)}),b=s.copy(),w=o.copy()}),E}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.ordinal(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=e.utils.defaultColor(),c=!1,h=d3.format(",.2f"),p,d,v,m,g=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),y="discreteBar",b,w;return E.dispatch=g,E.options=e.utils.optionsFunc.bind(E),E.x=function(e){return arguments.length?(u=e,E):u},E.y=function(e){return arguments.length?(a=e,E):a},E.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,E):t},E.width=function(e){return arguments.length?(n=e,E):n},E.height=function(e){return arguments.length?(r=e,E):r},E.xScale=function(e){return arguments.length?(s=e,E):s},E.yScale=function(e){return arguments.length?(o=e,E):o},E.xDomain=function(e){return arguments.length?(p=e,E):p},E.yDomain=function(e){return arguments.length?(d=e,E):d},E.xRange=function(e){return arguments.length?(v=e,E):v},E.yRange=function(e){return arguments.length?(m=e,E):m},E.forceY=function(e){return arguments.length?(f=e,E):f},E.color=function(t){return arguments.length?(l=e.utils.getColor(t),E):l},E.id=function(e){return arguments.length?(i=e,E):i},E.showValues=function(e){return arguments.length?(c=e,E):c},E.valueFormat=function(e){return arguments.length?(h=e,E):h},E.rectClass=function(e){return arguments.length?(y=e,E):y},E},e.models.discreteBarChart=function(){"use strict";function w(e){return e.each(function(e){var u=d3.select(this),p=this,E=(s||parseInt(u.style("width"))||960)-i.left-i.right,S=(o||parseInt(u.style("height"))||400)-i.top-i.bottom;w.update=function(){g.beforeUpdate(),u.transition().duration(y).call(w)},w.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var T=u.selectAll(".nv-noData").data([m]);return T.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),T.attr("x",i.left+E/2).attr("y",i.top+S/2).text(function(e){return e}),w}u.selectAll(".nv-noData").remove(),d=t.xScale(),v=t.yScale().clamp(!0);var N=u.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([e]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-discreteBarWithAxes").append("g"),k=C.append("defs"),L=N.select("g");C.append("g").attr("class","nv-x nv-axis"),C.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),C.append("g").attr("class","nv-barsWrap"),L.attr("transform","translate("+i.left+","+i.top+")"),l&&L.select(".nv-y.nv-axis").attr("transform","translate("+E+",0)"),t.width(E).height(S);var A=L.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));A.transition().call(t),k.append("clipPath").attr("id","nv-x-label-clip-"+t.id()).append("rect"),L.select("#nv-x-label-clip-"+t.id()+" rect").attr("width",d.rangeBand()*(c?2:1)).attr("height",16).attr("x",-d.rangeBand()/(c?1:2));if(a){n.scale(d).ticks(E/100).tickSize(-S,0),L.select(".nv-x.nv-axis").attr("transform","translate(0,"+(v.range()[0]+(t.showValues()&&v.domain()[0]<0?16:0))+")"),L.select(".nv-x.nv-axis").transition().call(n);var O=L.select(".nv-x.nv-axis").selectAll("g");c&&O.selectAll("text").attr("transform",function(e,t,n){return"translate(0,"+(n%2==0?"5":"17")+")"})}f&&(r.scale(v).ticks(S/36).tickSize(-E,0),L.select(".nv-y.nv-axis").transition().call(r)),L.select(".nv-zeroLine line").attr("x1",0).attr("x2",E).attr("y1",v(0)).attr("y2",v(0)),g.on("tooltipShow",function(e){h&&b(e,p.parentNode)})}),w}var t=e.models.discreteBar(),n=e.models.axis(),r=e.models.axis(),i={top:15,right:10,bottom:50,left:60},s=null,o=null,u=e.utils.getColor(),a=!0,f=!0,l=!1,c=!1,h=!0,p=function(e,t,n,r,i){return"<h3>"+t+"</h3>"+"<p>"+n+"</p>"},d,v,m="No Data Available.",g=d3.dispatch("tooltipShow","tooltipHide","beforeUpdate"),y=250;n.orient("bottom").highlightZero(!1).showMaxMin(!1).tickFormat(function(e){return e}),r.orient(l?"right":"left").tickFormat(d3.format(",.1f"));var b=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=p(i.series.key,a,f,i,w);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+i.left,e.pos[1]+i.top],g.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){g.tooltipHide(e)}),g.on("tooltipHide",function(){h&&e.tooltip.cleanup()}),w.dispatch=g,w.discretebar=t,w.xAxis=n,w.yAxis=r,d3.rebind(w,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","id","showValues","valueFormat"),w.options=e.utils.optionsFunc.bind(w),w.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.right=typeof e.right!="undefined"?e.right:i.right,i.bottom=typeof e.bottom!="undefined"?e.bottom:i.bottom,i.left=typeof e.left!="undefined"?e.left:i.left,w):i},w.width=function(e){return arguments.length?(s=e,w):s},w.height=function(e){return arguments.length?(o=e,w):o},w.color=function(n){return arguments.length?(u=e.utils.getColor(n),t.color(u),w):u},w.showXAxis=function(e){return arguments.length?(a=e,w):a},w.showYAxis=function(e){return arguments.length?(f=e,w):f},w.rightAlignYAxis=function(e){return arguments.length?(l=e,r.orient(e?"right":"left"),w):l},w.staggerLabels=function(e){return arguments.length?(c=e,w):c},w.tooltips=function(e){return arguments.length?(h=e,w):h},w.tooltipContent=function(e){return arguments.length?(p=e,w):p},w.noData=function(e){return arguments.length?(m=e,w):m},w.transitionDuration=function(e){return arguments.length?(y=e,w):y},w},e.models.distribution=function(){"use strict";function l(e){return e.each(function(e){var a=n-(i==="x"?t.left+t.right:t.top+t.bottom),l=i=="x"?"y":"x",c=d3.select(this);f=f||u;var h=c.selectAll("g.nv-distribution").data([e]),p=h.enter().append("g").attr("class","nvd3 nv-distribution"),d=p.append("g"),v=h.select("g");h.attr("transform","translate("+t.left+","+t.top+")");var m=v.selectAll("g.nv-dist").data(function(e){return e},function(e){return e.key});m.enter().append("g"),m.attr("class",function(e,t){return"nv-dist nv-series-"+t}).style("stroke",function(e,t){return o(e,t)});var g=m.selectAll("line.nv-dist"+i).data(function(e){return e.values});g.enter().append("line").attr(i+"1",function(e,t){return f(s(e,t))}).attr(i+"2",function(e,t){return f(s(e,t))}),m.exit().selectAll("line.nv-dist"+i).transition().attr(i+"1",function(e,t){return u(s(e,t))}).attr(i+"2",function(e,t){return u(s(e,t))}).style("stroke-opacity",0).remove(),g.attr("class",function(e,t){return"nv-dist"+i+" nv-dist"+i+"-"+t}).attr(l+"1",0).attr(l+"2",r),g.transition().attr(i+"1",function(e,t){return u(s(e,t))}).attr(i+"2",function(e,t){return u(s(e,t))}),f=u.copy()}),l}var t={top:0,right:0,bottom:0,left:0},n=400,r=8,i="x",s=function(e){return e[i]},o=e.utils.defaultColor(),u=d3.scale.linear(),a,f;return l.options=e.utils.optionsFunc.bind(l),l.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,l):t},l.width=function(e){return arguments.length?(n=e,l):n},l.axis=function(e){return arguments.length?(i=e,l):i},l.size=function(e){return arguments.length?(r=e,l):r},l.getData=function(e){return arguments.length?(s=d3.functor(e),l):s},l.scale=function(e){return arguments.length?(u=e,l):u},l.color=function(t){return arguments.length?(o=e.utils.getColor(t),l):o},l},e.models.historicalBar=function(){"use strict";function w(E){return E.each(function(w){var E=n-t.left-t.right,S=r-t.top-t.bottom,T=d3.select(this);s.domain(d||d3.extent(w[0].values.map(u).concat(f))),c?s.range(m||[E*.5/w[0].values.length,E*(w[0].values.length-.5)/w[0].values.length]):s.range(m||[0,E]),o.domain(v||d3.extent(w[0].values.map(a).concat(l))).range(g||[S,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-s.domain()[0]*.01,s.domain()[1]+s.domain()[1]*.01]):s.domain([-1,1])),o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]+o.domain()[0]*.01,o.domain()[1]-o.domain()[1]*.01]):o.domain([-1,1]));var N=T.selectAll("g.nv-wrap.nv-historicalBar-"+i).data([w[0].values]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBar-"+i),k=C.append("defs"),L=C.append("g"),A=N.select("g");L.append("g").attr("class","nv-bars"),N.attr("transform","translate("+t.left+","+t.top+")"),T.on("click",function(e,t){y.chartClick({data:e,index:t,pos:d3.event,id:i})}),k.append("clipPath").attr("id","nv-chart-clip-path-"+i).append("rect"),N.select("#nv-chart-clip-path-"+i+" rect").attr("width",E).attr("height",S),A.attr("clip-path",h?"url(#nv-chart-clip-path-"+i+")":"");var O=N.select(".nv-bars").selectAll(".nv-bar").data(function(e){return e},function(e,t){return u(e,t)});O.exit().remove();var M=O.enter().append("rect").attr("x",0).attr("y",function(t,n){return e.utils.NaNtoZero(o(Math.max(0,a(t,n))))}).attr("height",function(t,n){return e.utils.NaNtoZero(Math.abs(o(a(t,n))-o(0)))}).attr("transform",function(e,t){return"translate("+(s(u(e,t))-E/w[0].values.length*.45)+",0)"}).on("mouseover",function(e,t){if(!b)return;d3.select(this).classed("hover",!0),y.elementMouseover({point:e,series:w[0],pos:[s(u(e,t)),o(a(e,t))],pointIndex:t,seriesIndex:0,e:d3.event})}).on("mouseout",function(e,t){if(!b)return;d3.select(this).classed("hover",!1),y.elementMouseout({point:e,series:w[0],pointIndex:t,seriesIndex:0,e:d3.event})}).on("click",function(e,t){if(!b)return;y.elementClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()}).on("dblclick",function(e,t){if(!b)return;y.elementDblClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()});O.attr("fill",function(e,t){return p(e,t)}).attr("class",function(e,t,n){return(a(e,t)<0?"nv-bar negative":"nv-bar positive")+" nv-bar-"+n+"-"+t}).transition().attr("transform",function(e,t){return"translate("+(s(u(e,t))-E/w[0].values.length*.45)+",0)"}).attr("width",E/w[0].values.length*.9),O.transition().attr("y",function(t,n){var r=a(t,n)<0?o(0):o(0)-o(a(t,n))<1?o(0)-1:o(a(t,n));return e.utils.NaNtoZero(r)}).attr("height",function(t,n){return e.utils.NaNtoZero(Math.max(Math.abs(o(a(t,n))-o(0)),1))})}),w}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[],l=[0],c=!1,h=!0,p=e.utils.defaultColor(),d,v,m,g,y=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),b=!0;return w.highlightPoint=function(e,t){d3.select(".nv-historicalBar-"+i).select(".nv-bars .nv-bar-0-"+e).classed("hover",t)},w.clearHighlights=function(){d3.select(".nv-historicalBar-"+i).select(".nv-bars .nv-bar.hover").classed("hover",!1)},w.dispatch=y,w.options=e.utils.optionsFunc.bind(w),w.x=function(e){return arguments.length?(u=e,w):u},w.y=function(e){return arguments.length?(a=e,w):a},w.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,w):t},w.width=function(e){return arguments.length?(n=e,w):n},w.height=function(e){return arguments.length?(r=e,w):r},w.xScale=function(e){return arguments.length?(s=e,w):s},w.yScale=function(e){return arguments.length?(o=e,w):o},w.xDomain=function(e){return arguments.length?(d=e,w):d},w.yDomain=function(e){return arguments.length?(v=e,w):v},w.xRange=function(e){return arguments.length?(m=e,w):m},w.yRange=function(e){return arguments.length?(g=e,w):g},w.forceX=function(e){return arguments.length?(f=e,w):f},w.forceY=function(e){return arguments.length?(l=e,w):l},w.padData=function(e){return arguments.length?(c=e,w):c},w.clipEdge=function(e){return arguments.length?(h=e,w):h},w.color=function(t){return arguments.length?(p=e.utils.getColor(t),w):p},w.id=function(e){return arguments.length?(i=e,w):i},w.interactive=function(e){return arguments.length?(b=!1,w):b},w},e.models.historicalBarChart=function(){"use strict";function x(e){return e.each(function(d){var T=d3.select(this),N=this,C=(u||parseInt(T.style("width"))||960)-s.left-s.right,k=(a||parseInt(T.style("height"))||400)-s.top-s.bottom;x.update=function(){T.transition().duration(E).call(x)},x.container=this,g.disabled=d.map(function(e){return!!e.disabled});if(!y){var L;y={};for(L in g)g[L]instanceof Array?y[L]=g[L].slice(0):y[L]=g[L]}if(!d||!d.length||!d.filter(function(e){return e.values.length}).length){var A=T.selectAll(".nv-noData").data([b]);return A.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),A.attr("x",s.left+C/2).attr("y",s.top+k/2).text(function(e){return e}),x}T.selectAll(".nv-noData").remove(),v=t.xScale(),m=t.yScale();var O=T.selectAll("g.nv-wrap.nv-historicalBarChart").data([d]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBarChart").append("g"),_=O.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y nv-axis"),M.append("g").attr("class","nv-barsWrap"),M.append("g").attr("class","nv-legendWrap"),f&&(i.width(C),_.select(".nv-legendWrap").datum(d).call(i),s.top!=i.height()&&(s.top=i.height(),k=(a||parseInt(T.style("height"))||400)-s.top-s.bottom),O.select(".nv-legendWrap").attr("transform","translate(0,"+ -s.top+")")),O.attr("transform","translate("+s.left+","+s.top+")"),h&&_.select(".nv-y.nv-axis").attr("transform","translate("+C+",0)"),t.width(C).height(k).color(d.map(function(e,t){return e.color||o(e,t)}).filter(function(e,t){return!d[t].disabled}));var D=_.select(".nv-barsWrap").datum(d.filter(function(e){return!e.disabled}));D.transition().call(t),l&&(n.scale(v).tickSize(-k,0),_.select(".nv-x.nv-axis").attr("transform","translate(0,"+m.range()[0]+")"),_.select(".nv-x.nv-axis").transition().call(n)),c&&(r.scale(m).ticks(k/36).tickSize(-C,0),_.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("legendClick",function(t,n){t.disabled=!t.disabled,d.filter(function(e){return!e.disabled}).length||d.map(function(e){return e.disabled=!1,O.selectAll(".nv-series").classed("disabled",!1),e}),g.disabled=d.map(function(e){return!!e.disabled}),w.stateChange(g),e.transition().call(x)}),i.dispatch.on("legendDblclick",function(e){d.forEach(function(e){e.disabled=!0}),e.disabled=!1,g.disabled=d.map(function(e){return!!e.disabled}),w.stateChange(g),x.update()}),w.on("tooltipShow",function(e){p&&S(e,N.parentNode)}),w.on("changeState",function(e){typeof e.disabled!="undefined"&&(d.forEach(function(t,n){t.disabled=e.disabled[n]}),g.disabled=e.disabled),x.update()})}),x}var t=e.models.historicalBar(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s={top:30,right:90,bottom:50,left:90},o=e.utils.defaultColor(),u=null,a=null,f=!1,l=!0,c=!0,h=!1,p=!0,d=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},v,m,g={},y=null,b="No Data Available.",w=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),E=250;n.orient("bottom").tickPadding(7),r.orient(h?"right":"left");var S=function(i,s){if(s){var o=d3.select(s).select("svg"),u=o.node()?o.attr("viewBox"):null;if(u){u=u.split(" ");var a=parseInt(o.style("width"))/u[2];i.pos[0]=i.pos[0]*a,i.pos[1]=i.pos[1]*a}}var f=i.pos[0]+(s.offsetLeft||0),l=i.pos[1]+(s.offsetTop||0),c=n.tickFormat()(t.x()(i.point,i.pointIndex)),h=r.tickFormat()(t.y()(i.point,i.pointIndex)),p=d(i.series.key,c,h,i,x);e.tooltip.show([f,l],p,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+s.left,e.pos[1]+s.top],w.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){w.tooltipHide(e)}),w.on("tooltipHide",function(){p&&e.tooltip.cleanup()}),x.dispatch=w,x.bars=t,x.legend=i,x.xAxis=n,x.yAxis=r,d3.rebind(x,t,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","id","interpolate","highlightPoint","clearHighlights","interactive"),x.options=e.utils.optionsFunc.bind(x),x.margin=function(e){return arguments.length?(s.top=typeof e.top!="undefined"?e.top:s.top,s.right=typeof e.right!="undefined"?e.right:s.right,s.bottom=typeof e.bottom!="undefined"?e.bottom:s.bottom,s.left=typeof e.left!="undefined"?e.left:s.left,x):s},x.width=function(e){return arguments.length?(u=e,x):u},x.height=function(e){return arguments.length?(a=e,x):a},x.color=function(t){return arguments.length?(o=e.utils.getColor(t),i.color(o),x):o},x.showLegend=function(e){return arguments.length?(f=e,x):f},x.showXAxis=function(e){return arguments.length?(l=e,x):l},x.showYAxis=function(e){return arguments.length?(c=e,x):c},x.rightAlignYAxis=function(e){return arguments.length?(h=e,r.orient(e?"right":"left"),x):h},x.tooltips=function(e){return arguments.length?(p=e,x):p},x.tooltipContent=function(e){return arguments.length?(d=e,x):d},x.state=function(e){return arguments.length?(g=e,x):g},x.defaultState=function(e){return arguments.length?(y=e,x):y},x.noData=function(e){return arguments.length?(b=e,x):b},x.transitionDuration=function(e){return arguments.length?(E=e,x):E},x},e.models.indentedTree=function(){"use strict";function g(e){return e.each(function(e){function k(e,t,n){d3.event.stopPropagation();if(d3.event.shiftKey&&!n)return d3.event.shiftKey=!1,e.values&&e.values.forEach(function(e){(e.values||e._values)&&k(e,0,!0)}),!0;if(!O(e))return!0;e.values?(e._values=e.values,e.values=null):(e.values=e._values,e._values=null),g.update()}function L(e){return e._values&&e._values.length?h:e.values&&e.values.length?p:""}function A(e){return e._values&&e._values.length}function O(e){var t=e.values||e._values;return t&&t.length}var t=1,n=d3.select(this),i=d3.layout.tree().children(function(e){return e.values}).size([r,f]);g.update=function(){n.transition().duration(600).call(g)},e[0]||(e[0]={key:a});var s=i.nodes(e[0]),y=d3.select(this).selectAll("div").data([[s]]),b=y.enter().append("div").attr("class","nvd3 nv-wrap nv-indentedtree"),w=b.append("table"),E=y.select("table").attr("width","100%").attr("class",c);if(o){var S=w.append("thead"),x=S.append("tr");l.forEach(function(e){x.append("th").attr("width",e.width?e.width:"10%").style("text-align",e.type=="numeric"?"right":"left").append("span").text(e.label)})}var T=E.selectAll("tbody").data(function(e){return e});T.enter().append("tbody"),t=d3.max(s,function(e){return e.depth}),i.size([r,t*f]);var N=T.selectAll("tr").data(function(e){return e.filter(function(e){return u&&!e.children?u(e):!0})},function(e,t){return e.id||e.id||++m});N.exit().remove(),N.select("img.nv-treeicon").attr("src",L).classed("folded",A);var C=N.enter().append("tr");l.forEach(function(e,t){var n=C.append("td").style("padding-left",function(e){return(t?0:e.depth*f+12+(L(e)?0:16))+"px"},"important").style("text-align",e.type=="numeric"?"right":"left");t==0&&n.append("img").classed("nv-treeicon",!0).classed("nv-folded",A).attr("src",L).style("width","14px").style("height","14px").style("padding","0 1px").style("display",function(e){return L(e)?"inline-block":"none"}).on("click",k),n.each(function(n){!t&&v(n)?d3.select(this).append("a").attr("href",v).attr("class",d3.functor(e.classes)).append("span"):d3.select(this).append("span"),d3.select(this).select("span").attr("class",d3.functor(e.classes)).text(function(t){return e.format?e.format(t):t[e.key]||"-"})}),e.showCount&&(n.append("span").attr("class","nv-childrenCount"),N.selectAll("span.nv-childrenCount").text(function(e){return e.values&&e.values.length||e._values&&e._values.length?"("+(e.values&&e.values.filter(function(e){return u?u(e):!0}).length||e._values&&e._values.filter(function(e){return u?u(e):!0}).length||0)+")":""}))}),N.order().on("click",function(e){d.elementClick({row:this,data:e,pos:[e.x,e.y]})}).on("dblclick",function(e){d.elementDblclick({row:this,data:e,pos:[e.x,e.y]})}).on("mouseover",function(e){d.elementMouseover({row:this,data:e,pos:[e.x,e.y]})}).on("mouseout",function(e){d.elementMouseout({row:this,data:e,pos:[e.x,e.y]})})}),g}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e4),o=!0,u=!1,a="No Data Available.",f=20,l=[{key:"key",label:"Name",type:"text"}],c=null,h="images/grey-plus.png",p="images/grey-minus.png",d=d3.dispatch("elementClick","elementDblclick","elementMouseover","elementMouseout"),v=function(e){return e.url},m=0;return g.options=e.utils.optionsFunc.bind(g),g.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,g):t},g.width=function(e){return arguments.length?(n=e,g):n},g.height=function(e){return arguments.length?(r=e,g):r},g.color=function(t){return arguments.length?(i=e.utils.getColor(t),scatter.color(i),g):i},g.id=function(e){return arguments.length?(s=e,g):s},g.header=function(e){return arguments.length?(o=e,g):o},g.noData=function(e){return arguments.length?(a=e,g):a},g.filterZero=function(e){return arguments.length?(u=e,g):u},g.columns=function(e){return arguments.length?(l=e,g):l},g.tableClass=function(e){return arguments.length?(c=e,g):c},g.iconOpen=function(e){return arguments.length?(h=e,g):h},g.iconClose=function(e){return arguments.length?(p=e,g):p},g.getUrl=function(e){return arguments.length?(v=e,g):v},g},e.models.legend=function(){"use strict";function c(h){return h.each(function(c){var h=n-t.left-t.right,p=d3.select(this),d=p.selectAll("g.nv-legend").data([c]),v=d.enter().append("g").attr("class","nvd3 nv-legend").append("g"),m=d.select("g");d.attr("transform","translate("+t.left+","+t.top+")");var g=m.selectAll(".nv-series").data(function(e){return e}),y=g.enter().append("g").attr("class","nv-series").on("mouseover",function(e,t){l.legendMouseover(e,t)}).on("mouseout",function(e,t){l.legendMouseout(e,t)}).on("click",function(e,t){l.legendClick(e,t),a&&(f?(c.forEach(function(e){e.disabled=!0}),e.disabled=!1):(e.disabled=!e.disabled,c.every(function(e){return e.disabled})&&c.forEach(function(e){e.disabled=!1})),l.stateChange({disabled:c.map(function(e){return!!e.disabled})}))}).on("dblclick",function(e,t){l.legendDblclick(e,t),a&&(c.forEach(function(e){e.disabled=!0}),e.disabled=!1,l.stateChange({disabled:c.map(function(e){return!!e.disabled})}))});y.append("circle").style("stroke-width",2).attr("class","nv-legend-symbol").attr("r",5),y.append("text").attr("text-anchor","start").attr("class","nv-legend-text").attr("dy",".32em").attr("dx","8"),g.classed("disabled",function(e){return e.disabled}),g.exit().remove(),g.select("circle").style("fill",function(e,t){return e.color||s(e,t)}).style("stroke",function(e,t){return e.color||s(e,t)}),g.select("text").text(i);if(o){var b=[];g.each(function(t,n){var r=d3.select(this).select("text"),i;try{i=r.getComputedTextLength();if(i<=0)throw Error()}catch(s){i=e.utils.calcApproxTextWidth(r)}b.push(i+28)});var w=0,E=0,S=[];while(E<h&&w<b.length)S[w]=b[w],E+=b[w++];w===0&&(w=1);while(E>h&&w>1){S=[],w--;for(var x=0;x<b.length;x++)b[x]>(S[x%w]||0)&&(S[x%w]=b[x]);E=S.reduce(function(e,t,n,r){return e+t})}var T=[];for(var N=0,C=0;N<w;N++)T[N]=C,C+=S[N];g.attr("transform",function(e,t){return"translate("+T[t%w]+","+(5+Math.floor(t/w)*20)+")"}),u?m.attr("transform","translate("+(n-t.right-E)+","+t.top+")"):m.attr("transform","translate(0,"+t.top+")"),r=t.top+t.bottom+Math.ceil(b.length/w)*20}else{var k=5,L=5,A=0,O;g.attr("transform",function(e,r){var i=d3.select(this).select("text").node().getComputedTextLength()+28;return O=L,n<t.left+t.right+O+i&&(L=O=5,k+=20),L+=i,L>A&&(A=L),"translate("+O+","+k+")"}),m.attr("transform","translate("+(n-t.right-A)+","+t.top+")"),r=t.top+t.bottom+k+15}}),c}var t={top:5,right:0,bottom:5,left:0},n=400,r=20,i=function(e){return e.key},s=e.utils.defaultColor(),o=!0,u=!0,a=!0,f=!1,l=d3.dispatch("legendClick","legendDblclick","legendMouseover","legendMouseout","stateChange");return c.dispatch=l,c.options=e.utils.optionsFunc.bind(c),c.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,c):t},c.width=function(e){return arguments.length?(n=e,c):n},c.height=function(e){return arguments.length?(r=e,c):r},c.key=function(e){return arguments.length?(i=e,c):i},c.color=function(t){return arguments.length?(s=e.utils.getColor(t),c):s},c.align=function(e){return arguments.length?(o=e,c):o},c.rightAlign=function(e){return arguments.length?(u=e,c):u},c.updateState=function(e){return arguments.length?(a=e,c):a},c.radioButtonMode=function(e){return arguments.length?(f=e,c):f},c},e.models.line=function(){"use strict";function m(g){return g.each(function(m){var g=r-n.left-n.right,b=i-n.top-n.bottom,w=d3.select(this);c=t.xScale(),h=t.yScale(),d=d||c,v=v||h;var E=w.selectAll("g.nv-wrap.nv-line").data([m]),S=E.enter().append("g").attr("class","nvd3 nv-wrap nv-line"),T=S.append("defs"),N=S.append("g"),C=E.select("g");N.append("g").attr("class","nv-groups"),N.append("g").attr("class","nv-scatterWrap"),E.attr("transform","translate("+n.left+","+n.top+")"),t.width(g).height(b);var k=E.select(".nv-scatterWrap");k.transition().call(t),T.append("clipPath").attr("id","nv-edge-clip-"+t.id()).append("rect"),E.select("#nv-edge-clip-"+t.id()+" rect").attr("width",g).attr("height",b),C.attr("clip-path",l?"url(#nv-edge-clip-"+t.id()+")":""),k.attr("clip-path",l?"url(#nv-edge-clip-"+t.id()+")":"");var L=E.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});L.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),L.exit().remove(),L.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return s(e,t)}).style("stroke",function(e,t){return s(e,t)}),L.transition().style("stroke-opacity",1).style("fill-opacity",.5);var A=L.selectAll("path.nv-area").data(function(e){return f(e)?[e]:[]});A.enter().append("path").attr("class","nv-area").attr("d",function(t){return d3.svg.area().interpolate(p).defined(a).x(function(t,n){return e.
	utils.NaNtoZero(d(o(t,n)))}).y0(function(t,n){return e.utils.NaNtoZero(v(u(t,n)))}).y1(function(e,t){return v(h.domain()[0]<=0?h.domain()[1]>=0?0:h.domain()[1]:h.domain()[0])}).apply(this,[t.values])}),L.exit().selectAll("path.nv-area").remove(),A.transition().attr("d",function(t){return d3.svg.area().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(c(o(t,n)))}).y0(function(t,n){return e.utils.NaNtoZero(h(u(t,n)))}).y1(function(e,t){return h(h.domain()[0]<=0?h.domain()[1]>=0?0:h.domain()[1]:h.domain()[0])}).apply(this,[t.values])});var O=L.selectAll("path.nv-line").data(function(e){return[e.values]});O.enter().append("path").attr("class","nv-line").attr("d",d3.svg.line().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(d(o(t,n)))}).y(function(t,n){return e.utils.NaNtoZero(v(u(t,n)))})),O.transition().attr("d",d3.svg.line().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(c(o(t,n)))}).y(function(t,n){return e.utils.NaNtoZero(h(u(t,n)))})),d=c.copy(),v=h.copy()}),m}var t=e.models.scatter(),n={top:0,right:0,bottom:0,left:0},r=960,i=500,s=e.utils.defaultColor(),o=function(e){return e.x},u=function(e){return e.y},a=function(e,t){return!isNaN(u(e,t))&&u(e,t)!==null},f=function(e){return e.area},l=!1,c,h,p="linear";t.size(16).sizeDomain([16,256]);var d,v;return m.dispatch=t.dispatch,m.scatter=t,d3.rebind(m,t,"id","interactive","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","forceX","forceY","forceSize","clipVoronoi","useVoronoi","clipRadius","padData","highlightPoint","clearHighlights"),m.options=e.utils.optionsFunc.bind(m),m.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,m):n},m.width=function(e){return arguments.length?(r=e,m):r},m.height=function(e){return arguments.length?(i=e,m):i},m.x=function(e){return arguments.length?(o=e,t.x(e),m):o},m.y=function(e){return arguments.length?(u=e,t.y(e),m):u},m.clipEdge=function(e){return arguments.length?(l=e,m):l},m.color=function(n){return arguments.length?(s=e.utils.getColor(n),t.color(s),m):s},m.interpolate=function(e){return arguments.length?(p=e,m):p},m.defined=function(e){return arguments.length?(a=e,m):a},m.isArea=function(e){return arguments.length?(f=d3.functor(e),m):f},m},e.models.lineChart=function(){"use strict";function N(m){return m.each(function(m){var C=d3.select(this),k=this,L=(a||parseInt(C.style("width"))||960)-o.left-o.right,A=(f||parseInt(C.style("height"))||400)-o.top-o.bottom;N.update=function(){C.transition().duration(x).call(N)},N.container=this,b.disabled=m.map(function(e){return!!e.disabled});if(!w){var O;w={};for(O in b)b[O]instanceof Array?w[O]=b[O].slice(0):w[O]=b[O]}if(!m||!m.length||!m.filter(function(e){return e.values.length}).length){var M=C.selectAll(".nv-noData").data([E]);return M.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),M.attr("x",o.left+L/2).attr("y",o.top+A/2).text(function(e){return e}),N}C.selectAll(".nv-noData").remove(),g=t.xScale(),y=t.yScale();var _=C.selectAll("g.nv-wrap.nv-lineChart").data([m]),D=_.enter().append("g").attr("class","nvd3 nv-wrap nv-lineChart").append("g"),P=_.select("g");D.append("rect").style("opacity",0),D.append("g").attr("class","nv-x nv-axis"),D.append("g").attr("class","nv-y nv-axis"),D.append("g").attr("class","nv-linesWrap"),D.append("g").attr("class","nv-legendWrap"),D.append("g").attr("class","nv-interactive"),P.select("rect").attr("width",L).attr("height",A>0?A:0),l&&(i.width(L),P.select(".nv-legendWrap").datum(m).call(i),o.top!=i.height()&&(o.top=i.height(),A=(f||parseInt(C.style("height"))||400)-o.top-o.bottom),_.select(".nv-legendWrap").attr("transform","translate(0,"+ -o.top+")")),_.attr("transform","translate("+o.left+","+o.top+")"),p&&P.select(".nv-y.nv-axis").attr("transform","translate("+L+",0)"),d&&(s.width(L).height(A).margin({left:o.left,top:o.top}).svgContainer(C).xScale(g),_.select(".nv-interactive").call(s)),t.width(L).height(A).color(m.map(function(e,t){return e.color||u(e,t)}).filter(function(e,t){return!m[t].disabled}));var H=P.select(".nv-linesWrap").datum(m.filter(function(e){return!e.disabled}));H.transition().call(t),c&&(n.scale(g).ticks(L/100).tickSize(-A,0),P.select(".nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),P.select(".nv-x.nv-axis").transition().call(n)),h&&(r.scale(y).ticks(A/36).tickSize(-L,0),P.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),N.update()}),s.dispatch.on("elementMousemove",function(i){t.clearHighlights();var a,f,l,c=[];m.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){f=e.interactiveBisect(n.values,i.pointXValue,N.x()),t.highlightPoint(r,f,!0);var s=n.values[f];if(typeof s=="undefined")return;typeof a=="undefined"&&(a=s),typeof l=="undefined"&&(l=N.xScale()(N.x()(s,f))),c.push({key:n.key,value:N.y()(s,f),color:u(n,n.seriesIndex)})});if(c.length>2){var h=N.yScale().invert(i.mouseY),p=Math.abs(N.yScale().domain()[0]-N.yScale().domain()[1]),d=.03*p,g=e.nearestValueIndex(c.map(function(e){return e.value}),h,d);g!==null&&(c[g].highlight=!0)}var y=n.tickFormat()(N.x()(a,f));s.tooltip.position({left:l+o.left,top:i.mouseY+o.top}).chartContainer(k.parentNode).enabled(v).valueFormatter(function(e,t){return r.tickFormat()(e)}).data({value:y,series:c})(),s.renderGuideLine(l)}),s.dispatch.on("elementMouseout",function(e){S.tooltipHide(),t.clearHighlights()}),S.on("tooltipShow",function(e){v&&T(e,k.parentNode)}),S.on("changeState",function(e){typeof e.disabled!="undefined"&&m.length===e.disabled.length&&(m.forEach(function(t,n){t.disabled=e.disabled[n]}),b.disabled=e.disabled),N.update()})}),N}var t=e.models.line(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.interactiveGuideline(),o={top:30,right:20,bottom:50,left:60},u=e.utils.defaultColor(),a=null,f=null,l=!0,c=!0,h=!0,p=!1,d=!1,v=!0,m=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},g,y,b={},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),x=250;n.orient("bottom").tickPadding(7),r.orient(p?"right":"left");var T=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=m(i.series.key,a,f,i,N);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),N.dispatch=S,N.lines=t,N.legend=i,N.xAxis=n,N.yAxis=r,N.interactiveLayer=s,d3.rebind(N,t,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","useVoronoi","id","interpolate"),N.options=e.utils.optionsFunc.bind(N),N.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,N):o},N.width=function(e){return arguments.length?(a=e,N):a},N.height=function(e){return arguments.length?(f=e,N):f},N.color=function(t){return arguments.length?(u=e.utils.getColor(t),i.color(u),N):u},N.showLegend=function(e){return arguments.length?(l=e,N):l},N.showXAxis=function(e){return arguments.length?(c=e,N):c},N.showYAxis=function(e){return arguments.length?(h=e,N):h},N.rightAlignYAxis=function(e){return arguments.length?(p=e,r.orient(e?"right":"left"),N):p},N.useInteractiveGuideline=function(e){return arguments.length?(d=e,e===!0&&(N.interactive(!1),N.useVoronoi(!1)),N):d},N.tooltips=function(e){return arguments.length?(v=e,N):v},N.tooltipContent=function(e){return arguments.length?(m=e,N):m},N.state=function(e){return arguments.length?(b=e,N):b},N.defaultState=function(e){return arguments.length?(w=e,N):w},N.noData=function(e){return arguments.length?(E=e,N):E},N.transitionDuration=function(e){return arguments.length?(x=e,N):x},N},e.models.linePlusBarChart=function(){"use strict";function T(e){return e.each(function(e){var l=d3.select(this),c=this,v=(a||parseInt(l.style("width"))||960)-u.left-u.right,N=(f||parseInt(l.style("height"))||400)-u.top-u.bottom;T.update=function(){l.transition().call(T)},b.disabled=e.map(function(e){return!!e.disabled});if(!w){var C;w={};for(C in b)b[C]instanceof Array?w[C]=b[C].slice(0):w[C]=b[C]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var k=l.selectAll(".nv-noData").data([E]);return k.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),k.attr("x",u.left+v/2).attr("y",u.top+N/2).text(function(e){return e}),T}l.selectAll(".nv-noData").remove();var L=e.filter(function(e){return!e.disabled&&e.bar}),A=e.filter(function(e){return!e.bar});m=A.filter(function(e){return!e.disabled}).length&&A.filter(function(e){return!e.disabled})[0].values.length?t.xScale():n.xScale(),g=n.yScale(),y=t.yScale();var O=d3.select(this).selectAll("g.nv-wrap.nv-linePlusBar").data([e]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),_=O.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y1 nv-axis"),M.append("g").attr("class","nv-y2 nv-axis"),M.append("g").attr("class","nv-barsWrap"),M.append("g").attr("class","nv-linesWrap"),M.append("g").attr("class","nv-legendWrap"),p&&(o.width(v/2),_.select(".nv-legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.bar?" (left axis)":" (right axis)"),e})).call(o),u.top!=o.height()&&(u.top=o.height(),N=(f||parseInt(l.style("height"))||400)-u.top-u.bottom),_.select(".nv-legendWrap").attr("transform","translate("+v/2+","+ -u.top+")")),O.attr("transform","translate("+u.left+","+u.top+")"),t.width(v).height(N).color(e.map(function(e,t){return e.color||h(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar})),n.width(v).height(N).color(e.map(function(e,t){return e.color||h(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar}));var D=_.select(".nv-barsWrap").datum(L.length?L:[{values:[]}]),P=_.select(".nv-linesWrap").datum(A[0]&&!A[0].disabled?A:[{values:[]}]);d3.transition(D).call(n),d3.transition(P).call(t),r.scale(m).ticks(v/100).tickSize(-N,0),_.select(".nv-x.nv-axis").attr("transform","translate(0,"+g.range()[0]+")"),d3.transition(_.select(".nv-x.nv-axis")).call(r),i.scale(g).ticks(N/36).tickSize(-v,0),d3.transition(_.select(".nv-y1.nv-axis")).style("opacity",L.length?1:0).call(i),s.scale(y).ticks(N/36).tickSize(L.length?0:-v,0),_.select(".nv-y2.nv-axis").style("opacity",A.length?1:0).attr("transform","translate("+v+",0)"),d3.transition(_.select(".nv-y2.nv-axis")).call(s),o.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),T.update()}),S.on("tooltipShow",function(e){d&&x(e,c.parentNode)}),S.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),b.disabled=t.disabled),T.update()})}),T}var t=e.models.line(),n=e.models.historicalBar(),r=e.models.axis(),i=e.models.axis(),s=e.models.axis(),o=e.models.legend(),u={top:30,right:60,bottom:50,left:60},a=null,f=null,l=function(e){return e.x},c=function(e){return e.y},h=e.utils.defaultColor(),p=!0,d=!0,v=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},m,g,y,b={},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");n.padData(!0),t.clipEdge(!1).padData(!0),r.orient("bottom").tickPadding(7).highlightZero(!1),i.orient("left"),s.orient("right");var x=function(n,o){var u=n.pos[0]+(o.offsetLeft||0),a=n.pos[1]+(o.offsetTop||0),f=r.tickFormat()(t.x()(n.point,n.pointIndex)),l=(n.series.bar?i:s).tickFormat()(t.y()(n.point,n.pointIndex)),c=v(n.series.key,f,l,n,T);e.tooltip.show([u,a],c,n.value<0?"n":"s",null,o)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),n.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],S.tooltipShow(e)}),n.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){d&&e.tooltip.cleanup()}),T.dispatch=S,T.legend=o,T.lines=t,T.bars=n,T.xAxis=r,T.y1Axis=i,T.y2Axis=s,d3.rebind(T,t,"defined","size","clipVoronoi","interpolate"),T.options=e.utils.optionsFunc.bind(T),T.x=function(e){return arguments.length?(l=e,t.x(e),n.x(e),T):l},T.y=function(e){return arguments.length?(c=e,t.y(e),n.y(e),T):c},T.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,T):u},T.width=function(e){return arguments.length?(a=e,T):a},T.height=function(e){return arguments.length?(f=e,T):f},T.color=function(t){return arguments.length?(h=e.utils.getColor(t),o.color(h),T):h},T.showLegend=function(e){return arguments.length?(p=e,T):p},T.tooltips=function(e){return arguments.length?(d=e,T):d},T.tooltipContent=function(e){return arguments.length?(v=e,T):v},T.state=function(e){return arguments.length?(b=e,T):b},T.defaultState=function(e){return arguments.length?(w=e,T):w},T.noData=function(e){return arguments.length?(E=e,T):E},T},e.models.lineWithFocusChart=function(){"use strict";function k(e){return e.each(function(e){function U(e){var t=+(e=="e"),n=t?1:-1,r=M/3;return"M"+.5*n+","+r+"A6,6 0 0 "+t+" "+6.5*n+","+(r+6)+"V"+(2*r-6)+"A6,6 0 0 "+t+" "+.5*n+","+2*r+"Z"+"M"+2.5*n+","+(r+8)+"V"+(2*r-8)+"M"+4.5*n+","+(r+8)+"V"+(2*r-8)}function z(){a.empty()||a.extent(w),I.data([a.empty()?g.domain():w]).each(function(e,t){var n=g(e[0])-v.range()[0],r=v.range()[1]-g(e[1]);d3.select(this).select(".left").attr("width",n<0?0:n),d3.select(this).select(".right").attr("x",g(e[1])).attr("width",r<0?0:r)})}function W(){w=a.empty()?null:a.extent();var n=a.empty()?g.domain():a.extent();if(Math.abs(n[0]-n[1])<=1)return;T.brush({extent:n,brush:a}),z();var s=H.select(".nv-focus .nv-linesWrap").datum(e.filter(function(e){return!e.disabled}).map(function(e,r){return{key:e.key,values:e.values.filter(function(e,r){return t.x()(e,r)>=n[0]&&t.x()(e,r)<=n[1]})}}));s.transition().duration(N).call(t),H.select(".nv-focus .nv-x.nv-axis").transition().duration(N).call(r),H.select(".nv-focus .nv-y.nv-axis").transition().duration(N).call(i)}var S=d3.select(this),L=this,A=(h||parseInt(S.style("width"))||960)-f.left-f.right,O=(p||parseInt(S.style("height"))||400)-f.top-f.bottom-d,M=d-l.top-l.bottom;k.update=function(){S.transition().duration(N).call(k)},k.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var _=S.selectAll(".nv-noData").data([x]);return _.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),_.attr("x",f.left+A/2).attr("y",f.top+O/2).text(function(e){return e}),k}S.selectAll(".nv-noData").remove(),v=t.xScale(),m=t.yScale(),g=n.xScale(),y=n.yScale();var D=S.selectAll("g.nv-wrap.nv-lineWithFocusChart").data([e]),P=D.enter().append("g").attr("class","nvd3 nv-wrap nv-lineWithFocusChart").append("g"),H=D.select("g");P.append("g").attr("class","nv-legendWrap");var B=P.append("g").attr("class","nv-focus");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-linesWrap");var j=P.append("g").attr("class","nv-context");j.append("g").attr("class","nv-x nv-axis"),j.append("g").attr("class","nv-y nv-axis"),j.append("g").attr("class","nv-linesWrap"),j.append("g").attr("class","nv-brushBackground"),j.append("g").attr("class","nv-x nv-brush"),b&&(u.width(A),H.select(".nv-legendWrap").datum(e).call(u),f.top!=u.height()&&(f.top=u.height(),O=(p||parseInt(S.style("height"))||400)-f.top-f.bottom-d),H.select(".nv-legendWrap").attr("transform","translate(0,"+ -f.top+")")),D.attr("transform","translate("+f.left+","+f.top+")"),t.width(A).height(O).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),n.defined(t.defined()).width(A).height(M).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),H.select(".nv-context").attr("transform","translate(0,"+(O+f.bottom+l.top)+")");var F=H.select(".nv-context .nv-linesWrap").datum(e.filter(function(e){return!e.disabled}));d3.transition(F).call(n),r.scale(v).ticks(A/100).tickSize(-O,0),i.scale(m).ticks(O/36).tickSize(-A,0),H.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+O+")"),a.x(g).on("brush",function(){var e=k.transitionDuration();k.transitionDuration(0),W(),k.transitionDuration(e)}),w&&a.extent(w);var I=H.select(".nv-brushBackground").selectAll("g").data([w||a.extent()]),q=I.enter().append("g");q.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",M),q.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",M);var R=H.select(".nv-x.nv-brush").call(a);R.selectAll("rect").attr("height",M),R.selectAll(".resize").append("path").attr("d",U),W(),s.scale(g).ticks(A/100).tickSize(-M,0),H.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),d3.transition(H.select(".nv-context .nv-x.nv-axis")).call(s),o.scale(y).ticks(M/36).tickSize(-A,0),d3.transition(H.select(".nv-context .nv-y.nv-axis")).call(o),H.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),u.dispatch.on("stateChange",function(e){k.update()}),T.on("tooltipShow",function(e){E&&C(e,L.parentNode)})}),k}var t=e.models.line(),n=e.models.line(),r=e.models.axis(),i=e.models.axis(),s=e.models.axis(),o=e.models.axis(),u=e.models.legend(),a=d3.svg.brush(),f={top:30,right:30,bottom:30,left:60},l={top:0,right:30,bottom:20,left:60},c=e.utils.defaultColor(),h=null,p=null,d=100,v,m,g,y,b=!0,w=null,E=!0,S=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},x="No Data Available.",T=d3.dispatch("tooltipShow","tooltipHide","brush"),N=250;t.clipEdge(!0),n.interactive(!1),r.orient("bottom").tickPadding(5),i.orient("left"),s.orient("bottom").tickPadding(5),o.orient("left");var C=function(n,s){var o=n.pos[0]+(s.offsetLeft||0),u=n.pos[1]+(s.offsetTop||0),a=r.tickFormat()(t.x()(n.point,n.pointIndex)),f=i.tickFormat()(t.y()(n.point,n.pointIndex)),l=S(n.series.key,a,f,n,k);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+f.left,e.pos[1]+f.top],T.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),T.on("tooltipHide",function(){E&&e.tooltip.cleanup()}),k.dispatch=T,k.legend=u,k.lines=t,k.lines2=n,k.xAxis=r,k.yAxis=i,k.x2Axis=s,k.y2Axis=o,d3.rebind(k,t,"defined","isArea","size","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","id"),k.options=e.utils.optionsFunc.bind(k),k.x=function(e){return arguments.length?(t.x(e),n.x(e),k):t.x},k.y=function(e){return arguments.length?(t.y(e),n.y(e),k):t.y},k.margin=function(e){return arguments.length?(f.top=typeof e.top!="undefined"?e.top:f.top,f.right=typeof e.right!="undefined"?e.right:f.right,f.bottom=typeof e.bottom!="undefined"?e.bottom:f.bottom,f.left=typeof e.left!="undefined"?e.left:f.left,k):f},k.margin2=function(e){return arguments.length?(l=e,k):l},k.width=function(e){return arguments.length?(h=e,k):h},k.height=function(e){return arguments.length?(p=e,k):p},k.height2=function(e){return arguments.length?(d=e,k):d},k.color=function(t){return arguments.length?(c=e.utils.getColor(t),u.color(c),k):c},k.showLegend=function(e){return arguments.length?(b=e,k):b},k.tooltips=function(e){return arguments.length?(E=e,k):E},k.tooltipContent=function(e){return arguments.length?(S=e,k):S},k.interpolate=function(e){return arguments.length?(t.interpolate(e),n.interpolate(e),k):t.interpolate()},k.noData=function(e){return arguments.length?(x=e,k):x},k.xTickFormat=function(e){return arguments.length?(r.tickFormat(e),s.tickFormat(e),k):r.tickFormat()},k.yTickFormat=function(e){return arguments.length?(i.tickFormat(e),o.tickFormat(e),k):i.tickFormat()},k.brushExtent=function(e){return arguments.length?(w=e,k):w},k.transitionDuration=function(e){return arguments.length?(N=e,k):N},k},e.models.linePlusBarWithFocusChart=function(){"use strict";function B(e){return e.each(function(e){function nt(e){var t=+(e=="e"),n=t?1:-1,r=q/3;return"M"+.5*n+","+r+"A6,6 0 0 "+t+" "+6.5*n+","+(r+6)+"V"+(2*r-6)+"A6,6 0 0 "+t+" "+.5*n+","+2*r+"Z"+"M"+2.5*n+","+(r+8)+"V"+(2*r-8)+"M"+4.5*n+","+(r+8)+"V"+(2*r-8)}function rt(){h.empty()||h.extent(x),Z.data([h.empty()?k.domain():x]).each(function(e,t){var n=k(e[0])-k.range()[0],r=k.range()[1]-k(e[1]);d3.select(this).select(".left").attr("width",n<0?0:n),d3.select(this).select(".right").attr("x",k(e[1])).attr("width",r<0?0:r)})}function it(){x=h.empty()?null:h.extent(),S=h.empty()?k.domain():h.extent(),D.brush({extent:S,brush:h}),rt(),r.width(F).height(I).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar})),t.width(F).height(I).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar}));var n=J.select(".nv-focus .nv-barsWrap").datum(U.length?U.map(function(e,t){return{key:e.key,values:e.values.filter(function(e,t){return r.x()(e,t)>=S[0]&&r.x()(e,t)<=S[1]})}}):[{values:[]}]),i=J.select(".nv-focus .nv-linesWrap").datum(z[0].disabled?[{values:[]}]:z.map(function(e,n){return{key:e.key,values:e.values.filter(function(e,n){return t.x()(e,n)>=S[0]&&t.x()(e,n)<=S[1]})}}));U.length?C=r.xScale():C=t.xScale(),s.scale(C).ticks(F/100).tickSize(-I,0),s.domain([Math.ceil(S[0]),Math.floor(S[1])]),J.select(".nv-x.nv-axis").transition().duration(P).call(s),n.transition().duration(P).call(r),i.transition().duration(P).call(t),J.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+L.range()[0]+")"),u.scale(L).ticks(I/36).tickSize(-F,0),J.select(".nv-focus .nv-y1.nv-axis").style("opacity",U.length?1:0),a.scale(A).ticks(I/36).tickSize(U.length?0:-F,0),J.select(".nv-focus .nv-y2.nv-axis").style("opacity",z.length?1:0).attr("transform","translate("+C.range()[1]+",0)"),J.select(".nv-focus .nv-y1.nv-axis").transition().duration(P).call(u),J.select(".nv-focus .nv-y2.nv-axis").transition().duration(P).call(a)}var N=d3.select(this),j=this,F=(v||parseInt(N.style("width"))||960)-p.left-p.right,I=(m||parseInt(N.style("height"))||400)-p.top-p.bottom-g,q=g-d.top-d.bottom;B.update=function(){N.transition().duration(P).call(B)},B.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var R=N.selectAll(".nv-noData").data([_]);return R.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),R.attr("x",p.left+F/2).attr("y",p.top+I/2).text(function(e){return e}),B}N.selectAll(".nv-noData").remove();var U=e.filter(function(e){return!e.disabled&&e.bar}),z=e.filter(function(e){return!e.bar});C=r.xScale(),k=o.scale(),L=r.yScale(),A=t.yScale(),O=i.yScale(),M=n.yScale();var W=e.filter(function(e){return!e.disabled&&e.bar}).map(function(e){return e.values.map(function(e,t){return{x:y(e,t),y:b(e,t)}})}),X=e.filter(function(e){return!e.disabled&&!e.bar}).map(function(e){return e.values.map(function(e,t){return{x:y(e,t),y:b(e,t)}})});C.range([0,F]),k.domain(d3.extent(d3.merge(W.concat(X)),function(e){return e.x})).range([0,F]);var V=N.selectAll("g.nv-wrap.nv-linePlusBar").data([e]),$=V.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),J=V.select("g");$.append("g").attr("class","nv-legendWrap");var K=$.append("g").attr("class","nv-focus");K.append("g").attr("class","nv-x nv-axis"),K.append("g").attr("class","nv-y1 nv-axis"),K.append("g").attr("class","nv-y2 nv-axis"),K.append("g").attr("class","nv-barsWrap"),K.append("g").attr("class","nv-linesWrap");var Q=$.append("g").attr("class","nv-context");Q.append("g").attr("class","nv-x nv-axis"),Q.append("g").attr("class","nv-y1 nv-axis"),Q.append("g").attr("class","nv-y2 nv-axis"),Q.append("g").attr("class","nv-barsWrap"),Q.append("g").attr("class","nv-linesWrap"),Q.append("g").attr("class","nv-brushBackground"),Q.append("g").attr("class","nv-x nv-brush"),E&&(c.width(F/2),J.select(".nv-legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.bar?" (left axis)":" (right axis)"),e})).call(c),p.top!=c.height()&&(p.top=c.height(),I=(m||parseInt(N.style("height"))||400)-p.top-p.bottom-g),J.select(".nv-legendWrap").attr("transform","translate("+F/2+","+ -p.top+")")),V.attr("transform","translate("+p.left+","+p.top+")"),i.width(F).height(q).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar})),n.width(F).height(q).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar}));var G=J.select(".nv-context .nv-barsWrap").datum(U.length?U:[{values:[]}]),Y=J.select(".nv-context .nv-linesWrap").datum(z[0].disabled?[{values:[]}]:z);J.select(".nv-context").attr("transform","translate(0,"+(I+p.bottom+d.top)+")"),G.transition().call(i),Y.transition().call(n),h.x(k).on("brush",it),x&&h.extent(x);var Z=J.select(".nv-brushBackground").selectAll("g").data([x||h.extent()]),et=Z.enter().append("g");et.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",q),et.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",q);var tt=J.select(".nv-x.nv-brush").call(h);tt.selectAll("rect").attr("height",q),tt.selectAll(".resize").append("path").attr("d",nt),o.ticks(F/100).tickSize(-q,0),J.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+O.range()[0]+")"),J.select(".nv-context .nv-x.nv-axis").transition().call(o),f.scale(O).ticks(q/36).tickSize(-F,0),J.select(".nv-context .nv-y1.nv-axis").style("opacity",U.length?1:0).attr("transform","translate(0,"+k.range()[0]+")"),J.select(".nv-context .nv-y1.nv-axis").transition().call(f),l.scale(M).ticks(q/36).tickSize(U.length?0:-F,0),J.select(".nv-context .nv-y2.nv-axis").style("opacity",z.length?1:0).attr("transform","translate("+k.range()[1]+",0)"),J.select(".nv-context .nv-y2.nv-axis").transition().call(l),c.dispatch.on("stateChange",function(e){B.update()}),D.on("tooltipShow",function(e){T&&H(e,j.parentNode)}),it()}),B}var t=e.models.line(),n=e.models.line(),r=e.models.historicalBar(),i=e.models.historicalBar(),s=e.models.axis(),o=e.models.axis(),u=e.models.axis(),a=e.models.axis(),f=e.models.axis(),l=e.models.axis(),c=e.models.legend(),h=d3.svg.brush(),p={top:30,right:30,bottom:30,left:60},d={top:0,right:30,bottom:20,left:60},v=null,m=null,g=100,y=function(e){return e.x},b=function(e){return e.y},w=e.utils.defaultColor(),E=!0,S,x=null,T=!0,N=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},C,k,L,A,O,M,_="No Data Available.",D=d3.dispatch("tooltipShow","tooltipHide","brush"),P=0;t.clipEdge(!0),n.interactive(!1),s.orient("bottom").tickPadding(5),u.orient("left"),a.orient("right"),o.orient("bottom").tickPadding(5),f.orient("left"),l.orient("right");var H=function(n,r){S&&(n.pointIndex+=Math.ceil(S[0]));var i=n.pos[0]+(r.offsetLeft||0),o=n.pos[1]+(r.offsetTop||0),f=s.tickFormat()(t.x()(n.point,n.pointIndex)),l=(n.series.bar?u:a).tickFormat()(t.y()(n.point,n.pointIndex)),c=N(n.series.key,f,l,n,B);e.tooltip.show([i,o],c,n.value<0?"n":"s",null,r)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+p.left,e.pos[1]+p.top],D.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){D.tooltipHide(e)}),r.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+p.left,e.pos[1]+p.top],D.tooltipShow(e)}),r.dispatch.on("elementMouseout.tooltip",function(e){D.tooltipHide(e)}),D.on("tooltipHide",function(){T&&e.tooltip.cleanup()}),B.dispatch=D,B.legend=c,B.lines=t,B.lines2=n,B.bars=r,B.bars2=i,B.xAxis=s,B.x2Axis=o,B.y1Axis=u,B.y2Axis=a,B.y3Axis=f,B.y4Axis=l,d3.rebind(B,t,"defined","size","clipVoronoi","interpolate"),B.options=e.utils.optionsFunc.bind(B),B.x=function(e){return arguments.length?(y=e,t.x(e),r.x(e),B):y},B.y=function(e){return arguments.length?(b=e,t.y(e),r.y(e),B):b},B.margin=function(e){return arguments.length?(p.top=typeof e.top!="undefined"?e.top:p.top,p.right=typeof e.right!="undefined"?e.right:p.right,p.bottom=typeof e.bottom!="undefined"?e.bottom:p.bottom,p.left=typeof e.left!="undefined"?e.left:p.left,B):p},B.width=function(e){return arguments.length?(v=e,B):v},B.height=function(e){return arguments.length?(m=e,B):m},B.color=function(t){return arguments.length?(w=e.utils.getColor(t),c.color(w),B):w},B.showLegend=function(e){return arguments.length?(E=e,B):E},B.tooltips=function(e){return arguments.length?(T=e,B):T},B.tooltipContent=function(e){return arguments.length?(N=e,B):N},B.noData=function(e){return arguments.length?(_=e,B):_},B.brushExtent=function(e){return arguments.length?(x=e,B):x},B},e.models.multiBar=function(){"use strict";function C(e){return e.each(function(e){var C=n-t.left-t.right,k=r-t.top-t.bottom,L=d3.select(this);d&&e.length&&(d=[{values:e[0].values.map(function(e){return{x:e.x,y:0,series:e.series,size:.01}})}]),c&&(e=d3.layout.stack().offset(h).values(function(e){return e.values}).y(a)(!e.length&&d?d:e)),e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})}),c&&e[0].values.map(function(t,n){var r=0,i=0;e.map(function(e){var t=e.values[n];t.size=Math.abs(t.y),t.y<0?(t.y1=i,i-=t.size):(t.y1=t.size+r,r+=t.size)})});var A=y&&b?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0,y1:e.y1}})});i.domain(y||d3.merge(A).map(function(e){return e.x})).rangeBands(w||[0,C],S),s.domain(b||d3.extent(d3.merge(A).map(function(e){return c?e.y>0?e.y1:e.y1+e.y:e.y}).concat(f))).range(E||[k,0]),i.domain()[0]===i.domain()[1]&&(i.domain()[0]?i.domain([i.domain()[0]-i.domain()[0]*.01,i.domain()[1]+i.domain()[1]*.01]):i.domain([-1,1])),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]+s.domain()[0]*.01,s.domain()[1]-s.domain()[1]*.01]):s.domain([-1,1])),T=T||i,N=N||s;var O=L.selectAll("g.nv-wrap.nv-multibar").data([e]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-multibar"),_=M.append("defs"),D=M.append("g"),P=O.select("g");D.append("g").attr("class","nv-groups"),O.attr("transform","translate("+t.left+","+t.top+")"),_.append("clipPath").attr("id","nv-edge-clip-"+o).append("rect"),O.select("#nv-edge-clip-"+o+" rect").attr("width",C).attr("height",k),P.attr("clip-path",l?"url(#nv-edge-clip-"+o+")":"");var H=O.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e,t){return t});H.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),H.exit().transition().selectAll("rect.nv-bar").delay(function(t,n){return n*g/e[0].values.length}).attr("y",function(e){return c?N(e.y0):N(0)}).attr("height",0).remove(),H.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return p(e,t)}).style("stroke",function(e,t){return p(e,t)}),H.transition().style("stroke-opacity",1).style("fill-opacity",.75);var B=H.selectAll("rect.nv-bar").data(function(t){return d&&!e.length?d.values:t.values});B.exit().remove();var j=B.enter().append("rect").attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).attr("x",function(t,n,r){return c?0:r*i.rangeBand()/e.length}).attr("y",function(e){return N(c?e.y0:0)}).attr("height",0).attr("width",i.rangeBand()/(c?1:e.length)).attr("transform",function(e,t){return"translate("+i(u(e,t))+",0)"});B.style("fill",function(e,t,n){return p(e,n,t)}).style("stroke",function(e,t,n){return p(e,n,t)}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),x.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),x.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){x.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length
	,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){x.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}),B.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).transition().attr("transform",function(e,t){return"translate("+i(u(e,t))+",0)"}),v&&(m||(m=e.map(function(){return!0})),B.style("fill",function(e,t,n){return d3.rgb(v(e,t)).darker(m.map(function(e,t){return t}).filter(function(e,t){return!m[t]})[n]).toString()}).style("stroke",function(e,t,n){return d3.rgb(v(e,t)).darker(m.map(function(e,t){return t}).filter(function(e,t){return!m[t]})[n]).toString()})),c?B.transition().delay(function(t,n){return n*g/e[0].values.length}).attr("y",function(e,t){return s(c?e.y1:0)}).attr("height",function(e,t){return Math.max(Math.abs(s(e.y+(c?e.y0:0))-s(c?e.y0:0)),1)}).attr("x",function(t,n){return c?0:t.series*i.rangeBand()/e.length}).attr("width",i.rangeBand()/(c?1:e.length)):B.transition().delay(function(t,n){return n*g/e[0].values.length}).attr("x",function(t,n){return t.series*i.rangeBand()/e.length}).attr("width",i.rangeBand()/e.length).attr("y",function(e,t){return a(e,t)<0?s(0):s(0)-s(a(e,t))<1?s(0)-1:s(a(e,t))||0}).attr("height",function(e,t){return Math.max(Math.abs(s(a(e,t))-s(0)),1)||0}),T=i.copy(),N=s.copy()}),C}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=d3.scale.ordinal(),s=d3.scale.linear(),o=Math.floor(Math.random()*1e4),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=!0,c=!1,h="zero",p=e.utils.defaultColor(),d=!1,v=null,m,g=1200,y,b,w,E,S=.1,x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),T,N;return C.dispatch=x,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(u=e,C):u},C.y=function(e){return arguments.length?(a=e,C):a},C.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,C):t},C.width=function(e){return arguments.length?(n=e,C):n},C.height=function(e){return arguments.length?(r=e,C):r},C.xScale=function(e){return arguments.length?(i=e,C):i},C.yScale=function(e){return arguments.length?(s=e,C):s},C.xDomain=function(e){return arguments.length?(y=e,C):y},C.yDomain=function(e){return arguments.length?(b=e,C):b},C.xRange=function(e){return arguments.length?(w=e,C):w},C.yRange=function(e){return arguments.length?(E=e,C):E},C.forceY=function(e){return arguments.length?(f=e,C):f},C.stacked=function(e){return arguments.length?(c=e,C):c},C.stackOffset=function(e){return arguments.length?(h=e,C):h},C.clipEdge=function(e){return arguments.length?(l=e,C):l},C.color=function(t){return arguments.length?(p=e.utils.getColor(t),C):p},C.barColor=function(t){return arguments.length?(v=e.utils.getColor(t),C):v},C.disabled=function(e){return arguments.length?(m=e,C):m},C.id=function(e){return arguments.length?(o=e,C):o},C.hideable=function(e){return arguments.length?(d=e,C):d},C.delay=function(e){return arguments.length?(g=e,C):g},C.groupSpacing=function(e){return arguments.length?(S=e,C):S},C},e.models.multiBarChart=function(){"use strict";function A(e){return e.each(function(e){var b=d3.select(this),O=this,M=(u||parseInt(b.style("width"))||960)-o.left-o.right,_=(a||parseInt(b.style("height"))||400)-o.top-o.bottom;A.update=function(){b.transition().duration(k).call(A)},A.container=this,S.disabled=e.map(function(e){return!!e.disabled});if(!x){var D;x={};for(D in S)S[D]instanceof Array?x[D]=S[D].slice(0):x[D]=S[D]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var P=b.selectAll(".nv-noData").data([T]);return P.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),P.attr("x",o.left+M/2).attr("y",o.top+_/2).text(function(e){return e}),A}b.selectAll(".nv-noData").remove(),w=t.xScale(),E=t.yScale();var H=b.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([e]),B=H.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarWithLegend").append("g"),j=H.select("g");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-barsWrap"),B.append("g").attr("class","nv-legendWrap"),B.append("g").attr("class","nv-controlsWrap"),c&&(i.width(M-C()),t.barColor()&&e.forEach(function(e,t){e.color=d3.rgb("#ccc").darker(t*1.5).toString()}),j.select(".nv-legendWrap").datum(e).call(i),o.top!=i.height()&&(o.top=i.height(),_=(a||parseInt(b.style("height"))||400)-o.top-o.bottom),j.select(".nv-legendWrap").attr("transform","translate("+C()+","+ -o.top+")"));if(l){var F=[{key:"Grouped",disabled:t.stacked()},{key:"Stacked",disabled:!t.stacked()}];s.width(C()).color(["#444","#444","#444"]),j.select(".nv-controlsWrap").datum(F).attr("transform","translate(0,"+ -o.top+")").call(s)}H.attr("transform","translate("+o.left+","+o.top+")"),d&&j.select(".nv-y.nv-axis").attr("transform","translate("+M+",0)"),t.disabled(e.map(function(e){return e.disabled})).width(M).height(_).color(e.map(function(e,t){return e.color||f(e,t)}).filter(function(t,n){return!e[n].disabled}));var I=j.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));I.transition().call(t);if(h){n.scale(w).ticks(M/100).tickSize(-_,0),j.select(".nv-x.nv-axis").attr("transform","translate(0,"+E.range()[0]+")"),j.select(".nv-x.nv-axis").transition().call(n);var q=j.select(".nv-x.nv-axis > g").selectAll("g");q.selectAll("line, text").style("opacity",1);if(m){var R=function(e,t){return"translate("+e+","+t+")"},U=5,z=17;q.selectAll("text").attr("transform",function(e,t,n){return R(0,n%2==0?U:z)});var W=d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;j.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform",function(e,t){return R(0,t===0||W%2!==0?z:U)})}v&&q.filter(function(t,n){return n%Math.ceil(e[0].values.length/(M/100))!==0}).selectAll("text, line").style("opacity",0),g&&q.selectAll(".tick text").attr("transform","rotate("+g+" 0,0)").style("text-anchor",g>0?"start":"end"),j.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity",1)}p&&(r.scale(E).ticks(_/36).tickSize(-M,0),j.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("stateChange",function(e){S=e,N.stateChange(S),A.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;F=F.map(function(e){return e.disabled=!0,e}),e.disabled=!1;switch(e.key){case"Grouped":t.stacked(!1);break;case"Stacked":t.stacked(!0)}S.stacked=t.stacked(),N.stateChange(S),A.update()}),N.on("tooltipShow",function(e){y&&L(e,O.parentNode)}),N.on("changeState",function(n){typeof n.disabled!="undefined"&&(e.forEach(function(e,t){e.disabled=n.disabled[t]}),S.disabled=n.disabled),typeof n.stacked!="undefined"&&(t.stacked(n.stacked),S.stacked=n.stacked),A.update()})}),A}var t=e.models.multiBar(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o={top:30,right:20,bottom:50,left:60},u=null,a=null,f=e.utils.defaultColor(),l=!0,c=!0,h=!0,p=!0,d=!1,v=!0,m=!1,g=0,y=!0,b=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" on "+t+"</p>"},w,E,S={stacked:!1},x=null,T="No Data Available.",N=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),C=function(){return l?180:0},k=250;t.stacked(!1),n.orient("bottom").tickPadding(7).highlightZero(!0).showMaxMin(!1).tickFormat(function(e){return e}),r.orient(d?"right":"left").tickFormat(d3.format(",.1f")),s.updateState(!1);var L=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=b(i.series.key,a,f,i,A);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],N.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){N.tooltipHide(e)}),N.on("tooltipHide",function(){y&&e.tooltip.cleanup()}),A.dispatch=N,A.multibar=t,A.legend=i,A.xAxis=n,A.yAxis=r,d3.rebind(A,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","clipEdge","id","stacked","stackOffset","delay","barColor","groupSpacing"),A.options=e.utils.optionsFunc.bind(A),A.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,A):o},A.width=function(e){return arguments.length?(u=e,A):u},A.height=function(e){return arguments.length?(a=e,A):a},A.color=function(t){return arguments.length?(f=e.utils.getColor(t),i.color(f),A):f},A.showControls=function(e){return arguments.length?(l=e,A):l},A.showLegend=function(e){return arguments.length?(c=e,A):c},A.showXAxis=function(e){return arguments.length?(h=e,A):h},A.showYAxis=function(e){return arguments.length?(p=e,A):p},A.rightAlignYAxis=function(e){return arguments.length?(d=e,r.orient(e?"right":"left"),A):d},A.reduceXTicks=function(e){return arguments.length?(v=e,A):v},A.rotateLabels=function(e){return arguments.length?(g=e,A):g},A.staggerLabels=function(e){return arguments.length?(m=e,A):m},A.tooltip=function(e){return arguments.length?(b=e,A):b},A.tooltips=function(e){return arguments.length?(y=e,A):y},A.tooltipContent=function(e){return arguments.length?(b=e,A):b},A.state=function(e){return arguments.length?(S=e,A):S},A.defaultState=function(e){return arguments.length?(x=e,A):x},A.noData=function(e){return arguments.length?(T=e,A):T},A.transitionDuration=function(e){return arguments.length?(k=e,A):k},A},e.models.multiBarHorizontal=function(){"use strict";function C(e){return e.each(function(e){var i=n-t.left-t.right,y=r-t.top-t.bottom,C=d3.select(this);p&&(e=d3.layout.stack().offset("zero").values(function(e){return e.values}).y(a)(e)),e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})}),p&&e[0].values.map(function(t,n){var r=0,i=0;e.map(function(e){var t=e.values[n];t.size=Math.abs(t.y),t.y<0?(t.y1=i-t.size,i-=t.size):(t.y1=r,r+=t.size)})});var k=b&&w?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0,y1:e.y1}})});s.domain(b||d3.merge(k).map(function(e){return e.x})).rangeBands(E||[0,y],.1),o.domain(w||d3.extent(d3.merge(k).map(function(e){return p?e.y>0?e.y1+e.y:e.y1:e.y}).concat(f))),d&&!p?o.range(S||[o.domain()[0]<0?m:0,i-(o.domain()[1]>0?m:0)]):o.range(S||[0,i]),T=T||s,N=N||d3.scale.linear().domain(o.domain()).range([o(0),o(0)]);var L=d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([e]),A=L.enter().append("g").attr("class","nvd3 nv-wrap nv-multibarHorizontal"),O=A.append("defs"),M=A.append("g"),_=L.select("g");M.append("g").attr("class","nv-groups"),L.attr("transform","translate("+t.left+","+t.top+")");var D=L.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e,t){return t});D.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),D.exit().transition().style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),D.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return l(e,t)}).style("stroke",function(e,t){return l(e,t)}),D.transition().style("stroke-opacity",1).style("fill-opacity",.75);var P=D.selectAll("g.nv-bar").data(function(e){return e.values});P.exit().remove();var H=P.enter().append("g").attr("transform",function(t,n,r){return"translate("+N(p?t.y0:0)+","+(p?0:r*s.rangeBand()/e.length+s(u(t,n)))+")"});H.append("rect").attr("width",0).attr("height",s.rangeBand()/(p?1:e.length)),P.on("mouseover",function(t,n){d3.select(this).classed("hover",!0),x.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[o(a(t,n)+(p?t.y0:0)),s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),x.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){x.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length,o(a(t,n)+(p?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){x.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length,o(a(t,n)+(p?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}),H.append("text"),d&&!p?(P.select("text").attr("text-anchor",function(e,t){return a(e,t)<0?"end":"start"}).attr("y",s.rangeBand()/(e.length*2)).attr("dy",".32em").text(function(e,t){return g(a(e,t))}),P.transition().select("text").attr("x",function(e,t){return a(e,t)<0?-4:o(a(e,t))-o(0)+4})):P.selectAll("text").text(""),v&&!p?(H.append("text").classed("nv-bar-label",!0),P.select("text.nv-bar-label").attr("text-anchor",function(e,t){return a(e,t)<0?"start":"end"}).attr("y",s.rangeBand()/(e.length*2)).attr("dy",".32em").text(function(e,t){return u(e,t)}),P.transition().select("text.nv-bar-label").attr("x",function(e,t){return a(e,t)<0?o(0)-o(a(e,t))+4:-4})):P.selectAll("text.nv-bar-label").text(""),P.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}),c&&(h||(h=e.map(function(){return!0})),P.style("fill",function(e,t,n){return d3.rgb(c(e,t)).darker(h.map(function(e,t){return t}).filter(function(e,t){return!h[t]})[n]).toString()}).style("stroke",function(e,t,n){return d3.rgb(c(e,t)).darker(h.map(function(e,t){return t}).filter(function(e,t){return!h[t]})[n]).toString()})),p?P.transition().attr("transform",function(e,t){return"translate("+o(e.y1)+","+s(u(e,t))+")"}).select("rect").attr("width",function(e,t){return Math.abs(o(a(e,t)+e.y0)-o(e.y0))}).attr("height",s.rangeBand()):P.transition().attr("transform",function(t,n){return"translate("+(a(t,n)<0?o(a(t,n)):o(0))+","+(t.series*s.rangeBand()/e.length+s(u(t,n)))+")"}).select("rect").attr("height",s.rangeBand()/e.length).attr("width",function(e,t){return Math.max(Math.abs(o(a(e,t))-o(0)),1)}),T=s.copy(),N=o.copy()}),C}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.ordinal(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=e.utils.defaultColor(),c=null,h,p=!1,d=!1,v=!1,m=60,g=d3.format(",.2f"),y=1200,b,w,E,S,x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),T,N;return C.dispatch=x,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(u=e,C):u},C.y=function(e){return arguments.length?(a=e,C):a},C.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,C):t},C.width=function(e){return arguments.length?(n=e,C):n},C.height=function(e){return arguments.length?(r=e,C):r},C.xScale=function(e){return arguments.length?(s=e,C):s},C.yScale=function(e){return arguments.length?(o=e,C):o},C.xDomain=function(e){return arguments.length?(b=e,C):b},C.yDomain=function(e){return arguments.length?(w=e,C):w},C.xRange=function(e){return arguments.length?(E=e,C):E},C.yRange=function(e){return arguments.length?(S=e,C):S},C.forceY=function(e){return arguments.length?(f=e,C):f},C.stacked=function(e){return arguments.length?(p=e,C):p},C.color=function(t){return arguments.length?(l=e.utils.getColor(t),C):l},C.barColor=function(t){return arguments.length?(c=e.utils.getColor(t),C):c},C.disabled=function(e){return arguments.length?(h=e,C):h},C.id=function(e){return arguments.length?(i=e,C):i},C.delay=function(e){return arguments.length?(y=e,C):y},C.showValues=function(e){return arguments.length?(d=e,C):d},C.showBarLabels=function(e){return arguments.length?(v=e,C):v},C.valueFormat=function(e){return arguments.length?(g=e,C):g},C.valuePadding=function(e){return arguments.length?(m=e,C):m},C},e.models.multiBarHorizontalChart=function(){"use strict";function C(e){return e.each(function(e){var d=d3.select(this),m=this,k=(u||parseInt(d.style("width"))||960)-o.left-o.right,L=(a||parseInt(d.style("height"))||400)-o.top-o.bottom;C.update=function(){d.transition().duration(T).call(C)},C.container=this,b.disabled=e.map(function(e){return!!e.disabled});if(!w){var A;w={};for(A in b)b[A]instanceof Array?w[A]=b[A].slice(0):w[A]=b[A]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var O=d.selectAll(".nv-noData").data([E]);return O.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),O.attr("x",o.left+k/2).attr("y",o.top+L/2).text(function(e){return e}),C}d.selectAll(".nv-noData").remove(),g=t.xScale(),y=t.yScale();var M=d.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([e]),_=M.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"),D=M.select("g");_.append("g").attr("class","nv-x nv-axis"),_.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),_.append("g").attr("class","nv-barsWrap"),_.append("g").attr("class","nv-legendWrap"),_.append("g").attr("class","nv-controlsWrap"),c&&(i.width(k-x()),t.barColor()&&e.forEach(function(e,t){e.color=d3.rgb("#ccc").darker(t*1.5).toString()}),D.select(".nv-legendWrap").datum(e).call(i),o.top!=i.height()&&(o.top=i.height(),L=(a||parseInt(d.style("height"))||400)-o.top-o.bottom),D.select(".nv-legendWrap").attr("transform","translate("+x()+","+ -o.top+")"));if(l){var P=[{key:"Grouped",disabled:t.stacked()},{key:"Stacked",disabled:!t.stacked()}];s.width(x()).color(["#444","#444","#444"]),D.select(".nv-controlsWrap").datum(P).attr("transform","translate(0,"+ -o.top+")").call(s)}M.attr("transform","translate("+o.left+","+o.top+")"),t.disabled(e.map(function(e){return e.disabled})).width(k).height(L).color(e.map(function(e,t){return e.color||f(e,t)}).filter(function(t,n){return!e[n].disabled}));var H=D.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));H.transition().call(t);if(h){n.scale(g).ticks(L/24).tickSize(-k,0),D.select(".nv-x.nv-axis").transition().call(n);var B=D.select(".nv-x.nv-axis").selectAll("g");B.selectAll("line, text")}p&&(r.scale(y).ticks(k/100).tickSize(-L,0),D.select(".nv-y.nv-axis").attr("transform","translate(0,"+L+")"),D.select(".nv-y.nv-axis").transition().call(r)),D.select(".nv-zeroLine line").attr("x1",y(0)).attr("x2",y(0)).attr("y1",0).attr("y2",-L),i.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),C.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;P=P.map(function(e){return e.disabled=!0,e}),e.disabled=!1;switch(e.key){case"Grouped":t.stacked(!1);break;case"Stacked":t.stacked(!0)}b.stacked=t.stacked(),S.stateChange(b),C.update()}),S.on("tooltipShow",function(e){v&&N(e,m.parentNode)}),S.on("changeState",function(n){typeof n.disabled!="undefined"&&(e.forEach(function(e,t){e.disabled=n.disabled[t]}),b.disabled=n.disabled),typeof n.stacked!="undefined"&&(t.stacked(n.stacked),b.stacked=n.stacked),C.update()})}),C}var t=e.models.multiBarHorizontal(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend().height(30),s=e.models.legend().height(30),o={top:30,right:20,bottom:50,left:60},u=null,a=null,f=e.utils.defaultColor(),l=!0,c=!0,h=!0,p=!0,d=!1,v=!0,m=function(e,t,n,r,i){return"<h3>"+e+" - "+t+"</h3>"+"<p>"+n+"</p>"},g,y,b={stacked:d},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),x=function(){return l?180:0},T=250;t.stacked(d),n.orient("left").tickPadding(5).highlightZero(!1).showMaxMin(!1).tickFormat(function(e){return e}),r.orient("bottom").tickFormat(d3.format(",.1f")),s.updateState(!1);var N=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=m(i.series.key,a,f,i,C);e.tooltip.show([o,u],l,i.value<0?"e":"w",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),C.dispatch=S,C.multibar=t,C.legend=i,C.xAxis=n,C.yAxis=r,d3.rebind(C,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","clipEdge","id","delay","showValues","showBarLabels","valueFormat","stacked","barColor"),C.options=e.utils.optionsFunc.bind(C),C.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,C):o},C.width=function(e){return arguments.length?(u=e,C):u},C.height=function(e){return arguments.length?(a=e,C):a},C.color=function(t){return arguments.length?(f=e.utils.getColor(t),i.color(f),C):f},C.showControls=function(e){return arguments.length?(l=e,C):l},C.showLegend=function(e){return arguments.length?(c=e,C):c},C.showXAxis=function(e){return arguments.length?(h=e,C):h},C.showYAxis=function(e){return arguments.length?(p=e,C):p},C.tooltip=function(e){return arguments.length?(m=e,C):m},C.tooltips=function(e){return arguments.length?(v=e,C):v},C.tooltipContent=function(e){return arguments.length?(m=e,C):m},C.state=function(e){return arguments.length?(b=e,C):b},C.defaultState=function(e){return arguments.length?(w=e,C):w},C.noData=function(e){return arguments.length?(E=e,C):E},C.transitionDuration=function(e){return arguments.length?(T=e,C):T},C},e.models.multiChart=function(){"use strict";function C(e){return e.each(function(e){var u=d3.select(this),f=this;C.update=function(){u.transition().call(C)},C.container=this;var k=(r||parseInt(u.style("width"))||960)-t.left-t.right,L=(i||parseInt(u.style("height"))||400)-t.top-t.bottom,A=e.filter(function(e){return!e.disabled&&e.type=="line"&&e.yAxis==1}),O=e.filter(function(e){return!e.disabled&&e.type=="line"&&e.yAxis==2}),M=e.filter(function(e){return!e.disabled&&e.type=="bar"&&e.yAxis==1}),_=e.filter(function(e){return!e.disabled&&e.type=="bar"&&e.yAxis==2}),D=e.filter(function(e){return!e.disabled&&e.type=="area"&&e.yAxis==1}),P=e.filter(function(e){return!e.disabled&&e.type=="area"&&e.yAxis==2}),H=e.filter(function(e){return!e.disabled&&e.yAxis==1}).map(function(e){return e.values.map(function(e,t){return{x:e.x,y:e.y}})}),B=e.filter(function(e){return!e.disabled&&e.yAxis==2}).map(function(e){return e.values.map(function(e,t){return{x:e.x,y:e.y}})});a.domain(d3.extent(d3.merge(H.concat(B)),function(e){return e.x})).range([0,k]);var j=u.selectAll("g.wrap.multiChart").data([e]),F=j.enter().append("g").attr("class","wrap nvd3 multiChart").append("g");F.append("g").attr("class","x axis"),F.append("g").attr("class","y1 axis"),F.append("g").attr("class","y2 axis"),F.append("g").attr("class","lines1Wrap"),F.append("g").attr("class","lines2Wrap"),F.append("g").attr("class","bars1Wrap"),F.append("g").attr("class","bars2Wrap"),F.append("g").attr("class","stack1Wrap"),F.append("g").attr("class","stack2Wrap"),F.append("g").attr("class","legendWrap");var I=j.select("g");s&&(x.width(k/2),I.select(".legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.yAxis==1?"":" (right axis)"),e})).call(x),t.top!=x.height()&&(t.top=x.height(),L=(i||parseInt(u.style("height"))||400)-t.top-t.bottom),I.select(".legendWrap").attr("transform","translate("+k/2+","+ -t.top+")")),d.width(k).height(L).interpolate("monotone").color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="line"})),v.width(k).height(L).interpolate("monotone").color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="line"})),m.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="bar"})),g.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="bar"})),y.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="area"})),b.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="area"})),I.attr("transform","translate("+t.left+","+t.top+")");var q=I.select(".lines1Wrap").datum(A),R=I.select(".bars1Wrap").datum(M),U=I.select(".stack1Wrap").datum(D),z=I.select(".lines2Wrap").datum(O),W=I.select(".bars2Wrap").datum(_),X=I.select(".stack2Wrap").datum(P),V=D.length?D.map(function(e){return e.values}).reduce(function(e,t){return e.map(function(e,n){return{x:e.x,y:e.y+t[n].y}})}).concat([{x:0,y:0}]):[],$=P.length?P.map(function(e){return e.values}).reduce(function(e,t){return e.map(function(e,n){return{x:e.x,y:e.y+t[n].y}})}).concat([{x:0,y:0}]):[];h.domain(l||d3.extent(d3.merge(H).concat(V),function(e){return e.y})).range([0,L]),p.domain(c||d3.extent(d3.merge(B).concat($),function(e){return e.y})).range([0,L]),d.yDomain(h.domain()),m.yDomain(h.domain()),y.yDomain(h.domain()),v.yDomain(p.domain()),g.yDomain(p.domain()),b.yDomain(p.domain()),D.length&&d3.transition(U).call(y),P.length&&d3.transition(X).call(b),M.length&&d3.transition(R).call(m),_.length&&d3.transition(W).call(g),A.length&&d3.transition(q).call(d),O.length&&d3.transition(z).call(v),w.ticks(k/100).tickSize(-L,0),I.select(".x.axis").attr("transform","translate(0,"+L+")"),d3.transition(I.select(".x.axis")).call(w),E.ticks(L/36).tickSize(-k,0),d3.transition(I.select(".y1.axis")).call(E),S.ticks(L/36).tickSize(-k,0),d3.transition(I.select(".y2.axis")).call(S),I.select(".y2.axis").style("opacity",B.length?1:0).attr("transform","translate("+a.range()[1]+",0)"),x.dispatch.on("stateChange",function(e){C.update()}),T.on("tooltipShow",function(e){o&&N(e,f.parentNode)})}),C}var t={top:30,right:20,bottom:50,left:60},n=d3.scale.category20().range(),r=null,i=null,s=!0,o=!0,u=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},a,f,l,c,a=d3.scale.linear(),h=d3.scale.linear(),p=d3.scale.linear(),d=e.models.line().yScale(h),v=e.models.line().yScale(p),m=e.models.multiBar().stacked(!1).yScale(h),g=e.models.multiBar().stacked(!1).yScale(p),y=e.models.stackedArea().yScale(h),b=e.models.stackedArea().yScale(p),w=e.models.axis().scale(a).orient("bottom").tickPadding(5),E=e.models.axis().scale(h).orient("left"),S=e.models.axis().scale(p).orient("right"),x=e.models.legend().height(30),T=d3.dispatch("tooltipShow","tooltipHide"),N=function(t,n){var r=t.pos[0]+(n.offsetLeft||0),i=t.pos[1]+(n.offsetTop||0),s=w.tickFormat()(d.x()(t.point,t.pointIndex)),o=(t.series.yAxis==2?S:E).tickFormat()(d.y()(t.point,t.pointIndex)),a=u(t.series.key,s,o,t,C);e.tooltip.show([r,i],a,undefined,undefined,n.offsetParent)};return d.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),d.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),m.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),m.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),g.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),g.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),y.dispatch.on("tooltipShow",function(e){if(!Math.round(y.y()(e.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),y.dispatch.on("tooltipHide",function(e){T.tooltipHide(e)}),b.dispatch.on("tooltipShow",function(e){if(!Math.round(b.y()(e.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),b.dispatch.on("tooltipHide",function(e){T.tooltipHide(e)}),d.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),d.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),T.on("tooltipHide",function(){o&&e.tooltip.cleanup()}),C.dispatch=T,C.lines1=d,C.lines2=v,C.bars1=m,C.bars2=g,C.stack1=y,C.stack2=b,C.xAxis=w,C.yAxis1=E,C.yAxis2=S,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(getX=e,d.x(e),m.x(e),C):getX},C.y=function(e){return arguments.length?(getY=e,d.y(e),m.y(e),C):getY},C.yDomain1=function(e){return arguments.length?(l=e,C):l},C.yDomain2=function(e){return arguments.length?(c=e,C):c},C.margin=function(e){return arguments.length?(t=e,C):t},C.width=function(e){return arguments.length?(r=e,C):r},C.height=function(e){return arguments.length?(i=e,C):i},C.color=function(e){return arguments.length?(n=e,x.color(e),C):n},C.showLegend=function(e){return arguments.length?(s=e,C):s},C.tooltips=function(e){return arguments.length?(o=e,C):o},C.tooltipContent=function(e){return arguments.length?(u=e,C):u},C},e.models.ohlcBar=function(){"use strict";function x(e){return e.each(function(e){var g=n-t.left-t.right,x=r-t.top-t.bottom,T=d3.select(this);s.domain(y||d3.extent(e[0].values.map(u).concat(p))),v?s.range(w||[g*.5/e[0].values.length,g*(e[0].values.length-.5)/e[0].values.length]):s.range(w||[0,g]),o.domain(b||[d3.min(e[0].values.map(h).concat(d)),d3.max(e[0].values.map(c).concat(d))]).range(E||[x,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-s.domain()[0]*.01,s.domain()[1]+s.domain()[1]*.01]):s.domain([-1,1])),o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]+o.domain()[0]*.01,o.domain()[1]-o.domain()[1]*.01]):o.domain([-1,1]));var N=d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([e[0].values]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-ohlcBar"),k=C.append("defs"),L=C.append("g"),A=N.select("g");L.append("g").attr("class","nv-ticks"),N.attr("transform","translate("+t.left+","+t.top+")"),T.on("click",function(e,t){S.chartClick({data:e,index:t,pos:d3.event,id:i})}),k.append("clipPath").attr("id","nv-chart-clip-path-"+i).append("rect"),N.select("#nv-chart-clip-path-"+i+" rect").attr("width",g).attr("height",x),A.attr("clip-path",m?"url(#nv-chart-clip-path-"+i+")":"");var O=N.select(".nv-ticks").selectAll(".nv-tick").data(function(e){return e});O.exit().remove();var M=O.enter().append("path").attr("class",function(e,t,n){return(f(e,t)>l(e,t)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+n+"-"+t}).attr("d",function(t,n){var r=g/e[0].values.length*.9;return"m0,0l0,"+(o(f(t,n))-o(c(t,n)))+"l"+ -r/2+",0l"+r/2+",0l0,"+(o(h(t,n))-o(f(t,n)))+"l0,"+(o(l(t,n))-o(h(t,n)))+"l"+r/2+",0l"+ -r/2+",0z"}).attr("transform",function(e,t){return"translate("+s(u(e,t))+","+o(c(e,t))+")"}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),S.elementMouseover({point:t,series:e[0],pos:[s(u(t,n)),o(a(t,n))],pointIndex:n,seriesIndex:0,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),S.elementMouseout({point:t,series:e[0],pointIndex:n,seriesIndex:0,e:d3.event})}).on("click",function(e,t){S.elementClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()}).on("dblclick",function(e,t){S.elementDblClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()});O.attr("class",function(e,t,n){return(f(e,t)>l(e,t)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+n+"-"+t}),d3.transition(O).attr("transform",function(e,t){return"translate("+s(u(e,t))+","+o(c(e,t))+")"}).attr("d",function(t,n){var r=g/e[0].values.length*.9;return"m0,0l0,"+(o(f(t,n))-o(c(t,n)))+"l"+ -r/2+",0l"+r/2+",0l0,"+(o(h(t,n))-o(f(t,n)))+"l0,"+(o(l(t,n))-o(h(t,n)))+"l"+r/2+",0l"+ -r/2+",0z"})}),x}var t={top:0
	,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=function(e){return e.open},l=function(e){return e.close},c=function(e){return e.high},h=function(e){return e.low},p=[],d=[],v=!1,m=!0,g=e.utils.defaultColor(),y,b,w,E,S=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return x.dispatch=S,x.options=e.utils.optionsFunc.bind(x),x.x=function(e){return arguments.length?(u=e,x):u},x.y=function(e){return arguments.length?(a=e,x):a},x.open=function(e){return arguments.length?(f=e,x):f},x.close=function(e){return arguments.length?(l=e,x):l},x.high=function(e){return arguments.length?(c=e,x):c},x.low=function(e){return arguments.length?(h=e,x):h},x.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,x):t},x.width=function(e){return arguments.length?(n=e,x):n},x.height=function(e){return arguments.length?(r=e,x):r},x.xScale=function(e){return arguments.length?(s=e,x):s},x.yScale=function(e){return arguments.length?(o=e,x):o},x.xDomain=function(e){return arguments.length?(y=e,x):y},x.yDomain=function(e){return arguments.length?(b=e,x):b},x.xRange=function(e){return arguments.length?(w=e,x):w},x.yRange=function(e){return arguments.length?(E=e,x):E},x.forceX=function(e){return arguments.length?(p=e,x):p},x.forceY=function(e){return arguments.length?(d=e,x):d},x.padData=function(e){return arguments.length?(v=e,x):v},x.clipEdge=function(e){return arguments.length?(m=e,x):m},x.color=function(t){return arguments.length?(g=e.utils.getColor(t),x):g},x.id=function(e){return arguments.length?(i=e,x):i},x},e.models.pie=function(){"use strict";function S(e){return e.each(function(e){function q(e){var t=(e.startAngle+e.endAngle)*90/Math.PI-90;return t>90?t-180:t}function R(e){e.endAngle=isNaN(e.endAngle)?0:e.endAngle,e.startAngle=isNaN(e.startAngle)?0:e.startAngle,m||(e.innerRadius=0);var t=d3.interpolate(this._current,e);return this._current=t(0),function(e){return A(t(e))}}function U(e){e.innerRadius=0;var t=d3.interpolate({startAngle:0,endAngle:0},e);return function(e){return A(t(e))}}var o=n-t.left-t.right,f=r-t.top-t.bottom,S=Math.min(o,f)/2,x=S-S/5,T=d3.select(this),N=T.selectAll(".nv-wrap.nv-pie").data(e),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-pie nv-chart-"+u),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-pie"),k.append("g").attr("class","nv-pieLabels"),N.attr("transform","translate("+t.left+","+t.top+")"),L.select(".nv-pie").attr("transform","translate("+o/2+","+f/2+")"),L.select(".nv-pieLabels").attr("transform","translate("+o/2+","+f/2+")"),T.on("click",function(e,t){E.chartClick({data:e,index:t,pos:d3.event,id:u})});var A=d3.svg.arc().outerRadius(x);y&&A.startAngle(y),b&&A.endAngle(b),m&&A.innerRadius(S*w);var O=d3.layout.pie().sort(null).value(function(e){return e.disabled?0:s(e)}),M=N.select(".nv-pie").selectAll(".nv-slice").data(O),_=N.select(".nv-pieLabels").selectAll(".nv-label").data(O);M.exit().remove(),_.exit().remove();var D=M.enter().append("g").attr("class","nv-slice").on("mouseover",function(e,t){d3.select(this).classed("hover",!0),E.elementMouseover({label:i(e.data),value:s(e.data),point:e.data,pointIndex:t,pos:[d3.event.pageX,d3.event.pageY],id:u})}).on("mouseout",function(e,t){d3.select(this).classed("hover",!1),E.elementMouseout({label:i(e.data),value:s(e.data),point:e.data,index:t,id:u})}).on("click",function(e,t){E.elementClick({label:i(e.data),value:s(e.data),point:e.data,index:t,pos:d3.event,id:u}),d3.event.stopPropagation()}).on("dblclick",function(e,t){E.elementDblClick({label:i(e.data),value:s(e.data),point:e.data,index:t,pos:d3.event,id:u}),d3.event.stopPropagation()});M.attr("fill",function(e,t){return a(e,t)}).attr("stroke",function(e,t){return a(e,t)});var P=D.append("path").each(function(e){this._current=e});M.select("path").transition().attr("d",A).attrTween("d",R);if(l){var H=d3.svg.arc().innerRadius(0);c&&(H=A),h&&(H=d3.svg.arc().outerRadius(A.outerRadius())),_.enter().append("g").classed("nv-label",!0).each(function(e,t){var n=d3.select(this);n.attr("transform",function(e){if(g){e.outerRadius=x+10,e.innerRadius=x+15;var t=(e.startAngle+e.endAngle)/2*(180/Math.PI);return(e.startAngle+e.endAngle)/2<Math.PI?t-=90:t+=90,"translate("+H.centroid(e)+") rotate("+t+")"}return e.outerRadius=S+10,e.innerRadius=S+15,"translate("+H.centroid(e)+")"}),n.append("rect").style("stroke","#fff").style("fill","#fff").attr("rx",3).attr("ry",3),n.append("text").style("text-anchor",g?(e.startAngle+e.endAngle)/2<Math.PI?"start":"end":"middle").style("fill","#000")});var B={},j=14,F=140,I=function(e){return Math.floor(e[0]/F)*F+","+Math.floor(e[1]/j)*j};_.transition().attr("transform",function(e){if(g){e.outerRadius=x+10,e.innerRadius=x+15;var t=(e.startAngle+e.endAngle)/2*(180/Math.PI);return(e.startAngle+e.endAngle)/2<Math.PI?t-=90:t+=90,"translate("+H.centroid(e)+") rotate("+t+")"}e.outerRadius=S+10,e.innerRadius=S+15;var n=H.centroid(e),r=I(n);return B[r]&&(n[1]-=j),B[I(n)]=!0,"translate("+n+")"}),_.select(".nv-label text").style("text-anchor",g?(d.startAngle+d.endAngle)/2<Math.PI?"start":"end":"middle").text(function(e,t){var n=(e.endAngle-e.startAngle)/(2*Math.PI),r={key:i(e.data),value:s(e.data),percent:d3.format("%")(n)};return e.value&&n>v?r[p]:""})}}),S}var t={top:0,right:0,bottom:0,left:0},n=500,r=500,i=function(e){return e.x},s=function(e){return e.y},o=function(e){return e.description},u=Math.floor(Math.random()*1e4),a=e.utils.defaultColor(),f=d3.format(",.2f"),l=!0,c=!0,h=!1,p="key",v=.02,m=!1,g=!1,y=!1,b=!1,w=.5,E=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return S.dispatch=E,S.options=e.utils.optionsFunc.bind(S),S.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,S):t},S.width=function(e){return arguments.length?(n=e,S):n},S.height=function(e){return arguments.length?(r=e,S):r},S.values=function(t){return e.log("pie.values() is no longer supported."),S},S.x=function(e){return arguments.length?(i=e,S):i},S.y=function(e){return arguments.length?(s=d3.functor(e),S):s},S.description=function(e){return arguments.length?(o=e,S):o},S.showLabels=function(e){return arguments.length?(l=e,S):l},S.labelSunbeamLayout=function(e){return arguments.length?(g=e,S):g},S.donutLabelsOutside=function(e){return arguments.length?(h=e,S):h},S.pieLabelsOutside=function(e){return arguments.length?(c=e,S):c},S.labelType=function(e){return arguments.length?(p=e,p=p||"key",S):p},S.donut=function(e){return arguments.length?(m=e,S):m},S.donutRatio=function(e){return arguments.length?(w=e,S):w},S.startAngle=function(e){return arguments.length?(y=e,S):y},S.endAngle=function(e){return arguments.length?(b=e,S):b},S.id=function(e){return arguments.length?(u=e,S):u},S.color=function(t){return arguments.length?(a=e.utils.getColor(t),S):a},S.valueFormat=function(e){return arguments.length?(f=e,S):f},S.labelThreshold=function(e){return arguments.length?(v=e,S):v},S},e.models.pieChart=function(){"use strict";function v(e){return e.each(function(e){var u=d3.select(this),a=this,f=(i||parseInt(u.style("width"))||960)-r.left-r.right,d=(s||parseInt(u.style("height"))||400)-r.top-r.bottom;v.update=function(){u.transition().call(v)},v.container=this,l.disabled=e.map(function(e){return!!e.disabled});if(!c){var m;c={};for(m in l)l[m]instanceof Array?c[m]=l[m].slice(0):c[m]=l[m]}if(!e||!e.length){var g=u.selectAll(".nv-noData").data([h]);return g.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),g.attr("x",r.left+f/2).attr("y",r.top+d/2).text(function(e){return e}),v}u.selectAll(".nv-noData").remove();var y=u.selectAll("g.nv-wrap.nv-pieChart").data([e]),b=y.enter().append("g").attr("class","nvd3 nv-wrap nv-pieChart").append("g"),w=y.select("g");b.append("g").attr("class","nv-pieWrap"),b.append("g").attr("class","nv-legendWrap"),o&&(n.width(f).key(t.x()),y.select(".nv-legendWrap").datum(e).call(n),r.top!=n.height()&&(r.top=n.height(),d=(s||parseInt(u.style("height"))||400)-r.top-r.bottom),y.select(".nv-legendWrap").attr("transform","translate(0,"+ -r.top+")")),y.attr("transform","translate("+r.left+","+r.top+")"),t.width(f).height(d);var E=w.select(".nv-pieWrap").datum([e]);d3.transition(E).call(t),n.dispatch.on("stateChange",function(e){l=e,p.stateChange(l),v.update()}),t.dispatch.on("elementMouseout.tooltip",function(e){p.tooltipHide(e)}),p.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),l.disabled=t.disabled),v.update()})}),v}var t=e.models.pie(),n=e.models.legend(),r={top:30,right:20,bottom:20,left:20},i=null,s=null,o=!0,u=e.utils.defaultColor(),a=!0,f=function(e,t,n,r){return"<h3>"+e+"</h3>"+"<p>"+t+"</p>"},l={},c=null,h="No Data Available.",p=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),d=function(n,r){var i=t.description()(n.point)||t.x()(n.point),s=n.pos[0]+(r&&r.offsetLeft||0),o=n.pos[1]+(r&&r.offsetTop||0),u=t.valueFormat()(t.y()(n.point)),a=f(i,u,n,v);e.tooltip.show([s,o],a,n.value<0?"n":"s",null,r)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+r.left,e.pos[1]+r.top],p.tooltipShow(e)}),p.on("tooltipShow",function(e){a&&d(e)}),p.on("tooltipHide",function(){a&&e.tooltip.cleanup()}),v.legend=n,v.dispatch=p,v.pie=t,d3.rebind(v,t,"valueFormat","values","x","y","description","id","showLabels","donutLabelsOutside","pieLabelsOutside","labelType","donut","donutRatio","labelThreshold"),v.options=e.utils.optionsFunc.bind(v),v.margin=function(e){return arguments.length?(r.top=typeof e.top!="undefined"?e.top:r.top,r.right=typeof e.right!="undefined"?e.right:r.right,r.bottom=typeof e.bottom!="undefined"?e.bottom:r.bottom,r.left=typeof e.left!="undefined"?e.left:r.left,v):r},v.width=function(e){return arguments.length?(i=e,v):i},v.height=function(e){return arguments.length?(s=e,v):s},v.color=function(r){return arguments.length?(u=e.utils.getColor(r),n.color(u),t.color(u),v):u},v.showLegend=function(e){return arguments.length?(o=e,v):o},v.tooltips=function(e){return arguments.length?(a=e,v):a},v.tooltipContent=function(e){return arguments.length?(f=e,v):f},v.state=function(e){return arguments.length?(l=e,v):l},v.defaultState=function(e){return arguments.length?(c=e,v):c},v.noData=function(e){return arguments.length?(h=e,v):h},v},e.models.scatter=function(){"use strict";function I(q){return q.each(function(I){function Q(){if(!g)return!1;var e,i=d3.merge(I.map(function(e,t){return e.values.map(function(e,n){var r=f(e,n),i=l(e,n);return[o(r)+Math.random()*1e-7,u(i)+Math.random()*1e-7,t,n,e]}).filter(function(e,t){return b(e[4],t)})}));if(D===!0){if(x){var a=X.select("defs").selectAll(".nv-point-clips").data([s]).enter();a.append("clipPath").attr("class","nv-point-clips").attr("id","nv-points-clip-"+s);var c=X.select("#nv-points-clip-"+s).selectAll("circle").data(i);c.enter().append("circle").attr("r",T),c.exit().remove(),c.attr("cx",function(e){return e[0]}).attr("cy",function(e){return e[1]}),X.select(".nv-point-paths").attr("clip-path","url(#nv-points-clip-"+s+")")}i.length&&(i.push([o.range()[0]-20,u.range()[0]-20,null,null]),i.push([o.range()[1]+20,u.range()[1]+20,null,null]),i.push([o.range()[0]-20,u.range()[0]+20,null,null]),i.push([o.range()[1]+20,u.range()[1]-20,null,null]));var h=d3.geom.polygon([[-10,-10],[-10,r+10],[n+10,r+10],[n+10,-10]]),p=d3.geom.voronoi(i).map(function(e,t){return{data:h.clip(e),series:i[t][2],point:i[t][3]}}),d=X.select(".nv-point-paths").selectAll("path").data(p);d.enter().append("path").attr("class",function(e,t){return"nv-path-"+t}),d.exit().remove(),d.attr("d",function(e){return e.data.length===0?"M 0 0":"M"+e.data.join("L")+"Z"});var v=function(e,n){if(F)return 0;var r=I[e.series];if(typeof r=="undefined")return;var i=r.values[e.point];n({point:i,series:r,pos:[o(f(i,e.point))+t.left,u(l(i,e.point))+t.top],seriesIndex:e.series,pointIndex:e.point})};d.on("click",function(e){v(e,_.elementClick)}).on("mouseover",function(e){v(e,_.elementMouseover)}).on("mouseout",function(e,t){v(e,_.elementMouseout)})}else X.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click",function(e,n){if(F||!I[e.series])return 0;var r=I[e.series],i=r.values[n];_.elementClick({point:i,series:r,pos:[o(f(i,n))+t.left,u(l(i,n))+t.top],seriesIndex:e.series,pointIndex:n})}).on("mouseover",function(e,n){if(F||!I[e.series])return 0;var r=I[e.series],i=r.values[n];_.elementMouseover({point:i,series:r,pos:[o(f(i,n))+t.left,u(l(i,n))+t.top],seriesIndex:e.series,pointIndex:n})}).on("mouseout",function(e,t){if(F||!I[e.series])return 0;var n=I[e.series],r=n.values[t];_.elementMouseout({point:r,series:n,seriesIndex:e.series,pointIndex:t})});F=!1}var q=n-t.left-t.right,R=r-t.top-t.bottom,U=d3.select(this);I.forEach(function(e,t){e.values.forEach(function(e){e.series=t})});var W=N&&C&&A?[]:d3.merge(I.map(function(e){return e.values.map(function(e,t){return{x:f(e,t),y:l(e,t),size:c(e,t)}})}));o.domain(N||d3.extent(W.map(function(e){return e.x}).concat(d))),w&&I[0]?o.range(k||[(q*E+q)/(2*I[0].values.length),q-q*(1+E)/(2*I[0].values.length)]):o.range(k||[0,q]),u.domain(C||d3.extent(W.map(function(e){return e.y}).concat(v))).range(L||[R,0]),a.domain(A||d3.extent(W.map(function(e){return e.size}).concat(m))).range(O||[16,256]);if(o.domain()[0]===o.domain()[1]||u.domain()[0]===u.domain()[1])M=!0;o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]-o.domain()[0]*.01,o.domain()[1]+o.domain()[1]*.01]):o.domain([-1,1])),u.domain()[0]===u.domain()[1]&&(u.domain()[0]?u.domain([u.domain()[0]-u.domain()[0]*.01,u.domain()[1]+u.domain()[1]*.01]):u.domain([-1,1])),isNaN(o.domain()[0])&&o.domain([-1,1]),isNaN(u.domain()[0])&&u.domain([-1,1]),P=P||o,H=H||u,B=B||a;var X=U.selectAll("g.nv-wrap.nv-scatter").data([I]),V=X.enter().append("g").attr("class","nvd3 nv-wrap nv-scatter nv-chart-"+s+(M?" nv-single-point":"")),$=V.append("defs"),J=V.append("g"),K=X.select("g");J.append("g").attr("class","nv-groups"),J.append("g").attr("class","nv-point-paths"),X.attr("transform","translate("+t.left+","+t.top+")"),$.append("clipPath").attr("id","nv-edge-clip-"+s).append("rect"),X.select("#nv-edge-clip-"+s+" rect").attr("width",q).attr("height",R>0?R:0),K.attr("clip-path",S?"url(#nv-edge-clip-"+s+")":""),F=!0;var G=X.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});G.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),G.exit().remove(),G.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}),G.transition().style("fill",function(e,t){return i(e,t)}).style("stroke",function(e,t){return i(e,t)}).style("stroke-opacity",1).style("fill-opacity",.5);if(p){var Y=G.selectAll("circle.nv-point").data(function(e){return e.values},y);Y.enter().append("circle").style("fill",function(e,t){return e.color}).style("stroke",function(e,t){return e.color}).attr("cx",function(t,n){return e.utils.NaNtoZero(P(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(H(l(t,n)))}).attr("r",function(e,t){return Math.sqrt(a(c(e,t))/Math.PI)}),Y.exit().remove(),G.exit().selectAll("path.nv-point").transition().attr("cx",function(t,n){return e.utils.NaNtoZero(o(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(u(l(t,n)))}).remove(),Y.each(function(e,t){d3.select(this).classed("nv-point",!0).classed("nv-point-"+t,!0).classed("hover",!1)}),Y.transition().attr("cx",function(t,n){return e.utils.NaNtoZero(o(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(u(l(t,n)))}).attr("r",function(e,t){return Math.sqrt(a(c(e,t))/Math.PI)})}else{var Y=G.selectAll("path.nv-point").data(function(e){return e.values});Y.enter().append("path").style("fill",function(e,t){return e.color}).style("stroke",function(e,t){return e.color}).attr("transform",function(e,t){return"translate("+P(f(e,t))+","+H(l(e,t))+")"}).attr("d",d3.svg.symbol().type(h).size(function(e,t){return a(c(e,t))})),Y.exit().remove(),G.exit().selectAll("path.nv-point").transition().attr("transform",function(e,t){return"translate("+o(f(e,t))+","+u(l(e,t))+")"}).remove(),Y.each(function(e,t){d3.select(this).classed("nv-point",!0).classed("nv-point-"+t,!0).classed("hover",!1)}),Y.transition().attr("transform",function(e,t){return"translate("+o(f(e,t))+","+u(l(e,t))+")"}).attr("d",d3.svg.symbol().type(h).size(function(e,t){return a(c(e,t))}))}clearTimeout(j),j=setTimeout(Q,300),P=o.copy(),H=u.copy(),B=a.copy()}),I}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e5),o=d3.scale.linear(),u=d3.scale.linear(),a=d3.scale.linear(),f=function(e){return e.x},l=function(e){return e.y},c=function(e){return e.size||1},h=function(e){return e.shape||"circle"},p=!0,d=[],v=[],m=[],g=!0,y=null,b=function(e){return!e.notActive},w=!1,E=.1,S=!1,x=!0,T=function(){return 25},N=null,C=null,k=null,L=null,A=null,O=null,M=!1,_=d3.dispatch("elementClick","elementMouseover","elementMouseout"),D=!0,P,H,B,j,F=!1;return I.clearHighlights=function(){d3.selectAll(".nv-chart-"+s+" .nv-point.hover").classed("hover",!1)},I.highlightPoint=function(e,t,n){d3.select(".nv-chart-"+s+" .nv-series-"+e+" .nv-point-"+t).classed("hover",n)},_.on("elementMouseover.point",function(e){g&&I.highlightPoint(e.seriesIndex,e.pointIndex,!0)}),_.on("elementMouseout.point",function(e){g&&I.highlightPoint(e.seriesIndex,e.pointIndex,!1)}),I.dispatch=_,I.options=e.utils.optionsFunc.bind(I),I.x=function(e){return arguments.length?(f=d3.functor(e),I):f},I.y=function(e){return arguments.length?(l=d3.functor(e),I):l},I.size=function(e){return arguments.length?(c=d3.functor(e),I):c},I.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,I):t},I.width=function(e){return arguments.length?(n=e,I):n},I.height=function(e){return arguments.length?(r=e,I):r},I.xScale=function(e){return arguments.length?(o=e,I):o},I.yScale=function(e){return arguments.length?(u=e,I):u},I.zScale=function(e){return arguments.length?(a=e,I):a},I.xDomain=function(e){return arguments.length?(N=e,I):N},I.yDomain=function(e){return arguments.length?(C=e,I):C},I.sizeDomain=function(e){return arguments.length?(A=e,I):A},I.xRange=function(e){return arguments.length?(k=e,I):k},I.yRange=function(e){return arguments.length?(L=e,I):L},I.sizeRange=function(e){return arguments.length?(O=e,I):O},I.forceX=function(e){return arguments.length?(d=e,I):d},I.forceY=function(e){return arguments.length?(v=e,I):v},I.forceSize=function(e){return arguments.length?(m=e,I):m},I.interactive=function(e){return arguments.length?(g=e,I):g},I.pointKey=function(e){return arguments.length?(y=e,I):y},I.pointActive=function(e){return arguments.length?(b=e,I):b},I.padData=function(e){return arguments.length?(w=e,I):w},I.padDataOuter=function(e){return arguments.length?(E=e,I):E},I.clipEdge=function(e){return arguments.length?(S=e,I):S},I.clipVoronoi=function(e){return arguments.length?(x=e,I):x},I.useVoronoi=function(e){return arguments.length?(D=e,D===!1&&(x=!1),I):D},I.clipRadius=function(e){return arguments.length?(T=e,I):T},I.color=function(t){return arguments.length?(i=e.utils.getColor(t),I):i},I.shape=function(e){return arguments.length?(h=e,I):h},I.onlyCircles=function(e){return arguments.length?(p=e,I):p},I.id=function(e){return arguments.length?(s=e,I):s},I.singlePoint=function(e){return arguments.length?(M=e,I):M},I},e.models.scatterChart=function(){"use strict";function F(e){return e.each(function(e){function K(){if(T)return X.select(".nv-point-paths").style("pointer-events","all"),!1;X.select(".nv-point-paths").style("pointer-events","none");var i=d3.mouse(this);h.distortion(x).focus(i[0]),p.distortion(x).focus(i[1]),X.select(".nv-scatterWrap").call(t),b&&X.select(".nv-x.nv-axis").call(n),w&&X.select(".nv-y.nv-axis").call(r),X.select(".nv-distributionX").datum(e.filter(function(e){return!e.disabled})).call(o),X.select(".nv-distributionY").datum(e.filter(function(e){return!e.disabled})).call(u)}var C=d3.select(this),k=this,L=(f||parseInt(C.style("width"))||960)-a.left-a.right,I=(l||parseInt(C.style("height"))||400)-a.top-a.bottom;F.update=function(){C.transition().duration(D).call(F)},F.container=this,A.disabled=e.map(function(e){return!!e.disabled});if(!O){var q;O={};for(q in A)A[q]instanceof Array?O[q]=A[q].slice(0):O[q]=A[q]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var R=C.selectAll(".nv-noData").data([_]);return R.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),R.attr("x",a.left+L/2).attr("y",a.top+I/2).text(function(e){return e}),F}C.selectAll(".nv-noData").remove(),P=P||h,H=H||p;var U=C.selectAll("g.nv-wrap.nv-scatterChart").data([e]),z=U.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+t.id()),W=z.append("g"),X=U.select("g");W.append("rect").attr("class","nvd3 nv-background"),W.append("g").attr("class","nv-x nv-axis"),W.append("g").attr("class","nv-y nv-axis"),W.append("g").attr("class","nv-scatterWrap"),W.append("g").attr("class","nv-distWrap"),W.append("g").attr("class","nv-legendWrap"),W.append("g").attr("class","nv-controlsWrap");if(y){var V=S?L/2:L;i.width(V),U.select(".nv-legendWrap").datum(e).call(i),a.top!=i.height()&&(a.top=i.height(),I=(l||parseInt(C.style("height"))||400)-a.top-a.bottom),U.select(".nv-legendWrap").attr("transform","translate("+(L-V)+","+ -a.top+")")}S&&(s.width(180).color(["#444"]),X.select(".nv-controlsWrap").datum(j).attr("transform","translate(0,"+ -a.top+")").call(s)),U.attr("transform","translate("+a.left+","+a.top+")"),E&&X.select(".nv-y.nv-axis").attr("transform","translate("+L+",0)"),t.width(L).height(I).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),d!==0&&t.xDomain(null),v!==0&&t.yDomain(null),U.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t);if(d!==0){var $=h.domain()[1]-h.domain()[0];t.xDomain([h.domain()[0]-d*$,h.domain()[1]+d*$])}if(v!==0){var J=p.domain()[1]-p.domain()[0];t.yDomain([p.domain()[0]-v*J,p.domain()[1]+v*J])}(v!==0||d!==0)&&U.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),b&&(n.scale(h).ticks(n.ticks()&&n.ticks().length?n.ticks():L/100).tickSize(-I,0),X.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(n)),w&&(r.scale(p).ticks(r.ticks()&&r.ticks().length?r.ticks():I/36).tickSize(-L,0),X.select(".nv-y.nv-axis").call(r)),m&&(o.getData(t.x()).scale(h).width(L).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),W.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),X.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(e.filter(function(e){return!e.disabled})).call(o)),g&&(u.getData(t.y()).scale(p).width(I).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),W.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),X.select(".nv-distributionY").attr("transform","translate("+(E?L:-u.size())+",0)").datum(e.filter(function(e){return!e.disabled})).call(u)),d3.fisheye&&(X.select(".nv-background").attr("width",L).attr("height",I),X.select(".nv-background").on("mousemove",K),X.select(".nv-background").on("click",function(){T=!T}),t.dispatch.on("elementClick.freezeFisheye",function(){T=!T})),s.dispatch.on("legendClick",function(e,i){e.disabled=!e.disabled,x=e.disabled?0:2.5,X.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),X.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(h.distortion(x).focus(0),p.distortion(x).focus(0),X.select(".nv-scatterWrap").call(t),X.select(".nv-x.nv-axis").call(n),X.select(".nv-y.nv-axis").call(r)):T=!1,F.update()}),i.dispatch.on("stateChange",function(e){A.disabled=e.disabled,M.stateChange(A),F.update()}),t.dispatch.on("elementMouseover.tooltip",function(e){d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",function(t,n){return e.pos[1]-I}),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",e.pos[0]+o.size()),e.pos=[e.pos[0]+a.left,e.pos[1]+a.top],M.tooltipShow(e)}),M.on("tooltipShow",function(e){N&&B(e,k.parentNode)}),M.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),A.disabled=t.disabled),F.update()}),P=h.copy(),H=p.copy()}),F}var t=e.models.scatter(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.models.distribution(),u=e.models.distribution(),a={top:30,right:20,bottom:50,left:75},f=null,l=null,c=e.utils.defaultColor(),h=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.xScale(),p=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.yScale(),d=0,v=0,m=!1,g=!1,y=!0,b=!0,w=!0,E=!1,S=!!d3.fisheye,x=0,T=!1,N=!0,C=function(e,t,n){return"<strong>"+t+"</strong>"},k=function(e,t,n){return"<strong>"+n+"</strong>"},L=null,A={},O=null,M=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),_="No Data Available.",D=250;t.xScale(h).yScale(p),n.orient("bottom").tickPadding(10),r.orient(E?"right":"left").tickPadding(10),o.axis("x"),u.axis("y"),s.updateState(!1);var P,H,B=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),f=i.pos[0]+(s.offsetLeft||0),l=p.range()[0]+a.top+(s.offsetTop||0),c=h.range()[0]+a.left+(s.offsetLeft||0),d=i.pos[1]+(s.offsetTop||0),v=n.tickFormat()(t.x()(i.point,i.pointIndex)),m=r.tickFormat()(t.y()(i.point,i.pointIndex));C!=null&&e.tooltip.show([f,l],C(i.series.key,v,m,i,F),"n",1,s,"x-nvtooltip"),k!=null&&e.tooltip.show([c,d],k(i.series.key,v,m,i,F),"e",1,s,"y-nvtooltip"),L!=null&&e.tooltip.show([o,u],L(i.series.key,v,m,i,F),i.value<0?"n":"s",null,s)},j=[{key:"Magnify",disabled:!0}];return t.dispatch.on("elementMouseout.tooltip",function(e){M.tooltipHide(e),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",0),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",u.size())}),M.on("tooltipHide",function(){N&&e.tooltip.cleanup()}),F.dispatch=M,F.scatter=t,F.legend=i,F.controls=s,F.xAxis=n,F.yAxis=r,F.distX=o,F.distY=u,d3.rebind(F,t,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),F.options=e.utils.optionsFunc.bind(F),F.margin=function(e){return arguments.length?(a.top=typeof e.top!="undefined"?e.top:a.top,a.right=typeof e.right!="undefined"?e.right:a.right,a.bottom=typeof e.bottom!="undefined"?e.bottom:a.bottom,a.left=typeof e.left!="undefined"?e.left:a.left,F):a},F.width=function(e){return arguments.length?(f=e,F):f},F.height=function(e){return arguments.length?(l=e,F):l},F.color=function(t){return arguments.length?(c=e.utils.getColor(t),i.color(c),o.color(c),u.color(c),F):c},F.showDistX=function(e){return arguments.length?(m=e,F):m},F.showDistY=function(e){return arguments.length?(g=e,F):g},F.showControls=function(e){return arguments.length?(S=e,F):S},F.showLegend=function(e){return arguments.length?(y=e,F):y},F.showXAxis=function(e){return arguments.length?(b=e,F):b},F.showYAxis=function(e){return arguments.length?(w=e,F):w},F.rightAlignYAxis=function(e){return arguments.length?(E=e,r.orient(e?"right":"left"),F):E},F.fisheye=function(e){return arguments.length?(x=e,F):x},F.xPadding=function(e){return arguments.length?(d=e,F):d},F.yPadding=function(e){return arguments.length?(v=e,F):v},F.tooltips=function(e){return arguments.length?(N=e,F):N},F.tooltipContent=function(e){return arguments.length?(L=e,F):L},F.tooltipXContent=function(e){return arguments.length?(C=e,F):C},F.tooltipYContent=function(e){return arguments.length?(k=e,F):k},F.state=function(e){return arguments.length?(A=e,F):A},F.defaultState=function(e){return arguments.length?(O=e,F):O},F.noData=function(e){return arguments.length?(_=e,F):_},F.transitionDuration=function(e){return arguments.length?(D=e,F):D},F},e.models.scatterPlusLineChart=function(){"use strict";function B(e){return e.each(function(e){function $(){if(S)return z.select(".nv-point-paths").style("pointer-events","all"),!1;z.select(".nv-point-paths").style("pointer-events","none");var i=d3.mouse(this);h.distortion(E).focus(i[0]),p.distortion(E).focus(i[1]),z.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),g&&z.select(".nv-x.nv-axis").call(n),y&&z.select(".nv-y.nv-axis").call(r),z.select(".nv-distributionX").datum(e.filter(function(e){return!e.disabled})).call(o),z.select(".nv-distributionY").datum(e.filter(function(e){return!e.disabled})).call(u)}var T=d3.select(this),N=this,C=(f||parseInt(T.style("width"))||960)-a.left-a.right,j=(l||parseInt(T.style("height"))||400)-a.top-a.bottom;B.update=function(){T.transition().duration(M).call(B)},B.container=this,k.disabled=e.map(function(e){return!!e.disabled});if(!L){var F;L={};for(F in k)k[F]instanceof Array?L[F]=k[F].slice(0):L[F]=k[F]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var I=T.selectAll(".nv-noData").data([O]);return I.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),I.attr("x",a.left+C/2).attr("y",a.top+j/2).text(function(e){return e}),B}T.selectAll(".nv-noData").remove(),h=t.xScale(),p=t.yScale(),_=_||h,D=D||p;var q=T.selectAll("g.nv-wrap.nv-scatterChart").data([e]),R=q.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+t.id()),U=R.append("g"),z=q.select("g");U.append("rect").attr("class","nvd3 nv-background").style("pointer-events","none"),U.append("g").attr("class","nv-x nv-axis"),U.append("g").attr("class","nv-y nv-axis"),U.append("g").attr("class","nv-scatterWrap"),U.append("g").attr("class","nv-regressionLinesWrap"),U.append("g").attr("class","nv-distWrap"),U.append("g").attr("class","nv-legendWrap"),U.append("g").attr("class","nv-controlsWrap"),q.attr("transform","translate("+a.left+","+a.top+")"),b&&z.select(".nv-y.nv-axis").attr("transform","translate("+C+",0)"),m&&(i.width(C/2),q.select(".nv-legendWrap").datum(e).call(i),a.top!=i.height()&&(a.top=i.height(),j=(l||parseInt(T.style("height"))||400)-a.top-a.bottom),q.select(".nv-legendWrap").attr("transform","translate("+C/2+","+ -a.top+")")),w&&(s.width(180).color(["#444"]),z.select(".nv-controlsWrap").datum(H).attr("transform","translate(0,"+ -a.top+")").call(s)),t.width(C).height(j).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),q.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),q.select(".nv-regressionLinesWrap").attr("clip-path","url(#nv-edge-clip-"+t.id()+")");var W=q.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(e){return e});W.enter().append("g").attr("class","nv-regLines");var X=W.selectAll(".nv-regLine").data(function(e){return[e]}),V=X.enter().append("line").attr("class","nv-regLine").style("stroke-opacity",0);X.transition().attr("x1",h.range()[0]).attr("x2",h.range()[1]).attr("y1",function(e,t){return p(h.domain()[0]*e.slope+e.intercept)}).attr("y2",function(e,t){return p(h.domain()[1]*e.slope+e.intercept)}).style("stroke",function(e,t,n){return c(e,n)}).style("stroke-opacity",function(e,t){return e.disabled||typeof e.slope=="undefined"||typeof e.intercept=="undefined"?0:1}),g&&(n.scale(h).ticks(n.ticks()?n.ticks():C/100).tickSize(-j,0),z.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(n)),y&&(r.scale(p).ticks(r.ticks()?r.ticks():j/36).tickSize(-C,0),z.select(".nv-y.nv-axis").call(r)),d&&(o.getData(t.x()).scale(h).width(C).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),U.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),z.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(e.filter(function(e){return!e.disabled})).call(o)),v&&(u.getData(t.y()).scale(p).width(
	j).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),U.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),z.select(".nv-distributionY").attr("transform","translate("+(b?C:-u.size())+",0)").datum(e.filter(function(e){return!e.disabled})).call(u)),d3.fisheye&&(z.select(".nv-background").attr("width",C).attr("height",j),z.select(".nv-background").on("mousemove",$),z.select(".nv-background").on("click",function(){S=!S}),t.dispatch.on("elementClick.freezeFisheye",function(){S=!S})),s.dispatch.on("legendClick",function(e,i){e.disabled=!e.disabled,E=e.disabled?0:2.5,z.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),z.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(h.distortion(E).focus(0),p.distortion(E).focus(0),z.select(".nv-scatterWrap").call(t),z.select(".nv-x.nv-axis").call(n),z.select(".nv-y.nv-axis").call(r)):S=!1,B.update()}),i.dispatch.on("stateChange",function(e){k=e,A.stateChange(k),B.update()}),t.dispatch.on("elementMouseover.tooltip",function(e){d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",e.pos[1]-j),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",e.pos[0]+o.size()),e.pos=[e.pos[0]+a.left,e.pos[1]+a.top],A.tooltipShow(e)}),A.on("tooltipShow",function(e){x&&P(e,N.parentNode)}),A.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),k.disabled=t.disabled),B.update()}),_=h.copy(),D=p.copy()}),B}var t=e.models.scatter(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.models.distribution(),u=e.models.distribution(),a={top:30,right:20,bottom:50,left:75},f=null,l=null,c=e.utils.defaultColor(),h=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.xScale(),p=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.yScale(),d=!1,v=!1,m=!0,g=!0,y=!0,b=!1,w=!!d3.fisheye,E=0,S=!1,x=!0,T=function(e,t,n){return"<strong>"+t+"</strong>"},N=function(e,t,n){return"<strong>"+n+"</strong>"},C=function(e,t,n,r){return"<h3>"+e+"</h3>"+"<p>"+r+"</p>"},k={},L=null,A=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),O="No Data Available.",M=250;t.xScale(h).yScale(p),n.orient("bottom").tickPadding(10),r.orient(b?"right":"left").tickPadding(10),o.axis("x"),u.axis("y"),s.updateState(!1);var _,D,P=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),f=i.pos[0]+(s.offsetLeft||0),l=p.range()[0]+a.top+(s.offsetTop||0),c=h.range()[0]+a.left+(s.offsetLeft||0),d=i.pos[1]+(s.offsetTop||0),v=n.tickFormat()(t.x()(i.point,i.pointIndex)),m=r.tickFormat()(t.y()(i.point,i.pointIndex));T!=null&&e.tooltip.show([f,l],T(i.series.key,v,m,i,B),"n",1,s,"x-nvtooltip"),N!=null&&e.tooltip.show([c,d],N(i.series.key,v,m,i,B),"e",1,s,"y-nvtooltip"),C!=null&&e.tooltip.show([o,u],C(i.series.key,v,m,i.point.tooltip,i,B),i.value<0?"n":"s",null,s)},H=[{key:"Magnify",disabled:!0}];return t.dispatch.on("elementMouseout.tooltip",function(e){A.tooltipHide(e),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",0),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",u.size())}),A.on("tooltipHide",function(){x&&e.tooltip.cleanup()}),B.dispatch=A,B.scatter=t,B.legend=i,B.controls=s,B.xAxis=n,B.yAxis=r,B.distX=o,B.distY=u,d3.rebind(B,t,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),B.options=e.utils.optionsFunc.bind(B),B.margin=function(e){return arguments.length?(a.top=typeof e.top!="undefined"?e.top:a.top,a.right=typeof e.right!="undefined"?e.right:a.right,a.bottom=typeof e.bottom!="undefined"?e.bottom:a.bottom,a.left=typeof e.left!="undefined"?e.left:a.left,B):a},B.width=function(e){return arguments.length?(f=e,B):f},B.height=function(e){return arguments.length?(l=e,B):l},B.color=function(t){return arguments.length?(c=e.utils.getColor(t),i.color(c),o.color(c),u.color(c),B):c},B.showDistX=function(e){return arguments.length?(d=e,B):d},B.showDistY=function(e){return arguments.length?(v=e,B):v},B.showControls=function(e){return arguments.length?(w=e,B):w},B.showLegend=function(e){return arguments.length?(m=e,B):m},B.showXAxis=function(e){return arguments.length?(g=e,B):g},B.showYAxis=function(e){return arguments.length?(y=e,B):y},B.rightAlignYAxis=function(e){return arguments.length?(b=e,r.orient(e?"right":"left"),B):b},B.fisheye=function(e){return arguments.length?(E=e,B):E},B.tooltips=function(e){return arguments.length?(x=e,B):x},B.tooltipContent=function(e){return arguments.length?(C=e,B):C},B.tooltipXContent=function(e){return arguments.length?(T=e,B):T},B.tooltipYContent=function(e){return arguments.length?(N=e,B):N},B.state=function(e){return arguments.length?(k=e,B):k},B.defaultState=function(e){return arguments.length?(L=e,B):L},B.noData=function(e){return arguments.length?(O=e,B):O},B.transitionDuration=function(e){return arguments.length?(M=e,B):M},B},e.models.sparkline=function(){"use strict";function d(e){return e.each(function(e){var i=n-t.left-t.right,d=r-t.top-t.bottom,v=d3.select(this);s.domain(l||d3.extent(e,u)).range(h||[0,i]),o.domain(c||d3.extent(e,a)).range(p||[d,0]);var m=v.selectAll("g.nv-wrap.nv-sparkline").data([e]),g=m.enter().append("g").attr("class","nvd3 nv-wrap nv-sparkline"),b=g.append("g"),w=m.select("g");m.attr("transform","translate("+t.left+","+t.top+")");var E=m.selectAll("path").data(function(e){return[e]});E.enter().append("path"),E.exit().remove(),E.style("stroke",function(e,t){return e.color||f(e,t)}).attr("d",d3.svg.line().x(function(e,t){return s(u(e,t))}).y(function(e,t){return o(a(e,t))}));var S=m.selectAll("circle.nv-point").data(function(e){function n(t){if(t!=-1){var n=e[t];return n.pointIndex=t,n}return null}var t=e.map(function(e,t){return a(e,t)}),r=n(t.lastIndexOf(o.domain()[1])),i=n(t.indexOf(o.domain()[0])),s=n(t.length-1);return[i,r,s].filter(function(e){return e!=null})});S.enter().append("circle"),S.exit().remove(),S.attr("cx",function(e,t){return s(u(e,e.pointIndex))}).attr("cy",function(e,t){return o(a(e,e.pointIndex))}).attr("r",2).attr("class",function(e,t){return u(e,e.pointIndex)==s.domain()[1]?"nv-point nv-currentValue":a(e,e.pointIndex)==o.domain()[0]?"nv-point nv-minValue":"nv-point nv-maxValue"})}),d}var t={top:2,right:0,bottom:2,left:0},n=400,r=32,i=!0,s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=e.utils.getColor(["#000"]),l,c,h,p;return d.options=e.utils.optionsFunc.bind(d),d.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,d):t},d.width=function(e){return arguments.length?(n=e,d):n},d.height=function(e){return arguments.length?(r=e,d):r},d.x=function(e){return arguments.length?(u=d3.functor(e),d):u},d.y=function(e){return arguments.length?(a=d3.functor(e),d):a},d.xScale=function(e){return arguments.length?(s=e,d):s},d.yScale=function(e){return arguments.length?(o=e,d):o},d.xDomain=function(e){return arguments.length?(l=e,d):l},d.yDomain=function(e){return arguments.length?(c=e,d):c},d.xRange=function(e){return arguments.length?(h=e,d):h},d.yRange=function(e){return arguments.length?(p=e,d):p},d.animate=function(e){return arguments.length?(i=e,d):i},d.color=function(t){return arguments.length?(f=e.utils.getColor(t),d):f},d},e.models.sparklinePlus=function(){"use strict";function v(e){return e.each(function(c){function O(){if(a)return;var e=C.selectAll(".nv-hoverValue").data(u),r=e.enter().append("g").attr("class","nv-hoverValue").style("stroke-opacity",0).style("fill-opacity",0);e.exit().transition().duration(250).style("stroke-opacity",0).style("fill-opacity",0).remove(),e.attr("transform",function(e){return"translate("+s(t.x()(c[e],e))+",0)"}).transition().duration(250).style("stroke-opacity",1).style("fill-opacity",1);if(!u.length)return;r.append("line").attr("x1",0).attr("y1",-n.top).attr("x2",0).attr("y2",b),r.append("text").attr("class","nv-xValue").attr("x",-6).attr("y",-n.top).attr("text-anchor","end").attr("dy",".9em"),C.select(".nv-hoverValue .nv-xValue").text(f(t.x()(c[u[0]],u[0]))),r.append("text").attr("class","nv-yValue").attr("x",6).attr("y",-n.top).attr("text-anchor","start").attr("dy",".9em"),C.select(".nv-hoverValue .nv-yValue").text(l(t.y()(c[u[0]],u[0])))}function M(){function r(e,n){var r=Math.abs(t.x()(e[0],0)-n),i=0;for(var s=0;s<e.length;s++)Math.abs(t.x()(e[s],s)-n)<r&&(r=Math.abs(t.x()(e[s],s)-n),i=s);return i}if(a)return;var e=d3.mouse(this)[0]-n.left;u=[r(c,Math.round(s.invert(e)))],O()}var m=d3.select(this),g=(r||parseInt(m.style("width"))||960)-n.left-n.right,b=(i||parseInt(m.style("height"))||400)-n.top-n.bottom;v.update=function(){v(e)},v.container=this;if(!c||!c.length){var w=m.selectAll(".nv-noData").data([d]);return w.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),w.attr("x",n.left+g/2).attr("y",n.top+b/2).text(function(e){return e}),v}m.selectAll(".nv-noData").remove();var E=t.y()(c[c.length-1],c.length-1);s=t.xScale(),o=t.yScale();var S=m.selectAll("g.nv-wrap.nv-sparklineplus").data([c]),T=S.enter().append("g").attr("class","nvd3 nv-wrap nv-sparklineplus"),N=T.append("g"),C=S.select("g");N.append("g").attr("class","nv-sparklineWrap"),N.append("g").attr("class","nv-valueWrap"),N.append("g").attr("class","nv-hoverArea"),S.attr("transform","translate("+n.left+","+n.top+")");var k=C.select(".nv-sparklineWrap");t.width(g).height(b),k.call(t);var L=C.select(".nv-valueWrap"),A=L.selectAll(".nv-currentValue").data([E]);A.enter().append("text").attr("class","nv-currentValue").attr("dx",p?-8:8).attr("dy",".9em").style("text-anchor",p?"end":"start"),A.attr("x",g+(p?n.right:0)).attr("y",h?function(e){return o(e)}:0).style("fill",t.color()(c[c.length-1],c.length-1)).text(l(E)),N.select(".nv-hoverArea").append("rect").on("mousemove",M).on("click",function(){a=!a}).on("mouseout",function(){u=[],O()}),C.select(".nv-hoverArea rect").attr("transform",function(e){return"translate("+ -n.left+","+ -n.top+")"}).attr("width",g+n.left+n.right).attr("height",b+n.top)}),v}var t=e.models.sparkline(),n={top:15,right:100,bottom:10,left:50},r=null,i=null,s,o,u=[],a=!1,f=d3.format(",r"),l=d3.format(",.2f"),c=!0,h=!0,p=!1,d="No Data Available.";return v.sparkline=t,d3.rebind(v,t,"x","y","xScale","yScale","color"),v.options=e.utils.optionsFunc.bind(v),v.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,v):n},v.width=function(e){return arguments.length?(r=e,v):r},v.height=function(e){return arguments.length?(i=e,v):i},v.xTickFormat=function(e){return arguments.length?(f=e,v):f},v.yTickFormat=function(e){return arguments.length?(l=e,v):l},v.showValue=function(e){return arguments.length?(c=e,v):c},v.alignValue=function(e){return arguments.length?(h=e,v):h},v.rightAlignValue=function(e){return arguments.length?(p=e,v):p},v.noData=function(e){return arguments.length?(d=e,v):d},v},e.models.stackedArea=function(){"use strict";function g(e){return e.each(function(e){var a=n-t.left-t.right,b=r-t.top-t.bottom,w=d3.select(this);p=v.xScale(),d=v.yScale();var E=e;e.forEach(function(e,t){e.seriesIndex=t,e.values=e.values.map(function(e,n){return e.index=n,e.seriesIndex=t,e})});var S=e.filter(function(e){return!e.disabled});e=d3.layout.stack().order(l).offset(f).values(function(e){return e.values}).x(o).y(u).out(function(e,t,n){var r=u(e)===0?0:n;e.display={y:r,y0:t}})(S);var T=w.selectAll("g.nv-wrap.nv-stackedarea").data([e]),N=T.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedarea"),C=N.append("defs"),k=N.append("g"),L=T.select("g");k.append("g").attr("class","nv-areaWrap"),k.append("g").attr("class","nv-scatterWrap"),T.attr("transform","translate("+t.left+","+t.top+")"),v.width(a).height(b).x(o).y(function(e){return e.display.y+e.display.y0}).forceY([0]).color(e.map(function(e,t){return e.color||i(e,e.seriesIndex)}));var A=L.select(".nv-scatterWrap").datum(e);A.call(v),C.append("clipPath").attr("id","nv-edge-clip-"+s).append("rect"),T.select("#nv-edge-clip-"+s+" rect").attr("width",a).attr("height",b),L.attr("clip-path",h?"url(#nv-edge-clip-"+s+")":"");var O=d3.svg.area().x(function(e,t){return p(o(e,t))}).y0(function(e){return d(e.display.y0)}).y1(function(e){return d(e.display.y+e.display.y0)}).interpolate(c),M=d3.svg.area().x(function(e,t){return p(o(e,t))}).y0(function(e){return d(e.display.y0)}).y1(function(e){return d(e.display.y0)}),_=L.select(".nv-areaWrap").selectAll("path.nv-area").data(function(e){return e});_.enter().append("path").attr("class",function(e,t){return"nv-area nv-area-"+t}).attr("d",function(e,t){return M(e.values,e.seriesIndex)}).on("mouseover",function(e,t){d3.select(this).classed("hover",!0),m.areaMouseover({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}).on("mouseout",function(e,t){d3.select(this).classed("hover",!1),m.areaMouseout({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}).on("click",function(e,t){d3.select(this).classed("hover",!1),m.areaClick({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}),_.exit().remove(),_.style("fill",function(e,t){return e.color||i(e,e.seriesIndex)}).style("stroke",function(e,t){return e.color||i(e,e.seriesIndex)}),_.transition().attr("d",function(e,t){return O(e.values,t)}),v.dispatch.on("elementMouseover.area",function(e){L.select(".nv-chart-"+s+" .nv-area-"+e.seriesIndex).classed("hover",!0)}),v.dispatch.on("elementMouseout.area",function(e){L.select(".nv-chart-"+s+" .nv-area-"+e.seriesIndex).classed("hover",!1)}),g.d3_stackedOffset_stackPercent=function(e){var t=e.length,n=e[0].length,r=1/t,i,s,o,a=[];for(s=0;s<n;++s){for(i=0,o=0;i<E.length;i++)o+=u(E[i].values[s]);if(o)for(i=0;i<t;i++)e[i][s][1]/=o;else for(i=0;i<t;i++)e[i][s][1]=r}for(s=0;s<n;++s)a[s]=0;return a}}),g}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e5),o=function(e){return e.x},u=function(e){return e.y},a="stack",f="zero",l="default",c="linear",h=!1,p,d,v=e.models.scatter(),m=d3.dispatch("tooltipShow","tooltipHide","areaClick","areaMouseover","areaMouseout");return v.size(2.2).sizeDomain([2.2,2.2]),v.dispatch.on("elementClick.area",function(e){m.areaClick(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],m.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){m.tooltipHide(e)}),g.dispatch=m,g.scatter=v,d3.rebind(g,v,"interactive","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","forceX","forceY","forceSize","clipVoronoi","useVoronoi","clipRadius","highlightPoint","clearHighlights"),g.options=e.utils.optionsFunc.bind(g),g.x=function(e){return arguments.length?(o=d3.functor(e),g):o},g.y=function(e){return arguments.length?(u=d3.functor(e),g):u},g.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,g):t},g.width=function(e){return arguments.length?(n=e,g):n},g.height=function(e){return arguments.length?(r=e,g):r},g.clipEdge=function(e){return arguments.length?(h=e,g):h},g.color=function(t){return arguments.length?(i=e.utils.getColor(t),g):i},g.offset=function(e){return arguments.length?(f=e,g):f},g.order=function(e){return arguments.length?(l=e,g):l},g.style=function(e){if(!arguments.length)return a;a=e;switch(a){case"stack":g.offset("zero"),g.order("default");break;case"stream":g.offset("wiggle"),g.order("inside-out");break;case"stream-center":g.offset("silhouette"),g.order("inside-out");break;case"expand":g.offset("expand"),g.order("default");break;case"stack_percent":g.offset(g.d3_stackedOffset_stackPercent),g.order("default")}return g},g.interpolate=function(e){return arguments.length?(c=e,g):c},g},e.models.stackedAreaChart=function(){"use strict";function M(y){return y.each(function(y){var _=d3.select(this),D=this,P=(a||parseInt(_.style("width"))||960)-u.left-u.right,H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom;M.update=function(){_.transition().duration(A).call(M)},M.container=this,S.disabled=y.map(function(e){return!!e.disabled});if(!x){var B;x={};for(B in S)S[B]instanceof Array?x[B]=S[B].slice(0):x[B]=S[B]}if(!y||!y.length||!y.filter(function(e){return e.values.length}).length){var j=_.selectAll(".nv-noData").data([T]);return j.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),j.attr("x",u.left+P/2).attr("y",u.top+H/2).text(function(e){return e}),M}_.selectAll(".nv-noData").remove(),b=t.xScale(),w=t.yScale();var F=_.selectAll("g.nv-wrap.nv-stackedAreaChart").data([y]),I=F.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedAreaChart").append("g"),q=F.select("g");I.append("rect").style("opacity",0),I.append("g").attr("class","nv-x nv-axis"),I.append("g").attr("class","nv-y nv-axis"),I.append("g").attr("class","nv-stackedWrap"),I.append("g").attr("class","nv-legendWrap"),I.append("g").attr("class","nv-controlsWrap"),I.append("g").attr("class","nv-interactive"),q.select("rect").attr("width",P).attr("height",H);if(h){var R=c?P-C:P;i.width(R),q.select(".nv-legendWrap").datum(y).call(i),u.top!=i.height()&&(u.top=i.height(),H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom),q.select(".nv-legendWrap").attr("transform","translate("+(P-R)+","+ -u.top+")")}if(c){var U=[{key:L.stacked||"Stacked",metaKey:"Stacked",disabled:t.style()!="stack",style:"stack"},{key:L.stream||"Stream",metaKey:"Stream",disabled:t.style()!="stream",style:"stream"},{key:L.expanded||"Expanded",metaKey:"Expanded",disabled:t.style()!="expand",style:"expand"},{key:L.stack_percent||"Stack %",metaKey:"Stack_Percent",disabled:t.style()!="stack_percent",style:"stack_percent"}];C=k.length/3*260,U=U.filter(function(e){return k.indexOf(e.metaKey)!==-1}),s.width(C).color(["#444","#444","#444"]),q.select(".nv-controlsWrap").datum(U).call(s),u.top!=Math.max(s.height(),i.height())&&(u.top=Math.max(s.height(),i.height()),H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom),q.select(".nv-controlsWrap").attr("transform","translate(0,"+ -u.top+")")}F.attr("transform","translate("+u.left+","+u.top+")"),v&&q.select(".nv-y.nv-axis").attr("transform","translate("+P+",0)"),m&&(o.width(P).height(H).margin({left:u.left,top:u.top}).svgContainer(_).xScale(b),F.select(".nv-interactive").call(o)),t.width(P).height(H);var z=q.select(".nv-stackedWrap").datum(y);z.transition().call(t),p&&(n.scale(b).ticks(P/100).tickSize(-H,0),q.select(".nv-x.nv-axis").attr("transform","translate(0,"+H+")"),q.select(".nv-x.nv-axis").transition().duration(0).call(n)),d&&(r.scale(w).ticks(t.offset()=="wiggle"?0:H/36).tickSize(-P,0).setTickFormat(t.style()=="expand"||t.style()=="stack_percent"?d3.format("%"):E),q.select(".nv-y.nv-axis").transition().duration(0).call(r)),t.dispatch.on("areaClick.toggle",function(e){y.filter(function(e){return!e.disabled}).length===1?y.forEach(function(e){e.disabled=!1}):y.forEach(function(t,n){t.disabled=n!=e.seriesIndex}),S.disabled=y.map(function(e){return!!e.disabled}),N.stateChange(S),M.update()}),i.dispatch.on("stateChange",function(e){S.disabled=e.disabled,N.stateChange(S),M.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;U=U.map(function(e){return e.disabled=!0,e}),e.disabled=!1,t.style(e.style),S.style=t.style(),N.stateChange(S),M.update()}),o.dispatch.on("elementMousemove",function(i){t.clearHighlights();var s,a,f,c=[];y.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){a=e.interactiveBisect(n.values,i.pointXValue,M.x()),t.highlightPoint(r,a,!0);var o=n.values[a];if(typeof o=="undefined")return;typeof s=="undefined"&&(s=o),typeof f=="undefined"&&(f=M.xScale()(M.x()(o,a)));var u=t.style()=="expand"?o.display.y:M.y()(o,a);c.push({key:n.key,value:u,color:l(n,n.seriesIndex),stackedValue:o.display})}),c.reverse();if(c.length>2){var h=M.yScale().invert(i.mouseY),p=Infinity,d=null;c.forEach(function(e,t){h=Math.abs(h);var n=Math.abs(e.stackedValue.y0),r=Math.abs(e.stackedValue.y);if(h>=n&&h<=r+n){d=t;return}}),d!=null&&(c[d].highlight=!0)}var v=n.tickFormat()(M.x()(s,a)),m=t.style()=="expand"?function(e,t){return d3.format(".1%")(e)}:function(e,t){return r.tickFormat()(e)};o.tooltip.position({left:f+u.left,top:i.mouseY+u.top}).chartContainer(D.parentNode).enabled(g).valueFormatter(m).data({value:v,series:c})(),o.renderGuideLine(f)}),o.dispatch.on("elementMouseout",function(e){N.tooltipHide(),t.clearHighlights()}),N.on("tooltipShow",function(e){g&&O(e,D.parentNode)}),N.on("changeState",function(e){typeof e.disabled!="undefined"&&y.length===e.disabled.length&&(y.forEach(function(t,n){t.disabled=e.disabled[n]}),S.disabled=e.disabled),typeof e.style!="undefined"&&t.style(e.style),M.update()})}),M}var t=e.models.stackedArea(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.interactiveGuideline(),u={top:30,right:25,bottom:50,left:60},a=null,f=null,l=e.utils.defaultColor(),c=!0,h=!0,p=!0,d=!0,v=!1,m=!1,g=!0,y=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" on "+t+"</p>"},b,w,E=d3.format(",.2f"),S={style:t.style()},x=null,T="No Data Available.",N=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),C=250,k=["Stacked","Stream","Expanded"],L={},A=250;n.orient("bottom").tickPadding(7),r.orient(v?"right":"left"),s.updateState(!1);var O=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=y(i.series.key,a,f,i,M);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("tooltipShow",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],N.tooltipShow(e)}),t.dispatch.on("tooltipHide",function(e){N.tooltipHide(e)}),N.on("tooltipHide",function(){g&&e.tooltip.cleanup()}),M.dispatch=N,M.stacked=t,M.legend=i,M.controls=s,M.xAxis=n,M.yAxis=r,M.interactiveLayer=o,d3.rebind(M,t,"x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","sizeDomain","interactive","useVoronoi","offset","order","style","clipEdge","forceX","forceY","forceSize","interpolate"),M.options=e.utils.optionsFunc.bind(M),M.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,M):u},M.width=function(e){return arguments.length?(a=e,M):a},M.height=function(e){return arguments.length?(f=e,M):f},M.color=function(n){return arguments.length?(l=e.utils.getColor(n),i.color(l),t.color(l),M):l},M.showControls=function(e){return arguments.length?(c=e,M):c},M.showLegend=function(e){return arguments.length?(h=e,M):h},M.showXAxis=function(e){return arguments.length?(p=e,M):p},M.showYAxis=function(e){return arguments.length?(d=e,M):d},M.rightAlignYAxis=function(e){return arguments.length?(v=e,r.orient(e?"right":"left"),M):v},M.useInteractiveGuideline=function(e){return arguments.length?(m=e,e===!0&&(M.interactive(!1),M.useVoronoi(!1)),M):m},M.tooltip=function(e){return arguments.length?(y=e,M):y},M.tooltips=function(e){return arguments.length?(g=e,M):g},M.tooltipContent=function(e){return arguments.length?(y=e,M):y},M.state=function(e){return arguments.length?(S=e,M):S},M.defaultState=function(e){return arguments.length?(x=e,M):x},M.noData=function(e){return arguments.length?(T=e,M):T},M.transitionDuration=function(e){return arguments.length?(A=e,M):A},M.controlsData=function(e){return arguments.length?(k=e,M):k},M.controlLabels=function(e){return arguments.length?typeof e!="object"?L:(L=e,M):L},r.setTickFormat=r.tickFormat,r.tickFormat=function(e){return arguments.length?(E=e,r):E},M}})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const reportData = __webpack_require__(7);
	const barChartReport = __webpack_require__(8);

	let _pieChart = null;
	window._sortOrder = "value-desc";

	let _reportOptions = [
	    { label : "Qty - Type",             fieldName: "",                  fieldType : "ModelType"},
	    { label : "Qty - Level",            fieldName: "Level",             fieldType : "Properties"},
	    { label : "Qty - Base Constraint",  fieldName: "Base Constraint",   fieldType : "Properties"},
	    { label : "Qty - System Type",      fieldName: "System Type",       fieldType : "Properties"},
	    { label : "Qty - Assembly Code",    fieldName: "Assembly Code",     fieldType : "Properties"},
	    { label : "Qty - Material",         fieldName: "Material",          fieldType : "Properties"},
	    { label : "Qty - Appearance",       fieldName: "Appearance",        fieldType : "Properties"},
	    { label : "Qty - Name",             fieldName: "Name",              fieldType : "Properties"},
	    { label : "Qty - Mass",             fieldName: "Mass",              fieldType : "Quantity"},
	    { label : "Qty - Volume",           fieldName: "Volume",            fieldType : "Quantity"},
	    { label : "Qty - Area",             fieldName: "Area",              fieldType : "Quantity"},
	    { label : "Qty - Density",          fieldName: "Density",           fieldType : "Quantity"}
	];

	    // populate the popup menu with the avaialable models to load (from the array above)
	function loadReportMenuOptions() {
	        // add the new options for models
	    var sel = $("#pu_reportToRun");
	    $.each(_reportOptions, function(i, item) {
	        sel.append($("<option>", {
	            value: i,
	            text : item.label
	        }));
	    });
	}

	function enableReportMenu() {
	    $('#pu_reportToRun').attr("disabled", false);
	    $('#pu_sortOrder').attr("disabled", false);
	}

	function disableReportMenu() {
	    $('#pu_reportToRun').attr("disabled", true);
	    $('#pu_sortOrder').attr("disabled", true);
	}

	function runReport(index) {

	        // if they pass in a negative index, look up the current one
	    if (typeof (index) === "undefined" || index === -1)
	        index = parseInt($("#pu_reportToRun option:selected").val(), 10);

	    var reportObj = _reportOptions[index];
	    console.log("Running report: " + reportObj.label);

	    $("#reportinput").empty();
	    _currentQty = null;
	    _currentBound = null;

	    if (reportObj.fieldName === "") {
	        var modelTypes = reportData.groupDataByType();
	        wrapDataForPieChart(modelTypes);
	    }
	    else if (reportObj.fieldType === "Quantity") {

	        reportData.getQtyDataByProperty(reportObj.fieldName, function(Qty, misCount, bound){
	            var initrange = 100;

	            createReportUserInput(bound, initrange);
	            _currentQty = Qty;
	            _currentBound = bound;

	            reportData.groupQtyDataByRange(Qty, bound, initrange, wrapDataForPieChart);
	        });
	    }
	    else {
	        reportData.groupDataByProperty(reportObj.fieldName, wrapDataForPieChart);
	     }
	}

	let _currentQty = null;
	let _currentBound = null;

	    // Create user input div for quantity type
	function createReportUserInput(bound, initVal) {

	    var slider = document.createElement("input");
	    slider.id = "qtyslider";
	    slider.type = "range";
	    slider.style.height = "12px";
	    slider.min = 0;
	    slider.max = Math.round(bound.max - bound.min);
	    slider.value = initVal;
	    slider.onchange = function() {
	        $("#qtyfield").val(slider.value);
	        reportData.groupQtyDataByRange(_currentQty, _currentBound, slider.value, wrapDataForPieChart);
	    };

	    var preLabel = document.createElement("label");
	    preLabel.htmlFor = slider.id;
	    preLabel.innerHTML = slider.min;
	    preLabel.style.marginRight = "10px";
	    var postLabel = document.createElement("label");
	    postLabel.htmlFor = slider.id;
	    postLabel.innerHTML = slider.max;
	    postLabel.style.marginLeft = "10px";

	    var textField = document.createElement("input");
	    textField.id = "qtyfield";
	    textField.type = "text";
	    textField.style.width = "40px";
	    textField.placeholder = slider.value;
	    textField.onkeydown = function(e) {
	        if (e.keyCode == 13) {
	            var inputVal = parseFloat(this.value);
	            if (inputVal <= parseFloat(slider.max) && inputVal >= 0) {
	                $("#qtyslider").val(this.value);
	                reportData.groupQtyDataByRange(_currentQty, _currentBound, this.value, wrapDataForPieChart);
	            }
	        }
	    };

	    var fieldLabel = document.createElement("label");
	    fieldLabel.htmlFor = textField.id;
	    fieldLabel.innerHTML = "Range: "
	    fieldLabel.style.marginLeft = "25px";

	    var inputDiv = document.getElementById("reportinput");
	    inputDiv.style.margin = "20px";
	    inputDiv.appendChild(preLabel);
	    inputDiv.appendChild(slider);
	    inputDiv.appendChild(postLabel);
	    inputDiv.appendChild(fieldLabel);
	    inputDiv.appendChild(textField);
	}

	function wrapDataForPieChart(buckets, misCount) {
	    var reportIdx = parseInt($("#pu_reportToRun").val());
	    var fieldName = (_reportOptions[reportIdx].fieldName === "") ? "Object Type" : _reportOptions[reportIdx].fieldName;
	    var pieOpts = initPieOpts(fieldName, reportIdx);

	    for (var valueKey in buckets) {
	        var pieObject = {};
	        pieObject.label = valueKey;
	        pieObject.value = buckets[valueKey].length;
	        pieObject.lmvIds = buckets[valueKey];
	        pieOpts.data.content.push(pieObject);
	    }

	    loadReportDataPieChart(pieOpts);
	}

	$(document).ready(function() {

	    console.log("Document Ready: excuting func in pieChart.js");

	    loadReportMenuOptions();

	        // user selected a new model to load
	    $("#pu_reportToRun").change(function(evt) {

	        // Only calls when user selection changes

	        evt.preventDefault(); // The event.preventDefault() method stops the default action of an element from happening

	        var index = parseInt($("#pu_reportToRun option:selected").val(), 10);

	        runReport(index);
	    });

	    $("#pu_sortOrder").change(function(evt) {
	        evt.preventDefault();

	        _sortOrder = $("#pu_sortOrder option:selected").val();
	            // rebuild the report with the new sort order
	        if (_pieChart)
	            runReport(_pieChart.options.reportIndex);   // re-run same report
	    });

	});

	    // callback function that fills the pieChart up with the data retrieved from LMV Object Properties
	function loadReportDataPieChart(pieOpts) {
	        // free up anything that is already there
	    if (_pieChart)
	        _pieChart.destroy();

	    $("#barChart").empty();

	    if (pieOpts.data.content.length === 0) {
	        $("#pieChart").append("<p><em>No data could be retrieved for charts.  This report is probably not applicable for the given model.  As an example, Revit models can be sorted by Type or Level, but Fusion models cannot.  Fusion models are more appropriate for reports sorted by Mass, Volume, or Material.  Try switching to a different report or a different model.</em></p>");
	    }
	    else {
	        // if we have a lot of buckets, don't let the pie chart get out of control, condense anything with 2 or less
	        // into an "Other" wedge.

	        //pieOpts.data.sortOrder = "value-desc";
	        pieOpts.data.content.sort(function (a, b) {
	            if (a.value < b.value) return 1;
	            else if (a.value > b.value) return -1;
	            return 0;
	        });

	        if (pieOpts.data.content.length < 10) {
	            pieOpts.data.smallSegmentGrouping.enabled = false;
	        } else if (pieOpts.data.content.length > 20) {
	            pieOpts.labels.truncation.enabled = true;
	            var thresholdObj = pieOpts.data.content[19];
	            pieOpts.data.smallSegmentGrouping.value = thresholdObj.value;
	        }

	        _pieChart = new d3pie("pieChart", pieOpts);
	        barChartReport.loadBarChart(pieOpts.data);
	    }
	}

	    // initialize
	function initPieOpts(fieldName, reportIndex) {
	    var pieOpts = initPieDefaults(fieldName);
	    pieOpts.reportIndex = reportIndex;

	    pieOpts.data = {
	        "sortOrder": _sortOrder,
	        "content": [],
	        "smallSegmentGrouping": {
	            "enabled": true,
	            "value": 1,
	            "valueType": "value"   // percentage or value
	        },
	    };

	    return pieOpts;
	}

	function initPieDefaults(fieldName) {
	    var strSubTitle = "Quantities in model (" + fieldName + ")";
	    var pieDefaults = {
	        "header": {
	            "title": false,
	            "subtitle": false,
	            "titleSubtitlePadding": 9
	        },
	        "footer": {
	            "color": "#999999",
	            "fontSize": 10,
	            "font": "open sans",
	            "location": "bottom-left"
	        },
	        "size": {
	            "canvasWidth": 590,
	            "pieInnerRadius": "39%",
	            "pieOuterRadius": "67%"
	        },
	        "labels": {
	            "outer": {
	                "pieDistance": 25
	            },
	            "inner": {
	                "hideWhenLessThanPercentage": 3,
	                "format": "value"
	            },
	            "mainLabel": {
	                "fontSize": 11
	            },
	            "percentage": {
	                "color": "#ffffff",
	                "decimalPlaces": 0
	            },
	            "value": {
	                "color": "#adadad",
	                "fontSize": 11
	            },
	            "lines": {
	                "enabled": true
	            },
	            "truncation": {
	                "enabled": false,
	                "truncateLength": 30
	            }
	        },
	        "tooltips": {
	            "enabled": true,
	            "type": "placeholder",
	            "string": "{label}: {value}, {percentage}%"
	        },
	        "effects": {
	            "pullOutSegmentOnClick": {
	                "effect": "linear",
	                "speed": 400,
	                "size": 8
	            }
	        },
	        "misc": {
	            "gradient": {
	                "enabled": true,
	                "percentage": 100
	            }
	        },
	        "callbacks": {
	            onClickSegment: clickPieWedge
	        }
	    };

	    return pieDefaults;
	}

	let _selectedWedge;

	function clickPieWedge(evt) {

	    if (_selectedWedge !== evt.data.label) {
	        ids = [];
	        if (evt.data.isGrouped === true) {  // "Other" bucket will group things together
	            for (i=0; i<evt.data.groupedData.length; i++)
	                ids = ids.concat(evt.data.groupedData[i].lmvIds);
	        }
	        else {
	            ids = evt.data.lmvIds;
	        }

	        _viewerMain.isolate(ids);
	        _viewerSecondary.select(ids);
	        _selectedWedge = evt.data.label;
	    } else {
	        _selectedWedge = null;

	        _viewerMain.showAll();
	        _viewerSecondary.clearSelection();
	    }

	}

	module.exports = {
	  disableReportMenu,
	  enableReportMenu,
	  runReport
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	//
	//  Getting relevant data for Report_barChart.js and Scheming.js
	//  The returned data format is only an object that uses label text(type/property value) as keys
	//  and the dbIds as the associated values. Some data wrapping might be necessary before use.

	var _modelLeafNodes;
	var _root;
	var instanceTree;

	    // Preloading steps
	    // called by LoadModel.js to preload all the leaf nodes whenever a new model is loaded,
	    // get and keep all the leaf nodes of this model for future use.
	function startReportDataLoader(callback) {
	    _modelLeafNodes = [];
	    instanceTree = window._viewerMain.model.getData().instanceTree;
	    let modelRoot = instanceTree.getRootId();

	    getModelLeafNodes(modelRoot, _modelLeafNodes);
	    if (callback) {
	      callback();
	    }
	}

	    // recursively add all the leaf nodes
	function getModelLeafNodes(rootId, leafNodes, callback) {
	  instanceTree.enumNodeChildren(rootId, (childId) => {
	    leafNodes.push(childId);
	  }, true);
	}

	//****************************************************************************************
	//
	//      Group data according to node model types
	//
	//****************************************************************************************


	    // group the children of a treeNode according to their types
	function groupDataByType(treeNode) {
	    var subTypes = {};

	    if (!treeNode) {
	      treeNode = {};
	      treeNode.id = window._viewerMain.model.getData().instanceTree.getRootId();
	    }
	    console.log(treeNode);

	    treeNode.children = [];

	    // add all the types into subTypes
	    instanceTree.enumNodeChildren(treeNode.id, (childId) => {
	      treeNode.children.push(childId);
	    });

	        // if the treeNode contains only one child, dig deeper to see if there're more branches
	    while (treeNode.children && treeNode.children.length === 1) {
	        treeNode = treeNode.children[0];
	    }

	    $.each(treeNode.children, function(i, childNode) {
	        var leafNodes = [];
	        getModelLeafNodes(childNode, leafNodes);
	        subTypes[instanceTree.getNodeName(childNode)] = leafNodes;
	    });

	    return subTypes;
	}


	//****************************************************************************************
	//
	//      Group data according to specific property value
	//
	//****************************************************************************************


	    // group the data by a property string, two things are returned
	    // a buckets object that uses the property value as the key and dbIds as the value
	    // and a misCount array which contains all the nodes that doesn't have such property
	function groupDataByProperty(propertyName, callback) {
	    var buckets = {};
	    var misCount = [];

	        // iterate through the preloaded leafNodes to check their properties
	    $.each(_modelLeafNodes, function(index, dbId) {
	        window._viewerMain.getProperties(dbId, function(propObj) {
	            for (var i = 0; i < propObj.properties.length; i++) {
	                if (propObj.properties[i].displayName === propertyName && (!propObj.properties[i].hidden)) {
	                    var formatVal = Autodesk.Viewing.Private.formatValueWithUnits(propObj.properties[i].displayValue, propObj.properties[i].units, propObj.properties[i].type);
	                    if (!(formatVal in buckets)) {
	                        buckets[formatVal] = [];
	                    }
	                    buckets[formatVal].push(dbId);
	                    break;
	                } else if (i == propObj.properties.length - 1) {
	                    misCount.push(dbId);
	                }
	            };

	            if (index === _modelLeafNodes.length - 1) {
	                if (callback) {
	                    callback(buckets, misCount);
	                }
	            }
	        });
	    });
	}


	//****************************************************************************************
	//
	//      Group quantity data according to a certain range
	//
	//****************************************************************************************


	    // first get all the quantity data and their dbIds by propertyName, and put them in an array
	    // in the meantime, find the min and max value to prepare for range grouping in next step
	function getQtyDataByProperty(propertyName, callback) {
	    var qtyArr = [];
	    var bound = {"min":-0.1, "max":-0.1};
	    var misCount = [];

	    // console.time("getQtyByProperty");
	    $.each(_modelLeafNodes, function(index, dbId) {
	        window._viewerMain.getProperties(dbId, function(propObj) {

	            for(var i = 0; i < propObj.properties.length; i++) {
	                if (propObj.properties[i].displayName === propertyName) {
	                    var propValue = parseFloat(propObj.properties[i].displayValue);
	                    if (propValue < bound.min || bound.min < 0)
	                        bound.min = propValue;
	                    if (propValue > bound.max || bound.max < 0)
	                        bound.max = propValue;
	                    var formatVal = Autodesk.Viewing.Private.formatValueWithUnits(propObj.properties[i].displayValue, propObj.properties[i].units, propObj.properties[i].type);
	                    qtyArr.push({"dbId":dbId, "val":propValue, "label":formatVal, "units":propObj.properties[i].units});
	                    break;
	                } else if (i == propObj.properties.length - 1) {
	                    misCount.push(dbId);
	                }
	            }

	            if ( index === _modelLeafNodes.length - 1) {
	                // console.timeEnd("getQtyByProperty");
	                if (callback) {
	                    callback(qtyArr, misCount, bound);
	                }
	            }
	        });
	    });
	}


	    // group the quantity array by range, returned is a buckets object that uses the range label
	    // as key and the dbIds as value, range is  calculated based on the min value and the range value,
	    // the array does not has to be sorted
	function groupQtyDataByRange(qtyArr, bound, range, callback) {
	    var buckets = {};
	    var min = bound.min;
	    range = parseFloat(range);

	    for (var i = qtyArr.length - 1; i >= 0; i--) {
	        var key;
	        if (range === 0) {
	            key = qtyArr[i].label;
	        } else {
	                // calculate the range label according to min and range
	            var floor = min + range * Math.floor((qtyArr[i].val-min)/range);
	            var ceil = floor + range;
	            key = Math.round(floor*1000)/1000 + " - " + Math.round(ceil*1000)/1000 + " " + qtyArr[i].units;
	        }
	            // check if this range label is already in the buckets
	        if (!buckets.hasOwnProperty(key))
	            buckets[key] = [];

	        buckets[key].push(qtyArr[i].dbId);
	    };

	    if (callback)
	        callback(buckets);
	}

	module.exports = {
	  startReportDataLoader,
	  groupDataByType,
	  groupDataByProperty,
	  getQtyDataByProperty,
	  groupQtyDataByRange,
	  _modelLeafNodes
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	// BarChart using NVD3.js


	function loadBarChart(lmvData) {

	    nv.addGraph(function() {
	        var barChart = nv.models.multiBarHorizontalChart()
	            .x(function(d) { return d.label; })
	            .y(function(d) { return d.value; })
	            .showValues(true)
	            .showControls(false)
	            .tooltips(false)
	            .valueFormat(d3.format('f'))
	            .margin({ top: 0, right: 50, bottom: 0, left: 150})
	            .transitionDuration(400);


	        lmvData.content.sort(function(a,b) {
	            if (_sortOrder == "value-asc")
	                return a.value - b.value;
	            else if (_sortOrder == "value-desc")
	                return b.value - a.value;
	            else if (_sortOrder == "label-asc")
	                return a.label < b.label ? -1 : 1;
	            else if (_sortOrder == "label-desc")
	                return b.label < a.label ? -1 : 1;
	        } );
	        var barCharData =
	            [
	                {
	                    key: "Quantity",
	                    values: lmvData.content
	                }
	            ];

	        barChart.height((lmvData.content.length + 2) * 15); // give each line 15px + add a header and footer

	        var svg = d3.select("#barChart").append("svg")
	           .attr("height", "900");

	        svg.datum(barCharData)
	            .call(barChart);
	        barChart.yAxis.axisLabel("Quantity").tickFormat(d3.format("d"));
	        d3.selectAll('svg .nv-bar').on('click', handleBarClick);

	        return barChart;
	    });
	}

	function handleBarClick(evt) {

	    if (d3.select(this).classed("clicked") === true) {
	        _viewerMain.showAll();
	        _viewerSecondary.clearSelection();
	        d3.select(this).classed({'clicked': false});
	    } else {
	        d3.selectAll('.nv-bar').classed({'clicked': false});
	        d3.select(this).classed({'clicked': true});
	        _viewerMain.isolate(evt.lmvIds);
	        _viewerSecondary.select(evt.lmvIds);
	    }
	}

	module.exports = {
	  loadBarChart
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	// LoadModel.js
	//
	// This file handles changing Models and Views (3D/2D).  All the models come from my bucket and are authorized by
	// a AuthToken Service running in the cloud.  If you want to extend this, you'll have to clone the AuthTokenServer
	// project and setup your own version with the appropriate ConsumerKey and SecretKey from your app.
	//
	// Jim Awe
	// Autodesk, Inc.


	    // some global vars  (TBD: consider consolidating into an object)
	window._viewerMain = null;             // the viewer
	window._viewerSecondary = null;        // the viewer
	window._loadedDocument = null;

	let _views2D = null;
	let _views3D = null;

	window._blockEventMain = false;
	var _blockEventSecondary = false;

	// dependencies
	const pieChartReport = __webpack_require__(6);
	const reportData = __webpack_require__(7);
	const authToken = __webpack_require__(2);
	const themes = __webpack_require__(10);
	const cameraPin = __webpack_require__(11);

	    // setup for PRODUCTION
	var _viewerEnv = "AutodeskProduction";
	var _myAuthToken = new authToken.MyAuthToken("PROD");

	var _lmvModelOptions = [

	    { label : "Urban House (Revit)",        urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvVXJiYW4lMjBIb3VzZSUyMC0lMjBuZXcucnZ0"},
	    { label : "Church (Revit)",             urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvQ2h1cmNoUmVub3ZhdGlvbjIucnZ0"},
	    { label : "SaRang - Struct (Revit)",    urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvU2FSYW5nLVN0cnVjdHVyZS0yMDE1LnJ2dA=="},
	    { label : "rme-basic-sample (Revit)",   urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2Qvcm1lX2Jhc2ljX3NhbXBsZV9wcm9qZWN0LnJ2dA=="},
	    { label : "Audubon Structure (Revit)",  urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvQXVkb2JvbiUyMC0lMjBTdHJ1Y3R1cmUucnZ0"},

	    { label : "Factory (Navisworks)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9Db21wbGV0ZWQlMjBQbGFudCUyMExheW91dCUyMGNvbnN0cnVjdGlvbi5ud2Q="},
	    { label : "Gatehouse (Navisworks)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9nYXRlaG91c2UyLm53ZA=="},
	    { label : "Trapelo (Navisworks)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvVFJBUEVMTy5ud2Q="},
	    { label : "Millenium (Navisworks)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvTWlsbGVuaXVtJTIwU3VwZXJtYXJrZXQubndk"},

	    { label : "Lego Man (Fusion)",          urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9sZWdvX2d1eTIwMTQwMTMxMDkxOTU4LmYzZA=="},
	    { label : "Utility Knife (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9VdGlsaXR5X0tuaWZlMjAxNDAxMjkxNDAwNDEuZjNk"},
	    { label : "Fender Guitar (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9GZW5kZXJfU3RyYXRfTlguc3RwLmM5ZTZhODg0LWU0NWItNGQ3ZC1iNjcyLTY2NjM1OTVhYTRkOTIwMTQwMjIwMTA0OTA3LmYzZA=="},
	    { label : "Go Kart (Fusion)",           urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvZ29rYXJ0LVY0LmYzZA=="},
	    { label : "Rally Fighter (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvUmFsbHlGaWdodGVyMi5mM2Q="},

	    { label : "Whiskey Drinks (DWG)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2Qvd2hpc2tleS1kcmlua3MuZHdn"},
	    { label : "Slip Form Paver (DWG)",      urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvU2xpcCUyMEZvcm0lMjBQYXZlci5kd2c="},
	    { label : "Engine (DWG)",               urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvRW5naW5lJTIwTUtJSS5kd2c="},

	    { label : "AC11 Institute (IFC)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWRza19xdWlja3N0YXJ0L0FDMTEtSW5zdGl0dXRlLVZhci0yLUlGQy5pZmM="},
	    { label : "Hunter Residence (SKP)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvTUFUVEhFV19IVU5URS1SRVMtMDRfRVBELnNrcA=="},
	];

	function blankOutReportPane() {
	    $("#pieChart").empty();
	    $("#barChart").empty();
	    $("#bar-chart").empty();
	    $("#sheetThumbs").empty();

	}

	    // populate the popup menu with the avaialable models to load (from the array above)
	function loadModelMenuOptions() {
	        // add the new options for models
	    var sel = $("#pu_modelToLoad");
	    $.each(_lmvModelOptions, function(i, item) {
	        sel.append($("<option>", {
	            value: i,
	            text : item.label
	        }));
	    });
	}

	    // user selected a new model to load
	 $("#pu_modelToLoad").change(function(evt) {
	     evt.preventDefault();

	     var index = parseInt($("#pu_modelToLoad option:selected").val(), 10);
	     console.log("Changing model to: " + _lmvModelOptions[index].label);
	     loadDocument(_lmvModelOptions[index].urn);

	     cameraPin.uninitializePinPanel();
	     themes.unitializeThemePanel();
	     blankOutReportPane();
	});

	    // populate the popup menu with the avaialable views to load (from the array above)
	function loadViewMenuOptions() {
	    var sel = $("#pu_viewToLoad");

	    sel.find("option").remove().end();  // remove all existing options

	            // add the 3D options
	    $.each(_views3D, function(i, item) {
	        sel.append($("<option>", {
	            value: i,
	            text : item.name
	        }));
	    });

	    sel.append($("<option disabled>─────────────────</option>"));    // add a separator

	        // add the 2D options
	    $.each(_views2D, function(i, item) {
	        sel.append($("<option>", {
	            value: i + 1000,    // make 2D views have a value greater than 1000 so we can tell from 3D
	            text : item.name
	        }));
	    });
	}

	    // user selected a new view to load
	 $("#pu_viewToLoad").change(function(evt) {
	    evt.preventDefault();

	    var index = parseInt($("#pu_viewToLoad option:selected").val(), 10);

	    if (index >= 1000) {    // 2D views we gave a higher index to in the Popup menu
	        index -= 1000;
	        console.log("Changing to 2D view: " + _views2D[index].name);
	        switchSheet();
	        loadView(window._viewerSecondary, _views2D[index]);
	    }
	    else {
	        console.log("Changing to 3D view: " + _views3D[index].name);
	        switchSheet();
	        loadView(window._viewerSecondary, _views3D[index]);
	    }
	});

	function switchSheet() {

	    if (window._viewerSecondary !== null) {
	        window._viewerSecondary.tearDown();     // delete everything associated with the current loaded asset
	    }

	    window._viewerSecondary.setUp();    // set it up again for a new asset to be loaded
	}

	// STEPS:
	//  0)  Initialize the Viewing Runtime
	//  1)  Load a Document
	//  2)  Get the available views (both 2D and 3D)
	//  3)  Load a specific view
	//      a)  initialize viewer for 2D or 3D
	//      b)  load a "viewable" into the appropriate version of the viewer
	//  4)  Attach a "listener" so we can keep track of events like Selection


	    // initialize the viewer into the HTML placeholder
	function initializeViewerMain() {

	        // if we already have something loaded, uninitialize and re-init (can't just load a new file!:  ?? is that a bug?)
	    if (window._viewerMain !== null) {
	        window._viewerMain.uninitialize();
	        window._viewerMain = null;
	    }

	    var viewerElement = document.getElementById("viewerMain");  // placeholder in HTML to stick the viewer
	    window._viewerMain = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});

	    var retCode = window._viewerMain.initialize();
	    if (retCode !== 0) {
	        alert("ERROR: Couldn't initialize main viewer!");
	        console.log("ERROR Code: " + retCode);      // TBD: do real error handling here
	    }

	        // when the geometry is loaded, automatically run the first report

	   pieChartReport.disableReportMenu();
	    window._viewerMain.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (event) {

	        pieChartReport.enableReportMenu();
	        //runReport(-1);   // run the currently selected report (the first one if this is the first model loaded, current one if loading a subsequent model)

	        $("#tab_button_1").click();
	        reportData.startReportDataLoader(pieChartReport.runReport);
	    });

	        // when selecting in the Primary viewer, select the matching items in the Secondary viewer
	    window._viewerMain.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function (event) {
	        if (_blockEventSecondary)
	            return;

	            // if a single item selected in 3D, select that same item in 2D.
	        var curSelSetMain = window._viewerMain.getSelection();
	        //if (curSelSetMain.length === 1) {
	            window._blockEventMain = true;
	            window._viewerSecondary.select(curSelSetMain)//select objects in secondary view
	            window._blockEventMain = false;
	        //}
	    });
	}

	function initializeViewerSecondary() {

	        // if we already have something loaded, uninitialize and re-init (can't just load a new file!:  ?? is that a bug?)
	    if (window._viewerSecondary !== null) {
	        window._viewerSecondary.uninitialize();
	        window._viewerSecondary = null;
	    }

	    var viewerElement = document.getElementById("viewerSecondary");  // placeholder in HTML to stick the viewer
	    window._viewerSecondary = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});

	    var retCode = window._viewerSecondary.initialize();
	    if (retCode !== 0) {
	        alert("ERROR: Couldn't initialize secondary viewer!");
	        console.log("ERROR Code: " + retCode);      // TBD: do real error handling here
	    }

	        // when selecting objects in the Secondary viewer, also select the matching itmes in the Primary viewer
	    window._viewerSecondary.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function (event) {
	        if (window._blockEventMain)
	            return;

	            // if a single item, select and isolate same thing in 3D.
	        var curSelSetSecondary = window._viewerSecondary.getSelection();
	        if (curSelSetSecondary.length === 1) {
	            _blockEventSecondary = true;

	            //window._viewerMain.clearSelection();   // reset to nothing selected (otherwise we end up in cases where it just adds to the existing selection)

	                // normal behavior is to isolate and zoom into the selected object, but we can only do that in 3D.
	            if (window._viewerMain.model.is2d() == false) {
	                window._viewerMain.select(curSelSetSecondary);
	                window._viewerMain.isolate(curSelSetSecondary);
	                window._viewerMain.fitToView(curSelSetSecondary);
	            }
	            else {
	                window._viewerMain.select(curSelSetSecondary);   // Call work-around to select objects in secondary view (see file TestFuncs.js)
	                window._viewerMain.fitToView(curSelSetSecondary);
	            }

	            _blockEventSecondary = false;
	        }
	    });

	        // when we change sheets, we want to re-select things after this sheet is loaded
	    window._viewerSecondary.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (event) {
	        window._blockEventMain = true; // prevent normal event of select/isolate/fit in main viewer
	        if (window._viewerMain.model)
	            window._viewerSecondary.select(window._viewerMain.getSelection());
	        window._blockEventMain = false;
	    });
	}


	    // load a specific document into the intialized viewer
	function loadDocument(urnStr) {

	    window._loadedDocument = null; // reset to null if reloading

	    if (!urnStr || (0 === urnStr.length)) {
	        alert("You must specify a URN!");
	        return;
	    }
	    var fullUrnStr = "urn:" + urnStr;

	    Autodesk.Viewing.Document.load(fullUrnStr, function(document) {
	        window._loadedDocument = document; // keep this in a global var so we can reference it in other spots

	            // get all the 3D and 2D views (but keep in separate arrays so we can differentiate in the UX)
	        _views3D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'3d'}, true);
	        _views2D = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry', 'role':'2d'}, true);

	        loadViewMenuOptions();                   // populate UX with views we just retrieved
	        initializeViewerMain();
	        initializeViewerSecondary();

	            // load up first 3D view by default into the primary viewer
	        if (_views3D.length > 0) {
	            loadView(window._viewerMain, _views3D[0]);
	        }
	        else {      // there weren't any 3D views!
	            if (_views2D.length > 0) {
	                loadView(window._viewerMain, _views2D[0]);
	                $('#pu_viewToLoad').val('1000'); // selects first option in 2D list
	            }
	            else {
	                alert("ERROR: No 3D or 2D views found in this drawing!");
	            }
	        }
	            // now load the Secondary viewer with the first 2D view by default
	        if (_views2D.length > 0) {
	            loadView(window._viewerSecondary, _views2D[0]);
	            $('#pu_viewToLoad').val('1000'); // selects first option in 2D list
	        }
	        else {
	            console.log("WARNING: No 2D views found for secondary view, using additional 3D view");
	            if (_views3D.length > 0)
	                loadView(window._viewerSecondary, _views3D[0]);
	        }


	    }, function(errorCode, errorMsg) {
	        alert('Load Error: ' + errorCode + " " + errorMsg);
	    });
	}

	    // for now, just simple diagnostic functions to make sure we know what is happing
	function loadViewSuccessFunc()
	{
	    console.log("Loaded viewer successfully with given asset...");
	}

	function loadViewErrorFunc()
	{
	    console.log("ERROR: could not load asset into viewer...");
	}

	    // load a particular viewable into the viewer (either Primary or Secondary depending on what's passed in)
	function loadView(viewer, viewObj) {
	    var path = window._loadedDocument.getViewablePath(viewObj);
	    console.log("Loading view URN: " + path);

	    viewer.load(path, window._loadedDocument.getPropertyDbPath(), loadViewSuccessFunc, loadViewErrorFunc);
	}

	    // wrap this in a simple function so we can pass it into the Initializer options object
	function getAccessToken() {
	    return _myAuthToken.value();
	}

	function dbgPrintLmvVersion()
	{
	        // builds greater than 0.1.98 will have a variable listing the version number
	    if (typeof LMV_VIEWER_VERSION !== "undefined") {
	        console.log("LMV_VIEWER_VERSION: " + LMV_VIEWER_VERSION);
	    }
	    else {
	        console.log("LMV_VIEWER_VERSION: 0.1.98 or earlier");
	    }
	}

	    // called when HTML page is finished loading, trigger loading of default model into viewer
	function loadInitialModel() {

	    console.log("onload: loadInitialModel in LoadModel.js");

	    dbgPrintLmvVersion();

	    loadModelMenuOptions();                  // populate the list of available models for the user

	    var options = {
	      env: _viewerEnv, // AutodeskProduction, AutodeskStaging, or AutodeskDevelopment (set in global var in this project)
	      getAccessToken: getAccessToken,
	      refreshToken: getAccessToken
	    };
	    Autodesk.Viewing.Initializer(options, function() {
	        loadDocument(_lmvModelOptions[0].urn);   // load first entry by default
	    });
	}

	window.loadInitialModel = loadInitialModel;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	// Color Scheming
	// Override the model color(material) according to a specifc theme(property/type).
	// Overriding are mainly done in overrideColorOnObjects and overrideColorOnFragment.
	// This script also creates the theme tables in HTML

	const reportData = __webpack_require__(7);

	let _themeOptions = [
	    { label : "*NONE*",           type: "Original"   },
	    { label : "Type",             type: "ModelType"  },
	    { label : "Level",            type: "Property "  },
	    { label : "Base Constraint",  type: "Property"   },
	    { label : "System Type",      type: "Property"   },
	    { label : "Material",         type: "Property"   }
	];

	let _colorIndex = -1;
	let _colorDict = [
	    "#FFA500", "#FA8072", "#32CD32", "#1E90FF", "#EE82EE", "#40E0D0", "#F5DEB3", "#FFC0CB", "#FFD700",
	    "#00FFFF", "#FF0000", "#CD853F", "#008080", "#DA70D6", "#000080", "#800000", "#FF00FF", "#00FF00",
	    "#FFFF00", "#800080", "#0000FF", "#FF7F50", "#A52A2A", "#00FFFF", "#008000", "#B22222", "#4B0082",
	    "#E6E6FA", "#FAF0E6"
	];

	let _originalFragMaterial;
	let _applicabledbIds;

	let _ambientLight;
	let _directionalLight;

	function unitializeThemePanel() {
	    if (_originalFragMaterial) {
	        $("#pu_colorTheme").prop('selectedIndex', 0);
	        restoreToOriginal();
	    }

	    _originalFragMaterial = null;
	    _applicabledbIds = null;
	    _ambientLight = null;
	    _directionalLight = null;
	}

	function getColor() {

	    if (_colorIndex < _colorDict.length - 1) {
	        _colorIndex += 1;
	        return _colorDict[_colorIndex];
	    }

	    // generate random color
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	function loadColorThemeMenuOptions() {

	    var themeSel = $("#pu_colorTheme");
	    $.each(_themeOptions, function(i, data) {
	        themeSel.append($("<option>", {
	            value: i,
	            text: data.label
	        }));
	    });
	}

	function applyTheme(index) {
	    if (index === -1)
	        index = parseInt($("#pu_colorTheme option:selected").val(), 10);

	    // reset color index and applicable dbIds
	    _colorIndex = -1;
	    _applicabledbIds = [];

	    // remove the lightening from previous scheme
	    _viewerMain.impl.scene.remove(_ambientLight);
	    _viewerMain.impl.scene.remove(_directionalLight);

	    switch (_themeOptions[index].type) {
	        case "Original":
	            restoreToOriginal();
	            break;
	        case "ModelType":
	            var modelTypes = reportData.groupDataByType();
	            wrapColorData(modelTypes);
	            break;
	        case "Custom":
	            overrideColorOnObjects(_savedThemes[_themeOptions[index].label]);
	            break;
	        default:
	            reportData.groupDataByProperty(_themeOptions[index].label, wrapColorData);
	    };
	}

	function restoreToOriginal() {

	    $("#themecanvas").empty();

	    if (_originalFragMaterial) {

	        var frglst = _viewerMain.impl.modelQueue().getFragmentList();

	        // get the mesh object of each fragment and restore their material to orignal
	        for (var fragId in _originalFragMaterial) {
	            var vizmesh = frglst.getVizmesh(fragId);
	            vizmesh.material = _originalFragMaterial[fragId];
	            frglst.setMesh(fragId, vizmesh);
	        }

	        // restore ambient shadows on model
	        _viewerMain.setQualityLevel(true, _viewerMain.prefs.antialiasing);
	    }
	}

	function wrapColorData(colorBuckets, misCount) {
	    var colorMap = [];

	    // for objects that doesn't have such property and can't be categorized
	    if (typeof(misCount) !== "undefined" && misCount !== null)
	        colorBuckets["Not applicable"] = misCount;

	    for (var colorKey in colorBuckets) {
	        var hexColorStr = getColor();
	        var objects = colorBuckets[colorKey];
	        var colorObj = {"color":hexColorStr, "label":colorKey, "dbIds":objects};
	        colorMap.push(colorObj);
	    }
	    overrideColorOnObjects(colorMap);
	}

	function overrideColorOnObjects(colorMap) {

	    if (typeof (colorMap) === "undefined" || colorMap.length === 0) {
	        restoreToOriginal();
	        $("#themecanvas").html("No data can be retrieved for this property");
	        return;
	    }

	    let instanceTree = window._viewerMain.model.getData().instanceTree;

	    if (!(_originalFragMaterial)) {
	        _originalFragMaterial = {};
	        for (var i = reportData._modelLeafNodes.length - 1; i >= 0; i--) {
	            instanceTree.enumNodeFragments(reportData._modelLeafNodes[i], function(fragId) {
	                var mat = _viewerMain.impl.getRenderProxy(_viewerMain.model, fragId).material;
	                _originalFragMaterial[fragId] = mat;
	            });
	        };
	    }

	    for (var index = 0; index < colorMap.length; index++) {
	        var objects = colorMap[index]["dbIds"];
	        var hexColorStr = colorMap[index]["color"];
	        for (var i = 0; i < objects.length; i++) {
	            // override the color on each fragment
	            instanceTree.enumNodeFragments(objects[i], function(fragId) {
	                overrideColorOnFragment(fragId, hexColorStr);
	            });
	        };
	    };
	    loadThemeChart(colorMap);

	    // _viewerMain.getObjectTree(function(objTree) {
	    //
	    //     // record original materials for the first time
	    //     if (!(_originalFragMaterial)) {
	    //         _originalFragMaterial = {};
	    //         for (var i = reportData._modelLeafNodes.length - 1; i >= 0; i--) {
	    //             objTree.enumNodeFragments(reportData._modelLeafNodes[i], function(fragId) {
	    //                 var mat = _viewerMain.impl.getRenderProxy(_viewerMain.model, fragId).material;
	    //                 _originalFragMaterial[fragId] = mat;
	    //             });
	    //         };
	    //     }
	    //
	    //     for (var index = 0; index < colorMap.length; index++) {
	    //         var objects = colorMap[index]["dbIds"];
	    //         var hexColorStr = colorMap[index]["color"];
	    //         for (var i = 0; i < objects.length; i++) {
	    //             // override the color on each fragment
	    //             objTree.enumNodeFragments(objects[i], function(fragId) {
	    //                 overrideColorOnFragment(fragId, hexColorStr);
	    //             });
	    //         };
	    //     };
	    //     loadThemeChart(colorMap);
	    // });

	    // record the applicable dbIds of current themes, used for click event and isolation
	    var isolateIds = [];
	    for (var i = 0; i < colorMap.length; i++) {
	        if (colorMap[i].label === "Not applicable")
	            continue;
	        isolateIds = isolateIds.concat(colorMap[i].dbIds);
	    };
	    _applicabledbIds = isolateIds;

	    if (!(document.getElementById("nonpropchckbx").checked)) {
	        _viewerMain.isolate(isolateIds);
	    }

	    // we need to add light for MeshPhongMaterial, otherwise it will look all black
	    var scene = _viewerMain.impl.scene;

	    // add subtle ambient lighting
	    _ambientLight = new THREE.AmbientLight(0x888888);
	    scene.add(_ambientLight);

	    // directional lighting
	    _directionalLight = new THREE.DirectionalLight(0xffffff);
	    _directionalLight.position.set(1, 1, 3).normalize();
	    scene.add(_directionalLight);

	    // hide ambient shadows for better visual result
	    _viewerMain.setQualityLevel(false, _viewerMain.prefs.antialiasing);
	}

	function overrideColorOnFragment(fragId, hexColorStr) {
	    var frglst = _viewerMain.impl.modelQueue().getFragmentList();

	    // Rather than chaning the color of the mesh material, we change the material
	    // directly to gain better visual result
	    var vizmesh = frglst.getVizmesh(fragId);
	    // vizmesh.material = new THREE.MeshBasicMaterial({color: hexColorStr});
	    // using mesh phong preserves the shadows and other functionalities
	    vizmesh.material = new THREE.MeshPhongMaterial({
	        specular: "#000000",
	        color: hexColorStr,
	        emissive: "#000000",
	        reflectivity: 0,
	        shininess: 100,
	    });
	    frglst.setMesh(fragId, vizmesh);
	}


	$(document).ready(function() {

	    loadColorThemeMenuOptions();

	    $("#pu_colorTheme").change(function(evt) {
	        evt.preventDefault();
	        var index = parseInt($("#pu_colorTheme option:selected").val(), 10);
	        applyTheme(index);
	    });
	    // $("#thmbtn").click(addCustomizedTheme);
	    $("#nonpropchckbx").click(toggleNonApplicable);

	});

	function toggleNonApplicable() {
	    if (this.checked) {
	        _viewerMain.showAll();
	    } else {
	        _viewerMain.isolate(_applicabledbIds);
	    }
	}

	function loadThemeChart(colorMap) {

	    $("#themecanvas").empty();
	    $("#themecanvas").css("margin-top", "20px");

	    var barChartHeight = 80 * colorMap.length + 20;
	    var svg = d3.select("#themecanvas").append("svg")
	       .attr("height", barChartHeight);
	    var contents = svg.append("g");
	    var bars = contents.selectAll("rect").data(colorMap)
	        .enter().append("rect");

	    bars.attr("x", "50%")
	        .attr("y", function(d, i) { return i*50; })
	        .attr("width", 200)
	        .attr("height", 40)
	        .attr("fill", function(d, i) { return d.color})
	        .attr("opacity", 1)
	        .style("cursor", "pointer");

	    var labels = contents.selectAll("text").data(colorMap)
	        .enter().append("text");

	    labels.attr("x", "20%")
	        .attr("y", function(d, i) { return 25 + i*50; })
	        .text(function(d) { return d.label; })
	        .style("text-align", "center")
	        .style("font-family", "Open Sans")
	        .style("font-style", "italic")
	        .style("font-size", 13);

	    d3.selectAll("svg rect")
	    .on("click", colorBarClicked)
	    .on("mouseover", function() {
	        this.style.opacity = 0.4;
	    })
	    .on("mouseout", function() {
	        this.style.opacity = 1;
	    });
	}

	let _prev_isolated = [];
	let _selected_label = null;

	function colorBarClicked(obj) {

	    if (d3.event.shiftKey) {
	        var toBeIsolated = _prev_isolated.concat(obj.dbIds);
	        _viewerMain.isolate(toBeIsolated);
	        _prev_isolated = toBeIsolated;
	    } else {
	        if (_selected_label === obj.label) {
	            _viewerMain.isolate(_applicabledbIds);
	            _selected_label = null;
	            _prev_isolated = [];
	        } else {
	            _viewerMain.isolate(obj.dbIds);
	            _selected_label = obj.label;
	            _prev_isolated = obj.dbIds;
	        }
	    }
	}

	module.exports = {
	  unitializeThemePanel
	}



	//
	//    Uncomment for Adding Customized Themes
	//    TBD, now it requires manual selection on the model/dbId to create a theme,
	//    we could add some query features to complete this procedure more automatically.
	//

	/*

	var _customizedTheme = [];
	var _savedThemes = {};
	var _currentRow = -1;

	function addCustomizedTheme() {

	    _viewerMain.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, updateThemeSelection);

	    _colorIndex = -1;
	    $("#pu_colorTheme").prop('selectedIndex', 0);
	    restoreToOriginal();

	    $('#pu_colorTheme').attr("disabled", true);
	    $('#nonpropchckbx').attr("disabled", true);

	    var staticLabel = document.createElement("label");
	    staticLabel.innerHTML = "New Theme";
	    staticLabel.className = "editable";
	    var editableLabel = document.createElement("input");
	    editableLabel.type = "text";
	    editableLabel.style.display = "none";
	    editableLabel.style.textAlign = "center";
	    editableLabel.style.fontSize = "17px";
	    editableLabel.className = "editable";
	    staticLabel.onclick = function() {
	        $(this).toggle();
	        $(this).next().toggle().attr("placeholder", this.innerHTML).focus();
	    };
	    editableLabel.onblur = function() {
	        $(this).toggle();
	        $(this).prev().toggle().html(this.value.trim());
	    };

	    var themeTitle = $("#themetitle");
	    themeTitle.attr("style", "text-align:center;font-size:25px;margin-top:20px;");
	    themeTitle.append(staticLabel);
	    themeTitle.append(editableLabel);

	    var themecanvas = $("#themecanvas");
	    var themeTable = document.createElement("div");
	    themeTable.id = "themetable";
	    themeTable.className = "tablelist";
	    themecanvas.append(themeTable);

	    var btnRow = document.createElement("div");
	    btnRow.style.textAlign = "center";
	    btnRow.style.margin = "10px";
	    btnRow.style.width = "100%";

	    var addMoreBtn = document.createElement("button");
	    addMoreBtn.innerHTML = "Add";
	    addMoreBtn.onclick = function() {
	        var themeObj = {};
	        themeObj.color = getColor();
	        themeObj.label = "undefined";
	        themeObj.divid = "themerowdivid" + _customizedTheme.length;
	        themeObj.dbIds = [];

	        _customizedTheme.push(themeObj);
	        _currentRow = _customizedTheme.length - 1;
	        _viewerMain.clearSelection(true);
	        reloadTable("themetable");
	    };

	    var cancelBtn = document.createElement("button");
	    cancelBtn.innerHTML = "Cancel";
	    cancelBtn.onclick = function() {
	        $("#themetitle").empty();
	        $("#themecanvas").empty();
	        _customizedTheme = [];
	        _currentRow = -1;
	        _viewerMain.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, updateThemeSelection);

	        $('#pu_colorTheme').attr("disabled", false);
	        $('#nonpropchckbx').attr("disabled", false);
	        _viewerMain.clearSelection(true);

	    };

	    var doneBtn = document.createElement("button");
	    doneBtn.innerHTML = "Done";
	    doneBtn.onclick = function() {
	        var themeId = $("#themetitle :first-child").html();

	        _savedThemes[themeId] = _customizedTheme;

	        $("#themetitle").empty();
	        $("#themecanvas").empty();
	        _customizedTheme = [];
	        _currentRow = -1;
	        $("#pu_colorTheme").append($("<option>", {
	            value: _themeOptions.length,
	            text: themeId
	        }));
	        _themeOptions.push({"label":themeId, "type":"Custom"});

	        $('#pu_colorTheme').attr("disabled", false);
	        $('#nonpropchckbx').attr("disabled", false);
	        _viewerMain.clearSelection(true);

	    };

	    btnRow.appendChild(addMoreBtn);
	    btnRow.appendChild(cancelBtn);
	    btnRow.appendChild(doneBtn);
	    $("#themecanvas").append(btnRow);

	    reloadTable(themeTable.id);
	    addMoreBtn.onclick();
	}

	function updateThemeSelection() {
	    if (_currentRow === -1)
	        return;
	    // set the selected dbIds for current row
	    _customizedTheme[_currentRow].dbIds = _viewerMain.getSelection();
	}

	function reloadTable(tableid) {

	    var themeTable = $("#"+tableid).empty();

	    for (var i = 0; i < _customizedTheme.length; i++) {
	        var theme = _customizedTheme[i];

	        var row = document.createElement("div");
	        row.id = theme.divid;
	        row.className = "tablecell";

	        var label = document.createElement("div");
	        label.className = "celllabel";
	        label.innerHTML = theme.label;

	        var colorBtn = document.createElement("div");
	        colorBtn.className = "cellbtn";
	        colorBtn.style.display = "inline-block";
	        colorBtn.style.backgroundColor = theme.color;
	        colorBtn.style.width = "10%";
	        colorBtn.style.height = "66%";
	        colorBtn.style.textAlign = "right";

	        label.ondblclick = function() {
	            var editableLabel = document.createElement("input");
	            editableLabel.type = "text";
	            editableLabel.className = "editable";
	            editableLabel.style.textAlign = "center";
	            editableLabel.style.fontSize = "16px";
	            editableLabel.placeholder = this.textContent;
	            editableLabel.onblur = function() {
	                var parentLabel = this.parentNode;
	                parentLabel.removeChild(this);
	                parentLabel.textContent = this.value;

	                var rowid = parentLabel.parentNode.id;
	                                console.log("ID is ", rowid);

	                var index = rowid.substring(rowid.length-1, rowid.length);
	                var obj = _customizedTheme[index];
	                obj.label = this.value;
	            };

	            this.innerHTML = null;
	            this.appendChild(editableLabel);
	            editableLabel.focus();
	        };

	        row.onclick = function() {
	            var index = this.id.substring(this.id.length-1, this.id.length);
	            _currentRow = index;
	            _viewerMain.select(_customizedTheme[index].dbIds);
	        };

	        row.appendChild(colorBtn);
	        row.appendChild(label);

	        themeTable.append(row);
	    }
	}

	*/


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	//
	//  Camera Pin
	//  Location bookmarks for presentaion mode. Data for the pins are wrapped in a class
	//  contained in PinData.js, functions for creating the UI on the page are in PinUI.js
	//  This script handles init/uninit and click behavior, as well as the view transition.
	//

	const pinData = __webpack_require__(12);

	var _viewerPin;
	var _currentPin;
	var _shouldAddNewPin = false;

	var _checkTransition = null;
	var _checkCount = 0;

	    // timer for on tour mode
	function startTour(index) {
	    if (index < _viewerPin.pinobjs.length && index >= 0) {
	        $("#"+_viewerPin.pinobjs[index].pinid).click();
	        setTimeout(startTour, 1500, index+1);
	    } else {
	        _viewerMain.escapeScreenMode();
	    }
	}

	    // initialize the data and view panel for presentation
	function initializePinPanel() {

	        // initialize the pin data
	    _viewerPin = new pinData.ViewerPin($("#pu_modelToLoad :selected").text());

	        // need to update local storage of pins before tab close
	    window.addEventListener("beforeunload", function() {
	        if (_viewerPin)
	            _viewerPin.updateLocalStorage();
	    });

	        // add event listeners on the viewer
	    _viewerMain.container.addEventListener("click", handleViewerClick);
	    _viewerMain.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, updatePinsOnView);
	    _viewerMain.addEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, updatePinsOnView);

	        // initialize the pin ui
	    initPinOverlay();
	    initPinTablelist();
	}

	    // uninitialize the data and view panel for presentation
	function uninitializePinPanel() {

	        // update local storage before swtiching to another tab
	    if (_viewerPin) {
	        _viewerPin.updateLocalStorage();
	        $("#pintablelist").empty();
	        _viewerMain.container.removeChild($("#pushpinOverlay")[0]);
	    }

	        // remove event listeners on the viewer
	    _viewerMain.container.removeEventListener("click", handleViewerClick);
	    _viewerMain.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, updatePinsOnView);
	    _viewerMain.removeEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, updatePinsOnView);

	    _viewerPin = null;
	    _shouldAddNewPin = false;
	}

	    // called before creating a new pin, mark the overlay on the viewer canvas
	    // responsive to get the location of the new pin when user clicks
	function prepareForAddNewPin() {

	        // change the pointer events of the overlay from none to visible
	    d3.select("#pushpinOverlay")
	    .style("pointer-events", "visible")
	    .style("cursor", "pointer");

	        // mark ready to receive click event on the viewer to create new pin
	    _shouldAddNewPin = true;
	}

	    // creating a new pin, including the data and its relative visual components
	function createNewPin(client, world, label) {

	    var divid = "pin" + getUUID();

	        // NOTE: we can pass in a filter to getState() if we only want certain values like Camera
	    /*var optionsFilter = {
	        guid: true,
	        seedURN: true,
	        overrides: true,
	        objectSet: {
	            id: true,
	            isolated: true,
	            hidden: true,
	            explodeScale: true
	        },
	        viewport: true,
	        renderOptions: true
	    };*/

	        // update the pin data
	    var curViewerState = _viewerMain.getState(/*optionsFilter*/);
	    console.log("ViewerState", curViewerState);

	    _viewerPin.addPin(divid, world, label, curViewerState);

	        // update the pin ui
	    pushPinToOverlay(divid, client);
	    pushPinToTableList(divid, label, document.getElementById("pintable"));

	        // focus on the new pin's label for editing
	    $("#row"+divid).find(".celllabel").dblclick();

	}

	    // transform array to THREE.Vector3
	function positionToVector3(position) {
	    return new THREE.Vector3(parseFloat(position[0]), parseFloat(position[1]), parseFloat(position[2]));
	}

	    // handle pin click, transit to its specific viewport and setup the headsup display
	function viewPinClicked(evt) {

	    var viewport = _viewerPin.getViewState(this.id);
	    _viewerMain.restoreState(viewport);     // NOTE: we can pass in a filter if we only want certain values like Camera position

	        //  NOTE:  In the above call, we are just relying on the ViewerState function to capture everything in a JSON object and
	        // the restore it when asked.  We could do a more controlled way and only worry about the Camera and try to do some effects
	        // on our own, but that usually isn't necessary.
	    /*var nav = _viewerMain.navigation;

	    var eye = positionToVector3(viewport.eye);
	    var up = positionToVector3(viewport.up);
	    var target = positionToVector3(viewport.target);
	    var fov = ("fieldOfView" in viewport) ? parseFloat(viewport.fieldOfView) : nav.getVerticalFov();
	    var pivot = positionToVector3(viewport.pivotPoint);

	    nav.setCameraUpVector(up);

	        // if destination's camera mode is different, switch first
	    if ("isOrthographic" in viewport) {
	        if (viewport.isOrthographic) {
	            nav.toOrthographic();
	        } else {
	            nav.toPerspective();
	        }
	    }

	        // request transition on the viewer
	    nav.setRequestTransition(true, eye, target, fov, false);
	    nav.setPivotPoint(pivot);
	    nav.setPivotSetFlag(true);

	        // stop transition check of other click events
	    if (_checkTransition !== null)
	        clearInterval(_checkTransition);

	        // check the viewer transition, display the headsup when done
	    _checkTransition = setInterval(function() {
	        var result = _viewerMain.navigation.getTransitionActive();
	        if (!(result) || _checkCount > 20) {
	            clearInterval(_checkTransition);
	            _checkTransition = null;
	            _checkCount = 0;
	            var clientPos = worldToClient(vec, _viewerMain.getCamera());
	            setHeadsUpDisplay(pinObj.label, clientPos.x, clientPos.y, true);
	        } else {
	            _checkCount += 1;
	        }
	    }, 100);*/



	        // Uncomment for headsup display, this will set the
	        // text/position/visibility of the headsup div
	    /*

	    var pinObj = _viewerPin.getPinObj(this.id);
	    var vec = positionToVector3([pinObj.x, pinObj.y, pinObj.z]);
	    var clientPos = worldToClient(vec, _viewerMain.getCamera());
	    hideHeadesUpDiv(false);
	    setHeadsUpDisplay(pinObj.label, clientPos.x, clientPos.y, true);

	    */
	}


	    // update the pin coordinates on the 2D canvas when camera moves
	function updatePinsOnView() {
	    var camera = _viewerMain.getCamera();

	    _viewerPin.each(function(pinid, label, position) {
	        var vec = positionToVector3(position);
	        var newPos2D = worldToClient(vec, _viewerMain.getCamera());
	        d3.select("#"+pinid)
	        .attr("cx", newPos2D.x)
	        .attr("cy", newPos2D.y);
	    });
	}

	    // transform position in 3d world to client coordinate
	function worldToClient(position, camera) {
	    var p = new THREE.Vector4();

	    p.x = position.x;
	    p.y = position.y;
	    p.z = position.z;
	    p.w = 1;

	    p.applyMatrix4(camera.matrixWorldInverse);
	    p.applyMatrix4(camera.projectionMatrix);

	    if (p.w > 0)
	    {
	        p.x /= p.w;
	        p.y /= p.w;
	        p.z /= p.w;
	    }

	    var point = _viewerMain.impl.viewportToClient(p.x, p.y);
	    point.x = Math.floor(point.x) + 0.5;
	    point.y = Math.floor(point.y) + 0.5;

	    return point;
	}

	    // calculate the 2D position for the new pin to be added
	    // should only work under editing mode, i.e. after prepareForAddNewPin is called
	function handleViewerClick(evt) {

	    if (_shouldAddNewPin) {

	        var viewport = _viewerMain.navigation.getScreenViewport();

	            // calculate  relative positon on the canvas, not in window
	        var clientPos =  {
	            x: evt.clientX - viewport.left,
	            y: evt.clientY - viewport.top
	        };
	            // get normalized positon on canvas
	        var normedpos = {
	            x: (evt.clientX - viewport.left) / viewport.width,
	            y: (evt.clientY - viewport.top) / viewport.height
	        };

	            // first to see if the clicked positon is hit on an object of viewer
	        var hitPoint = _viewerMain.utilities.getHitPoint(normedpos.x, normedpos.y);
	        if (hitPoint === null)
	            hitPoint = _viewerMain.navigation.getWorldPoint(normedpos.x, normedpos.y);
	        createNewPin(clientPos, hitPoint, "undefined");
	    }

	}

	    // random id generator for new pins
	function getUUID() {
	    var d = new Date().getTime();
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	};


	$(document).ready(function() {
	    $("#tourbtn").click(function () {
	        _viewerMain.setScreenMode(2);
	        setTimeout(function() {
	            startTour(0);
	        }, 150);
	    });
	    $("#viewportbtn").click(prepareForAddNewPin);
	    $("#pincheckbox").click(function() {
	        $("#pushpinOverlay").toggle();
	    });
	});

	module.exports = {
	  uninitializePinPanel
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	//
	//	Class for pin data
	//	Each pin contains an id, a label and a position in world dimensions,
	//	and is associated with a viewport object by its id.
	//

	function ViewerPin(model) {
		this.pinobjs = [];
		this.viewStates = {};
		this.dbkey = model + ' ViewerPin';

			// load previous data from local storage if there were any
		if (localStorage.hasOwnProperty(this.dbkey)) {
			var dataStr = localStorage.getItem(this.dbkey);
			var parsedObj = JSON.parse(dataStr);
			this.pinobjs = parsedObj.pinobjs;
			this.viewStates = parsedObj.viewStates;
		}
	};

		// iterate function
	ViewerPin.prototype.each = function(callback) {
		for (var i = 0; i < this.pinobjs.length; i++) {
			var p = this.pinobjs[i];
			if (callback)
				callback(p.pinid, p.label, [p.x, p.y, p.z]);
		};
	};

		// reorder the sequence of pins in array, to keep it consistent with
		// the pin order in the tablelist, it's also the order for startTour
	ViewerPin.prototype.reorder = function(pinid, newIndex) {
		var index = -1;
	    for (var i = this.pinobjs.length - 1; i >= 0; i--) {
	        if (this.pinobjs[i].pinid === pinid) {
	            index = i;
	            break;
	        }
	    };

	    if (index !== -1) {
	    	var pin = this.pinobjs.splice(index, 1)[0];
	    	this.pinobjs.splice(newIndex, 0, pin);
	    }
	};

		// get the pin object by id
	ViewerPin.prototype.getPinObj = function(pinid) {
		for (var i = 0; i < this.pinobjs.length; i++) {
			if (this.pinobjs[i].pinid === pinid)
				return this.pinobjs[i];
		};
		return null;
	};

		// get the associated viewport object by id
	ViewerPin.prototype.getViewState = function(pinid) {

		if (pinid in this.viewStates)
			return this.viewStates[pinid];
		return null;
	};

		// delete a pin, the pin objec and its viewport are both removed
	ViewerPin.prototype.removePin = function(pinid) {
	    var index = -1;
	    for (var i = this.pinobjs.length - 1; i >= 0; i--) {
	        if (this.pinobjs[i].pinid === pinid) {
	            index = i;
	            break;
	        }
	    };
	    if (index !== -1) {
	        var deletedPin = this.pinobjs.splice(index, 1);
	        delete this.viewStates[pinid];
	        return deletedPin;
	    }
	    return null;
	};

	ViewerPin.prototype.addPin = function(pinid, pos, label, viewstate) {
		var pinObj = {
	        pinid: pinid,
	        label: label,
	        x: pos.x,
	        y: pos.y,
	        z: pos.z
	    };


	    this.pinobjs.push(pinObj);
	    this.viewStates[pinid] = viewstate;
	};


	ViewerPin.prototype.changePinLabel = function(pinid, newLabel) {
		var pinObj = this.getPinObj(pinid);
		if (pinObj)
			pinObj.label = newLabel;
	}

		// update browser localStorage, for each model, the pin data is
		// stored as a whole JSON stirng
	ViewerPin.prototype.updateLocalStorage = function() {
		var parsedObj = {
			pinobjs: this.pinobjs,
			viewStates: this.viewStates
		};

		var dataStr = JSON.stringify(parsedObj);
		localStorage.setItem(this.dbkey, dataStr);
	};

	module.exports = {
		ViewerPin
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	
	$(document).ready(function() {
	    
	    $("#bn_showObjsonSheet").click(function(evt) {  
	        evt.preventDefault();

	        //var curSelSet = _viewerMain.getSelection();
	        //console.log(curSelSet);
	        
	        //_viewerSecondary.clearSelection();
	        
	        var selSet = [0];
	        
	        _blockEventMain = true;
	        _viewerSecondary.select(selSet);
	        _blockEventMain = false;
	    });
	    
	    $("#bn_showWhereViewable").click(function(evt) {  
	        evt.preventDefault();

	        var curSelSet = _viewerMain.getSelection();
	        
	        if (curSelSet.length === 0) {
	            alert("No object is selected.");
	        }
	        else if (curSelSet.length > 1) {
	            alert("Only one object can be selected.");
	        }
	        else {
	            $('#sheetThumbs').empty();
	            _viewerMain.getProperties(curSelSet[0], getViewableInProps, getViewableInErrorFunc);
	        }
	    });
	    
	        // just go through the properties for the given object and find the ones that
	        // have a "viewable_in" property.  Then retrieve the thumbnail for those
	    function getViewableInProps(data) {
	        if ((data.properties == null) || (data.properties.length == 0)) {
	            alert("There are no properties for this node.");
	            return;
	        }
	            
	        var i = 0;
	        $.each(data.properties, function(num, obj) {
	            if (obj.displayName === "viewable_in") {
	                console.log("ViewableIN: %s", obj.displayValue);
	                displayViewableInThumbs(obj.displayValue, i++);
	            }
	        });
	    }

	    function getViewableInErrorFunc(data) {
	        alert("ERROR: Could not get properties for the selected object.");
	        return null;
	    }
	    
	    function loadSelectedSheet(sheetName) {
	            // find the popup list option with this sheet name and trigger it as current
	        $("#pu_viewToLoad option").each(function(i) {
	            if (sheetName === $(this).text()) {
	                $("#pu_viewToLoad").val($(this).val());
	                $("#pu_viewToLoad").trigger("change");
	                return false;   // break each loop early
	            }
	        });
	    }
	    
	        // create an image and add to the HTML DOM
	    function displayViewableInThumbs(viewableInId, index) {
	                
	        var itemObjs = Autodesk.Viewing.Document.getSubItemsWithProperties(_loadedDocument.getRootItem(), {'viewableID':viewableInId}, true);
	        console.assert(itemObjs.length === 1);
	        var itemObj = itemObjs[0];  // convert from array
	        
	        var img = _loadedDocument.getThumbnailPath(itemObj, 300, 300);
	        
	        $("<img />")
	            .attr("src", "" + img + "")
	            .attr("id", "sheetThumb_" + index)
	            .attr("title", itemObj.name)
	            .on('click', function() {
	                loadSelectedSheet(itemObj.name);
	            })
	            .appendTo($("#sheetThumbs"));
	 
	    };

	});




/***/ },
/* 14 */
/***/ function(module, exports) {

	//
	//  This script contains the functions that creates the UI for the pins,
	//  including an overlay canvas for the pushpins and the headsup div
	//  and a pin tablelist on the side for user editing. Most of the work
	//  is done in pure javascript, as document.createElement is relatively faster
	//  than jQuery's $('<div>')
	//

	let _selected = null;
	let _prev_x = 0;
	let _prev_y = 0;
	let _bounding_left = 0;
	let _bounding_top = 0;

	    // creating headsup div
	function createHeadsUpDiv() {

	    var headsupDiv = document.createElement("div");
	    headsupDiv.id = "headsup";
	    headsupDiv.style.zIndex = "999";
	    headsupDiv.style.pointerEvents = "auto";    // need to set pointerEvents to auto to receieve mouse action

	    headsupDiv.onmousedown = function (evt) {
	        _prev_x = evt.clientX;
	        _prev_y = evt.clientY;
	        var viewport = _viewerMain.navigation.getScreenViewport();
	        _bounding_left = viewport.width - this.offsetWidth;
	        _bounding_top = viewport.height - this.offsetHeight;
	        _selected = this;

	        return false;
	    };
	    headsupDiv.onmousemove = function (evt) {
	        if (_selected === null)
	            return;

	        var next_left = _selected.offsetLeft + evt.clientX - _prev_x;
	        var next_top = _selected.offsetTop + evt.clientY - _prev_y;
	        if (next_left >= 0 && next_left < _bounding_left)
	            _selected.style.left = next_left + "px";
	        if (next_top >= 0 && next_top < _bounding_top)
	            _selected.style.top = next_top + "px";

	        _prev_x = evt.clientX;
	        _prev_y = evt.clientY;
	    };
	    headsupDiv.onmouseup = function () {
	        _selected = null;
	        return false;
	    };

	    var navbar = document.createElement("div");
	    navbar.className = "navbar";
	    var hidebtn = document.createElement("div");
	    hidebtn.className = "navbtn";
	    hidebtn.innerHTML = "X";

	    hidebtn.onclick = function() {
	        hideHeadesUpDiv(false);
	    };
	    navbar.appendChild(hidebtn);
	    headsupDiv.appendChild(navbar);

	    var content = document.createElement("div");
	    content.className = "navbody";
	    headsupDiv.appendChild(content);

	    return headsupDiv;
	}

	    // hide headsup div
	function hideHeadesUpDiv(animated) {
	    var headsupDiv = $("#headsup");
	    if (headsupDiv.is(":visible")) {
	        if (animated)
	            headsupDiv.fadeToggle(300, "linear");
	        else
	            headsupDiv.toggle();
	    }
	}

	    //  set headsup div text and position on overlay canvas
	function setHeadsUpDisplay(content, x, y, animated) {
	    var headsupDiv = $("#headsup");
	    var canvas = _viewerMain.navigation.getScreenViewport();
	    var deltaX = 60;
	    var deltaY = 60;

	    if (x + headsupDiv.width() < canvas.width - deltaX)
	        x += deltaX;
	    else
	        x = x - headsupDiv.width() - deltaX;
	    if (y + headsupDiv.height() < canvas.height - deltaY)
	        y += deltaY;
	    else
	        y = y - headsupDiv.height() - deltaY;

	    headsupDiv.css({left:x, top:y});
	    $("#headsup :first-child").next().text(content);
	    if (animated)
	        headsupDiv.fadeToggle(400, "linear");
	    else
	        headsupDiv.toggle();
	}

	    // create an overlay on top of the viewer
	function initPinOverlay() {

	    var overlayDiv = document.createElement("div");
	    overlayDiv.id = "pushpinOverlay";
	    _viewerMain.container.appendChild(overlayDiv);

	    overlayDiv.style.top = "0";
	    overlayDiv.style.left = "0";
	    overlayDiv.style.right = "0";
	    overlayDiv.style.bottom = "0";
	    overlayDiv.style.zIndex = "998";
	    overlayDiv.style.position = "absolute";
	    overlayDiv.style.pointerEvents = "none";

	        // creating a svg canvas for the pins
	    var svg = d3.select("#" + overlayDiv.id).append("svg")
	                .style("width", "100%")
	                .style("height", "100%");


	        // adding a drop shadow for the pin circles
	    var defs = svg.append("defs");
	    var filter = defs.append("filter")
	        .attr("id", "dropshadow")

	    filter.append("feGaussianBlur")
	        .attr("in", "SourceAlpha")
	        .attr("stdDeviation", 1)
	        .attr("result", "blur");

	    filter.append("feComponentTransfer")
	        .append("feFuncA")
	        .attr("type", "linear")
	        .attr("slope", "0.2");

	    filter.append("feOffset")
	        .attr("in", "blur")
	        .attr("dx", 1)
	        .attr("dy", 1)
	        .attr("result", "offsetBlur");

	    var feMerge = filter.append("feMerge");

	    feMerge.append("feMergeNode")
	        .attr("in", "offsetBlur")
	    feMerge.append("feMergeNode")
	        .attr("in", "SourceGraphic");

	        // iterate through the pins and put them on the canvas
	    _viewerPin.each(function(pinid, label, position) {
	        var world = positionToVector3(position);
	        var client = worldToClient(world, _viewerMain.getCamera());
	        pushPinToOverlay(pinid, client);
	    });

	        // create a headsup div for display
	    var headsupDiv = createHeadsUpDiv();
	    overlayDiv.appendChild(headsupDiv);
	    hideHeadesUpDiv(false);

	    return svg;
	}

	    // add a pin to the overlay
	function pushPinToOverlay(pinid, client) {

	        // draw a circle pin in d3
	    d3.select("#pushpinOverlay svg").append("circle").attr("id", pinid).attr("cx", client.x)
	        .attr("cy", client.y).attr("r", 10).style("fill", "#c66")
	        .style("cursor", "pointer")
	        .style("pointer-events", "visible")
	        .attr("filter", "url(#dropshadow)");

	        // attach user events to pin
	    $("#"+pinid)
	    .on("click", viewPinClicked)
	    .on("mouseover", function() {
	        d3.select(this).style("fill", "#66c");
	    })
	    .on("mouseout", function() {
	        d3.select(this).style("fill", "#c66");
	    });

	    d3.select("#pushpinOverlay")
	    .style("pointer-events", "none");

	        // end editing mode done,  mouse click event should be normal on the viewer
	    _shouldAddNewPin = false;
	}



	    // init pin table list
	function initPinTablelist() {
	    var pintable = $("#pintablelist");
	    pintable.empty();

	    var table = document.createElement("div");
	    table.id = "pintable";
	    table.className = "tablelist";

	    _viewerPin.each(function(pinid, label, position) {
	        pushPinToTableList(pinid, label, table);
	    });

	    pintable.append(table);
	}

	    // add a pin row to the table list
	function pushPinToTableList(pinid, pinlabel, table) {

	    var row = document.createElement("div");
	    row.id = "row" + pinid;
	    row.className = "tablecell";

	    var label = document.createElement("div");
	    label.className = "celllabel";
	    label.innerHTML = pinlabel;

	    label.ondblclick = function() {
	        var editableLabel = document.createElement("input");
	        editableLabel.type = "text";
	        editableLabel.className = "editable";
	        editableLabel.style.textAlign = "center";
	        editableLabel.style.fontSize = "16px";
	        editableLabel.placeholder = this.textContent;
	        editableLabel.onblur = function() {
	            var parentLabel = this.parentNode;
	            parentLabel.removeChild(this);
	            parentLabel.textContent = this.value;

	            var rowid = parentLabel.parentNode.id;
	            var pinid = rowid.substring(3, rowid.length);
	            var pinObj = _viewerPin.getPinObj(pinid);
	            pinObj.label = this.value;
	        };
	        editableLabel.onkeydown = function(e) {
	            if (e.keyCode == 13) {
	                this.blur();
	            }
	        };

	        this.innerHTML = null;
	        this.appendChild(editableLabel);
	        editableLabel.focus();
	    };

	    var orderbtn = document.createElement("div");
	    orderbtn.className = "cellbtn icon icon-menu";

	    var deletebtn = document.createElement("div");
	    deletebtn.className = "cellbtn icon icon-cross";

	    row.onmouseover = function() {
	        var deletebtn = this.firstChild;
	        var orderbtn = this.lastChild;
	        deletebtn.style.display = "inline-block";
	        orderbtn.style.display = "inline-block";

	        if (this.id === _currentPin)
	            return;
	        var pinid = this.id.substring(3, this.id.length);

	        $("#"+pinid).mouseover();
	    };

	    row.onmouseout = function() {
	        var deletebtn = this.firstChild;
	        var orderbtn = this.lastChild;
	        deletebtn.style.display = "none";
	        orderbtn.style.display = "none";

	        if (this.id === _currentPin)
	            return;
	        var pinid = this.id.substring(3, this.id.length);
	        $("#"+pinid).mouseout();
	    };

	    row.onclick = function() {
	        var prevLabel = _currentPin;
	        _currentPin = this.id;

	        if (typeof(prevLabel) !== "undefined")
	            $("#"+prevLabel).mouseout();
	        var pinid = this.id.substring(3, this.id.length);
	        $("#"+pinid).click();
	    };

	    deletebtn.onclick = function() {
	        var parentRow = this.parentNode;
	        var pinid = parentRow.id.substring(3, parentRow.id.length);
	        var table = parentRow.parentNode;

	        table.removeChild(parentRow);
	        d3.select("#"+pinid).remove();
	        hideHeadesUpDiv(false);

	        _viewerPin.removePin(pinid);

	    };

	    orderbtn.onmousedown = function (evt) {
	        _prev_x = evt.clientX;
	        _prev_y = evt.clientY;
	        _selected = this.parentNode;
	        _selected.style.width = _selected.offsetWidth + "px";
	        _selected.style.position = "absolute";
	        _selected.style.zIndex = 999;

	        var moverow = function (evt) {
	            if (_selected === null)
	                return;
	            var next_left = _selected.offsetLeft + evt.clientX - _prev_x;
	            var next_top = _selected.offsetTop + evt.clientY - _prev_y;
	            _selected.style.left = next_left + "px";
	            _selected.style.top = next_top + "px";
	            _prev_x = evt.clientX;
	            _prev_y = evt.clientY;
	        };
	        document.addEventListener("mousemove", moverow);

	        var setrow = function (evt) {
	            if (_selected === null)
	                return false;
	            var pinid = _selected.id.substring(3, _selected.id.length);
	            var parent = _selected.parentNode;

	            var index = Math.round(_selected.offsetTop / _selected.offsetHeight + 0.5);
	            _selected.style.position = "static";
	            _selected.style.zIndex = 0;
	            parent.removeChild(_selected);
	            parent.insertBefore(_selected, parent.children[index]);
	            _selected.style.left = "auto";
	            _selected.style.top = "auto";
	            _selected.style.width = "inherit";
	            _selected = null;

	            document.removeEventListener("mousemove", moverow);
	            document.removeEventListener("mouseup", setrow);

	            _viewerPin.reorder(pinid, index);

	            return false;
	        };
	        document.addEventListener("mouseup", setrow);

	        return false;
	    };

	    row.appendChild(deletebtn);
	    row.appendChild(label);
	    row.appendChild(orderbtn);

	    table.appendChild(row);
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	const themes = __webpack_require__(10);
	const cameraPin = __webpack_require__(11);

	var _lastPanel;

	// resize panel vars
	var isResizing = false,
	    lastDownX = 0;

	$(function() {

	    // resize panel
	    var container = $('#viewer-group'),
	        top = $('#viewerMain-panel'),
	        bottom = $('#viewerSecondary-panel'),
	        handle = $('#handle');

	    handle.on('mousedown', function (e) {
	        isResizing = true;
	        lastDownX = e.clientX;
	    });

	    $(document).on('mousemove', function (e) {
	        // we don't want to do anything if we aren't resizing.
	        if (!isResizing)
	            return;

	        var scrollTop = $(window).scrollTop();
	        top.css('height', e.clientY - container.offset().top + scrollTop);
	        bottom.css('height', container.height() - (e.clientY - container.offset().top) - scrollTop);

	    }).on('mouseup', function (e) {
	        // stop resizing
	        isResizing = false;
	    });

	  $('.tab-buttons a').on('click', function(){
	    $(this).closest('li').addClass('active').siblings().removeClass('active');
	    $('.tab-panel').removeClass('active').filter(this.hash).addClass('active');

	    if (_lastPanel === "tab_button_5")
	    	cameraPin.uninitializePinPanel();
	    // else if (_lastPanel ==="tab_button_4" && this.id !== "tab_button_4")
	    // 	unitializeThemePanel();

	    if (this.id === "tab_button_5")
	    	initializePinPanel();

	    _lastPanel = this.id;
	    return false
	  });

	  $('.report-select-input').change(function(){
	    var theText = $(this).find('option:selected').text();
	    if (theText.indexOf('Qty - ') > -1){
	        theText = theText.substring(6);
	    }
	    $(this).prev('.report-select-mask').text(theText);
	  });

	});

	// seems to be needed by Autodesk's viewer3D.js
	function isTouchDevice() { return false; }


/***/ }
/******/ ]);