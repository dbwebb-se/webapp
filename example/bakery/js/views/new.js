import m from 'mithril';
import { bakery } from "../models/bakery";

let newForm = {
    oninit: function() {
        bakery.current.specifiers = "Tårta";
        bakery.resetCake();
    },
    view: function() {
        return m("div.container", [
            m("h2", "Ny kaka"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    if (bakery.current.specifiers) {
                        bakery.addCake();
                    }
                } }, [
                m("label.input-label", "Namn"),
                m("input.input[type=text][placeholder=Name]", {
                    oninput: function (e) {
                        bakery.current.name = e.target.value;
                    },
                    value: bakery.current.name
                }),
                m("label.input-label", "Artikelnummer"),
                m("input.input[type=text][placeholder=Artikelnummer]", {
                    oninput: function (e) {
                        bakery.current.article_number = e.target.value;
                    },
                    value: bakery.current.article_number
                }),
                m("label.input-label", "Beskrivning"),
                m("textarea.input", {
                    oninput: function (e) {
                        bakery.current.description = e.target.value;
                    },
                    value: bakery.current.description
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
                m("label.input-label", "Pris"),
                m("input.input[type=number][placeholder=Pris]", {
                    oninput: function (e) {
                        bakery.current.price = parseInt(e.target.value);
                    },
                    value: bakery.current.price
                }),
                m("label.input-label", "Typ"),
                m("select.input", {
                    onchange: function (e) {
                        bakery.current.specifiers = e.target.value;
                    },
                    required: true
                }, [
                    m("option", { value: "" }, "Välj en typ"),
                    bakery.cakeTypes.map(function(cakeType) {
                        return m("option", { value: cakeType }, cakeType);
                    })
                ]),
                m("input.button.green-button[type=submit][value=Save].button", "Skapa kaka")
            ])
        ]);
    }
};

export { newForm };
