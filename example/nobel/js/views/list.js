"use strict";
import m from 'mithril';

let list = {
    view: function() {
        var startYear = 2010;
        var endYear = 2020;
        var years = [];

        while (startYear <= endYear) {
            years.push(
                m("a.button.blue-button.full-width-button",
                    { href: "#!/year/" + startYear },
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

export { list };
