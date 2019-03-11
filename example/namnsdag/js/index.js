"use strict";
import m from "mithril";

import Layout from "./views/layout";
import Me from "./views/me";
import Hobby from "./views/hobby";
import Days from "./views/days";
import Nameday from "./views/nameday";

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
    "/nameday/:date": {
        render: function (vnode) {
            return m(Layout, m(Nameday, vnode.attrs));
        }
    }
});
