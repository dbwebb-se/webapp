"use strict";

import m from "mithril";

import NamedayModel from "../models/nameday";

const Nameday = {
    oninit: function (vnode) {
        NamedayModel.load(vnode.attrs.date);
    },
    view: function() {
        return [
            m("h1", "Dagens namn " + NamedayModel.currentDate),
            m("p", NamedayModel.currentNames)
        ];
    }
};

export default Nameday;
