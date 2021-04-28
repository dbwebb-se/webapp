import m from "mithril";

const deliveries = {
    current: {},
    save: function save() {
        deliveries.current["api_key"] = "API_KEY";

        return m.request({
            url: "URL/deliveries",
            method: "POST",
            body: deliveries.current,
        }).then(function() {
            return m.request({
                url: `URL/products/${deliveries.current.product_id}`,
                method: "GET",
            }).then(function(result) {
                let product = result.data;

                product["api_key"] = "API_KEY";
                product["stock"] = product["stock"] + deliveries.current.amount;

                return m.request({
                    url: "URL/products",
                    method: "PUT",
                    body: product,
                }).then(function() {
                    console.log("updated");
                });
            });
        }).catch(function() {

        });
    }
};
