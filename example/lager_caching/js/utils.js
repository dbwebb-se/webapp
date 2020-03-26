const utils = {
    createElement: function(options) {
        let element = document.createElement(options.type || "div");

        for (let property in options) {
            if (Object.prototype.hasOwnProperty.call(options, property)) {
                element[property] = options[property];
            }
        }

        return element;
    },

    removeNodes: function(id) {
        let element = document.getElementById(id);

        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
};

export default utils;
