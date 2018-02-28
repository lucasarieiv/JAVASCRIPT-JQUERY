var pass = 50;  // Marca da Aprovação
var score = 90; // Score

// Verifica se o usuário foi aprovado
var hasPassed = score >= pass;

// Escreve a mensagem na página

var el = document.getElementById('level');
el.innerHTML = 'Level Passed: ' + hasPassed + '<br />Score: ' + score ;
