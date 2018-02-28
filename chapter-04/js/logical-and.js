var score1 = 8; // Score da rodada 1
var score2 = 8; // Score da rodada 1
var pass1 = 6;  // Marca de aprovação na rodada 1
var pass2 = 6;  // Marca de aprovação na rodada 2

// Verifica se o usuário passou nas duas rodadas e armazena o
// resultado em uma variável

var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Cria a mensagem
var msg = 'Both round passed: ' + passBoth;

var el = document.getElementById('level');
el.textContent = msg;
