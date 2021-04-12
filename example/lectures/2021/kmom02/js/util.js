var util = {
    fetchData: function fetchData(callbackFunction) {
        const url = "https://lager.emilfolino.se/v2/products";
        const key = "6c5c540eda98783426450c3b8d63bdc4";

        fetch(url + "?api_key=" + key)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                return callbackFunction(result.data);
            });
    },

    addElement: function addElement(tag, text) {
        const root = document.getElementById("root");
        let element = document.createElement(tag);

        element.textContent = text;

        root.appendChild(element);

        return element;
    }
};

export { util };
