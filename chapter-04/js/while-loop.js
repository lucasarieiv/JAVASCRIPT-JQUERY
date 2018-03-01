var i = 1;    // Configura o contador como 1
var msg = ''; // Mensagem

// Armazena a tabuada do 5 em uma variável
while (i < 10) {
  msg += i + 'x5 = ' + (i * 5) + '<br />';
  i++;
}
document.getElementById('level').innerHTML = msg;
