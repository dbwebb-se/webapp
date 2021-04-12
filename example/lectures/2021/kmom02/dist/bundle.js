/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "util": () => (/* binding */ util)
/* harmony export */ });
var util = {
    fetchData: function fetchData(callbackFunction) {
        const url = "https://lager.emilfolino.se/v2/products";
        const key = "6c5c540eda98783426450c3b8d63bdc4";

        fetch(url + "?api_key=" + key)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                return callbackFunction(result.data);
            });
    },

    addElement: function addElement(tag, text) {
        const root = document.getElementById("root");
        let element = document.createElement(tag);

        element.textContent = text;

        root.appendChild(element);

        return element;
    }
};




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
/*!**********************!*\
  !*** ./js/filter.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./js/util.js");
    

(function iife() {
    function filterWithLoop(products) {
        // ** BEFORE **
        let cakes = [];

        for (let i = 0; i < products.length; i++) {
            if (products[i].specifiers === "Tårta") {
                cakes.push(products[i]);

                _util_js__WEBPACK_IMPORTED_MODULE_0__.util.addElement("p", products[i].name);
            }
        }

        console.log(cakes);
    }

    function isCake(product) {
        return product.specifiers === "Tårta";
    }

    function filterWithFilter(products) {
        // ** AFTER **
        let cakes = products.filter(isCake).map(cake => cake.price);

        console.log(cakes);
    }

    _util_js__WEBPACK_IMPORTED_MODULE_0__.util.addElement("h1", "filter");
    _util_js__WEBPACK_IMPORTED_MODULE_0__.util.fetchData(filterWithLoop);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.util.fetchData(filterWithFilter);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbW9tMDIvLi9qcy91dGlsLmpzIiwid2VicGFjazovL2ttb20wMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbW9tMDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ttb20wMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ttb20wMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ttb20wMi8uL2pzL2ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7VUMxQmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7O0FBRUEsZ0JBQWdCLHFEQUFlO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxxREFBZTtBQUNuQixJQUFJLG9EQUFjO0FBQ2xCLElBQUksb0RBQWM7QUFDbEIsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbCA9IHtcbiAgICBmZXRjaERhdGE6IGZ1bmN0aW9uIGZldGNoRGF0YShjYWxsYmFja0Z1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL3Byb2R1Y3RzXCI7XG4gICAgICAgIGNvbnN0IGtleSA9IFwiNmM1YzU0MGVkYTk4NzgzNDI2NDUwYzNiOGQ2M2JkYzRcIjtcblxuICAgICAgICBmZXRjaCh1cmwgKyBcIj9hcGlfa2V5PVwiICsga2V5KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0Z1bmN0aW9uKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhZGRFbGVtZW50OiBmdW5jdGlvbiBhZGRFbGVtZW50KHRhZywgdGV4dCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IHV0aWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdXRpbCB9IGZyb20gXCIuL3V0aWwuanNcIjsgICAgXG5cbihmdW5jdGlvbiBpaWZlKCkge1xuICAgIGZ1bmN0aW9uIGZpbHRlcldpdGhMb29wKHByb2R1Y3RzKSB7XG4gICAgICAgIC8vICoqIEJFRk9SRSAqKlxuICAgICAgICBsZXQgY2FrZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdHNbaV0uc3BlY2lmaWVycyA9PT0gXCJUw6VydGFcIikge1xuICAgICAgICAgICAgICAgIGNha2VzLnB1c2gocHJvZHVjdHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgdXRpbC5hZGRFbGVtZW50KFwicFwiLCBwcm9kdWN0c1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGNha2VzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0Nha2UocHJvZHVjdCkge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5zcGVjaWZpZXJzID09PSBcIlTDpXJ0YVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlcldpdGhGaWx0ZXIocHJvZHVjdHMpIHtcbiAgICAgICAgLy8gKiogQUZURVIgKipcbiAgICAgICAgbGV0IGNha2VzID0gcHJvZHVjdHMuZmlsdGVyKGlzQ2FrZSkubWFwKGNha2UgPT4gY2FrZS5wcmljZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coY2FrZXMpO1xuICAgIH1cblxuICAgIHV0aWwuYWRkRWxlbWVudChcImgxXCIsIFwiZmlsdGVyXCIpO1xuICAgIHV0aWwuZmV0Y2hEYXRhKGZpbHRlcldpdGhMb29wKTtcbiAgICB1dGlsLmZldGNoRGF0YShmaWx0ZXJXaXRoRmlsdGVyKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9