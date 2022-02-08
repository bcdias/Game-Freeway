
import personagem from "./Personagem.js"

let atributosVaquinha =  () => {
    let sera = new personagem(500, 605, 40, 40);
    return sera;
}

const vaquinha = atributosVaquinha();

export default vaquinha

