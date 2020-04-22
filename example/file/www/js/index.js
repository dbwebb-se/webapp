
import m from "mithril";
import fileView from "./views/fileview.js";

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.mount(document.body, fileView);
    }
};

app.initialize();
