var m = require("mithril");

var Calendar_model = require("../models/calendar");

var Day = {
    view: function (vnode) {
        return m("div.day" + vnode.attrs.red_day, [
            m("p", [m("strong", vnode.attrs.datum)]),
            m("i", vnode.attrs.veckodag)
        ]);
    }
}



module.exports = {
    oninit: function () {
        Calendar_model.load()
    },
    view: function() {
        return [
            m("h1", "Calendar"),
            m("div", Calendar_model.days.map(function (day) {
                return m(Day, { datum: day.datum, veckodag: day.veckodag, red_day : day["röd dag"] === "Ja" ? ".red-day" : "" });
            }))
        ];
    }
}
