"use strict";

var m = require("mithril");

module.exports = {
    view: function () {
        return [
            m("h1", "HusLeta"),
            m("a", { href: "#!/search" }, "Search")
        ];
    }
};
