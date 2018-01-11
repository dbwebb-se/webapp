"use strict";
var m = require("mithril");
var People = require("../models/people");

var Person = {
    view: function(vnode) {
        var person = vnode.attrs;

        return m("div.widget",
            [
                m("p", "Name: " + person.name),
                m("p", "Address" + person.address),
                m("p", "Age" + person.age),
                m("p", "Balance" + person.balance)
            ]
        );
    }
};

module.exports = {
    oninit: function() {
        People.load();
    },

    view: function() {
        return [
            m("h1", "People from space"),
            People.data.map(function(person) {
                return m(Person, person);
            })
        ];
    }
};
