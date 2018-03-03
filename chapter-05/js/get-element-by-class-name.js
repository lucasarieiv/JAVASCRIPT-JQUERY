var elements = document.getElementsByClassName("hot"); // Localiza novos itens hot

if ((elements.length) > 2) {
  var el = elements[2];
  el.className = 'select';
}
