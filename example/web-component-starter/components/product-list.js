import { apiKey, baseURL } from "../utils.js";

export default class ProductList extends HTMLElement {
    constructor() {
        super();

        this.products = [];
    }

    // connect component
    async connectedCallback() {
        const response = await fetch(`${baseURL}/products?api_key=${apiKey}`);
        const result = await response.json();

        this.products = result.data;

        this.render();
    }

    render() {
        const list = this.products.map((product) => {
            return `<single-product product='${JSON.stringify(product)}'>
                        </single-product>`;
        }).join("");

        this.innerHTML = `<h2>Produktlista</h2>${list}`;
    }
}
