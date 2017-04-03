"use strict";

var m = require("mithril");
var Booli = require("../models/booli");

module.exports = {
    oninit : function () {
        Booli.loadList();
    },
    view: function () {
        return [
            m("h1", "Search"),
            m("div.listings-container", Booli.list.map(function (listing) {
                return [
                    m("p.address", listing.location.address.streetAddress),
                    m("p.price", listing.listPrice)
                ];
            }))
        ];
    }
};
