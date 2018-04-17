function setup() {                                                              // Declara a função
  var textInput;                                                                // Cria variável
  textInput = document.getElementById('username');                              // Obtém a entrada username
  textInput.focus();                                                            // Dá o focu para username
}

window.addEventListener('load', setup, false);                                  // Depois que a página é carregada, chama setup()
