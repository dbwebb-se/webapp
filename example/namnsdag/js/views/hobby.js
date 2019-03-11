"use strict";

import m from "mithril";

const Hobby = {
    view: function() {
        return [
            m("h1", "My hobby"),
            m("p", "I run orienteering most of the time.")
        ];
    }
};

export default Hobby;
