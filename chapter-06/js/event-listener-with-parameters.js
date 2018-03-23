var elUsername = document.getElementById('username');             // Obtém a entrada Username
var elMsg = document.getElementById('feedback');                  // Obtém o el feedback

function checkUsername(minLength) {                               // Declara a função
  if (elUsername.value.length < minLength) {                      // Se username for muito curto
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {                                                        // Caso contrário
    elMsg.innerHTML = '';                                         // Limpa msg
  }
}

elUsername.addEventListener('blur', function() {                  // Ao perder o foco
  checkUsername(5);                                               // Passa args aqui
}, false);
