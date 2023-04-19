export default function createElement(hyperscript, options, attributes, eventListeners) {
    let hyperscriptArray = hyperscript.split(".");
    let classes = hyperscriptArray.slice(1);

    let element = document.createElement(hyperscriptArray[0]);

    classes.forEach((item) => {
        element.classList.add(item);
    });

    for (let option in options) {
        element[option] = options[option];
    }

    for (let attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    for (let eventListener in eventListeners) {
        element.addEventListener(eventListener, eventListeners[eventListener]);
    }

    return element;
}
