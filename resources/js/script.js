const image = document.getElementById('hover-element');
const element1 = document.getElementById("hidden-1");
const element2 = document.getElementById("hidden-2");
const element3 = document.getElementById("hidden-3");
const p = document.getElementById("hidden-p");
const input = document.getElementById("password");
const url = document.getElementById("url-link");
const frases = ["Sinto saudades do seu cheiro", "To com saudadessss", "Te abraçar é o que mais me aquece", 
    "Você é a melhor parte de mim", "Seu sorriso é o que desperta o meu :)", "Ficar contigo é a melhor terapia do mundo", 
    "Você é simplesmente TUDO pra mim", "Eu amo ficar contigo", "Obrigado por estar sempre ao meu lado", 
    "Estarei sempre ao seu lado", "Gosto sempre de te ouvir falar", "Te amo com todo o meu coração", "Sem ti eu me perco",
    "Pss pss pss cadê a minha gatinha?", "Demonstro meu amor tentando te irritar hihi",
    "Você é o Sol que ilumina meu dia", "Dormir e acordar ao seu lado... que sonho", "Quero ver a chuva cair ao seu lado",
    "Bora morar juntos?", "Todo dia vou te acordar com um 'Bom dia'", "Não paro de pensar em vc nem por um segundo",
    "ME LIGAAAA que eu to com sdds :,(", "Melhor coisa é chegar em casa e poder te ligar", "Quero passar meu dia todo com vc",
    "Vamos assistir um filminho e dormir juntinhos?", "Quero te fazer feliz todos os dias", "Oie <3", "Ta procurando alguma frase? hehe",
    "Parabéns!! vc ganhou o sorteio, pode me levar pra casa", "Será que vc entra aqui todos os dias?...", "Fiz esse site pra ti pq te amo muito",
    "Ainda ouço nossa playlist e quando ouço penso em vc", "Obrigado pelas suas cartas!!", "O Yoshi que vc me deu foi a coisa mais fofa que ja me deram",
    "Mal espero pra te ver dnv", "O padol foi mt divertido, obrigado!", "Boa sorte na sua viagem até Brasília"];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener("DOMContentLoaded", (event) => {  
    element1.hidden = true; 
    element2.hidden = true; 
    element3.hidden = true;
    input.hidden = true;
    p.hidden = true;    
    url.hidden = true;
});

image.addEventListener("mouseenter", (event) => {
    var text1 = "";
    var text2 = "";
    var text3 = "";
    
    while(text1 == text2 || text2 == text3){
        text1 = frases[getRandomArbitrary(0, frases.length)];
        text2 = frases[getRandomArbitrary(0, frases.length)];
        text3 = frases[getRandomArbitrary(0, frases.length)];
    }

    element1.textContent = text1;
    element2.textContent = text2;
    element3.textContent = text3;

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
        url.outerHTML = '<iframe width="560" height="315" style="width: 50vh; heigth: 37vh;" src="https://www.youtube.com/embed/Y4EHWRsLcE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';      
    }
});