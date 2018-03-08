"use strict";

var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return [
            m("nav.top-nav",
                { textContent: "Nobel"},
                [
                    m.route.get().split("/")[1] == "year" ?
                        m("span", [
                            m("a", { href: "/", oncreate: m.route.link }, "Alla år")
                        ]) : null
                ]),
            m("main.container", vnode.children)
        ];
    }
};
