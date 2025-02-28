var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");  

menuButton.addEventListener("click", function() {
if(menu.style.display === "block"){
    menu.style.display ="none"
}else{
    menu.style.display ="block"
}
})

let index = 0 

function mudarImagem(direcao) {
    const items = document.querySelectorAll(".item");

    index += direcao;

    if (index < 0) {
        index = items.length - 1;
    }else if (index >= items.length) {
        index = 0  ;
    }
    
    const banner = document.querySelector(".banner");
    banner.style.transform = `translateX(${-index * 100}%) `;
}


function iniciarCarrossel() {
    setInterval(()=>{
        mudarImagem(1)
    },3000)
    
}

window.onload = iniciarCarrossel;

function mudarImagem2(direcao) {
    const items = document.querySelectorAll(".itemCard");

    index += direcao;

    if (index < 0) {
        index = items.length - 1;
    }else if (index >= items.length) {
        index = 0  ;
    }
    
    const banner = document.querySelector(".CardsTrocar");
    banner.style.transform = `translateX(${-index * 100}%) `;
}

