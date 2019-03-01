import { products } from "./products.js";
import { productDetails } from "./product_details.js";

let productList = {
    show: function() {
        products.getAllProducts(productList.renderProducts);
    },

    renderProducts: function() {
        let root = document.getElementById("root");

        root.innerHTML = "<h2>Produkter</h2>";

        products.allProducts.map(function (product) {
            let productElement = document.createElement("p");

            productElement.textContent = product.name;

            productElement.addEventListener("click", function() {
                productDetails.showProduct(product.id);
            });

            root.appendChild(productElement);
        });
    }
};

export { productList };
