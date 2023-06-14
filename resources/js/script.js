const image = document.getElementById('hover-element');
const element1 = document.getElementById("hidden-1");
const element2 = document.getElementById("hidden-2");
const element3 = document.getElementById("hidden-3");
const p = document.getElementById("hidden-p");
const input = document.getElementById("password");
const url = document.getElementById("url-link");

window.addEventListener("DOMContentLoaded", (event) => {  
    element1.hidden = true; 
    element2.hidden = true; 
    element3.hidden = true;
    input.hidden = true;
    p.hidden = true;
    url.hidden = true;
});

image.addEventListener("mouseenter", (event) => {
    element1.hidden = false;
    element2.hidden = false;
    element3.hidden = false;
});
image.addEventListener("mouseleave", (event) => {
    element1.hidden = true;
    element2.hidden = true;
    element3.hidden = true;
});

function showInput()
{
    p.hidden = false;
    input.hidden = false;
}

input.addEventListener("change", (event) => {   
    var value = input.value;
    console.log(value);
    if(value == "2022-10-09"){
        url.hidden = false;
        url.href = "https://www.youtube.com/watch?v=Y4EHWRsLcE4";      
    }
});