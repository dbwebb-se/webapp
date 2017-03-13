var m = require("mithril");

var Calendar = {
    days : [],
    load: function (date) {
        var apiURL = "https://api.dryg.net/dagar/v2.1/2017/04";

        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Calendar.days = result.dagar;
        });
    }
}

module.exports = Calendar;
