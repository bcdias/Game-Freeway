import { voltaVaquinha } from "./vaquinha/movimentaVaquinha.js";
import vaquinha from "./vaquinha/vaquinha.js";


const placar = {
    pontos: 0,
    xPlacar: 100,
    yPlacar: 45,
}

function marcaPonto(){
    if(vaquinha.yInicial <= 0){
        somaPonto();
        voltaVaquinha();
    }
    return placar.pontos;
}


const somaPonto = () => {
    return placar.pontos += 1;
}

const descontaPonto = () => {
    if(placar.pontos > 0){
        return placar.pontos -= 1;
    }
}

export { marcaPonto, placar, descontaPonto }


