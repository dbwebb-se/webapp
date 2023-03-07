export default class SingleProduct extends HTMLElement {
    // component attributes
    static get observedAttributes() {
        return ['product'];
    }

    get product() {
        return JSON.parse(this.getAttribute("product"));
    }

    // connect component
    connectedCallback() {
        this.innerHTML = `<p>${this.product.name}</p>`;
    }
}
