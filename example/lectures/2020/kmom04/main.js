(function () {
    const apiKey = "a1963bba7c5ad2d272f18a45b819cb55";
    const root = document.getElementById("root");

    fetch(`https://lager.emilfolino.se/v2/products?api_key=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            result.data.forEach(function(product) {
                let element = document.createElement("p");

                element.textContent = product.name;

                root.appendChild(element);
            });
        });
})();
