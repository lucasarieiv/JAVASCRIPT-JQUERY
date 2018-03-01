var scores = [24, 32, 17];    // Array de scores
var arrayLength = scores.length; // Items no Array
var roundNumber = 0;             // Rodada Atual
var msg = '';                    // Mensagem

// Itera pelos itens no array
for (i = 0; i < arrayLength; i++) {
  // Arrays são baseados em zero (então 0 é rodada 1)
  // Adiciona 1 á rodada atual
  roundNumber = (i + 1);

  // Escreve a rodada atual na mensagem
  msg += 'Round ' + roundNumber + ': ';

  // Obtém o score do array de scores
  msg += scores[i] + '<br />';
}

document.getElementById('level').innerHTML = msg;
