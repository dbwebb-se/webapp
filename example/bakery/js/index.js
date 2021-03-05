"use strict";

import m from 'mithril';

import { auth } from "./models/auth.js";

import { layout } from "./views/layout.js";

import { list } from "./views/list.js";
import { editForm } from "./views/form.js";
import { newForm } from "./views/new.js";
import { login } from "./views/login.js";


m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, {
                bottomNav: "#!/"
            }, m(list));
        }
    },
    "/form/:id": {
        render: function(vnode) {
            return m(layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/"
            }, m(editForm, vnode.attrs));
        }
    },
    "/new": {
        onmatch: function() {
            if (auth.token) {
                return newForm;
            } else {
                return m.route.set("/login");
            }
        },
        render: function(vnode) {
            return m(layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/new"
            }, vnode);
        }
    },
    "/login": {
        render: function() {
            return m(layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/"
            }, m(login));
        }
    }
});
