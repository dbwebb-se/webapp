(function IIFE() {
    var root = document.getElementById('root');

    var container = document.createElement("div");

    container.className = "container";

    root.appendChild(container);

    renderList(container);
})();

function renderList(container) {
    container.innerHTML = "";

    var title = document.createElement("h1");

    title.textContent = "Skolor";

    container.appendChild(title);

    let url = "http://api.kolada.se/v2/ou?municipality=1080&title=skola";

    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(result) {
            result.values.forEach(function(school) {
                let element = document.createElement("p");

                element.textContent = school.title;

                element.addEventListener("click", function() {
                    renderSchool(school, container);
                });

                container.appendChild(element);
            });
        });
}

function renderSchool(school, container) {
    container.innerHTML = "";

    var back = document.createElement("p");

    back.textContent = "Tillbaka";

    back.addEventListener("click", function() {
        renderList(container);
    });

    var title = document.createElement("h1");

    title.textContent = school.title;

    var schoolID = document.createElement("p");

    schoolID.textContent = school.id;

    container.appendChild(back);
    container.appendChild(title);
    container.appendChild(schoolID);
}
