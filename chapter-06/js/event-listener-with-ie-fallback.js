var elUsername = document.getElementById('username');                 // Obtém a entrada username
var elMsg = document.getElementById('feedback');                      // Obtém o elemento feedback

function checkUsername(minLength) {                                   // Declara a função
  if (elUsername.value.length < minLength) {                          // Se username for muito curto
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                                            // Caso contrário
    elMsg.innerHTML = '';                                             // Limpa a mensagem
  }
}

if (elUsername.addEventListener) {                                    // Se o ouvinte de evento for suportado
  elUsername.addEventListener('blur', function() {                    // Quando o username perde o foco
    checkUsername(5);                                                 // Chama checkUsername()
  }, false);                                                          // Captura na fase de propagação
} else {                                                              // Caso contrário
  elUsername.attachEvent('onblur', function() {                       // IE fallback: onblur
    checkUsername(5);                                                 // Chama checkUsername()
  });
}
