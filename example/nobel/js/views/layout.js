"use strict";

import m from 'mithril';

let layout = {
    view: function(vnode) {
        return [
            m("nav.top-nav",
                { textContent: "Nobel"},
                [
                    m.route.get().split("/")[1] == "year" ?
                        m("span", [
                            m("a", { href: "#!/" }, "Alla år")
                        ]) : null
                ]),
            m("main.container", vnode.children)
        ];
    }
};

export { layout };
