"use strict";
var m = require("mithril");

var Layout = require("./views/layout");
var Me = require("./views/me");
var Hobby = require("./views/hobby");
var Days = require("./views/days");
var Nameday = require("./views/nameday");

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout, m(Me));
        }
    },
    "/hobby": {
        render: function() {
            return m(Layout, m(Hobby));
        }
    },
    "/days": {
        render: function() {
            return m(Layout, m(Days));
        }
    },
    "/nameday/:date" : {
        render: function (vnode) {
            return m(Layout, m(Nameday, vnode.attrs));
        }
    }
});
