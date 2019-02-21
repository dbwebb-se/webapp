"use strict";
import m from 'mithril';

import { layout } from './views/layout';
import { list } from './views/list';
import { year } from './views/year';

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(list));
        }
    },
    "/year/:year": {
        render: function(vnode) {
            return m(layout, m(year, vnode.attrs));
        }
    }
});
