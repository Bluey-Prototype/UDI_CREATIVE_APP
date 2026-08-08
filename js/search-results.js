/*=========================================
            FILTROS
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".result-card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card=>{

            if(filter === "all"){

                card.style.display="flex";

            }

            else if(card.classList.contains(filter)){

                card.style.display="flex";

            }

            else{

                card.style.display="none";

            }

        });

    });

});