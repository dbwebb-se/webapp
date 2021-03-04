"use strict";
import m from "mithril";

import CalendarModel from "../models/calendar";

const Day = {
    view: function (vnode) {
        return m("div.day" + vnode.attrs.red_day, [
            m("p", [m("strong", vnode.attrs.date)]),
            m("i", vnode.attrs.weekday + ": " + vnode.attrs.namnsdag)
        ]);
    }
};

const Calendar = {
    oninit: function () {
        CalendarModel.load();
    },
    view: function() {
        return [
            m("h1", "Calendar"),
            m("div", CalendarModel.days.map(function (day) {
                return m(Day, day);
            }))
        ];
    }
};

export default Calendar;
