"use strict";

var m = require("mithril");

var list = {
    view: function() {
        return m("div.list", [
            m("a.list-item", {
                href: "/detail/1", oncreate: m.route.link
            }, "Siffran 1"),
            m("a.list-item", {
                href: "/detail/2", oncreate: m.route.link
            }, "Siffran 2")
        ]);
    }
};

module.exports = list;
