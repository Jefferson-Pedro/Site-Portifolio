/* -------- NAVIGATION BAR FUNCTION -------- */
function menuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* -------- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING -------- */
window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }

}

/* -------- TYPING EFFECT -------- */
    let typingEffect = new Typed(".typedText", {
        strings : ["Desenvolvedor","Backend Java", "FullStack"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });

/* -------- SCROLL REVEAL ANIMATION -------- */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
    });

/* -------- HOME -------- */
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})

/* -------- PROJECT BOX -------- */
    sr.reveal('.project-box',{interval: 200})

/* -------- HEADINGS -------- */
    sr.reveal('.top-header',{})

/* -------- SCROLL REVEAL LEFT_RIGHT ANIMATION -------- */