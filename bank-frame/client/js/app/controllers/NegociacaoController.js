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

// instância de negociacao
    let negociacao = new Negociacao(
// acessando métodos diretos da classe DateHelper evitando declarações de intâncias      
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
      );   
    console.log(negociacao);
    console.log(DateHelper.dataParaTexto(negociacao.data));  
  } 
}