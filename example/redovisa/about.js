/* global menu */

"use strict";

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Om";

        var greeting = document.createElement("p");

        greeting.textContent = "Detta är kursen webapp," +
            "där vi skapar tillgängliga och användbara applikationer" +
            "för mobila enheter. Än så länge känns det som en bra kurs.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("free_breakfast");
    };

    return {
        showAbout: showAbout
    };
})(about);
