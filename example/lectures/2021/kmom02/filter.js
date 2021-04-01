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

    function filterWithFilter(products) {
        // ** AFTER **
    }

    util.addElement("h1", "filter");
    util.fetchData(filterWithLoop);
})();
