import ce from "./utils.js";

function handleClick() {
    console.log("click");
}

let pElement = ce(
    "p.paragraph.blue",
    { textContent: "Hej" },
    { "data-type": "p" },
    { "click": handleClick },
);

document.body.appendChild(pElement);
