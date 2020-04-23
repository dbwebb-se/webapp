import m from "mithril";
import fileModel from "../models/filemodel.js";

var fileView = {
    oninit: fileModel.createFile,
    view: function() {
        return m("div.container", [
            m("h1", "Hello File"),
            m("input.input[type=text]", {
                oninput: function(e) {
                    fileModel.current = e.target.value;
                },
                value: fileModel.current
            }),
            m("button.button", {
                onclick: function() {
                    fileModel.writeToFile(
                        fileModel.file,
                        fileModel.current,
                        false
                    );
                }
            }, "Write text to file"),
            m("button.button", {
                onclick: function() {
                    fileModel.writeToFile(
                        fileModel.file,
                        fileModel.current,
                        true
                    );
                }
            }, "Append text to file"),
            m("button.button", {
                onclick: function() {
                    fileModel.readFromFile(fileModel.file);
                }
            }, "Read from file"),
            m("div.read-text", fileModel.readText)
        ]);
    }
};

export default fileView;
