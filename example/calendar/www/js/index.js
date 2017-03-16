"use strict";

var m = require("mithril");
var Calendar = require("./views/calendar");

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.mount(document.body, Calendar);
    }
};

app.initialize();
