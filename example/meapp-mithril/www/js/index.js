"use strict";
var m = require("mithril");
var Layout = require("./views/layout");
var Me = require("./views/me");
var Hobby = require("./views/hobby");
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(Layout, m(Me));
                }
            },
            "/hobby": {
                render: function() {
                    return m(Layout, m(Hobby));
                }
            }
        });
    }
};

app.initialize();
