"use strict";

import m from 'mithril';
import { nobel } from "../models/nobel.js";

let year = {
    oninit: function(vnode) {
        nobel.load(vnode.attrs.year);
    },
    view: function(vnode) {
        return [
            m("h1", vnode.attrs.year),
            m("div.year-container", nobel.current.prizes.map(function(prize) {
                return [
                    m("h2", prize.category),
                    prize.laureates.map(function(laureate) {
                        return m("p", laureate.firstname + " " + laureate.surname);
                    })
                ];
            }))
        ];
    }
};

export { year };
