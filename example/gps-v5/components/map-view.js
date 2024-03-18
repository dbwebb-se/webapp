/* global L */

import getCoordinates from "../models/nominatim.js";

export default class MapView extends HTMLElement {
    constructor() {
        super();

        this.map = null;
    }

    connectedCallback() {
        this.innerHTML = `<h1>MapView</h1><div id="map" class="map"></div>`;

        this.renderMap();
    }

    renderMap() {
        this.map = L.map('map').setView([56.18219, 15.59094], 11);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        this.renderMarkers();

        this.renderLocation();
    }

    async renderMarkers() {
        let coordinates = [56.2345, 15.6034];

        L.marker(coordinates).addTo(this.map);

        let adress = "Stortorget 1, Karlskrona";

        const results = await getCoordinates(adress);

        L.marker([
            parseFloat(results[0].lat),
            parseFloat(results[0].lon)
        ]).addTo(this.map);
    }

    renderLocation() {
        let locationMarker = L.icon({
            iconUrl:      "location.png",
            iconSize:     [24, 24],
            iconAnchor:   [12, 12],
            popupAnchor:  [0, 0]
        });


        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                L.marker(
                    [position.coords.latitude, position.coords.longitude],
                    {icon: locationMarker}
                ).addTo(this.map);
            });
        }
    }
}
