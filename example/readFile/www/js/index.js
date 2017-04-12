"use strict";
var m = require("mithril");
var People = require("./views/people");

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        m.mount(document.body, People);
    },

};

app.initialize();
