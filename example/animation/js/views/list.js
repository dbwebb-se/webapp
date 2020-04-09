"use strict";

import m from "mithril";

var list = {
    view: function() {
        return m("div.list", [
            m("a.list-item", {
                href: "#!/detail/1"
            }, "Siffran 1"),
            m("a.list-item", {
                href: "#!/detail/2"
            }, "Siffran 2")
        ]);
    }
};

export default list;
