"use strict";

import m from "mithril";

function zeroPad(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

const CalendarModel = {
    days: [],
    load: function () {
        var today = new Date();
        var apiURL = "https://api.dryg.net/dagar/v2.1/" +
            today.getFullYear() + "/" +
            zeroPad(parseInt(today.getMonth()) + 1);

        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            CalendarModel.days = result.dagar.map(function (dag) {
                return {
                    date: dag.datum,
                    weekday: dag.veckodag,
                    red_day: dag["röd dag"] === "Ja" ? ".red-day" : "",
                    namnsdag: dag.namnsdag.join(" - ")
                };
            });
        });
    }
};

export default CalendarModel;
