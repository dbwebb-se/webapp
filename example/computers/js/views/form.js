import m from 'mithril';
import { computer } from "../models/computer";

let computerForm = {
    oninit: function(vnode) {
        computer.load(vnode.attrs.id);
    },
    view: function() {
        return m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    computer.save();
                } }, [
            m("label.input-label", "Name"),
            m("input.input[type=text][placeholder=Name]", {
                oninput: function (e) {
                    computer.current.name = e.target.value;
                },
                value: computer.current.name
            }),
            m("label.input-label", "Year"),
            m("input.input[type=number][placeholder=Year]", {
                oninput: function (e) {
                    computer.current.year = e.target.value;
                },
                value: computer.current.year
            }),
            m("label.input-label", "Operating System"),
            m("select.input", {
                onchange: function (e) {
                    computer.current.os = parseInt(e.target.value);
                }
            }, computer.operatingSystems.map(function(os) {
                return m("option", { value: os.id }, os.name);
            })),
            m("input[type=submit][value=Save].button", "Save")
        ]);
    }
};

export { computerForm };