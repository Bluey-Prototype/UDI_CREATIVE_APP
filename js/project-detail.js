/*=========================================
        BOTÓN ME GUSTA
=========================================*/

const likeBtn = document.getElementById("likeBtn");

let liked = false;

likeBtn.addEventListener("click", () => {

    liked = !liked;

    if(liked){

        likeBtn.classList.add("liked");

        likeBtn.innerHTML = "❤️ Te gusta";

    }

    else{

        likeBtn.classList.remove("liked");

        likeBtn.innerHTML = "🤍 Me gusta";

    }

});


/*=========================================
        COMENTARIOS
=========================================*/

const commentBtn = document.getElementById("commentBtn");

const input = document.getElementById("commentInput");

const container = document.getElementById("newComments");

commentBtn.addEventListener("click",()=>{

    if(input.value.trim()==="") return;

    container.innerHTML += `

        <div class="comment">

            <img src="assets/profile.jpg">

            <div>

                <h4>Tú</h4>

                <p>${input.value}</p>

            </div>

        </div>

    `;

    input.value="";

});