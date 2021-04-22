"use strict";

import m from "mithril";
import { auth } from "../models/auth.js";

var layout = {
    links: [
        { name: "Hem", route: "#!/" },
        { name: "Ny", route: "#!/new" },
        { name: "Logga in", route: "#!/login" },
        { name: "Köp", route: "#!/buy" },
    ],
    view: function(vnode) {
        // För att förenkla nedanstående kod sparar jag i två variabler
        let topNav = vnode.attrs.topNav;
        let bottomNav = vnode.attrs.bottomNav;

        return [
            m("nav.top-nav", { textContent: "Emils konditori"}, [
                // Vi använder ternary-operator och beroende på om
                // v har satt topNav i index.js visas en länk eller ej
                topNav ?
                    m("span", [
                        m("a", { href: topNav.route }, topNav.title)
                    ]) :
                    null
            ]),
            // I main-contianer visar vi upp barn-noderna.
            // de skickades med från index.js som en komponent
            // tillexempel m(list)
            m("main.container", vnode.children),
            // Vi loopar igenom alla links vi har satt ovan
            m("nav.bottom-nav", layout.links.map(function(link) {
                // Vi vill bara att man kan lägga till nya bakverk
                // om man är inloggat. Vi kollar om token finns i auth
                // och om länken är #!/new
                // "Varvet" i map-loopen avslutas här genom att
                // returnera null, som inte renderas till nånting av
                // mithril
                if (link.route === "#!/new" && auth.token === "") {
                    return null;
                }

                // Vi returnerar ett a element per link
                // beroende på om bottomNav värdet är lika med
                // nuvarande links route sätts en klass på elementet
                // till active.
                return m("a", {
                    href: link.route,
                    class: bottomNav === link.route ? "active" : null
                }, link.name);
            }))
        ];
    }
};

export { layout };
