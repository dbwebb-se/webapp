"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        var startYear = 2010;
        var endYear = 2017;
        var years = [];

        while (startYear <= endYear) {
            years.push(
                m("a.button.blue-button.full-width-button",
                { href: "/year/" + startYear, oncreate: m.route.link },
                startYear));
            startYear++;
        }

        return [
            m("h1", "Nobelfesten"),
            m("p", "Välj ett årtal i listan:"),
            m("div.year-container", years)
        ];
    }
};
