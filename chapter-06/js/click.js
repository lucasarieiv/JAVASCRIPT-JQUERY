// Cria o HTML para a mensagem
var msg = '<div><a id=\"close\" href="#">Close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our severs are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');            // Cria um novo elemento
elNote.setAttribute('id', 'note');                    // Adiciona um id de nota
elNote.innerHTML = msg;                               // Cria a msg
document.body.appendChild(elNote);                    // Insere a msg na página

function dismissNote() {                              // Declara a função
  document.body.removeChild(elNote);                  // Remove a nota
}

var elClose = document.getElementById('close');         // Obtém o botão close
elClose.addEventListener('click', dismissNote, false);  // Clique em close limpa a nota
