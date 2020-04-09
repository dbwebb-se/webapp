"use strict";

import m from "mithril";

function zeroPad(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

function formatDate(date) {
    return date.getFullYear() + "-" +
        zeroPad(parseInt(date.getMonth()) + 1) + "-" +
        zeroPad(parseInt(date.getDate()));
}

const Days = {
    view: function() {
        var today = new Date();
        var days = [];

        days.push(today);
        for (var i = 1; i < 10; i++) {
            var temporaryDate = new Date();

            temporaryDate.setDate(today.getDate() + i);
            days.push(temporaryDate);
        }

        return [
            m("h1", "Namnsdagar"),
            m("ul.days", days.map(function (day) {
                return m("li",
                    [m("a",
                        { href: "#!/nameday/" + formatDate(day) },
                        formatDate(day))]);
            }))
        ];
    }
};

export default Days;
