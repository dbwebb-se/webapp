"use strict";

import m from 'mithril';

import { list } from "./views/list";
import { bakedGoodsForm } from "./views/form";

m.route(document.body, "/", {
    "/": list,
    "/form/:id" : bakedGoodsForm
});
