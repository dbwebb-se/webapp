"use strict";

import m from 'mithril';

import { auth } from "./models/auth.js";

import { layout } from "./views/layout.js";

import { list } from "./views/list.js";
import { editForm } from "./views/form.js";
import { newForm } from "./views/new.js";
import { login } from "./views/login.js";
import { buy } from "./views/buy.js";

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
            }

            return m.route.set("/login");
        },
        render: function(vnode) {
            return m(layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/new"
            }, vnode);
        }
    },
    // Till m-funktionen kan vi skicka 2 eller 3 argument.
    // 2-argument: m("p", "Hello") första argumentet är nuvarande
    // element, andra argumentet är barn. Blir till följande HTML i
    // DOM-trädet: <p>Hello</p>
    // 3-argument: m("p", { class: "blue" }, "Hello") där andra
    // argumentet är options till exempel en klass eller andra värden
    // vi vill skicka med.

    // I nedanstående exempel skickar med två värden topNav och
    // bottomNav. Vi når de i layout under vnode.attrs
    "/login": {
        render: function() {
            return m(layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/login"
            }, m(login));
        }
    },
    "/buy": {
        render: function() {
            return m(layout, {
                topNav: { route: "#!/", title: "Hem"},
                bottomNav: "#!/buy"
            }, m(buy));
        }
    }
});
