  class ListaNegociacoes {
//atributo de classe
    constructor() {
      
      this._negociacoes = [];

    }
//método de acesso a propriedades
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    }
//método de leitura das negociações
  get negociacoes() {
//programação defensiva criando um novo objeto com os dados da negociação    
    return [].concat(this._negociacoes);
    }
     
}
 
