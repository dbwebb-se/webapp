/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/models/bakery.js":
/*!*****************************!*\
  !*** ./js/models/bakery.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bakery": () => (/* binding */ bakery)
/* harmony export */ });
var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

var bakery = {
    apiKey: "6c5c540eda98783426450c3b8d63bdc4",
    url: "https://lager.emilfolino.se/v2/products",
    cakeTypes: ["Tårta", "Bröd", "Småkaka"],
    currentCakes: [],
    loadAll: function() {
        return m.request({
            method: "GET",
            url: bakery.url + "?api_key=" + bakery.apiKey
        }).then(function(result) {
            bakery.currentCakes = result.data;
        });
    },
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: bakery.url + "/" + id + "?api_key=" + bakery.apiKey
        }).then(function(result) {
            bakery.current = result.data;
        });
    },
    save: function() {
        bakery.current.api_key = bakery.apiKey;

        return m.request({
            method: "PUT",
            url: bakery.url,
            body: bakery.current
        }).then(function() {
            m.route.set("/");
        });
    }
};




/***/ }),

/***/ "./js/views/form.js":
/*!**************************!*\
  !*** ./js/views/form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bakedGoodsForm": () => (/* binding */ bakedGoodsForm)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_bakery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bakery */ "./js/models/bakery.js");



let bakedGoodsForm = {
    oninit: function(vnode) {
        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.load(vnode.attrs.id);
    },
    view: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.container", mithril__WEBPACK_IMPORTED_MODULE_0___default()("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.save();
                } }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Namn"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=text][placeholder=Name]", {
                oninput: function (e) {
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.name = e.target.value;
                },
                value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.name
            }),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Lagerplats"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=text][placeholder=Lagerplats]", {
                oninput: function (e) {
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.location = e.target.value;
                },
                value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.location
            }),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Lagersaldo"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=number][placeholder=Lagersaldo]", {
                oninput: function (e) {
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.stock = parseInt(e.target.value);
                },
                value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.stock
            }),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Typ"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("select.input", {
                onchange: function (e) {
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.specifiers = parseInt(e.target.value);
                }
            }, _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.cakeTypes.map(function(cakeType) {
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", { value: cakeType }, cakeType);
            })),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("input[type=submit][value=Save].button", "Spara")
        ]));
    }
};




/***/ }),

/***/ "./js/views/list.js":
/*!**************************!*\
  !*** ./js/views/list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_bakery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bakery.js */ "./js/models/bakery.js");





const cakeComponent = {
    view: function(vnode) {
        let current = vnode.attrs;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.card", [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.card-title", current.name),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.card-info", "Pris: " + current.price + " Lagersaldo: " + current.stock),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.card-info", "Lagerplats: " + current.location),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.card-info", { href: "#!/form/" + current.id }, "Ändra")
        ]);
    }
};

let list = {
    oninit: _models_bakery_js__WEBPACK_IMPORTED_MODULE_1__.bakery.loadAll,
    view: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.container" , [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("h1", "Kakor"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.cake-container", _models_bakery_js__WEBPACK_IMPORTED_MODULE_1__.bakery.currentCakes.map(function(cake) {
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()(cakeComponent, cake);
            }))
        ]);
    }
};




/***/ }),

/***/ "./node_modules/mithril/api/mount-redraw.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/api/mount-redraw.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false

	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render(root, [], redraw)
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ "./node_modules/mithril/api/router.js":
/*!********************************************!*\
  !*** ./node_modules/mithril/api/router.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var m = __webpack_require__(/*! ../render/hyperscript */ "./node_modules/mithril/render/hyperscript.js")
var Promise = __webpack_require__(/*! ../promise/promise */ "./node_modules/mithril/promise/promise.js")

var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/mithril/pathname/build.js")
var parsePathname = __webpack_require__(/*! ../pathname/parse */ "./node_modules/mithril/pathname/parse.js")
var compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ "./node_modules/mithril/pathname/compileTemplate.js")
var assign = __webpack_require__(/*! ../pathname/assign */ "./node_modules/mithril/pathname/assign.js")

var sentinel = {}

module.exports = function($window, mountRedraw) {
	var fireAsync

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var SKIP = route.SKIP = {}

	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start
		// 1 = init
		// 2 = ready
		var state = 0

		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove

		fireAsync = null

		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}

		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is consistently a relatively poorly
			// optimized cons string.
			var path = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path)

			assign(data.params, $window.history.state)

			function fail() {
				if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}

			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs = data.params, currentPath = path, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw.redraw()
							else {
								state = 2
								mountRedraw.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}

		// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync(resolveRoute)
			}
		}

		if (typeof $window.history.pushState === "function") {
			onremove = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		return mountRedraw.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove,
			view: function() {
				if (!state || sentinel === currentResolver) return
				// Wrap in a fragment to preserve existing key semantics
				var vnode = [Vnode(component, attrs.key, attrs)]
				if (currentResolver) vnode = currentResolver.render(vnode[0])
				return vnode
			},
		})
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			var options = vnode.attrs.options
			// Remove these so they don't get overwritten
			var attrs = {}, onclick, href
			assign(attrs, vnode.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering.
			attrs.selector = attrs.options = attrs.key = attrs.oninit =
			attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =
			attrs.onbeforeremove = attrs.onremove = null

			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child = m(vnode.attrs.selector || "a", attrs, vnode.children)

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child.attrs.onclick = null
			} else {
				onclick = child.attrs.onclick
				href = child.attrs.href
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}


/***/ }),

/***/ "./node_modules/mithril/hyperscript.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/hyperscript.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "./node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "./node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "./node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ }),

/***/ "./node_modules/mithril/index.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var hyperscript = __webpack_require__(/*! ./hyperscript */ "./node_modules/mithril/hyperscript.js")
var request = __webpack_require__(/*! ./request */ "./node_modules/mithril/request.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
m.route = __webpack_require__(/*! ./route */ "./node_modules/mithril/route.js")
m.render = __webpack_require__(/*! ./render */ "./node_modules/mithril/render.js")
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(/*! ./querystring/parse */ "./node_modules/mithril/querystring/parse.js")
m.buildQueryString = __webpack_require__(/*! ./querystring/build */ "./node_modules/mithril/querystring/build.js")
m.parsePathname = __webpack_require__(/*! ./pathname/parse */ "./node_modules/mithril/pathname/parse.js")
m.buildPathname = __webpack_require__(/*! ./pathname/build */ "./node_modules/mithril/pathname/build.js")
m.vnode = __webpack_require__(/*! ./render/vnode */ "./node_modules/mithril/render/vnode.js")
m.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ "./node_modules/mithril/promise/polyfill.js")

module.exports = m


/***/ }),

/***/ "./node_modules/mithril/mount-redraw.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/mount-redraw.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var render = __webpack_require__(/*! ./render */ "./node_modules/mithril/render.js")

module.exports = __webpack_require__(/*! ./api/mount-redraw */ "./node_modules/mithril/api/mount-redraw.js")(render, requestAnimationFrame, console)


/***/ }),

/***/ "./node_modules/mithril/pathname/assign.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/pathname/assign.js ***!
  \*************************************************/
/***/ ((module) => {



module.exports = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key) { target[key] = source[key] })
}


/***/ }),

/***/ "./node_modules/mithril/pathname/build.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/build.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var buildQueryString = __webpack_require__(/*! ../querystring/build */ "./node_modules/mithril/querystring/build.js")
var assign = __webpack_require__(/*! ./assign */ "./node_modules/mithril/pathname/assign.js")

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ "./node_modules/mithril/pathname/compileTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/mithril/pathname/compileTemplate.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var parsePathname = __webpack_require__(/*! ./parse */ "./node_modules/mithril/pathname/parse.js")

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ "./node_modules/mithril/pathname/parse.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/parse.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var parseQueryString = __webpack_require__(/*! ../querystring/parse */ "./node_modules/mithril/querystring/parse.js")

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ "./node_modules/mithril/promise/polyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/promise/polyfill.js ***!
  \**************************************************/
/***/ ((module) => {


/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill


/***/ }),

/***/ "./node_modules/mithril/promise/promise.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/promise/promise.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var PromisePolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/mithril/promise/polyfill.js")

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof __webpack_require__.g !== "undefined") {
	if (typeof __webpack_require__.g.Promise === "undefined") {
		__webpack_require__.g.Promise = PromisePolyfill
	} else if (!__webpack_require__.g.Promise.prototype.finally) {
		__webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = __webpack_require__.g.Promise
} else {
	module.exports = PromisePolyfill
}


/***/ }),

/***/ "./node_modules/mithril/querystring/build.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/build.js ***!
  \***************************************************/
/***/ ((module) => {



module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ "./node_modules/mithril/querystring/parse.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/parse.js ***!
  \***************************************************/
/***/ ((module) => {



module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ "./node_modules/mithril/render.js":
/*!****************************************!*\
  !*** ./node_modules/mithril/render.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



module.exports = __webpack_require__(/*! ./render/render */ "./node_modules/mithril/render/render.js")(window)


/***/ }),

/***/ "./node_modules/mithril/render/fragment.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/render/fragment.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/mithril/render/hyperscriptVnode.js")

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ "./node_modules/mithril/render/hyperscript.js":
/*!****************************************************!*\
  !*** ./node_modules/mithril/render/hyperscript.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/mithril/render/hyperscriptVnode.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ "./node_modules/mithril/render/hyperscriptVnode.js":
/*!*********************************************************!*\
  !*** ./node_modules/mithril/render/hyperscriptVnode.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ "./node_modules/mithril/render/render.js":
/*!***********************************************!*\
  !*** ./node_modules/mithril/render/render.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}


/***/ }),

/***/ "./node_modules/mithril/render/trust.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/trust.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ "./node_modules/mithril/render/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/vnode.js ***!
  \**********************************************/
/***/ ((module) => {



function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ "./node_modules/mithril/request.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/request.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var PromisePolyfill = __webpack_require__(/*! ./promise/promise */ "./node_modules/mithril/promise/promise.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./request/request */ "./node_modules/mithril/request/request.js")(window, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ "./node_modules/mithril/request/request.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/request/request.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/mithril/pathname/build.js")

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ "./node_modules/mithril/route.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/route.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./api/router */ "./node_modules/mithril/api/router.js")(window, mountRedraw)


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/list */ "./js/views/list.js");
/* harmony import */ var _views_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/form */ "./js/views/form.js");







