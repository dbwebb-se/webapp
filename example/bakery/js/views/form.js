import m from 'mithril';
import { bakery } from "../models/bakery";

let editForm = {
    oninit: function(vnode) {
        // utskrift av vnode-objekt för att
        // exemplifiera virtuella noder och ///// det virtuella DOM-
        // trädet.
        console.log(vnode);

        // vnode.attrs.id innehåller det id
        // vi skickar med som en del av urln
        // form/:id. Vi hämtar rätt bakverk
        // med hjälp av id
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
                // I nedanstående kod använder vi oss av två attribut
                // oninput och value.
                // value skuggar/har samma värde som ett attribut i
                // modellen (bakery.current.name), vi ändrar sedan
                // detta värde och sätter det till e.target.value ////
                // varje vi skriver i fältet. value (och det som finns
                // i fältet ) uppdateras per automatik utifrån
                // modellens värde/state.

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
                        bakery.current.specifiers = e.target.value;
                    }
                },               bakery.cakeTypes.map(function(cakeType) {
                    return m("option", {
                        value: cakeType,
                        selected: bakery.current.specifiers === cakeType
                    }, cakeType);
                })),
                m("input.button.green-button[type=submit][value=Save].button", "Spara")
            ])
        ]);
    }
};

export { editForm };
