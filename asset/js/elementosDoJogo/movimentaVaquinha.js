import vaquinha from "./vaquinha.js";

// Estados das teclas ao iniciar o jogo
let estadoDasTeclas = {
    up: false,
    down: false,
    left: false,
    right: false,
}

// Mudar estado da tecla ao prescionar
document.addEventListener("keydown", (evento) =>{
    if(evento.key == "ArrowUp") estadoDasTeclas.up = true;
    if(evento.key == "ArrowDown") estadoDasTeclas.down = true;
    if(evento.key == "ArrowLeft") estadoDasTeclas.left = true;
    if(evento.key == "ArrowRight") estadoDasTeclas.right = true;
});

// Mudando estado ao soltar a tela
document.addEventListener("keyup", (evento) =>{
    if(evento.key == "ArrowUp") estadoDasTeclas.up = false;
    if(evento.key == "ArrowDown") estadoDasTeclas.down = false;
    if(evento.key == "ArrowLeft") estadoDasTeclas.left = false;
    if(evento.key == "ArrowRight") estadoDasTeclas.right = false;
});

let movimentaVaquinha = () => {
    if(estadoDasTeclas.up) vaquinha.yInicial -= vaquinha.velocidade;
    if(estadoDasTeclas.down) vaquinha.yInicial += vaquinha.velocidade;
    if(estadoDasTeclas.left) vaquinha.xInicial -= vaquinha.velocidade;
    if(estadoDasTeclas.right) vaquinha.xInicial += vaquinha.velocidade;
    if(vaquinha.yInicial >= 605) vaquinha.yInicial = 605;
    if(vaquinha.xInicial <= 0) vaquinha.xInicial = 0;
    if(vaquinha.xInicial + vaquinha.comprimento >= 1080) vaquinha.xInicial = 1040;
    // if(vaquinha.yInicial <= 0) retornaVaquinha();
}

export default movimentaVaquinha