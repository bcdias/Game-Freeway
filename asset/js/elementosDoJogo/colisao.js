import vaquinha from "./vaquinha/vaquinha.js";
import carros from "./carro/carros.js";
import { voltaVaquinha } from "./vaquinha/movimentaVaquinha.js";
import { descontaPonto } from "./marcaPontos.js";
import { somColidiu } from "../sons.js";

const colidiu = ()=> {
    for (let i = 0; i < carros.length; i++){
        if(vaquinha.xInicial < carros[i].xInicial + carros[i].comprimento &&
            vaquinha.xInicial + vaquinha.comprimento > carros[i].xInicial &&
            vaquinha.yInicial < carros[i].yInicial + carros[i].altura &&
            vaquinha.yInicial + vaquinha.altura > carros[i].yInicial){
                somColidiu.play()
                descontaPonto();
                voltaVaquinha();
            }
    }
}

export default colidiu