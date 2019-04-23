import m from "mithril";

const products = {
    currentProducts: [],
    baseURL: "https://lager.emilfolino.se/v2",
    apiKey: "bb1763f6a9be907fab549312a06946e1",

    searchProducts: function(query) {
        return m.request({
            method: "GET",
            url: `${products.baseURL}/products/search/${query}?api_key=${products.apiKey}`
        }).then(function(result) {
            products.currentProducts = result.data;
        });
    },

    current: {},

    load: function (id) {
        return m.request({
            method: "GET",
            url: `${products.baseURL}/products/${id}?api_key=${products.apiKey}`
        }).then(function(result) {
            products.current = result.data;
        });
    }
};

export default products;
