/* global io */

export default class ChatForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<textarea class="message-textarea" id="message-textarea"></textarea>

        <button class="message-button" id="message-button">Send</button>

        <h2>Sent messages</h2>
        <div id="messages"></div>`;

        window.addEventListener("load", () => {
            this.init();
        }, false);
    }

    init() {
        const socket = io("https://lager-chat.emilfolino.se");

        const textarea = document.getElementById("message-textarea");
        const button = document.getElementById("message-button");
        const messages = document.getElementById("messages");

        button.addEventListener("click", function(event) {
            event.preventDefault();

            if (textarea.value) {
                socket.emit('chat message', textarea.value);
                textarea.value = '';
            }
        });

        socket.on('chat message', (msg) => {
            const item = document.createElement('p');

            item.textContent = msg;

            messages.prepend(item);
        });
    }
}
