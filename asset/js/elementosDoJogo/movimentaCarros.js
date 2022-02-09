import carros from "./carros.js"


const numeroAleatorio = () =>{
    return (Math.random() * (11 - 5)) + 5;
}
const movimentaCarros = () =>{

    for(let veiculo of carros){
        if(veiculo.xInicial >= 1085){
            veiculo.velocidade = numeroAleatorio();
        }
        veiculo.xInicial -= veiculo.velocidade;
        if( veiculo.xInicial <= -130){
            veiculo.xInicial = 1090;
        }
    }
}

export default movimentaCarros