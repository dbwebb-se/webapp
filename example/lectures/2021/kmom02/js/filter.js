import { util } from "./util.js";

(function iife() {
    function filterWithLoop(products) {
        // ** BEFORE **
        let cakes = [];

        for (let i = 0; i < products.length; i++) {
            if (products[i].specifiers === "Tårta") {
                cakes.push(products[i]);

                util.addElement("p", products[i].name);
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

    util.addElement("h1", "filter");
    util.fetchData(filterWithLoop);
    util.fetchData(filterWithFilter);
})();
