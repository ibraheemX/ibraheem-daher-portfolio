// =====================================
// Project Page JavaScript
// =====================================


// Footer Year

const year = document.querySelector(".year");

if(year){

    year.textContent = new Date().getFullYear();

}



// =====================================
// Image Lightbox
// =====================================


const images = document.querySelectorAll(".gallery-grid img");


if(images.length > 0){


    // Create Modal

    const modal = document.createElement("div");

    modal.classList.add("image-modal");


    modal.innerHTML = `

        <span class="close-modal">
            &times;
        </span>

        <img src="" alt="Preview">

    `;


    document.body.appendChild(modal);



    const modalImage = modal.querySelector("img");

    const closeBtn = modal.querySelector(".close-modal");



    // Open Image

    images.forEach(image => {


        image.addEventListener("click",()=>{


            modal.classList.add("active");


            modalImage.src = image.src;


        });


    });





    // Close Button

    closeBtn.addEventListener("click",()=>{


        modal.classList.remove("active");


    });





    // Close When Click Outside Image

    modal.addEventListener("click",(e)=>{


        if(e.target === modal){


            modal.classList.remove("active");


        }


    });





    // Keyboard Escape

    document.addEventListener("keydown",(e)=>{


        if(e.key === "Escape"){


            modal.classList.remove("active");


        }


    });


}