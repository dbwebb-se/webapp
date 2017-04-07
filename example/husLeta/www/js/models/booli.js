"use strict";

var m = require("mithril");
var sha1 = require("sha1");

var Booli = {
    searchTerm : "karlskrona",
    list : [],
    callerId : "efo",
    secretKey : "ofqGqQTo2D0pOneeNqRpTuNVl9fgNHGGxIFVG5qX",
    makeUnique : function () {
        var characters = "ABCDEFGHIJKLMNOPQabcdefghijklmnopq0123456789";
        var uniqueString = "";
        for (var i = 0; i < 16; i++) {
            uniqueString += characters.charAt(Math.random(0, characters.length - 1));
        }
        return uniqueString;
    },
    loadList : function () {
        var currentTime = Date.now();
        var currentUnique = Booli.makeUnique();
        m.request({
            method : "GET",
            url : "https://api.booli.se/listings",
            data : {
                q : Booli.searchTerm,
                callerId : Booli.callerId,
                limit : 3,
                offset : 0,
                time : currentTime,
                unique : currentUnique,
                hash : sha1(Booli.callerId + currentTime + Booli.secretKey + currentUnique)
            }
        }).then(function (result) {
            Booli.list = result.listings;
        });
    }
};

module.exports = Booli;
