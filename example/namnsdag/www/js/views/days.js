"use strict";
var m = require("mithril");

function zero_pad (number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

function format_date (date) {
    return date.getFullYear() + "-" + zero_pad(parseInt(date.getMonth()) + 1) + "-" + zero_pad(parseInt(date.getDate()));
}

module.exports = {
    view: function() {
        var today = new Date();
        var days = [];
        days.push(today);
        for (var i = 1; i < 10; i++) {
            var temporary_date = new Date();
            temporary_date.setDate(today.getDate() + i);
            days.push(temporary_date);
        }

        return [
            m("h1", "Namnsdagar"),
            m("ul.days", days.map(function (day) {
                return m("li", [m("a", {href: "/nameday/" + format_date(day), oncreate: m.route.link}, format_date(day))]);
            }))
        ];
    }
};
