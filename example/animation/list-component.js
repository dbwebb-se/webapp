export default class ListComponent extends HTMLElement {
    connectedCallback() {
        let link = document.createElement("a");

        link.textContent = "Se detaljer";

        link.addEventListener("click", (event) => {
            event.preventDefault();

            location.hash = "detail";
        });

        this.appendChild(link);
    }
}
