import m from 'mithril';

import { auth } from "../models/auth.js";

let login = {
    view: function() {
        return m("div.container",
            m("h2", "Logga in"),
            m("p", "Finns en registrerad användare: kaka@kaka.se, Lösenord: test1234"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    auth.login();
                } }, [
                m("label.input-label", "E-post"),
                m("input.input[type=email][placeholder=E-post]", {
                    oninput: function (e) {
                        auth.email = e.target.value;
                    },
                    value: auth.email
                }),
                m("label.input-label", "Lösenord"),
                m("input.input[type=password][placeholder=Lösenord]", {
                    oninput: function (e) {
                        auth.password = e.target.value;
                    },
                    value: auth.password
                }),
                m("input.button.green-button[type=submit][value=Logga in].button", "Logga in")
            ]));
    }
};

export { login };
