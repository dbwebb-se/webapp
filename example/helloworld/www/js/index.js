"use strict";
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.homePage();
    },

    homePage: function() {
        var content = document.getElementsByClassName("app")[0];

        var html = "<h1 class='title'>Hello World</h1>";
        html += "<div class='main'>Hej och välkommen till min första Cordova app.";
        html += "<button class='otherPage'>Nästa sida</button></div>";
        content.innerHTML = html;

        var button = document.getElementsByClassName("otherPage")[0];
        app.addEventListeners(button, this.otherPage);
    },

    otherPage: function() {
        var title = document.getElementsByClassName("title")[0];
        var content = document.getElementsByClassName("main")[0];
        console.log("Other page");

        title.innerHTML = "Other page";

        var html = "Try an alert!<br>";
        html += "<button class='alertButton'>Alert</button>";
        content.innerHTML = html;

        var button = document.getElementsByClassName("alertButton")[0];
        app.addEventListeners(button, function() {
            window.alert("hej");
        });
    },

    addEventListeners: function(element, callback) {
        element.addEventListener("touchend", function(event) {
            event.preventDefault();
            callback();
        });
        element.addEventListener("click", callback);
    }
};

app.initialize();
