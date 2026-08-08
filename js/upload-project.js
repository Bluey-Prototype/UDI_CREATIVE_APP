/*=========================================
        VISTA PREVIA DE IMAGEN
=========================================*/

const imageUpload = document.getElementById("imageUpload");

const preview = document.getElementById("previewImage");

imageUpload.addEventListener("change",function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;

            preview.style.display = "block";

        }

        reader.readAsDataURL(file);

    }

});


/*=========================================
        CREAR TAGS
=========================================*/

function createTags(inputId,containerId){

    const input=document.getElementById(inputId);

    const container=document.getElementById(containerId);

    input.addEventListener("keydown",function(e){

        if(e.key==="Enter" && this.value.trim()!=""){

            e.preventDefault();

            const tag=document.createElement("div");

            tag.className="tag";

            tag.innerHTML=`
                ${this.value}
                <i class="fa-solid fa-xmark"></i>
            `;

            tag.querySelector("i").addEventListener("click",()=>{

                tag.remove();

            });

            container.appendChild(tag);

            this.value="";

        }

    });

}

createTags("toolInput","toolsContainer");

createTags("tagInput","tagsContainer");


/*=========================================
        PUBLICAR PROYECTO
=========================================*/

const publishBtn=document.getElementById("publishBtn");

publishBtn.addEventListener("click",()=>{

    publishBtn.disabled=true;

    publishBtn.innerHTML=`
        <i class="fa-solid fa-spinner fa-spin"></i>
        Publicando...
    `;

    setTimeout(()=>{

        publishBtn.innerHTML=`
            <i class="fa-solid fa-check"></i>
            Publicado
        `;

        publishBtn.style.background="#198754";

    },1200);

    setTimeout(()=>{

        window.location.href="profile.html";

    },2500);

});