import personagem from "./Personagem.js"

let atributosCenario =  () => {
    let sera = new personagem(0, 50, 1080, 600);
    return sera;
}

const cenario = atributosCenario();

export default cenario

