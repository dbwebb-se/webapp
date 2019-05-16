"use strict";

import m from "mithril";
import layout from "./views/layout.js";
import list from "./views/list.js";
import detail from "./views/detail.js";

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(list));
        }
    },
    "/detail/:detail": {
        render: function(vnode) {
            return m(layout, m(detail, vnode.attrs));
        }
    }
});
