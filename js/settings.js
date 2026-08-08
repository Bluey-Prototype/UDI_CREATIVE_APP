/*=========================================
        CERRAR SESIÓN
=========================================*/

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{

        window.location.href = "login.html";

    });

}


/*=========================================
        SWITCHES
=========================================*/

const switches = document.querySelectorAll(".switch input");

switches.forEach(toggle=>{

    toggle.addEventListener("change",()=>{

        console.log("Configuración actualizada");

    });

});