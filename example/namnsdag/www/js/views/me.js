"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("h1", "Emil Folino"),
            m("p", "My name is Emil, I'm originally from Denmark, but now I live in Sweden."),
            m("p", "I run orienteering and drive an old Saab.")
        ];
    }
};
