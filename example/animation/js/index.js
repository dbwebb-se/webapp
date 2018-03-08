"use strict";

var m = require("mithril");
var list = require("./views/list.js");
var detail = require("./views/detail.js");

m.route(document.body, "/list", {
    "/list": list,
    "/detail/:id": detail
});
