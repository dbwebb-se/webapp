import { products } from "./products.js";
import { productList } from "./product_list.js";

import utils from "./utils.js";

let productDetails = {
    showProduct: function (productId) {
        let root = document.getElementById("root");
        let product = products.getProduct(productId);

        utils.removeNodes("root");

        root.appendChild(utils.createElement({
            type: "a",
            textContent: "<- Tillbaka",
            href: "#",
            onclick: productList.show
        }));

        root.appendChild(utils.createElement({
            type: "h2",
            textContent: product.name
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: product.description
        }));
    }
};

export { productDetails };
