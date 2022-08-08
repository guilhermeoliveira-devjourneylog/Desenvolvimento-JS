class Negociacao {
//propriedades sendo acessadas somente pelos métodos da classe
 constructor(data, quantidade, valor) {
//programação defensiva retornando novo objeto para data 
  this._data = new Date(data.getTime());
  this._quantidade = quantidade;
  this._valor = valor;
  //objeto imutável instanciado a variavel n1
  Object.freeze(this);  
  }

//métodos acessadores
  get volume() {
    return this._quantidade * this._valor;
  }
//programação defensiva retornando novo objeto para data 
  get data() {
  return new Date(this._data.getTime());
  }

  get quantidade() {
  return this._quantidade;
  }

  get valor() {
  return this._valor;
  }  
}