var m = require("mithril");

var Calendar = {
    days : [],
    load: function () {
        var apiURL = "https://api.dryg.net/dagar/v2.1/2017/04";

        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Calendar.days = result.dagar.map(function (dag) {
                return { date : dag.datum, weekday : dag.veckodag, red_day : dag["röd dag"] === "Ja" ? ".red-day" : "" };
            });
        });
    }
}

module.exports = Calendar;
