import Router from "./router.js";

import ListComponent from "./list-component.js";
import DetailComponent from "./detail-component.js";

customElements.define("router-outlet", Router);

customElements.define("list-component", ListComponent);
customElements.define("detail-component", DetailComponent);
