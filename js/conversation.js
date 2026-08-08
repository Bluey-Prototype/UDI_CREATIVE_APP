const input = document.querySelector(".message-box input");
const button = document.querySelector(".message-box button");
const messages = document.querySelector(".messages");

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    const message = document.createElement("div");

    message.className = "message sent";

    const time = new Date();

    const hour = String(time.getHours()).padStart(2,"0");
    const minute = String(time.getMinutes()).padStart(2,"0");

    message.innerHTML = `

        <p>${text}</p>

        <span>${hour}:${minute}</span>

    `;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

    input.value = "";

}