/* global menu */

"use strict";

var presentation = (function () {
    var showPresentation = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Redovisning";

        var greeting = document.createElement("p");

        greeting.textContent = "";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("people");
    };

    return {
        showPresentation: showPresentation
    };
})(presentation);
