var score = 75;  // Score
var msg = '';    // Mensagem

function congratulate() {
  msg += 'Congratulations! ';
}

if (score >= 50) {
  congratulate();
  msg += 'Proceed to the next round.';
}

var el = document.getElementById('level');
el.innerHTML = msg;
