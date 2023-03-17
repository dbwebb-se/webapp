export default class LagerTitle extends HTMLElement {
    constructor() {
        super();

        this.name = "Andreas";
    }

    // component attributes
    static get observedAttributes() {
        return ['name'];
    }

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }

        this[property] = newValue;
    }

    // connect component
    connectedCallback() {
        this.innerHTML = `<h1>${this.name}'s Lager-app</h1>`;
    }
}
