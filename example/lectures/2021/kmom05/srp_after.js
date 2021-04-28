import m from "mithril";

const product = {
    getProduct: function getProduct(
        productId,
        amount,
        callback,
    ) {
        return m.request({
            url: `URL/products/${productId}`,
            method: "GET",
        }).then(function(result) {
            if (callback) {
                let product = result.data;

                product["api_key"] = "API_KEY";
                product["stock"] = product["stock"] + amount;

                callback(product);
            }
        });
    },
    updateProduct: function updateProduct(product) {
        return m.request({
            url: "URL/products",
            method: "PUT",
            body: product,
        }).then(function() {
            console.log("updated");
        });
    }
};


const deliveries = {
    current: {},
    save: function save() {
        deliveries.current["api_key"] = "API_KEY";

        return m.request({
            url: "URL/deliveries",
            method: "POST",
            body: deliveries.current,
        }).then(function() {
            product.getProduct(
                deliveries.current.product_id,
                deliveries.current.amount,
                product.updateProduct,
            );
        }).catch(function() {

        });
    }
};
