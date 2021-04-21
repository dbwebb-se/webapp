/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/models/auth.js":
/*!***************************!*\
  !*** ./js/models/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


const auth = {
    apiKey: "6c5c540eda98783426450c3b8d63bdc4",
    url: "https://lager.emilfolino.se/v2/auth/login",
    email: "",
    password: "",
    token: "",
    login: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default().request({
            method: "POST",
            url: auth.url,
            body: {
                api_key: auth.apiKey,
                email: auth.email,
                password: auth.password
            }
        }).then(function(result) {
            auth.email = "";
            auth.password = "";

            auth.token = result.data.token;

            return mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/");
        });
    }
};




/***/ }),

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
        // setTimeout används enbart för att försinka hämtningen
        // för att visa upp ternary-operator funktionaliteten
        setTimeout(function() {
            return m.request({
                method: "GET",
                url: bakery.url + "?api_key=" + bakery.apiKey
            }).then(function(result) {
                bakery.currentCakes = result.data;
            });
        }, 3000);
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
            bakery.resetCake();

            return m.route.set("/");
        });
    },
    addCake: function() {
        bakery.current.api_key = bakery.apiKey;

        return m.request({
            method: "POST",
            url: bakery.url,
            body: bakery.current
        }).then(function() {
            bakery.resetCake();

            return m.route.set("/");
        });
    },
    resetCake: function() {
        bakery.current = {};
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
/* harmony export */   "editForm": () => (/* binding */ editForm)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_bakery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bakery */ "./js/models/bakery.js");



let editForm = {
    oninit: function(vnode) {
        // utskrift av vnode-objekt för att
        // exemplifiera virtuella noder och ///// det virtuella DOM-
        // trädet.
        console.log(vnode);

        // vnode.attrs.id innehåller det id
        // vi skickar med som en del av urln
        // form/:id. Vi hämtar rätt bakverk
        // med hjälp av id
        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.load(vnode.attrs.id);
    },
    view: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.container", [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Ändra kaka"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.save();
                } }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Namn"),
                // I nedanstående kod använder vi oss av två attribut
                // oninput och value.
                // value skuggar/har samma värde som ett attribut i
                // modellen (bakery.current.name), vi ändrar sedan
                // detta värde och sätter det till e.target.value ////
                // varje vi skriver i fältet. value (och det som finns
                // i fältet ) uppdateras per automatik utifrån
                // modellens värde/state.

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
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.specifiers = e.target.value;
                    }
                },               _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.cakeTypes.map(function(cakeType) {
                        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", {
                            value: cakeType,
                            selected: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.specifiers === cakeType
                        }, cakeType);
                    })
                ),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.button.green-button[type=submit][value=Save].button", "Spara")
            ])
        ]);
    }
};




/***/ }),

/***/ "./js/views/layout.js":
/*!****************************!*\
  !*** ./js/views/layout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/auth.js */ "./js/models/auth.js");





var layout = {
    links: [
        { name: "Hem", route: "#!/" },
        { name: "Ny", route: "#!/new" },
        { name: "Logga in", route: "#!/login" },
    ],
    view: function(vnode) {
        // För att förenkla nedanstående kod sparar jag i två variabler
        let topNav = vnode.attrs.topNav;
        let bottomNav = vnode.attrs.bottomNav;

        return [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("nav.top-nav", { textContent: "Emils konditori"}, [
                // Vi använder ternary-operator och beroende på om
                // v har satt topNav i index.js visas en länk eller ej
                topNav ?
                    mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", [
                        mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", { href: topNav.route }, topNav.title)
                    ]) :
                    null
            ]),
            // I main-contianer visar vi upp barn-noderna.
            // de skickades med från index.js som en komponent
            // tillexempel m(list)
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("main.container", vnode.children),
            // Vi loopar igenom alla links vi har satt ovan
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("nav.bottom-nav", layout.links.map(function(link) {
                // Vi vill bara att man kan lägga till nya bakverk
                // om man är inloggat. Vi kollar om token finns i auth
                // och om länken är #!/new
                // "Varvet" i map-loopen avslutas här genom att
                // returnera null, som inte renderas till nånting av
                // mithril
                if (link.route === "#!/new" && _models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.token === "") {
                    return null;
                }

                // Vi returnerar ett a element per link
                // beroende på om bottomNav värdet är lika med
                // nuvarande links route sätts en klass på elementet
                // till active.
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", {
                    href: link.route,
                    class: bottomNav === link.route ? "active" : null
                }, link.name);
            }))
        ];
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





const noCakes = {
    view: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "Finns inga kakor!");
    }
};

const cakeList = {
    view: function() {
        return _models_bakery_js__WEBPACK_IMPORTED_MODULE_1__.bakery.currentCakes.map(function(cake) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(cakeComponent, cake);
        });
    }
};

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
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.container", [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("h1", "Kakor"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(
                "a.button.blue-button.full-width-button",
                { href: "#!/new" },
                "Ny kaka"
            ),
            // Ternery-operator:
            // [villkor ? retur-värde om sant : retur-värde om falskt]
            // Här utnyttjar vi inline-if-satsen ternery-operator
            // om det finns något i currentCakes laddar vi listan
            // Annars en text om att det inte finns kakor.
            // 3 sekunders timeout i modellen gör att först syns texten
            // Sen syns listan. Se komponenterna ovan.
            // Är ett bra sätt att få många små komponenter som har
            // ett ansvarsområde.
            // Också kallat SRP - single responsibility principle.
            // Även ett sätt att skapa en loading-snurra.
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.cake-container", _models_bakery_js__WEBPACK_IMPORTED_MODULE_1__.bakery.currentCakes.length ?
                                        mithril__WEBPACK_IMPORTED_MODULE_0___default()(cakeList) :
                                        mithril__WEBPACK_IMPORTED_MODULE_0___default()(noCakes))
        ]);
    }
};




/***/ }),

/***/ "./js/views/login.js":
/*!***************************!*\
  !*** ./js/views/login.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/auth.js */ "./js/models/auth.js");




let login = {
    view: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.container",
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Logga in"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "Finns en registrerad användare: kaka@kaka.se, Lösenord: test1234"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    _models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.login();
                } }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "E-post"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=email][placeholder=E-post]", {
                    oninput: function (e) {
                        _models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.email = e.target.value;
                    },
                    value: _models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.email
                }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Lösenord"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=password][placeholder=Lösenord]", {
                    oninput: function (e) {
                        _models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.password = e.target.value;
                    },
                    value: _models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.password
                }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.button.green-button[type=submit][value=Logga in].button", "Logga in")
            ]));
    }
};




/***/ }),

/***/ "./js/views/new.js":
/*!*************************!*\
  !*** ./js/views/new.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newForm": () => (/* binding */ newForm)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_bakery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bakery */ "./js/models/bakery.js");



let newForm = {
    oninit: function() {
        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.specifiers = "Tårta";
        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.resetCake();
    },
    view: function() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.container", [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Ny kaka"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    if (_models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.specifiers) {
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.addCake();
                    }
                } }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Namn"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=text][placeholder=Name]", {
                    oninput: function (e) {
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.name = e.target.value;
                    },
                    value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.name
                }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Artikelnummer"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=text][placeholder=Artikelnummer]", {
                    oninput: function (e) {
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.article_number = e.target.value;
                    },
                    value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.article_number
                }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Beskrivning"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("textarea.input", {
                    oninput: function (e) {
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.description = e.target.value;
                    },
                    value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.description
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
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Pris"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.input[type=number][placeholder=Pris]", {
                    oninput: function (e) {
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.price = parseInt(e.target.value);
                    },
                    value: _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.price
                }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.input-label", "Typ"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("select.input", {
                    onchange: function (e) {
                        _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.current.specifiers = e.target.value;
                    },
                    required: true
                }, [
                    mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", { value: "" }, "Välj en typ"),
                    _models_bakery__WEBPACK_IMPORTED_MODULE_1__.bakery.cakeTypes.map(function(cakeType) {
                        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", { value: cakeType }, cakeType);
                    })
                ]),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.button.green-button[type=submit][value=Save].button", "Skapa kaka")
            ])
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
/* harmony import */ var _models_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/auth.js */ "./js/models/auth.js");
/* harmony import */ var _views_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/layout.js */ "./js/views/layout.js");
/* harmony import */ var _views_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/list.js */ "./js/views/list.js");
/* harmony import */ var _views_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/form.js */ "./js/views/form.js");
/* harmony import */ var _views_new_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/new.js */ "./js/views/new.js");
/* harmony import */ var _views_login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login.js */ "./js/views/login.js");














