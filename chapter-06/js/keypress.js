var el;

function charCount(e) {
  var textEntered, charDisplay, counter, lastkey, message;
  textEntered = document.getElementById('message').value;
  charDisplay = document.getElementById('charactersLeft');
  counter = (180 - (textEntered.length));
  charDisplay.textContent = 'Teclas Restantes: ' + counter;

  lastkey = document.getElementById('lastkey');
  lastkey.textContent = 'Última tecla pressionada em código ASCII foi: ' + e.keyCode;
}

el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);
