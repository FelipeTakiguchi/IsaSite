const image = document.getElementById('hover-element');
const element1 = document.getElementById("hidden-1");
const element2 = document.getElementById("hidden-2");
const element3 = document.getElementById("hidden-3");

window.addEventListener("DOMContentLoaded", (event) => {  
    element1.hidden = true; 
    element2.hidden = true; 
    element3.hidden = true;
});

image.addEventListener("mouseenter", (event) => {
    console.log("Entreeei");
    element1.hidden = false;
    element2.hidden = false;
    element3.hidden = false;
});
image.addEventListener("mouseleave", (event) => {
    element1.hidden = true;
    element2.hidden = true;
    element3.hidden = true;
});