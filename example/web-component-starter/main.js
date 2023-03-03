import LagerTitle from "./components/lager-title.js";
import ProductList from "./components/product-list.js";
import SingleProduct from "./components/single-product.js";

(function IIFE() {
    "use strict";

    customElements.define('lager-title', LagerTitle);
    customElements.define('product-list', ProductList);
    customElements.define('single-product', SingleProduct);
})();
