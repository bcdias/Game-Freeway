import elemento from "./Elementos.js"

export default class personagem extends elemento{
    constructor(xInicial, yInicial, comprimento, altura,){
        super(xInicial, yInicial, comprimento, altura);
        this._velocidade = 0;
    }
    
    get velocidade() {return this._velocidade;}
    set velocidade (velocidade) {
        if(isNaN(velocidade)){
            throw 'Valor deve ser numérico'
        }
        this._velocidade = velocidade;
    }
}

