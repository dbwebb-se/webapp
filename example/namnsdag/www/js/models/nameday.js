"use strict";
var m = require("mithril");

var Nameday = {
    currentDate : "1970-01-01",
    currentNames : "",
    load: function (date) {
        Nameday.currentDate = date;

        var dateArray = date.split("-");
        var apiURL = "https://api.dryg.net/dagar/v2.1/" + dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2];

        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Nameday.currentNames = result.dagar[0].namnsdag.join(" - ");
        });
    }
};

module.exports = Nameday;
