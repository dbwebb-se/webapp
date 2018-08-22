"use strict";

var m = require("mithril");
var L = require("leaflet");
var geosearch = require("leaflet-geosearch");

var position = require("../models/position.js");

var map;
var locationMarker = L.icon({
    iconUrl: 'location.png',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
});

function showMap() {
    var places = {
        "BTH": [56.181932, 15.590525],
        "Stortorget": [56.160817, 15.586703],
        "Hoglands Park": [56.164077, 15.585887],
        "Rödebybacken": [56.261121, 15.628609]
    };

    map = L.map('map').setView(places["BTH"], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    for (var place in places) {
        if (places.hasOwnProperty(place)) {
            L.marker(places[place]).addTo(map).bindPopup(place);
        }
    }

    var geocoder = new geosearch.OpenStreetMapProvider();

    var addresses = [
        "Bastionsgatan 1, Karlskrona",
        "Kärleksstigen 1, Karlskrona"
    ];

    for (var i = 0; i < addresses.length; i++) {
        geocoder
            .search({ query: addresses[i] })
            .then(function(result) {
                if (result.length > 0) {
                    L.marker([result[0].y, result[0].x]).addTo(map).bindPopup(result[0].label);
                }
            });
    }
}

function showPosition() {
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        L.marker(
            [position.currentPosition.latitude, position.currentPosition.longitude],
            {icon: locationMarker}
        ).addTo(map).bindPopup("Din plats");
    }
}

module.exports = {
    oninit: position.getPosition,
    oncreate: function() {
        showMap();
    },
    view: function() {
        showPosition();
        return [
            m("h1", "Map"),
            m("div#map.map", "")
        ];
    }
};
