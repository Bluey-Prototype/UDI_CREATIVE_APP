// Animación al abrir una conversación

const chats = document.querySelectorAll(".chat-item");

chats.forEach(chat => {

    chat.addEventListener("click", function () {

        this.style.transform = "scale(0.98)";
        this.style.opacity = ".8";

    });

});