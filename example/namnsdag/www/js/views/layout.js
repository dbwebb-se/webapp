"use strict";
var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("h2.brand", "Emil Folino"),
                    m("ul.nav", [
                        m("li", [m("a", {href: "/", oncreate: m.route.link}, "Me")]),
                        m("li", [m("a", {href: "/hobby", oncreate: m.route.link}, "Hobby")]),
                        m("li", [m("a", {href: "/days", oncreate: m.route.link}, "Namnsdag")])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
