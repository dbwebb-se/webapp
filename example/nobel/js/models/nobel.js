"use strict";

var m = require("mithril");

var nobel = {
    current: { prizes: [] },
    load: function(year) {
        return m.request({
            method: "GET",
            url: "http://api.nobelprize.org/v1/prize.json?year=" + year
        })
        .then(function(result) {
            nobel.current = result;
        });
    }
};

module.exports = nobel;
