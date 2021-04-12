/* global util */

(function iife() {
    function outputElements(products) {
        let cakes = products.map(function(product) {
            return util.addElement("p", product.name + " - " + product.price);
        });

        console.log(cakes);
    }

    util.addElement("h1", "map");
    util.fetchData(outputElements);
})();
