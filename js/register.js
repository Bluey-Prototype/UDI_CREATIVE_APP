// Mostrar / ocultar contraseña

const eyes = document.querySelectorAll(".password-box i");

eyes.forEach((eye)=>{

    eye.addEventListener("click",()=>{

        const input = eye.previousElementSibling;

        if(input.type==="password"){

            input.type="text";

            eye.classList.replace("fa-eye","fa-eye-slash");

        }else{

            input.type="password";

            eye.classList.replace("fa-eye-slash","fa-eye");

        }

    });

});


// Barra de seguridad

const passwordInput = document.querySelector(".password-box input");

const fill = document.querySelector(".strength-fill");

const text = document.querySelector(".strength-text");

passwordInput.addEventListener("input",()=>{

    const value = passwordInput.value;

    let strength = 0;

    if(value.length >= 8) strength++;

    if(/[A-Z]/.test(value)) strength++;

    if(/[0-9]/.test(value)) strength++;

    if(/[^A-Za-z0-9]/.test(value)) strength++;

    switch(strength){

        case 0:

            fill.style.width="0%";
            fill.style.background="#ddd";
            text.textContent="Ingresa una contraseña";

        break;

        case 1:

            fill.style.width="25%";
            fill.style.background="#ff4d4d";
            text.textContent="Contraseña débil";

        break;

        case 2:

            fill.style.width="50%";
            fill.style.background="#ff9800";
            text.textContent="Contraseña media";

        break;

        case 3:

            fill.style.width="75%";
            fill.style.background="#ffc107";
            text.textContent="Contraseña buena";

        break;

        case 4:

            fill.style.width="100%";
            fill.style.background="#28a745";
            text.textContent="Contraseña fuerte";

        break;

    }

});