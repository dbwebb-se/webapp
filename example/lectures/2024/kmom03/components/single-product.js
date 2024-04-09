export default class SingleProduct extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = `
            <h3><slot name="product-name">Default product title</slot></h3>
            <p>Produkt beskrivning: <slot name="product-description">Default description</slot></h3>
        `;

    }
}