mithril__WEBPACK_IMPORTED_MODULE_0___default().route(document.body, "/", {
    "/": _views_list__WEBPACK_IMPORTED_MODULE_1__.list,
    "/form/:id" : _views_form__WEBPACK_IMPORTED_MODULE_2__.bakedGoodsForm
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9qcy9tb2RlbHMvYmFrZXJ5LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL2pzL3ZpZXdzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vanMvdmlld3MvbGlzdC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9hcGkvbW91bnQtcmVkcmF3LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL2FwaS9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvaHlwZXJzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvbW91bnQtcmVkcmF3LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9wYXRobmFtZS9idWlsZC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9wYXRobmFtZS9jb21waWxlVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcHJvbWlzZS9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9wcm9taXNlL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcXVlcnlzdHJpbmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcXVlcnlzdHJpbmcvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyLmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9mcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvaHlwZXJzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2h5cGVyc2NyaXB0Vm5vZGUuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvdHJ1c3QuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3Zub2RlLmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVxdWVzdC9yZXF1ZXN0LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JvdXRlLmpzIiwid2VicGFjazovL2NvbXB1dGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb21wdXRlcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb21wdXRlcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb21wdXRlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVEsbUJBQU8sQ0FBQyxnREFBUzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDTTtBQUNrQjs7QUFFMUM7QUFDQTtBQUNBLFFBQVEsdURBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0EsZUFBZSw4Q0FBQyxrQkFBa0IsOENBQUM7QUFDbkM7QUFDQTtBQUNBLG9CQUFvQix1REFBVztBQUMvQixpQkFBaUIsRUFBRTtBQUNuQixZQUFZLDhDQUFDO0FBQ2IsWUFBWSw4Q0FBQztBQUNiO0FBQ0Esb0JBQW9CLCtEQUFtQjtBQUN2QyxpQkFBaUI7QUFDakIsdUJBQXVCLCtEQUFtQjtBQUMxQyxhQUFhO0FBQ2IsWUFBWSw4Q0FBQztBQUNiLFlBQVksOENBQUM7QUFDYjtBQUNBLG9CQUFvQixtRUFBdUI7QUFDM0MsaUJBQWlCO0FBQ2pCLHVCQUF1QixtRUFBdUI7QUFDOUMsYUFBYTtBQUNiLFlBQVksOENBQUM7QUFDYixZQUFZLDhDQUFDO0FBQ2I7QUFDQSxvQkFBb0IsZ0VBQW9CO0FBQ3hDLGlCQUFpQjtBQUNqQix1QkFBdUIsZ0VBQW9CO0FBQzNDLGFBQWE7QUFDYixZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7QUNqTVk7O0FBRVosa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCOztBQUUxQyxpQkFBaUIsbUJBQU8sQ0FBQywwREFBYzs7Ozs7OztVQ0p2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRVc7O0FBRVk7QUFDVTs7QUFFOUMsb0RBQU87QUFDUCxTQUFTLDZDQUFJO0FBQ2Isa0JBQWtCLHVEQUFjO0FBQ2hDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxudmFyIGJha2VyeSA9IHtcbiAgICBhcGlLZXk6IFwiNmM1YzU0MGVkYTk4NzgzNDI2NDUwYzNiOGQ2M2JkYzRcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL3Byb2R1Y3RzXCIsXG4gICAgY2FrZVR5cGVzOiBbXCJUw6VydGFcIiwgXCJCcsO2ZFwiLCBcIlNtw6VrYWthXCJdLFxuICAgIGN1cnJlbnRDYWtlczogW10sXG4gICAgbG9hZEFsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBiYWtlcnkudXJsICsgXCI/YXBpX2tleT1cIiArIGJha2VyeS5hcGlLZXlcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIGJha2VyeS5jdXJyZW50Q2FrZXMgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjdXJyZW50OiB7fSxcbiAgICBsb2FkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gbS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogYmFrZXJ5LnVybCArIFwiL1wiICsgaWQgKyBcIj9hcGlfa2V5PVwiICsgYmFrZXJ5LmFwaUtleVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFrZXJ5LmN1cnJlbnQuYXBpX2tleSA9IGJha2VyeS5hcGlLZXk7XG5cbiAgICAgICAgcmV0dXJuIG0ucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICB1cmw6IGJha2VyeS51cmwsXG4gICAgICAgICAgICBib2R5OiBiYWtlcnkuY3VycmVudFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbS5yb3V0ZS5zZXQoXCIvXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBiYWtlcnkgfTtcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IHsgYmFrZXJ5IH0gZnJvbSBcIi4uL21vZGVscy9iYWtlcnlcIjtcblxubGV0IGJha2VkR29vZHNGb3JtID0ge1xuICAgIG9uaW5pdDogZnVuY3Rpb24odm5vZGUpIHtcbiAgICAgICAgYmFrZXJ5LmxvYWQodm5vZGUuYXR0cnMuaWQpO1xuICAgIH0sXG4gICAgdmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtKFwiZGl2LmNvbnRhaW5lclwiLCBtKFwiZm9ybVwiLCB7XG4gICAgICAgICAgICAgICAgb25zdWJtaXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJha2VyeS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgfSB9LCBbXG4gICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJOYW1uXCIpLFxuICAgICAgICAgICAgbShcImlucHV0LmlucHV0W3R5cGU9dGV4dF1bcGxhY2Vob2xkZXI9TmFtZV1cIiwge1xuICAgICAgICAgICAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50Lm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBiYWtlcnkuY3VycmVudC5uYW1lXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG0oXCJsYWJlbC5pbnB1dC1sYWJlbFwiLCBcIkxhZ2VycGxhdHNcIiksXG4gICAgICAgICAgICBtKFwiaW5wdXQuaW5wdXRbdHlwZT10ZXh0XVtwbGFjZWhvbGRlcj1MYWdlcnBsYXRzXVwiLCB7XG4gICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQubG9jYXRpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBiYWtlcnkuY3VycmVudC5sb2NhdGlvblxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJMYWdlcnNhbGRvXCIpLFxuICAgICAgICAgICAgbShcImlucHV0LmlucHV0W3R5cGU9bnVtYmVyXVtwbGFjZWhvbGRlcj1MYWdlcnNhbGRvXVwiLCB7XG4gICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQuc3RvY2sgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYmFrZXJ5LmN1cnJlbnQuc3RvY2tcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbShcImxhYmVsLmlucHV0LWxhYmVsXCIsIFwiVHlwXCIpLFxuICAgICAgICAgICAgbShcInNlbGVjdC5pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50LnNwZWNpZmllcnMgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgYmFrZXJ5LmNha2VUeXBlcy5tYXAoZnVuY3Rpb24oY2FrZVR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbShcIm9wdGlvblwiLCB7IHZhbHVlOiBjYWtlVHlwZSB9LCBjYWtlVHlwZSk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBtKFwiaW5wdXRbdHlwZT1zdWJtaXRdW3ZhbHVlPVNhdmVdLmJ1dHRvblwiLCBcIlNwYXJhXCIpXG4gICAgICAgIF0pKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBiYWtlZEdvb2RzRm9ybSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IHsgYmFrZXJ5IH0gZnJvbSAnLi4vbW9kZWxzL2Jha2VyeS5qcyc7XG5cbmNvbnN0IGNha2VDb21wb25lbnQgPSB7XG4gICAgdmlldzogZnVuY3Rpb24odm5vZGUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB2bm9kZS5hdHRycztcbiAgICAgICAgcmV0dXJuIG0oXCJkaXYuY2FyZFwiLCBbXG4gICAgICAgICAgICBtKFwicC5jYXJkLXRpdGxlXCIsIGN1cnJlbnQubmFtZSksXG4gICAgICAgICAgICBtKFwicC5jYXJkLWluZm9cIiwgXCJQcmlzOiBcIiArIGN1cnJlbnQucHJpY2UgKyBcIiBMYWdlcnNhbGRvOiBcIiArIGN1cnJlbnQuc3RvY2spLFxuICAgICAgICAgICAgbShcInAuY2FyZC1pbmZvXCIsIFwiTGFnZXJwbGF0czogXCIgKyBjdXJyZW50LmxvY2F0aW9uKSxcbiAgICAgICAgICAgIG0oXCJhLmNhcmQtaW5mb1wiLCB7IGhyZWY6IFwiIyEvZm9ybS9cIiArIGN1cnJlbnQuaWQgfSwgXCLDhG5kcmFcIilcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxubGV0IGxpc3QgPSB7XG4gICAgb25pbml0OiBiYWtlcnkubG9hZEFsbCxcbiAgICB2aWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG0oXCJkaXYuY29udGFpbmVyXCIgLCBbXG4gICAgICAgICAgICBtKFwiaDFcIiwgXCJLYWtvclwiKSxcbiAgICAgICAgICAgIG0oXCJkaXYuY2FrZS1jb250YWluZXJcIiwgYmFrZXJ5LmN1cnJlbnRDYWtlcy5tYXAoZnVuY3Rpb24oY2FrZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtKGNha2VDb21wb25lbnQsIGNha2UpO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGxpc3QgfTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZW5kZXIsIHNjaGVkdWxlLCBjb25zb2xlKSB7XG5cdHZhciBzdWJzY3JpcHRpb25zID0gW11cblx0dmFyIHJlbmRlcmluZyA9IGZhbHNlXG5cdHZhciBwZW5kaW5nID0gZmFsc2VcblxuXHRmdW5jdGlvbiBzeW5jKCkge1xuXHRcdGlmIChyZW5kZXJpbmcpIHRocm93IG5ldyBFcnJvcihcIk5lc3RlZCBtLnJlZHJhdy5zeW5jKCkgY2FsbFwiKVxuXHRcdHJlbmRlcmluZyA9IHRydWVcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdHRyeSB7IHJlbmRlcihzdWJzY3JpcHRpb25zW2ldLCBWbm9kZShzdWJzY3JpcHRpb25zW2kgKyAxXSksIHJlZHJhdykgfVxuXHRcdFx0Y2F0Y2ggKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XG5cdFx0fVxuXHRcdHJlbmRlcmluZyA9IGZhbHNlXG5cdH1cblxuXHRmdW5jdGlvbiByZWRyYXcoKSB7XG5cdFx0aWYgKCFwZW5kaW5nKSB7XG5cdFx0XHRwZW5kaW5nID0gdHJ1ZVxuXHRcdFx0c2NoZWR1bGUoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBlbmRpbmcgPSBmYWxzZVxuXHRcdFx0XHRzeW5jKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVkcmF3LnN5bmMgPSBzeW5jXG5cblx0ZnVuY3Rpb24gbW91bnQocm9vdCwgY29tcG9uZW50KSB7XG5cdFx0aWYgKGNvbXBvbmVudCAhPSBudWxsICYmIGNvbXBvbmVudC52aWV3ID09IG51bGwgJiYgdHlwZW9mIGNvbXBvbmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwibS5tb3VudChlbGVtZW50LCBjb21wb25lbnQpIGV4cGVjdHMgYSBjb21wb25lbnQsIG5vdCBhIHZub2RlXCIpXG5cdFx0fVxuXG5cdFx0dmFyIGluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHJvb3QpXG5cdFx0aWYgKGluZGV4ID49IDApIHtcblx0XHRcdHN1YnNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LCAyKVxuXHRcdFx0cmVuZGVyKHJvb3QsIFtdLCByZWRyYXcpXG5cdFx0fVxuXG5cdFx0aWYgKGNvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnB1c2gocm9vdCwgY29tcG9uZW50KVxuXHRcdFx0cmVuZGVyKHJvb3QsIFZub2RlKGNvbXBvbmVudCksIHJlZHJhdylcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge21vdW50OiBtb3VudCwgcmVkcmF3OiByZWRyYXd9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG52YXIgbSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvaHlwZXJzY3JpcHRcIilcbnZhciBQcm9taXNlID0gcmVxdWlyZShcIi4uL3Byb21pc2UvcHJvbWlzZVwiKVxuXG52YXIgYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9idWlsZFwiKVxudmFyIHBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvcGFyc2VcIilcbnZhciBjb21waWxlVGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvY29tcGlsZVRlbXBsYXRlXCIpXG52YXIgYXNzaWduID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2Fzc2lnblwiKVxuXG52YXIgc2VudGluZWwgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3csIG1vdW50UmVkcmF3KSB7XG5cdHZhciBmaXJlQXN5bmNcblxuXHRmdW5jdGlvbiBzZXRQYXRoKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHRwYXRoID0gYnVpbGRQYXRobmFtZShwYXRoLCBkYXRhKVxuXHRcdGlmIChmaXJlQXN5bmMgIT0gbnVsbCkge1xuXHRcdFx0ZmlyZUFzeW5jKClcblx0XHRcdHZhciBzdGF0ZSA9IG9wdGlvbnMgPyBvcHRpb25zLnN0YXRlIDogbnVsbFxuXHRcdFx0dmFyIHRpdGxlID0gb3B0aW9ucyA/IG9wdGlvbnMudGl0bGUgOiBudWxsXG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlcGxhY2UpICR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZS5wcmVmaXggKyBwYXRoKVxuXHRcdFx0ZWxzZSAkd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGUucHJlZml4ICsgcGF0aClcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkd2luZG93LmxvY2F0aW9uLmhyZWYgPSByb3V0ZS5wcmVmaXggKyBwYXRoXG5cdFx0fVxuXHR9XG5cblx0dmFyIGN1cnJlbnRSZXNvbHZlciA9IHNlbnRpbmVsLCBjb21wb25lbnQsIGF0dHJzLCBjdXJyZW50UGF0aCwgbGFzdFVwZGF0ZVxuXG5cdHZhciBTS0lQID0gcm91dGUuU0tJUCA9IHt9XG5cblx0ZnVuY3Rpb24gcm91dGUocm9vdCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpIHtcblx0XHRpZiAocm9vdCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCB0byBgbS5yb3V0ZWAgaXMgbm90IHVuZGVmaW5lZFwiKVxuXHRcdC8vIDAgPSBzdGFydFxuXHRcdC8vIDEgPSBpbml0XG5cdFx0Ly8gMiA9IHJlYWR5XG5cdFx0dmFyIHN0YXRlID0gMFxuXG5cdFx0dmFyIGNvbXBpbGVkID0gT2JqZWN0LmtleXMocm91dGVzKS5tYXAoZnVuY3Rpb24ocm91dGUpIHtcblx0XHRcdGlmIChyb3V0ZVswXSAhPT0gXCIvXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlJvdXRlcyBtdXN0IHN0YXJ0IHdpdGggYSBgL2BcIilcblx0XHRcdGlmICgoLzooW15cXC9cXC4tXSspKFxcLnszfSk/Oi8pLnRlc3Qocm91dGUpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlJvdXRlIHBhcmFtZXRlciBuYW1lcyBtdXN0IGJlIHNlcGFyYXRlZCB3aXRoIGVpdGhlciBgL2AsIGAuYCwgb3IgYC1gXCIpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyb3V0ZTogcm91dGUsXG5cdFx0XHRcdGNvbXBvbmVudDogcm91dGVzW3JvdXRlXSxcblx0XHRcdFx0Y2hlY2s6IGNvbXBpbGVUZW1wbGF0ZShyb3V0ZSksXG5cdFx0XHR9XG5cdFx0fSlcblx0XHR2YXIgY2FsbEFzeW5jID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXHRcdHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKClcblx0XHR2YXIgc2NoZWR1bGVkID0gZmFsc2Vcblx0XHR2YXIgb25yZW1vdmVcblxuXHRcdGZpcmVBc3luYyA9IG51bGxcblxuXHRcdGlmIChkZWZhdWx0Um91dGUgIT0gbnVsbCkge1xuXHRcdFx0dmFyIGRlZmF1bHREYXRhID0gcGFyc2VQYXRobmFtZShkZWZhdWx0Um91dGUpXG5cblx0XHRcdGlmICghY29tcGlsZWQuc29tZShmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5jaGVjayhkZWZhdWx0RGF0YSkgfSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiRGVmYXVsdCByb3V0ZSBkb2Vzbid0IG1hdGNoIGFueSBrbm93biByb3V0ZXNcIilcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZXNvbHZlUm91dGUoKSB7XG5cdFx0XHRzY2hlZHVsZWQgPSBmYWxzZVxuXHRcdFx0Ly8gQ29uc2lkZXIgdGhlIHBhdGhuYW1lIGhvbGlzdGljYWxseS4gVGhlIHByZWZpeCBtaWdodCBldmVuIGJlIGludmFsaWQsXG5cdFx0XHQvLyBidXQgdGhhdCdzIG5vdCBvdXIgcHJvYmxlbS5cblx0XHRcdHZhciBwcmVmaXggPSAkd2luZG93LmxvY2F0aW9uLmhhc2hcblx0XHRcdGlmIChyb3V0ZS5wcmVmaXhbMF0gIT09IFwiI1wiKSB7XG5cdFx0XHRcdHByZWZpeCA9ICR3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgcHJlZml4XG5cdFx0XHRcdGlmIChyb3V0ZS5wcmVmaXhbMF0gIT09IFwiP1wiKSB7XG5cdFx0XHRcdFx0cHJlZml4ID0gJHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHByZWZpeFxuXHRcdFx0XHRcdGlmIChwcmVmaXhbMF0gIT09IFwiL1wiKSBwcmVmaXggPSBcIi9cIiArIHByZWZpeFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBUaGlzIHNlZW1pbmdseSB1c2VsZXNzIGAuY29uY2F0KClgIHNwZWVkcyB1cCB0aGUgdGVzdHMgcXVpdGUgYSBiaXQsXG5cdFx0XHQvLyBzaW5jZSB0aGUgcmVwcmVzZW50YXRpb24gaXMgY29uc2lzdGVudGx5IGEgcmVsYXRpdmVseSBwb29ybHlcblx0XHRcdC8vIG9wdGltaXplZCBjb25zIHN0cmluZy5cblx0XHRcdHZhciBwYXRoID0gcHJlZml4LmNvbmNhdCgpXG5cdFx0XHRcdC5yZXBsYWNlKC8oPzolW2EtZjg5XVthLWYwLTldKSsvZ2ltLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5zbGljZShyb3V0ZS5wcmVmaXgubGVuZ3RoKVxuXHRcdFx0dmFyIGRhdGEgPSBwYXJzZVBhdGhuYW1lKHBhdGgpXG5cblx0XHRcdGFzc2lnbihkYXRhLnBhcmFtcywgJHdpbmRvdy5oaXN0b3J5LnN0YXRlKVxuXG5cdFx0XHRmdW5jdGlvbiBmYWlsKCkge1xuXHRcdFx0XHRpZiAocGF0aCA9PT0gZGVmYXVsdFJvdXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVzb2x2ZSBkZWZhdWx0IHJvdXRlIFwiICsgZGVmYXVsdFJvdXRlKVxuXHRcdFx0XHRzZXRQYXRoKGRlZmF1bHRSb3V0ZSwgbnVsbCwge3JlcGxhY2U6IHRydWV9KVxuXHRcdFx0fVxuXG5cdFx0XHRsb29wKDApXG5cdFx0XHRmdW5jdGlvbiBsb29wKGkpIHtcblx0XHRcdFx0Ly8gMCA9IGluaXRcblx0XHRcdFx0Ly8gMSA9IHNjaGVkdWxlZFxuXHRcdFx0XHQvLyAyID0gZG9uZVxuXHRcdFx0XHRmb3IgKDsgaSA8IGNvbXBpbGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNvbXBpbGVkW2ldLmNoZWNrKGRhdGEpKSB7XG5cdFx0XHRcdFx0XHR2YXIgcGF5bG9hZCA9IGNvbXBpbGVkW2ldLmNvbXBvbmVudFxuXHRcdFx0XHRcdFx0dmFyIG1hdGNoZWRSb3V0ZSA9IGNvbXBpbGVkW2ldLnJvdXRlXG5cdFx0XHRcdFx0XHR2YXIgbG9jYWxDb21wID0gcGF5bG9hZFxuXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IGxhc3RVcGRhdGUgPSBmdW5jdGlvbihjb21wKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh1cGRhdGUgIT09IGxhc3RVcGRhdGUpIHJldHVyblxuXHRcdFx0XHRcdFx0XHRpZiAoY29tcCA9PT0gU0tJUCkgcmV0dXJuIGxvb3AoaSArIDEpXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudCA9IGNvbXAgIT0gbnVsbCAmJiAodHlwZW9mIGNvbXAudmlldyA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBjb21wID09PSBcImZ1bmN0aW9uXCIpPyBjb21wIDogXCJkaXZcIlxuXHRcdFx0XHRcdFx0XHRhdHRycyA9IGRhdGEucGFyYW1zLCBjdXJyZW50UGF0aCA9IHBhdGgsIGxhc3RVcGRhdGUgPSBudWxsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRSZXNvbHZlciA9IHBheWxvYWQucmVuZGVyID8gcGF5bG9hZCA6IG51bGxcblx0XHRcdFx0XHRcdFx0aWYgKHN0YXRlID09PSAyKSBtb3VudFJlZHJhdy5yZWRyYXcoKVxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZSA9IDJcblx0XHRcdFx0XHRcdFx0XHRtb3VudFJlZHJhdy5yZWRyYXcuc3luYygpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIFRoZXJlJ3Mgbm8gdW5kZXJzdGF0aW5nIGhvdyBtdWNoIEkgKndpc2gqIEkgY291bGRcblx0XHRcdFx0XHRcdC8vIHVzZSBgYXN5bmNgL2Bhd2FpdGAgaGVyZS4uLlxuXHRcdFx0XHRcdFx0aWYgKHBheWxvYWQudmlldyB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHBheWxvYWQgPSB7fVxuXHRcdFx0XHRcdFx0XHR1cGRhdGUobG9jYWxDb21wKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAocGF5bG9hZC5vbm1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdHAudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQub25tYXRjaChkYXRhLnBhcmFtcywgcGF0aCwgbWF0Y2hlZFJvdXRlKVxuXHRcdFx0XHRcdFx0XHR9KS50aGVuKHVwZGF0ZSwgZmFpbClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgdXBkYXRlKFwiZGl2XCIpXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmFpbCgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGl0IHVuY29uZGl0aW9uYWxseSBzbyBgbS5yb3V0ZS5zZXRgIGFuZCBgbS5yb3V0ZS5MaW5rYCBib3RoIHdvcmssXG5cdFx0Ly8gZXZlbiBpZiBuZWl0aGVyIGBwdXNoU3RhdGVgIG5vciBgaGFzaGNoYW5nZWAgYXJlIHN1cHBvcnRlZC4gSXQnc1xuXHRcdC8vIGNsZWFyZWQgaWYgYGhhc2hjaGFuZ2VgIGlzIHVzZWQsIHNpbmNlIHRoYXQgbWFrZXMgaXQgYXV0b21hdGljYWxseVxuXHRcdC8vIGFzeW5jLlxuXHRcdGZpcmVBc3luYyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCFzY2hlZHVsZWQpIHtcblx0XHRcdFx0c2NoZWR1bGVkID0gdHJ1ZVxuXHRcdFx0XHRjYWxsQXN5bmMocmVzb2x2ZVJvdXRlKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgJHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRvbnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmaXJlQXN5bmMsIGZhbHNlKVxuXHRcdFx0fVxuXHRcdFx0JHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZmlyZUFzeW5jLCBmYWxzZSlcblx0XHR9IGVsc2UgaWYgKHJvdXRlLnByZWZpeFswXSA9PT0gXCIjXCIpIHtcblx0XHRcdGZpcmVBc3luYyA9IG51bGxcblx0XHRcdG9ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgcmVzb2x2ZVJvdXRlLCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdCR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgcmVzb2x2ZVJvdXRlLCBmYWxzZSlcblx0XHR9XG5cblx0XHRyZXR1cm4gbW91bnRSZWRyYXcubW91bnQocm9vdCwge1xuXHRcdFx0b25iZWZvcmV1cGRhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzdGF0ZSA9IHN0YXRlID8gMiA6IDFcblx0XHRcdFx0cmV0dXJuICEoIXN0YXRlIHx8IHNlbnRpbmVsID09PSBjdXJyZW50UmVzb2x2ZXIpXG5cdFx0XHR9LFxuXHRcdFx0b25jcmVhdGU6IHJlc29sdmVSb3V0ZSxcblx0XHRcdG9ucmVtb3ZlOiBvbnJlbW92ZSxcblx0XHRcdHZpZXc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIXN0YXRlIHx8IHNlbnRpbmVsID09PSBjdXJyZW50UmVzb2x2ZXIpIHJldHVyblxuXHRcdFx0XHQvLyBXcmFwIGluIGEgZnJhZ21lbnQgdG8gcHJlc2VydmUgZXhpc3Rpbmcga2V5IHNlbWFudGljc1xuXHRcdFx0XHR2YXIgdm5vZGUgPSBbVm5vZGUoY29tcG9uZW50LCBhdHRycy5rZXksIGF0dHJzKV1cblx0XHRcdFx0aWYgKGN1cnJlbnRSZXNvbHZlcikgdm5vZGUgPSBjdXJyZW50UmVzb2x2ZXIucmVuZGVyKHZub2RlWzBdKVxuXHRcdFx0XHRyZXR1cm4gdm5vZGVcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXHRyb3V0ZS5zZXQgPSBmdW5jdGlvbihwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0aWYgKGxhc3RVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblx0XHRcdG9wdGlvbnMucmVwbGFjZSA9IHRydWVcblx0XHR9XG5cdFx0bGFzdFVwZGF0ZSA9IG51bGxcblx0XHRzZXRQYXRoKHBhdGgsIGRhdGEsIG9wdGlvbnMpXG5cdH1cblx0cm91dGUuZ2V0ID0gZnVuY3Rpb24oKSB7cmV0dXJuIGN1cnJlbnRQYXRofVxuXHRyb3V0ZS5wcmVmaXggPSBcIiMhXCJcblx0cm91dGUuTGluayA9IHtcblx0XHR2aWV3OiBmdW5jdGlvbih2bm9kZSkge1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXG5cdFx0XHQvLyBSZW1vdmUgdGhlc2Ugc28gdGhleSBkb24ndCBnZXQgb3ZlcndyaXR0ZW5cblx0XHRcdHZhciBhdHRycyA9IHt9LCBvbmNsaWNrLCBocmVmXG5cdFx0XHRhc3NpZ24oYXR0cnMsIHZub2RlLmF0dHJzKVxuXHRcdFx0Ly8gVGhlIGZpcnN0IHR3byBhcmUgaW50ZXJuYWwsIGJ1dCB0aGUgcmVzdCBhcmUgbWFnaWMgYXR0cmlidXRlc1xuXHRcdFx0Ly8gdGhhdCBuZWVkIGNlbnNvcmVkIHRvIG5vdCBzY3JldyB1cCByZW5kZXJpbmcuXG5cdFx0XHRhdHRycy5zZWxlY3RvciA9IGF0dHJzLm9wdGlvbnMgPSBhdHRycy5rZXkgPSBhdHRycy5vbmluaXQgPVxuXHRcdFx0YXR0cnMub25jcmVhdGUgPSBhdHRycy5vbmJlZm9yZXVwZGF0ZSA9IGF0dHJzLm9udXBkYXRlID1cblx0XHRcdGF0dHJzLm9uYmVmb3JlcmVtb3ZlID0gYXR0cnMub25yZW1vdmUgPSBudWxsXG5cblx0XHRcdC8vIERvIHRoaXMgbm93IHNvIHdlIGNhbiBnZXQgdGhlIG1vc3QgY3VycmVudCBgaHJlZmAgYW5kIGBkaXNhYmxlZGAuXG5cdFx0XHQvLyBUaG9zZSBhdHRyaWJ1dGVzIG1heSBhbHNvIGJlIHNwZWNpZmllZCBpbiB0aGUgc2VsZWN0b3IsIGFuZCB3ZVxuXHRcdFx0Ly8gc2hvdWxkIGhvbm9yIHRoYXQuXG5cdFx0XHR2YXIgY2hpbGQgPSBtKHZub2RlLmF0dHJzLnNlbGVjdG9yIHx8IFwiYVwiLCBhdHRycywgdm5vZGUuY2hpbGRyZW4pXG5cblx0XHRcdC8vIExldCdzIHByb3ZpZGUgYSAqcmlnaHQqIHdheSB0byBkaXNhYmxlIGEgcm91dGUgbGluaywgcmF0aGVyIHRoYW5cblx0XHRcdC8vIGxldHRpbmcgcGVvcGxlIHNjcmV3IHVwIGFjY2Vzc2liaWxpdHkgb24gYWNjaWRlbnQuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gVGhlIGF0dHJpYnV0ZSBpcyBjb2VyY2VkIHNvIHVzZXJzIGRvbid0IGdldCBzdXJwcmlzZWQgb3ZlclxuXHRcdFx0Ly8gYGRpc2FibGVkOiAwYCByZXN1bHRpbmcgaW4gYSBidXR0b24gdGhhdCdzIHNvbWVob3cgcm91dGFibGVcblx0XHRcdC8vIGRlc3BpdGUgYmVpbmcgdmlzaWJseSBkaXNhYmxlZC5cblx0XHRcdGlmIChjaGlsZC5hdHRycy5kaXNhYmxlZCA9IEJvb2xlYW4oY2hpbGQuYXR0cnMuZGlzYWJsZWQpKSB7XG5cdFx0XHRcdGNoaWxkLmF0dHJzLmhyZWYgPSBudWxsXG5cdFx0XHRcdGNoaWxkLmF0dHJzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IFwidHJ1ZVwiXG5cdFx0XHRcdC8vIElmIHlvdSAqcmVhbGx5KiBkbyB3YW50IHRvIGRvIHRoaXMgb24gYSBkaXNhYmxlZCBsaW5rLCB1c2Vcblx0XHRcdFx0Ly8gYW4gYG9uY3JlYXRlYCBob29rIHRvIGFkZCBpdC5cblx0XHRcdFx0Y2hpbGQuYXR0cnMub25jbGljayA9IG51bGxcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9uY2xpY2sgPSBjaGlsZC5hdHRycy5vbmNsaWNrXG5cdFx0XHRcdGhyZWYgPSBjaGlsZC5hdHRycy5ocmVmXG5cdFx0XHRcdGNoaWxkLmF0dHJzLmhyZWYgPSByb3V0ZS5wcmVmaXggKyBocmVmXG5cdFx0XHRcdGNoaWxkLmF0dHJzLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdFxuXHRcdFx0XHRcdGlmICh0eXBlb2Ygb25jbGljayA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBvbmNsaWNrLmNhbGwoZS5jdXJyZW50VGFyZ2V0LCBlKVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAob25jbGljayA9PSBudWxsIHx8IHR5cGVvZiBvbmNsaWNrICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb25jbGljay5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRvbmNsaWNrLmhhbmRsZUV2ZW50KGUpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQWRhcHRlZCBmcm9tIFJlYWN0IFJvdXRlcidzIGltcGxlbWVudGF0aW9uOlxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL3JlYWN0LXJvdXRlci9ibG9iLzUyMGEwYWNkNDhhZTFiMDY2ZWIwYjA3ZDZkNGQxNzkwYTFkMDI0ODIvcGFja2FnZXMvcmVhY3Qtcm91dGVyLWRvbS9tb2R1bGVzL0xpbmsuanNcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIFRyeSB0byBiZSBmbGV4aWJsZSBhbmQgaW50dWl0aXZlIGluIGhvdyB3ZSBoYW5kbGUgbGlua3MuXG5cdFx0XHRcdFx0Ly8gRnVuIGZhY3Q6IGxpbmtzIGFyZW4ndCBhcyBvYnZpb3VzIHRvIGdldCByaWdodCBhcyB5b3Vcblx0XHRcdFx0XHQvLyB3b3VsZCBleHBlY3QuIFRoZXJlJ3MgYSBsb3QgbW9yZSB2YWxpZCB3YXlzIHRvIGNsaWNrIGFcblx0XHRcdFx0XHQvLyBsaW5rIHRoYW4gdGhpcywgYW5kIG9uZSBtaWdodCB3YW50IHRvIG5vdCBzaW1wbHkgY2xpY2sgYVxuXHRcdFx0XHRcdC8vIGxpbmssIGJ1dCByaWdodCBjbGljayBvciBjb21tYW5kLWNsaWNrIGl0IHRvIGNvcHkgdGhlXG5cdFx0XHRcdFx0Ly8gbGluayB0YXJnZXQsIGV0Yy4gTm9wZSwgdGhpcyBpc24ndCBqdXN0IGZvciBibGluZCBwZW9wbGUuXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0Ly8gU2tpcCBpZiBgb25jbGlja2AgcHJldmVudGVkIGRlZmF1bHRcblx0XHRcdFx0XHRcdHJlc3VsdCAhPT0gZmFsc2UgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCAmJlxuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG5cdFx0XHRcdFx0XHQoZS5idXR0b24gPT09IDAgfHwgZS53aGljaCA9PT0gMCB8fCBlLndoaWNoID09PSAxKSAmJlxuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSBgdGFyZ2V0PV9ibGFua2AsIGV0Yy5cblx0XHRcdFx0XHRcdCghZS5jdXJyZW50VGFyZ2V0LnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQudGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmXG5cdFx0XHRcdFx0XHQvLyBObyBtb2RpZmllciBrZXlzXG5cdFx0XHRcdFx0XHQhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkgJiYgIWUuc2hpZnRLZXkgJiYgIWUuYWx0S2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdGUucmVkcmF3ID0gZmFsc2Vcblx0XHRcdFx0XHRcdHJvdXRlLnNldChocmVmLCBudWxsLCBvcHRpb25zKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoaWxkXG5cdFx0fSxcblx0fVxuXHRyb3V0ZS5wYXJhbSA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBhdHRycyAmJiBrZXkgIT0gbnVsbCA/IGF0dHJzW2tleV0gOiBhdHRyc1xuXHR9XG5cblx0cmV0dXJuIHJvdXRlXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgaHlwZXJzY3JpcHQgPSByZXF1aXJlKFwiLi9yZW5kZXIvaHlwZXJzY3JpcHRcIilcblxuaHlwZXJzY3JpcHQudHJ1c3QgPSByZXF1aXJlKFwiLi9yZW5kZXIvdHJ1c3RcIilcbmh5cGVyc2NyaXB0LmZyYWdtZW50ID0gcmVxdWlyZShcIi4vcmVuZGVyL2ZyYWdtZW50XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gaHlwZXJzY3JpcHRcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBoeXBlcnNjcmlwdCA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0XCIpXG52YXIgcmVxdWVzdCA9IHJlcXVpcmUoXCIuL3JlcXVlc3RcIilcbnZhciBtb3VudFJlZHJhdyA9IHJlcXVpcmUoXCIuL21vdW50LXJlZHJhd1wiKVxuXG52YXIgbSA9IGZ1bmN0aW9uIG0oKSB7IHJldHVybiBoeXBlcnNjcmlwdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH1cbm0ubSA9IGh5cGVyc2NyaXB0XG5tLnRydXN0ID0gaHlwZXJzY3JpcHQudHJ1c3Rcbm0uZnJhZ21lbnQgPSBoeXBlcnNjcmlwdC5mcmFnbWVudFxubS5tb3VudCA9IG1vdW50UmVkcmF3Lm1vdW50XG5tLnJvdXRlID0gcmVxdWlyZShcIi4vcm91dGVcIilcbm0ucmVuZGVyID0gcmVxdWlyZShcIi4vcmVuZGVyXCIpXG5tLnJlZHJhdyA9IG1vdW50UmVkcmF3LnJlZHJhd1xubS5yZXF1ZXN0ID0gcmVxdWVzdC5yZXF1ZXN0XG5tLmpzb25wID0gcmVxdWVzdC5qc29ucFxubS5wYXJzZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4vcXVlcnlzdHJpbmcvcGFyc2VcIilcbm0uYnVpbGRRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nL2J1aWxkXCIpXG5tLnBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXRobmFtZS9wYXJzZVwiKVxubS5idWlsZFBhdGhuYW1lID0gcmVxdWlyZShcIi4vcGF0aG5hbWUvYnVpbGRcIilcbm0udm5vZGUgPSByZXF1aXJlKFwiLi9yZW5kZXIvdm5vZGVcIilcbm0uUHJvbWlzZVBvbHlmaWxsID0gcmVxdWlyZShcIi4vcHJvbWlzZS9wb2x5ZmlsbFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciByZW5kZXIgPSByZXF1aXJlKFwiLi9yZW5kZXJcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hcGkvbW91bnQtcmVkcmF3XCIpKHJlbmRlciwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBjb25zb2xlKVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG5cdGlmKHNvdXJjZSkgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldIH0pXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgYnVpbGRRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeXN0cmluZy9idWlsZFwiKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoXCIuL2Fzc2lnblwiKVxuXG4vLyBSZXR1cm5zIGBwYXRoYCBmcm9tIGB0ZW1wbGF0ZWAgKyBgcGFyYW1zYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgcGFyYW1zKSB7XG5cdGlmICgoLzooW15cXC9cXC4tXSspKFxcLnszfSk/Oi8pLnRlc3QodGVtcGxhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzICptdXN0KiBiZSBzZXBhcmF0ZWRcIilcblx0fVxuXHRpZiAocGFyYW1zID09IG51bGwpIHJldHVybiB0ZW1wbGF0ZVxuXHR2YXIgcXVlcnlJbmRleCA9IHRlbXBsYXRlLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB0ZW1wbGF0ZS5pbmRleE9mKFwiI1wiKVxuXHR2YXIgcXVlcnlFbmQgPSBoYXNoSW5kZXggPCAwID8gdGVtcGxhdGUubGVuZ3RoIDogaGFzaEluZGV4XG5cdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA8IDAgPyBxdWVyeUVuZCA6IHF1ZXJ5SW5kZXhcblx0dmFyIHBhdGggPSB0ZW1wbGF0ZS5zbGljZSgwLCBwYXRoRW5kKVxuXHR2YXIgcXVlcnkgPSB7fVxuXG5cdGFzc2lnbihxdWVyeSwgcGFyYW1zKVxuXG5cdHZhciByZXNvbHZlZCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL1xcLi1dKykoXFwuezN9KT8vZywgZnVuY3Rpb24obSwga2V5LCB2YXJpYWRpYykge1xuXHRcdGRlbGV0ZSBxdWVyeVtrZXldXG5cdFx0Ly8gSWYgbm8gc3VjaCBwYXJhbWV0ZXIgZXhpc3RzLCBkb24ndCBpbnRlcnBvbGF0ZSBpdC5cblx0XHRpZiAocGFyYW1zW2tleV0gPT0gbnVsbCkgcmV0dXJuIG1cblx0XHQvLyBFc2NhcGUgbm9ybWFsIHBhcmFtZXRlcnMsIGJ1dCBub3QgdmFyaWFkaWMgb25lcy5cblx0XHRyZXR1cm4gdmFyaWFkaWMgPyBwYXJhbXNba2V5XSA6IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocGFyYW1zW2tleV0pKVxuXHR9KVxuXG5cdC8vIEluIGNhc2UgdGhlIHRlbXBsYXRlIHN1YnN0aXR1dGlvbiBhZGRzIG5ldyBxdWVyeS9oYXNoIHBhcmFtZXRlcnMuXG5cdHZhciBuZXdRdWVyeUluZGV4ID0gcmVzb2x2ZWQuaW5kZXhPZihcIj9cIilcblx0dmFyIG5ld0hhc2hJbmRleCA9IHJlc29sdmVkLmluZGV4T2YoXCIjXCIpXG5cdHZhciBuZXdRdWVyeUVuZCA9IG5ld0hhc2hJbmRleCA8IDAgPyByZXNvbHZlZC5sZW5ndGggOiBuZXdIYXNoSW5kZXhcblx0dmFyIG5ld1BhdGhFbmQgPSBuZXdRdWVyeUluZGV4IDwgMCA/IG5ld1F1ZXJ5RW5kIDogbmV3UXVlcnlJbmRleFxuXHR2YXIgcmVzdWx0ID0gcmVzb2x2ZWQuc2xpY2UoMCwgbmV3UGF0aEVuZClcblxuXHRpZiAocXVlcnlJbmRleCA+PSAwKSByZXN1bHQgKz0gdGVtcGxhdGUuc2xpY2UocXVlcnlJbmRleCwgcXVlcnlFbmQpXG5cdGlmIChuZXdRdWVyeUluZGV4ID49IDApIHJlc3VsdCArPSAocXVlcnlJbmRleCA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIHJlc29sdmVkLnNsaWNlKG5ld1F1ZXJ5SW5kZXgsIG5ld1F1ZXJ5RW5kKVxuXHR2YXIgcXVlcnlzdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5KVxuXHRpZiAocXVlcnlzdHJpbmcpIHJlc3VsdCArPSAocXVlcnlJbmRleCA8IDAgJiYgbmV3UXVlcnlJbmRleCA8IDAgPyBcIj9cIiA6IFwiJlwiKSArIHF1ZXJ5c3RyaW5nXG5cdGlmIChoYXNoSW5kZXggPj0gMCkgcmVzdWx0ICs9IHRlbXBsYXRlLnNsaWNlKGhhc2hJbmRleClcblx0aWYgKG5ld0hhc2hJbmRleCA+PSAwKSByZXN1bHQgKz0gKGhhc2hJbmRleCA8IDAgPyBcIlwiIDogXCImXCIpICsgcmVzb2x2ZWQuc2xpY2UobmV3SGFzaEluZGV4KVxuXHRyZXR1cm4gcmVzdWx0XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcGFyc2VQYXRobmFtZSA9IHJlcXVpcmUoXCIuL3BhcnNlXCIpXG5cbi8vIENvbXBpbGVzIGEgdGVtcGxhdGUgaW50byBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZXNvbHZlZCBwYXRoICh3aXRob3V0IHF1ZXJ5XG4vLyBzdHJpbmdzKSBhbmQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgcGFyYW1ldGVycyB3aXRoIHRoZWlyXG4vLyBwYXJzZWQgdmFsdWVzLiBUaGlzIGV4cGVjdHMgdGhlIGlucHV0IG9mIHRoZSBjb21waWxlZCB0ZW1wbGF0ZSB0byBiZSB0aGVcbi8vIG91dHB1dCBvZiBgcGFyc2VQYXRobmFtZWAuIE5vdGUgdGhhdCBpdCBkb2VzICpub3QqIHJlbW92ZSBxdWVyeSBwYXJhbWV0ZXJzXG4vLyBzcGVjaWZpZWQgaW4gdGhlIHRlbXBsYXRlLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuXHR2YXIgdGVtcGxhdGVEYXRhID0gcGFyc2VQYXRobmFtZSh0ZW1wbGF0ZSlcblx0dmFyIHRlbXBsYXRlS2V5cyA9IE9iamVjdC5rZXlzKHRlbXBsYXRlRGF0YS5wYXJhbXMpXG5cdHZhciBrZXlzID0gW11cblx0dmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeXCIgKyB0ZW1wbGF0ZURhdGEucGF0aC5yZXBsYWNlKFxuXHRcdC8vIEkgZXNjYXBlIGxpdGVyYWwgdGV4dCBzbyBwZW9wbGUgY2FuIHVzZSB0aGluZ3MgbGlrZSBgOmZpbGUuOmV4dGAgb3Jcblx0XHQvLyBgOmxhbmctOmxvY2FsZWAgaW4gcm91dGVzLiBUaGlzIGlzIGFsbCBtZXJnZWQgaW50byBvbmUgcGFzcyBzbyBJXG5cdFx0Ly8gZG9uJ3QgYWxzbyBhY2NpZGVudGFsbHkgZXNjYXBlIGAtYCBhbmQgbWFrZSBpdCBoYXJkZXIgdG8gZGV0ZWN0IGl0IHRvXG5cdFx0Ly8gYmFuIGl0IGZyb20gdGVtcGxhdGUgcGFyYW1ldGVycy5cblx0XHQvOihbXlxcLy4tXSspKFxcLnszfXxcXC4oPyFcXC4pfC0pP3xbXFxcXF4kKisuKCl8XFxbXFxde31dL2csXG5cdFx0ZnVuY3Rpb24obSwga2V5LCBleHRyYSkge1xuXHRcdFx0aWYgKGtleSA9PSBudWxsKSByZXR1cm4gXCJcXFxcXCIgKyBtXG5cdFx0XHRrZXlzLnB1c2goe2s6IGtleSwgcjogZXh0cmEgPT09IFwiLi4uXCJ9KVxuXHRcdFx0aWYgKGV4dHJhID09PSBcIi4uLlwiKSByZXR1cm4gXCIoLiopXCJcblx0XHRcdGlmIChleHRyYSA9PT0gXCIuXCIpIHJldHVybiBcIihbXi9dKylcXFxcLlwiXG5cdFx0XHRyZXR1cm4gXCIoW14vXSspXCIgKyAoZXh0cmEgfHwgXCJcIilcblx0XHR9XG5cdCkgKyBcIiRcIilcblx0cmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHQvLyBGaXJzdCwgY2hlY2sgdGhlIHBhcmFtcy4gVXN1YWxseSwgdGhlcmUgaXNuJ3QgYW55LCBhbmQgaXQncyBqdXN0XG5cdFx0Ly8gY2hlY2tpbmcgYSBzdGF0aWMgc2V0LlxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGVLZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGVtcGxhdGVEYXRhLnBhcmFtc1t0ZW1wbGF0ZUtleXNbaV1dICE9PSBkYXRhLnBhcmFtc1t0ZW1wbGF0ZUtleXNbaV1dKSByZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0Ly8gSWYgbm8gaW50ZXJwb2xhdGlvbnMgZXhpc3QsIGxldCdzIHNraXAgYWxsIHRoZSBjZXJlbW9ueVxuXHRcdGlmICgha2V5cy5sZW5ndGgpIHJldHVybiByZWdleHAudGVzdChkYXRhLnBhdGgpXG5cdFx0dmFyIHZhbHVlcyA9IHJlZ2V4cC5leGVjKGRhdGEucGF0aClcblx0XHRpZiAodmFsdWVzID09IG51bGwpIHJldHVybiBmYWxzZVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZGF0YS5wYXJhbXNba2V5c1tpXS5rXSA9IGtleXNbaV0uciA/IHZhbHVlc1tpICsgMV0gOiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVzW2kgKyAxXSlcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBhcnNlUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnlzdHJpbmcvcGFyc2VcIilcblxuLy8gUmV0dXJucyBge3BhdGgsIHBhcmFtc31gIGZyb20gYHVybGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsKSB7XG5cdHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIpXG5cdHZhciBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIilcblx0dmFyIHF1ZXJ5RW5kID0gaGFzaEluZGV4IDwgMCA/IHVybC5sZW5ndGggOiBoYXNoSW5kZXhcblx0dmFyIHBhdGhFbmQgPSBxdWVyeUluZGV4IDwgMCA/IHF1ZXJ5RW5kIDogcXVlcnlJbmRleFxuXHR2YXIgcGF0aCA9IHVybC5zbGljZSgwLCBwYXRoRW5kKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKVxuXG5cdGlmICghcGF0aCkgcGF0aCA9IFwiL1wiXG5cdGVsc2Uge1xuXHRcdGlmIChwYXRoWzBdICE9PSBcIi9cIikgcGF0aCA9IFwiL1wiICsgcGF0aFxuXHRcdGlmIChwYXRoLmxlbmd0aCA+IDEgJiYgcGF0aFtwYXRoLmxlbmd0aCAtIDFdID09PSBcIi9cIikgcGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpXG5cdH1cblx0cmV0dXJuIHtcblx0XHRwYXRoOiBwYXRoLFxuXHRcdHBhcmFtczogcXVlcnlJbmRleCA8IDBcblx0XHRcdD8ge31cblx0XHRcdDogcGFyc2VRdWVyeVN0cmluZyh1cmwuc2xpY2UocXVlcnlJbmRleCArIDEsIHF1ZXJ5RW5kKSksXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG4vKiogQGNvbnN0cnVjdG9yICovXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgbXVzdCBiZSBjYWxsZWQgd2l0aCBgbmV3YFwiKVxuXHRpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblxuXHR2YXIgc2VsZiA9IHRoaXMsIHJlc29sdmVycyA9IFtdLCByZWplY3RvcnMgPSBbXSwgcmVzb2x2ZUN1cnJlbnQgPSBoYW5kbGVyKHJlc29sdmVycywgdHJ1ZSksIHJlamVjdEN1cnJlbnQgPSBoYW5kbGVyKHJlamVjdG9ycywgZmFsc2UpXG5cdHZhciBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlID0ge3Jlc29sdmVyczogcmVzb2x2ZXJzLCByZWplY3RvcnM6IHJlamVjdG9yc31cblx0dmFyIGNhbGxBc3luYyA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0ZnVuY3Rpb24gaGFuZGxlcihsaXN0LCBzaG91bGRBYnNvcmIpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIHRoZW5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChzaG91bGRBYnNvcmIgJiYgdmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgKHRoZW4gPSB2YWx1ZS50aGVuKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBzZWxmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCB3LyBpdHNlbGZcIilcblx0XHRcdFx0XHRleGVjdXRlT25jZSh0aGVuLmJpbmQodmFsdWUpKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNhbGxBc3luYyhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICghc2hvdWxkQWJzb3JiICYmIGxpc3QubGVuZ3RoID09PSAwKSBjb25zb2xlLmVycm9yKFwiUG9zc2libGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uOlwiLCB2YWx1ZSlcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykgbGlzdFtpXSh2YWx1ZSlcblx0XHRcdFx0XHRcdHJlc29sdmVycy5sZW5ndGggPSAwLCByZWplY3RvcnMubGVuZ3RoID0gMFxuXHRcdFx0XHRcdFx0aW5zdGFuY2Uuc3RhdGUgPSBzaG91bGRBYnNvcmJcblx0XHRcdFx0XHRcdGluc3RhbmNlLnJldHJ5ID0gZnVuY3Rpb24oKSB7ZXhlY3V0ZSh2YWx1ZSl9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0Q3VycmVudChlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBleGVjdXRlT25jZSh0aGVuKSB7XG5cdFx0dmFyIHJ1bnMgPSAwXG5cdFx0ZnVuY3Rpb24gcnVuKGZuKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0aWYgKHJ1bnMrKyA+IDApIHJldHVyblxuXHRcdFx0XHRmbih2YWx1ZSlcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIG9uZXJyb3IgPSBydW4ocmVqZWN0Q3VycmVudClcblx0XHR0cnkge3RoZW4ocnVuKHJlc29sdmVDdXJyZW50KSwgb25lcnJvcil9IGNhdGNoIChlKSB7b25lcnJvcihlKX1cblx0fVxuXG5cdGV4ZWN1dGVPbmNlKGV4ZWN1dG9yKVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0aW9uKSB7XG5cdHZhciBzZWxmID0gdGhpcywgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZVxuXHRmdW5jdGlvbiBoYW5kbGUoY2FsbGJhY2ssIGxpc3QsIG5leHQsIHN0YXRlKSB7XG5cdFx0bGlzdC5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIG5leHQodmFsdWUpXG5cdFx0XHRlbHNlIHRyeSB7cmVzb2x2ZU5leHQoY2FsbGJhY2sodmFsdWUpKX0gY2F0Y2ggKGUpIHtpZiAocmVqZWN0TmV4dCkgcmVqZWN0TmV4dChlKX1cblx0XHR9KVxuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2UucmV0cnkgPT09IFwiZnVuY3Rpb25cIiAmJiBzdGF0ZSA9PT0gaW5zdGFuY2Uuc3RhdGUpIGluc3RhbmNlLnJldHJ5KClcblx0fVxuXHR2YXIgcmVzb2x2ZU5leHQsIHJlamVjdE5leHRcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3Jlc29sdmVOZXh0ID0gcmVzb2x2ZSwgcmVqZWN0TmV4dCA9IHJlamVjdH0pXG5cdGhhbmRsZShvbkZ1bGZpbGxlZCwgaW5zdGFuY2UucmVzb2x2ZXJzLCByZXNvbHZlTmV4dCwgdHJ1ZSksIGhhbmRsZShvblJlamVjdGlvbiwgaW5zdGFuY2UucmVqZWN0b3JzLCByZWplY3ROZXh0LCBmYWxzZSlcblx0cmV0dXJuIHByb21pc2Vcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbihvblJlamVjdGlvbikge1xuXHRyZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2VQb2x5ZmlsbC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGZ1bmN0aW9uKHJlYXNvbikge1xuXHRcdFx0cmV0dXJuIFByb21pc2VQb2x5ZmlsbC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlUG9seWZpbGwucmVqZWN0KHJlYXNvbik7XG5cdFx0XHR9KVxuXHRcdH1cblx0KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpIHJldHVybiB2YWx1ZVxuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlKSB7cmVzb2x2ZSh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3JlamVjdCh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLmFsbCA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHRvdGFsID0gbGlzdC5sZW5ndGgsIGNvdW50ID0gMCwgdmFsdWVzID0gW11cblx0XHRpZiAobGlzdC5sZW5ndGggPT09IDApIHJlc29sdmUoW10pXG5cdFx0ZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdChmdW5jdGlvbihpKSB7XG5cdFx0XHRcdGZ1bmN0aW9uIGNvbnN1bWUodmFsdWUpIHtcblx0XHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdFx0dmFsdWVzW2ldID0gdmFsdWVcblx0XHRcdFx0XHRpZiAoY291bnQgPT09IHRvdGFsKSByZXNvbHZlKHZhbHVlcylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGlzdFtpXSAhPSBudWxsICYmICh0eXBlb2YgbGlzdFtpXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbGlzdFtpXSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgbGlzdFtpXS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRsaXN0W2ldLnRoZW4oY29uc3VtZSwgcmVqZWN0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgY29uc3VtZShsaXN0W2ldKVxuXHRcdFx0fSkoaSlcblx0XHR9XG5cdH0pXG59XG5Qcm9taXNlUG9seWZpbGwucmFjZSA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0W2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuXHRcdH1cblx0fSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUG9seWZpbGxcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBQcm9taXNlUG9seWZpbGwgPSByZXF1aXJlKFwiLi9wb2x5ZmlsbFwiKVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRpZiAodHlwZW9mIHdpbmRvdy5Qcm9taXNlID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0d2luZG93LlByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcblx0fSBlbHNlIGlmICghd2luZG93LlByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcblx0XHR3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IFByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuZmluYWxseVxuXHR9XG5cdG1vZHVsZS5leHBvcnRzID0gd2luZG93LlByb21pc2Vcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRpZiAodHlwZW9mIGdsb2JhbC5Qcm9taXNlID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Z2xvYmFsLlByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcblx0fSBlbHNlIGlmICghZ2xvYmFsLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcblx0XHRnbG9iYWwuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IFByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuZmluYWxseVxuXHR9XG5cdG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlByb21pc2Vcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJvbWlzZVBvbHlmaWxsXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBcIlwiXG5cblx0dmFyIGFyZ3MgPSBbXVxuXHRmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG5cdFx0ZGVzdHJ1Y3R1cmUoa2V5LCBvYmplY3Rba2V5XSlcblx0fVxuXG5cdHJldHVybiBhcmdzLmpvaW4oXCImXCIpXG5cblx0ZnVuY3Rpb24gZGVzdHJ1Y3R1cmUoa2V5LCB2YWx1ZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5ICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGFyZ3MucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBcIlwiID8gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpIDogXCJcIikpXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5nKSB7XG5cdGlmIChzdHJpbmcgPT09IFwiXCIgfHwgc3RyaW5nID09IG51bGwpIHJldHVybiB7fVxuXHRpZiAoc3RyaW5nLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHN0cmluZyA9IHN0cmluZy5zbGljZSgxKVxuXG5cdHZhciBlbnRyaWVzID0gc3RyaW5nLnNwbGl0KFwiJlwiKSwgY291bnRlcnMgPSB7fSwgZGF0YSA9IHt9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnRyeSA9IGVudHJpZXNbaV0uc3BsaXQoXCI9XCIpXG5cdFx0dmFyIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVswXSlcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5sZW5ndGggPT09IDIgPyBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMV0pIDogXCJcIlxuXG5cdFx0aWYgKHZhbHVlID09PSBcInRydWVcIikgdmFsdWUgPSB0cnVlXG5cdFx0ZWxzZSBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikgdmFsdWUgPSBmYWxzZVxuXG5cdFx0dmFyIGxldmVscyA9IGtleS5zcGxpdCgvXFxdXFxbP3xcXFsvKVxuXHRcdHZhciBjdXJzb3IgPSBkYXRhXG5cdFx0aWYgKGtleS5pbmRleE9mKFwiW1wiKSA+IC0xKSBsZXZlbHMucG9wKClcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxldmVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGxldmVsID0gbGV2ZWxzW2pdLCBuZXh0TGV2ZWwgPSBsZXZlbHNbaiArIDFdXG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBuZXh0TGV2ZWwgPT0gXCJcIiB8fCAhaXNOYU4ocGFyc2VJbnQobmV4dExldmVsLCAxMCkpXG5cdFx0XHRpZiAobGV2ZWwgPT09IFwiXCIpIHtcblx0XHRcdFx0dmFyIGtleSA9IGxldmVscy5zbGljZSgwLCBqKS5qb2luKClcblx0XHRcdFx0aWYgKGNvdW50ZXJzW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvdW50ZXJzW2tleV0gPSBBcnJheS5pc0FycmF5KGN1cnNvcikgPyBjdXJzb3IubGVuZ3RoIDogMFxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldmVsID0gY291bnRlcnNba2V5XSsrXG5cdFx0XHR9XG5cdFx0XHQvLyBEaXNhbGxvdyBkaXJlY3QgcHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0ZWxzZSBpZiAobGV2ZWwgPT09IFwiX19wcm90b19fXCIpIGJyZWFrXG5cdFx0XHRpZiAoaiA9PT0gbGV2ZWxzLmxlbmd0aCAtIDEpIGN1cnNvcltsZXZlbF0gPSB2YWx1ZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIFJlYWQgb3duIHByb3BlcnRpZXMgZXhjbHVzaXZlbHkgdG8gZGlzYWxsb3cgaW5kaXJlY3Rcblx0XHRcdFx0Ly8gcHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHR2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY3Vyc29yLCBsZXZlbClcblx0XHRcdFx0aWYgKGRlc2MgIT0gbnVsbCkgZGVzYyA9IGRlc2MudmFsdWVcblx0XHRcdFx0aWYgKGRlc2MgPT0gbnVsbCkgY3Vyc29yW2xldmVsXSA9IGRlc2MgPSBpc051bWJlciA/IFtdIDoge31cblx0XHRcdFx0Y3Vyc29yID0gZGVzY1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9yZW5kZXIvcmVuZGVyXCIpKHdpbmRvdylcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcbnZhciBoeXBlcnNjcmlwdFZub2RlID0gcmVxdWlyZShcIi4vaHlwZXJzY3JpcHRWbm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdm5vZGUgPSBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KDAsIGFyZ3VtZW50cylcblxuXHR2bm9kZS50YWcgPSBcIltcIlxuXHR2bm9kZS5jaGlsZHJlbiA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlLmNoaWxkcmVuKVxuXHRyZXR1cm4gdm5vZGVcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcbnZhciBoeXBlcnNjcmlwdFZub2RlID0gcmVxdWlyZShcIi4vaHlwZXJzY3JpcHRWbm9kZVwiKVxuXG52YXIgc2VsZWN0b3JQYXJzZXIgPSAvKD86KF58I3xcXC4pKFteI1xcLlxcW1xcXV0rKSl8KFxcWyguKz8pKD86XFxzKj1cXHMqKFwifCd8KSgoPzpcXFxcW1wiJ1xcXV18LikqPylcXDUpP1xcXSkvZ1xudmFyIHNlbGVjdG9yQ2FjaGUgPSB7fVxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqZWN0KSB7XG5cdGZvciAodmFyIGtleSBpbiBvYmplY3QpIGlmIChoYXNPd24uY2FsbChvYmplY3QsIGtleSkpIHJldHVybiBmYWxzZVxuXHRyZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBjb21waWxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcblx0dmFyIG1hdGNoLCB0YWcgPSBcImRpdlwiLCBjbGFzc2VzID0gW10sIGF0dHJzID0ge31cblx0d2hpbGUgKG1hdGNoID0gc2VsZWN0b3JQYXJzZXIuZXhlYyhzZWxlY3RvcikpIHtcblx0XHR2YXIgdHlwZSA9IG1hdGNoWzFdLCB2YWx1ZSA9IG1hdGNoWzJdXG5cdFx0aWYgKHR5cGUgPT09IFwiXCIgJiYgdmFsdWUgIT09IFwiXCIpIHRhZyA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIjXCIpIGF0dHJzLmlkID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIi5cIikgY2xhc3Nlcy5wdXNoKHZhbHVlKVxuXHRcdGVsc2UgaWYgKG1hdGNoWzNdWzBdID09PSBcIltcIikge1xuXHRcdFx0dmFyIGF0dHJWYWx1ZSA9IG1hdGNoWzZdXG5cdFx0XHRpZiAoYXR0clZhbHVlKSBhdHRyVmFsdWUgPSBhdHRyVmFsdWUucmVwbGFjZSgvXFxcXChbXCInXSkvZywgXCIkMVwiKS5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIlxcXFxcIilcblx0XHRcdGlmIChtYXRjaFs0XSA9PT0gXCJjbGFzc1wiKSBjbGFzc2VzLnB1c2goYXR0clZhbHVlKVxuXHRcdFx0ZWxzZSBhdHRyc1ttYXRjaFs0XV0gPSBhdHRyVmFsdWUgPT09IFwiXCIgPyBhdHRyVmFsdWUgOiBhdHRyVmFsdWUgfHwgdHJ1ZVxuXHRcdH1cblx0fVxuXHRpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSBhdHRycy5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpXG5cdHJldHVybiBzZWxlY3RvckNhY2hlW3NlbGVjdG9yXSA9IHt0YWc6IHRhZywgYXR0cnM6IGF0dHJzfVxufVxuXG5mdW5jdGlvbiBleGVjU2VsZWN0b3Ioc3RhdGUsIHZub2RlKSB7XG5cdHZhciBhdHRycyA9IHZub2RlLmF0dHJzXG5cdHZhciBjaGlsZHJlbiA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlLmNoaWxkcmVuKVxuXHR2YXIgaGFzQ2xhc3MgPSBoYXNPd24uY2FsbChhdHRycywgXCJjbGFzc1wiKVxuXHR2YXIgY2xhc3NOYW1lID0gaGFzQ2xhc3MgPyBhdHRycy5jbGFzcyA6IGF0dHJzLmNsYXNzTmFtZVxuXG5cdHZub2RlLnRhZyA9IHN0YXRlLnRhZ1xuXHR2bm9kZS5hdHRycyA9IG51bGxcblx0dm5vZGUuY2hpbGRyZW4gPSB1bmRlZmluZWRcblxuXHRpZiAoIWlzRW1wdHkoc3RhdGUuYXR0cnMpICYmICFpc0VtcHR5KGF0dHJzKSkge1xuXHRcdHZhciBuZXdBdHRycyA9IHt9XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdGlmIChoYXNPd24uY2FsbChhdHRycywga2V5KSkgbmV3QXR0cnNba2V5XSA9IGF0dHJzW2tleV1cblx0XHR9XG5cblx0XHRhdHRycyA9IG5ld0F0dHJzXG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gc3RhdGUuYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoc3RhdGUuYXR0cnMsIGtleSkgJiYga2V5ICE9PSBcImNsYXNzTmFtZVwiICYmICFoYXNPd24uY2FsbChhdHRycywga2V5KSl7XG5cdFx0XHRhdHRyc1trZXldID0gc3RhdGUuYXR0cnNba2V5XVxuXHRcdH1cblx0fVxuXHRpZiAoY2xhc3NOYW1lICE9IG51bGwgfHwgc3RhdGUuYXR0cnMuY2xhc3NOYW1lICE9IG51bGwpIGF0dHJzLmNsYXNzTmFtZSA9XG5cdFx0Y2xhc3NOYW1lICE9IG51bGxcblx0XHRcdD8gc3RhdGUuYXR0cnMuY2xhc3NOYW1lICE9IG51bGxcblx0XHRcdFx0PyBTdHJpbmcoc3RhdGUuYXR0cnMuY2xhc3NOYW1lKSArIFwiIFwiICsgU3RyaW5nKGNsYXNzTmFtZSlcblx0XHRcdFx0OiBjbGFzc05hbWVcblx0XHRcdDogc3RhdGUuYXR0cnMuY2xhc3NOYW1lICE9IG51bGxcblx0XHRcdFx0PyBzdGF0ZS5hdHRycy5jbGFzc05hbWVcblx0XHRcdFx0OiBudWxsXG5cblx0aWYgKGhhc0NsYXNzKSBhdHRycy5jbGFzcyA9IG51bGxcblxuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkgJiYga2V5ICE9PSBcImtleVwiKSB7XG5cdFx0XHR2bm9kZS5hdHRycyA9IGF0dHJzXG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0gIT0gbnVsbCAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiI1wiKSB7XG5cdFx0dm5vZGUudGV4dCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdH0gZWxzZSB7XG5cdFx0dm5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlblxuXHR9XG5cblx0cmV0dXJuIHZub2RlXG59XG5cbmZ1bmN0aW9uIGh5cGVyc2NyaXB0KHNlbGVjdG9yKSB7XG5cdGlmIChzZWxlY3RvciA9PSBudWxsIHx8IHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygc2VsZWN0b3IudmlldyAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJUaGUgc2VsZWN0b3IgbXVzdCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBjb21wb25lbnQuXCIpO1xuXHR9XG5cblx0dmFyIHZub2RlID0gaHlwZXJzY3JpcHRWbm9kZS5hcHBseSgxLCBhcmd1bWVudHMpXG5cblx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHZub2RlLmNoaWxkcmVuID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGUuY2hpbGRyZW4pXG5cdFx0aWYgKHNlbGVjdG9yICE9PSBcIltcIikgcmV0dXJuIGV4ZWNTZWxlY3RvcihzZWxlY3RvckNhY2hlW3NlbGVjdG9yXSB8fCBjb21waWxlU2VsZWN0b3Ioc2VsZWN0b3IpLCB2bm9kZSlcblx0fVxuXG5cdHZub2RlLnRhZyA9IHNlbGVjdG9yXG5cdHJldHVybiB2bm9kZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGVyc2NyaXB0XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbi8vIENhbGwgdmlhIGBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KHN0YXJ0T2Zmc2V0LCBhcmd1bWVudHMpYFxuLy9cbi8vIFRoZSByZWFzb24gSSBkbyBpdCB0aGlzIHdheSwgZm9yd2FyZGluZyB0aGUgYXJndW1lbnRzIGFuZCBwYXNzaW5nIHRoZSBzdGFydFxuLy8gb2Zmc2V0IGluIGB0aGlzYCwgaXMgc28gSSBkb24ndCBoYXZlIHRvIGNyZWF0ZSBhIHRlbXBvcmFyeSBhcnJheSBpbiBhXG4vLyBwZXJmb3JtYW5jZS1jcml0aWNhbCBwYXRoLlxuLy9cbi8vIEluIG5hdGl2ZSBFUzYsIEknZCBpbnN0ZWFkIGFkZCBhIGZpbmFsIGAuLi5hcmdzYCBwYXJhbWV0ZXIgdG8gdGhlXG4vLyBgaHlwZXJzY3JpcHRgIGFuZCBgZnJhZ21lbnRgIGZhY3RvcmllcyBhbmQgZGVmaW5lIHRoaXMgYXNcbi8vIGBoeXBlcnNjcmlwdFZub2RlKC4uLmFyZ3MpYCwgc2luY2UgbW9kZXJuIGVuZ2luZXMgZG8gb3B0aW1pemUgdGhhdCBhd2F5LiBCdXRcbi8vIEVTNSAod2hhdCBNaXRocmlsIHJlcXVpcmVzIHRoYW5rcyB0byBJRSBzdXBwb3J0KSBkb2Vzbid0IGdpdmUgbWUgdGhhdCBsdXh1cnksXG4vLyBhbmQgZW5naW5lcyBhcmVuJ3QgbmVhcmx5IGludGVsbGlnZW50IGVub3VnaCB0byBkbyBlaXRoZXIgb2YgdGhlc2U6XG4vL1xuLy8gMS4gRWxpZGUgdGhlIGFsbG9jYXRpb24gZm9yIGBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlgIHdoZW4gaXQncyBwYXNzZWQgdG9cbi8vICAgIGFub3RoZXIgZnVuY3Rpb24gb25seSB0byBiZSBpbmRleGVkLlxuLy8gMi4gRWxpZGUgYW4gYGFyZ3VtZW50c2AgYWxsb2NhdGlvbiB3aGVuIGl0J3MgcGFzc2VkIHRvIGFueSBmdW5jdGlvbiBvdGhlclxuLy8gICAgdGhhbiBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YCBvciBgUmVmbGVjdC5hcHBseWAuXG4vL1xuLy8gSW4gRVM2LCBpdCdkIHByb2JhYmx5IGxvb2sgY2xvc2VyIHRvIHRoaXMgKEknZCBuZWVkIHRvIHByb2ZpbGUgaXQsIHRob3VnaCk6XG4vLyBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGF0dHJzLCAuLi5jaGlsZHJlbikge1xuLy8gICAgIGlmIChhdHRycyA9PSBudWxsIHx8IHR5cGVvZiBhdHRycyA9PT0gXCJvYmplY3RcIiAmJiBhdHRycy50YWcgPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShhdHRycykpIHtcbi8vICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuWzBdKSkgY2hpbGRyZW4gPSBjaGlsZHJlblswXVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmIEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnMsIC4uLmNoaWxkcmVuXVxuLy8gICAgICAgICBhdHRycyA9IHVuZGVmaW5lZFxuLy8gICAgIH1cbi8vXG4vLyAgICAgaWYgKGF0dHJzID09IG51bGwpIGF0dHJzID0ge31cbi8vICAgICByZXR1cm4gVm5vZGUoXCJcIiwgYXR0cnMua2V5LCBhdHRycywgY2hpbGRyZW4pXG4vLyB9XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYXR0cnMgPSBhcmd1bWVudHNbdGhpc10sIHN0YXJ0ID0gdGhpcyArIDEsIGNoaWxkcmVuXG5cblx0aWYgKGF0dHJzID09IG51bGwpIHtcblx0XHRhdHRycyA9IHt9XG5cdH0gZWxzZSBpZiAodHlwZW9mIGF0dHJzICE9PSBcIm9iamVjdFwiIHx8IGF0dHJzLnRhZyAhPSBudWxsIHx8IEFycmF5LmlzQXJyYXkoYXR0cnMpKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHRcdHN0YXJ0ID0gdGhpc1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IHN0YXJ0ICsgMSkge1xuXHRcdGNoaWxkcmVuID0gYXJndW1lbnRzW3N0YXJ0XVxuXHRcdGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIGNoaWxkcmVuID0gW2NoaWxkcmVuXVxuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuID0gW11cblx0XHR3aGlsZSAoc3RhcnQgPCBhcmd1bWVudHMubGVuZ3RoKSBjaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tzdGFydCsrXSlcblx0fVxuXG5cdHJldHVybiBWbm9kZShcIlwiLCBhdHRycy5rZXksIGF0dHJzLCBjaGlsZHJlbilcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkd2luZG93KSB7XG5cdHZhciAkZG9jID0gJHdpbmRvdyAmJiAkd2luZG93LmRvY3VtZW50XG5cdHZhciBjdXJyZW50UmVkcmF3XG5cblx0dmFyIG5hbWVTcGFjZSA9IHtcblx0XHRzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRtYXRoOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIlxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmFtZVNwYWNlKHZub2RlKSB7XG5cdFx0cmV0dXJuIHZub2RlLmF0dHJzICYmIHZub2RlLmF0dHJzLnhtbG5zIHx8IG5hbWVTcGFjZVt2bm9kZS50YWddXG5cdH1cblxuXHQvL3Nhbml0eSBjaGVjayB0byBkaXNjb3VyYWdlIHBlb3BsZSBmcm9tIGRvaW5nIGB2bm9kZS5zdGF0ZSA9IC4uLmBcblx0ZnVuY3Rpb24gY2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpIHtcblx0XHRpZiAodm5vZGUuc3RhdGUgIT09IG9yaWdpbmFsKSB0aHJvdyBuZXcgRXJyb3IoXCJgdm5vZGUuc3RhdGVgIG11c3Qgbm90IGJlIG1vZGlmaWVkXCIpXG5cdH1cblxuXHQvL05vdGU6IHRoZSBob29rIGlzIHBhc3NlZCBhcyB0aGUgYHRoaXNgIGFyZ3VtZW50IHRvIGFsbG93IHByb3h5aW5nIHRoZVxuXHQvL2FyZ3VtZW50cyB3aXRob3V0IHJlcXVpcmluZyBhIGZ1bGwgYXJyYXkgYWxsb2NhdGlvbiB0byBkbyBzby4gSXQgYWxzb1xuXHQvL3Rha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGUgY3VycmVudCBgdm5vZGVgIGlzIHRoZSBmaXJzdCBhcmd1bWVudCBpblxuXHQvL2FsbCBsaWZlY3ljbGUgbWV0aG9kcy5cblx0ZnVuY3Rpb24gY2FsbEhvb2sodm5vZGUpIHtcblx0XHR2YXIgb3JpZ2luYWwgPSB2bm9kZS5zdGF0ZVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hcHBseShvcmlnaW5hbCwgYXJndW1lbnRzKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblx0XHR9XG5cdH1cblxuXHQvLyBJRTExIChhdCBsZWFzdCkgdGhyb3dzIGFuIFVuc3BlY2lmaWVkRXJyb3Igd2hlbiBhY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB3aGVuXG5cdC8vIGluc2lkZSBhbiBpZnJhbWUuIENhdGNoIGFuZCBzd2FsbG93IHRoaXMgZXJyb3IsIGFuZCBoZWF2eS1oYW5kaWRseSByZXR1cm4gbnVsbC5cblx0ZnVuY3Rpb24gYWN0aXZlRWxlbWVudCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuICRkb2MuYWN0aXZlRWxlbWVudFxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cdC8vY3JlYXRlXG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRzd2l0Y2ggKHRhZykge1xuXHRcdFx0XHRjYXNlIFwiI1wiOiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0Y2FzZSBcIjxcIjogY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRjYXNlIFwiW1wiOiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0ZGVmYXVsdDogY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2bm9kZS5kb20gPSAkZG9jLmNyZWF0ZVRleHROb2RlKHZub2RlLmNoaWxkcmVuKVxuXHRcdGluc2VydE5vZGUocGFyZW50LCB2bm9kZS5kb20sIG5leHRTaWJsaW5nKVxuXHR9XG5cdHZhciBwb3NzaWJsZVBhcmVudHMgPSB7Y2FwdGlvbjogXCJ0YWJsZVwiLCB0aGVhZDogXCJ0YWJsZVwiLCB0Ym9keTogXCJ0YWJsZVwiLCB0Zm9vdDogXCJ0YWJsZVwiLCB0cjogXCJ0Ym9keVwiLCB0aDogXCJ0clwiLCB0ZDogXCJ0clwiLCBjb2xncm91cDogXCJ0YWJsZVwiLCBjb2w6IFwiY29sZ3JvdXBcIn1cblx0ZnVuY3Rpb24gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgbWF0Y2ggPSB2bm9kZS5jaGlsZHJlbi5tYXRjaCgvXlxccyo/PChcXHcrKS9pbSkgfHwgW11cblx0XHQvLyBub3QgdXNpbmcgdGhlIHByb3BlciBwYXJlbnQgbWFrZXMgdGhlIGNoaWxkIGVsZW1lbnQocykgdmFuaXNoLlxuXHRcdC8vICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXHRcdC8vICAgICBkaXYuaW5uZXJIVE1MID0gXCI8dGQ+aTwvdGQ+PHRkPmo8L3RkPlwiXG5cdFx0Ly8gICAgIGNvbnNvbGUubG9nKGRpdi5pbm5lckhUTUwpXG5cdFx0Ly8gLS0+IFwiaWpcIiwgbm8gPHRkPiBpbiBzaWdodC5cblx0XHR2YXIgdGVtcCA9ICRkb2MuY3JlYXRlRWxlbWVudChwb3NzaWJsZVBhcmVudHNbbWF0Y2hbMV1dIHx8IFwiZGl2XCIpXG5cdFx0aWYgKG5zID09PSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpIHtcblx0XHRcdHRlbXAuaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XCIgKyB2bm9kZS5jaGlsZHJlbiArIFwiPC9zdmc+XCJcblx0XHRcdHRlbXAgPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGVtcC5pbm5lckhUTUwgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gdGVtcC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdC8vIENhcHR1cmUgbm9kZXMgdG8gcmVtb3ZlLCBzbyB3ZSBkb24ndCBjb25mdXNlIHRoZW0uXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBbXVxuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0dmFyIGNoaWxkXG5cdFx0d2hpbGUgKGNoaWxkID0gdGVtcC5maXJzdENoaWxkKSB7XG5cdFx0XHR2bm9kZS5pbnN0YW5jZS5wdXNoKGNoaWxkKVxuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRjcmVhdGVOb2RlcyhmcmFnbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBmcmFnbWVudC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0dmFyIGF0dHJzID0gdm5vZGUuYXR0cnNcblx0XHR2YXIgaXMgPSBhdHRycyAmJiBhdHRycy5pc1xuXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cblx0XHR2YXIgZWxlbWVudCA9IG5zID9cblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50TlMobnMsIHRhZykgOlxuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnQodGFnKVxuXHRcdHZub2RlLmRvbSA9IGVsZW1lbnRcblxuXHRcdGlmIChhdHRycyAhPSBudWxsKSB7XG5cdFx0XHRzZXRBdHRycyh2bm9kZSwgYXR0cnMsIG5zKVxuXHRcdH1cblxuXHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblxuXHRcdGlmICghbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpKSB7XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS50ZXh0ICE9PSBcIlwiKSBlbGVtZW50LnRleHRDb250ZW50ID0gdm5vZGUudGV4dFxuXHRcdFx0XHRlbHNlIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0fVxuXHRcdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdFx0Y3JlYXRlTm9kZXMoZWxlbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIGF0dHJzICE9IG51bGwpIHNldExhdGVTZWxlY3RBdHRycyh2bm9kZSwgYXR0cnMpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKSB7XG5cdFx0dmFyIHNlbnRpbmVsXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcudmlldyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IE9iamVjdC5jcmVhdGUodm5vZGUudGFnKVxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS5zdGF0ZS52aWV3XG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuXG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSB2b2lkIDBcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUudGFnXG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuXG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHRcdHZub2RlLnN0YXRlID0gKHZub2RlLnRhZy5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUudGFnLnByb3RvdHlwZS52aWV3ID09PSBcImZ1bmN0aW9uXCIpID8gbmV3IHZub2RlLnRhZyh2bm9kZSkgOiB2bm9kZS50YWcodm5vZGUpXG5cdFx0fVxuXHRcdGluaXRMaWZlY3ljbGUodm5vZGUuc3RhdGUsIHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSBudWxsXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHRpbml0Q29tcG9uZW50KHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLmluc3RhbmNlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0dm5vZGUuZG9tID0gdm5vZGUuaW5zdGFuY2UuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gdm5vZGUuZG9tICE9IG51bGwgPyB2bm9kZS5pbnN0YW5jZS5kb21TaXplIDogMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0fVxuXHR9XG5cblx0Ly91cGRhdGVcblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudHxGcmFnbWVudH0gcGFyZW50IC0gdGhlIHBhcmVudCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Vm5vZGVbXSB8IG51bGx9IG9sZCAtIHRoZSBsaXN0IG9mIHZub2RlcyBvZiB0aGUgbGFzdCBgcmVuZGVyKClgIGNhbGwgZm9yXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgcGFydCBvZiB0aGUgdHJlZVxuXHQgKiBAcGFyYW0ge1Zub2RlW10gfCBudWxsfSB2bm9kZXMgLSBhcyBhYm92ZSwgYnV0IGZvciB0aGUgY3VycmVudCBgcmVuZGVyKClgIGNhbGwuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gaG9va3MgLSBhbiBhY2N1bXVsYXRvciBvZiBwb3N0LXJlbmRlciBob29rcyAob25jcmVhdGUvb251cGRhdGUpXG5cdCAqIEBwYXJhbSB7RWxlbWVudCB8IG51bGx9IG5leHRTaWJsaW5nIC0gdGhlIG5leHQgRE9NIG5vZGUgaWYgd2UncmUgZGVhbGluZyB3aXRoIGFcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCB0aGF0IGlzIG5vdCB0aGUgbGFzdCBpdGVtIGluIGl0c1xuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFxuXHQgKiBAcGFyYW0geydzdmcnIHwgJ21hdGgnIHwgU3RyaW5nIHwgbnVsbH0gbnMpIC0gdGhlIGN1cnJlbnQgWE1MIG5hbWVzcGFjZSwgaWYgYW55XG5cdCAqIEByZXR1cm5zIHZvaWRcblx0ICovXG5cdC8vIFRoaXMgZnVuY3Rpb24gZGlmZnMgYW5kIHBhdGNoZXMgbGlzdHMgb2Ygdm5vZGVzLCBib3RoIGtleWVkIGFuZCB1bmtleWVkLlxuXHQvL1xuXHQvLyBXZSB3aWxsOlxuXHQvL1xuXHQvLyAxLiBkZXNjcmliZSBpdHMgZ2VuZXJhbCBzdHJ1Y3R1cmVcblx0Ly8gMi4gZm9jdXMgb24gdGhlIGRpZmYgYWxnb3JpdGhtIG9wdGltaXphdGlvbnNcblx0Ly8gMy4gZGlzY3VzcyBET00gbm9kZSBvcGVyYXRpb25zLlxuXG5cdC8vICMjIE92ZXJ2aWV3OlxuXHQvL1xuXHQvLyBUaGUgdXBkYXRlTm9kZXMoKSBmdW5jdGlvbjpcblx0Ly8gLSBkZWFscyB3aXRoIHRyaXZpYWwgY2FzZXNcblx0Ly8gLSBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGxpc3RzIGFyZSBrZXllZCBvciB1bmtleWVkIGJhc2VkIG9uIHRoZSBmaXJzdCBub24tbnVsbCBub2RlXG5cdC8vICAgb2YgZWFjaCBsaXN0LlxuXHQvLyAtIGRpZmZzIHRoZW0gYW5kIHBhdGNoZXMgdGhlIERPTSBpZiBuZWVkZWQgKHRoYXQncyB0aGUgYnJ1bnQgb2YgdGhlIGNvZGUpXG5cdC8vIC0gbWFuYWdlcyB0aGUgbGVmdG92ZXJzOiBhZnRlciBkaWZmaW5nLCBhcmUgdGhlcmU6XG5cdC8vICAgLSBvbGQgbm9kZXMgbGVmdCB0byByZW1vdmU/XG5cdC8vIFx0IC0gbmV3IG5vZGVzIHRvIGluc2VydD9cblx0Ly8gXHQgZGVhbCB3aXRoIHRoZW0hXG5cdC8vXG5cdC8vIFRoZSBsaXN0cyBhcmUgb25seSBpdGVyYXRlZCBvdmVyIG9uY2UsIHdpdGggYW4gZXhjZXB0aW9uIGZvciB0aGUgbm9kZXMgaW4gYG9sZGAgdGhhdFxuXHQvLyBhcmUgdmlzaXRlZCBpbiB0aGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgYW5kIGluIHRoZSBgcmVtb3ZlTm9kZXNgIGxvb3AuXG5cblx0Ly8gIyMgRGlmZmluZ1xuXHQvL1xuXHQvLyBSZWFkaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NhbHZvaWQvaXZpL2Jsb2IvZGRjMDlkMDZhYmFlZjQ1MjQ4ZTYxMzNmNzA0MGQwMGQzYzZiZTg1My9wYWNrYWdlcy9pdmkvc3JjL3Zkb20vaW1wbGVtZW50YXRpb24udHMjTDYxNy1MODM3XG5cdC8vIG1heSBiZSBnb29kIGZvciBjb250ZXh0IG9uIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS1iYXNlZCBsb2dpYyBmb3IgbW92aW5nIG5vZGVzLlxuXHQvL1xuXHQvLyBJbiBvcmRlciB0byBkaWZmIGtleWVkIGxpc3RzLCBvbmUgaGFzIHRvXG5cdC8vXG5cdC8vIDEpIG1hdGNoIG5vZGVzIGluIGJvdGggbGlzdHMsIHBlciBrZXksIGFuZCB1cGRhdGUgdGhlbSBhY2NvcmRpbmdseVxuXHQvLyAyKSBjcmVhdGUgdGhlIG5vZGVzIHByZXNlbnQgaW4gdGhlIG5ldyBsaXN0LCBidXQgYWJzZW50IGluIHRoZSBvbGQgb25lXG5cdC8vIDMpIHJlbW92ZSB0aGUgbm9kZXMgcHJlc2VudCBpbiB0aGUgb2xkIGxpc3QsIGJ1dCBhYnNlbnQgaW4gdGhlIG5ldyBvbmVcblx0Ly8gNCkgZmlndXJlIG91dCB3aGF0IG5vZGVzIGluIDEpIHRvIG1vdmUgaW4gb3JkZXIgdG8gbWluaW1pemUgdGhlIERPTSBvcGVyYXRpb25zLlxuXHQvL1xuXHQvLyBUbyBhY2hpZXZlIDEpIG9uZSBjYW4gY3JlYXRlIGEgZGljdGlvbmFyeSBvZiBrZXlzID0+IGluZGV4IChmb3IgdGhlIG9sZCBsaXN0KSwgdGhlbiBpdGVyYXRlXG5cdC8vIG92ZXIgdGhlIG5ldyBsaXN0IGFuZCBmb3IgZWFjaCBuZXcgdm5vZGUsIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdm5vZGUgaW4gdGhlIG9sZCBsaXN0IHVzaW5nXG5cdC8vIHRoZSBtYXAuXG5cdC8vIDIpIGlzIGFjaGlldmVkIGluIHRoZSBzYW1lIHN0ZXA6IGlmIGEgbmV3IG5vZGUgaGFzIG5vIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIG1hcCwgaXQgaXMgbmV3XG5cdC8vIGFuZCBtdXN0IGJlIGNyZWF0ZWQuXG5cdC8vIEZvciB0aGUgcmVtb3ZhbHMsIHdlIGFjdHVhbGx5IHJlbW92ZSB0aGUgbm9kZXMgdGhhdCBoYXZlIGJlZW4gdXBkYXRlZCBmcm9tIHRoZSBvbGQgbGlzdC5cblx0Ly8gVGhlIG5vZGVzIHRoYXQgcmVtYWluIGluIHRoYXQgbGlzdCBhZnRlciAxKSBhbmQgMikgaGF2ZSBiZWVuIHBlcmZvcm1lZCBjYW4gYmUgc2FmZWx5IHJlbW92ZWQuXG5cdC8vIFRoZSBmb3VydGggc3RlcCBpcyBhIGJpdCBtb3JlIGNvbXBsZXggYW5kIHJlbGllcyBvbiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIChMSVMpXG5cdC8vIGFsZ29yaXRobS5cblx0Ly9cblx0Ly8gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBpcyB0aGUgbGlzdCBvZiBub2RlcyB0aGF0IGNhbiByZW1haW4gaW4gcGxhY2UuIEltYWdpbmUgZ29pbmdcblx0Ly8gZnJvbSBgMSwyLDMsNCw1YCB0byBgNCw1LDEsMiwzYCB3aGVyZSB0aGUgbnVtYmVycyBhcmUgbm90IG5lY2Vzc2FyaWx5IHRoZSBrZXlzLCBidXQgdGhlIGluZGljZXNcblx0Ly8gY29ycmVzcG9uZGluZyB0byB0aGUga2V5ZWQgbm9kZXMgaW4gdGhlIG9sZCBsaXN0IChrZXllZCBub2RlcyBgZSxkLGMsYixhYCA9PiBgYixhLGUsZCxjYCB3b3VsZFxuXHQvLyAgbWF0Y2ggdGhlIGFib3ZlIGxpc3RzLCBmb3IgZXhhbXBsZSkuXG5cdC8vXG5cdC8vIEluIHRoZXJlIGFyZSB0d28gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZXM6IGA0LDVgIGFuZCBgMSwyLDNgLCB0aGUgbGF0dGVyIGJlaW5nIHRoZSBsb25nZXN0LiBXZVxuXHQvLyBjYW4gdXBkYXRlIHRob3NlIG5vZGVzIHdpdGhvdXQgbW92aW5nIHRoZW0sIGFuZCBvbmx5IGNhbGwgYGluc2VydE5vZGVgIG9uIGA0YCBhbmQgYDVgLlxuXHQvL1xuXHQvLyBAbG9jYWx2b2lkIGFkYXB0ZWQgdGhlIGFsZ28gdG8gYWxzbyBzdXBwb3J0IG5vZGUgZGVsZXRpb25zIGFuZCBpbnNlcnRpb25zICh0aGUgYGxpc2AgaXMgYWN0dWFsbHlcblx0Ly8gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSAqb2Ygb2xkIG5vZGVzIHN0aWxsIHByZXNlbnQgaW4gdGhlIG5ldyBsaXN0KikuXG5cdC8vXG5cdC8vIEl0IGlzIGEgZ2VuZXJhbCBhbGdvcml0aG0gdGhhdCBpcyBmaXJlcHJvb2YgaW4gYWxsIGNpcmN1bXN0YW5jZXMsIGJ1dCBpdCByZXF1aXJlcyB0aGUgYWxsb2NhdGlvblxuXHQvLyBhbmQgdGhlIGNvbnN0cnVjdGlvbiBvZiBhIGBrZXkgPT4gb2xkSW5kZXhgIG1hcCwgYW5kIHRocmVlIGFycmF5cyAob25lIHdpdGggYG5ld0luZGV4ID0+IG9sZEluZGV4YCxcblx0Ly8gdGhlIGBMSVNgIGFuZCBhIHRlbXBvcmFyeSBvbmUgdG8gY3JlYXRlIHRoZSBMSVMpLlxuXHQvL1xuXHQvLyBTbyB3ZSBjaGVhdCB3aGVyZSB3ZSBjYW46IGlmIHRoZSB0YWlscyBvZiB0aGUgbGlzdHMgYXJlIGlkZW50aWNhbCwgdGhleSBhcmUgZ3VhcmFudGVlZCB0byBiZSBwYXJ0IG9mXG5cdC8vIHRoZSBMSVMgYW5kIGNhbiBiZSB1cGRhdGVkIHdpdGhvdXQgbW92aW5nIHRoZW0uXG5cdC8vXG5cdC8vIElmIHR3byBub2RlcyBhcmUgc3dhcHBlZCwgdGhleSBhcmUgZ3VhcmFudGVlZCBub3QgdG8gYmUgcGFydCBvZiB0aGUgTElTLCBhbmQgbXVzdCBiZSBtb3ZlZCAod2l0aFxuXHQvLyB0aGUgZXhjZXB0aW9uIG9mIHRoZSBsYXN0IG5vZGUgaWYgdGhlIGxpc3QgaXMgZnVsbHkgcmV2ZXJzZWQpLlxuXHQvL1xuXHQvLyAjIyBGaW5kaW5nIHRoZSBuZXh0IHNpYmxpbmcuXG5cdC8vXG5cdC8vIGB1cGRhdGVOb2RlKClgIGFuZCBgY3JlYXRlTm9kZSgpYCBleHBlY3QgYSBuZXh0U2libGluZyBwYXJhbWV0ZXIgdG8gcGVyZm9ybSBET00gb3BlcmF0aW9ucy5cblx0Ly8gV2hlbiB0aGUgbGlzdCBpcyBiZWluZyB0cmF2ZXJzZWQgdG9wLWRvd24sIGF0IGFueSBpbmRleCwgdGhlIERPTSBub2RlcyB1cCB0byB0aGUgcHJldmlvdXNcblx0Ly8gdm5vZGUgcmVmbGVjdCB0aGUgY29udGVudCBvZiB0aGUgbmV3IGxpc3QsIHdoZXJlYXMgdGhlIHJlc3Qgb2YgdGhlIERPTSBub2RlcyByZWZsZWN0IHRoZSBvbGRcblx0Ly8gbGlzdC4gVGhlIG5leHQgc2libGluZyBtdXN0IGJlIGxvb2tlZCBmb3IgaW4gdGhlIG9sZCBsaXN0IHVzaW5nIGBnZXROZXh0U2libGluZyguLi4gb2xkU3RhcnQgKyAxIC4uLilgLlxuXHQvL1xuXHQvLyBJbiB0aGUgb3RoZXIgc2NlbmFyaW9zIChzd2FwcywgdXB3YXJkcyB0cmF2ZXJzYWwsIG1hcC1iYXNlZCBkaWZmKSxcblx0Ly8gdGhlIG5ldyB2bm9kZXMgbGlzdCBpcyB0cmF2ZXJzZWQgdXB3YXJkcy4gVGhlIERPTSBub2RlcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBsaXN0IHJlZmxlY3QgdGhlXG5cdC8vIGJvdHRvbSBwYXJ0IG9mIHRoZSBuZXcgdm5vZGVzIGxpc3QsIGFuZCB3ZSBjYW4gdXNlIHRoZSBgdi5kb21gICB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgbm9kZVxuXHQvLyBhcyB0aGUgbmV4dCBzaWJsaW5nIChjYWNoZWQgaW4gdGhlIGBuZXh0U2libGluZ2AgdmFyaWFibGUpLlxuXG5cblx0Ly8gIyMgRE9NIG5vZGUgbW92ZXNcblx0Ly9cblx0Ly8gSW4gbW9zdCBzY2VuYXJpb3MgYHVwZGF0ZU5vZGUoKWAgYW5kIGBjcmVhdGVOb2RlKClgIHBlcmZvcm0gdGhlIERPTSBvcGVyYXRpb25zLiBIb3dldmVyLFxuXHQvLyB0aGlzIGlzIG5vdCB0aGUgY2FzZSBpZiB0aGUgbm9kZSBtb3ZlZCAoc2Vjb25kIGFuZCBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBhbGdvKS4gV2UgbW92ZVxuXHQvLyB0aGUgb2xkIERPTSBub2RlcyBiZWZvcmUgdXBkYXRlTm9kZSBydW5zIGJlY2F1c2UgaXQgZW5hYmxlcyB1cyB0byB1c2UgdGhlIGNhY2hlZCBgbmV4dFNpYmxpbmdgXG5cdC8vIHZhcmlhYmxlIHJhdGhlciB0aGFuIGZldGNoaW5nIGl0IHVzaW5nIGBnZXROZXh0U2libGluZygpYC5cblx0Ly9cblx0Ly8gVGhlIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGN1cnJlbnRseSBpbnNlcnRzIG5vZGVzIHVuY29uZGl0aW9uYWxseSwgbGVhZGluZyB0byBpc3N1ZXNcblx0Ly8gbGlrZSAjMTc5MSBhbmQgIzE5OTkuIFdlIG5lZWQgdG8gYmUgc21hcnRlciBhYm91dCB0aG9zZSBzaXR1YXRpb25zIHdoZXJlIGFkamFzY2VudCBvbGRcblx0Ly8gbm9kZXMgcmVtYWluIHRvZ2V0aGVyIGluIHRoZSBuZXcgbGlzdCBpbiBhIHdheSB0aGF0IGlzbid0IGNvdmVyZWQgYnkgcGFydHMgb25lIGFuZFxuXHQvLyB0aHJlZSBvZiB0aGUgZGlmZiBhbGdvLlxuXG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLCB2bm9kZXMsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRpZiAob2xkID09PSB2bm9kZXMgfHwgb2xkID09IG51bGwgJiYgdm5vZGVzID09IG51bGwpIHJldHVyblxuXHRcdGVsc2UgaWYgKG9sZCA9PSBudWxsIHx8IG9sZC5sZW5ndGggPT09IDApIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCAwLCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdGVsc2UgaWYgKHZub2RlcyA9PSBudWxsIHx8IHZub2Rlcy5sZW5ndGggPT09IDApIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCAwLCBvbGQubGVuZ3RoKVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGlzT2xkS2V5ZWQgPSBvbGRbMF0gIT0gbnVsbCAmJiBvbGRbMF0ua2V5ICE9IG51bGxcblx0XHRcdHZhciBpc0tleWVkID0gdm5vZGVzWzBdICE9IG51bGwgJiYgdm5vZGVzWzBdLmtleSAhPSBudWxsXG5cdFx0XHR2YXIgc3RhcnQgPSAwLCBvbGRTdGFydCA9IDBcblx0XHRcdGlmICghaXNPbGRLZXllZCkgd2hpbGUgKG9sZFN0YXJ0IDwgb2xkLmxlbmd0aCAmJiBvbGRbb2xkU3RhcnRdID09IG51bGwpIG9sZFN0YXJ0Kytcblx0XHRcdGlmICghaXNLZXllZCkgd2hpbGUgKHN0YXJ0IDwgdm5vZGVzLmxlbmd0aCAmJiB2bm9kZXNbc3RhcnRdID09IG51bGwpIHN0YXJ0Kytcblx0XHRcdGlmIChpc0tleWVkID09PSBudWxsICYmIGlzT2xkS2V5ZWQgPT0gbnVsbCkgcmV0dXJuIC8vIGJvdGggbGlzdHMgYXJlIGZ1bGwgb2YgbnVsbHNcblx0XHRcdGlmIChpc09sZEtleWVkICE9PSBpc0tleWVkKSB7XG5cdFx0XHRcdHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBvbGRTdGFydCwgb2xkLmxlbmd0aClcblx0XHRcdFx0Y3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0fSBlbHNlIGlmICghaXNLZXllZCkge1xuXHRcdFx0XHQvLyBEb24ndCBpbmRleCBwYXN0IHRoZSBlbmQgb2YgZWl0aGVyIGxpc3QgKGNhdXNlcyBkZW9wdHMpLlxuXHRcdFx0XHR2YXIgY29tbW9uTGVuZ3RoID0gb2xkLmxlbmd0aCA8IHZub2Rlcy5sZW5ndGggPyBvbGQubGVuZ3RoIDogdm5vZGVzLmxlbmd0aFxuXHRcdFx0XHQvLyBSZXdpbmQgaWYgbmVjZXNzYXJ5IHRvIHRoZSBmaXJzdCBub24tbnVsbCBpbmRleCBvbiBlaXRoZXIgc2lkZS5cblx0XHRcdFx0Ly8gV2UgY291bGQgYWx0ZXJuYXRpdmVseSBlaXRoZXIgZXhwbGljaXRseSBjcmVhdGUgb3IgcmVtb3ZlIG5vZGVzIHdoZW4gYHN0YXJ0ICE9PSBvbGRTdGFydGBcblx0XHRcdFx0Ly8gYnV0IHRoYXQgd291bGQgYmUgb3B0aW1pemluZyBmb3Igc3BhcnNlIGxpc3RzIHdoaWNoIGFyZSBtb3JlIHJhcmUgdGhhbiBkZW5zZSBvbmVzLlxuXHRcdFx0XHRzdGFydCA9IHN0YXJ0IDwgb2xkU3RhcnQgPyBzdGFydCA6IG9sZFN0YXJ0XG5cdFx0XHRcdGZvciAoOyBzdGFydCA8IGNvbW1vbkxlbmd0aDsgc3RhcnQrKykge1xuXHRcdFx0XHRcdG8gPSBvbGRbc3RhcnRdXG5cdFx0XHRcdFx0diA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0XHRpZiAobyA9PT0gdiB8fCBvID09IG51bGwgJiYgdiA9PSBudWxsKSBjb250aW51ZVxuXHRcdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgZ2V0TmV4dFNpYmxpbmcob2xkLCBzdGFydCArIDEsIG5leHRTaWJsaW5nKSlcblx0XHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIHJlbW92ZU5vZGUocGFyZW50LCBvKVxuXHRcdFx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIHN0YXJ0ICsgMSwgbmV4dFNpYmxpbmcpLCBucylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob2xkLmxlbmd0aCA+IGNvbW1vbkxlbmd0aCkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIHN0YXJ0LCBvbGQubGVuZ3RoKVxuXHRcdFx0XHRpZiAodm5vZGVzLmxlbmd0aCA+IGNvbW1vbkxlbmd0aCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8ga2V5ZWQgZGlmZlxuXHRcdFx0XHR2YXIgb2xkRW5kID0gb2xkLmxlbmd0aCAtIDEsIGVuZCA9IHZub2Rlcy5sZW5ndGggLSAxLCBtYXAsIG8sIHYsIG9lLCB2ZSwgdG9wU2libGluZ1xuXG5cdFx0XHRcdC8vIGJvdHRvbS11cFxuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdG9lID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdFx0aWYgKG9lLmtleSAhPT0gdmUua2V5KSBicmVha1xuXHRcdFx0XHRcdGlmIChvZSAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHRvcC1kb3duXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0byA9IG9sZFtvbGRTdGFydF1cblx0XHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRcdGlmIChvLmtleSAhPT0gdi5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0b2xkU3RhcnQrKywgc3RhcnQrK1xuXHRcdFx0XHRcdGlmIChvICE9PSB2KSB1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG5leHRTaWJsaW5nKSwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc3dhcHMgYW5kIGxpc3QgcmV2ZXJzYWxzXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKHN0YXJ0ID09PSBlbmQpIGJyZWFrXG5cdFx0XHRcdFx0aWYgKG8ua2V5ICE9PSB2ZS5rZXkgfHwgb2Uua2V5ICE9PSB2LmtleSkgYnJlYWtcblx0XHRcdFx0XHR0b3BTaWJsaW5nID0gZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0bW92ZU5vZGVzKHBhcmVudCwgb2UsIHRvcFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG9lICE9PSB2KSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHYsIGhvb2tzLCB0b3BTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAoKytzdGFydCA8PSAtLWVuZCkgbW92ZU5vZGVzKHBhcmVudCwgbywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG8gIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgbywgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdG9sZFN0YXJ0Kys7IG9sZEVuZC0tXG5cdFx0XHRcdFx0b2UgPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdHZlID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0XHRvID0gb2xkW29sZFN0YXJ0XVxuXHRcdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gYm90dG9tIHVwIG9uY2UgYWdhaW5cblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAob2Uua2V5ICE9PSB2ZS5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0aWYgKG9lICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0b2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdFx0b2UgPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdHZlID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RhcnQgPiBlbmQpIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSlcblx0XHRcdFx0ZWxzZSBpZiAob2xkU3RhcnQgPiBvbGRFbmQpIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kICsgMSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaW5zcGlyZWQgYnkgaXZpIGh0dHBzOi8vZ2l0aHViLmNvbS9pdmlqcy9pdmkvIGJ5IEJvcmlzIEthdWxcblx0XHRcdFx0XHR2YXIgb3JpZ2luYWxOZXh0U2libGluZyA9IG5leHRTaWJsaW5nLCB2bm9kZXNMZW5ndGggPSBlbmQgLSBzdGFydCArIDEsIG9sZEluZGljZXMgPSBuZXcgQXJyYXkodm5vZGVzTGVuZ3RoKSwgbGk9MCwgaT0wLCBwb3MgPSAyMTQ3NDgzNjQ3LCBtYXRjaGVkID0gMCwgbWFwLCBsaXNJbmRpY2VzXG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHZub2Rlc0xlbmd0aDsgaSsrKSBvbGRJbmRpY2VzW2ldID0gLTFcblx0XHRcdFx0XHRmb3IgKGkgPSBlbmQ7IGkgPj0gc3RhcnQ7IGktLSkge1xuXHRcdFx0XHRcdFx0aWYgKG1hcCA9PSBudWxsKSBtYXAgPSBnZXRLZXlNYXAob2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSlcblx0XHRcdFx0XHRcdHZlID0gdm5vZGVzW2ldXG5cdFx0XHRcdFx0XHR2YXIgb2xkSW5kZXggPSBtYXBbdmUua2V5XVxuXHRcdFx0XHRcdFx0aWYgKG9sZEluZGV4ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0cG9zID0gKG9sZEluZGV4IDwgcG9zKSA/IG9sZEluZGV4IDogLTEgLy8gYmVjb21lcyAtMSBpZiBub2RlcyB3ZXJlIHJlLW9yZGVyZWRcblx0XHRcdFx0XHRcdFx0b2xkSW5kaWNlc1tpLXN0YXJ0XSA9IG9sZEluZGV4XG5cdFx0XHRcdFx0XHRcdG9lID0gb2xkW29sZEluZGV4XVxuXHRcdFx0XHRcdFx0XHRvbGRbb2xkSW5kZXhdID0gbnVsbFxuXHRcdFx0XHRcdFx0XHRpZiAob2UgIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQrK1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXh0U2libGluZyA9IG9yaWdpbmFsTmV4dFNpYmxpbmdcblx0XHRcdFx0XHRpZiAobWF0Y2hlZCAhPT0gb2xkRW5kIC0gb2xkU3RhcnQgKyAxKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEpXG5cdFx0XHRcdFx0aWYgKG1hdGNoZWQgPT09IDApIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kICsgMSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChwb3MgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBpbmRpY2VzIG9mIHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZVxuXHRcdFx0XHRcdFx0XHQvLyBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgaW4gdGhlIG9sZEluZGljZXMgbGlzdFxuXHRcdFx0XHRcdFx0XHRsaXNJbmRpY2VzID0gbWFrZUxpc0luZGljZXMob2xkSW5kaWNlcylcblx0XHRcdFx0XHRcdFx0bGkgPSBsaXNJbmRpY2VzLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gZW5kOyBpID49IHN0YXJ0OyBpLS0pIHtcblx0XHRcdFx0XHRcdFx0XHR2ID0gdm5vZGVzW2ldXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9sZEluZGljZXNbaS1zdGFydF0gPT09IC0xKSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChsaXNJbmRpY2VzW2xpXSA9PT0gaSAtIHN0YXJ0KSBsaS0tXG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIG1vdmVOb2RlcyhwYXJlbnQsIHYsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAodi5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2bm9kZXNbaV0uZG9tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IGVuZDsgaSA+PSBzdGFydDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRcdFx0diA9IHZub2Rlc1tpXVxuXHRcdFx0XHRcdFx0XHRcdGlmIChvbGRJbmRpY2VzW2ktc3RhcnRdID09PSAtMSkgY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHYuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdm5vZGVzW2ldLmRvbVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dmFyIG9sZFRhZyA9IG9sZC50YWcsIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmIChvbGRUYWcgPT09IHRhZykge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBvbGQuc3RhdGVcblx0XHRcdHZub2RlLmV2ZW50cyA9IG9sZC5ldmVudHNcblx0XHRcdGlmIChzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkpIHJldHVyblxuXHRcdFx0aWYgKHR5cGVvZiBvbGRUYWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHtcblx0XHRcdFx0XHR1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKG9sZFRhZykge1xuXHRcdFx0XHRcdGNhc2UgXCIjXCI6IHVwZGF0ZVRleHQob2xkLCB2bm9kZSk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIjxcIjogdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5zLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIltcIjogdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKTsgYnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OiB1cGRhdGVFbGVtZW50KG9sZCwgdm5vZGUsIGhvb2tzLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlbW92ZU5vZGUocGFyZW50LCBvbGQpXG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVRleHQob2xkLCB2bm9kZSkge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4udG9TdHJpbmcoKSAhPT0gdm5vZGUuY2hpbGRyZW4udG9TdHJpbmcoKSkge1xuXHRcdFx0b2xkLmRvbS5ub2RlVmFsdWUgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4gIT09IHZub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRyZW1vdmVIVE1MKHBhcmVudCwgb2xkKVxuXHRcdFx0Y3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0XHR2bm9kZS5pbnN0YW5jZSA9IG9sZC5pbnN0YW5jZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHR1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0dmFyIGRvbVNpemUgPSAwLCBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0dm5vZGUuZG9tID0gbnVsbFxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLmRvbSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHZub2RlLmRvbSA9PSBudWxsKSB2bm9kZS5kb20gPSBjaGlsZC5kb21cblx0XHRcdFx0XHRkb21TaXplICs9IGNoaWxkLmRvbVNpemUgfHwgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9tU2l6ZSAhPT0gMSkgdm5vZGUuZG9tU2l6ZSA9IGRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCBob29rcywgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblxuXHRcdGlmICh2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwpIHZub2RlLmF0dHJzID0ge31cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0dm5vZGUuYXR0cnMudmFsdWUgPSB2bm9kZS50ZXh0IC8vRklYTUUgaGFuZGxlIG11bHRpcGxlIGNoaWxkcmVuXG5cdFx0XHRcdHZub2RlLnRleHQgPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9XG5cdFx0dXBkYXRlQXR0cnModm5vZGUsIG9sZC5hdHRycywgdm5vZGUuYXR0cnMsIG5zKVxuXHRcdGlmICghbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpKSB7XG5cdFx0XHRpZiAob2xkLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPT0gXCJcIikge1xuXHRcdFx0XHRpZiAob2xkLnRleHQudG9TdHJpbmcoKSAhPT0gdm5vZGUudGV4dC50b1N0cmluZygpKSBvbGQuZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdm5vZGUudGV4dFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChvbGQudGV4dCAhPSBudWxsKSBvbGQuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBvbGQudGV4dCwgdW5kZWZpbmVkLCBvbGQuZG9tLmZpcnN0Q2hpbGQpXVxuXHRcdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdFx0dXBkYXRlTm9kZXMoZWxlbWVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgaG9va3MsIG51bGwsIG5zKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUoY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS52aWV3LCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHR1cGRhdGVMaWZlY3ljbGUodm5vZGUuc3RhdGUsIHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgdXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdGlmIChvbGQuaW5zdGFuY2UgPT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLmluc3RhbmNlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0ZWxzZSB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLmluc3RhbmNlLCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmluc3RhbmNlLmRvbVNpemVcblx0XHR9XG5cdFx0ZWxzZSBpZiAob2xkLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUocGFyZW50LCBvbGQuaW5zdGFuY2UpXG5cdFx0XHR2bm9kZS5kb20gPSB1bmRlZmluZWRcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGdldEtleU1hcCh2bm9kZXMsIHN0YXJ0LCBlbmQpIHtcblx0XHR2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdGZvciAoOyBzdGFydCA8IGVuZDsgc3RhcnQrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGtleSA9IHZub2RlLmtleVxuXHRcdFx0XHRpZiAoa2V5ICE9IG51bGwpIG1hcFtrZXldID0gc3RhcnRcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG1hcFxuXHR9XG5cdC8vIExpZnRlZCBmcm9tIGl2aSBodHRwczovL2dpdGh1Yi5jb20vaXZpanMvaXZpL1xuXHQvLyB0YWtlcyBhIGxpc3Qgb2YgdW5pcXVlIG51bWJlcnMgKC0xIGlzIHNwZWNpYWwgYW5kIGNhblxuXHQvLyBvY2N1ciBtdWx0aXBsZSB0aW1lcykgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgaW5kaWNlc1xuXHQvLyBvZiB0aGUgaXRlbXMgdGhhdCBhcmUgcGFydCBvZiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nXG5cdC8vIHN1YnNlcXVlY2Vcblx0dmFyIGxpc1RlbXAgPSBbXVxuXHRmdW5jdGlvbiBtYWtlTGlzSW5kaWNlcyhhKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFswXVxuXHRcdHZhciB1ID0gMCwgdiA9IDAsIGkgPSAwXG5cdFx0dmFyIGlsID0gbGlzVGVtcC5sZW5ndGggPSBhLmxlbmd0aFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaWw7IGkrKykgbGlzVGVtcFtpXSA9IGFbaV1cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGlsOyArK2kpIHtcblx0XHRcdGlmIChhW2ldID09PSAtMSkgY29udGludWVcblx0XHRcdHZhciBqID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXVxuXHRcdFx0aWYgKGFbal0gPCBhW2ldKSB7XG5cdFx0XHRcdGxpc1RlbXBbaV0gPSBqXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGkpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHR9XG5cdFx0XHR1ID0gMFxuXHRcdFx0diA9IHJlc3VsdC5sZW5ndGggLSAxXG5cdFx0XHR3aGlsZSAodSA8IHYpIHtcblx0XHRcdFx0Ly8gRmFzdCBpbnRlZ2VyIGF2ZXJhZ2Ugd2l0aG91dCBvdmVyZmxvdy5cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0dmFyIGMgPSAodSA+Pj4gMSkgKyAodiA+Pj4gMSkgKyAodSAmIHYgJiAxKVxuXHRcdFx0XHRpZiAoYVtyZXN1bHRbY11dIDwgYVtpXSkge1xuXHRcdFx0XHRcdHUgPSBjICsgMVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHYgPSBjXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChhW2ldIDwgYVtyZXN1bHRbdV1dKSB7XG5cdFx0XHRcdGlmICh1ID4gMCkgbGlzVGVtcFtpXSA9IHJlc3VsdFt1IC0gMV1cblx0XHRcdFx0cmVzdWx0W3VdID0gaVxuXHRcdFx0fVxuXHRcdH1cblx0XHR1ID0gcmVzdWx0Lmxlbmd0aFxuXHRcdHYgPSByZXN1bHRbdSAtIDFdXG5cdFx0d2hpbGUgKHUtLSA+IDApIHtcblx0XHRcdHJlc3VsdFt1XSA9IHZcblx0XHRcdHYgPSBsaXNUZW1wW3ZdXG5cdFx0fVxuXHRcdGxpc1RlbXAubGVuZ3RoID0gMFxuXHRcdHJldHVybiByZXN1bHRcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKHZub2RlcywgaSwgbmV4dFNpYmxpbmcpIHtcblx0XHRmb3IgKDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHZub2Rlc1tpXSAhPSBudWxsICYmIHZub2Rlc1tpXS5kb20gIT0gbnVsbCkgcmV0dXJuIHZub2Rlc1tpXS5kb21cblx0XHR9XG5cdFx0cmV0dXJuIG5leHRTaWJsaW5nXG5cdH1cblxuXHQvLyBUaGlzIGNvdmVycyBhIHJlYWxseSBzcGVjaWZpYyBlZGdlIGNhc2U6XG5cdC8vIC0gUGFyZW50IG5vZGUgaXMga2V5ZWQgYW5kIGNvbnRhaW5zIGNoaWxkXG5cdC8vIC0gQ2hpbGQgaXMgcmVtb3ZlZCwgcmV0dXJucyB1bnJlc29sdmVkIHByb21pc2UgaW4gYG9uYmVmb3JlcmVtb3ZlYFxuXHQvLyAtIFBhcmVudCBub2RlIGlzIG1vdmVkIGluIGtleWVkIGRpZmZcblx0Ly8gLSBSZW1haW5pbmcgY2hpbGRyZW4gc3RpbGwgbmVlZCBtb3ZlZCBhcHByb3ByaWF0ZWx5XG5cdC8vXG5cdC8vIElkZWFsbHksIEknZCB0cmFjayByZW1vdmVkIG5vZGVzIGFzIHdlbGwsIGJ1dCB0aGF0IGludHJvZHVjZXMgYSBsb3QgbW9yZVxuXHQvLyBjb21wbGV4aXR5IGFuZCBJJ20gbm90IGV4YWN0bHkgaW50ZXJlc3RlZCBpbiBkb2luZyB0aGF0LlxuXHRmdW5jdGlvbiBtb3ZlTm9kZXMocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgZnJhZyA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0bW92ZUNoaWxkVG9GcmFnKHBhcmVudCwgZnJhZywgdm5vZGUpXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWcsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIG1vdmVDaGlsZFRvRnJhZyhwYXJlbnQsIGZyYWcsIHZub2RlKSB7XG5cdFx0Ly8gRG9kZ2UgdGhlIHJlY3Vyc2lvbiBvdmVyaGVhZCBpbiBhIGZldyBvZiB0aGUgbW9zdCBjb21tb24gY2FzZXMuXG5cdFx0d2hpbGUgKHZub2RlLmRvbSAhPSBudWxsICYmIHZub2RlLmRvbS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHZub2RlID0gdm5vZGUuaW5zdGFuY2Vcblx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5pbnN0YW5jZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQodm5vZGUuaW5zdGFuY2VbaV0pXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodm5vZGUudGFnICE9PSBcIltcIikge1xuXHRcdFx0XHQvLyBEb24ndCByZWN1cnNlIGZvciB0ZXh0IG5vZGVzICpvciogZWxlbWVudHMsIGp1c3QgZnJhZ21lbnRzXG5cdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQodm5vZGUuZG9tKVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0dm5vZGUgPSB2bm9kZS5jaGlsZHJlblswXVxuXHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXVxuXHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSBtb3ZlQ2hpbGRUb0ZyYWcocGFyZW50LCBmcmFnLCBjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpbnNlcnROb2RlKHBhcmVudCwgZG9tLCBuZXh0U2libGluZykge1xuXHRcdGlmIChuZXh0U2libGluZyAhPSBudWxsKSBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvbSwgbmV4dFNpYmxpbmcpXG5cdFx0ZWxzZSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9tKVxuXHR9XG5cblx0ZnVuY3Rpb24gbWF5YmVTZXRDb250ZW50RWRpdGFibGUodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuYXR0cnMgPT0gbnVsbCB8fCAoXG5cdFx0XHR2bm9kZS5hdHRycy5jb250ZW50ZWRpdGFibGUgPT0gbnVsbCAmJiAvLyBhdHRyaWJ1dGVcblx0XHRcdHZub2RlLmF0dHJzLmNvbnRlbnRFZGl0YWJsZSA9PSBudWxsIC8vIHByb3BlcnR5XG5cdFx0KSkgcmV0dXJuIGZhbHNlXG5cdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIjxcIikge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHRcdFx0aWYgKHZub2RlLmRvbS5pbm5lckhUTUwgIT09IGNvbnRlbnQpIHZub2RlLmRvbS5pbm5lckhUTUwgPSBjb250ZW50XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHZub2RlLnRleHQgIT0gbnVsbCB8fCBjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm9kZSBvZiBhIGNvbnRlbnRlZGl0YWJsZSBtdXN0IGJlIHRydXN0ZWRcIilcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cblx0Ly9yZW1vdmVcblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQpIHtcblx0XHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgcmVtb3ZlTm9kZShwYXJlbnQsIHZub2RlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlKHBhcmVudCwgdm5vZGUpIHtcblx0XHR2YXIgbWFzayA9IDBcblx0XHR2YXIgb3JpZ2luYWwgPSB2bm9kZS5zdGF0ZVxuXHRcdHZhciBzdGF0ZVJlc3VsdCwgYXR0cnNSZXN1bHRcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25iZWZvcmVyZW1vdmUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdG1hc2sgPSAxXG5cdFx0XHRcdHN0YXRlUmVzdWx0ID0gcmVzdWx0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdG1hc2sgfD0gMlxuXHRcdFx0XHRhdHRyc1Jlc3VsdCA9IHJlc3VsdFxuXHRcdFx0fVxuXHRcdH1cblx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblxuXHRcdC8vIElmIHdlIGNhbiwgdHJ5IHRvIGZhc3QtcGF0aCBpdCBhbmQgYXZvaWQgYWxsIHRoZSBvdmVyaGVhZCBvZiBhd2FpdGluZ1xuXHRcdGlmICghbWFzaykge1xuXHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRyZW1vdmVDaGlsZChwYXJlbnQsIHZub2RlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc3RhdGVSZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgbmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRcdGlmIChtYXNrICYgMSkgeyBtYXNrICY9IDI7IGlmICghbWFzaykgcmVhbGx5UmVtb3ZlKCkgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXRlUmVzdWx0LnRoZW4obmV4dCwgbmV4dClcblx0XHRcdH1cblx0XHRcdGlmIChhdHRyc1Jlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdFx0aWYgKG1hc2sgJiAyKSB7IG1hc2sgJj0gMTsgaWYgKCFtYXNrKSByZWFsbHlSZW1vdmUoKSB9XG5cdFx0XHRcdH1cblx0XHRcdFx0YXR0cnNSZXN1bHQudGhlbihuZXh0LCBuZXh0KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJlYWxseVJlbW92ZSgpIHtcblx0XHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRyZW1vdmVDaGlsZChwYXJlbnQsIHZub2RlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVIVE1MKHBhcmVudCwgdm5vZGUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmluc3RhbmNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodm5vZGUuaW5zdGFuY2VbaV0pXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudCwgdm5vZGUpIHtcblx0XHQvLyBEb2RnZSB0aGUgcmVjdXJzaW9uIG92ZXJoZWFkIGluIGEgZmV3IG9mIHRoZSBtb3N0IGNvbW1vbiBjYXNlcy5cblx0XHR3aGlsZSAodm5vZGUuZG9tICE9IG51bGwgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09IHBhcmVudCkge1xuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0dm5vZGUgPSB2bm9kZS5pbnN0YW5jZVxuXHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdH0gZWxzZSBpZiAodm5vZGUudGFnID09PSBcIjxcIikge1xuXHRcdFx0XHRyZW1vdmVIVE1MKHBhcmVudCwgdm5vZGUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodm5vZGUudGFnICE9PSBcIltcIikge1xuXHRcdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZCh2bm9kZS5kb20pXG5cdFx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHZub2RlLmNoaWxkcmVuKSkgYnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dm5vZGUgPSB2bm9kZS5jaGlsZHJlblswXVxuXHRcdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgcmVtb3ZlQ2hpbGQocGFyZW50LCBjaGlsZClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG9ucmVtb3ZlKHZub2RlKSB7XG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25yZW1vdmUsIHZub2RlKVxuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbnJlbW92ZSwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSBvbnJlbW92ZSh2bm9kZS5pbnN0YW5jZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgb25yZW1vdmUoY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvL2F0dHJzXG5cdGZ1bmN0aW9uIHNldEF0dHJzKHZub2RlLCBhdHRycywgbnMpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdHNldEF0dHIodm5vZGUsIGtleSwgbnVsbCwgYXR0cnNba2V5XSwgbnMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHIodm5vZGUsIGtleSwgb2xkLCB2YWx1ZSwgbnMpIHtcblx0XHRpZiAoa2V5ID09PSBcImtleVwiIHx8IGtleSA9PT0gXCJpc1wiIHx8IHZhbHVlID09IG51bGwgfHwgaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSB8fCAob2xkID09PSB2YWx1ZSAmJiAhaXNGb3JtQXR0cmlidXRlKHZub2RlLCBrZXkpKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVyblxuXHRcdGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIpIHJldHVybiB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB2YWx1ZSlcblx0XHRpZiAoa2V5LnNsaWNlKDAsIDYpID09PSBcInhsaW5rOlwiKSB2bm9kZS5kb20uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGtleS5zbGljZSg2KSwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKHZub2RlLmRvbSwgb2xkLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChoYXNQcm9wZXJ0eUtleSh2bm9kZSwga2V5LCBucykpIHtcblx0XHRcdGlmIChrZXkgPT09IFwidmFsdWVcIikge1xuXHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBjb2VyY2lvbiBpZiB3ZSdyZSBhY3R1YWxseSBnb2luZyB0byBjaGVjayB0aGUgdmFsdWUuXG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uICovXG5cdFx0XHRcdC8vc2V0dGluZyBpbnB1dFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSBieSB0eXBpbmcgb24gZm9jdXNlZCBlbGVtZW50IG1vdmVzIGN1cnNvciB0byBlbmQgaW4gQ2hyb21lXG5cdFx0XHRcdGlmICgodm5vZGUudGFnID09PSBcImlucHV0XCIgfHwgdm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gXCJcIiArIHZhbHVlICYmIHZub2RlLmRvbSA9PT0gYWN0aXZlRWxlbWVudCgpKSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIHNlbGVjdFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUpIHJldHVyblxuXHRcdFx0XHQvL3NldHRpbmcgb3B0aW9uW3ZhbHVlXSB0byBzYW1lIHZhbHVlIHdoaWxlIGhhdmluZyBzZWxlY3Qgb3BlbiBibGlua3Mgc2VsZWN0IGRyb3Bkb3duIGluIENocm9tZVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcIm9wdGlvblwiICYmIG9sZCAhPT0gbnVsbCAmJiB2bm9kZS5kb20udmFsdWUgPT09IFwiXCIgKyB2YWx1ZSkgcmV0dXJuXG5cdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8taW1wbGljaXQtY29lcmNpb24gKi9cblx0XHRcdH1cblx0XHRcdC8vIElmIHlvdSBhc3NpZ24gYW4gaW5wdXQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yIHdpbGwgb2NjdXIuXG5cdFx0XHRpZiAodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5ID09PSBcInR5cGVcIikgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuXHRcdFx0ZWxzZSB2bm9kZS5kb21ba2V5XSA9IHZhbHVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSkgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShrZXksIFwiXCIpXG5cdFx0XHRcdGVsc2Ugdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5ID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5LCB2YWx1ZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlQXR0cih2bm9kZSwga2V5LCBvbGQsIG5zKSB7XG5cdFx0aWYgKGtleSA9PT0gXCJrZXlcIiB8fCBrZXkgPT09IFwiaXNcIiB8fCBvbGQgPT0gbnVsbCB8fCBpc0xpZmVjeWNsZU1ldGhvZChrZXkpKSByZXR1cm5cblx0XHRpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiICYmICFpc0xpZmVjeWNsZU1ldGhvZChrZXkpKSB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB1bmRlZmluZWQpXG5cdFx0ZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHVwZGF0ZVN0eWxlKHZub2RlLmRvbSwgb2xkLCBudWxsKVxuXHRcdGVsc2UgaWYgKFxuXHRcdFx0aGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpXG5cdFx0XHQmJiBrZXkgIT09IFwiY2xhc3NOYW1lXCJcblx0XHRcdCYmICEoa2V5ID09PSBcInZhbHVlXCIgJiYgKFxuXHRcdFx0XHR2bm9kZS50YWcgPT09IFwib3B0aW9uXCJcblx0XHRcdFx0fHwgdm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKVxuXHRcdFx0KSlcblx0XHRcdCYmICEodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5ID09PSBcInR5cGVcIilcblx0XHQpIHtcblx0XHRcdHZub2RlLmRvbVtrZXldID0gbnVsbFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbnNMYXN0SW5kZXggPSBrZXkuaW5kZXhPZihcIjpcIilcblx0XHRcdGlmIChuc0xhc3RJbmRleCAhPT0gLTEpIGtleSA9IGtleS5zbGljZShuc0xhc3RJbmRleCArIDEpXG5cdFx0XHRpZiAob2xkICE9PSBmYWxzZSkgdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXkpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldExhdGVTZWxlY3RBdHRycyh2bm9kZSwgYXR0cnMpIHtcblx0XHRpZiAoXCJ2YWx1ZVwiIGluIGF0dHJzKSB7XG5cdFx0XHRpZihhdHRycy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggIT09IC0xKSB2bm9kZS5kb20udmFsdWUgPSBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbm9ybWFsaXplZCA9IFwiXCIgKyBhdHRycy52YWx1ZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0XHRcdGlmICh2bm9kZS5kb20udmFsdWUgIT09IG5vcm1hbGl6ZWQgfHwgdm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdFx0dm5vZGUuZG9tLnZhbHVlID0gbm9ybWFsaXplZFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcInNlbGVjdGVkSW5kZXhcIiBpbiBhdHRycykgc2V0QXR0cih2bm9kZSwgXCJzZWxlY3RlZEluZGV4XCIsIG51bGwsIGF0dHJzLnNlbGVjdGVkSW5kZXgsIHVuZGVmaW5lZClcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBdHRycyh2bm9kZSwgb2xkLCBhdHRycywgbnMpIHtcblx0XHRpZiAoYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRcdHNldEF0dHIodm5vZGUsIGtleSwgb2xkICYmIG9sZFtrZXldLCBhdHRyc1trZXldLCBucylcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHZhbFxuXHRcdGlmIChvbGQgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9sZCkge1xuXHRcdFx0XHRpZiAoKCh2YWwgPSBvbGRba2V5XSkgIT0gbnVsbCkgJiYgKGF0dHJzID09IG51bGwgfHwgYXR0cnNba2V5XSA9PSBudWxsKSkge1xuXHRcdFx0XHRcdHJlbW92ZUF0dHIodm5vZGUsIGtleSwgdmFsLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJ2YWx1ZVwiIHx8IGF0dHIgPT09IFwiY2hlY2tlZFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRJbmRleFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRcIiAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKSB8fCB2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09ICRkb2MuYWN0aXZlRWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGlzTGlmZWN5Y2xlTWV0aG9kKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJvbmluaXRcIiB8fCBhdHRyID09PSBcIm9uY3JlYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnVwZGF0ZVwiIHx8IGF0dHIgPT09IFwib25yZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JlcmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXVwZGF0ZVwiXG5cdH1cblx0ZnVuY3Rpb24gaGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpIHtcblx0XHQvLyBGaWx0ZXIgb3V0IG5hbWVzcGFjZWQga2V5c1xuXHRcdHJldHVybiBucyA9PT0gdW5kZWZpbmVkICYmIChcblx0XHRcdC8vIElmIGl0J3MgYSBjdXN0b20gZWxlbWVudCwganVzdCBrZWVwIGl0LlxuXHRcdFx0dm5vZGUudGFnLmluZGV4T2YoXCItXCIpID4gLTEgfHwgdm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5pcyB8fFxuXHRcdFx0Ly8gSWYgaXQncyBhIG5vcm1hbCBlbGVtZW50LCBsZXQncyB0cnkgdG8gYXZvaWQgYSBmZXcgYnJvd3NlciBidWdzLlxuXHRcdFx0a2V5ICE9PSBcImhyZWZcIiAmJiBrZXkgIT09IFwibGlzdFwiICYmIGtleSAhPT0gXCJmb3JtXCIgJiYga2V5ICE9PSBcIndpZHRoXCIgJiYga2V5ICE9PSBcImhlaWdodFwiLy8gJiYga2V5ICE9PSBcInR5cGVcIlxuXHRcdFx0Ly8gRGVmZXIgdGhlIHByb3BlcnR5IGNoZWNrIHVudGlsICphZnRlciogd2UgY2hlY2sgZXZlcnl0aGluZy5cblx0XHQpICYmIGtleSBpbiB2bm9kZS5kb21cblx0fVxuXG5cdC8vc3R5bGVcblx0dmFyIHVwcGVyY2FzZVJlZ2V4ID0gL1tBLVpdL2dcblx0ZnVuY3Rpb24gdG9Mb3dlckNhc2UoY2FwaXRhbCkgeyByZXR1cm4gXCItXCIgKyBjYXBpdGFsLnRvTG93ZXJDYXNlKCkgfVxuXHRmdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG5cdFx0cmV0dXJuIGtleVswXSA9PT0gXCItXCIgJiYga2V5WzFdID09PSBcIi1cIiA/IGtleSA6XG5cdFx0XHRrZXkgPT09IFwiY3NzRmxvYXRcIiA/IFwiZmxvYXRcIiA6XG5cdFx0XHRcdGtleS5yZXBsYWNlKHVwcGVyY2FzZVJlZ2V4LCB0b0xvd2VyQ2FzZSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHN0eWxlKSB7XG5cdFx0aWYgKG9sZCA9PT0gc3R5bGUpIHtcblx0XHRcdC8vIFN0eWxlcyBhcmUgZXF1aXZhbGVudCwgZG8gbm90aGluZy5cblx0XHR9IGVsc2UgaWYgKHN0eWxlID09IG51bGwpIHtcblx0XHRcdC8vIE5ldyBzdHlsZSBpcyBtaXNzaW5nLCBqdXN0IGNsZWFyIGl0LlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHN0eWxlICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHQvLyBOZXcgc3R5bGUgaXMgYSBzdHJpbmcsIGxldCBlbmdpbmUgZGVhbCB3aXRoIHBhdGNoaW5nLlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcblx0XHR9IGVsc2UgaWYgKG9sZCA9PSBudWxsIHx8IHR5cGVvZiBvbGQgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdC8vIGBvbGRgIGlzIG1pc3Npbmcgb3IgYSBzdHJpbmcsIGBzdHlsZWAgaXMgYW4gb2JqZWN0LlxuXHRcdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdFx0Ly8gQWRkIG5ldyBzdHlsZSBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gc3R5bGVba2V5XVxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSwgU3RyaW5nKHZhbHVlKSlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQm90aCBvbGQgJiBuZXcgYXJlIChkaWZmZXJlbnQpIG9iamVjdHMuXG5cdFx0XHQvLyBVcGRhdGUgc3R5bGUgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZFxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlW2tleV1cblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gU3RyaW5nKHZhbHVlKSkgIT09IFN0cmluZyhvbGRba2V5XSkpIHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KG5vcm1hbGl6ZUtleShrZXkpLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3Rcblx0XHRcdGZvciAodmFyIGtleSBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKG9sZFtrZXldICE9IG51bGwgJiYgc3R5bGVba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEhlcmUncyBhbiBleHBsYW5hdGlvbiBvZiBob3cgdGhpcyB3b3Jrczpcblx0Ly8gMS4gVGhlIGV2ZW50IG5hbWVzIGFyZSBhbHdheXMgKGJ5IGRlc2lnbikgcHJlZml4ZWQgYnkgYG9uYC5cblx0Ly8gMi4gVGhlIEV2ZW50TGlzdGVuZXIgaW50ZXJmYWNlIGFjY2VwdHMgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0XG5cdC8vICAgIHdpdGggYSBgaGFuZGxlRXZlbnRgIG1ldGhvZC5cblx0Ly8gMy4gVGhlIG9iamVjdCBkb2VzIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLCB0byBhdm9pZFxuXHQvLyAgICBhbnkgcG90ZW50aWFsIGludGVyZmVyZW5jZSB3aXRoIHRoYXQgKGUuZy4gc2V0dGVycykuXG5cdC8vIDQuIFRoZSBldmVudCBuYW1lIGlzIHJlbWFwcGVkIHRvIHRoZSBoYW5kbGVyIGJlZm9yZSBjYWxsaW5nIGl0LlxuXHQvLyA1LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYGV2LnRhcmdldCA9PT0gdGhpc2AuIFdlIHJlcGxpY2F0ZVxuXHQvLyAgICB0aGF0IGJlbG93LlxuXHQvLyA2LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYHJldHVybiBmYWxzZWAgcHJldmVudHMgdGhlIGRlZmF1bHRcblx0Ly8gICAgYWN0aW9uIGFuZCBzdG9wcyBldmVudCBwcm9wYWdhdGlvbi4gV2UgcmVwbGljYXRlIHRoYXQgYmVsb3cuXG5cdGZ1bmN0aW9uIEV2ZW50RGljdCgpIHtcblx0XHQvLyBTYXZlIHRoaXMsIHNvIHRoZSBjdXJyZW50IHJlZHJhdyBpcyBjb3JyZWN0bHkgdHJhY2tlZC5cblx0XHR0aGlzLl8gPSBjdXJyZW50UmVkcmF3XG5cdH1cblx0RXZlbnREaWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0RXZlbnREaWN0LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldikge1xuXHRcdHZhciBoYW5kbGVyID0gdGhpc1tcIm9uXCIgKyBldi50eXBlXVxuXHRcdHZhciByZXN1bHRcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikgcmVzdWx0ID0gaGFuZGxlci5jYWxsKGV2LmN1cnJlbnRUYXJnZXQsIGV2KVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIGhhbmRsZXIuaGFuZGxlRXZlbnQoZXYpXG5cdFx0aWYgKHRoaXMuXyAmJiBldi5yZWRyYXcgIT09IGZhbHNlKSAoMCwgdGhpcy5fKSgpXG5cdFx0aWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0fVxuXHR9XG5cblx0Ly9ldmVudFxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudCh2bm9kZSwga2V5LCB2YWx1ZSkge1xuXHRcdGlmICh2bm9kZS5ldmVudHMgIT0gbnVsbCkge1xuXHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldID09PSB2YWx1ZSkgcmV0dXJuXG5cdFx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSkge1xuXHRcdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleV0gPT0gbnVsbCkgdm5vZGUuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0XHR2bm9kZS5ldmVudHNba2V5XSA9IHZhbHVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleV0gIT0gbnVsbCkgdm5vZGUuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0XHR2bm9kZS5ldmVudHNba2V5XSA9IHVuZGVmaW5lZFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSkge1xuXHRcdFx0dm5vZGUuZXZlbnRzID0gbmV3IEV2ZW50RGljdCgpXG5cdFx0XHR2bm9kZS5kb20uYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHR2bm9kZS5ldmVudHNba2V5XSA9IHZhbHVlXG5cdFx0fVxuXHR9XG5cblx0Ly9saWZlY3ljbGVcblx0ZnVuY3Rpb24gaW5pdExpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uaW5pdCA9PT0gXCJmdW5jdGlvblwiKSBjYWxsSG9vay5jYWxsKHNvdXJjZS5vbmluaXQsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uY3JlYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goY2FsbEhvb2suYmluZChzb3VyY2Uub25jcmVhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbnVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKGNhbGxIb29rLmJpbmQoc291cmNlLm9udXBkYXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpIHtcblx0XHRkbyB7XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2YXIgZm9yY2UgPSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlLCB2bm9kZSwgb2xkKVxuXHRcdFx0XHRpZiAoZm9yY2UgIT09IHVuZGVmaW5lZCAmJiAhZm9yY2UpIGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2YXIgZm9yY2UgPSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9uYmVmb3JldXBkYXRlLCB2bm9kZSwgb2xkKVxuXHRcdFx0XHRpZiAoZm9yY2UgIT09IHVuZGVmaW5lZCAmJiAhZm9yY2UpIGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9IHdoaWxlIChmYWxzZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG5cdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdHZub2RlLmluc3RhbmNlID0gb2xkLmluc3RhbmNlXG5cdFx0Ly8gT25lIHdvdWxkIHRoaW5rIGhhdmluZyB0aGUgYWN0dWFsIGxhdGVzdCBhdHRyaWJ1dGVzIHdvdWxkIGJlIGlkZWFsLFxuXHRcdC8vIGJ1dCBpdCBkb2Vzbid0IGxldCB1cyBwcm9wZXJseSBkaWZmIGJhc2VkIG9uIG91ciBjdXJyZW50IGludGVybmFsXG5cdFx0Ly8gcmVwcmVzZW50YXRpb24uIFdlIGhhdmUgdG8gc2F2ZSBub3Qgb25seSB0aGUgb2xkIERPTSBpbmZvLCBidXQgYWxzb1xuXHRcdC8vIHRoZSBhdHRyaWJ1dGVzIHVzZWQgdG8gY3JlYXRlIGl0LCBhcyB3ZSBkaWZmICp0aGF0Kiwgbm90IGFnYWluc3QgdGhlXG5cdFx0Ly8gRE9NIGRpcmVjdGx5ICh3aXRoIGEgZmV3IGV4Y2VwdGlvbnMgaW4gYHNldEF0dHJgKS4gQW5kLCBvZiBjb3Vyc2UsIHdlXG5cdFx0Ly8gbmVlZCB0byBzYXZlIHRoZSBjaGlsZHJlbiBhbmQgdGV4dCBhcyB0aGV5IGFyZSBjb25jZXB0dWFsbHkgbm90XG5cdFx0Ly8gdW5saWtlIHNwZWNpYWwgXCJhdHRyaWJ1dGVzXCIgaW50ZXJuYWxseS5cblx0XHR2bm9kZS5hdHRycyA9IG9sZC5hdHRyc1xuXHRcdHZub2RlLmNoaWxkcmVuID0gb2xkLmNoaWxkcmVuXG5cdFx0dm5vZGUudGV4dCA9IG9sZC50ZXh0XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbihkb20sIHZub2RlcywgcmVkcmF3KSB7XG5cdFx0aWYgKCFkb20pIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IGJlaW5nIHBhc3NlZCB0byBtLnJvdXRlL20ubW91bnQvbS5yZW5kZXIgaXMgbm90IHVuZGVmaW5lZC5cIilcblx0XHR2YXIgaG9va3MgPSBbXVxuXHRcdHZhciBhY3RpdmUgPSBhY3RpdmVFbGVtZW50KClcblx0XHR2YXIgbmFtZXNwYWNlID0gZG9tLm5hbWVzcGFjZVVSSVxuXG5cdFx0Ly8gRmlyc3QgdGltZSByZW5kZXJpbmcgaW50byBhIG5vZGUgY2xlYXJzIGl0IG91dFxuXHRcdGlmIChkb20udm5vZGVzID09IG51bGwpIGRvbS50ZXh0Q29udGVudCA9IFwiXCJcblxuXHRcdHZub2RlcyA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKEFycmF5LmlzQXJyYXkodm5vZGVzKSA/IHZub2RlcyA6IFt2bm9kZXNdKVxuXHRcdHZhciBwcmV2UmVkcmF3ID0gY3VycmVudFJlZHJhd1xuXHRcdHRyeSB7XG5cdFx0XHRjdXJyZW50UmVkcmF3ID0gdHlwZW9mIHJlZHJhdyA9PT0gXCJmdW5jdGlvblwiID8gcmVkcmF3IDogdW5kZWZpbmVkXG5cdFx0XHR1cGRhdGVOb2Rlcyhkb20sIGRvbS52bm9kZXMsIHZub2RlcywgaG9va3MsIG51bGwsIG5hbWVzcGFjZSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIgPyB1bmRlZmluZWQgOiBuYW1lc3BhY2UpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGN1cnJlbnRSZWRyYXcgPSBwcmV2UmVkcmF3XG5cdFx0fVxuXHRcdGRvbS52bm9kZXMgPSB2bm9kZXNcblx0XHQvLyBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgY2FuIHJldHVybiBudWxsOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2RvbS1kb2N1bWVudC1hY3RpdmVlbGVtZW50XG5cdFx0aWYgKGFjdGl2ZSAhPSBudWxsICYmIGFjdGl2ZUVsZW1lbnQoKSAhPT0gYWN0aXZlICYmIHR5cGVvZiBhY3RpdmUuZm9jdXMgPT09IFwiZnVuY3Rpb25cIikgYWN0aXZlLmZvY3VzKClcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSBob29rc1tpXSgpXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihodG1sKSB7XG5cdGlmIChodG1sID09IG51bGwpIGh0bWwgPSBcIlwiXG5cdHJldHVybiBWbm9kZShcIjxcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGh0bWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gVm5vZGUodGFnLCBrZXksIGF0dHJzLCBjaGlsZHJlbiwgdGV4dCwgZG9tKSB7XG5cdHJldHVybiB7dGFnOiB0YWcsIGtleToga2V5LCBhdHRyczogYXR0cnMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGV4dDogdGV4dCwgZG9tOiBkb20sIGRvbVNpemU6IHVuZGVmaW5lZCwgc3RhdGU6IHVuZGVmaW5lZCwgZXZlbnRzOiB1bmRlZmluZWQsIGluc3RhbmNlOiB1bmRlZmluZWR9XG59XG5Wbm9kZS5ub3JtYWxpemUgPSBmdW5jdGlvbihub2RlKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSByZXR1cm4gVm5vZGUoXCJbXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihub2RlKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG5cdGlmIChub2RlID09IG51bGwgfHwgdHlwZW9mIG5vZGUgPT09IFwiYm9vbGVhblwiKSByZXR1cm4gbnVsbFxuXHRpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIpIHJldHVybiBub2RlXG5cdHJldHVybiBWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFN0cmluZyhub2RlKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG5Wbm9kZS5ub3JtYWxpemVDaGlsZHJlbiA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdHZhciBjaGlsZHJlbiA9IFtdXG5cdGlmIChpbnB1dC5sZW5ndGgpIHtcblx0XHR2YXIgaXNLZXllZCA9IGlucHV0WzBdICE9IG51bGwgJiYgaW5wdXRbMF0ua2V5ICE9IG51bGxcblx0XHQvLyBOb3RlOiB0aGlzIGlzIGEgKnZlcnkqIHBlcmYtc2Vuc2l0aXZlIGNoZWNrLlxuXHRcdC8vIEZ1biBmYWN0OiBtZXJnaW5nIHRoZSBsb29wIGxpa2UgdGhpcyBpcyBzb21laG93IGZhc3RlciB0aGFuIHNwbGl0dGluZ1xuXHRcdC8vIGl0LCBub3RpY2VhYmx5IHNvLlxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICgoaW5wdXRbaV0gIT0gbnVsbCAmJiBpbnB1dFtpXS5rZXkgIT0gbnVsbCkgIT09IGlzS2V5ZWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIlZub2RlcyBtdXN0IGVpdGhlciBhbHdheXMgaGF2ZSBrZXlzIG9yIG5ldmVyIGhhdmUga2V5cyFcIilcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2hpbGRyZW5baV0gPSBWbm9kZS5ub3JtYWxpemUoaW5wdXRbaV0pXG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGlsZHJlblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZub2RlXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gcmVxdWlyZShcIi4vcHJvbWlzZS9wcm9taXNlXCIpXG52YXIgbW91bnRSZWRyYXcgPSByZXF1aXJlKFwiLi9tb3VudC1yZWRyYXdcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9yZXF1ZXN0L3JlcXVlc3RcIikod2luZG93LCBQcm9taXNlUG9seWZpbGwsIG1vdW50UmVkcmF3LnJlZHJhdylcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBidWlsZFBhdGhuYW1lID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2J1aWxkXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHdpbmRvdywgUHJvbWlzZSwgb25jb21wbGV0aW9uKSB7XG5cdHZhciBjYWxsYmFja0NvdW50ID0gMFxuXG5cdGZ1bmN0aW9uIFByb21pc2VQcm94eShleGVjdXRvcikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcblx0fVxuXG5cdC8vIEluIGNhc2UgdGhlIGdsb2JhbCBQcm9taXNlIGlzIHNvbWUgdXNlcmxhbmQgbGlicmFyeSdzIHdoZXJlIHRoZXkgcmVseSBvblxuXHQvLyBgZm9vIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvcmAsIGB0aGlzLmNvbnN0cnVjdG9yLnJlc29sdmUodmFsdWUpYCwgb3Jcblx0Ly8gc2ltaWxhci4gTGV0J3MgKm5vdCogYnJlYWsgdGhlbS5cblx0UHJvbWlzZVByb3h5LnByb3RvdHlwZSA9IFByb21pc2UucHJvdG90eXBlXG5cdFByb21pc2VQcm94eS5fX3Byb3RvX18gPSBQcm9taXNlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxuXHRmdW5jdGlvbiBtYWtlUmVxdWVzdChmYWN0b3J5KSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHVybCwgYXJncykge1xuXHRcdFx0aWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHsgYXJncyA9IHVybDsgdXJsID0gdXJsLnVybCB9XG5cdFx0XHRlbHNlIGlmIChhcmdzID09IG51bGwpIGFyZ3MgPSB7fVxuXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0ZmFjdG9yeShidWlsZFBhdGhuYW1lKHVybCwgYXJncy5wYXJhbXMpLCBhcmdzLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgYXJncy50eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGFbaV0gPSBuZXcgYXJncy50eXBlKGRhdGFbaV0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgZGF0YSA9IG5ldyBhcmdzLnR5cGUoZGF0YSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzb2x2ZShkYXRhKVxuXHRcdFx0XHR9LCByZWplY3QpXG5cdFx0XHR9KVxuXHRcdFx0aWYgKGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZSkgcmV0dXJuIHByb21pc2Vcblx0XHRcdHZhciBjb3VudCA9IDBcblx0XHRcdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdFx0XHRpZiAoLS1jb3VudCA9PT0gMCAmJiB0eXBlb2Ygb25jb21wbGV0aW9uID09PSBcImZ1bmN0aW9uXCIpIG9uY29tcGxldGlvbigpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3cmFwKHByb21pc2UpXG5cblx0XHRcdGZ1bmN0aW9uIHdyYXAocHJvbWlzZSkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IHByb21pc2UudGhlblxuXHRcdFx0XHQvLyBTZXQgdGhlIGNvbnN0cnVjdG9yLCBzbyBlbmdpbmVzIGtub3cgdG8gbm90IGF3YWl0IG9yIHJlc29sdmVcblx0XHRcdFx0Ly8gdGhpcyBhcyBhIG5hdGl2ZSBwcm9taXNlLiBBdCB0aGUgdGltZSBvZiB3cml0aW5nLCB0aGlzIGlzXG5cdFx0XHRcdC8vIG9ubHkgbmVjZXNzYXJ5IGZvciBWOCwgYnV0IHRoZWlyIGJlaGF2aW9yIGlzIHRoZSBjb3JyZWN0XG5cdFx0XHRcdC8vIGJlaGF2aW9yIHBlciBzcGVjLiBTZWUgdGhpcyBzcGVjIGlzc3VlIGZvciBtb3JlIGRldGFpbHM6XG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L2VjbWEyNjIvaXNzdWVzLzE1NzcuIEFsc28sIHNlZSB0aGVcblx0XHRcdFx0Ly8gY29ycmVzcG9uZGluZyBjb21tZW50IGluIGByZXF1ZXN0L3Rlc3RzL3Rlc3QtcmVxdWVzdC5qc2AgZm9yXG5cdFx0XHRcdC8vIGEgYml0IG1vcmUgYmFja2dyb3VuZCBvbiB0aGUgaXNzdWUgYXQgaGFuZC5cblx0XHRcdFx0cHJvbWlzZS5jb25zdHJ1Y3RvciA9IFByb21pc2VQcm94eVxuXHRcdFx0XHRwcm9taXNlLnRoZW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdFx0dmFyIG5leHQgPSB0aGVuLmFwcGx5KHByb21pc2UsIGFyZ3VtZW50cylcblx0XHRcdFx0XHRuZXh0LnRoZW4oY29tcGxldGUsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGNvbXBsZXRlKClcblx0XHRcdFx0XHRcdGlmIChjb3VudCA9PT0gMCkgdGhyb3cgZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuIHdyYXAobmV4dClcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhc0hlYWRlcihhcmdzLCBuYW1lKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykge1xuXHRcdFx0aWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoYXJncy5oZWFkZXJzLCBrZXkpICYmIG5hbWUudGVzdChrZXkpKSByZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cmVxdWVzdDogbWFrZVJlcXVlc3QoZnVuY3Rpb24odXJsLCBhcmdzLCByZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciBtZXRob2QgPSBhcmdzLm1ldGhvZCAhPSBudWxsID8gYXJncy5tZXRob2QudG9VcHBlckNhc2UoKSA6IFwiR0VUXCJcblx0XHRcdHZhciBib2R5ID0gYXJncy5ib2R5XG5cdFx0XHR2YXIgYXNzdW1lSlNPTiA9IChhcmdzLnNlcmlhbGl6ZSA9PSBudWxsIHx8IGFyZ3Muc2VyaWFsaXplID09PSBKU09OLnNlcmlhbGl6ZSkgJiYgIShib2R5IGluc3RhbmNlb2YgJHdpbmRvdy5Gb3JtRGF0YSlcblx0XHRcdHZhciByZXNwb25zZVR5cGUgPSBhcmdzLnJlc3BvbnNlVHlwZSB8fCAodHlwZW9mIGFyZ3MuZXh0cmFjdCA9PT0gXCJmdW5jdGlvblwiID8gXCJcIiA6IFwianNvblwiKVxuXG5cdFx0XHR2YXIgeGhyID0gbmV3ICR3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKSwgYWJvcnRlZCA9IGZhbHNlXG5cdFx0XHR2YXIgb3JpZ2luYWwgPSB4aHIsIHJlcGxhY2VkQWJvcnRcblx0XHRcdHZhciBhYm9ydCA9IHhoci5hYm9ydFxuXG5cdFx0XHR4aHIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWVcblx0XHRcdFx0YWJvcnQuY2FsbCh0aGlzKVxuXHRcdFx0fVxuXG5cdFx0XHR4aHIub3BlbihtZXRob2QsIHVybCwgYXJncy5hc3luYyAhPT0gZmFsc2UsIHR5cGVvZiBhcmdzLnVzZXIgPT09IFwic3RyaW5nXCIgPyBhcmdzLnVzZXIgOiB1bmRlZmluZWQsIHR5cGVvZiBhcmdzLnBhc3N3b3JkID09PSBcInN0cmluZ1wiID8gYXJncy5wYXNzd29yZCA6IHVuZGVmaW5lZClcblxuXHRcdFx0aWYgKGFzc3VtZUpTT04gJiYgYm9keSAhPSBudWxsICYmICFoYXNIZWFkZXIoYXJncywgL15jb250ZW50LXR5cGUkL2kpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmRlc2VyaWFsaXplICE9PSBcImZ1bmN0aW9uXCIgJiYgIWhhc0hlYWRlcihhcmdzLCAvXmFjY2VwdCQvaSkpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LypcIilcblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLndpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IGFyZ3Mud2l0aENyZWRlbnRpYWxzXG5cdFx0XHRpZiAoYXJncy50aW1lb3V0KSB4aHIudGltZW91dCA9IGFyZ3MudGltZW91dFxuXHRcdFx0eGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZVxuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJncy5oZWFkZXJzKSB7XG5cdFx0XHRcdGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSkge1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgYXJncy5oZWFkZXJzW2tleV0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKGV2KSB7XG5cdFx0XHRcdC8vIERvbid0IHRocm93IGVycm9ycyBvbiB4aHIuYWJvcnQoKS5cblx0XHRcdFx0aWYgKGFib3J0ZWQpIHJldHVyblxuXG5cdFx0XHRcdGlmIChldi50YXJnZXQucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgc3VjY2VzcyA9IChldi50YXJnZXQuc3RhdHVzID49IDIwMCAmJiBldi50YXJnZXQuc3RhdHVzIDwgMzAwKSB8fCBldi50YXJnZXQuc3RhdHVzID09PSAzMDQgfHwgKC9eZmlsZTpcXC9cXC8vaSkudGVzdCh1cmwpXG5cdFx0XHRcdFx0XHQvLyBXaGVuIHRoZSByZXNwb25zZSB0eXBlIGlzbid0IFwiXCIgb3IgXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHQvLyBgeGhyLnJlc3BvbnNlVGV4dGAgaXMgdGhlIHdyb25nIHRoaW5nIHRvIHVzZS5cblx0XHRcdFx0XHRcdC8vIEJyb3dzZXJzIGRvIHRoZSByaWdodCB0aGluZyBhbmQgdGhyb3cgaGVyZSwgYW5kIHdlXG5cdFx0XHRcdFx0XHQvLyBzaG91bGQgaG9ub3IgdGhhdCBhbmQgZG8gdGhlIHJpZ2h0IHRoaW5nIGJ5XG5cdFx0XHRcdFx0XHQvLyBwcmVmZXJyaW5nIGB4aHIucmVzcG9uc2VgIHdoZXJlIHBvc3NpYmxlL3ByYWN0aWNhbC5cblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IGV2LnRhcmdldC5yZXNwb25zZSwgbWVzc2FnZVxuXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2VUeXBlID09PSBcImpzb25cIikge1xuXHRcdFx0XHRcdFx0XHQvLyBGb3IgSUUgYW5kIEVkZ2UsIHdoaWNoIGRvbid0IGltcGxlbWVudFxuXHRcdFx0XHRcdFx0XHQvLyBgcmVzcG9uc2VUeXBlOiBcImpzb25cImAuXG5cdFx0XHRcdFx0XHRcdGlmICghZXYudGFyZ2V0LnJlc3BvbnNlVHlwZSAmJiB0eXBlb2YgYXJncy5leHRyYWN0ICE9PSBcImZ1bmN0aW9uXCIpIHJlc3BvbnNlID0gSlNPTi5wYXJzZShldi50YXJnZXQucmVzcG9uc2VUZXh0KVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICghcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gT25seSB1c2UgdGhpcyBkZWZhdWx0IGlmIGl0J3MgdGV4dC4gSWYgYSBwYXJzZWRcblx0XHRcdFx0XHRcdFx0Ly8gZG9jdW1lbnQgaXMgbmVlZGVkIG9uIG9sZCBJRSBhbmQgZnJpZW5kcyAoYWxsXG5cdFx0XHRcdFx0XHRcdC8vIHVuc3VwcG9ydGVkKSwgdGhlIHVzZXIgc2hvdWxkIHVzZSBhIGN1c3RvbVxuXHRcdFx0XHRcdFx0XHQvLyBgY29uZmlnYCBpbnN0ZWFkLiBUaGV5J3JlIGFscmVhZHkgdXNpbmcgdGhpcyBhdFxuXHRcdFx0XHRcdFx0XHQvLyB0aGVpciBvd24gcmlzay5cblx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlID09IG51bGwpIHJlc3BvbnNlID0gZXYudGFyZ2V0LnJlc3BvbnNlVGV4dFxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ3MuZXh0cmFjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gYXJncy5leHRyYWN0KGV2LnRhcmdldCwgYXJncylcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyA9IHRydWVcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZ3MuZGVzZXJpYWxpemUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGFyZ3MuZGVzZXJpYWxpemUocmVzcG9uc2UpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoc3VjY2VzcykgcmVzb2x2ZShyZXNwb25zZSlcblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0cnkgeyBtZXNzYWdlID0gZXYudGFyZ2V0LnJlc3BvbnNlVGV4dCB9XG5cdFx0XHRcdFx0XHRcdGNhdGNoIChlKSB7IG1lc3NhZ2UgPSByZXNwb25zZSB9XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKVxuXHRcdFx0XHRcdFx0XHRlcnJvci5jb2RlID0gZXYudGFyZ2V0LnN0YXR1c1xuXHRcdFx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuY29uZmlnID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0eGhyID0gYXJncy5jb25maWcoeGhyLCBhcmdzLCB1cmwpIHx8IHhoclxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSB0aGUgYGFib3J0YCB0byBhbnkgcmVwbGFjZW1lbnQgWEhSIGFzIHdlbGwuXG5cdFx0XHRcdGlmICh4aHIgIT09IG9yaWdpbmFsKSB7XG5cdFx0XHRcdFx0cmVwbGFjZWRBYm9ydCA9IHhoci5hYm9ydFxuXHRcdFx0XHRcdHhoci5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YWJvcnRlZCA9IHRydWVcblx0XHRcdFx0XHRcdHJlcGxhY2VkQWJvcnQuY2FsbCh0aGlzKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYm9keSA9PSBudWxsKSB4aHIuc2VuZCgpXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJncy5zZXJpYWxpemUgPT09IFwiZnVuY3Rpb25cIikgeGhyLnNlbmQoYXJncy5zZXJpYWxpemUoYm9keSkpXG5cdFx0XHRlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgJHdpbmRvdy5Gb3JtRGF0YSkgeGhyLnNlbmQoYm9keSlcblx0XHRcdGVsc2UgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoYm9keSkpXG5cdFx0fSksXG5cdFx0anNvbnA6IG1ha2VSZXF1ZXN0KGZ1bmN0aW9uKHVybCwgYXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tOYW1lID0gYXJncy5jYWxsYmFja05hbWUgfHwgXCJfbWl0aHJpbF9cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpICsgXCJfXCIgKyBjYWxsYmFja0NvdW50Kytcblx0XHRcdHZhciBzY3JpcHQgPSAkd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcblx0XHRcdCR3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0ZGVsZXRlICR3aW5kb3dbY2FsbGJhY2tOYW1lXVxuXHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpXG5cdFx0XHRcdHJlc29sdmUoZGF0YSlcblx0XHRcdH1cblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiSlNPTlAgcmVxdWVzdCBmYWlsZWRcIikpXG5cdFx0XHR9XG5cdFx0XHRzY3JpcHQuc3JjID0gdXJsICsgKHVybC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiKSArXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChhcmdzLmNhbGxiYWNrS2V5IHx8IFwiY2FsbGJhY2tcIikgKyBcIj1cIiArXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChjYWxsYmFja05hbWUpXG5cdFx0XHQkd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cdFx0fSksXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBtb3VudFJlZHJhdyA9IHJlcXVpcmUoXCIuL21vdW50LXJlZHJhd1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2FwaS9yb3V0ZXJcIikod2luZG93LCBtb3VudFJlZHJhdylcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCc7XG5cbmltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi92aWV3cy9saXN0XCI7XG5pbXBvcnQgeyBiYWtlZEdvb2RzRm9ybSB9IGZyb20gXCIuL3ZpZXdzL2Zvcm1cIjtcblxubS5yb3V0ZShkb2N1bWVudC5ib2R5LCBcIi9cIiwge1xuICAgIFwiL1wiOiBsaXN0LFxuICAgIFwiL2Zvcm0vOmlkXCIgOiBiYWtlZEdvb2RzRm9ybVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9