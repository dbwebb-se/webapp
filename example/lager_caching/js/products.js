var products = {
    allProducts: [],

    getAllProducts: function(callback) {
        if (products.allProducts.length > 0) {
            return callback();
        }

        fetch("http://localhost:8111/v2/products?api_key=fdc42b2d941e8c6f7b38d974df3758ce")
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            products.allProducts = result.data;

            return callback();
        });
    },

    getProduct: function(productId) {
        return products.allProducts.filter(function(product) {
            return product.id == productId;
        })[0];
    }
};

export { products };
