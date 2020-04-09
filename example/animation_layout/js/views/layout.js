"use strict";

import m from 'mithril';

let layout = {
    view: function(vnode) {
        return [
            m("div.layout", vnode.children),
            m("footer.footer", [
                m("a.list-item", {
                    href: "#!/detail/1"
                }, "Siffran 1"),
                m("a.list-item", {
                    href: "#!/detail/2"
                }, "Siffran 2")
            ])
        ];
    }
};

export default layout;
