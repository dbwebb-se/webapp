"use strict";
var m = require("mithril");

var Nameday = require("../models/nameday");

module.exports = {
    oninit: function (vnode) {
        Nameday.load(vnode.attrs.date);
    },
    view: function() {
        return [
            m("h1", "Dagens namn " + Nameday.currentDate),
            m("p", Nameday.currentNames)
        ];
    }
};
