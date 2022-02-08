import cenario from "./elementosDoJogo/Cenario.js";
import vaquinha from "./elementosDoJogo/vaquinha.js";

// Criando canvas
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

// Adicionando o cenário
const imgCenario = new Image();
imgCenario.src = './asset/img/estrada.png';
// Adicionando a vaquiha
const imgVaquinha = new Image();
imgVaquinha.src = './asset/img/ator-1.png';


function loop(){
    contexto.drawImage(imgCenario, cenario.xInicial, cenario.yInicial, cenario.comprimento, cenario.altura);
    contexto.drawImage(imgVaquinha, vaquinha.xInicial, vaquinha.yInicial, vaquinha.comprimento, vaquinha.altura);
    requestAnimationFrame(loop);
}

loop();