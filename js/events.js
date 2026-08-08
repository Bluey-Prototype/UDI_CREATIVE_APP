/*==============================
        FILTROS
==============================*/

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});


/*==============================
    CUENTA REGRESIVA
==============================*/

const countdown = document.getElementById("countdown");

if(countdown){

    let days = 5;

    countdown.textContent = days + " días";

    setInterval(() => {

        if(days > 1){

            days--;

            countdown.textContent = days + " días";

        }

    }, 5000);

}


/*==============================
    INSCRIBIRSE
==============================*/

const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach(button => {

    button.addEventListener("click", function(){

        this.classList.toggle("active");

        if(this.classList.contains("active")){

            this.innerHTML = '<i class="fa-solid fa-check"></i> Inscrito';

        }else{

            this.innerHTML = 'Inscribirme';

        }

    });

});


/*=========================================
        EVENTO DESTACADO
=========================================*/

const featuredBtn = document.getElementById("featuredBtn");

const registerMessage = document.getElementById("registerMessage");

featuredBtn.addEventListener("click", function(){

    this.classList.toggle("registered");

    if(this.classList.contains("registered")){

        this.innerHTML = '<i class="fa-solid fa-check"></i> Inscrito';

        registerMessage.classList.add("show");

        setTimeout(()=>{

            registerMessage.classList.remove("show");

        },3000);

    }else{

        this.innerHTML = "Inscribirme";

        registerMessage.classList.remove("show");

    }

});