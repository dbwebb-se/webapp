/* global util */

(function iife() {
    function outputElements(products) {
        products.forEach(function(product) {
            util.addElement("p", product.name + " - " + product.price);
        });
    }

    util.addElement("h1", "map");
    util.fetchData(outputElements);
})();
