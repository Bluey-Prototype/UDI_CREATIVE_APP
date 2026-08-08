const inputs = document.querySelectorAll(".code-inputs input");

// Pasar automáticamente al siguiente cuadro
inputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value = input.value.replace(/[^0-9]/g, "");

        if(input.value !== "" && index < inputs.length - 1){

            inputs[index + 1].focus();

        }

    });

    // Retroceder con Backspace
    input.addEventListener("keydown", (e) => {

        if(e.key === "Backspace" && input.value === "" && index > 0){

            inputs[index - 1].focus();

        }

    });

});

// Temporizador
let seconds = 30;

const countdown = document.getElementById("countdown");

const timer = setInterval(() => {

    seconds--;

    let s = seconds < 10 ? "0" + seconds : seconds;

    countdown.textContent = "00:" + s;

    if(seconds <= 0){

        clearInterval(timer);

        countdown.textContent = "Reenviar";

        countdown.style.cursor = "pointer";

        countdown.style.color = "#E30613";

    }

},1000);


// Botón verificar

document.querySelector(".verify-btn").addEventListener("click", ()=>{

    window.location.href = "new-password.html";

});