var hamburger = document.getElementById("nav-icon3");

var menu = document.getElementById("menu");

var section = document.getElementById("content");

function ChangeClass(){
    hamburger.classList.toggle("open");
    
     menu.classList.toggle("show-nav");
    section.classList.toggle("show-section");
    
}

hamburger.addEventListener("click", ChangeClass);

