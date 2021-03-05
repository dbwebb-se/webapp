import m from 'mithril';
import { bakery } from "../models/bakery";

let editForm = {
    oninit: function(vnode) {
        bakery.load(vnode.attrs.id);
    },
    view: function() {
        return m("div.container", [
            m("h2", "Ändra kaka"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    bakery.save();
                } }, [
                m("label.input-label", "Namn"),
                m("input.input[type=text][placeholder=Name]", {
                    oninput: function (e) {
                        bakery.current.name = e.target.value;
                    },
                    value: bakery.current.name
                }),
                m("label.input-label", "Lagerplats"),
                m("input.input[type=text][placeholder=Lagerplats]", {
                    oninput: function (e) {
                        bakery.current.location = e.target.value;
                    },
                    value: bakery.current.location
                }),
                m("label.input-label", "Lagersaldo"),
                m("input.input[type=number][placeholder=Lagersaldo]", {
                    oninput: function (e) {
                        bakery.current.stock = parseInt(e.target.value);
                    },
                    value: bakery.current.stock
                }),
                m("label.input-label", "Typ"),
                m("select.input", {
                    onchange: function (e) {
                        bakery.current.specifiers = parseInt(e.target.value);
                    }
                }, bakery.cakeTypes.map(function(cakeType) {
                    return m("option", { value: cakeType }, cakeType);
                })),
                m("input.button.green-button[type=submit][value=Save].button", "Spara")
            ])
        ]);
    }
};

export { editForm };
