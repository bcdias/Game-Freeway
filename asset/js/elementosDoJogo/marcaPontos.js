import vaquinha from "./vaquinha.js";


let pontos = 0
function marcaPonto(yVaquinha){
    if(yVaquinha <= 0){
        pontos += 1;
        vaquinha.yInicial = 605;
    }
    return pontos
}

export default marcaPonto


