"use strict";
var m = require("mithril");

function zero_pad (number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

var Calendar = {
    days : [],
    load: function () {
        var today = new Date();
        var apiURL = "https://api.dryg.net/dagar/v2.1/" + today.getFullYear() + "/" + zero_pad(parseInt(today.getMonth()) + 1);

        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Calendar.days = result.dagar.map(function (dag) {
                return { date : dag.datum, weekday : dag.veckodag, red_day : dag["röd dag"] === "Ja" ? ".red-day" : "" };
            });
        });
    }
};

module.exports = Calendar;
