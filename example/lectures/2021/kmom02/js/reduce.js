/* global util */

(function iife() {
    function calculatePrice(products) {
        let totalPrice = products.reduce(function(sum, product) {
            return sum + product.stock * product.price;
        }, 0);

        util.addElement("p", "Totalpriset: " + totalPrice);
    }

    util.addElement("h1", "map");
    util.fetchData(calculatePrice);
})();
