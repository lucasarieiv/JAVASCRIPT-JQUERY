var score1 = 8;   // Score da rodada 1
var score2 = 8;   // Score da rodada 2
var pass1 = 6;    // Marca de aprovação da rodada 1
var pass2 = 6;    // Marca de aprovação da rodada 2

// Verifica se o usuário passou em uma das rodadas, armazena o
// resultado em uma variável
var minPass = ((score1 >= pass1) || (score2 >= pass2));

// Cria a mensagem
var msg = 'Resit required: ' + !(minPass);

// Imprime a mensagem na página
var el = document.getElementById('level');
el.textContent = msg;
