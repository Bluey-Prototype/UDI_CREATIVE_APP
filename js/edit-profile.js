/*=========================================
        ETIQUETAS DINÁMICAS
=========================================*/

function createTagSystem(inputId, containerId){

    const input = document.getElementById(inputId);

    const container = document.getElementById(containerId);

    input.addEventListener("keydown",function(e){

        if(e.key==="Enter"){

            e.preventDefault();

            const value=this.value.trim();

            if(value==="") return;

            // Evita etiquetas repetidas
            const repeated=[...container.querySelectorAll(".tag span")]

            .some(tag=>tag.textContent.toLowerCase()===value.toLowerCase());

            if(repeated){

                this.value="";

                return;

            }

            const tag=document.createElement("div");

            tag.className="tag";

            tag.innerHTML=`

                <span>${value}</span>

                <button>&times;</button>

            `;

            tag.querySelector("button").onclick=()=>{

                tag.remove();

            };

            container.appendChild(tag);

            this.value="";

        }

    });

}

createTagSystem("specialtyInput","specialtiesContainer");

createTagSystem("softwareInput","softwareContainer");


/*=========================================
        GUARDAR CAMBIOS
=========================================*/

const saveBtn=document.getElementById("saveBtn");

if(saveBtn){

    saveBtn.addEventListener("click",()=>{

        saveBtn.innerHTML=`

            <i class="fa-solid fa-check"></i>

            Guardado

        `;

        saveBtn.style.background="#198754";

        saveBtn.disabled=true;

        setTimeout(()=>{

            window.location.href="profile.html";

        },1200);

    });

}


/*=========================================
        BOTONES DE FOTO
=========================================*/

document.querySelectorAll(".photo-section button")

.forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Aquí se abriría el selector de imágenes.");

    });

});

