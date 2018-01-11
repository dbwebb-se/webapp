"use strict";

var m = require("mithril");
var Booli = require("../models/booli");

var ListingComponent = {
    view: function (vnode) {
        return m("div.listing", [
            m("img", { src: "https://api.bcdn.se/cache/primary_" +
                vnode.attrs.listing.booliId + "_140x94.jpg"}),
            m("p.address", vnode.attrs.listing.location.address.streetAddress),
            m("p.price", vnode.attrs.listing.listPrice)
        ]);
    }
};

module.exports = {
    oninit: function () {
        Booli.loadList();
    },
    view: function () {
        return [
            m("h1", "Search"),
            m("div.listings-container", Booli.list.map(function (listing) {
                return m(ListingComponent, {listing: listing});
            }))
        ];
    }
};
