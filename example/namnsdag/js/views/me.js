"use strict";

import m from "mithril";

const Me = {
    view: function() {
        return [
            m("h1", "Emil Folino"),
            m("p", "My name is Emil, I'm originally from Denmark, but now I live in Sweden."),
            m("p", "I run orienteering and drive an old Saab.")
        ];
    }
};

export default Me;
