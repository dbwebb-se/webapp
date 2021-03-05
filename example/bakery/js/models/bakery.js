var m = require("mithril");

var bakery = {
    apiKey: "6c5c540eda98783426450c3b8d63bdc4",
    url: "https://lager.emilfolino.se/v2/products",
    cakeTypes: ["Tårta", "Bröd", "Småkaka"],
    currentCakes: [],
    loadAll: function() {
        return m.request({
            method: "GET",
            url: bakery.url + "?api_key=" + bakery.apiKey
        }).then(function(result) {
            bakery.currentCakes = result.data;
        });
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
    save: function() {
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
    }
};

export { bakery };
