var m = require("mithril");

var bakery = {
    apiKey: "6c5c540eda98783426450c3b8d63bdc4",
    url: "https://lager.emilfolino.se/v2/products",
    orderURL: "https://lager.emilfolino.se/v2/orders",
    cakeTypes: ["Tårta", "Bröd", "Småkaka"],
    currentCakes: [],
    currentOrders: [],
    loadAll: function() {
        // setTimeout används enbart för att försinka hämtningen
        // för att visa upp ternary-operator funktionaliteten
        setTimeout(function() {
            return m.request({
                method: "GET",
                url: bakery.url + "?api_key=" + bakery.apiKey
            }).then(function(result) {
                bakery.currentCakes = result.data;
            });
        }, 3000);
    },
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: bakery.url + "/" + id + "?api_key=" + bakery.apiKey
        }).then(function(result) {
            bakery.current = result.data;
        });
    },
    save: function(product={}) {
        // Check if not empty object
        if (!(product &&
            Object.keys(product).length === 0 &&
            product.constructor === Object
        )) {
            bakery.current = product;
        }

        bakery.current.api_key = bakery.apiKey;

        return m.request({
            method: "PUT",
            url: bakery.url,
            body: bakery.current
        }).then(function() {
            bakery.resetCake();

            return m.route.set("/");
        });
    },
    addCake: function() {
        bakery.current.api_key = bakery.apiKey;

        return m.request({
            method: "POST",
            url: bakery.url,
            body: bakery.current
        }).then(function() {
            bakery.resetCake();

            return m.route.set("/");
        });
    },
    resetCake: function() {
        bakery.current = {};
    },
    loadOrders: function() {
        return m.request({
            method: "GET",
            url: bakery.orderURL + "?api_key=" + bakery.apiKey
        }).then(function(result) {
            bakery.currentOrders = result.data;
        });
    },
    buy: function(order) {
        let changedOrder = {
            id: order.id,
            status_id: 200,
            api_key: bakery.apiKey,
        };

        return m.request({
            method: "PUT",
            url: bakery.orderURL,
            body: changedOrder,
        }).then(function() {
            order.order_items.forEach(function(oi) {
                let newProduct = {
                    id: oi.product_id,
                    stock: oi.stock - oi.amount
                };

                bakery.save(newProduct);
            });
        });
    }
};

export { bakery };
