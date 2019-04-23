import m from "mithril";

import products from "../models/products.js";

const product = {
    oninit: function (vnode) {
        products.load(vnode.attrs.id);
    },
    view: function () {
        return [
            m("h2", products.current.name)
        ];
    }
};

export { product };
