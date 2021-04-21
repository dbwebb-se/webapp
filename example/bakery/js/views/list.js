"use strict";

import m from 'mithril';
import { bakery } from '../models/bakery.js';

const noCakes = {
    view: function() {
        return m("p", "Finns inga kakor!");
    }
};

const cakeList = {
    view: function() {
        return bakery.currentCakes.map(function(cake) {
            return m(cakeComponent, cake);
        });
    }
};

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
            // Ternery-operator:
            // [villkor ? retur-värde om sant : retur-värde om falskt]
            // Här utnyttjar vi inline-if-satsen ternery-operator
            // om det finns något i currentCakes laddar vi listan
            // Annars en text om att det inte finns kakor.
            // 3 sekunders timeout i modellen gör att först syns texten
            // Sen syns listan. Se komponenterna ovan.
            // Är ett bra sätt att få många små komponenter som har
            // ett ansvarsområde.
            // Också kallat SRP - single responsibility principle.
            // Även ett sätt att skapa en loading-snurra.
            m("div.cake-container", bakery.currentCakes.length ?
                m(cakeList) :
                m(noCakes))
        ]);
    }
};

export { list };
