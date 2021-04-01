(function iife() {
    function outputElements(products) {
        products.forEach(function(product, i) {
            util.addElement("p", product.name + " - " + product.price);
        });
    }

    util.addElement("h1", "map");
    util.fetchData(outputElements);
})();
