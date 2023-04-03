export default class DetailComponent extends HTMLElement {
    connectedCallback() {
        let link = document.createElement("a");

        link.textContent = "Se lista";

        link.addEventListener("click", (event) => {
            event.preventDefault();

            this.classList.add("slide-out");

            setTimeout(() => {
                this.classList.remove("slide-out");

                location.hash = "";
            }, 250);
        });

        this.appendChild(link);
    }
}
