"use strict";

import m from 'mithril';
import { bakery } from '../models/bakery.js';

const cakeComponent = {
    view: function(vnode) {
        let current = vnode.attrs;

        return m("div.card", [
            m("p.card-title", current.name),
            m("p.card-info", "Pris: " + current.price + " Lagersaldo: " + current.stock),
            m("p.card-info", "Lagerplats: " + current.location),
            m("a.card-info", { href: "#!/form/" + current.id }, "Ändra")
        ]);
    }
};

let list = {
    oninit: bakery.loadAll,
    view: function() {
        return m("div.container", [
            m("h1", "Kakor"),
            m(
                "a.button.blue-button.full-width-button",
                { href: "#!/new" },
                "Ny kaka"
            ),
            m("div.cake-container", bakery.currentCakes.map(function(cake) {
                return m(cakeComponent, cake);
            }))
        ]);
    }
};

export { list };
