/* global cordova device */

"use strict";

var m = require("mithril");

var fileNameAndroid = "www/peopleInfo.json";
var fileNameBrowser = "peopleInfo.json";

var People = {};

function fail(err) {
    console.log("Error: ", err);
}

function readData(fileEntry) {
    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            People.data = JSON.parse(this.result);
            m.redraw();
        };
        reader.readAsText(file);
    }, fail);
}

function getDataAndroid() {
    window
        .resolveLocalFileSystemURL(cordova.file.applicationDirectory + fileNameAndroid,
            readData,
            fail);
}

function getDataBrowser() {
    m.request({
        method: "GET",
        url: fileNameBrowser
    }).then(function (items) {
        People.data = items;
    });
}

function loadPeopleData() {
    var isAndroid = (device.platform === "Android");

    if (isAndroid) {
        getDataAndroid();
    } else {
        getDataBrowser();
    }
}

People = {
    data: [],

    load: function () {
        if (People.data.length === 0) {
            loadPeopleData();
        }
    }
};

module.exports = People;
