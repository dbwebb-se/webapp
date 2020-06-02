/* global LocalFileSystem */

import m from "mithril";

var fileModel = {
    current: "",
    file: null,
    readText: "",

    createFile: function() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
            console.log('file system open: ' + fs.name);
            fs.root.getFile(
                "data.txt",
                { create: true, exclusive: false },
                function (fileEntry) {
                    console.log(fileEntry);
                    fileModel.file = fileEntry;
                    // fileModel.writeToFile(fileModel.file, null, false);
                    fileModel.readFromFile(fileEntry);
                }, function() {
                    outputError("Error loading file");
                });
        }, function() {
            outputError("Error loading filesystem");
        });
    },

    writeToFile: function(fileEntry, data, append) {
        fileEntry.createWriter(function (fileWriter) {
            fileWriter.onwriteend = function() {
                console.log("Successful file write...");
            };

            fileWriter.onerror = function (e) {
                console.log("Failed file write: " + e.toString());
            };

            if (append) {
                try {
                    fileWriter.seek(fileWriter.length);
                } catch (e) {
                    console.log("file doesn't exist!");
                }
            }

            if (data) {
                fileWriter.write(data);
            }
        });
    },

    readFromFile: function(fileEntry) {
        console.log("readFromFile");
        fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function() {
                console.log(this.result);
                fileModel.readText = this.result;
                m.redraw();
            };

            reader.readAsText(file);
        }, function() {
            outputError("Error reading from file");
        });
    }
};

function outputError(errorMessage) {
    console.error(errorMessage);
}

export default fileModel;
