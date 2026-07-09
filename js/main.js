// =================================
// Navbar Glass Effect On Scroll
// =================================


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (!header) return;


    if (window.scrollY > 50) {


        header.style.background =
        "rgba(3,7,18,0.75)";


        header.style.backdropFilter =
        "blur(20px)";


        header.style.borderBottom =
        "1px solid rgba(255,255,255,0.08)";


    } else {


        header.style.background =
        "transparent";


        header.style.backdropFilter =
        "none";


        header.style.borderBottom =
        "none";


    }


});






// =================================
// Mobile Menu
// =================================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){


    menuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


    });


}






// =================================
// Smooth Scroll
// =================================


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});






// =================================
// Close Mobile Menu After Clicking
// =================================


if(navLinks){


    document.querySelectorAll(".nav-links a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            navLinks.classList.remove("active");


        });


    });


}






// =================================
// Reveal Animation On Scroll
// =================================


const reveals =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver(


(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "active"
            );


            // Stop observing after showing

            revealObserver.unobserve(
                entry.target
            );


        }


    });


},


{

    threshold:0.15

}


);



reveals.forEach(element=>{


    revealObserver.observe(element);


});






// =================================
// Hero Animation Elements
// =================================


const heroElements =
document.querySelectorAll(
".hero-text, .hero-card"
);



const heroObserver =
new IntersectionObserver(


(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},


{

    threshold:0.2

}


);



heroElements.forEach(element=>{


    heroObserver.observe(element);


});






// =================================
// Footer Current Year
// =================================


const year =
document.querySelector(".year");



if(year){


    year.textContent =
    new Date().getFullYear();


}