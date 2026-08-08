const publicProfile = document.getElementById("publicProfile");

const comments = document.getElementById("allowComments");
const messages = document.getElementById("allowMessages");
const search = document.getElementById("searchProfile");

const status = document.getElementById("privacyStatus");

function updatePrivacy(){

    if(publicProfile.checked){

        comments.disabled = false;
        messages.disabled = false;
        search.disabled = false;

        status.innerHTML = `
            <i class="fa-solid fa-earth-americas"></i>
            <div>
                <h3>Tu perfil es público</h3>
                <p>
                    Otros estudiantes y empresas podrán encontrarte y ver tu portafolio.
                </p>
            </div>
        `;

    }else{

        comments.checked = false;
        messages.checked = false;
        search.checked = false;

        comments.disabled = true;
        messages.disabled = true;
        search.disabled = true;

        status.innerHTML = `
            <i class="fa-solid fa-lock"></i>
            <div>
                <h3>Tu perfil es privado</h3>
                <p>
                    Solo tú podrás ver tu perfil y tu portafolio.
                </p>
            </div>
        `;

    }

}

updatePrivacy();

publicProfile.addEventListener("change", updatePrivacy);