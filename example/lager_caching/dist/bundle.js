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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_list.js */ \"./js/product_list.js\");\n\n\n(function() {\n    _product_list_js__WEBPACK_IMPORTED_MODULE_0__[\"productList\"].show();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdExpc3QgfSBmcm9tIFwiLi9wcm9kdWN0X2xpc3QuanNcIjtcblxuKGZ1bmN0aW9uKCkge1xuICAgIHByb2R1Y3RMaXN0LnNob3coKTtcbn0pKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/product_details.js":
/*!*******************************!*\
  !*** ./js/product_details.js ***!
  \*******************************/
/*! exports provided: productDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productDetails\", function() { return productDetails; });\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.js */ \"./js/products.js\");\n/* harmony import */ var _product_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_list.js */ \"./js/product_list.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n\n\n\n\n\nlet productDetails = {\n    showProduct: function (productId) {\n        let product = _products_js__WEBPACK_IMPORTED_MODULE_0__[\"products\"].getProduct(productId);\n\n        _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeNodes(\"root\");\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"a\",\n            textContent: \"<- Tillbaka\",\n            href: \"#\",\n            onclick: _product_list_js__WEBPACK_IMPORTED_MODULE_1__[\"productList\"].show\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"h2\",\n            textContent: product.name\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: product.description\n        }));\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0X2RldGFpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9kdWN0X2RldGFpbHMuanM/ZDZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RzLmpzXCI7XG5pbXBvcnQgeyBwcm9kdWN0TGlzdCB9IGZyb20gXCIuL3Byb2R1Y3RfbGlzdC5qc1wiO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHMuanNcIjtcblxubGV0IHByb2R1Y3REZXRhaWxzID0ge1xuICAgIHNob3dQcm9kdWN0OiBmdW5jdGlvbiAocHJvZHVjdElkKSB7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdHMuZ2V0UHJvZHVjdChwcm9kdWN0SWQpO1xuXG4gICAgICAgIHV0aWxzLnJlbW92ZU5vZGVzKFwicm9vdFwiKTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJhXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCI8LSBUaWxsYmFrYVwiLFxuICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICBvbmNsaWNrOiBwcm9kdWN0TGlzdC5zaG93XG4gICAgICAgIH0pKTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJoMlwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHByb2R1Y3QubmFtZVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHByb2R1Y3QuZGVzY3JpcHRpb25cbiAgICAgICAgfSkpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IHByb2R1Y3REZXRhaWxzIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/product_details.js\n");

/***/ }),

/***/ "./js/product_list.js":
/*!****************************!*\
  !*** ./js/product_list.js ***!
  \****************************/
/*! exports provided: productList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productList\", function() { return productList; });\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.js */ \"./js/products.js\");\n/* harmony import */ var _product_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_details.js */ \"./js/product_details.js\");\n\n\n\nlet productList = {\n    show: function() {\n        _products_js__WEBPACK_IMPORTED_MODULE_0__[\"products\"].getAllProducts(productList.renderProducts);\n    },\n\n    renderProducts: function() {\n        root.innerHTML = \"<h2>Produkter</h2>\";\n\n        _products_js__WEBPACK_IMPORTED_MODULE_0__[\"products\"].allProducts.map(function (product) {\n            let productElement = document.createElement(\"p\");\n\n            productElement.textContent = product.name;\n\n            productElement.addEventListener(\"click\", function() {\n                _product_details_js__WEBPACK_IMPORTED_MODULE_1__[\"productDetails\"].showProduct(product.id);\n            });\n\n            root.appendChild(productElement);\n        });\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0X2xpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9kdWN0X2xpc3QuanM/YWU4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RzLmpzXCI7XG5pbXBvcnQgeyBwcm9kdWN0RGV0YWlscyB9IGZyb20gXCIuL3Byb2R1Y3RfZGV0YWlscy5qc1wiO1xuXG5sZXQgcHJvZHVjdExpc3QgPSB7XG4gICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2R1Y3RzLmdldEFsbFByb2R1Y3RzKHByb2R1Y3RMaXN0LnJlbmRlclByb2R1Y3RzKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyUHJvZHVjdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByb290LmlubmVySFRNTCA9IFwiPGgyPlByb2R1a3RlcjwvaDI+XCI7XG5cbiAgICAgICAgcHJvZHVjdHMuYWxsUHJvZHVjdHMubWFwKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICAgICAgcHJvZHVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9kdWN0Lm5hbWU7XG5cbiAgICAgICAgICAgIHByb2R1Y3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5zaG93UHJvZHVjdChwcm9kdWN0LmlkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb290LmFwcGVuZENoaWxkKHByb2R1Y3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgcHJvZHVjdExpc3QgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/product_list.js\n");

/***/ }),

/***/ "./js/products.js":
/*!************************!*\
  !*** ./js/products.js ***!
  \************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\nvar products = {\n    allProducts: [],\n\n    getAllProducts: function(callback) {\n        if (products.allProducts.length > 0) {\n            return callback();\n        }\n\n        fetch(\"https://lager.emilfolino.se/v2/products?api_key=[API_KEY]\")\n            .then(function(response) {\n                return response.json();\n            })\n            .then(function(result) {\n                products.allProducts = result.data;\n\n                return callback();\n            });\n    },\n\n    getProduct: function(productId) {\n        return products.allProducts.filter(function(product) {\n            return product.id == productId;\n        })[0];\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3Byb2R1Y3RzLmpzPzkxMWEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHByb2R1Y3RzID0ge1xuICAgIGFsbFByb2R1Y3RzOiBbXSxcblxuICAgIGdldEFsbFByb2R1Y3RzOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBpZiAocHJvZHVjdHMuYWxsUHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaChcImh0dHBzOi8vbGFnZXIuZW1pbGZvbGluby5zZS92Mi9wcm9kdWN0cz9hcGlfa2V5PVtBUElfS0VZXVwiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmFsbFByb2R1Y3RzID0gcmVzdWx0LmRhdGE7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRQcm9kdWN0OiBmdW5jdGlvbihwcm9kdWN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLmFsbFByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbihwcm9kdWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5pZCA9PSBwcm9kdWN0SWQ7XG4gICAgICAgIH0pWzBdO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IHByb2R1Y3RzIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/products.js\n");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst utils = {\n    createElement: function(options) {\n        let element = document.createElement(options.type || \"div\");\n\n        for (let property in options) {\n            if (options.hasOwnProperty(property)) {\n                element[property] = options[property];\n            }\n        }\n\n        return element;\n    },\n\n    removeNodes: function(id) {\n        let element = document.getElementById(id);\n\n        if (element) {\n            while (element.firstChild) {\n                element.removeChild(element.firstChild);\n            }\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3V0aWxzLmpzPzY4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXRpbHMgPSB7XG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy50eXBlIHx8IFwiZGl2XCIpO1xuXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9LFxuXG4gICAgcmVtb3ZlTm9kZXM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/utils.js\n");

/***/ })

/******/ });