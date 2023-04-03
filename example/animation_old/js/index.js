"use strict";

import m from "mithril";
import list from "./views/list.js";
import detail from "./views/detail.js";

m.route(document.body, "/list", {
    "/list": list,
    "/detail/:id": detail
});
