"use strict";

var m = require("mithril");

module.exports = {
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-out");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 250);
        });
    },
    view: function(vnode) {
        return m("div.slide-in.detail-" + vnode.attrs.id, [
            m("a", { href: "/list", oncreate: m.route.link }, "Tillbaka"),
            m("h1", "Detaljer om " + vnode.attrs.id)
        ]);
    }
};
