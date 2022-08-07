class Negociacao {
/*1ª forma
  constructor() {
    this.data = new Date();
    this.quantidade = 1;
    this.valor = 0.0;
*/   

/*2ª forma
 constructor(data, quantidade, valor) {
  this.data = data;
  this.quantidade = quantidade;
  this.valor = valor;
  }

*/

//3ª forma propriedades sendo acessadas somente pelos métodos da classe
 constructor(data, quantidade, valor) {
  this._data = data;
  this._quantidade = quantidade;
  this._valor = valor;

  }

//Definindo métodos acessadores 
  getVolume() {
    return this.quantidade * this.valor;
  }
  
  getVolume() {
  return this._quantidade *this._valor;
}

  getData() {
  return this._data;
}

  getQuantidade() {
  return this._quantidade;
}

  getValor() {
  return this._valor;
  }  
}

