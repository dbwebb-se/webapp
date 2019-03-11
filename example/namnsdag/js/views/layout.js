"use strict";

import m from "mithril";

const Layout = {
    view: function(vnode) {
        return m("main", [
            m("div.navbar", [
                m("div.container", [
                    m("ul.nav", [
                        m("li", [
                            m("a", {
                                href: "/",
                                oncreate: m.route.link
                            }, "Me")
                        ]),
                        m("li", [
                            m("a", {
                                href: "/hobby",
                                oncreate: m.route.link
                            }, "Hobby")
                        ]),
                        m("li", [
                            m("a", {
                                href: "/days",
                                oncreate: m.route.link
                            }, "Namnsdag")
                        ])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};

export default Layout;
