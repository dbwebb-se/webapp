"use strict";

var m = require("mithril");
var map = require("./views/map.js");

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.mount(document.body, map);
    },
};

app.initialize();
