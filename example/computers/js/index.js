"use strict";

import m from 'mithril';

import { list } from "./views/list";
import { computerForm } from "./views/form";

m.route(document.body, "/", {
    "/": list,
    "/form/:id" : computerForm
});