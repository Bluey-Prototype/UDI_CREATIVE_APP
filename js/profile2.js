/*=========================================
            PESTAÑAS
=========================================*/

const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(item=>{

            item.classList.remove("active");

        });

        contents.forEach(content=>{

            content.classList.remove("active");

        });

        tab.classList.add("active");

        document
        .getElementById(tab.dataset.tab)
        .classList.add("active");

    });

});


/*=========================================
        COMPARTIR PERFIL
=========================================*/

const shareBtn = document.querySelector(".secondary-btn");

if(shareBtn){

    shareBtn.addEventListener("click",()=>{

        alert("En una versión real se compartiría el perfil.");

    });

}


/*=========================================
        EFECTO ESTADÍSTICAS
=========================================*/

const stats = document.querySelectorAll(".stats h3");

stats.forEach(stat=>{

    const finalValue = parseInt(stat.innerText);

    let current = 0;

    const timer = setInterval(()=>{

        current++;

        stat.innerText = current;

        if(current >= finalValue){

            clearInterval(timer);

            stat.innerText = finalValue;

        }

    },20);

});