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
function mudarImagem2(direcao, cardIndex) {
    // Seleciona o carrossel específico de acordo com o índice cardIndex
    const carrossel = document.querySelectorAll(".cards")[cardIndex];  // Encontrar o carrossel correto pelo índice

    const items = carrossel.querySelectorAll(".itemCard"); // Seleciona apenas os itens dentro desse carrossel específico
    
    // Ajusta o índice para que ele mude conforme a direção
    let currentIndex = carrossel.getAttribute('data-index') || 0; // Se já existe um índice salvo, usa-o, senão inicia com 0
    currentIndex = parseInt(currentIndex);

    currentIndex += direcao;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    // Atualiza a posição do carrossel
    carrossel.querySelector(".CardsTrocar").style.transform = `translateX(${-currentIndex * 100}%)`;

    // Atualiza o índice armazenado para o próximo clique
    carrossel.setAttribute('data-index', currentIndex);
}