mithril__WEBPACK_IMPORTED_MODULE_0___default().route(document.body, "/", {
    "/": {
        render: function() {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_layout_js__WEBPACK_IMPORTED_MODULE_2__.layout, {
                bottomNav: "#!/"
            }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_list_js__WEBPACK_IMPORTED_MODULE_3__.list));
        }
    },
    "/form/:id": {
        render: function(vnode) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_layout_js__WEBPACK_IMPORTED_MODULE_2__.layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/"
            }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_form_js__WEBPACK_IMPORTED_MODULE_4__.editForm, vnode.attrs));
        }
    },
    "/new": {
        onmatch: function() {
            if (_models_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth.token) {
                return _views_new_js__WEBPACK_IMPORTED_MODULE_5__.newForm;
            }

            return mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/login");
        },
        render: function(vnode) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_layout_js__WEBPACK_IMPORTED_MODULE_2__.layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/new"
            }, vnode);
        }
    },
    // Till m-funktionen kan vi skicka 2 eller 3 argument.
    // 2-argument: m("p", "Hello") första argumentet är nuvarande
    // element, andra argumentet är barn. Blir till följande HTML i
    // DOM-trädet: <p>Hello</p>
    // 3-argument: m("p", { class: "blue" }, "Hello") där andra
    // argumentet är options till exempel en klass eller andra värden
    // vi vill skicka med.

    // I nedanstående exempel skickar med två värden topNav och
    // bottomNav. Vi når de i layout under vnode.attrs
    "/login": {
        render: function() {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_layout_js__WEBPACK_IMPORTED_MODULE_2__.layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/login"
            }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_views_login_js__WEBPACK_IMPORTED_MODULE_6__.login));
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9qcy9tb2RlbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9qcy9tb2RlbHMvYmFrZXJ5LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL2pzL3ZpZXdzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vanMvdmlld3MvbGF5b3V0LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL2pzL3ZpZXdzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vanMvdmlld3MvbG9naW4uanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vanMvdmlld3MvbmV3LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL2FwaS9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvYXBpL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9oeXBlcnNjcmlwdC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvYXNzaWduLmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL2J1aWxkLmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL2NvbXBpbGVUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9wYXRobmFtZS9wYXJzZS5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9wcm9taXNlL3BvbHlmaWxsLmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3Byb21pc2UvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9xdWVyeXN0cmluZy9idWlsZC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9xdWVyeXN0cmluZy9wYXJzZS5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2ZyYWdtZW50LmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9oeXBlcnNjcmlwdC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvaHlwZXJzY3JpcHRWbm9kZS5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvcmVuZGVyLmpzIiwid2VicGFjazovL2NvbXB1dGVycy8uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci90cnVzdC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jb21wdXRlcnMvLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZXF1ZXN0L3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzLy4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcm91dGUuanMiLCJ3ZWJwYWNrOi8vY29tcHV0ZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXB1dGVycy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb21wdXRlcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbXB1dGVycy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvbXB1dGVycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbXB1dGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbXB1dGVycy8uL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLG1CQUFtQix3REFBVztBQUM5QixTQUFTO0FBQ1Q7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7OztBQzVCaEIsUUFBUSxtQkFBTyxDQUFDLGdEQUFTOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0RBQStEO0FBQy9ELDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxlQUFlO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOzs7Ozs7Ozs7OztBQzU4Qlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLCtEQUFpQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUFk7O0FBRVo7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDOUJZOztBQUVaLHNCQUFzQixtQkFBTyxDQUFDLG9FQUFtQjtBQUNqRCxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTFDLGlCQUFpQixtQkFBTyxDQUFDLG9FQUFtQjs7Ozs7Ozs7Ozs7QUNMaEM7O0FBRVosb0JBQW9CLG1CQUFPLENBQUMsbUVBQW1COztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7QUNqTVk7O0FBRVosa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCOztBQUUxQyxpQkFBaUIsbUJBQU8sQ0FBQywwREFBYzs7Ozs7OztVQ0p2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05hOztBQUVXOztBQUVnQjs7QUFFRzs7QUFFSjtBQUNJO0FBQ0Y7QUFDQTs7O0FBR3pDLG9EQUFPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBQyxDQUFDLG9EQUFNO0FBQzNCO0FBQ0EsYUFBYSxFQUFFLDhDQUFDLENBQUMsZ0RBQUk7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBQyxDQUFDLG9EQUFNO0FBQzNCLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQSxhQUFhLEVBQUUsOENBQUMsQ0FBQyxvREFBUTtBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFVO0FBQzFCLHVCQUF1QixrREFBTztBQUM5Qjs7QUFFQSxtQkFBbUIsd0RBQVc7QUFDOUIsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLDhDQUFDLENBQUMsb0RBQU07QUFDM0IseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBQyxDQUFDLG9EQUFNO0FBQzNCLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQSxhQUFhLEVBQUUsOENBQUMsQ0FBQyxrREFBSztBQUN0QjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcblxuY29uc3QgYXV0aCA9IHtcbiAgICBhcGlLZXk6IFwiNmM1YzU0MGVkYTk4NzgzNDI2NDUwYzNiOGQ2M2JkYzRcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL2F1dGgvbG9naW5cIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICB0b2tlbjogXCJcIixcbiAgICBsb2dpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogYXV0aC51cmwsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgYXBpX2tleTogYXV0aC5hcGlLZXksXG4gICAgICAgICAgICAgICAgZW1haWw6IGF1dGguZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIGF1dGguZW1haWwgPSBcIlwiO1xuICAgICAgICAgICAgYXV0aC5wYXNzd29yZCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGF1dGgudG9rZW4gPSByZXN1bHQuZGF0YS50b2tlbjtcblxuICAgICAgICAgICAgcmV0dXJuIG0ucm91dGUuc2V0KFwiL1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgYXV0aCB9O1xuIiwidmFyIG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxudmFyIGJha2VyeSA9IHtcbiAgICBhcGlLZXk6IFwiNmM1YzU0MGVkYTk4NzgzNDI2NDUwYzNiOGQ2M2JkYzRcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL3Byb2R1Y3RzXCIsXG4gICAgY2FrZVR5cGVzOiBbXCJUw6VydGFcIiwgXCJCcsO2ZFwiLCBcIlNtw6VrYWthXCJdLFxuICAgIGN1cnJlbnRDYWtlczogW10sXG4gICAgbG9hZEFsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQgYW52w6RuZHMgZW5iYXJ0IGbDtnIgYXR0IGbDtnJzaW5rYSBow6RtdG5pbmdlblxuICAgICAgICAvLyBmw7ZyIGF0dCB2aXNhIHVwcCB0ZXJuYXJ5LW9wZXJhdG9yIGZ1bmt0aW9uYWxpdGV0ZW5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IGJha2VyeS51cmwgKyBcIj9hcGlfa2V5PVwiICsgYmFrZXJ5LmFwaUtleVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBiYWtlcnkuY3VycmVudENha2VzID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfSxcbiAgICBjdXJyZW50OiB7fSxcbiAgICBsb2FkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gbS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogYmFrZXJ5LnVybCArIFwiL1wiICsgaWQgKyBcIj9hcGlfa2V5PVwiICsgYmFrZXJ5LmFwaUtleVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFrZXJ5LmN1cnJlbnQuYXBpX2tleSA9IGJha2VyeS5hcGlLZXk7XG5cbiAgICAgICAgcmV0dXJuIG0ucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICB1cmw6IGJha2VyeS51cmwsXG4gICAgICAgICAgICBib2R5OiBiYWtlcnkuY3VycmVudFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYmFrZXJ5LnJlc2V0Q2FrZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gbS5yb3V0ZS5zZXQoXCIvXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFkZENha2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBiYWtlcnkuY3VycmVudC5hcGlfa2V5ID0gYmFrZXJ5LmFwaUtleTtcblxuICAgICAgICByZXR1cm4gbS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IGJha2VyeS51cmwsXG4gICAgICAgICAgICBib2R5OiBiYWtlcnkuY3VycmVudFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYmFrZXJ5LnJlc2V0Q2FrZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gbS5yb3V0ZS5zZXQoXCIvXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0Q2FrZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGJha2VyeS5jdXJyZW50ID0ge307XG4gICAgfVxufTtcblxuZXhwb3J0IHsgYmFrZXJ5IH07XG4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCB7IGJha2VyeSB9IGZyb20gXCIuLi9tb2RlbHMvYmFrZXJ5XCI7XG5cbmxldCBlZGl0Rm9ybSA9IHtcbiAgICBvbmluaXQ6IGZ1bmN0aW9uKHZub2RlKSB7XG4gICAgICAgIC8vIHV0c2tyaWZ0IGF2IHZub2RlLW9iamVrdCBmw7ZyIGF0dFxuICAgICAgICAvLyBleGVtcGxpZmllcmEgdmlydHVlbGxhIG5vZGVyIG9jaCAvLy8vLyBkZXQgdmlydHVlbGxhIERPTS1cbiAgICAgICAgLy8gdHLDpGRldC5cbiAgICAgICAgY29uc29sZS5sb2codm5vZGUpO1xuXG4gICAgICAgIC8vIHZub2RlLmF0dHJzLmlkIGlubmVow6VsbGVyIGRldCBpZFxuICAgICAgICAvLyB2aSBza2lja2FyIG1lZCBzb20gZW4gZGVsIGF2IHVybG5cbiAgICAgICAgLy8gZm9ybS86aWQuIFZpIGjDpG10YXIgcsOkdHQgYmFrdmVya1xuICAgICAgICAvLyBtZWQgaGrDpGxwIGF2IGlkXG4gICAgICAgIGJha2VyeS5sb2FkKHZub2RlLmF0dHJzLmlkKTtcbiAgICB9LFxuICAgIHZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbShcImRpdi5jb250YWluZXJcIiwgW1xuICAgICAgICAgICAgbShcImgyXCIsIFwiw4RuZHJhIGtha2FcIiksXG4gICAgICAgICAgICBtKFwiZm9ybVwiLCB7XG4gICAgICAgICAgICAgICAgb25zdWJtaXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJha2VyeS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgfSB9LCBbXG4gICAgICAgICAgICAgICAgbShcImxhYmVsLmlucHV0LWxhYmVsXCIsIFwiTmFtblwiKSxcbiAgICAgICAgICAgICAgICAvLyBJIG5lZGFuc3TDpWVuZGUga29kIGFudsOkbmRlciB2aSBvc3MgYXYgdHbDpSBhdHRyaWJ1dFxuICAgICAgICAgICAgICAgIC8vIG9uaW5wdXQgb2NoIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIHNrdWdnYXIvaGFyIHNhbW1hIHbDpHJkZSBzb20gZXR0IGF0dHJpYnV0IGlcbiAgICAgICAgICAgICAgICAvLyBtb2RlbGxlbiAoYmFrZXJ5LmN1cnJlbnQubmFtZSksIHZpIMOkbmRyYXIgc2VkYW5cbiAgICAgICAgICAgICAgICAvLyBkZXR0YSB2w6RyZGUgb2NoIHPDpHR0ZXIgZGV0IHRpbGwgZS50YXJnZXQudmFsdWUgLy8vL1xuICAgICAgICAgICAgICAgIC8vIHZhcmplIHZpIHNrcml2ZXIgaSBmw6RsdGV0LiB2YWx1ZSAob2NoIGRldCBzb20gZmlubnNcbiAgICAgICAgICAgICAgICAvLyBpIGbDpGx0ZXQgKSB1cHBkYXRlcmFzIHBlciBhdXRvbWF0aWsgdXRpZnLDpW5cbiAgICAgICAgICAgICAgICAvLyBtb2RlbGxlbnMgdsOkcmRlL3N0YXRlLlxuXG4gICAgICAgICAgICAgICAgbShcImlucHV0LmlucHV0W3R5cGU9dGV4dF1bcGxhY2Vob2xkZXI9TmFtZV1cIiwge1xuICAgICAgICAgICAgICAgICAgICBvbmlucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQubmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFrZXJ5LmN1cnJlbnQubmFtZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG0oXCJsYWJlbC5pbnB1dC1sYWJlbFwiLCBcIkxhZ2VycGxhdHNcIiksXG4gICAgICAgICAgICAgICAgbShcImlucHV0LmlucHV0W3R5cGU9dGV4dF1bcGxhY2Vob2xkZXI9TGFnZXJwbGF0c11cIiwge1xuICAgICAgICAgICAgICAgICAgICBvbmlucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQubG9jYXRpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJha2VyeS5jdXJyZW50LmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImxhYmVsLmlucHV0LWxhYmVsXCIsIFwiTGFnZXJzYWxkb1wiKSxcbiAgICAgICAgICAgICAgICBtKFwiaW5wdXQuaW5wdXRbdHlwZT1udW1iZXJdW3BsYWNlaG9sZGVyPUxhZ2Vyc2FsZG9dXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50LnN0b2NrID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFrZXJ5LmN1cnJlbnQuc3RvY2tcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJUeXBcIiksXG4gICAgICAgICAgICAgICAgbShcInNlbGVjdC5pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQuc3BlY2lmaWVycyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgICBiYWtlcnkuY2FrZVR5cGVzLm1hcChmdW5jdGlvbihjYWtlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0oXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYWtlVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogYmFrZXJ5LmN1cnJlbnQuc3BlY2lmaWVycyA9PT0gY2FrZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNha2VUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG0oXCJpbnB1dC5idXR0b24uZ3JlZW4tYnV0dG9uW3R5cGU9c3VibWl0XVt2YWx1ZT1TYXZlXS5idXR0b25cIiwgXCJTcGFyYVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgZWRpdEZvcm0gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9tb2RlbHMvYXV0aC5qc1wiO1xuXG52YXIgbGF5b3V0ID0ge1xuICAgIGxpbmtzOiBbXG4gICAgICAgIHsgbmFtZTogXCJIZW1cIiwgcm91dGU6IFwiIyEvXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk55XCIsIHJvdXRlOiBcIiMhL25ld1wiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMb2dnYSBpblwiLCByb3V0ZTogXCIjIS9sb2dpblwiIH0sXG4gICAgXSxcbiAgICB2aWV3OiBmdW5jdGlvbih2bm9kZSkge1xuICAgICAgICAvLyBGw7ZyIGF0dCBmw7ZyZW5rbGEgbmVkYW5zdMOlZW5kZSBrb2Qgc3BhcmFyIGphZyBpIHR2w6UgdmFyaWFibGVyXG4gICAgICAgIGxldCB0b3BOYXYgPSB2bm9kZS5hdHRycy50b3BOYXY7XG4gICAgICAgIGxldCBib3R0b21OYXYgPSB2bm9kZS5hdHRycy5ib3R0b21OYXY7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG0oXCJuYXYudG9wLW5hdlwiLCB7IHRleHRDb250ZW50OiBcIkVtaWxzIGtvbmRpdG9yaVwifSwgW1xuICAgICAgICAgICAgICAgIC8vIFZpIGFudsOkbmRlciB0ZXJuYXJ5LW9wZXJhdG9yIG9jaCBiZXJvZW5kZSBww6Ugb21cbiAgICAgICAgICAgICAgICAvLyB2IGhhciBzYXR0IHRvcE5hdiBpIGluZGV4LmpzIHZpc2FzIGVuIGzDpG5rIGVsbGVyIGVqXG4gICAgICAgICAgICAgICAgdG9wTmF2ID9cbiAgICAgICAgICAgICAgICAgICAgbShcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgbShcImFcIiwgeyBocmVmOiB0b3BOYXYucm91dGUgfSwgdG9wTmF2LnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICBdKSA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgLy8gSSBtYWluLWNvbnRpYW5lciB2aXNhciB2aSB1cHAgYmFybi1ub2Rlcm5hLlxuICAgICAgICAgICAgLy8gZGUgc2tpY2thZGVzIG1lZCBmcsOlbiBpbmRleC5qcyBzb20gZW4ga29tcG9uZW50XG4gICAgICAgICAgICAvLyB0aWxsZXhlbXBlbCBtKGxpc3QpXG4gICAgICAgICAgICBtKFwibWFpbi5jb250YWluZXJcIiwgdm5vZGUuY2hpbGRyZW4pLFxuICAgICAgICAgICAgLy8gVmkgbG9vcGFyIGlnZW5vbSBhbGxhIGxpbmtzIHZpIGhhciBzYXR0IG92YW5cbiAgICAgICAgICAgIG0oXCJuYXYuYm90dG9tLW5hdlwiLCBsYXlvdXQubGlua3MubWFwKGZ1bmN0aW9uKGxpbmspIHtcbiAgICAgICAgICAgICAgICAvLyBWaSB2aWxsIGJhcmEgYXR0IG1hbiBrYW4gbMOkZ2dhIHRpbGwgbnlhIGJha3ZlcmtcbiAgICAgICAgICAgICAgICAvLyBvbSBtYW4gw6RyIGlubG9nZ2F0LiBWaSBrb2xsYXIgb20gdG9rZW4gZmlubnMgaSBhdXRoXG4gICAgICAgICAgICAgICAgLy8gb2NoIG9tIGzDpG5rZW4gw6RyICMhL25ld1xuICAgICAgICAgICAgICAgIC8vIFwiVmFydmV0XCIgaSBtYXAtbG9vcGVuIGF2c2x1dGFzIGjDpHIgZ2Vub20gYXR0XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuZXJhIG51bGwsIHNvbSBpbnRlIHJlbmRlcmFzIHRpbGwgbsOlbnRpbmcgYXZcbiAgICAgICAgICAgICAgICAvLyBtaXRocmlsXG4gICAgICAgICAgICAgICAgaWYgKGxpbmsucm91dGUgPT09IFwiIyEvbmV3XCIgJiYgYXV0aC50b2tlbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBWaSByZXR1cm5lcmFyIGV0dCBhIGVsZW1lbnQgcGVyIGxpbmtcbiAgICAgICAgICAgICAgICAvLyBiZXJvZW5kZSBww6Ugb20gYm90dG9tTmF2IHbDpHJkZXQgw6RyIGxpa2EgbWVkXG4gICAgICAgICAgICAgICAgLy8gbnV2YXJhbmRlIGxpbmtzIHJvdXRlIHPDpHR0cyBlbiBrbGFzcyBww6UgZWxlbWVudGV0XG4gICAgICAgICAgICAgICAgLy8gdGlsbCBhY3RpdmUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG0oXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogbGluay5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGJvdHRvbU5hdiA9PT0gbGluay5yb3V0ZSA/IFwiYWN0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgfSwgbGluay5uYW1lKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICBdO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGxheW91dCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IHsgYmFrZXJ5IH0gZnJvbSAnLi4vbW9kZWxzL2Jha2VyeS5qcyc7XG5cbmNvbnN0IG5vQ2FrZXMgPSB7XG4gICAgdmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtKFwicFwiLCBcIkZpbm5zIGluZ2Ega2Frb3IhXCIpO1xuICAgIH1cbn07XG5cbmNvbnN0IGNha2VMaXN0ID0ge1xuICAgIHZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYmFrZXJ5LmN1cnJlbnRDYWtlcy5tYXAoZnVuY3Rpb24oY2FrZSkge1xuICAgICAgICAgICAgcmV0dXJuIG0oY2FrZUNvbXBvbmVudCwgY2FrZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGNha2VDb21wb25lbnQgPSB7XG4gICAgdmlldzogZnVuY3Rpb24odm5vZGUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB2bm9kZS5hdHRycztcblxuICAgICAgICByZXR1cm4gbShcImRpdi5jYXJkXCIsIFtcbiAgICAgICAgICAgIG0oXCJwLmNhcmQtdGl0bGVcIiwgY3VycmVudC5uYW1lKSxcbiAgICAgICAgICAgIG0oXCJwLmNhcmQtaW5mb1wiLCBcIlByaXM6IFwiICsgY3VycmVudC5wcmljZSArIFwiIExhZ2Vyc2FsZG86IFwiICsgY3VycmVudC5zdG9jayksXG4gICAgICAgICAgICBtKFwicC5jYXJkLWluZm9cIiwgXCJMYWdlcnBsYXRzOiBcIiArIGN1cnJlbnQubG9jYXRpb24pLFxuICAgICAgICAgICAgbShcImEuY2FyZC1pbmZvXCIsIHsgaHJlZjogXCIjIS9mb3JtL1wiICsgY3VycmVudC5pZCB9LCBcIsOEbmRyYVwiKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5sZXQgbGlzdCA9IHtcbiAgICBvbmluaXQ6IGJha2VyeS5sb2FkQWxsLFxuICAgIHZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbShcImRpdi5jb250YWluZXJcIiwgW1xuICAgICAgICAgICAgbShcImgxXCIsIFwiS2Frb3JcIiksXG4gICAgICAgICAgICBtKFxuICAgICAgICAgICAgICAgIFwiYS5idXR0b24uYmx1ZS1idXR0b24uZnVsbC13aWR0aC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7IGhyZWY6IFwiIyEvbmV3XCIgfSxcbiAgICAgICAgICAgICAgICBcIk55IGtha2FcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8vIFRlcm5lcnktb3BlcmF0b3I6XG4gICAgICAgICAgICAvLyBbdmlsbGtvciA/IHJldHVyLXbDpHJkZSBvbSBzYW50IDogcmV0dXItdsOkcmRlIG9tIGZhbHNrdF1cbiAgICAgICAgICAgIC8vIEjDpHIgdXRueXR0amFyIHZpIGlubGluZS1pZi1zYXRzZW4gdGVybmVyeS1vcGVyYXRvclxuICAgICAgICAgICAgLy8gb20gZGV0IGZpbm5zIG7DpWdvdCBpIGN1cnJlbnRDYWtlcyBsYWRkYXIgdmkgbGlzdGFuXG4gICAgICAgICAgICAvLyBBbm5hcnMgZW4gdGV4dCBvbSBhdHQgZGV0IGludGUgZmlubnMga2Frb3IuXG4gICAgICAgICAgICAvLyAzIHNla3VuZGVycyB0aW1lb3V0IGkgbW9kZWxsZW4gZ8O2ciBhdHQgZsO2cnN0IHN5bnMgdGV4dGVuXG4gICAgICAgICAgICAvLyBTZW4gc3lucyBsaXN0YW4uIFNlIGtvbXBvbmVudGVybmEgb3Zhbi5cbiAgICAgICAgICAgIC8vIMOEciBldHQgYnJhIHPDpHR0IGF0dCBmw6UgbcOlbmdhIHNtw6Uga29tcG9uZW50ZXIgc29tIGhhclxuICAgICAgICAgICAgLy8gZXR0IGFuc3ZhcnNvbXLDpWRlLlxuICAgICAgICAgICAgLy8gT2Nrc8OlIGthbGxhdCBTUlAgLSBzaW5nbGUgcmVzcG9uc2liaWxpdHkgcHJpbmNpcGxlLlxuICAgICAgICAgICAgLy8gw4R2ZW4gZXR0IHPDpHR0IGF0dCBza2FwYSBlbiBsb2FkaW5nLXNudXJyYS5cbiAgICAgICAgICAgIG0oXCJkaXYuY2FrZS1jb250YWluZXJcIiwgYmFrZXJ5LmN1cnJlbnRDYWtlcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0oY2FrZUxpc3QpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtKG5vQ2FrZXMpKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBsaXN0IH07XG4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9tb2RlbHMvYXV0aC5qc1wiO1xuXG5sZXQgbG9naW4gPSB7XG4gICAgdmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtKFwiZGl2LmNvbnRhaW5lclwiLFxuICAgICAgICAgICAgbShcImgyXCIsIFwiTG9nZ2EgaW5cIiksXG4gICAgICAgICAgICBtKFwicFwiLCBcIkZpbm5zIGVuIHJlZ2lzdHJlcmFkIGFudsOkbmRhcmU6IGtha2FAa2FrYS5zZSwgTMO2c2Vub3JkOiB0ZXN0MTIzNFwiKSxcbiAgICAgICAgICAgIG0oXCJmb3JtXCIsIHtcbiAgICAgICAgICAgICAgICBvbnN1Ym1pdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYXV0aC5sb2dpbigpO1xuICAgICAgICAgICAgICAgIH0gfSwgW1xuICAgICAgICAgICAgICAgIG0oXCJsYWJlbC5pbnB1dC1sYWJlbFwiLCBcIkUtcG9zdFwiKSxcbiAgICAgICAgICAgICAgICBtKFwiaW5wdXQuaW5wdXRbdHlwZT1lbWFpbF1bcGxhY2Vob2xkZXI9RS1wb3N0XVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoLmVtYWlsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdXRoLmVtYWlsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImxhYmVsLmlucHV0LWxhYmVsXCIsIFwiTMO2c2Vub3JkXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJpbnB1dC5pbnB1dFt0eXBlPXBhc3N3b3JkXVtwbGFjZWhvbGRlcj1Mw7ZzZW5vcmRdXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGgucGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF1dGgucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwiaW5wdXQuYnV0dG9uLmdyZWVuLWJ1dHRvblt0eXBlPXN1Ym1pdF1bdmFsdWU9TG9nZ2EgaW5dLmJ1dHRvblwiLCBcIkxvZ2dhIGluXCIpXG4gICAgICAgICAgICBdKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgbG9naW4gfTtcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IHsgYmFrZXJ5IH0gZnJvbSBcIi4uL21vZGVscy9iYWtlcnlcIjtcblxubGV0IG5ld0Zvcm0gPSB7XG4gICAgb25pbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFrZXJ5LmN1cnJlbnQuc3BlY2lmaWVycyA9IFwiVMOlcnRhXCI7XG4gICAgICAgIGJha2VyeS5yZXNldENha2UoKTtcbiAgICB9LFxuICAgIHZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbShcImRpdi5jb250YWluZXJcIiwgW1xuICAgICAgICAgICAgbShcImgyXCIsIFwiTnkga2FrYVwiKSxcbiAgICAgICAgICAgIG0oXCJmb3JtXCIsIHtcbiAgICAgICAgICAgICAgICBvbnN1Ym1pdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJha2VyeS5jdXJyZW50LnNwZWNpZmllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJha2VyeS5hZGRDYWtlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IH0sIFtcbiAgICAgICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJOYW1uXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJpbnB1dC5pbnB1dFt0eXBlPXRleHRdW3BsYWNlaG9sZGVyPU5hbWVdXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50Lm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJha2VyeS5jdXJyZW50Lm5hbWVcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJBcnRpa2VsbnVtbWVyXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJpbnB1dC5pbnB1dFt0eXBlPXRleHRdW3BsYWNlaG9sZGVyPUFydGlrZWxudW1tZXJdXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50LmFydGljbGVfbnVtYmVyID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiYWtlcnkuY3VycmVudC5hcnRpY2xlX251bWJlclxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG0oXCJsYWJlbC5pbnB1dC1sYWJlbFwiLCBcIkJlc2tyaXZuaW5nXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJ0ZXh0YXJlYS5pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWtlcnkuY3VycmVudC5kZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFrZXJ5LmN1cnJlbnQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJMYWdlcnBsYXRzXCIpLFxuICAgICAgICAgICAgICAgIG0oXCJpbnB1dC5pbnB1dFt0eXBlPXRleHRdW3BsYWNlaG9sZGVyPUxhZ2VycGxhdHNdXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50LmxvY2F0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiYWtlcnkuY3VycmVudC5sb2NhdGlvblxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG0oXCJsYWJlbC5pbnB1dC1sYWJlbFwiLCBcIkxhZ2Vyc2FsZG9cIiksXG4gICAgICAgICAgICAgICAgbShcImlucHV0LmlucHV0W3R5cGU9bnVtYmVyXVtwbGFjZWhvbGRlcj1MYWdlcnNhbGRvXVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWtlcnkuY3VycmVudC5zdG9jayA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJha2VyeS5jdXJyZW50LnN0b2NrXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbShcImxhYmVsLmlucHV0LWxhYmVsXCIsIFwiUHJpc1wiKSxcbiAgICAgICAgICAgICAgICBtKFwiaW5wdXQuaW5wdXRbdHlwZT1udW1iZXJdW3BsYWNlaG9sZGVyPVByaXNdXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJha2VyeS5jdXJyZW50LnByaWNlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFrZXJ5LmN1cnJlbnQucHJpY2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtKFwibGFiZWwuaW5wdXQtbGFiZWxcIiwgXCJUeXBcIiksXG4gICAgICAgICAgICAgICAgbShcInNlbGVjdC5pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFrZXJ5LmN1cnJlbnQuc3BlY2lmaWVycyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgbShcIm9wdGlvblwiLCB7IHZhbHVlOiBcIlwiIH0sIFwiVsOkbGogZW4gdHlwXCIpLFxuICAgICAgICAgICAgICAgICAgICBiYWtlcnkuY2FrZVR5cGVzLm1hcChmdW5jdGlvbihjYWtlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0oXCJvcHRpb25cIiwgeyB2YWx1ZTogY2FrZVR5cGUgfSwgY2FrZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIG0oXCJpbnB1dC5idXR0b24uZ3JlZW4tYnV0dG9uW3R5cGU9c3VibWl0XVt2YWx1ZT1TYXZlXS5idXR0b25cIiwgXCJTa2FwYSBrYWthXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBuZXdGb3JtIH07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVuZGVyLCBzY2hlZHVsZSwgY29uc29sZSkge1xuXHR2YXIgc3Vic2NyaXB0aW9ucyA9IFtdXG5cdHZhciByZW5kZXJpbmcgPSBmYWxzZVxuXHR2YXIgcGVuZGluZyA9IGZhbHNlXG5cblx0ZnVuY3Rpb24gc3luYygpIHtcblx0XHRpZiAocmVuZGVyaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJOZXN0ZWQgbS5yZWRyYXcuc3luYygpIGNhbGxcIilcblx0XHRyZW5kZXJpbmcgPSB0cnVlXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpcHRpb25zLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHR0cnkgeyByZW5kZXIoc3Vic2NyaXB0aW9uc1tpXSwgVm5vZGUoc3Vic2NyaXB0aW9uc1tpICsgMV0pLCByZWRyYXcpIH1cblx0XHRcdGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxuXHRcdH1cblx0XHRyZW5kZXJpbmcgPSBmYWxzZVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVkcmF3KCkge1xuXHRcdGlmICghcGVuZGluZykge1xuXHRcdFx0cGVuZGluZyA9IHRydWVcblx0XHRcdHNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwZW5kaW5nID0gZmFsc2Vcblx0XHRcdFx0c3luYygpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlZHJhdy5zeW5jID0gc3luY1xuXG5cdGZ1bmN0aW9uIG1vdW50KHJvb3QsIGNvbXBvbmVudCkge1xuXHRcdGlmIChjb21wb25lbnQgIT0gbnVsbCAmJiBjb21wb25lbnQudmlldyA9PSBudWxsICYmIHR5cGVvZiBjb21wb25lbnQgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIm0ubW91bnQoZWxlbWVudCwgY29tcG9uZW50KSBleHBlY3RzIGEgY29tcG9uZW50LCBub3QgYSB2bm9kZVwiKVxuXHRcdH1cblxuXHRcdHZhciBpbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihyb290KVxuXHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnNwbGljZShpbmRleCwgMilcblx0XHRcdHJlbmRlcihyb290LCBbXSwgcmVkcmF3KVxuXHRcdH1cblxuXHRcdGlmIChjb21wb25lbnQgIT0gbnVsbCkge1xuXHRcdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHJvb3QsIGNvbXBvbmVudClcblx0XHRcdHJlbmRlcihyb290LCBWbm9kZShjb21wb25lbnQpLCByZWRyYXcpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHttb3VudDogbW91bnQsIHJlZHJhdzogcmVkcmF3fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxudmFyIG0gPSByZXF1aXJlKFwiLi4vcmVuZGVyL2h5cGVyc2NyaXB0XCIpXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9wcm9taXNlL3Byb21pc2VcIilcblxudmFyIGJ1aWxkUGF0aG5hbWUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvYnVpbGRcIilcbnZhciBwYXJzZVBhdGhuYW1lID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL3BhcnNlXCIpXG52YXIgY29tcGlsZVRlbXBsYXRlID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2NvbXBpbGVUZW1wbGF0ZVwiKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9hc3NpZ25cIilcblxudmFyIHNlbnRpbmVsID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkd2luZG93LCBtb3VudFJlZHJhdykge1xuXHR2YXIgZmlyZUFzeW5jXG5cblx0ZnVuY3Rpb24gc2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0cGF0aCA9IGJ1aWxkUGF0aG5hbWUocGF0aCwgZGF0YSlcblx0XHRpZiAoZmlyZUFzeW5jICE9IG51bGwpIHtcblx0XHRcdGZpcmVBc3luYygpXG5cdFx0XHR2YXIgc3RhdGUgPSBvcHRpb25zID8gb3B0aW9ucy5zdGF0ZSA6IG51bGxcblx0XHRcdHZhciB0aXRsZSA9IG9wdGlvbnMgPyBvcHRpb25zLnRpdGxlIDogbnVsbFxuXHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXBsYWNlKSAkd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGUucHJlZml4ICsgcGF0aClcblx0XHRcdGVsc2UgJHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlLnByZWZpeCArIHBhdGgpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0JHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcm91dGUucHJlZml4ICsgcGF0aFxuXHRcdH1cblx0fVxuXG5cdHZhciBjdXJyZW50UmVzb2x2ZXIgPSBzZW50aW5lbCwgY29tcG9uZW50LCBhdHRycywgY3VycmVudFBhdGgsIGxhc3RVcGRhdGVcblxuXHR2YXIgU0tJUCA9IHJvdXRlLlNLSVAgPSB7fVxuXG5cdGZ1bmN0aW9uIHJvdXRlKHJvb3QsIGRlZmF1bHRSb3V0ZSwgcm91dGVzKSB7XG5cdFx0aWYgKHJvb3QgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCB0aGF0IHdhcyBwYXNzZWQgdG8gYG0ucm91dGVgIGlzIG5vdCB1bmRlZmluZWRcIilcblx0XHQvLyAwID0gc3RhcnRcblx0XHQvLyAxID0gaW5pdFxuXHRcdC8vIDIgPSByZWFkeVxuXHRcdHZhciBzdGF0ZSA9IDBcblxuXHRcdHZhciBjb21waWxlZCA9IE9iamVjdC5rZXlzKHJvdXRlcykubWFwKGZ1bmN0aW9uKHJvdXRlKSB7XG5cdFx0XHRpZiAocm91dGVbMF0gIT09IFwiL1wiKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJSb3V0ZXMgbXVzdCBzdGFydCB3aXRoIGEgYC9gXCIpXG5cdFx0XHRpZiAoKC86KFteXFwvXFwuLV0rKShcXC57M30pPzovKS50ZXN0KHJvdXRlKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJSb3V0ZSBwYXJhbWV0ZXIgbmFtZXMgbXVzdCBiZSBzZXBhcmF0ZWQgd2l0aCBlaXRoZXIgYC9gLCBgLmAsIG9yIGAtYFwiKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cm91dGU6IHJvdXRlLFxuXHRcdFx0XHRjb21wb25lbnQ6IHJvdXRlc1tyb3V0ZV0sXG5cdFx0XHRcdGNoZWNrOiBjb21waWxlVGVtcGxhdGUocm91dGUpLFxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dmFyIGNhbGxBc3luYyA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0XHR2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpXG5cdFx0dmFyIHNjaGVkdWxlZCA9IGZhbHNlXG5cdFx0dmFyIG9ucmVtb3ZlXG5cblx0XHRmaXJlQXN5bmMgPSBudWxsXG5cblx0XHRpZiAoZGVmYXVsdFJvdXRlICE9IG51bGwpIHtcblx0XHRcdHZhciBkZWZhdWx0RGF0YSA9IHBhcnNlUGF0aG5hbWUoZGVmYXVsdFJvdXRlKVxuXG5cdFx0XHRpZiAoIWNvbXBpbGVkLnNvbWUoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuY2hlY2soZGVmYXVsdERhdGEpIH0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIkRlZmF1bHQgcm91dGUgZG9lc24ndCBtYXRjaCBhbnkga25vd24gcm91dGVzXCIpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVzb2x2ZVJvdXRlKCkge1xuXHRcdFx0c2NoZWR1bGVkID0gZmFsc2Vcblx0XHRcdC8vIENvbnNpZGVyIHRoZSBwYXRobmFtZSBob2xpc3RpY2FsbHkuIFRoZSBwcmVmaXggbWlnaHQgZXZlbiBiZSBpbnZhbGlkLFxuXHRcdFx0Ly8gYnV0IHRoYXQncyBub3Qgb3VyIHByb2JsZW0uXG5cdFx0XHR2YXIgcHJlZml4ID0gJHdpbmRvdy5sb2NhdGlvbi5oYXNoXG5cdFx0XHRpZiAocm91dGUucHJlZml4WzBdICE9PSBcIiNcIikge1xuXHRcdFx0XHRwcmVmaXggPSAkd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHByZWZpeFxuXHRcdFx0XHRpZiAocm91dGUucHJlZml4WzBdICE9PSBcIj9cIikge1xuXHRcdFx0XHRcdHByZWZpeCA9ICR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBwcmVmaXhcblx0XHRcdFx0XHRpZiAocHJlZml4WzBdICE9PSBcIi9cIikgcHJlZml4ID0gXCIvXCIgKyBwcmVmaXhcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gVGhpcyBzZWVtaW5nbHkgdXNlbGVzcyBgLmNvbmNhdCgpYCBzcGVlZHMgdXAgdGhlIHRlc3RzIHF1aXRlIGEgYml0LFxuXHRcdFx0Ly8gc2luY2UgdGhlIHJlcHJlc2VudGF0aW9uIGlzIGNvbnNpc3RlbnRseSBhIHJlbGF0aXZlbHkgcG9vcmx5XG5cdFx0XHQvLyBvcHRpbWl6ZWQgY29ucyBzdHJpbmcuXG5cdFx0XHR2YXIgcGF0aCA9IHByZWZpeC5jb25jYXQoKVxuXHRcdFx0XHQucmVwbGFjZSgvKD86JVthLWY4OV1bYS1mMC05XSkrL2dpbSwgZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0XHQuc2xpY2Uocm91dGUucHJlZml4Lmxlbmd0aClcblx0XHRcdHZhciBkYXRhID0gcGFyc2VQYXRobmFtZShwYXRoKVxuXG5cdFx0XHRhc3NpZ24oZGF0YS5wYXJhbXMsICR3aW5kb3cuaGlzdG9yeS5zdGF0ZSlcblxuXHRcdFx0ZnVuY3Rpb24gZmFpbCgpIHtcblx0XHRcdFx0aWYgKHBhdGggPT09IGRlZmF1bHRSb3V0ZSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgZGVmYXVsdCByb3V0ZSBcIiArIGRlZmF1bHRSb3V0ZSlcblx0XHRcdFx0c2V0UGF0aChkZWZhdWx0Um91dGUsIG51bGwsIHtyZXBsYWNlOiB0cnVlfSlcblx0XHRcdH1cblxuXHRcdFx0bG9vcCgwKVxuXHRcdFx0ZnVuY3Rpb24gbG9vcChpKSB7XG5cdFx0XHRcdC8vIDAgPSBpbml0XG5cdFx0XHRcdC8vIDEgPSBzY2hlZHVsZWRcblx0XHRcdFx0Ly8gMiA9IGRvbmVcblx0XHRcdFx0Zm9yICg7IGkgPCBjb21waWxlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjb21waWxlZFtpXS5jaGVjayhkYXRhKSkge1xuXHRcdFx0XHRcdFx0dmFyIHBheWxvYWQgPSBjb21waWxlZFtpXS5jb21wb25lbnRcblx0XHRcdFx0XHRcdHZhciBtYXRjaGVkUm91dGUgPSBjb21waWxlZFtpXS5yb3V0ZVxuXHRcdFx0XHRcdFx0dmFyIGxvY2FsQ29tcCA9IHBheWxvYWRcblx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBsYXN0VXBkYXRlID0gZnVuY3Rpb24oY29tcCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0XHRcdFx0aWYgKGNvbXAgPT09IFNLSVApIHJldHVybiBsb29wKGkgKyAxKVxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQgPSBjb21wICE9IG51bGwgJiYgKHR5cGVvZiBjb21wLnZpZXcgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgY29tcCA9PT0gXCJmdW5jdGlvblwiKT8gY29tcCA6IFwiZGl2XCJcblx0XHRcdFx0XHRcdFx0YXR0cnMgPSBkYXRhLnBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50UmVzb2x2ZXIgPSBwYXlsb2FkLnJlbmRlciA/IHBheWxvYWQgOiBudWxsXG5cdFx0XHRcdFx0XHRcdGlmIChzdGF0ZSA9PT0gMikgbW91bnRSZWRyYXcucmVkcmF3KClcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGUgPSAyXG5cdFx0XHRcdFx0XHRcdFx0bW91bnRSZWRyYXcucmVkcmF3LnN5bmMoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBUaGVyZSdzIG5vIHVuZGVyc3RhdGluZyBob3cgbXVjaCBJICp3aXNoKiBJIGNvdWxkXG5cdFx0XHRcdFx0XHQvLyB1c2UgYGFzeW5jYC9gYXdhaXRgIGhlcmUuLi5cblx0XHRcdFx0XHRcdGlmIChwYXlsb2FkLnZpZXcgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRwYXlsb2FkID0ge31cblx0XHRcdFx0XHRcdFx0dXBkYXRlKGxvY2FsQ29tcClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHBheWxvYWQub25tYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRwLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXlsb2FkLm9ubWF0Y2goZGF0YS5wYXJhbXMsIHBhdGgsIG1hdGNoZWRSb3V0ZSlcblx0XHRcdFx0XHRcdFx0fSkudGhlbih1cGRhdGUsIGZhaWwpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHVwZGF0ZShcImRpdlwiKVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZhaWwoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCBpdCB1bmNvbmRpdGlvbmFsbHkgc28gYG0ucm91dGUuc2V0YCBhbmQgYG0ucm91dGUuTGlua2AgYm90aCB3b3JrLFxuXHRcdC8vIGV2ZW4gaWYgbmVpdGhlciBgcHVzaFN0YXRlYCBub3IgYGhhc2hjaGFuZ2VgIGFyZSBzdXBwb3J0ZWQuIEl0J3Ncblx0XHQvLyBjbGVhcmVkIGlmIGBoYXNoY2hhbmdlYCBpcyB1c2VkLCBzaW5jZSB0aGF0IG1ha2VzIGl0IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBhc3luYy5cblx0XHRmaXJlQXN5bmMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghc2NoZWR1bGVkKSB7XG5cdFx0XHRcdHNjaGVkdWxlZCA9IHRydWVcblx0XHRcdFx0Y2FsbEFzeW5jKHJlc29sdmVSb3V0ZSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodHlwZW9mICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0b25yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZmlyZUFzeW5jLCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdCR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZpcmVBc3luYywgZmFsc2UpXG5cdFx0fSBlbHNlIGlmIChyb3V0ZS5wcmVmaXhbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHRmaXJlQXN5bmMgPSBudWxsXG5cdFx0XHRvbnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0XHR9XG5cdFx0XHQkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vdW50UmVkcmF3Lm1vdW50KHJvb3QsIHtcblx0XHRcdG9uYmVmb3JldXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3RhdGUgPSBzdGF0ZSA/IDIgOiAxXG5cdFx0XHRcdHJldHVybiAhKCFzdGF0ZSB8fCBzZW50aW5lbCA9PT0gY3VycmVudFJlc29sdmVyKVxuXHRcdFx0fSxcblx0XHRcdG9uY3JlYXRlOiByZXNvbHZlUm91dGUsXG5cdFx0XHRvbnJlbW92ZTogb25yZW1vdmUsXG5cdFx0XHR2aWV3OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCFzdGF0ZSB8fCBzZW50aW5lbCA9PT0gY3VycmVudFJlc29sdmVyKSByZXR1cm5cblx0XHRcdFx0Ly8gV3JhcCBpbiBhIGZyYWdtZW50IHRvIHByZXNlcnZlIGV4aXN0aW5nIGtleSBzZW1hbnRpY3Ncblx0XHRcdFx0dmFyIHZub2RlID0gW1Zub2RlKGNvbXBvbmVudCwgYXR0cnMua2V5LCBhdHRycyldXG5cdFx0XHRcdGlmIChjdXJyZW50UmVzb2x2ZXIpIHZub2RlID0gY3VycmVudFJlc29sdmVyLnJlbmRlcih2bm9kZVswXSlcblx0XHRcdFx0cmV0dXJuIHZub2RlXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblx0cm91dGUuc2V0ID0gZnVuY3Rpb24ocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdGlmIChsYXN0VXBkYXRlICE9IG51bGwpIHtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0XHRvcHRpb25zLnJlcGxhY2UgPSB0cnVlXG5cdFx0fVxuXHRcdGxhc3RVcGRhdGUgPSBudWxsXG5cdFx0c2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKVxuXHR9XG5cdHJvdXRlLmdldCA9IGZ1bmN0aW9uKCkge3JldHVybiBjdXJyZW50UGF0aH1cblx0cm91dGUucHJlZml4ID0gXCIjIVwiXG5cdHJvdXRlLkxpbmsgPSB7XG5cdFx0dmlldzogZnVuY3Rpb24odm5vZGUpIHtcblx0XHRcdHZhciBvcHRpb25zID0gdm5vZGUuYXR0cnMub3B0aW9uc1xuXHRcdFx0Ly8gUmVtb3ZlIHRoZXNlIHNvIHRoZXkgZG9uJ3QgZ2V0IG92ZXJ3cml0dGVuXG5cdFx0XHR2YXIgYXR0cnMgPSB7fSwgb25jbGljaywgaHJlZlxuXHRcdFx0YXNzaWduKGF0dHJzLCB2bm9kZS5hdHRycylcblx0XHRcdC8vIFRoZSBmaXJzdCB0d28gYXJlIGludGVybmFsLCBidXQgdGhlIHJlc3QgYXJlIG1hZ2ljIGF0dHJpYnV0ZXNcblx0XHRcdC8vIHRoYXQgbmVlZCBjZW5zb3JlZCB0byBub3Qgc2NyZXcgdXAgcmVuZGVyaW5nLlxuXHRcdFx0YXR0cnMuc2VsZWN0b3IgPSBhdHRycy5vcHRpb25zID0gYXR0cnMua2V5ID0gYXR0cnMub25pbml0ID1cblx0XHRcdGF0dHJzLm9uY3JlYXRlID0gYXR0cnMub25iZWZvcmV1cGRhdGUgPSBhdHRycy5vbnVwZGF0ZSA9XG5cdFx0XHRhdHRycy5vbmJlZm9yZXJlbW92ZSA9IGF0dHJzLm9ucmVtb3ZlID0gbnVsbFxuXG5cdFx0XHQvLyBEbyB0aGlzIG5vdyBzbyB3ZSBjYW4gZ2V0IHRoZSBtb3N0IGN1cnJlbnQgYGhyZWZgIGFuZCBgZGlzYWJsZWRgLlxuXHRcdFx0Ly8gVGhvc2UgYXR0cmlidXRlcyBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgaW4gdGhlIHNlbGVjdG9yLCBhbmQgd2Vcblx0XHRcdC8vIHNob3VsZCBob25vciB0aGF0LlxuXHRcdFx0dmFyIGNoaWxkID0gbSh2bm9kZS5hdHRycy5zZWxlY3RvciB8fCBcImFcIiwgYXR0cnMsIHZub2RlLmNoaWxkcmVuKVxuXG5cdFx0XHQvLyBMZXQncyBwcm92aWRlIGEgKnJpZ2h0KiB3YXkgdG8gZGlzYWJsZSBhIHJvdXRlIGxpbmssIHJhdGhlciB0aGFuXG5cdFx0XHQvLyBsZXR0aW5nIHBlb3BsZSBzY3JldyB1cCBhY2Nlc3NpYmlsaXR5IG9uIGFjY2lkZW50LlxuXHRcdFx0Ly9cblx0XHRcdC8vIFRoZSBhdHRyaWJ1dGUgaXMgY29lcmNlZCBzbyB1c2VycyBkb24ndCBnZXQgc3VycHJpc2VkIG92ZXJcblx0XHRcdC8vIGBkaXNhYmxlZDogMGAgcmVzdWx0aW5nIGluIGEgYnV0dG9uIHRoYXQncyBzb21laG93IHJvdXRhYmxlXG5cdFx0XHQvLyBkZXNwaXRlIGJlaW5nIHZpc2libHkgZGlzYWJsZWQuXG5cdFx0XHRpZiAoY2hpbGQuYXR0cnMuZGlzYWJsZWQgPSBCb29sZWFuKGNoaWxkLmF0dHJzLmRpc2FibGVkKSkge1xuXHRcdFx0XHRjaGlsZC5hdHRycy5ocmVmID0gbnVsbFxuXHRcdFx0XHRjaGlsZC5hdHRyc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBcInRydWVcIlxuXHRcdFx0XHQvLyBJZiB5b3UgKnJlYWxseSogZG8gd2FudCB0byBkbyB0aGlzIG9uIGEgZGlzYWJsZWQgbGluaywgdXNlXG5cdFx0XHRcdC8vIGFuIGBvbmNyZWF0ZWAgaG9vayB0byBhZGQgaXQuXG5cdFx0XHRcdGNoaWxkLmF0dHJzLm9uY2xpY2sgPSBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbmNsaWNrID0gY2hpbGQuYXR0cnMub25jbGlja1xuXHRcdFx0XHRocmVmID0gY2hpbGQuYXR0cnMuaHJlZlxuXHRcdFx0XHRjaGlsZC5hdHRycy5ocmVmID0gcm91dGUucHJlZml4ICsgaHJlZlxuXHRcdFx0XHRjaGlsZC5hdHRycy5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHZhciByZXN1bHRcblx0XHRcdFx0XHRpZiAodHlwZW9mIG9uY2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gb25jbGljay5jYWxsKGUuY3VycmVudFRhcmdldCwgZSlcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG9uY2xpY2sgPT0gbnVsbCB8fCB0eXBlb2Ygb25jbGljayAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uY2xpY2suaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0b25jbGljay5oYW5kbGVFdmVudChlKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEFkYXB0ZWQgZnJvbSBSZWFjdCBSb3V0ZXIncyBpbXBsZW1lbnRhdGlvbjpcblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9yZWFjdC1yb3V0ZXIvYmxvYi81MjBhMGFjZDQ4YWUxYjA2NmViMGIwN2Q2ZDRkMTc5MGExZDAyNDgyL3BhY2thZ2VzL3JlYWN0LXJvdXRlci1kb20vbW9kdWxlcy9MaW5rLmpzXG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBUcnkgdG8gYmUgZmxleGlibGUgYW5kIGludHVpdGl2ZSBpbiBob3cgd2UgaGFuZGxlIGxpbmtzLlxuXHRcdFx0XHRcdC8vIEZ1biBmYWN0OiBsaW5rcyBhcmVuJ3QgYXMgb2J2aW91cyB0byBnZXQgcmlnaHQgYXMgeW91XG5cdFx0XHRcdFx0Ly8gd291bGQgZXhwZWN0LiBUaGVyZSdzIGEgbG90IG1vcmUgdmFsaWQgd2F5cyB0byBjbGljayBhXG5cdFx0XHRcdFx0Ly8gbGluayB0aGFuIHRoaXMsIGFuZCBvbmUgbWlnaHQgd2FudCB0byBub3Qgc2ltcGx5IGNsaWNrIGFcblx0XHRcdFx0XHQvLyBsaW5rLCBidXQgcmlnaHQgY2xpY2sgb3IgY29tbWFuZC1jbGljayBpdCB0byBjb3B5IHRoZVxuXHRcdFx0XHRcdC8vIGxpbmsgdGFyZ2V0LCBldGMuIE5vcGUsIHRoaXMgaXNuJ3QganVzdCBmb3IgYmxpbmQgcGVvcGxlLlxuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdC8vIFNraXAgaWYgYG9uY2xpY2tgIHByZXZlbnRlZCBkZWZhdWx0XG5cdFx0XHRcdFx0XHRyZXN1bHQgIT09IGZhbHNlICYmICFlLmRlZmF1bHRQcmV2ZW50ZWQgJiZcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuXHRcdFx0XHRcdFx0KGUuYnV0dG9uID09PSAwIHx8IGUud2hpY2ggPT09IDAgfHwgZS53aGljaCA9PT0gMSkgJiZcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgYHRhcmdldD1fYmxhbmtgLCBldGMuXG5cdFx0XHRcdFx0XHQoIWUuY3VycmVudFRhcmdldC50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJlxuXHRcdFx0XHRcdFx0Ly8gTm8gbW9kaWZpZXIga2V5c1xuXHRcdFx0XHRcdFx0IWUuY3RybEtleSAmJiAhZS5tZXRhS2V5ICYmICFlLnNoaWZ0S2V5ICYmICFlLmFsdEtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRlLnJlZHJhdyA9IGZhbHNlXG5cdFx0XHRcdFx0XHRyb3V0ZS5zZXQoaHJlZiwgbnVsbCwgb3B0aW9ucylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGlsZFxuXHRcdH0sXG5cdH1cblx0cm91dGUucGFyYW0gPSBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4gYXR0cnMgJiYga2V5ICE9IG51bGwgPyBhdHRyc1trZXldIDogYXR0cnNcblx0fVxuXG5cdHJldHVybiByb3V0ZVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGh5cGVyc2NyaXB0ID0gcmVxdWlyZShcIi4vcmVuZGVyL2h5cGVyc2NyaXB0XCIpXG5cbmh5cGVyc2NyaXB0LnRydXN0ID0gcmVxdWlyZShcIi4vcmVuZGVyL3RydXN0XCIpXG5oeXBlcnNjcmlwdC5mcmFnbWVudCA9IHJlcXVpcmUoXCIuL3JlbmRlci9mcmFnbWVudFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGVyc2NyaXB0XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgaHlwZXJzY3JpcHQgPSByZXF1aXJlKFwiLi9oeXBlcnNjcmlwdFwiKVxudmFyIHJlcXVlc3QgPSByZXF1aXJlKFwiLi9yZXF1ZXN0XCIpXG52YXIgbW91bnRSZWRyYXcgPSByZXF1aXJlKFwiLi9tb3VudC1yZWRyYXdcIilcblxudmFyIG0gPSBmdW5jdGlvbiBtKCkgeyByZXR1cm4gaHlwZXJzY3JpcHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9XG5tLm0gPSBoeXBlcnNjcmlwdFxubS50cnVzdCA9IGh5cGVyc2NyaXB0LnRydXN0XG5tLmZyYWdtZW50ID0gaHlwZXJzY3JpcHQuZnJhZ21lbnRcbm0ubW91bnQgPSBtb3VudFJlZHJhdy5tb3VudFxubS5yb3V0ZSA9IHJlcXVpcmUoXCIuL3JvdXRlXCIpXG5tLnJlbmRlciA9IHJlcXVpcmUoXCIuL3JlbmRlclwiKVxubS5yZWRyYXcgPSBtb3VudFJlZHJhdy5yZWRyYXdcbm0ucmVxdWVzdCA9IHJlcXVlc3QucmVxdWVzdFxubS5qc29ucCA9IHJlcXVlc3QuanNvbnBcbm0ucGFyc2VRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nL3BhcnNlXCIpXG5tLmJ1aWxkUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi9xdWVyeXN0cmluZy9idWlsZFwiKVxubS5wYXJzZVBhdGhuYW1lID0gcmVxdWlyZShcIi4vcGF0aG5hbWUvcGFyc2VcIilcbm0uYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuL3BhdGhuYW1lL2J1aWxkXCIpXG5tLnZub2RlID0gcmVxdWlyZShcIi4vcmVuZGVyL3Zub2RlXCIpXG5tLlByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3Byb21pc2UvcG9seWZpbGxcIilcblxubW9kdWxlLmV4cG9ydHMgPSBtXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcmVuZGVyID0gcmVxdWlyZShcIi4vcmVuZGVyXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vYXBpL21vdW50LXJlZHJhd1wiKShyZW5kZXIsIHJlcXVlc3RBbmltYXRpb25GcmFtZSwgY29uc29sZSlcbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZihzb3VyY2UpIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSB9KVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGJ1aWxkUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnlzdHJpbmcvYnVpbGRcIilcbnZhciBhc3NpZ24gPSByZXF1aXJlKFwiLi9hc3NpZ25cIilcblxuLy8gUmV0dXJucyBgcGF0aGAgZnJvbSBgdGVtcGxhdGVgICsgYHBhcmFtc2Bcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGVtcGxhdGUsIHBhcmFtcykge1xuXHRpZiAoKC86KFteXFwvXFwuLV0rKShcXC57M30pPzovKS50ZXN0KHRlbXBsYXRlKSkge1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcyAqbXVzdCogYmUgc2VwYXJhdGVkXCIpXG5cdH1cblx0aWYgKHBhcmFtcyA9PSBudWxsKSByZXR1cm4gdGVtcGxhdGVcblx0dmFyIHF1ZXJ5SW5kZXggPSB0ZW1wbGF0ZS5pbmRleE9mKFwiP1wiKVxuXHR2YXIgaGFzaEluZGV4ID0gdGVtcGxhdGUuaW5kZXhPZihcIiNcIilcblx0dmFyIHF1ZXJ5RW5kID0gaGFzaEluZGV4IDwgMCA/IHRlbXBsYXRlLmxlbmd0aCA6IGhhc2hJbmRleFxuXHR2YXIgcGF0aEVuZCA9IHF1ZXJ5SW5kZXggPCAwID8gcXVlcnlFbmQgOiBxdWVyeUluZGV4XG5cdHZhciBwYXRoID0gdGVtcGxhdGUuc2xpY2UoMCwgcGF0aEVuZClcblx0dmFyIHF1ZXJ5ID0ge31cblxuXHRhc3NpZ24ocXVlcnksIHBhcmFtcylcblxuXHR2YXIgcmVzb2x2ZWQgPSBwYXRoLnJlcGxhY2UoLzooW15cXC9cXC4tXSspKFxcLnszfSk/L2csIGZ1bmN0aW9uKG0sIGtleSwgdmFyaWFkaWMpIHtcblx0XHRkZWxldGUgcXVlcnlba2V5XVxuXHRcdC8vIElmIG5vIHN1Y2ggcGFyYW1ldGVyIGV4aXN0cywgZG9uJ3QgaW50ZXJwb2xhdGUgaXQuXG5cdFx0aWYgKHBhcmFtc1trZXldID09IG51bGwpIHJldHVybiBtXG5cdFx0Ly8gRXNjYXBlIG5vcm1hbCBwYXJhbWV0ZXJzLCBidXQgbm90IHZhcmlhZGljIG9uZXMuXG5cdFx0cmV0dXJuIHZhcmlhZGljID8gcGFyYW1zW2tleV0gOiBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHBhcmFtc1trZXldKSlcblx0fSlcblxuXHQvLyBJbiBjYXNlIHRoZSB0ZW1wbGF0ZSBzdWJzdGl0dXRpb24gYWRkcyBuZXcgcXVlcnkvaGFzaCBwYXJhbWV0ZXJzLlxuXHR2YXIgbmV3UXVlcnlJbmRleCA9IHJlc29sdmVkLmluZGV4T2YoXCI/XCIpXG5cdHZhciBuZXdIYXNoSW5kZXggPSByZXNvbHZlZC5pbmRleE9mKFwiI1wiKVxuXHR2YXIgbmV3UXVlcnlFbmQgPSBuZXdIYXNoSW5kZXggPCAwID8gcmVzb2x2ZWQubGVuZ3RoIDogbmV3SGFzaEluZGV4XG5cdHZhciBuZXdQYXRoRW5kID0gbmV3UXVlcnlJbmRleCA8IDAgPyBuZXdRdWVyeUVuZCA6IG5ld1F1ZXJ5SW5kZXhcblx0dmFyIHJlc3VsdCA9IHJlc29sdmVkLnNsaWNlKDAsIG5ld1BhdGhFbmQpXG5cblx0aWYgKHF1ZXJ5SW5kZXggPj0gMCkgcmVzdWx0ICs9IHRlbXBsYXRlLnNsaWNlKHF1ZXJ5SW5kZXgsIHF1ZXJ5RW5kKVxuXHRpZiAobmV3UXVlcnlJbmRleCA+PSAwKSByZXN1bHQgKz0gKHF1ZXJ5SW5kZXggPCAwID8gXCI/XCIgOiBcIiZcIikgKyByZXNvbHZlZC5zbGljZShuZXdRdWVyeUluZGV4LCBuZXdRdWVyeUVuZClcblx0dmFyIHF1ZXJ5c3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhxdWVyeSlcblx0aWYgKHF1ZXJ5c3RyaW5nKSByZXN1bHQgKz0gKHF1ZXJ5SW5kZXggPCAwICYmIG5ld1F1ZXJ5SW5kZXggPCAwID8gXCI/XCIgOiBcIiZcIikgKyBxdWVyeXN0cmluZ1xuXHRpZiAoaGFzaEluZGV4ID49IDApIHJlc3VsdCArPSB0ZW1wbGF0ZS5zbGljZShoYXNoSW5kZXgpXG5cdGlmIChuZXdIYXNoSW5kZXggPj0gMCkgcmVzdWx0ICs9IChoYXNoSW5kZXggPCAwID8gXCJcIiA6IFwiJlwiKSArIHJlc29sdmVkLnNsaWNlKG5ld0hhc2hJbmRleClcblx0cmV0dXJuIHJlc3VsdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXJzZVwiKVxuXG4vLyBDb21waWxlcyBhIHRlbXBsYXRlIGludG8gYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVzb2x2ZWQgcGF0aCAod2l0aG91dCBxdWVyeVxuLy8gc3RyaW5ncykgYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIHBhcmFtZXRlcnMgd2l0aCB0aGVpclxuLy8gcGFyc2VkIHZhbHVlcy4gVGhpcyBleHBlY3RzIHRoZSBpbnB1dCBvZiB0aGUgY29tcGlsZWQgdGVtcGxhdGUgdG8gYmUgdGhlXG4vLyBvdXRwdXQgb2YgYHBhcnNlUGF0aG5hbWVgLiBOb3RlIHRoYXQgaXQgZG9lcyAqbm90KiByZW1vdmUgcXVlcnkgcGFyYW1ldGVyc1xuLy8gc3BlY2lmaWVkIGluIHRoZSB0ZW1wbGF0ZS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGVtcGxhdGUpIHtcblx0dmFyIHRlbXBsYXRlRGF0YSA9IHBhcnNlUGF0aG5hbWUodGVtcGxhdGUpXG5cdHZhciB0ZW1wbGF0ZUtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZURhdGEucGFyYW1zKVxuXHR2YXIga2V5cyA9IFtdXG5cdHZhciByZWdleHAgPSBuZXcgUmVnRXhwKFwiXlwiICsgdGVtcGxhdGVEYXRhLnBhdGgucmVwbGFjZShcblx0XHQvLyBJIGVzY2FwZSBsaXRlcmFsIHRleHQgc28gcGVvcGxlIGNhbiB1c2UgdGhpbmdzIGxpa2UgYDpmaWxlLjpleHRgIG9yXG5cdFx0Ly8gYDpsYW5nLTpsb2NhbGVgIGluIHJvdXRlcy4gVGhpcyBpcyBhbGwgbWVyZ2VkIGludG8gb25lIHBhc3Mgc28gSVxuXHRcdC8vIGRvbid0IGFsc28gYWNjaWRlbnRhbGx5IGVzY2FwZSBgLWAgYW5kIG1ha2UgaXQgaGFyZGVyIHRvIGRldGVjdCBpdCB0b1xuXHRcdC8vIGJhbiBpdCBmcm9tIHRlbXBsYXRlIHBhcmFtZXRlcnMuXG5cdFx0LzooW15cXC8uLV0rKShcXC57M318XFwuKD8hXFwuKXwtKT98W1xcXFxeJCorLigpfFxcW1xcXXt9XS9nLFxuXHRcdGZ1bmN0aW9uKG0sIGtleSwgZXh0cmEpIHtcblx0XHRcdGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuIFwiXFxcXFwiICsgbVxuXHRcdFx0a2V5cy5wdXNoKHtrOiBrZXksIHI6IGV4dHJhID09PSBcIi4uLlwifSlcblx0XHRcdGlmIChleHRyYSA9PT0gXCIuLi5cIikgcmV0dXJuIFwiKC4qKVwiXG5cdFx0XHRpZiAoZXh0cmEgPT09IFwiLlwiKSByZXR1cm4gXCIoW14vXSspXFxcXC5cIlxuXHRcdFx0cmV0dXJuIFwiKFteL10rKVwiICsgKGV4dHJhIHx8IFwiXCIpXG5cdFx0fVxuXHQpICsgXCIkXCIpXG5cdHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0Ly8gRmlyc3QsIGNoZWNrIHRoZSBwYXJhbXMuIFVzdWFsbHksIHRoZXJlIGlzbid0IGFueSwgYW5kIGl0J3MganVzdFxuXHRcdC8vIGNoZWNraW5nIGEgc3RhdGljIHNldC5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRlbXBsYXRlRGF0YS5wYXJhbXNbdGVtcGxhdGVLZXlzW2ldXSAhPT0gZGF0YS5wYXJhbXNbdGVtcGxhdGVLZXlzW2ldXSkgcmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdC8vIElmIG5vIGludGVycG9sYXRpb25zIGV4aXN0LCBsZXQncyBza2lwIGFsbCB0aGUgY2VyZW1vbnlcblx0XHRpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gcmVnZXhwLnRlc3QoZGF0YS5wYXRoKVxuXHRcdHZhciB2YWx1ZXMgPSByZWdleHAuZXhlYyhkYXRhLnBhdGgpXG5cdFx0aWYgKHZhbHVlcyA9PSBudWxsKSByZXR1cm4gZmFsc2Vcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRhdGEucGFyYW1zW2tleXNbaV0ua10gPSBrZXlzW2ldLnIgPyB2YWx1ZXNbaSArIDFdIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpICsgMV0pXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5c3RyaW5nL3BhcnNlXCIpXG5cbi8vIFJldHVybnMgYHtwYXRoLCBwYXJhbXN9YCBmcm9tIGB1cmxgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCkge1xuXHR2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKFwiP1wiKVxuXHR2YXIgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpXG5cdHZhciBxdWVyeUVuZCA9IGhhc2hJbmRleCA8IDAgPyB1cmwubGVuZ3RoIDogaGFzaEluZGV4XG5cdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA8IDAgPyBxdWVyeUVuZCA6IHF1ZXJ5SW5kZXhcblx0dmFyIHBhdGggPSB1cmwuc2xpY2UoMCwgcGF0aEVuZCkucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIilcblxuXHRpZiAoIXBhdGgpIHBhdGggPSBcIi9cIlxuXHRlbHNlIHtcblx0XHRpZiAocGF0aFswXSAhPT0gXCIvXCIpIHBhdGggPSBcIi9cIiArIHBhdGhcblx0XHRpZiAocGF0aC5sZW5ndGggPiAxICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gXCIvXCIpIHBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKVxuXHR9XG5cdHJldHVybiB7XG5cdFx0cGF0aDogcGF0aCxcblx0XHRwYXJhbXM6IHF1ZXJ5SW5kZXggPCAwXG5cdFx0XHQ/IHt9XG5cdFx0XHQ6IHBhcnNlUXVlcnlTdHJpbmcodXJsLnNsaWNlKHF1ZXJ5SW5kZXggKyAxLCBxdWVyeUVuZCkpLFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuLyoqIEBjb25zdHJ1Y3RvciAqL1xudmFyIFByb21pc2VQb2x5ZmlsbCA9IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIG11c3QgYmUgY2FsbGVkIHdpdGggYG5ld2BcIilcblx0aWYgKHR5cGVvZiBleGVjdXRvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG5cblx0dmFyIHNlbGYgPSB0aGlzLCByZXNvbHZlcnMgPSBbXSwgcmVqZWN0b3JzID0gW10sIHJlc29sdmVDdXJyZW50ID0gaGFuZGxlcihyZXNvbHZlcnMsIHRydWUpLCByZWplY3RDdXJyZW50ID0gaGFuZGxlcihyZWplY3RvcnMsIGZhbHNlKVxuXHR2YXIgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZSA9IHtyZXNvbHZlcnM6IHJlc29sdmVycywgcmVqZWN0b3JzOiByZWplY3RvcnN9XG5cdHZhciBjYWxsQXN5bmMgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBzZXRUaW1lb3V0XG5cdGZ1bmN0aW9uIGhhbmRsZXIobGlzdCwgc2hvdWxkQWJzb3JiKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGUodmFsdWUpIHtcblx0XHRcdHZhciB0aGVuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoc2hvdWxkQWJzb3JiICYmIHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mICh0aGVuID0gdmFsdWUudGhlbikgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgdy8gaXRzZWxmXCIpXG5cdFx0XHRcdFx0ZXhlY3V0ZU9uY2UodGhlbi5iaW5kKHZhbHVlKSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjYWxsQXN5bmMoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXNob3VsZEFic29yYiAmJiBsaXN0Lmxlbmd0aCA9PT0gMCkgY29uc29sZS5lcnJvcihcIlBvc3NpYmxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbjpcIiwgdmFsdWUpXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIGxpc3RbaV0odmFsdWUpXG5cdFx0XHRcdFx0XHRyZXNvbHZlcnMubGVuZ3RoID0gMCwgcmVqZWN0b3JzLmxlbmd0aCA9IDBcblx0XHRcdFx0XHRcdGluc3RhbmNlLnN0YXRlID0gc2hvdWxkQWJzb3JiXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5yZXRyeSA9IGZ1bmN0aW9uKCkge2V4ZWN1dGUodmFsdWUpfVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdEN1cnJlbnQoZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZXhlY3V0ZU9uY2UodGhlbikge1xuXHRcdHZhciBydW5zID0gMFxuXHRcdGZ1bmN0aW9uIHJ1bihmbikge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChydW5zKysgPiAwKSByZXR1cm5cblx0XHRcdFx0Zm4odmFsdWUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBvbmVycm9yID0gcnVuKHJlamVjdEN1cnJlbnQpXG5cdFx0dHJ5IHt0aGVuKHJ1bihyZXNvbHZlQ3VycmVudCksIG9uZXJyb3IpfSBjYXRjaCAoZSkge29uZXJyb3IoZSl9XG5cdH1cblxuXHRleGVjdXRlT25jZShleGVjdXRvcilcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGlvbikge1xuXHR2YXIgc2VsZiA9IHRoaXMsIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2Vcblx0ZnVuY3Rpb24gaGFuZGxlKGNhbGxiYWNrLCBsaXN0LCBuZXh0LCBzdGF0ZSkge1xuXHRcdGxpc3QucHVzaChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSBuZXh0KHZhbHVlKVxuXHRcdFx0ZWxzZSB0cnkge3Jlc29sdmVOZXh0KGNhbGxiYWNrKHZhbHVlKSl9IGNhdGNoIChlKSB7aWYgKHJlamVjdE5leHQpIHJlamVjdE5leHQoZSl9XG5cdFx0fSlcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlLnJldHJ5ID09PSBcImZ1bmN0aW9uXCIgJiYgc3RhdGUgPT09IGluc3RhbmNlLnN0YXRlKSBpbnN0YW5jZS5yZXRyeSgpXG5cdH1cblx0dmFyIHJlc29sdmVOZXh0LCByZWplY3ROZXh0XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtyZXNvbHZlTmV4dCA9IHJlc29sdmUsIHJlamVjdE5leHQgPSByZWplY3R9KVxuXHRoYW5kbGUob25GdWxmaWxsZWQsIGluc3RhbmNlLnJlc29sdmVycywgcmVzb2x2ZU5leHQsIHRydWUpLCBoYW5kbGUob25SZWplY3Rpb24sIGluc3RhbmNlLnJlamVjdG9ycywgcmVqZWN0TmV4dCwgZmFsc2UpXG5cdHJldHVybiBwcm9taXNlXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcblx0cmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbilcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0ZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlUG9seWZpbGwucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRmdW5jdGlvbihyZWFzb24pIHtcblx0XHRcdHJldHVybiBQcm9taXNlUG9seWZpbGwucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZVBvbHlmaWxsLnJlamVjdChyZWFzb24pO1xuXHRcdFx0fSlcblx0XHR9XG5cdClcbn1cblByb21pc2VQb2x5ZmlsbC5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZVBvbHlmaWxsKSByZXR1cm4gdmFsdWVcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSkge3Jlc29sdmUodmFsdWUpfSlcbn1cblByb21pc2VQb2x5ZmlsbC5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtyZWplY3QodmFsdWUpfSlcbn1cblByb21pc2VQb2x5ZmlsbC5hbGwgPSBmdW5jdGlvbihsaXN0KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciB0b3RhbCA9IGxpc3QubGVuZ3RoLCBjb3VudCA9IDAsIHZhbHVlcyA9IFtdXG5cdFx0aWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXNvbHZlKFtdKVxuXHRcdGVsc2UgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQoZnVuY3Rpb24oaSkge1xuXHRcdFx0XHRmdW5jdGlvbiBjb25zdW1lKHZhbHVlKSB7XG5cdFx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHRcdHZhbHVlc1tpXSA9IHZhbHVlXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09PSB0b3RhbCkgcmVzb2x2ZSh2YWx1ZXMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxpc3RbaV0gIT0gbnVsbCAmJiAodHlwZW9mIGxpc3RbaV0gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGxpc3RbaV0gPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mIGxpc3RbaV0udGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0bGlzdFtpXS50aGVuKGNvbnN1bWUsIHJlamVjdClcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGNvbnN1bWUobGlzdFtpXSlcblx0XHRcdH0pKGkpXG5cdFx0fVxuXHR9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJhY2UgPSBmdW5jdGlvbihsaXN0KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdFtpXS50aGVuKHJlc29sdmUsIHJlamVjdClcblx0XHR9XG5cdH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZVBvbHlmaWxsXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gcmVxdWlyZShcIi4vcG9seWZpbGxcIilcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiB3aW5kb3cuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdH0gZWxzZSBpZiAoIXdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG5cdFx0d2luZG93LlByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBQcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmZpbmFsbHlcblx0fVxuXHRtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5Qcm9taXNlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGdsb2JhbC5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdH0gZWxzZSBpZiAoIWdsb2JhbC5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG5cdFx0Z2xvYmFsLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBQcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmZpbmFsbHlcblx0fVxuXHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5Qcm9taXNlXG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IFByb21pc2VQb2x5ZmlsbFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gXCJcIlxuXG5cdHZhciBhcmdzID0gW11cblx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuXHRcdGRlc3RydWN0dXJlKGtleSwgb2JqZWN0W2tleV0pXG5cdH1cblxuXHRyZXR1cm4gYXJncy5qb2luKFwiJlwiKVxuXG5cdGZ1bmN0aW9uIGRlc3RydWN0dXJlKGtleSwgdmFsdWUpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5ICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleSArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBhcmdzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gXCJcIiA/IFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IFwiXCIpKVxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRpZiAoc3RyaW5nID09PSBcIlwiIHx8IHN0cmluZyA9PSBudWxsKSByZXR1cm4ge31cblx0aWYgKHN0cmluZy5jaGFyQXQoMCkgPT09IFwiP1wiKSBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMSlcblxuXHR2YXIgZW50cmllcyA9IHN0cmluZy5zcGxpdChcIiZcIiksIGNvdW50ZXJzID0ge30sIGRhdGEgPSB7fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZW50cnkgPSBlbnRyaWVzW2ldLnNwbGl0KFwiPVwiKVxuXHRcdHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMF0pXG5cdFx0dmFyIHZhbHVlID0gZW50cnkubGVuZ3RoID09PSAyID8gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzFdKSA6IFwiXCJcblxuXHRcdGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHZhbHVlID0gdHJ1ZVxuXHRcdGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHZhbHVlID0gZmFsc2VcblxuXHRcdHZhciBsZXZlbHMgPSBrZXkuc3BsaXQoL1xcXVxcWz98XFxbLylcblx0XHR2YXIgY3Vyc29yID0gZGF0YVxuXHRcdGlmIChrZXkuaW5kZXhPZihcIltcIikgPiAtMSkgbGV2ZWxzLnBvcCgpXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZXZlbHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBsZXZlbCA9IGxldmVsc1tqXSwgbmV4dExldmVsID0gbGV2ZWxzW2ogKyAxXVxuXHRcdFx0dmFyIGlzTnVtYmVyID0gbmV4dExldmVsID09IFwiXCIgfHwgIWlzTmFOKHBhcnNlSW50KG5leHRMZXZlbCwgMTApKVxuXHRcdFx0aWYgKGxldmVsID09PSBcIlwiKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBsZXZlbHMuc2xpY2UoMCwgaikuam9pbigpXG5cdFx0XHRcdGlmIChjb3VudGVyc1trZXldID09IG51bGwpIHtcblx0XHRcdFx0XHRjb3VudGVyc1trZXldID0gQXJyYXkuaXNBcnJheShjdXJzb3IpID8gY3Vyc29yLmxlbmd0aCA6IDBcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXZlbCA9IGNvdW50ZXJzW2tleV0rK1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzYWxsb3cgZGlyZWN0IHByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdGVsc2UgaWYgKGxldmVsID09PSBcIl9fcHJvdG9fX1wiKSBicmVha1xuXHRcdFx0aWYgKGogPT09IGxldmVscy5sZW5ndGggLSAxKSBjdXJzb3JbbGV2ZWxdID0gdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBSZWFkIG93biBwcm9wZXJ0aWVzIGV4Y2x1c2l2ZWx5IHRvIGRpc2FsbG93IGluZGlyZWN0XG5cdFx0XHRcdC8vIHByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdFx0dmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGN1cnNvciwgbGV2ZWwpXG5cdFx0XHRcdGlmIChkZXNjICE9IG51bGwpIGRlc2MgPSBkZXNjLnZhbHVlXG5cdFx0XHRcdGlmIChkZXNjID09IG51bGwpIGN1cnNvcltsZXZlbF0gPSBkZXNjID0gaXNOdW1iZXIgPyBbXSA6IHt9XG5cdFx0XHRcdGN1cnNvciA9IGRlc2Ncblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGFcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcmVuZGVyL3JlbmRlclwiKSh3aW5kb3cpXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG52YXIgaHlwZXJzY3JpcHRWbm9kZSA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0Vm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHZub2RlID0gaHlwZXJzY3JpcHRWbm9kZS5hcHBseSgwLCBhcmd1bWVudHMpXG5cblx0dm5vZGUudGFnID0gXCJbXCJcblx0dm5vZGUuY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0cmV0dXJuIHZub2RlXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG52YXIgaHlwZXJzY3JpcHRWbm9kZSA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0Vm5vZGVcIilcblxudmFyIHNlbGVjdG9yUGFyc2VyID0gLyg/OihefCN8XFwuKShbXiNcXC5cXFtcXF1dKykpfChcXFsoLis/KSg/Olxccyo9XFxzKihcInwnfCkoKD86XFxcXFtcIidcXF1dfC4pKj8pXFw1KT9cXF0pL2dcbnZhciBzZWxlY3RvckNhY2hlID0ge31cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBpZiAoaGFzT3duLmNhbGwob2JqZWN0LCBrZXkpKSByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG5cdHZhciBtYXRjaCwgdGFnID0gXCJkaXZcIiwgY2xhc3NlcyA9IFtdLCBhdHRycyA9IHt9XG5cdHdoaWxlIChtYXRjaCA9IHNlbGVjdG9yUGFyc2VyLmV4ZWMoc2VsZWN0b3IpKSB7XG5cdFx0dmFyIHR5cGUgPSBtYXRjaFsxXSwgdmFsdWUgPSBtYXRjaFsyXVxuXHRcdGlmICh0eXBlID09PSBcIlwiICYmIHZhbHVlICE9PSBcIlwiKSB0YWcgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiI1wiKSBhdHRycy5pZCA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIuXCIpIGNsYXNzZXMucHVzaCh2YWx1ZSlcblx0XHRlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcblx0XHRcdHZhciBhdHRyVmFsdWUgPSBtYXRjaFs2XVxuXHRcdFx0aWYgKGF0dHJWYWx1ZSkgYXR0clZhbHVlID0gYXR0clZhbHVlLnJlcGxhY2UoL1xcXFwoW1wiJ10pL2csIFwiJDFcIikucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJcXFxcXCIpXG5cdFx0XHRpZiAobWF0Y2hbNF0gPT09IFwiY2xhc3NcIikgY2xhc3Nlcy5wdXNoKGF0dHJWYWx1ZSlcblx0XHRcdGVsc2UgYXR0cnNbbWF0Y2hbNF1dID0gYXR0clZhbHVlID09PSBcIlwiID8gYXR0clZhbHVlIDogYXR0clZhbHVlIHx8IHRydWVcblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzZXMubGVuZ3RoID4gMCkgYXR0cnMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKVxuXHRyZXR1cm4gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gPSB7dGFnOiB0YWcsIGF0dHJzOiBhdHRyc31cbn1cblxuZnVuY3Rpb24gZXhlY1NlbGVjdG9yKHN0YXRlLCB2bm9kZSkge1xuXHR2YXIgYXR0cnMgPSB2bm9kZS5hdHRyc1xuXHR2YXIgY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0dmFyIGhhc0NsYXNzID0gaGFzT3duLmNhbGwoYXR0cnMsIFwiY2xhc3NcIilcblx0dmFyIGNsYXNzTmFtZSA9IGhhc0NsYXNzID8gYXR0cnMuY2xhc3MgOiBhdHRycy5jbGFzc05hbWVcblxuXHR2bm9kZS50YWcgPSBzdGF0ZS50YWdcblx0dm5vZGUuYXR0cnMgPSBudWxsXG5cdHZub2RlLmNoaWxkcmVuID0gdW5kZWZpbmVkXG5cblx0aWYgKCFpc0VtcHR5KHN0YXRlLmF0dHJzKSAmJiAhaXNFbXB0eShhdHRycykpIHtcblx0XHR2YXIgbmV3QXR0cnMgPSB7fVxuXG5cdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpIG5ld0F0dHJzW2tleV0gPSBhdHRyc1trZXldXG5cdFx0fVxuXG5cdFx0YXR0cnMgPSBuZXdBdHRyc1xuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHN0YXRlLmF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKHN0YXRlLmF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJjbGFzc05hbWVcIiAmJiAhaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpe1xuXHRcdFx0YXR0cnNba2V5XSA9IHN0YXRlLmF0dHJzW2tleV1cblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzTmFtZSAhPSBudWxsIHx8IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsKSBhdHRycy5jbGFzc05hbWUgPVxuXHRcdGNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHQ/IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHRcdD8gU3RyaW5nKHN0YXRlLmF0dHJzLmNsYXNzTmFtZSkgKyBcIiBcIiArIFN0cmluZyhjbGFzc05hbWUpXG5cdFx0XHRcdDogY2xhc3NOYW1lXG5cdFx0XHQ6IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHRcdD8gc3RhdGUuYXR0cnMuY2xhc3NOYW1lXG5cdFx0XHRcdDogbnVsbFxuXG5cdGlmIChoYXNDbGFzcykgYXR0cnMuY2xhc3MgPSBudWxsXG5cblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJrZXlcIikge1xuXHRcdFx0dm5vZGUuYXR0cnMgPSBhdHRyc1xuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdICE9IG51bGwgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIiNcIikge1xuXHRcdHZub2RlLnRleHQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHR9IGVsc2Uge1xuXHRcdHZub2RlLmNoaWxkcmVuID0gY2hpbGRyZW5cblx0fVxuXG5cdHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBoeXBlcnNjcmlwdChzZWxlY3Rvcikge1xuXHRpZiAoc2VsZWN0b3IgPT0gbnVsbCB8fCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHNlbGVjdG9yLnZpZXcgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHRocm93IEVycm9yKFwiVGhlIHNlbGVjdG9yIG11c3QgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgY29tcG9uZW50LlwiKTtcblx0fVxuXG5cdHZhciB2bm9kZSA9IGh5cGVyc2NyaXB0Vm5vZGUuYXBwbHkoMSwgYXJndW1lbnRzKVxuXG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHR2bm9kZS5jaGlsZHJlbiA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlLmNoaWxkcmVuKVxuXHRcdGlmIChzZWxlY3RvciAhPT0gXCJbXCIpIHJldHVybiBleGVjU2VsZWN0b3Ioc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gfHwgY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSwgdm5vZGUpXG5cdH1cblxuXHR2bm9kZS50YWcgPSBzZWxlY3RvclxuXHRyZXR1cm4gdm5vZGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBlcnNjcmlwdFxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG4vLyBDYWxsIHZpYSBgaHlwZXJzY3JpcHRWbm9kZS5hcHBseShzdGFydE9mZnNldCwgYXJndW1lbnRzKWBcbi8vXG4vLyBUaGUgcmVhc29uIEkgZG8gaXQgdGhpcyB3YXksIGZvcndhcmRpbmcgdGhlIGFyZ3VtZW50cyBhbmQgcGFzc2luZyB0aGUgc3RhcnRcbi8vIG9mZnNldCBpbiBgdGhpc2AsIGlzIHNvIEkgZG9uJ3QgaGF2ZSB0byBjcmVhdGUgYSB0ZW1wb3JhcnkgYXJyYXkgaW4gYVxuLy8gcGVyZm9ybWFuY2UtY3JpdGljYWwgcGF0aC5cbi8vXG4vLyBJbiBuYXRpdmUgRVM2LCBJJ2QgaW5zdGVhZCBhZGQgYSBmaW5hbCBgLi4uYXJnc2AgcGFyYW1ldGVyIHRvIHRoZVxuLy8gYGh5cGVyc2NyaXB0YCBhbmQgYGZyYWdtZW50YCBmYWN0b3JpZXMgYW5kIGRlZmluZSB0aGlzIGFzXG4vLyBgaHlwZXJzY3JpcHRWbm9kZSguLi5hcmdzKWAsIHNpbmNlIG1vZGVybiBlbmdpbmVzIGRvIG9wdGltaXplIHRoYXQgYXdheS4gQnV0XG4vLyBFUzUgKHdoYXQgTWl0aHJpbCByZXF1aXJlcyB0aGFua3MgdG8gSUUgc3VwcG9ydCkgZG9lc24ndCBnaXZlIG1lIHRoYXQgbHV4dXJ5LFxuLy8gYW5kIGVuZ2luZXMgYXJlbid0IG5lYXJseSBpbnRlbGxpZ2VudCBlbm91Z2ggdG8gZG8gZWl0aGVyIG9mIHRoZXNlOlxuLy9cbi8vIDEuIEVsaWRlIHRoZSBhbGxvY2F0aW9uIGZvciBgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpYCB3aGVuIGl0J3MgcGFzc2VkIHRvXG4vLyAgICBhbm90aGVyIGZ1bmN0aW9uIG9ubHkgdG8gYmUgaW5kZXhlZC5cbi8vIDIuIEVsaWRlIGFuIGBhcmd1bWVudHNgIGFsbG9jYXRpb24gd2hlbiBpdCdzIHBhc3NlZCB0byBhbnkgZnVuY3Rpb24gb3RoZXJcbi8vICAgIHRoYW4gYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAgb3IgYFJlZmxlY3QuYXBwbHlgLlxuLy9cbi8vIEluIEVTNiwgaXQnZCBwcm9iYWJseSBsb29rIGNsb3NlciB0byB0aGlzIChJJ2QgbmVlZCB0byBwcm9maWxlIGl0LCB0aG91Z2gpOlxuLy8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhdHRycywgLi4uY2hpbGRyZW4pIHtcbi8vICAgICBpZiAoYXR0cnMgPT0gbnVsbCB8fCB0eXBlb2YgYXR0cnMgPT09IFwib2JqZWN0XCIgJiYgYXR0cnMudGFnID09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkoYXR0cnMpKSB7XG4vLyAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlblswXSkpIGNoaWxkcmVuID0gY2hpbGRyZW5bMF1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzLCAuLi5jaGlsZHJlbl1cbi8vICAgICAgICAgYXR0cnMgPSB1bmRlZmluZWRcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmIChhdHRycyA9PSBudWxsKSBhdHRycyA9IHt9XG4vLyAgICAgcmV0dXJuIFZub2RlKFwiXCIsIGF0dHJzLmtleSwgYXR0cnMsIGNoaWxkcmVuKVxuLy8gfVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGF0dHJzID0gYXJndW1lbnRzW3RoaXNdLCBzdGFydCA9IHRoaXMgKyAxLCBjaGlsZHJlblxuXG5cdGlmIChhdHRycyA9PSBudWxsKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBhdHRycyAhPT0gXCJvYmplY3RcIiB8fCBhdHRycy50YWcgIT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuXHRcdGF0dHJzID0ge31cblx0XHRzdGFydCA9IHRoaXNcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSBzdGFydCArIDEpIHtcblx0XHRjaGlsZHJlbiA9IGFyZ3VtZW50c1tzdGFydF1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbiA9IFtdXG5cdFx0d2hpbGUgKHN0YXJ0IDwgYXJndW1lbnRzLmxlbmd0aCkgY2hpbGRyZW4ucHVzaChhcmd1bWVudHNbc3RhcnQrK10pXG5cdH1cblxuXHRyZXR1cm4gVm5vZGUoXCJcIiwgYXR0cnMua2V5LCBhdHRycywgY2hpbGRyZW4pXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgJGRvYyA9ICR3aW5kb3cgJiYgJHdpbmRvdy5kb2N1bWVudFxuXHR2YXIgY3VycmVudFJlZHJhd1xuXG5cdHZhciBuYW1lU3BhY2UgPSB7XG5cdFx0c3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0bWF0aDogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE5hbWVTcGFjZSh2bm9kZSkge1xuXHRcdHJldHVybiB2bm9kZS5hdHRycyAmJiB2bm9kZS5hdHRycy54bWxucyB8fCBuYW1lU3BhY2Vbdm5vZGUudGFnXVxuXHR9XG5cblx0Ly9zYW5pdHkgY2hlY2sgdG8gZGlzY291cmFnZSBwZW9wbGUgZnJvbSBkb2luZyBgdm5vZGUuc3RhdGUgPSAuLi5gXG5cdGZ1bmN0aW9uIGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKSB7XG5cdFx0aWYgKHZub2RlLnN0YXRlICE9PSBvcmlnaW5hbCkgdGhyb3cgbmV3IEVycm9yKFwiYHZub2RlLnN0YXRlYCBtdXN0IG5vdCBiZSBtb2RpZmllZFwiKVxuXHR9XG5cblx0Ly9Ob3RlOiB0aGUgaG9vayBpcyBwYXNzZWQgYXMgdGhlIGB0aGlzYCBhcmd1bWVudCB0byBhbGxvdyBwcm94eWluZyB0aGVcblx0Ly9hcmd1bWVudHMgd2l0aG91dCByZXF1aXJpbmcgYSBmdWxsIGFycmF5IGFsbG9jYXRpb24gdG8gZG8gc28uIEl0IGFsc29cblx0Ly90YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhlIGN1cnJlbnQgYHZub2RlYCBpcyB0aGUgZmlyc3QgYXJndW1lbnQgaW5cblx0Ly9hbGwgbGlmZWN5Y2xlIG1ldGhvZHMuXG5cdGZ1bmN0aW9uIGNhbGxIb29rKHZub2RlKSB7XG5cdFx0dmFyIG9yaWdpbmFsID0gdm5vZGUuc3RhdGVcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXBwbHkob3JpZ2luYWwsIGFyZ3VtZW50cylcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cdFx0fVxuXHR9XG5cblx0Ly8gSUUxMSAoYXQgbGVhc3QpIHRocm93cyBhbiBVbnNwZWNpZmllZEVycm9yIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgd2hlblxuXHQvLyBpbnNpZGUgYW4gaWZyYW1lLiBDYXRjaCBhbmQgc3dhbGxvdyB0aGlzIGVycm9yLCBhbmQgaGVhdnktaGFuZGlkbHkgcmV0dXJuIG51bGwuXG5cdGZ1bmN0aW9uIGFjdGl2ZUVsZW1lbnQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0fVxuXHQvL2NyZWF0ZVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHt9XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0c3dpdGNoICh0YWcpIHtcblx0XHRcdFx0Y2FzZSBcIiNcIjogY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdGNhc2UgXCI8XCI6IGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0Y2FzZSBcIltcIjogY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdGRlZmF1bHQ6IGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dm5vZGUuZG9tID0gJGRvYy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS5jaGlsZHJlbilcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgdm5vZGUuZG9tLCBuZXh0U2libGluZylcblx0fVxuXHR2YXIgcG9zc2libGVQYXJlbnRzID0ge2NhcHRpb246IFwidGFibGVcIiwgdGhlYWQ6IFwidGFibGVcIiwgdGJvZHk6IFwidGFibGVcIiwgdGZvb3Q6IFwidGFibGVcIiwgdHI6IFwidGJvZHlcIiwgdGg6IFwidHJcIiwgdGQ6IFwidHJcIiwgY29sZ3JvdXA6IFwidGFibGVcIiwgY29sOiBcImNvbGdyb3VwXCJ9XG5cdGZ1bmN0aW9uIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIG1hdGNoID0gdm5vZGUuY2hpbGRyZW4ubWF0Y2goL15cXHMqPzwoXFx3KykvaW0pIHx8IFtdXG5cdFx0Ly8gbm90IHVzaW5nIHRoZSBwcm9wZXIgcGFyZW50IG1ha2VzIHRoZSBjaGlsZCBlbGVtZW50KHMpIHZhbmlzaC5cblx0XHQvLyAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblx0XHQvLyAgICAgZGl2LmlubmVySFRNTCA9IFwiPHRkPmk8L3RkPjx0ZD5qPC90ZD5cIlxuXHRcdC8vICAgICBjb25zb2xlLmxvZyhkaXYuaW5uZXJIVE1MKVxuXHRcdC8vIC0tPiBcImlqXCIsIG5vIDx0ZD4gaW4gc2lnaHQuXG5cdFx0dmFyIHRlbXAgPSAkZG9jLmNyZWF0ZUVsZW1lbnQocG9zc2libGVQYXJlbnRzW21hdGNoWzFdXSB8fCBcImRpdlwiKVxuXHRcdGlmIChucyA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSB7XG5cdFx0XHR0ZW1wLmlubmVySFRNTCA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPlwiICsgdm5vZGUuY2hpbGRyZW4gKyBcIjwvc3ZnPlwiXG5cdFx0XHR0ZW1wID0gdGVtcC5maXJzdENoaWxkXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRlbXAuaW5uZXJIVE1MID0gdm5vZGUuY2hpbGRyZW5cblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gdGVtcC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHQvLyBDYXB0dXJlIG5vZGVzIHRvIHJlbW92ZSwgc28gd2UgZG9uJ3QgY29uZnVzZSB0aGVtLlxuXHRcdHZub2RlLmluc3RhbmNlID0gW11cblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdHZhciBjaGlsZFxuXHRcdHdoaWxlIChjaGlsZCA9IHRlbXAuZmlyc3RDaGlsZCkge1xuXHRcdFx0dm5vZGUuaW5zdGFuY2UucHVzaChjaGlsZClcblx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuXHRcdH1cblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0Y3JlYXRlTm9kZXMoZnJhZ21lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gZnJhZ21lbnQuZmlyc3RDaGlsZFxuXHRcdHZub2RlLmRvbVNpemUgPSBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdHZhciBhdHRycyA9IHZub2RlLmF0dHJzXG5cdFx0dmFyIGlzID0gYXR0cnMgJiYgYXR0cnMuaXNcblxuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBucyA/XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpIDpcblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50KHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50KHRhZylcblx0XHR2bm9kZS5kb20gPSBlbGVtZW50XG5cblx0XHRpZiAoYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0c2V0QXR0cnModm5vZGUsIGF0dHJzLCBucylcblx0XHR9XG5cblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZWxlbWVudCwgbmV4dFNpYmxpbmcpXG5cblx0XHRpZiAoIW1heWJlU2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSkge1xuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUudGV4dCAhPT0gXCJcIikgZWxlbWVudC50ZXh0Q29udGVudCA9IHZub2RlLnRleHRcblx0XHRcdFx0ZWxzZSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdH1cblx0XHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRcdGNyZWF0ZU5vZGVzKGVsZW1lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBhdHRycyAhPSBudWxsKSBzZXRMYXRlU2VsZWN0QXR0cnModm5vZGUsIGF0dHJzKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpbml0Q29tcG9uZW50KHZub2RlLCBob29rcykge1xuXHRcdHZhciBzZW50aW5lbFxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnLnZpZXcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHZub2RlLnRhZylcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUuc3RhdGUudmlld1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVyblxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZub2RlLnN0YXRlID0gdm9pZCAwXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnRhZ1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVyblxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0XHR2bm9kZS5zdGF0ZSA9ICh2bm9kZS50YWcucHJvdG90eXBlICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLnRhZy5wcm90b3R5cGUudmlldyA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyB2bm9kZS50YWcodm5vZGUpIDogdm5vZGUudGFnKHZub2RlKVxuXHRcdH1cblx0XHRpbml0TGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZShjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLnZpZXcsIHZub2RlKSlcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gbnVsbFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0aW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmRvbSAhPSBudWxsID8gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZSA6IDBcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0fVxuXG5cdC8vdXBkYXRlXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR8RnJhZ21lbnR9IHBhcmVudCAtIHRoZSBwYXJlbnQgZWxlbWVudFxuXHQgKiBAcGFyYW0ge1Zub2RlW10gfCBudWxsfSBvbGQgLSB0aGUgbGlzdCBvZiB2bm9kZXMgb2YgdGhlIGxhc3QgYHJlbmRlcigpYCBjYWxsIGZvclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHBhcnQgb2YgdGhlIHRyZWVcblx0ICogQHBhcmFtIHtWbm9kZVtdIHwgbnVsbH0gdm5vZGVzIC0gYXMgYWJvdmUsIGJ1dCBmb3IgdGhlIGN1cnJlbnQgYHJlbmRlcigpYCBjYWxsLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9uW119IGhvb2tzIC0gYW4gYWNjdW11bGF0b3Igb2YgcG9zdC1yZW5kZXIgaG9va3MgKG9uY3JlYXRlL29udXBkYXRlKVxuXHQgKiBAcGFyYW0ge0VsZW1lbnQgfCBudWxsfSBuZXh0U2libGluZyAtIHRoZSBuZXh0IERPTSBub2RlIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgdGhhdCBpcyBub3QgdGhlIGxhc3QgaXRlbSBpbiBpdHNcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRcblx0ICogQHBhcmFtIHsnc3ZnJyB8ICdtYXRoJyB8IFN0cmluZyB8IG51bGx9IG5zKSAtIHRoZSBjdXJyZW50IFhNTCBuYW1lc3BhY2UsIGlmIGFueVxuXHQgKiBAcmV0dXJucyB2b2lkXG5cdCAqL1xuXHQvLyBUaGlzIGZ1bmN0aW9uIGRpZmZzIGFuZCBwYXRjaGVzIGxpc3RzIG9mIHZub2RlcywgYm90aCBrZXllZCBhbmQgdW5rZXllZC5cblx0Ly9cblx0Ly8gV2Ugd2lsbDpcblx0Ly9cblx0Ly8gMS4gZGVzY3JpYmUgaXRzIGdlbmVyYWwgc3RydWN0dXJlXG5cdC8vIDIuIGZvY3VzIG9uIHRoZSBkaWZmIGFsZ29yaXRobSBvcHRpbWl6YXRpb25zXG5cdC8vIDMuIGRpc2N1c3MgRE9NIG5vZGUgb3BlcmF0aW9ucy5cblxuXHQvLyAjIyBPdmVydmlldzpcblx0Ly9cblx0Ly8gVGhlIHVwZGF0ZU5vZGVzKCkgZnVuY3Rpb246XG5cdC8vIC0gZGVhbHMgd2l0aCB0cml2aWFsIGNhc2VzXG5cdC8vIC0gZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBsaXN0cyBhcmUga2V5ZWQgb3IgdW5rZXllZCBiYXNlZCBvbiB0aGUgZmlyc3Qgbm9uLW51bGwgbm9kZVxuXHQvLyAgIG9mIGVhY2ggbGlzdC5cblx0Ly8gLSBkaWZmcyB0aGVtIGFuZCBwYXRjaGVzIHRoZSBET00gaWYgbmVlZGVkICh0aGF0J3MgdGhlIGJydW50IG9mIHRoZSBjb2RlKVxuXHQvLyAtIG1hbmFnZXMgdGhlIGxlZnRvdmVyczogYWZ0ZXIgZGlmZmluZywgYXJlIHRoZXJlOlxuXHQvLyAgIC0gb2xkIG5vZGVzIGxlZnQgdG8gcmVtb3ZlP1xuXHQvLyBcdCAtIG5ldyBub2RlcyB0byBpbnNlcnQ/XG5cdC8vIFx0IGRlYWwgd2l0aCB0aGVtIVxuXHQvL1xuXHQvLyBUaGUgbGlzdHMgYXJlIG9ubHkgaXRlcmF0ZWQgb3ZlciBvbmNlLCB3aXRoIGFuIGV4Y2VwdGlvbiBmb3IgdGhlIG5vZGVzIGluIGBvbGRgIHRoYXRcblx0Ly8gYXJlIHZpc2l0ZWQgaW4gdGhlIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGFuZCBpbiB0aGUgYHJlbW92ZU5vZGVzYCBsb29wLlxuXG5cdC8vICMjIERpZmZpbmdcblx0Ly9cblx0Ly8gUmVhZGluZyBodHRwczovL2dpdGh1Yi5jb20vbG9jYWx2b2lkL2l2aS9ibG9iL2RkYzA5ZDA2YWJhZWY0NTI0OGU2MTMzZjcwNDBkMDBkM2M2YmU4NTMvcGFja2FnZXMvaXZpL3NyYy92ZG9tL2ltcGxlbWVudGF0aW9uLnRzI0w2MTctTDgzN1xuXHQvLyBtYXkgYmUgZ29vZCBmb3IgY29udGV4dCBvbiBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UtYmFzZWQgbG9naWMgZm9yIG1vdmluZyBub2Rlcy5cblx0Ly9cblx0Ly8gSW4gb3JkZXIgdG8gZGlmZiBrZXllZCBsaXN0cywgb25lIGhhcyB0b1xuXHQvL1xuXHQvLyAxKSBtYXRjaCBub2RlcyBpbiBib3RoIGxpc3RzLCBwZXIga2V5LCBhbmQgdXBkYXRlIHRoZW0gYWNjb3JkaW5nbHlcblx0Ly8gMikgY3JlYXRlIHRoZSBub2RlcyBwcmVzZW50IGluIHRoZSBuZXcgbGlzdCwgYnV0IGFic2VudCBpbiB0aGUgb2xkIG9uZVxuXHQvLyAzKSByZW1vdmUgdGhlIG5vZGVzIHByZXNlbnQgaW4gdGhlIG9sZCBsaXN0LCBidXQgYWJzZW50IGluIHRoZSBuZXcgb25lXG5cdC8vIDQpIGZpZ3VyZSBvdXQgd2hhdCBub2RlcyBpbiAxKSB0byBtb3ZlIGluIG9yZGVyIHRvIG1pbmltaXplIHRoZSBET00gb3BlcmF0aW9ucy5cblx0Ly9cblx0Ly8gVG8gYWNoaWV2ZSAxKSBvbmUgY2FuIGNyZWF0ZSBhIGRpY3Rpb25hcnkgb2Yga2V5cyA9PiBpbmRleCAoZm9yIHRoZSBvbGQgbGlzdCksIHRoZW4gaXRlcmF0ZVxuXHQvLyBvdmVyIHRoZSBuZXcgbGlzdCBhbmQgZm9yIGVhY2ggbmV3IHZub2RlLCBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHZub2RlIGluIHRoZSBvbGQgbGlzdCB1c2luZ1xuXHQvLyB0aGUgbWFwLlxuXHQvLyAyKSBpcyBhY2hpZXZlZCBpbiB0aGUgc2FtZSBzdGVwOiBpZiBhIG5ldyBub2RlIGhhcyBubyBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBtYXAsIGl0IGlzIG5ld1xuXHQvLyBhbmQgbXVzdCBiZSBjcmVhdGVkLlxuXHQvLyBGb3IgdGhlIHJlbW92YWxzLCB3ZSBhY3R1YWxseSByZW1vdmUgdGhlIG5vZGVzIHRoYXQgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgb2xkIGxpc3QuXG5cdC8vIFRoZSBub2RlcyB0aGF0IHJlbWFpbiBpbiB0aGF0IGxpc3QgYWZ0ZXIgMSkgYW5kIDIpIGhhdmUgYmVlbiBwZXJmb3JtZWQgY2FuIGJlIHNhZmVseSByZW1vdmVkLlxuXHQvLyBUaGUgZm91cnRoIHN0ZXAgaXMgYSBiaXQgbW9yZSBjb21wbGV4IGFuZCByZWxpZXMgb24gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSAoTElTKVxuXHQvLyBhbGdvcml0aG0uXG5cdC8vXG5cdC8vIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgaXMgdGhlIGxpc3Qgb2Ygbm9kZXMgdGhhdCBjYW4gcmVtYWluIGluIHBsYWNlLiBJbWFnaW5lIGdvaW5nXG5cdC8vIGZyb20gYDEsMiwzLDQsNWAgdG8gYDQsNSwxLDIsM2Agd2hlcmUgdGhlIG51bWJlcnMgYXJlIG5vdCBuZWNlc3NhcmlseSB0aGUga2V5cywgYnV0IHRoZSBpbmRpY2VzXG5cdC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGtleWVkIG5vZGVzIGluIHRoZSBvbGQgbGlzdCAoa2V5ZWQgbm9kZXMgYGUsZCxjLGIsYWAgPT4gYGIsYSxlLGQsY2Agd291bGRcblx0Ly8gIG1hdGNoIHRoZSBhYm92ZSBsaXN0cywgZm9yIGV4YW1wbGUpLlxuXHQvL1xuXHQvLyBJbiB0aGVyZSBhcmUgdHdvIGluY3JlYXNpbmcgc3Vic2VxdWVuY2VzOiBgNCw1YCBhbmQgYDEsMiwzYCwgdGhlIGxhdHRlciBiZWluZyB0aGUgbG9uZ2VzdC4gV2Vcblx0Ly8gY2FuIHVwZGF0ZSB0aG9zZSBub2RlcyB3aXRob3V0IG1vdmluZyB0aGVtLCBhbmQgb25seSBjYWxsIGBpbnNlcnROb2RlYCBvbiBgNGAgYW5kIGA1YC5cblx0Ly9cblx0Ly8gQGxvY2Fsdm9pZCBhZGFwdGVkIHRoZSBhbGdvIHRvIGFsc28gc3VwcG9ydCBub2RlIGRlbGV0aW9ucyBhbmQgaW5zZXJ0aW9ucyAodGhlIGBsaXNgIGlzIGFjdHVhbGx5XG5cdC8vIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgKm9mIG9sZCBub2RlcyBzdGlsbCBwcmVzZW50IGluIHRoZSBuZXcgbGlzdCopLlxuXHQvL1xuXHQvLyBJdCBpcyBhIGdlbmVyYWwgYWxnb3JpdGhtIHRoYXQgaXMgZmlyZXByb29mIGluIGFsbCBjaXJjdW1zdGFuY2VzLCBidXQgaXQgcmVxdWlyZXMgdGhlIGFsbG9jYXRpb25cblx0Ly8gYW5kIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSBga2V5ID0+IG9sZEluZGV4YCBtYXAsIGFuZCB0aHJlZSBhcnJheXMgKG9uZSB3aXRoIGBuZXdJbmRleCA9PiBvbGRJbmRleGAsXG5cdC8vIHRoZSBgTElTYCBhbmQgYSB0ZW1wb3Jhcnkgb25lIHRvIGNyZWF0ZSB0aGUgTElTKS5cblx0Ly9cblx0Ly8gU28gd2UgY2hlYXQgd2hlcmUgd2UgY2FuOiBpZiB0aGUgdGFpbHMgb2YgdGhlIGxpc3RzIGFyZSBpZGVudGljYWwsIHRoZXkgYXJlIGd1YXJhbnRlZWQgdG8gYmUgcGFydCBvZlxuXHQvLyB0aGUgTElTIGFuZCBjYW4gYmUgdXBkYXRlZCB3aXRob3V0IG1vdmluZyB0aGVtLlxuXHQvL1xuXHQvLyBJZiB0d28gbm9kZXMgYXJlIHN3YXBwZWQsIHRoZXkgYXJlIGd1YXJhbnRlZWQgbm90IHRvIGJlIHBhcnQgb2YgdGhlIExJUywgYW5kIG11c3QgYmUgbW92ZWQgKHdpdGhcblx0Ly8gdGhlIGV4Y2VwdGlvbiBvZiB0aGUgbGFzdCBub2RlIGlmIHRoZSBsaXN0IGlzIGZ1bGx5IHJldmVyc2VkKS5cblx0Ly9cblx0Ly8gIyMgRmluZGluZyB0aGUgbmV4dCBzaWJsaW5nLlxuXHQvL1xuXHQvLyBgdXBkYXRlTm9kZSgpYCBhbmQgYGNyZWF0ZU5vZGUoKWAgZXhwZWN0IGEgbmV4dFNpYmxpbmcgcGFyYW1ldGVyIHRvIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMuXG5cdC8vIFdoZW4gdGhlIGxpc3QgaXMgYmVpbmcgdHJhdmVyc2VkIHRvcC1kb3duLCBhdCBhbnkgaW5kZXgsIHRoZSBET00gbm9kZXMgdXAgdG8gdGhlIHByZXZpb3VzXG5cdC8vIHZub2RlIHJlZmxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyBsaXN0LCB3aGVyZWFzIHRoZSByZXN0IG9mIHRoZSBET00gbm9kZXMgcmVmbGVjdCB0aGUgb2xkXG5cdC8vIGxpc3QuIFRoZSBuZXh0IHNpYmxpbmcgbXVzdCBiZSBsb29rZWQgZm9yIGluIHRoZSBvbGQgbGlzdCB1c2luZyBgZ2V0TmV4dFNpYmxpbmcoLi4uIG9sZFN0YXJ0ICsgMSAuLi4pYC5cblx0Ly9cblx0Ly8gSW4gdGhlIG90aGVyIHNjZW5hcmlvcyAoc3dhcHMsIHVwd2FyZHMgdHJhdmVyc2FsLCBtYXAtYmFzZWQgZGlmZiksXG5cdC8vIHRoZSBuZXcgdm5vZGVzIGxpc3QgaXMgdHJhdmVyc2VkIHVwd2FyZHMuIFRoZSBET00gbm9kZXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgbGlzdCByZWZsZWN0IHRoZVxuXHQvLyBib3R0b20gcGFydCBvZiB0aGUgbmV3IHZub2RlcyBsaXN0LCBhbmQgd2UgY2FuIHVzZSB0aGUgYHYuZG9tYCAgdmFsdWUgb2YgdGhlIHByZXZpb3VzIG5vZGVcblx0Ly8gYXMgdGhlIG5leHQgc2libGluZyAoY2FjaGVkIGluIHRoZSBgbmV4dFNpYmxpbmdgIHZhcmlhYmxlKS5cblxuXG5cdC8vICMjIERPTSBub2RlIG1vdmVzXG5cdC8vXG5cdC8vIEluIG1vc3Qgc2NlbmFyaW9zIGB1cGRhdGVOb2RlKClgIGFuZCBgY3JlYXRlTm9kZSgpYCBwZXJmb3JtIHRoZSBET00gb3BlcmF0aW9ucy4gSG93ZXZlcixcblx0Ly8gdGhpcyBpcyBub3QgdGhlIGNhc2UgaWYgdGhlIG5vZGUgbW92ZWQgKHNlY29uZCBhbmQgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgYWxnbykuIFdlIG1vdmVcblx0Ly8gdGhlIG9sZCBET00gbm9kZXMgYmVmb3JlIHVwZGF0ZU5vZGUgcnVucyBiZWNhdXNlIGl0IGVuYWJsZXMgdXMgdG8gdXNlIHRoZSBjYWNoZWQgYG5leHRTaWJsaW5nYFxuXHQvLyB2YXJpYWJsZSByYXRoZXIgdGhhbiBmZXRjaGluZyBpdCB1c2luZyBgZ2V0TmV4dFNpYmxpbmcoKWAuXG5cdC8vXG5cdC8vIFRoZSBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBjdXJyZW50bHkgaW5zZXJ0cyBub2RlcyB1bmNvbmRpdGlvbmFsbHksIGxlYWRpbmcgdG8gaXNzdWVzXG5cdC8vIGxpa2UgIzE3OTEgYW5kICMxOTk5LiBXZSBuZWVkIHRvIGJlIHNtYXJ0ZXIgYWJvdXQgdGhvc2Ugc2l0dWF0aW9ucyB3aGVyZSBhZGphc2NlbnQgb2xkXG5cdC8vIG5vZGVzIHJlbWFpbiB0b2dldGhlciBpbiB0aGUgbmV3IGxpc3QgaW4gYSB3YXkgdGhhdCBpc24ndCBjb3ZlcmVkIGJ5IHBhcnRzIG9uZSBhbmRcblx0Ly8gdGhyZWUgb2YgdGhlIGRpZmYgYWxnby5cblxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZCwgdm5vZGVzLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0aWYgKG9sZCA9PT0gdm5vZGVzIHx8IG9sZCA9PSBudWxsICYmIHZub2RlcyA9PSBudWxsKSByZXR1cm5cblx0XHRlbHNlIGlmIChvbGQgPT0gbnVsbCB8fCBvbGQubGVuZ3RoID09PSAwKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2RlcywgMCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRlbHNlIGlmICh2bm9kZXMgPT0gbnVsbCB8fCB2bm9kZXMubGVuZ3RoID09PSAwKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgMCwgb2xkLmxlbmd0aClcblx0XHRlbHNlIHtcblx0XHRcdHZhciBpc09sZEtleWVkID0gb2xkWzBdICE9IG51bGwgJiYgb2xkWzBdLmtleSAhPSBudWxsXG5cdFx0XHR2YXIgaXNLZXllZCA9IHZub2Rlc1swXSAhPSBudWxsICYmIHZub2Rlc1swXS5rZXkgIT0gbnVsbFxuXHRcdFx0dmFyIHN0YXJ0ID0gMCwgb2xkU3RhcnQgPSAwXG5cdFx0XHRpZiAoIWlzT2xkS2V5ZWQpIHdoaWxlIChvbGRTdGFydCA8IG9sZC5sZW5ndGggJiYgb2xkW29sZFN0YXJ0XSA9PSBudWxsKSBvbGRTdGFydCsrXG5cdFx0XHRpZiAoIWlzS2V5ZWQpIHdoaWxlIChzdGFydCA8IHZub2Rlcy5sZW5ndGggJiYgdm5vZGVzW3N0YXJ0XSA9PSBudWxsKSBzdGFydCsrXG5cdFx0XHRpZiAoaXNLZXllZCA9PT0gbnVsbCAmJiBpc09sZEtleWVkID09IG51bGwpIHJldHVybiAvLyBib3RoIGxpc3RzIGFyZSBmdWxsIG9mIG51bGxzXG5cdFx0XHRpZiAoaXNPbGRLZXllZCAhPT0gaXNLZXllZCkge1xuXHRcdFx0XHRyZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgb2xkU3RhcnQsIG9sZC5sZW5ndGgpXG5cdFx0XHRcdGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdH0gZWxzZSBpZiAoIWlzS2V5ZWQpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgaW5kZXggcGFzdCB0aGUgZW5kIG9mIGVpdGhlciBsaXN0IChjYXVzZXMgZGVvcHRzKS5cblx0XHRcdFx0dmFyIGNvbW1vbkxlbmd0aCA9IG9sZC5sZW5ndGggPCB2bm9kZXMubGVuZ3RoID8gb2xkLmxlbmd0aCA6IHZub2Rlcy5sZW5ndGhcblx0XHRcdFx0Ly8gUmV3aW5kIGlmIG5lY2Vzc2FyeSB0byB0aGUgZmlyc3Qgbm9uLW51bGwgaW5kZXggb24gZWl0aGVyIHNpZGUuXG5cdFx0XHRcdC8vIFdlIGNvdWxkIGFsdGVybmF0aXZlbHkgZWl0aGVyIGV4cGxpY2l0bHkgY3JlYXRlIG9yIHJlbW92ZSBub2RlcyB3aGVuIGBzdGFydCAhPT0gb2xkU3RhcnRgXG5cdFx0XHRcdC8vIGJ1dCB0aGF0IHdvdWxkIGJlIG9wdGltaXppbmcgZm9yIHNwYXJzZSBsaXN0cyB3aGljaCBhcmUgbW9yZSByYXJlIHRoYW4gZGVuc2Ugb25lcy5cblx0XHRcdFx0c3RhcnQgPSBzdGFydCA8IG9sZFN0YXJ0ID8gc3RhcnQgOiBvbGRTdGFydFxuXHRcdFx0XHRmb3IgKDsgc3RhcnQgPCBjb21tb25MZW5ndGg7IHN0YXJ0KyspIHtcblx0XHRcdFx0XHRvID0gb2xkW3N0YXJ0XVxuXHRcdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdFx0aWYgKG8gPT09IHYgfHwgbyA9PSBudWxsICYmIHYgPT0gbnVsbCkgY29udGludWVcblx0XHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIGdldE5leHRTaWJsaW5nKG9sZCwgc3RhcnQgKyAxLCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0ZWxzZSBpZiAodiA9PSBudWxsKSByZW1vdmVOb2RlKHBhcmVudCwgbylcblx0XHRcdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBzdGFydCArIDEsIG5leHRTaWJsaW5nKSwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9sZC5sZW5ndGggPiBjb21tb25MZW5ndGgpIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBzdGFydCwgb2xkLmxlbmd0aClcblx0XHRcdFx0aWYgKHZub2Rlcy5sZW5ndGggPiBjb21tb25MZW5ndGgpIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGtleWVkIGRpZmZcblx0XHRcdFx0dmFyIG9sZEVuZCA9IG9sZC5sZW5ndGggLSAxLCBlbmQgPSB2bm9kZXMubGVuZ3RoIC0gMSwgbWFwLCBvLCB2LCBvZSwgdmUsIHRvcFNpYmxpbmdcblxuXHRcdFx0XHQvLyBib3R0b20tdXBcblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRvZSA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0dmUgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRcdGlmIChvZS5rZXkgIT09IHZlLmtleSkgYnJlYWtcblx0XHRcdFx0XHRpZiAob2UgIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB0b3AtZG93blxuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdG8gPSBvbGRbb2xkU3RhcnRdXG5cdFx0XHRcdFx0diA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0XHRpZiAoby5rZXkgIT09IHYua2V5KSBicmVha1xuXHRcdFx0XHRcdG9sZFN0YXJ0KyssIHN0YXJ0Kytcblx0XHRcdFx0XHRpZiAobyAhPT0gdikgdXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZyksIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHN3YXBzIGFuZCBsaXN0IHJldmVyc2Fsc1xuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChzdGFydCA9PT0gZW5kKSBicmVha1xuXHRcdFx0XHRcdGlmIChvLmtleSAhPT0gdmUua2V5IHx8IG9lLmtleSAhPT0gdi5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0dG9wU2libGluZyA9IGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdG1vdmVOb2RlcyhwYXJlbnQsIG9lLCB0b3BTaWJsaW5nKVxuXHRcdFx0XHRcdGlmIChvZSAhPT0gdikgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2LCBob29rcywgdG9wU2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKCsrc3RhcnQgPD0gLS1lbmQpIG1vdmVOb2RlcyhwYXJlbnQsIG8sIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdGlmIChvICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG8sIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRvbGRTdGFydCsrOyBvbGRFbmQtLVxuXHRcdFx0XHRcdG9lID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdFx0byA9IG9sZFtvbGRTdGFydF1cblx0XHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGJvdHRvbSB1cCBvbmNlIGFnYWluXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKG9lLmtleSAhPT0gdmUua2V5KSBicmVha1xuXHRcdFx0XHRcdGlmIChvZSAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHRcdG9lID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YXJ0ID4gZW5kKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEpXG5cdFx0XHRcdGVsc2UgaWYgKG9sZFN0YXJ0ID4gb2xkRW5kKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCArIDEsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IGl2aSBodHRwczovL2dpdGh1Yi5jb20vaXZpanMvaXZpLyBieSBCb3JpcyBLYXVsXG5cdFx0XHRcdFx0dmFyIG9yaWdpbmFsTmV4dFNpYmxpbmcgPSBuZXh0U2libGluZywgdm5vZGVzTGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxLCBvbGRJbmRpY2VzID0gbmV3IEFycmF5KHZub2Rlc0xlbmd0aCksIGxpPTAsIGk9MCwgcG9zID0gMjE0NzQ4MzY0NywgbWF0Y2hlZCA9IDAsIG1hcCwgbGlzSW5kaWNlc1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB2bm9kZXNMZW5ndGg7IGkrKykgb2xkSW5kaWNlc1tpXSA9IC0xXG5cdFx0XHRcdFx0Zm9yIChpID0gZW5kOyBpID49IHN0YXJ0OyBpLS0pIHtcblx0XHRcdFx0XHRcdGlmIChtYXAgPT0gbnVsbCkgbWFwID0gZ2V0S2V5TWFwKG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEpXG5cdFx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tpXVxuXHRcdFx0XHRcdFx0dmFyIG9sZEluZGV4ID0gbWFwW3ZlLmtleV1cblx0XHRcdFx0XHRcdGlmIChvbGRJbmRleCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHBvcyA9IChvbGRJbmRleCA8IHBvcykgPyBvbGRJbmRleCA6IC0xIC8vIGJlY29tZXMgLTEgaWYgbm9kZXMgd2VyZSByZS1vcmRlcmVkXG5cdFx0XHRcdFx0XHRcdG9sZEluZGljZXNbaS1zdGFydF0gPSBvbGRJbmRleFxuXHRcdFx0XHRcdFx0XHRvZSA9IG9sZFtvbGRJbmRleF1cblx0XHRcdFx0XHRcdFx0b2xkW29sZEluZGV4XSA9IG51bGxcblx0XHRcdFx0XHRcdFx0aWYgKG9lICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdFx0XHRtYXRjaGVkKytcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV4dFNpYmxpbmcgPSBvcmlnaW5hbE5leHRTaWJsaW5nXG5cdFx0XHRcdFx0aWYgKG1hdGNoZWQgIT09IG9sZEVuZCAtIG9sZFN0YXJ0ICsgMSkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxKVxuXHRcdFx0XHRcdGlmIChtYXRjaGVkID09PSAwKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCArIDEsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAocG9zID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHQvLyB0aGUgaW5kaWNlcyBvZiB0aGUgaW5kaWNlcyBvZiB0aGUgaXRlbXMgdGhhdCBhcmUgcGFydCBvZiB0aGVcblx0XHRcdFx0XHRcdFx0Ly8gbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIGluIHRoZSBvbGRJbmRpY2VzIGxpc3Rcblx0XHRcdFx0XHRcdFx0bGlzSW5kaWNlcyA9IG1ha2VMaXNJbmRpY2VzKG9sZEluZGljZXMpXG5cdFx0XHRcdFx0XHRcdGxpID0gbGlzSW5kaWNlcy5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IGVuZDsgaSA+PSBzdGFydDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRcdFx0diA9IHZub2Rlc1tpXVxuXHRcdFx0XHRcdFx0XHRcdGlmIChvbGRJbmRpY2VzW2ktc3RhcnRdID09PSAtMSkgY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAobGlzSW5kaWNlc1tsaV0gPT09IGkgLSBzdGFydCkgbGktLVxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxzZSBtb3ZlTm9kZXMocGFyZW50LCB2LCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHYuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdm5vZGVzW2ldLmRvbVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSBlbmQ7IGkgPj0gc3RhcnQ7IGktLSkge1xuXHRcdFx0XHRcdFx0XHRcdHYgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRcdFx0XHRpZiAob2xkSW5kaWNlc1tpLXN0YXJ0XSA9PT0gLTEpIGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRcdGlmICh2LmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZub2Rlc1tpXS5kb21cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHZhciBvbGRUYWcgPSBvbGQudGFnLCB0YWcgPSB2bm9kZS50YWdcblx0XHRpZiAob2xkVGFnID09PSB0YWcpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gb2xkLnN0YXRlXG5cdFx0XHR2bm9kZS5ldmVudHMgPSBvbGQuZXZlbnRzXG5cdFx0XHRpZiAoc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpKSByZXR1cm5cblx0XHRcdGlmICh0eXBlb2Ygb2xkVGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvbGRUYWcpIHtcblx0XHRcdFx0XHRjYXNlIFwiI1wiOiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCI8XCI6IHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCJbXCI6IHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucyk7IGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDogdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCBob29rcywgbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZW1vdmVOb2RlKHBhcmVudCwgb2xkKVxuXHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuLnRvU3RyaW5nKCkgIT09IHZub2RlLmNoaWxkcmVuLnRvU3RyaW5nKCkpIHtcblx0XHRcdG9sZC5kb20ubm9kZVZhbHVlID0gdm5vZGUuY2hpbGRyZW5cblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuICE9PSB2bm9kZS5jaGlsZHJlbikge1xuXHRcdFx0cmVtb3ZlSFRNTChwYXJlbnQsIG9sZClcblx0XHRcdGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdFx0dm5vZGUuaW5zdGFuY2UgPSBvbGQuaW5zdGFuY2Vcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dXBkYXRlTm9kZXMocGFyZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdHZhciBkb21TaXplID0gMCwgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdHZub2RlLmRvbSA9IG51bGxcblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCAmJiBjaGlsZC5kb20gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh2bm9kZS5kb20gPT0gbnVsbCkgdm5vZGUuZG9tID0gY2hpbGQuZG9tXG5cdFx0XHRcdFx0ZG9tU2l6ZSArPSBjaGlsZC5kb21TaXplIHx8IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbVNpemUgIT09IDEpIHZub2RlLmRvbVNpemUgPSBkb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgaG9va3MsIG5zKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cblx0XHRpZiAodm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpIHtcblx0XHRcdGlmICh2bm9kZS5hdHRycyA9PSBudWxsKSB2bm9kZS5hdHRycyA9IHt9XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLmF0dHJzLnZhbHVlID0gdm5vZGUudGV4dCAvL0ZJWE1FIGhhbmRsZSBtdWx0aXBsZSBjaGlsZHJlblxuXHRcdFx0XHR2bm9kZS50ZXh0ID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQuYXR0cnMsIHZub2RlLmF0dHJzLCBucylcblx0XHRpZiAoIW1heWJlU2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSkge1xuXHRcdFx0aWYgKG9sZC50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT09IFwiXCIpIHtcblx0XHRcdFx0aWYgKG9sZC50ZXh0LnRvU3RyaW5nKCkgIT09IHZub2RlLnRleHQudG9TdHJpbmcoKSkgb2xkLmRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZub2RlLnRleHRcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAob2xkLnRleHQgIT0gbnVsbCkgb2xkLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgb2xkLnRleHQsIHVuZGVmaW5lZCwgb2xkLmRvbS5maXJzdENoaWxkKV1cblx0XHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkgdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHRcdHVwZGF0ZU5vZGVzKGVsZW1lbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIGhvb2tzLCBudWxsLCBucylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAob2xkLmluc3RhbmNlID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZC5pbnN0YW5jZSwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5pbnN0YW5jZS5kb21TaXplXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKHBhcmVudCwgb2xkLmluc3RhbmNlKVxuXHRcdFx0dm5vZGUuZG9tID0gdW5kZWZpbmVkXG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnZXRLZXlNYXAodm5vZGVzLCBzdGFydCwgZW5kKSB7XG5cdFx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tzdGFydF1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBrZXkgPSB2bm9kZS5rZXlcblx0XHRcdFx0aWYgKGtleSAhPSBudWxsKSBtYXBba2V5XSA9IHN0YXJ0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBtYXBcblx0fVxuXHQvLyBMaWZ0ZWQgZnJvbSBpdmkgaHR0cHM6Ly9naXRodWIuY29tL2l2aWpzL2l2aS9cblx0Ly8gdGFrZXMgYSBsaXN0IG9mIHVuaXF1ZSBudW1iZXJzICgtMSBpcyBzcGVjaWFsIGFuZCBjYW5cblx0Ly8gb2NjdXIgbXVsdGlwbGUgdGltZXMpIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIGluZGljZXNcblx0Ly8gb2YgdGhlIGl0ZW1zIHRoYXQgYXJlIHBhcnQgb2YgdGhlIGxvbmdlc3QgaW5jcmVhc2luZ1xuXHQvLyBzdWJzZXF1ZWNlXG5cdHZhciBsaXNUZW1wID0gW11cblx0ZnVuY3Rpb24gbWFrZUxpc0luZGljZXMoYSkge1xuXHRcdHZhciByZXN1bHQgPSBbMF1cblx0XHR2YXIgdSA9IDAsIHYgPSAwLCBpID0gMFxuXHRcdHZhciBpbCA9IGxpc1RlbXAubGVuZ3RoID0gYS5sZW5ndGhcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGlsOyBpKyspIGxpc1RlbXBbaV0gPSBhW2ldXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbDsgKytpKSB7XG5cdFx0XHRpZiAoYVtpXSA9PT0gLTEpIGNvbnRpbnVlXG5cdFx0XHR2YXIgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV1cblx0XHRcdGlmIChhW2pdIDwgYVtpXSkge1xuXHRcdFx0XHRsaXNUZW1wW2ldID0galxuXHRcdFx0XHRyZXN1bHQucHVzaChpKVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0fVxuXHRcdFx0dSA9IDBcblx0XHRcdHYgPSByZXN1bHQubGVuZ3RoIC0gMVxuXHRcdFx0d2hpbGUgKHUgPCB2KSB7XG5cdFx0XHRcdC8vIEZhc3QgaW50ZWdlciBhdmVyYWdlIHdpdGhvdXQgb3ZlcmZsb3cuXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdHZhciBjID0gKHUgPj4+IDEpICsgKHYgPj4+IDEpICsgKHUgJiB2ICYgMSlcblx0XHRcdFx0aWYgKGFbcmVzdWx0W2NdXSA8IGFbaV0pIHtcblx0XHRcdFx0XHR1ID0gYyArIDFcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR2ID0gY1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoYVtpXSA8IGFbcmVzdWx0W3VdXSkge1xuXHRcdFx0XHRpZiAodSA+IDApIGxpc1RlbXBbaV0gPSByZXN1bHRbdSAtIDFdXG5cdFx0XHRcdHJlc3VsdFt1XSA9IGlcblx0XHRcdH1cblx0XHR9XG5cdFx0dSA9IHJlc3VsdC5sZW5ndGhcblx0XHR2ID0gcmVzdWx0W3UgLSAxXVxuXHRcdHdoaWxlICh1LS0gPiAwKSB7XG5cdFx0XHRyZXN1bHRbdV0gPSB2XG5cdFx0XHR2ID0gbGlzVGVtcFt2XVxuXHRcdH1cblx0XHRsaXNUZW1wLmxlbmd0aCA9IDBcblx0XHRyZXR1cm4gcmVzdWx0XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXh0U2libGluZyh2bm9kZXMsIGksIG5leHRTaWJsaW5nKSB7XG5cdFx0Zm9yICg7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh2bm9kZXNbaV0gIT0gbnVsbCAmJiB2bm9kZXNbaV0uZG9tICE9IG51bGwpIHJldHVybiB2bm9kZXNbaV0uZG9tXG5cdFx0fVxuXHRcdHJldHVybiBuZXh0U2libGluZ1xuXHR9XG5cblx0Ly8gVGhpcyBjb3ZlcnMgYSByZWFsbHkgc3BlY2lmaWMgZWRnZSBjYXNlOlxuXHQvLyAtIFBhcmVudCBub2RlIGlzIGtleWVkIGFuZCBjb250YWlucyBjaGlsZFxuXHQvLyAtIENoaWxkIGlzIHJlbW92ZWQsIHJldHVybnMgdW5yZXNvbHZlZCBwcm9taXNlIGluIGBvbmJlZm9yZXJlbW92ZWBcblx0Ly8gLSBQYXJlbnQgbm9kZSBpcyBtb3ZlZCBpbiBrZXllZCBkaWZmXG5cdC8vIC0gUmVtYWluaW5nIGNoaWxkcmVuIHN0aWxsIG5lZWQgbW92ZWQgYXBwcm9wcmlhdGVseVxuXHQvL1xuXHQvLyBJZGVhbGx5LCBJJ2QgdHJhY2sgcmVtb3ZlZCBub2RlcyBhcyB3ZWxsLCBidXQgdGhhdCBpbnRyb2R1Y2VzIGEgbG90IG1vcmVcblx0Ly8gY29tcGxleGl0eSBhbmQgSSdtIG5vdCBleGFjdGx5IGludGVyZXN0ZWQgaW4gZG9pbmcgdGhhdC5cblx0ZnVuY3Rpb24gbW92ZU5vZGVzKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIGZyYWcgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdG1vdmVDaGlsZFRvRnJhZyhwYXJlbnQsIGZyYWcsIHZub2RlKVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBtb3ZlQ2hpbGRUb0ZyYWcocGFyZW50LCBmcmFnLCB2bm9kZSkge1xuXHRcdC8vIERvZGdlIHRoZSByZWN1cnNpb24gb3ZlcmhlYWQgaW4gYSBmZXcgb2YgdGhlIG1vc3QgY29tbW9uIGNhc2VzLlxuXHRcdHdoaWxlICh2bm9kZS5kb20gIT0gbnVsbCAmJiB2bm9kZS5kb20ucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2bm9kZSA9IHZub2RlLmluc3RhbmNlXG5cdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuaW5zdGFuY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmcmFnLmFwcGVuZENoaWxkKHZub2RlLmluc3RhbmNlW2ldKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLnRhZyAhPT0gXCJbXCIpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgcmVjdXJzZSBmb3IgdGV4dCBub2RlcyAqb3IqIGVsZW1lbnRzLCBqdXN0IGZyYWdtZW50c1xuXHRcdFx0XHRmcmFnLmFwcGVuZENoaWxkKHZub2RlLmRvbSlcblx0XHRcdH0gZWxzZSBpZiAodm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHZub2RlID0gdm5vZGUuY2hpbGRyZW5bMF1cblx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV1cblx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgbW92ZUNoaWxkVG9GcmFnKHBhcmVudCwgZnJhZywgY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnQsIGRvbSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAobmV4dFNpYmxpbmcgIT0gbnVsbCkgcGFyZW50Lmluc2VydEJlZm9yZShkb20sIG5leHRTaWJsaW5nKVxuXHRcdGVsc2UgcGFyZW50LmFwcGVuZENoaWxkKGRvbSlcblx0fVxuXG5cdGZ1bmN0aW9uIG1heWJlU2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSB7XG5cdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwgfHwgKFxuXHRcdFx0dm5vZGUuYXR0cnMuY29udGVudGVkaXRhYmxlID09IG51bGwgJiYgLy8gYXR0cmlidXRlXG5cdFx0XHR2bm9kZS5hdHRycy5jb250ZW50RWRpdGFibGUgPT0gbnVsbCAvLyBwcm9wZXJ0eVxuXHRcdCkpIHJldHVybiBmYWxzZVxuXHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0aWYgKGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdHZhciBjb250ZW50ID0gY2hpbGRyZW5bMF0uY2hpbGRyZW5cblx0XHRcdGlmICh2bm9kZS5kb20uaW5uZXJIVE1MICE9PSBjb250ZW50KSB2bm9kZS5kb20uaW5uZXJIVE1MID0gY29udGVudFxuXHRcdH1cblx0XHRlbHNlIGlmICh2bm9kZS50ZXh0ICE9IG51bGwgfHwgY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDApIHRocm93IG5ldyBFcnJvcihcIkNoaWxkIG5vZGUgb2YgYSBjb250ZW50ZWRpdGFibGUgbXVzdCBiZSB0cnVzdGVkXCIpXG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdC8vcmVtb3ZlXG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHJlbW92ZU5vZGUocGFyZW50LCB2bm9kZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZShwYXJlbnQsIHZub2RlKSB7XG5cdFx0dmFyIG1hc2sgPSAwXG5cdFx0dmFyIG9yaWdpbmFsID0gdm5vZGUuc3RhdGVcblx0XHR2YXIgc3RhdGVSZXN1bHQsIGF0dHJzUmVzdWx0XG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9uYmVmb3JlcmVtb3ZlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRtYXNrID0gMVxuXHRcdFx0XHRzdGF0ZVJlc3VsdCA9IHJlc3VsdFxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRtYXNrIHw9IDJcblx0XHRcdFx0YXR0cnNSZXN1bHQgPSByZXN1bHRcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cblx0XHQvLyBJZiB3ZSBjYW4sIHRyeSB0byBmYXN0LXBhdGggaXQgYW5kIGF2b2lkIGFsbCB0aGUgb3ZlcmhlYWQgb2YgYXdhaXRpbmdcblx0XHRpZiAoIW1hc2spIHtcblx0XHRcdG9ucmVtb3ZlKHZub2RlKVxuXHRcdFx0cmVtb3ZlQ2hpbGQocGFyZW50LCB2bm9kZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHN0YXRlUmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0XHRpZiAobWFzayAmIDEpIHsgbWFzayAmPSAyOyBpZiAoIW1hc2spIHJlYWxseVJlbW92ZSgpIH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdGF0ZVJlc3VsdC50aGVuKG5leHQsIG5leHQpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXR0cnNSZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgbmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRcdGlmIChtYXNrICYgMikgeyBtYXNrICY9IDE7IGlmICghbWFzaykgcmVhbGx5UmVtb3ZlKCkgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHJzUmVzdWx0LnRoZW4obmV4dCwgbmV4dClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZWFsbHlSZW1vdmUoKSB7XG5cdFx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblx0XHRcdG9ucmVtb3ZlKHZub2RlKVxuXHRcdFx0cmVtb3ZlQ2hpbGQocGFyZW50LCB2bm9kZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlSFRNTChwYXJlbnQsIHZub2RlKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5pbnN0YW5jZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHZub2RlLmluc3RhbmNlW2ldKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVDaGlsZChwYXJlbnQsIHZub2RlKSB7XG5cdFx0Ly8gRG9kZ2UgdGhlIHJlY3Vyc2lvbiBvdmVyaGVhZCBpbiBhIGZldyBvZiB0aGUgbW9zdCBjb21tb24gY2FzZXMuXG5cdFx0d2hpbGUgKHZub2RlLmRvbSAhPSBudWxsICYmIHZub2RlLmRvbS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHZub2RlID0gdm5vZGUuaW5zdGFuY2Vcblx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdFx0cmVtb3ZlSFRNTChwYXJlbnQsIHZub2RlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHZub2RlLnRhZyAhPT0gXCJbXCIpIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodm5vZGUuZG9tKVxuXHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSh2bm9kZS5jaGlsZHJlbikpIGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHZub2RlID0gdm5vZGUuY2hpbGRyZW5bMF1cblx0XHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXVxuXHRcdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIHJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBvbnJlbW92ZSh2bm9kZSkge1xuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbnJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9ucmVtb3ZlLCB2bm9kZSlcblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25yZW1vdmUsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkgb25yZW1vdmUodm5vZGUuaW5zdGFuY2UpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIG9ucmVtb3ZlKGNoaWxkKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly9hdHRyc1xuXHRmdW5jdGlvbiBzZXRBdHRycyh2bm9kZSwgYXR0cnMsIG5zKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRzZXRBdHRyKHZub2RlLCBrZXksIG51bGwsIGF0dHJzW2tleV0sIG5zKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRBdHRyKHZub2RlLCBrZXksIG9sZCwgdmFsdWUsIG5zKSB7XG5cdFx0aWYgKGtleSA9PT0gXCJrZXlcIiB8fCBrZXkgPT09IFwiaXNcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IGlzTGlmZWN5Y2xlTWV0aG9kKGtleSkgfHwgKG9sZCA9PT0gdmFsdWUgJiYgIWlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwga2V5KSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSByZXR1cm5cblx0XHRpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiKSByZXR1cm4gdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdmFsdWUpXG5cdFx0aWYgKGtleS5zbGljZSgwLCA2KSA9PT0gXCJ4bGluazpcIikgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBrZXkuc2xpY2UoNiksIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleSA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZSh2bm9kZS5kb20sIG9sZCwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoaGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpKSB7XG5cdFx0XHRpZiAoa2V5ID09PSBcInZhbHVlXCIpIHtcblx0XHRcdFx0Ly8gT25seSBkbyB0aGUgY29lcmNpb24gaWYgd2UncmUgYWN0dWFsbHkgZ29pbmcgdG8gY2hlY2sgdGhlIHZhbHVlLlxuXHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiAqL1xuXHRcdFx0XHQvL3NldHRpbmcgaW5wdXRbdmFsdWVdIHRvIHNhbWUgdmFsdWUgYnkgdHlwaW5nIG9uIGZvY3VzZWQgZWxlbWVudCBtb3ZlcyBjdXJzb3IgdG8gZW5kIGluIENocm9tZVxuXHRcdFx0XHRpZiAoKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiIHx8IHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSAmJiB2bm9kZS5kb20udmFsdWUgPT09IFwiXCIgKyB2YWx1ZSAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKSkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBzZWxlY3RbdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgb2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gXCJcIiArIHZhbHVlKSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIG9wdGlvblt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJvcHRpb25cIiAmJiBvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUpIHJldHVyblxuXHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uICovXG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB5b3UgYXNzaWduIGFuIGlucHV0IHR5cGUgdGhhdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFIDExIHdpdGggYW4gYXNzaWdubWVudCBleHByZXNzaW9uLCBhbiBlcnJvciB3aWxsIG9jY3VyLlxuXHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGtleSA9PT0gXCJ0eXBlXCIpIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcblx0XHRcdGVsc2Ugdm5vZGUuZG9tW2tleV0gPSB2YWx1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRpZiAodmFsdWUpIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LCBcIlwiKVxuXHRcdFx0XHRlbHNlIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB2bm9kZS5kb20uc2V0QXR0cmlidXRlKGtleSA9PT0gXCJjbGFzc05hbWVcIiA/IFwiY2xhc3NcIiA6IGtleSwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUF0dHIodm5vZGUsIGtleSwgb2xkLCBucykge1xuXHRcdGlmIChrZXkgPT09IFwia2V5XCIgfHwga2V5ID09PSBcImlzXCIgfHwgb2xkID09IG51bGwgfHwgaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSkgcmV0dXJuXG5cdFx0aWYgKGtleVswXSA9PT0gXCJvXCIgJiYga2V5WzFdID09PSBcIm5cIiAmJiAhaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSkgdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdW5kZWZpbmVkKVxuXHRcdGVsc2UgaWYgKGtleSA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZSh2bm9kZS5kb20sIG9sZCwgbnVsbClcblx0XHRlbHNlIGlmIChcblx0XHRcdGhhc1Byb3BlcnR5S2V5KHZub2RlLCBrZXksIG5zKVxuXHRcdFx0JiYga2V5ICE9PSBcImNsYXNzTmFtZVwiXG5cdFx0XHQmJiAhKGtleSA9PT0gXCJ2YWx1ZVwiICYmIChcblx0XHRcdFx0dm5vZGUudGFnID09PSBcIm9wdGlvblwiXG5cdFx0XHRcdHx8IHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiB2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCA9PT0gLTEgJiYgdm5vZGUuZG9tID09PSBhY3RpdmVFbGVtZW50KClcblx0XHRcdCkpXG5cdFx0XHQmJiAhKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGtleSA9PT0gXCJ0eXBlXCIpXG5cdFx0KSB7XG5cdFx0XHR2bm9kZS5kb21ba2V5XSA9IG51bGxcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG5zTGFzdEluZGV4ID0ga2V5LmluZGV4T2YoXCI6XCIpXG5cdFx0XHRpZiAobnNMYXN0SW5kZXggIT09IC0xKSBrZXkgPSBrZXkuc2xpY2UobnNMYXN0SW5kZXggKyAxKVxuXHRcdFx0aWYgKG9sZCAhPT0gZmFsc2UpIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5ID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5KVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRMYXRlU2VsZWN0QXR0cnModm5vZGUsIGF0dHJzKSB7XG5cdFx0aWYgKFwidmFsdWVcIiBpbiBhdHRycykge1xuXHRcdFx0aWYoYXR0cnMudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ICE9PSAtMSkgdm5vZGUuZG9tLnZhbHVlID0gbnVsbFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG5vcm1hbGl6ZWQgPSBcIlwiICsgYXR0cnMudmFsdWUgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuXHRcdFx0XHRpZiAodm5vZGUuZG9tLnZhbHVlICE9PSBub3JtYWxpemVkIHx8IHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRcdHZub2RlLmRvbS52YWx1ZSA9IG5vcm1hbGl6ZWRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoXCJzZWxlY3RlZEluZGV4XCIgaW4gYXR0cnMpIHNldEF0dHIodm5vZGUsIFwic2VsZWN0ZWRJbmRleFwiLCBudWxsLCBhdHRycy5zZWxlY3RlZEluZGV4LCB1bmRlZmluZWQpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQXR0cnModm5vZGUsIG9sZCwgYXR0cnMsIG5zKSB7XG5cdFx0aWYgKGF0dHJzICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0XHRzZXRBdHRyKHZub2RlLCBrZXksIG9sZCAmJiBvbGRba2V5XSwgYXR0cnNba2V5XSwgbnMpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciB2YWxcblx0XHRpZiAob2xkICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKCgodmFsID0gb2xkW2tleV0pICE9IG51bGwpICYmIChhdHRycyA9PSBudWxsIHx8IGF0dHJzW2tleV0gPT0gbnVsbCkpIHtcblx0XHRcdFx0XHRyZW1vdmVBdHRyKHZub2RlLCBrZXksIHZhbCwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaXNGb3JtQXR0cmlidXRlKHZub2RlLCBhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwidmFsdWVcIiB8fCBhdHRyID09PSBcImNoZWNrZWRcIiB8fCBhdHRyID09PSBcInNlbGVjdGVkSW5kZXhcIiB8fCBhdHRyID09PSBcInNlbGVjdGVkXCIgJiYgdm5vZGUuZG9tID09PSBhY3RpdmVFbGVtZW50KCkgfHwgdm5vZGUudGFnID09PSBcIm9wdGlvblwiICYmIHZub2RlLmRvbS5wYXJlbnROb2RlID09PSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpc0xpZmVjeWNsZU1ldGhvZChhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwib25pbml0XCIgfHwgYXR0ciA9PT0gXCJvbmNyZWF0ZVwiIHx8IGF0dHIgPT09IFwib251cGRhdGVcIiB8fCBhdHRyID09PSBcIm9ucmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmV1cGRhdGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGhhc1Byb3BlcnR5S2V5KHZub2RlLCBrZXksIG5zKSB7XG5cdFx0Ly8gRmlsdGVyIG91dCBuYW1lc3BhY2VkIGtleXNcblx0XHRyZXR1cm4gbnMgPT09IHVuZGVmaW5lZCAmJiAoXG5cdFx0XHQvLyBJZiBpdCdzIGEgY3VzdG9tIGVsZW1lbnQsIGp1c3Qga2VlcCBpdC5cblx0XHRcdHZub2RlLnRhZy5pbmRleE9mKFwiLVwiKSA+IC0xIHx8IHZub2RlLmF0dHJzICE9IG51bGwgJiYgdm5vZGUuYXR0cnMuaXMgfHxcblx0XHRcdC8vIElmIGl0J3MgYSBub3JtYWwgZWxlbWVudCwgbGV0J3MgdHJ5IHRvIGF2b2lkIGEgZmV3IGJyb3dzZXIgYnVncy5cblx0XHRcdGtleSAhPT0gXCJocmVmXCIgJiYga2V5ICE9PSBcImxpc3RcIiAmJiBrZXkgIT09IFwiZm9ybVwiICYmIGtleSAhPT0gXCJ3aWR0aFwiICYmIGtleSAhPT0gXCJoZWlnaHRcIi8vICYmIGtleSAhPT0gXCJ0eXBlXCJcblx0XHRcdC8vIERlZmVyIHRoZSBwcm9wZXJ0eSBjaGVjayB1bnRpbCAqYWZ0ZXIqIHdlIGNoZWNrIGV2ZXJ5dGhpbmcuXG5cdFx0KSAmJiBrZXkgaW4gdm5vZGUuZG9tXG5cdH1cblxuXHQvL3N0eWxlXG5cdHZhciB1cHBlcmNhc2VSZWdleCA9IC9bQS1aXS9nXG5cdGZ1bmN0aW9uIHRvTG93ZXJDYXNlKGNhcGl0YWwpIHsgcmV0dXJuIFwiLVwiICsgY2FwaXRhbC50b0xvd2VyQ2FzZSgpIH1cblx0ZnVuY3Rpb24gbm9ybWFsaXplS2V5KGtleSkge1xuXHRcdHJldHVybiBrZXlbMF0gPT09IFwiLVwiICYmIGtleVsxXSA9PT0gXCItXCIgPyBrZXkgOlxuXHRcdFx0a2V5ID09PSBcImNzc0Zsb2F0XCIgPyBcImZsb2F0XCIgOlxuXHRcdFx0XHRrZXkucmVwbGFjZSh1cHBlcmNhc2VSZWdleCwgdG9Mb3dlckNhc2UpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGUoZWxlbWVudCwgb2xkLCBzdHlsZSkge1xuXHRcdGlmIChvbGQgPT09IHN0eWxlKSB7XG5cdFx0XHQvLyBTdHlsZXMgYXJlIGVxdWl2YWxlbnQsIGRvIG5vdGhpbmcuXG5cdFx0fSBlbHNlIGlmIChzdHlsZSA9PSBudWxsKSB7XG5cdFx0XHQvLyBOZXcgc3R5bGUgaXMgbWlzc2luZywganVzdCBjbGVhciBpdC5cblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzdHlsZSAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0Ly8gTmV3IHN0eWxlIGlzIGEgc3RyaW5nLCBsZXQgZW5naW5lIGRlYWwgd2l0aCBwYXRjaGluZy5cblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG5cdFx0fSBlbHNlIGlmIChvbGQgPT0gbnVsbCB8fCB0eXBlb2Ygb2xkICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHQvLyBgb2xkYCBpcyBtaXNzaW5nIG9yIGEgc3RyaW5nLCBgc3R5bGVgIGlzIGFuIG9iamVjdC5cblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHRcdC8vIEFkZCBuZXcgc3R5bGUgcHJvcGVydGllc1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlW2tleV1cblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkobm9ybWFsaXplS2V5KGtleSksIFN0cmluZyh2YWx1ZSkpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEJvdGggb2xkICYgbmV3IGFyZSAoZGlmZmVyZW50KSBvYmplY3RzLlxuXHRcdFx0Ly8gVXBkYXRlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBoYXZlIGNoYW5nZWRcblx0XHRcdGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBzdHlsZVtrZXldXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9IFN0cmluZyh2YWx1ZSkpICE9PSBTdHJpbmcob2xkW2tleV0pKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSwgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBzdHlsZSBwcm9wZXJ0aWVzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2xkKSB7XG5cdFx0XHRcdGlmIChvbGRba2V5XSAhPSBudWxsICYmIHN0eWxlW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkobm9ybWFsaXplS2V5KGtleSkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBIZXJlJ3MgYW4gZXhwbGFuYXRpb24gb2YgaG93IHRoaXMgd29ya3M6XG5cdC8vIDEuIFRoZSBldmVudCBuYW1lcyBhcmUgYWx3YXlzIChieSBkZXNpZ24pIHByZWZpeGVkIGJ5IGBvbmAuXG5cdC8vIDIuIFRoZSBFdmVudExpc3RlbmVyIGludGVyZmFjZSBhY2NlcHRzIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdFxuXHQvLyAgICB3aXRoIGEgYGhhbmRsZUV2ZW50YCBtZXRob2QuXG5cdC8vIDMuIFRoZSBvYmplY3QgZG9lcyBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYCwgdG8gYXZvaWRcblx0Ly8gICAgYW55IHBvdGVudGlhbCBpbnRlcmZlcmVuY2Ugd2l0aCB0aGF0IChlLmcuIHNldHRlcnMpLlxuXHQvLyA0LiBUaGUgZXZlbnQgbmFtZSBpcyByZW1hcHBlZCB0byB0aGUgaGFuZGxlciBiZWZvcmUgY2FsbGluZyBpdC5cblx0Ly8gNS4gSW4gZnVuY3Rpb24tYmFzZWQgZXZlbnQgaGFuZGxlcnMsIGBldi50YXJnZXQgPT09IHRoaXNgLiBXZSByZXBsaWNhdGVcblx0Ly8gICAgdGhhdCBiZWxvdy5cblx0Ly8gNi4gSW4gZnVuY3Rpb24tYmFzZWQgZXZlbnQgaGFuZGxlcnMsIGByZXR1cm4gZmFsc2VgIHByZXZlbnRzIHRoZSBkZWZhdWx0XG5cdC8vICAgIGFjdGlvbiBhbmQgc3RvcHMgZXZlbnQgcHJvcGFnYXRpb24uIFdlIHJlcGxpY2F0ZSB0aGF0IGJlbG93LlxuXHRmdW5jdGlvbiBFdmVudERpY3QoKSB7XG5cdFx0Ly8gU2F2ZSB0aGlzLCBzbyB0aGUgY3VycmVudCByZWRyYXcgaXMgY29ycmVjdGx5IHRyYWNrZWQuXG5cdFx0dGhpcy5fID0gY3VycmVudFJlZHJhd1xuXHR9XG5cdEV2ZW50RGljdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cdEV2ZW50RGljdC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcblx0XHR2YXIgaGFuZGxlciA9IHRoaXNbXCJvblwiICsgZXYudHlwZV1cblx0XHR2YXIgcmVzdWx0XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHJlc3VsdCA9IGhhbmRsZXIuY2FsbChldi5jdXJyZW50VGFyZ2V0LCBldilcblx0XHRlbHNlIGlmICh0eXBlb2YgaGFuZGxlci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSBoYW5kbGVyLmhhbmRsZUV2ZW50KGV2KVxuXHRcdGlmICh0aGlzLl8gJiYgZXYucmVkcmF3ICE9PSBmYWxzZSkgKDAsIHRoaXMuXykoKVxuXHRcdGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdH1cblx0fVxuXG5cdC8vZXZlbnRcblx0ZnVuY3Rpb24gdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAodm5vZGUuZXZlbnRzICE9IG51bGwpIHtcblx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSA9PT0gdmFsdWUpIHJldHVyblxuXHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldID09IG51bGwpIHZub2RlLmRvbS5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB2YWx1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldICE9IG51bGwpIHZub2RlLmRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdHZub2RlLmV2ZW50cyA9IG5ldyBFdmVudERpY3QoKVxuXHRcdFx0dm5vZGUuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB2YWx1ZVxuXHRcdH1cblx0fVxuXG5cdC8vbGlmZWN5Y2xlXG5cdGZ1bmN0aW9uIGluaXRMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmluaXQgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbChzb3VyY2Uub25pbml0LCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKGNhbGxIb29rLmJpbmQoc291cmNlLm9uY3JlYXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub251cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChjYWxsSG9vay5iaW5kKHNvdXJjZS5vbnVwZGF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSB7XG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dmFyIGZvcmNlID0gY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSwgdm5vZGUsIG9sZClcblx0XHRcdFx0aWYgKGZvcmNlICE9PSB1bmRlZmluZWQgJiYgIWZvcmNlKSBicmVha1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dmFyIGZvcmNlID0gY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbmJlZm9yZXVwZGF0ZSwgdm5vZGUsIG9sZClcblx0XHRcdFx0aWYgKGZvcmNlICE9PSB1bmRlZmluZWQgJiYgIWZvcmNlKSBicmVha1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fSB3aGlsZSAoZmFsc2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuXHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHR2bm9kZS5pbnN0YW5jZSA9IG9sZC5pbnN0YW5jZVxuXHRcdC8vIE9uZSB3b3VsZCB0aGluayBoYXZpbmcgdGhlIGFjdHVhbCBsYXRlc3QgYXR0cmlidXRlcyB3b3VsZCBiZSBpZGVhbCxcblx0XHQvLyBidXQgaXQgZG9lc24ndCBsZXQgdXMgcHJvcGVybHkgZGlmZiBiYXNlZCBvbiBvdXIgY3VycmVudCBpbnRlcm5hbFxuXHRcdC8vIHJlcHJlc2VudGF0aW9uLiBXZSBoYXZlIHRvIHNhdmUgbm90IG9ubHkgdGhlIG9sZCBET00gaW5mbywgYnV0IGFsc29cblx0XHQvLyB0aGUgYXR0cmlidXRlcyB1c2VkIHRvIGNyZWF0ZSBpdCwgYXMgd2UgZGlmZiAqdGhhdCosIG5vdCBhZ2FpbnN0IHRoZVxuXHRcdC8vIERPTSBkaXJlY3RseSAod2l0aCBhIGZldyBleGNlcHRpb25zIGluIGBzZXRBdHRyYCkuIEFuZCwgb2YgY291cnNlLCB3ZVxuXHRcdC8vIG5lZWQgdG8gc2F2ZSB0aGUgY2hpbGRyZW4gYW5kIHRleHQgYXMgdGhleSBhcmUgY29uY2VwdHVhbGx5IG5vdFxuXHRcdC8vIHVubGlrZSBzcGVjaWFsIFwiYXR0cmlidXRlc1wiIGludGVybmFsbHkuXG5cdFx0dm5vZGUuYXR0cnMgPSBvbGQuYXR0cnNcblx0XHR2bm9kZS5jaGlsZHJlbiA9IG9sZC5jaGlsZHJlblxuXHRcdHZub2RlLnRleHQgPSBvbGQudGV4dFxuXHRcdHJldHVybiB0cnVlXG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24oZG9tLCB2bm9kZXMsIHJlZHJhdykge1xuXHRcdGlmICghZG9tKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCBiZWluZyBwYXNzZWQgdG8gbS5yb3V0ZS9tLm1vdW50L20ucmVuZGVyIGlzIG5vdCB1bmRlZmluZWQuXCIpXG5cdFx0dmFyIGhvb2tzID0gW11cblx0XHR2YXIgYWN0aXZlID0gYWN0aXZlRWxlbWVudCgpXG5cdFx0dmFyIG5hbWVzcGFjZSA9IGRvbS5uYW1lc3BhY2VVUklcblxuXHRcdC8vIEZpcnN0IHRpbWUgcmVuZGVyaW5nIGludG8gYSBub2RlIGNsZWFycyBpdCBvdXRcblx0XHRpZiAoZG9tLnZub2RlcyA9PSBudWxsKSBkb20udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHR2bm9kZXMgPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihBcnJheS5pc0FycmF5KHZub2RlcykgPyB2bm9kZXMgOiBbdm5vZGVzXSlcblx0XHR2YXIgcHJldlJlZHJhdyA9IGN1cnJlbnRSZWRyYXdcblx0XHR0cnkge1xuXHRcdFx0Y3VycmVudFJlZHJhdyA9IHR5cGVvZiByZWRyYXcgPT09IFwiZnVuY3Rpb25cIiA/IHJlZHJhdyA6IHVuZGVmaW5lZFxuXHRcdFx0dXBkYXRlTm9kZXMoZG9tLCBkb20udm5vZGVzLCB2bm9kZXMsIGhvb2tzLCBudWxsLCBuYW1lc3BhY2UgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiID8gdW5kZWZpbmVkIDogbmFtZXNwYWNlKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjdXJyZW50UmVkcmF3ID0gcHJldlJlZHJhd1xuXHRcdH1cblx0XHRkb20udm5vZGVzID0gdm5vZGVzXG5cdFx0Ly8gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGNhbiByZXR1cm4gbnVsbDogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNkb20tZG9jdW1lbnQtYWN0aXZlZWxlbWVudFxuXHRcdGlmIChhY3RpdmUgIT0gbnVsbCAmJiBhY3RpdmVFbGVtZW50KCkgIT09IGFjdGl2ZSAmJiB0eXBlb2YgYWN0aXZlLmZvY3VzID09PSBcImZ1bmN0aW9uXCIpIGFjdGl2ZS5mb2N1cygpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykgaG9va3NbaV0oKVxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaHRtbCkge1xuXHRpZiAoaHRtbCA9PSBudWxsKSBodG1sID0gXCJcIlxuXHRyZXR1cm4gVm5vZGUoXCI8XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBodG1sLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIFZub2RlKHRhZywga2V5LCBhdHRycywgY2hpbGRyZW4sIHRleHQsIGRvbSkge1xuXHRyZXR1cm4ge3RhZzogdGFnLCBrZXk6IGtleSwgYXR0cnM6IGF0dHJzLCBjaGlsZHJlbjogY2hpbGRyZW4sIHRleHQ6IHRleHQsIGRvbTogZG9tLCBkb21TaXplOiB1bmRlZmluZWQsIHN0YXRlOiB1bmRlZmluZWQsIGV2ZW50czogdW5kZWZpbmVkLCBpbnN0YW5jZTogdW5kZWZpbmVkfVxufVxuVm5vZGUubm9ybWFsaXplID0gZnVuY3Rpb24obm9kZSkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShub2RlKSkgcmV0dXJuIFZub2RlKFwiW1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4obm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRpZiAobm9kZSA9PSBudWxsIHx8IHR5cGVvZiBub2RlID09PSBcImJvb2xlYW5cIikgcmV0dXJuIG51bGxcblx0aWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSByZXR1cm4gbm9kZVxuXHRyZXR1cm4gVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcobm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxuVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4gPSBmdW5jdGlvbihpbnB1dCkge1xuXHR2YXIgY2hpbGRyZW4gPSBbXVxuXHRpZiAoaW5wdXQubGVuZ3RoKSB7XG5cdFx0dmFyIGlzS2V5ZWQgPSBpbnB1dFswXSAhPSBudWxsICYmIGlucHV0WzBdLmtleSAhPSBudWxsXG5cdFx0Ly8gTm90ZTogdGhpcyBpcyBhICp2ZXJ5KiBwZXJmLXNlbnNpdGl2ZSBjaGVjay5cblx0XHQvLyBGdW4gZmFjdDogbWVyZ2luZyB0aGUgbG9vcCBsaWtlIHRoaXMgaXMgc29tZWhvdyBmYXN0ZXIgdGhhbiBzcGxpdHRpbmdcblx0XHQvLyBpdCwgbm90aWNlYWJseSBzby5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGlucHV0W2ldICE9IG51bGwgJiYgaW5wdXRbaV0ua2V5ICE9IG51bGwpICE9PSBpc0tleWVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJWbm9kZXMgbXVzdCBlaXRoZXIgYWx3YXlzIGhhdmUga2V5cyBvciBuZXZlciBoYXZlIGtleXMhXCIpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoaWxkcmVuW2ldID0gVm5vZGUubm9ybWFsaXplKGlucHV0W2ldKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWbm9kZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3Byb21pc2UvcHJvbWlzZVwiKVxudmFyIG1vdW50UmVkcmF3ID0gcmVxdWlyZShcIi4vbW91bnQtcmVkcmF3XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcmVxdWVzdC9yZXF1ZXN0XCIpKHdpbmRvdywgUHJvbWlzZVBvbHlmaWxsLCBtb3VudFJlZHJhdy5yZWRyYXcpXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9idWlsZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3csIFByb21pc2UsIG9uY29tcGxldGlvbikge1xuXHR2YXIgY2FsbGJhY2tDb3VudCA9IDBcblxuXHRmdW5jdGlvbiBQcm9taXNlUHJveHkoZXhlY3V0b3IpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG5cdH1cblxuXHQvLyBJbiBjYXNlIHRoZSBnbG9iYWwgUHJvbWlzZSBpcyBzb21lIHVzZXJsYW5kIGxpYnJhcnkncyB3aGVyZSB0aGV5IHJlbHkgb25cblx0Ly8gYGZvbyBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3JgLCBgdGhpcy5jb25zdHJ1Y3Rvci5yZXNvbHZlKHZhbHVlKWAsIG9yXG5cdC8vIHNpbWlsYXIuIExldCdzICpub3QqIGJyZWFrIHRoZW0uXG5cdFByb21pc2VQcm94eS5wcm90b3R5cGUgPSBQcm9taXNlLnByb3RvdHlwZVxuXHRQcm9taXNlUHJveHkuX19wcm90b19fID0gUHJvbWlzZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cblx0ZnVuY3Rpb24gbWFrZVJlcXVlc3QoZmFjdG9yeSkge1xuXHRcdHJldHVybiBmdW5jdGlvbih1cmwsIGFyZ3MpIHtcblx0XHRcdGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7IGFyZ3MgPSB1cmw7IHVybCA9IHVybC51cmwgfVxuXHRcdFx0ZWxzZSBpZiAoYXJncyA9PSBudWxsKSBhcmdzID0ge31cblx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdGZhY3RvcnkoYnVpbGRQYXRobmFtZSh1cmwsIGFyZ3MucGFyYW1zKSwgYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ3MudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhW2ldID0gbmV3IGFyZ3MudHlwZShkYXRhW2ldKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGRhdGEgPSBuZXcgYXJncy50eXBlKGRhdGEpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc29sdmUoZGF0YSlcblx0XHRcdFx0fSwgcmVqZWN0KVxuXHRcdFx0fSlcblx0XHRcdGlmIChhcmdzLmJhY2tncm91bmQgPT09IHRydWUpIHJldHVybiBwcm9taXNlXG5cdFx0XHR2YXIgY291bnQgPSAwXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRcdFx0aWYgKC0tY291bnQgPT09IDAgJiYgdHlwZW9mIG9uY29tcGxldGlvbiA9PT0gXCJmdW5jdGlvblwiKSBvbmNvbXBsZXRpb24oKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gd3JhcChwcm9taXNlKVxuXG5cdFx0XHRmdW5jdGlvbiB3cmFwKHByb21pc2UpIHtcblx0XHRcdFx0dmFyIHRoZW4gPSBwcm9taXNlLnRoZW5cblx0XHRcdFx0Ly8gU2V0IHRoZSBjb25zdHJ1Y3Rvciwgc28gZW5naW5lcyBrbm93IHRvIG5vdCBhd2FpdCBvciByZXNvbHZlXG5cdFx0XHRcdC8vIHRoaXMgYXMgYSBuYXRpdmUgcHJvbWlzZS4gQXQgdGhlIHRpbWUgb2Ygd3JpdGluZywgdGhpcyBpc1xuXHRcdFx0XHQvLyBvbmx5IG5lY2Vzc2FyeSBmb3IgVjgsIGJ1dCB0aGVpciBiZWhhdmlvciBpcyB0aGUgY29ycmVjdFxuXHRcdFx0XHQvLyBiZWhhdmlvciBwZXIgc3BlYy4gU2VlIHRoaXMgc3BlYyBpc3N1ZSBmb3IgbW9yZSBkZXRhaWxzOlxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL2lzc3Vlcy8xNTc3LiBBbHNvLCBzZWUgdGhlXG5cdFx0XHRcdC8vIGNvcnJlc3BvbmRpbmcgY29tbWVudCBpbiBgcmVxdWVzdC90ZXN0cy90ZXN0LXJlcXVlc3QuanNgIGZvclxuXHRcdFx0XHQvLyBhIGJpdCBtb3JlIGJhY2tncm91bmQgb24gdGhlIGlzc3VlIGF0IGhhbmQuXG5cdFx0XHRcdHByb21pc2UuY29uc3RydWN0b3IgPSBQcm9taXNlUHJveHlcblx0XHRcdFx0cHJvbWlzZS50aGVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHRcdHZhciBuZXh0ID0gdGhlbi5hcHBseShwcm9taXNlLCBhcmd1bWVudHMpXG5cdFx0XHRcdFx0bmV4dC50aGVuKGNvbXBsZXRlLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRjb21wbGV0ZSgpXG5cdFx0XHRcdFx0XHRpZiAoY291bnQgPT09IDApIHRocm93IGVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVybiB3cmFwKG5leHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYXNIZWFkZXIoYXJncywgbmFtZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiBhcmdzLmhlYWRlcnMpIHtcblx0XHRcdGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSAmJiBuYW1lLnRlc3Qoa2V5KSkgcmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHJlcXVlc3Q6IG1ha2VSZXF1ZXN0KGZ1bmN0aW9uKHVybCwgYXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgbWV0aG9kID0gYXJncy5tZXRob2QgIT0gbnVsbCA/IGFyZ3MubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiBcIkdFVFwiXG5cdFx0XHR2YXIgYm9keSA9IGFyZ3MuYm9keVxuXHRcdFx0dmFyIGFzc3VtZUpTT04gPSAoYXJncy5zZXJpYWxpemUgPT0gbnVsbCB8fCBhcmdzLnNlcmlhbGl6ZSA9PT0gSlNPTi5zZXJpYWxpemUpICYmICEoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEpXG5cdFx0XHR2YXIgcmVzcG9uc2VUeXBlID0gYXJncy5yZXNwb25zZVR5cGUgfHwgKHR5cGVvZiBhcmdzLmV4dHJhY3QgPT09IFwiZnVuY3Rpb25cIiA/IFwiXCIgOiBcImpzb25cIilcblxuXHRcdFx0dmFyIHhociA9IG5ldyAkd2luZG93LlhNTEh0dHBSZXF1ZXN0KCksIGFib3J0ZWQgPSBmYWxzZVxuXHRcdFx0dmFyIG9yaWdpbmFsID0geGhyLCByZXBsYWNlZEFib3J0XG5cdFx0XHR2YXIgYWJvcnQgPSB4aHIuYWJvcnRcblxuXHRcdFx0eGhyLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdGFib3J0LmNhbGwodGhpcylcblx0XHRcdH1cblxuXHRcdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwsIGFyZ3MuYXN5bmMgIT09IGZhbHNlLCB0eXBlb2YgYXJncy51c2VyID09PSBcInN0cmluZ1wiID8gYXJncy51c2VyIDogdW5kZWZpbmVkLCB0eXBlb2YgYXJncy5wYXNzd29yZCA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MucGFzc3dvcmQgOiB1bmRlZmluZWQpXG5cblx0XHRcdGlmIChhc3N1bWVKU09OICYmIGJvZHkgIT0gbnVsbCAmJiAhaGFzSGVhZGVyKGFyZ3MsIC9eY29udGVudC10eXBlJC9pKSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgYXJncy5kZXNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiICYmICFoYXNIZWFkZXIoYXJncywgL15hY2NlcHQkL2kpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy53aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSBhcmdzLndpdGhDcmVkZW50aWFsc1xuXHRcdFx0aWYgKGFyZ3MudGltZW91dCkgeGhyLnRpbWVvdXQgPSBhcmdzLnRpbWVvdXRcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykge1xuXHRcdFx0XHRpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLmhlYWRlcnMsIGtleSkpIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGFyZ3MuaGVhZGVyc1trZXldKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihldikge1xuXHRcdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvcnMgb24geGhyLmFib3J0KCkuXG5cdFx0XHRcdGlmIChhYm9ydGVkKSByZXR1cm5cblxuXHRcdFx0XHRpZiAoZXYudGFyZ2V0LnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIHN1Y2Nlc3MgPSAoZXYudGFyZ2V0LnN0YXR1cyA+PSAyMDAgJiYgZXYudGFyZ2V0LnN0YXR1cyA8IDMwMCkgfHwgZXYudGFyZ2V0LnN0YXR1cyA9PT0gMzA0IHx8ICgvXmZpbGU6XFwvXFwvL2kpLnRlc3QodXJsKVxuXHRcdFx0XHRcdFx0Ly8gV2hlbiB0aGUgcmVzcG9uc2UgdHlwZSBpc24ndCBcIlwiIG9yIFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0Ly8gYHhoci5yZXNwb25zZVRleHRgIGlzIHRoZSB3cm9uZyB0aGluZyB0byB1c2UuXG5cdFx0XHRcdFx0XHQvLyBCcm93c2VycyBkbyB0aGUgcmlnaHQgdGhpbmcgYW5kIHRocm93IGhlcmUsIGFuZCB3ZVxuXHRcdFx0XHRcdFx0Ly8gc2hvdWxkIGhvbm9yIHRoYXQgYW5kIGRvIHRoZSByaWdodCB0aGluZyBieVxuXHRcdFx0XHRcdFx0Ly8gcHJlZmVycmluZyBgeGhyLnJlc3BvbnNlYCB3aGVyZSBwb3NzaWJsZS9wcmFjdGljYWwuXG5cdFx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBldi50YXJnZXQucmVzcG9uc2UsIG1lc3NhZ2VcblxuXHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlVHlwZSA9PT0gXCJqc29uXCIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gRm9yIElFIGFuZCBFZGdlLCB3aGljaCBkb24ndCBpbXBsZW1lbnRcblx0XHRcdFx0XHRcdFx0Ly8gYHJlc3BvbnNlVHlwZTogXCJqc29uXCJgLlxuXHRcdFx0XHRcdFx0XHRpZiAoIWV2LnRhcmdldC5yZXNwb25zZVR5cGUgJiYgdHlwZW9mIGFyZ3MuZXh0cmFjdCAhPT0gXCJmdW5jdGlvblwiKSByZXNwb25zZSA9IEpTT04ucGFyc2UoZXYudGFyZ2V0LnJlc3BvbnNlVGV4dClcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgdXNlIHRoaXMgZGVmYXVsdCBpZiBpdCdzIHRleHQuIElmIGEgcGFyc2VkXG5cdFx0XHRcdFx0XHRcdC8vIGRvY3VtZW50IGlzIG5lZWRlZCBvbiBvbGQgSUUgYW5kIGZyaWVuZHMgKGFsbFxuXHRcdFx0XHRcdFx0XHQvLyB1bnN1cHBvcnRlZCksIHRoZSB1c2VyIHNob3VsZCB1c2UgYSBjdXN0b21cblx0XHRcdFx0XHRcdFx0Ly8gYGNvbmZpZ2AgaW5zdGVhZC4gVGhleSdyZSBhbHJlYWR5IHVzaW5nIHRoaXMgYXRcblx0XHRcdFx0XHRcdFx0Ly8gdGhlaXIgb3duIHJpc2suXG5cdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZSA9PSBudWxsKSByZXNwb25zZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHRcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBhcmdzLmV4dHJhY3QgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGFyZ3MuZXh0cmFjdChldi50YXJnZXQsIGFyZ3MpXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmdzLmRlc2VyaWFsaXplID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBhcmdzLmRlc2VyaWFsaXplKHJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHN1Y2Nlc3MpIHJlc29sdmUocmVzcG9uc2UpXG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHsgbWVzc2FnZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHQgfVxuXHRcdFx0XHRcdFx0XHRjYXRjaCAoZSkgeyBtZXNzYWdlID0gcmVzcG9uc2UgfVxuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSlcblx0XHRcdFx0XHRcdFx0ZXJyb3IuY29kZSA9IGV2LnRhcmdldC5zdGF0dXNcblx0XHRcdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmNvbmZpZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHhociA9IGFyZ3MuY29uZmlnKHhociwgYXJncywgdXJsKSB8fCB4aHJcblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgdGhlIGBhYm9ydGAgdG8gYW55IHJlcGxhY2VtZW50IFhIUiBhcyB3ZWxsLlxuXHRcdFx0XHRpZiAoeGhyICE9PSBvcmlnaW5hbCkge1xuXHRcdFx0XHRcdHJlcGxhY2VkQWJvcnQgPSB4aHIuYWJvcnRcblx0XHRcdFx0XHR4aHIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdFx0XHRyZXBsYWNlZEFib3J0LmNhbGwodGhpcylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGJvZHkgPT0gbnVsbCkgeGhyLnNlbmQoKVxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3Muc2VyaWFsaXplID09PSBcImZ1bmN0aW9uXCIpIHhoci5zZW5kKGFyZ3Muc2VyaWFsaXplKGJvZHkpKVxuXHRcdFx0ZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEpIHhoci5zZW5kKGJvZHkpXG5cdFx0XHRlbHNlIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXHRcdH0pLFxuXHRcdGpzb25wOiBtYWtlUmVxdWVzdChmdW5jdGlvbih1cmwsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrTmFtZSA9IGFyZ3MuY2FsbGJhY2tOYW1lIHx8IFwiX21pdGhyaWxfXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE2KSArIFwiX1wiICsgY2FsbGJhY2tDb3VudCsrXG5cdFx0XHR2YXIgc2NyaXB0ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG5cdFx0XHQkd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGRhdGEpXG5cdFx0XHR9XG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIkpTT05QIHJlcXVlc3QgZmFpbGVkXCIpKVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0LnNyYyA9IHVybCArICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoYXJncy5jYWxsYmFja0tleSB8fCBcImNhbGxiYWNrXCIpICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tOYW1lKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pLFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgbW91bnRSZWRyYXcgPSByZXF1aXJlKFwiLi9tb3VudC1yZWRyYXdcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hcGkvcm91dGVyXCIpKHdpbmRvdywgbW91bnRSZWRyYXcpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vbW9kZWxzL2F1dGguanNcIjtcblxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcIi4vdmlld3MvbGF5b3V0LmpzXCI7XG5cbmltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi92aWV3cy9saXN0LmpzXCI7XG5pbXBvcnQgeyBlZGl0Rm9ybSB9IGZyb20gXCIuL3ZpZXdzL2Zvcm0uanNcIjtcbmltcG9ydCB7IG5ld0Zvcm0gfSBmcm9tIFwiLi92aWV3cy9uZXcuanNcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4vdmlld3MvbG9naW4uanNcIjtcblxuXG5tLnJvdXRlKGRvY3VtZW50LmJvZHksIFwiL1wiLCB7XG4gICAgXCIvXCI6IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtKGxheW91dCwge1xuICAgICAgICAgICAgICAgIGJvdHRvbU5hdjogXCIjIS9cIlxuICAgICAgICAgICAgfSwgbShsaXN0KSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiL2Zvcm0vOmlkXCI6IHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbih2bm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICAgICAgdG9wTmF2OiB7IHJvdXRlOiBcIiMhL1wiLCB0aXRsZTogXCJIZW1cIn0sXG4gICAgICAgICAgICAgICAgYm90dG9tTmF2OiBcIiMhL1wiXG4gICAgICAgICAgICB9LCBtKGVkaXRGb3JtLCB2bm9kZS5hdHRycykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcIi9uZXdcIjoge1xuICAgICAgICBvbm1hdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhdXRoLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0Zvcm07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtLnJvdXRlLnNldChcIi9sb2dpblwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbih2bm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICAgICAgdG9wTmF2OiB7IHJvdXRlOiBcIiMhL1wiLCB0aXRsZTogXCJIZW1cIn0sXG4gICAgICAgICAgICAgICAgYm90dG9tTmF2OiBcIiMhL25ld1wiXG4gICAgICAgICAgICB9LCB2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIFRpbGwgbS1mdW5rdGlvbmVuIGthbiB2aSBza2lja2EgMiBlbGxlciAzIGFyZ3VtZW50LlxuICAgIC8vIDItYXJndW1lbnQ6IG0oXCJwXCIsIFwiSGVsbG9cIikgZsO2cnN0YSBhcmd1bWVudGV0IMOkciBudXZhcmFuZGVcbiAgICAvLyBlbGVtZW50LCBhbmRyYSBhcmd1bWVudGV0IMOkciBiYXJuLiBCbGlyIHRpbGwgZsO2bGphbmRlIEhUTUwgaVxuICAgIC8vIERPTS10csOkZGV0OiA8cD5IZWxsbzwvcD5cbiAgICAvLyAzLWFyZ3VtZW50OiBtKFwicFwiLCB7IGNsYXNzOiBcImJsdWVcIiB9LCBcIkhlbGxvXCIpIGTDpHIgYW5kcmFcbiAgICAvLyBhcmd1bWVudGV0IMOkciBvcHRpb25zIHRpbGwgZXhlbXBlbCBlbiBrbGFzcyBlbGxlciBhbmRyYSB2w6RyZGVuXG4gICAgLy8gdmkgdmlsbCBza2lja2EgbWVkLlxuXG4gICAgLy8gSSBuZWRhbnN0w6VlbmRlIGV4ZW1wZWwgc2tpY2thciBtZWQgdHbDpSB2w6RyZGVuIHRvcE5hdiBvY2hcbiAgICAvLyBib3R0b21OYXYuIFZpIG7DpXIgZGUgaSBsYXlvdXQgdW5kZXIgdm5vZGUuYXR0cnNcbiAgICBcIi9sb2dpblwiOiB7XG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbShsYXlvdXQsIHtcbiAgICAgICAgICAgICAgICB0b3BOYXY6IHsgcm91dGU6IFwiIyEvXCIsIHRpdGxlOiBcIkhlbVwifSxcbiAgICAgICAgICAgICAgICBib3R0b21OYXY6IFwiIyEvbG9naW5cIlxuICAgICAgICAgICAgfSwgbShsb2dpbikpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9