/* global util */

(function iife() {
    function calculatePrice(products) {
        console.log(products);
    }

    util.addElement("h1", "map");
    util.fetchData(calculatePrice);
})();
