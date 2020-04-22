import m from "mithril";
import fileModel from "../models/filemodel.js";

var fileView = {
    view: function() {
        return m("div.container", [
            m("h1", "Hello File"),
            m("input.input[type=text]", {
                oninput: function (e) {
                    fileModel.current = e.target.value
                },
                value: fileModel.current
            }),
        ]);
    }
};

export default fileView;
