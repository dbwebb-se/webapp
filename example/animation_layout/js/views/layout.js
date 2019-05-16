"use strict";

import m from 'mithril';

let layout = {
    view: function(vnode) {
        return m("div.layout", vnode.children);
    }
};

export default layout;
