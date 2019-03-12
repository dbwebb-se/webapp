"use strict";

import m from "mithril";
import mapView from "./views/map.js";

const app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.mount(document.body, mapView);
    },
};

app.initialize();
