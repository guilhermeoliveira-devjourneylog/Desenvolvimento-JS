class NegociacaoController {

  constructor() {
// captura de dados do formulário
// mantendo associação com document usando método .bind()
// this. buscando elementos do document armazenando as propriedades na classe condicionando uma melhor performace
// _ convenção de privacidade apenas os métodos da classe NegociacaoController acessando seus atributos
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');    
        this._inputQuantidade = $('#quantidade');    
        this._inputValor = $('#valor');
    
  }
// método de cancelamento do comportamento de submissão do formulário para captura de dados em adição na lista   
  adiciona(event) {
    event.preventDefault();
    alert('Chamei ação no controller');
//verificando tipo de dado retornado por data.getTime
    console.log(typeof(this._inputData.value));

/* 1ª forma convertendo string data para um objeto date usando expressão regular
    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);
*/

// 2ª forma convertendo string data para um objeto date com paradigma funcional 
    let data = new Date(...
        this._inputData.value
            .split('-')
            .map((item, indice) => {
              if(indice == 1) {
                return item - 1;
              }
              return item;
            })
    );
    console.log(data);
//instância de negociacao
    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
      );   
    console.log(negociacao);
    console.log(this._inputData.value);
    console.log(this._inputQuantidade.value);
    console.log(this._inputValor.value);
  } 
}