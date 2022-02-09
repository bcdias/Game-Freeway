import criaCarros from "./classCarros.js";

//Y dos carros
const yInicial = [115, 200, 285, 370, 455, 540]

//Criando os carros
const carroVerde1 = new criaCarros(yInicial[0]);
const carroPreto1 = new criaCarros( yInicial[1]);
const carroAmarelo1 = new criaCarros(yInicial[2]);
const carroVerde2 = new criaCarros(yInicial[3]);
const carroPreto2 = new criaCarros(yInicial[4]);
const carroAmarelo2 = new criaCarros(yInicial[5]);

//Agrupando carros na array
const carros = [carroVerde1, carroPreto1, carroAmarelo1, carroVerde2, carroPreto2, carroAmarelo2];


export default carros