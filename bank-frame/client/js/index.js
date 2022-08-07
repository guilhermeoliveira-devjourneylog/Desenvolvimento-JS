//Lista de campos contidos na página 
  var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
  ];

  console.log(campos);
//Submissão de formulário
    var tbody = document.querySelector('table tbody');
//adicioando evento submit a class form com função callback
    document.querySelector('.form').addEventListener('submit', function(event) {

//permacer dados evitando que a página recarregue 
      event.preventDefault();

//criando novo elemento no DOM 
      var tr = document.createElement('tr');
//acessando elementos da variável campos
      campos.forEach(function(campo) {
//criando novo elemento no DOM 
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
      });
//criando novo elemento no DOM 
      var tdVolume = document.createElement('td');
      tdVolume.textContent = campos[1].value * campos[2].value;

      tr.appendChild(tdVolume);
//incluindo tr como filha de tbody
      tbody.appendChild(tr);

//Posição e valores padrões para os campos        
      campos[0].value = '';
      campos[1].value = 1;
      campos[2].value = '0';
      
      campos[0].focus();
    });