import m from "mithril";

import { search } from "./views/search.js";
import { product } from "./views/product.js";
import { layout } from "./views/layout.js";

m.route(document.body, "/", {
    "/": {
        render: function () {
            return m(layout, m(search));
        }
    },
    "/product/:id": {
        render: function (vnode) {
            return m(layout, m(product, vnode.attrs));
        }
    },
});
