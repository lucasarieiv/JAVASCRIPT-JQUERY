var score = 75;  // Score
var msg;

if (score >= 50) { // Se Score for 50 ou mais
  msg = 'Congratulations!';
  msg += ' Proceed to the next round.'
}

var el = document.getElementById('level');
el.textContent = msg;
