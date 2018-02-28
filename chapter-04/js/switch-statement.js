var msg;            // Mensagem
var level = 2;      // Nível

// Determina a mensagem com base no nível
switch (level) {
  case 1:
      msg = 'Good Luck on the first test';
      break;
  case 2:
      msg = 'Second of Three - keep going!';
      break;
  case 3:
      msg = 'Final round, almost there!';
      break;
  default:
      msg = 'Good Luck!';
      break;
}

var el = document.getElementById('level');
el.textContent = msg;
