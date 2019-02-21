"use strict";

import m from "mithril";

let nobel = {
    current: { prizes: [] },
    load: function(year) {
        return m.request({
            method: "GET",
            url: "http://api.nobelprize.org/v1/prize.json?year=" + year
        }).then(function(result) {
            nobel.current = result;
        });
    }
};

export { nobel };
