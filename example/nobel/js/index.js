"use strict";

var m = require("mithril");
var layout = require("./views/layout");
var list = require("./views/list");
var year = require("./views/year");

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(list));
        }
    },
    "/year/:year": {
        render: function(vnode) {
            return m(layout, m(year, vnode.attrs));
        }
    }
});
