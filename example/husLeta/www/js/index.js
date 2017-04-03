"use strict";
var m = require("mithril");

var Home = require("./views/home");
var Search = require("./views/search");
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/" : Home,
            "/search" : Search
        });
    }
};

app.initialize();
