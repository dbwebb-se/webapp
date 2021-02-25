var m = require("mithril");

var computer = {
    api_key: "6c5c540eda98783426450c3b8d63bdc4",
    url: "https://lager.emilfolino.se/v2/products",
    operatingSystems: [
        { id: 1, name: "Windows 10" },
        { id: 2, name: "Windows 7" },
        { id: 3, name: "MacOS" },
        { id: 4, name: "Debian" },
        { id: 4, name: "Ubuntu" }
    ],
    currentComputers: [],
    loadAll: function() {
        return m.request({
            method: "GET",
            url: computers.url
        }).then(function(result) {
            computer.current = result;
        });
    },
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "www.api-url.com/load/" + id
        }).then(function(result) {
            computer.current = result;
        });
    },
    save: function() {
        return m.request({
            method: "PUT",
            url: "www.api-url.com/save",
            body: computer.current
        }).then(function() {
            m.route.set("/computers");
        });
    }
};

export { computer };
