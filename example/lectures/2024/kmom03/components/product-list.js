export default class ProductList extends HTMLElement {
    constructor() {
        super();
    }

    // connect component
    async connectedCallback() {
        const template = document.getElementById("product-list-template").content;

        const shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.append(template.cloneNode(true));

        const response = await fetch("https://lager.emilfolino.se/v2/products?api_key=a1963bba7c5ad2d272f18a45b819cb55");
        const result = await response.json();

        for(let i = 0; i < result.data.length; i++) {
            const product = result.data[i];

            let element = document.createElement("single-product");

            let nameSpan = document.createElement("span");

            nameSpan.setAttribute("slot", "product-name");
            nameSpan.textContent = product.name;

            let descriptionSpan = document.createElement("span");

            descriptionSpan.setAttribute("slot", "product-description");
            descriptionSpan.textContent = product.description;

            element.append(descriptionSpan);
            element.append(nameSpan);

            shadowRoot.append(element);
        }
    }
}
