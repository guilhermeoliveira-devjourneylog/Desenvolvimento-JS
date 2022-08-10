  class NegociacaoController {

    constructor() {
//captura de dados do formulário
//mantendo associação com document usando método .bind()
//this. buscando elementos do document armazenando as propriedades na classe condicionando uma melhor performace
//_ convenção de privacidade apenas os métodos da classe NegociacaoController acessando seus atributos
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');    
        this._inputQuantidade = $('#quantidade');    
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();  
  }
//método de cancelamento do comportamento de submissão do formulário para captura de dados em adição na lista   
    adiciona(event) {
    event.preventDefault();
    alert('Chamei ação no controller');

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();
//teste de blindagem da manipulação de dados da lista de negociações
//this._listaNegociacoes.negociacoes.length = 0; // vulnerabilidade apagando lista
//this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); // vulnerabilidade dobrando requisições   
    console.log(this._listaNegociacoes.negociacoes);
  }
//método auxiliar para criar negocição
    _criaNegociacao() {
      return new Negociacao(
//acessando métodos diretos da classe DateHelper evitando declarações de intâncias      
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
      );   
  }
//método para limpar formulário chamado apenas pela própria classe NegociacaoController
    _limpaFormulario() {
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
  }         
}