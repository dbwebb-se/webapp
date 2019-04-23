import m from "mithril";

const layout = {
    view: function(vnode) {
        return m("main.container", [
            m("div", vnode.children)
        ]);
    }
};

export { layout };
