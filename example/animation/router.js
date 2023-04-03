export default class Router extends HTMLElement {
    constructor() {
        super();

        this.currentRoute = "";

        this.allRoutes = {
            "": {
                view: "<list-component></list-component>",
                name: "Lista",
            },
            "detail": {
                view: "<detail-component class='slide-in'></detail-component>",
                name: "Detalj",
            },
        };
    }

    get routes() {
        return this.allRoutes;
    }

    // connect component
    connectedCallback() {
        window.addEventListener('hashchange', () => {
            this.resolveRoute();
        });

        this.resolveRoute();
    }

    resolveRoute() {
        this.currentRoute = location.hash.replace("#", "");

        this.render();
    }

    render() {
        this.innerHTML = "<not-found></not-found>";

        if (this.routes[this.currentRoute]) {
            this.innerHTML = this.routes[this.currentRoute].view;
        }
    }
}
