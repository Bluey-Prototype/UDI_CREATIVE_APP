const buttons = document.querySelectorAll(".filters button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});

const filters = document.querySelectorAll(".filters button");

filters.forEach(button=>{

    button.addEventListener("click",()=>{

        filters.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});