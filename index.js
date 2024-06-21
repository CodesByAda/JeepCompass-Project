const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if(scrollY > 0) {
        navbar.style.transition = ".3s ease-in-out all";
        navbar.style.position = "fixed";
    } else {
        navbar.style.position = "relative";
    }
});


//Hamberg Menu
const menuBtn = document.querySelector(".menu-icon");
const menuIcon = document.querySelector(".fa-bars");
const menuList = document.getElementById("menulinks");
const menuAnimation = document.querySelector(".menulinks");

menuBtn.onclick = () => {
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuAnimation.classList.add("menuanimation");
        menuList.style.display = 'block';

    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuAnimation.classList.remove("menuanimation");
        menuList.style.display = 'none';
    }
};

