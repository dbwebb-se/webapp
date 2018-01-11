/* global cordova, device */

"use strict";

var m = require("mithril");
var sha1 = require("sha1");
var fileName = "booli3.json";
var Booli = {};

function fail(err) {
    console.log("Error: ", err);
}

function addDateToData() {
    return {date: Booli.dataDate, listings: Booli.list};
}

function writeFile(fileEntry) {
    fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwrite = function() {
            console.log("Successful file write...");
        };

        fileWriter.onerror = fail;

        fileWriter.write(JSON.stringify(addDateToData()));
    });
}

function createFile(dirEntry) {
    // create: true, exclusive: false = if file already exist return it
    // create: true, exclusive: true = if file already exist throw error
    dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {
        console.log("file: ", fileEntry);
        writeFile(fileEntry);
    }, fail);
}

function accessFileSystemForWrite() {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
        console.log('file system open: ' + dirEntry.name);
        createFile(dirEntry);
    }, fail);
}

function setList(result) {
    Booli.list = result.listings;
}

function updateDataAndroid(result) {
    setList(result);
    accessFileSystemForWrite();
}

function checkDate() {
    var diff  = Math.abs(Booli.dataDate - Date.now());
    var diffInMin = Math.ceil(diff) / (1000 * 60);

    // If data is older than 10 minutes
    if (diffInMin > 10) {
        Booli.getDataBrowser(updateDataAndroid);
    } else {
        m.redraw();
    }
}

function readFile(fileEntry) {
    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            console.log("file read: ", JSON.parse(this.result));
            var result = JSON.parse(this.result);

            Booli.list = result.listings;
            Booli.dataDate = result.date;
            checkDate();
        };
        reader.readAsText(file);
    }, fail);
}

function getDataAndroid() {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory + fileName,
        readFile,
        function(err) {
            // Check if file doesnt exists
            if (err.code === 1) {
                // File doesn't exist
                Booli.getDataBrowser(updateDataAndroid);
            } else {
                // Other error
                fail(err);
            }
        });
}

Booli = {
    searchTerm: "karlskrona",
    list: [],
    callerId: "efo",
    secretKey: "ofqGqQTo2D0pOneeNqRpTuNVl9fgNHGGxIFVG5qX",
    dataDate: Date.now(),
    makeUnique: function () {
        var characters = "ABCDEFGHIJKLMNOPQabcdefghijklmnopq0123456789";
        var uniqueString = "";

        for (var i = 0; i < 16; i++) {
            uniqueString += characters.charAt(Math.floor(Math.random() * ( characters.length - 1)));
        }
        return uniqueString;
    },
    getDataBrowser: function(callbackIfSuccess) {
        Booli.dataDate = Date.now();
        var currentUnique = Booli.makeUnique();

        m.request({
            method: "GET",
            url: "https://api.booli.se/listings",
            data: {
                q: Booli.searchTerm,
                callerId: Booli.callerId,
                limit: 10,
                offset: 0,
                time: Booli.dataDate,
                unique: currentUnique,
                hash: sha1(Booli.callerId + Booli.dataDate + Booli.secretKey + currentUnique)
            }
        }).then(callbackIfSuccess);
    },
    loadList: function () {
        if (device.platform === "Android") {
            getDataAndroid();
        } else {
            Booli.getDataBrowser(setList);
        }
    }
};

module.exports = Booli;
