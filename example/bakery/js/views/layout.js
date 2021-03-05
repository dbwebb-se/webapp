"use strict";

import m from "mithril";
import { auth } from "../models/auth.js";

var layout = {
    links: [
        { name: "Hem", route: "#!/" },
        { name: "Ny", route: "#!/new" },
        { name: "Logga in", route: "#!/login" },
    ],
    view: function(vnode) {
        var topNav = vnode.attrs.topNav;
        var bottomNav = vnode.attrs.bottomNav;

        return [
            m("nav.top-nav", { textContent: "Emils konditori"}, [
                topNav ? m("span", [
                    m("a", { href: topNav.route }, topNav.title)
                ]) : null
            ]),
            m("main.container", vnode.children),
            m("nav.bottom-nav", layout.links.map(function(link) {
                if (link.route === "#!/new" && auth.token === "") {
                    return null;
                }

                return m("a", {
                    href: link.route,
                    class: bottomNav === link.route ? "active" : null
                }, link.name);
            }))
        ];
    }
};

export { layout };
