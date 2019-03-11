"use strict";

import m from "mithril";

import Layout from "./views/layout";
import Me from "./views/me";
import Hobby from "./views/hobby";

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
    }
});
