var firstItem = document.getElementById('one');   // Obtém o 1° item da lista

if (firstItem.hasAttribute('class')) {             // Se for um atributo de class
  var attr = firstItem.getAttribute('class');     // Obtém o atributo

  // Adiciona o valor do atributo depois da lista
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>O primeiro item tem uma class chamada: ' + attr + '</p>';

}
