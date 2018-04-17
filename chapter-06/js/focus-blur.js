function checkUsername() {
  var username = el.value;
  if (username.length < 5) {
    elMsg.textContent = 'Not long enough, yet...';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.innerHTML = 'Username must be at least 5 characters';
}

function checkPass() {
  if (pass.value != elPass.value ) {
    elMsgPass.textContent = 'Password Wrongs';
  } else {
    elMsgPass.textContent = '';
  }

}

var el = document.getElementById('username');                            // Entrada username
var elMsg = document.getElementById('feedback');                         // Elemento para armazenar msg
var elPass = document.getElementById('password');
var pass = document.getElementById('password2');
var elMsgPass = document.getElementById('wrongPass');

// Quando a entrada username ganha/perde o foco, chama as funções acima:
el.addEventListener('focus', tipUsername, false);                        // Focus chama tipUsername()
el.addEventListener('blur', checkUsername, false);                       // blur chama checkUsername()
pass.addEventListener('blur', checkPass, false);
