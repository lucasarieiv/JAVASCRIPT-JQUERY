var score1 = 90;       // Score da rodada1
var score2 = 95;       // Score da rodada2
var highScore1 = 75;   // Score alto da rodada1
var highScore2 = 95;   // Score alto da rodada2


// Verifica se o score é mais alto que os scores altos atuais
var comparison = (score1 + score2) < (highScore1 + highScore2);

var el = document.getElementById('level');
el.innerHTML = 'Novo Record: ' + (score1 + score2);
