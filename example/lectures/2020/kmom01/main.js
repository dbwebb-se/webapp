(function IIFE() {
    var root = document.getElementById('root');

    var container = document.createElement("div");

    container.className = "container";

    var title = document.createElement("h1");

    title.textContent = "Skolor";

    container.appendChild(title);
    root.appendChild(container);

    // http://api.kolada.se/v2/ou?municipality=1080&title=skola
})();
