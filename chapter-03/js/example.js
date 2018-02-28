/* O script é colocado dentro de uma expressão de função imediatamente
   invocada que ajuda a proteger o escopo das variáveis */

(function() {
  // PARTE 1: CRIA O OBJETO HOTEL E EXIBE OS DETALHES DA OFERTA

  // CRIA O OBJETO HOTEL USANDO A SINTAXE DE LITERAL
  var hotel = {
    name: 'Park',
    roomRate: 240, // Quantia de dólares
    discount: 15, // Porcentagem de desconto
    offerPrice: function () {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }


// Exibe o nome do hotel, o preço padrã, e o preço especial
var hotelName, roomRate, specialRate;  // Declara as variáveis

hotelName = document.getElementById('hotelName'); // Obtém os elementos
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name; // Exibe o nome od hotel
roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // Exibe o preço
specialRate.textContent = '$' + hotel.offerPrice(); // Exibe a oferta



//PARTE 2: CALCULA E EXIBE OS DETALHES SOBRE O FIM DA OFERTA

var expiryMsg; // Mensagem exibida ao usuário
var today;     // Data de hoje
var elEnds;    // O elemento que exibe a mensagem sobre o fim da oferta

function offerExpires(today) {
  // Declara as variáveis dentro da função para escopo local
  var weekFromToday, day, date, month, year, dayNames, monthNames;

  // Adiciona 7 dias à data/hora atual (adicionando em milissegundos)
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Cria o array para armazenar os nomes dos dias/meses
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August',' September', 'October', 'November', 'December'];

  // Coleta partes da data para mostrar na página
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  // Cria a mensagem
  expiryMsg = 'Offer expires next';
  expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
  return expiryMsg;
}

today = new Date(); // Coloca a data de hoje na variável
elEnds = document.getElementById('offersEnds'); // Obtém o elemento offerEnds
elEnds.innerHTML = offerExpires(today);         // Adciona a mensagem

//Fim da expressão de função imediatamente invocada
}());
