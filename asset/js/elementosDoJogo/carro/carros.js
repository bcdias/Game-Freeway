import criaCarros from "./classCarros.js";

//Y dos carros
const yInicial = [65, 160, 255, 345, 435, 525]

//Criando os carros
const carro = {
    verde1: new criaCarros(yInicial[0]),
    preto1: new criaCarros( yInicial[1]),
    amarelo1: new criaCarros(yInicial[2]),
    verde2: new criaCarros(yInicial[3]),
    preto2: new criaCarros(yInicial[4]),
    amarelo2: new criaCarros(yInicial[5]),
}

//Agrupando carros na array
const carros = [carro.verde1, carro.preto1, carro.amarelo1, carro.verde2, carro.preto2, carro.amarelo2];


export default carros