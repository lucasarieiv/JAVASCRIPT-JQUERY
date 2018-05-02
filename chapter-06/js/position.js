var sx = document.getElementById('sx');                                         // Elemento para armazenar screenX
var sy = document.getElementById('sy');                                         // Elemento para armazenar screenY
var px = document.getElementById('px');                                         // Elemento para armazenar pageX
var py = document.getElementById('py');                                         // Elemento para armazenar pageY
var cx = document.getElementById('cx');                                         // Elemento para armazenar clientX
var cy = document.getElementById('cy');                                         // Elemento para armazenar clientY

function showPosition(event) {                                                  // Declara a função
  sx.value = event.screenX;                                                     // Atualiza elemento com screenX
  sy.value = event.screenY;                                                     // Atualiza elemento com screenY
  px.value = event.pageX;                                                       // Atualiza elemento com pageX
  py.value = event.pageY;                                                       // Atualiza elemento com pageY
  cx.value = event.clientX;                                                     // Atualiza elemento com clientX
  cy.value = event.clientY;                                                     // Atualiza elemnto com clientY
}


var el = document.getElementById('body');                                       // Obtém o elemento body
el.addEventListener('mousemove', showPosition, false);                          // Move a posição das atualizações
