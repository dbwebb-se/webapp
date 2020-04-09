"use strict";

import m from "mithril";

const Layout = {
    view: function(vnode) {
        return m("main", [
            m("navbar.navbar", [
                m("div.container", [
                    m("ul.nav", [
                        m("li", [
                            m("a", { href: "#!/" }, "Me")
                        ]),
                        m("li", [
                            m("a", {
                                href: "#!/hobby" }, "Hobby")
                        ])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};

export default Layout;
