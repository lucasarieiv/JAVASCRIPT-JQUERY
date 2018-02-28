var pass = 50;    // Marca de aprovação
var score = 75;   // Score Atual
var msg;

// Seleciona mensagem de acordo com o score
if (score >= pass) {
  msg = 'Congratulations, You Passed!';
} else {
  msg = 'Game Over';
}

var el = document.getElementById('level');
el.innerHTML = msg;
