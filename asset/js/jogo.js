import cenario from "./elementosDoJogo/Cenario.js";
import vaquinha from "./elementosDoJogo/vaquinha.js";
import carros from "./elementosDoJogo/carros.js";
import movimentaCarros from "./elementosDoJogo/movimentaCarros.js";
import movimentaVaquinha from "./elementosDoJogo/movimentaVaquinha.js";
import marcaPonto from "./elementosDoJogo/marcaPontos.js";

// Criando canvas
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

function desenhaCenario(){
    //Carrega imagem
    const imgCenario = new Image();
    imgCenario.src = './asset/img/estrada.png'; //cenário

    //Desenha cenário
    contexto.drawImage(imgCenario, cenario.xInicial, cenario.yInicial, cenario.comprimento, cenario.altura);
}


function desenhaVaquinha(){
    //Carrega imagem
    const imgVaquinha = new Image();
    imgVaquinha.src = './asset/img/ator-1.png'; //vaquinha

    //Desenha a vaquinha
    contexto.drawImage(imgVaquinha, vaquinha.xInicial, vaquinha.yInicial, vaquinha.comprimento, vaquinha.altura);

}


function desenhaCarros(){
    //Carrega imagens
    const imgCarroVerde = new Image();
    imgCarroVerde.src = './asset/img/carroVerde.png'; //carro verde
    const imgCarroPreto = new Image();
    imgCarroPreto.src = './asset/img/carroPreto.png'; //carro verde
    const imgCarroAmarelo = new Image();
    imgCarroAmarelo.src = './asset/img/carroAmarelo.png'; //carro verde
    const listaImgCarros = [imgCarroVerde, imgCarroPreto, imgCarroAmarelo, imgCarroVerde, imgCarroPreto, imgCarroAmarelo];

    //Desenha os carros
    for(let i = 0; i < carros.length; i++){
        contexto.drawImage(listaImgCarros[i], carros[i].xInicial, carros[i].yInicial, carros[i].comprimento, carros[i].altura);
    } 
    
}

// Desenha placar
let pontos = 0;
function desenhaPlacar(){
    contexto.fillStyle = 'yellow';
    contexto.font =  '48px serif';
    contexto.fillText(pontos, 100, 45);
}
 
//Desenhando o jogo
function loop(){
    pontos = marcaPonto(vaquinha.yInicial);
    movimentaVaquinha();
    movimentaCarros();
    desenhaCenario();
    desenhaVaquinha();
    desenhaCarros();
    desenhaPlacar();
    requestAnimationFrame(loop);
}
loop();
