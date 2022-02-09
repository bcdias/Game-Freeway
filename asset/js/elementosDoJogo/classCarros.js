export default class criaCarros {
    constructor(yInicial){
        this.yInicial = yInicial;
        this._xInicial = 1000;
        this._comprimento = 70;
        this._altura = 50;
        this._velocidade = 0;
    }
    get xInicial() {return this._xInicial};
    get comprimento() { return this._comprimento};
    get altura() {return this._altura};
    get velocidade() {return this._velocidade};

    set velocidade(velocidade) { this._velocidade = velocidade};
}

