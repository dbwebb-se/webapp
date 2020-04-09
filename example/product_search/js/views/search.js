import m from "mithril";

import products from "../models/products.js";

const productLinks = {
    view: function () {
        return m("div", products.currentProducts.map(function(product) {
            return m("p", [
                m(
                    "a",
                    {
                        href: "#!/product/" + product.id
                    },
                    product.name
                )
            ]);
        }));
    }
};

const search = {
    view: function () {
        return [
            m("h2", "Sök på produkter:"),
            m("form", {
                onsubmit: function (e) {
                    e.preventDefault();
                }
            }, [
                m("label.input-label", "Sök"),
                m("input.input[type=text][placeholder=Produktnamn]", {
                    oninput: function (e) {
                        products.searchProducts(e.target.value);
                    }
                })
            ]),
            products.currentProducts.length > 0 ?
                m(productLinks) :
                m("p", "Inga produktmatchningar.")
        ];
    }
};

export { search };
