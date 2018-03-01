var i = 1;      // Configura o contador como 1
var msg = '';   // Mensagem

// Armazena a tabuada do 5 em uma variável
do {
  msg += i  + ' x 5 = ' + (i * 5) + '<br />';
  i++
} while (i < 1);


document.getElementById('level').innerHTML = msg;
