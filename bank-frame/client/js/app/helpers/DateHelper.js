  class DateHelper {
  
  constructor() {
    throw new Error('DateHelper não pode ser instânciada');
  }

//1ª método estático formatando data
      static dataParaTexto(data) {
//interpolação com template string
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;        
        }
//2ª método estático convertendo string data para um objeto date com paradigma funcional 
      static textoParaData(texto) {
//fast fail expressão regular retornando falso
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
          throw new Error('Deve estar no formato aaaa-mm-dd');
        } 
        return new Date(...
          texto.split('-')
          .map((item, indice) => {
            if(indice == 1) {
              return item - 1;
            }
            return item;
          }));
      }
}